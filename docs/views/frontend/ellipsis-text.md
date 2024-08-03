---
outline: deep
---

# 多行文本展开收起的实现方式

## 一、基于-webkit-line-clamp 的实现

### 原理：

核心就是 -webkit-line-clamp 属性，使用 -webkit-line-clamp 来截断行数，具体 css 代码就是下面这个:

```css
div {
  display: -webkit-box; // 弹性伸缩盒子模型
  -webkit-box-orient: vertical; // 从顶部向底部垂直布置子元素
  overflow: hidden; // 隐藏文本溢出内容
  -webkit-line-clamp: 3; // 截断行数
}
```

### 实现过程

1. 设置省略样式，动态传入行数来控制文本截断的行数

```vue
<template>
  <div class="text-ellipsis">
    <div ref="contentEl" class="text-ellipsis-content" :style="{ '-webkit-line-clamp': isExpand ? 'unset' : rows }">
      {{ content }}
    </div>
  </div>
</template>
<style scoped>
.text-ellipsis-content {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  word-break: break-all;
  overflow: hidden;
}
</style>
```

2. js 判断文本是否溢出
   容器的文本内容高度超过容器本身的高度, 就可以判断为文本溢出

```ts
const { offsetHeight, scrollHeight } = contentEl.value
isEll.value = scrollHeight > offsetHeight
```

3. 显示展开、收起

```vue
<span v-if="isEll" class="text-ellipsis-action" @click="onActionClick">{{actionText}}</span>
```

```ts
const actionText = computed(() => {
  return isExpand.value ? props.collapseText : props.expandText
})

// 展开/收起点击
function onActionClick() {
  isExpand.value = !isExpand.value
}
```

4. 优点  
   实现简单,兼容绝大多数主流浏览器，如果要兼容 ie 或者非主流浏览器另说

5. 缺点  
   展开收起无法跟在文本内容末尾,ie 和少数低版本浏览器兼容问题
6. 详细代码

```vue
<template>
  <div class="text-ellipsis">
    <div ref="contentEl" class="text-ellipsis-content" :style="{ '-webkit-line-clamp': isExpand ? 'unset' : rows }">
      {{ content }}
    </div>
    <span v-if="isEll" class="text-ellipsis-action" @click="onActionClick">{{ actionText }}</span>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, onBeforeMount, watch, computed, nextTick } from "vue"

const props = defineProps({
  // 文本内容
  content: {
    type: String,
    default: "",
    required: true,
  },
  // 省略行数
  rows: {
    type: Number,
    default: 5,
  },
  // 展开文案
  expandText: {
    type: String,
    default: "展开",
  },
  // 收起文案
  collapseText: {
    type: String,
    default: "收起",
  },
})

const isEll = ref(false) // 是否省略
const isExpand = ref(false) // 是否展开
const contentEl = ref<null | HTMLElement>(null) // 容器dom

const actionText = computed(() => {
  return isExpand.value ? props.collapseText : props.expandText
})

// 计算内容省略
async function calcEll() {
  await nextTick()
  if (!contentEl.value) return
  const { offsetHeight, scrollHeight } = contentEl.value
  isEll.value = scrollHeight > offsetHeight
}

// 展开/收起点击
function onActionClick() {
  isExpand.value = !isExpand.value
}

onBeforeMount(() => {
  calcEll()
})

watch(() => [props.content, props.rows], calcEll)
</script>

<style lang="less" scoped>
.text-ellipsis {
  white-space: pre-wrap;
}
.text-ellipsis-content {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  word-break: break-all;
  overflow: hidden;
}
.text-ellipsis-action {
  color: #409eff;
  cursor: pointer;
  &.is-block {
    display: block;
  }
  &:hover {
    opacity: 0.85;
  }
}
</style>
```

## 基于 max-height 的实现

### 实现过程

1. 计算最大高度 max-height
   内容设定的最大高度 max-height = 指定行数 row \* 行高，如下：

```ts
const { lineHeight } = window.getComputedStyle(contentEl.value)
maxHeight.value = toNum(lineHeight) * props.rows
```

2. 判断文本内容是否溢出
   文本内容实际高度大于设定的最大高度（max-height）则为文本溢出，如下：

```ts
isEll.value = contentEl.value.scrollHeight > maxHeight.value
```

3. 省略文本末尾添加省略符号 `...`  
   如何让省略符号显示在文本的右下角呢，此处我用的是浮动布局，因为浮动布局有环绕作用，而且不会影响文本内容的布局。  
   首先要用到两个 span 标签，都向右边浮动。一个 span 的作用是占位符，向上撑起高度，而且它本身宽度为 0，不影响文本内容的自身的布局；第二个 span 为填充省略符号的容器，由于浮动的环绕作用，第二个 span 会撑起自身宽度，因为有第一个 span 撑起了高度使第二个 span 刚好处于文本末尾的位置。

```vue
<template>
  <div ref="contentEl" class="text-ellipsis-content" :style="{ maxHeight: isExpand ? 'none' : `${maxHeight}px` }">
    <!-- 占位符 -->
    <span class="text-ellipsis-placeholder" :style="{ height: placeholderHeight + 'px' }"></span>
    <!-- 省略符号 -->
    <span v-if="isEll" ref="tailEl" class="text-ellipsis-tail"> <span class="text-ellipsis-dot" v-if="!isExpand">...</span> </span
    >{{ content }}
  </div>
</template>
<style scoped>
.text-ellipsis-placeholder {
  float: right;
}
.text-ellipsis-tail {
  float: right;
  clear: both;
}
</style>
```

如何让第一个占位符 span 撑起的高度恰好让省略符号的 span 刚好在文本右下角，其实不难，只要用整个容器高度减去省略符号的容器高度即可。

```ts
if (isEll.value) {
  await nextTick()
  if (tailEl.value) {
    placeholderHeight.value = maxHeight.value - tailEl.value.offsetHeight
  }
}
```

4. 增加展开、收起逻辑

```ts
<span v-if="isEll" ref="tailEl" class="text-ellipsis-tail">
  <span class="text-ellipsis-dot" v-if="!isExpand">{{dot}}</span><span v-if="!single" class="text-ellipsis-action" @click="onActionClick">{{actionText}}</span>
</span>


const actionText = computed(() => {
  return isExpand.value ? props.collapseText : props.expandText
})
// 展开/收起点击
function onActionClick () {
  isExpand.value = !isExpand.value
}
```

5. 优点

- 没有兼容问题
- 省略号可以自定义
- 省略号可以跟随在省略文本末尾，也可以单独一行

6. 缺点
   火狐浏览器，如果设置文本内容为 white-space: pre-wrap; 时，text-align: justify; 两端对齐会失效，偶尔会导致省略号跟文本末尾出有一小段空白，有些小瑕疵，但不影响使用。
7. 详细代码

```vue
<template>
  <div class="text-ellipsis" :class="[!isExpand && 'un-expand']">
    <div ref="contentEl" class="text-ellipsis-content" :style="{ maxHeight: isExpand ? 'none' : `${maxHeight}px` }">
      <!-- 占位符 -->
      <span class="text-ellipsis-placeholder" :style="{ height: placeholderHeight + 'px' }"></span>
      <!-- 内容+操作按钮,不留空格 -->
      {{ isExpand ? content : ""
      }}<span v-if="isEll" ref="tailEl" class="text-ellipsis-tail">
        <span class="text-ellipsis-dot" v-if="!isExpand">{{ dot }}</span
        ><span v-if="!single" class="text-ellipsis-action" @click="onActionClick">{{ actionText }}</span> </span
      >{{ isExpand ? "" : content }}
    </div>
    <span v-if="single && isEll" class="text-ellipsis-action" @click="onActionClick">{{ actionText }}</span>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineExpose, ref, onBeforeMount, watch, computed, nextTick } from "vue"

const props = defineProps({
  // 文本内容
  content: {
    type: String,
    default: "",
    required: true,
  },
  // 省略行数
  rows: {
    type: Number,
    default: 5,
  },
  // 展开文案
  expandText: {
    type: String,
    default: "展开",
  },
  // 收起文案
  collapseText: {
    type: String,
    default: "收起",
  },
  // 省略点
  dot: {
    type: String,
    default: "...",
  },
  single: {
    type: Boolean,
    default: false,
  },
})

const isEll = ref(false) // 是否省略
const isExpand = ref(false) // 是否展开
const contentEl = ref<null | HTMLElement>(null) // 容器dom
const tailEl = ref<null | HTMLElement>(null) // 操作按钮dom
const placeholderHeight = ref(0) // 占位符高度
const maxHeight = ref(0) // 最大高度

const actionText = computed(() => {
  return isExpand.value ? props.collapseText : props.expandText
})

function toNum(val: any): number {
  if (!val) return 0

  return parseFloat(val)
}

let lazyToCalc = false // 延迟执行

// 计算内容省略
async function calcEll() {
  await nextTick()
  if (!contentEl.value) return
  // 计算最大高度
  const { lineHeight } = window.getComputedStyle(contentEl.value)
  if (Number.isNaN(lineHeight)) {
    console.warn(`text-ellipsis 组件不能设置line-height为${lineHeight}`)
  }
  maxHeight.value = toNum(lineHeight) * props.rows
  // 判断是否省略内容
  isEll.value = contentEl.value.scrollHeight > maxHeight.value
  // 计算占位符高度: 容器高度 - 操作按钮高度
  if (isEll.value) {
    // 延迟执行,解决内容已经展开时,触发计算,tailEl容器展开时的高度与收起时高度不一致,导致错位
    if (isExpand.value) {
      lazyToCalc = true
      return
    }
    await nextTick()
    if (tailEl.value) {
      placeholderHeight.value = maxHeight.value - tailEl.value.offsetHeight
    }
  }
}

// 展开/收起点击
function onActionClick() {
  isExpand.value = !isExpand.value
  if (lazyToCalc) {
    lazyToCalc = false
    calcEll()
  }
}

onBeforeMount(() => {
  calcEll()
})

watch(() => [props.content, props.rows], calcEll)

defineExpose({
  update: calcEll,
})
</script>

<style lang="less" scoped>
.text-ellipsis {
  line-height: 1.5;
  &.un-expand {
    .text-ellipsis-placeholder {
      float: right;
    }
    .text-ellipsis-tail {
      float: right;
      clear: both;
    }
  }
  &.is-single {
    .text-ellipsis-action {
      display: block;
    }
  }
}
.text-ellipsis-content {
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  word-break: break-word;
  text-justify: inter-character;
  text-align: justify;
  white-space: pre-line;
  // white-space: pre-wrap;
}
.text-ellipsis-action {
  color: #409eff;
  cursor: pointer;
  &:hover {
    opacity: 0.85;
  }
}
</style>
```

## ant-design-mobile 的文本省略

### 实现过程

1. 克隆文本内容的容器  
   为什么要克隆呢，直接在原本的容器上操作不行吗？
   直接上答案，因为需要频繁操作 dom，并获取 dom 位置的值，为避免触发多次重绘重排，需要克隆一个样式、大小一样的容器，并设置 fixed 固定布局，插入到 body 下。

```ts
function cloneBox() {
  if (!boxEl.value) return

  // 复制样式
  const originStyle = window.getComputedStyle(boxEl.value)
  const div = document.createElement("div")
  const styleNames: string[] = Array.prototype.slice.apply(originStyle)
  styleNames.forEach((name) => {
    div.style.setProperty(name, originStyle.getPropertyValue(name))
  })
  // 重置样式
  div.style.position = "fixed"
  div.style.zIndex = "-9999"
  div.style.top = "-9999px"
  div.style.height = "auto"
  div.style.minHeight = "auto"
  div.style.maxHeight = "auto"
  // 插入body
  div.textContent = props.content
  document.body.appendChild(div)
  return div
}
```

2. 计算容器最大高度  
   容器设定的最大高度 = 指定行数 \* 行高 + 上边距 + 下边距

```ts
const div = cloneBox()
if (!div) return
const { paddingBottom, paddingTop, lineHeight } = div.style
// 最大高度: 行高 * 行数 + 上下内边距;
// 补: 加上 1/2 为了增加最大高度的安全范围
const maxHeight = (props.rows + 1 / 2) * toNum(lineHeight) + toNum(paddingTop) + toNum(paddingBottom)
```

3. 计算省略文本  
   由于计算出了容器设定的最大高度 maxHeight，那么，只要将文本内容填充到容器里，如果容器高度小于 maxHeight，则为文本溢出，否则为未溢出。  
   如果文本溢出了，就要去计算省略文本的内容是多少，从容器里将文本一个字一个字地拿出来，从末尾开始拿，拿到恰好容器的高度等于 maxHeight，剩下就是省略文本了。为了加快拿的速度，此时可以使用二分法去加快计算的速度。  
   当然，这里的计算，每次都要在文本末尾加上 `...展开` 后缀去计算（这个是可配置的，代码是 `dot + expandText`）。

```ts
// 内容溢出,则进行文本省略
if (maxHeight < div.offsetHeight) {
  isEll.value = true
  const ellText = calcEllTextEnd(div, maxHeight)
  text.value = ellText
} else {
  // 内容未溢出
  isEll.value = false
  text.value = props.content
}

// 计算省略的文本内容(结束位置)
function calcEllTextEnd(div: HTMLElement, maxHeight: number) {
  // 二分法计算省略时的文本
  const { content, dot, expandText, single } = props
  let l = 0
  let r = content.length
  let res = -1

  while (l <= r) {
    const mid = Math.floor((l + r) / 2)
    div.textContent = content.slice(0, mid) + dot + (single ? "" : expandText)
    if (div.offsetHeight <= maxHeight) {
      // 未溢出
      l = mid + 1
      res = mid // 记录满足条件的值
    } else {
      // 溢出
      r = mid - 1
    }
  }
  return content.slice(0, res) + dot
}
```

4. 展示在页面

```vue
<template>
  <div class="text-ellipsis" ref="boxEl">
    {{ textVisible
    }}<span v-if="isEll" :class="single && 'is-block'" class="text-ellipsis-action" @click="onActionClick">{{ actionText }}</span>
  </div>
</template>
<script>
const actionText = computed(() => {
  return isExpand.value ? props.collapseText : props.expandText
})

const textVisible = computed(() => {
  return isExpand.value ? props.content : text.value
})

// 展开/收起点击
function onActionClick() {
  isExpand.value = !isExpand.value
}
</script>
```

5. 加上 dom 监听  
   如果容器的尺寸变化了，计算出的省略文本就不正确了，需要重新计算，这里加上一个 dom 监听即可。

```ts
import ResizeObserver from "resize-observer-polyfill"

observer = new ResizeObserver(() => {
  calcContent()
})
observer.observe(boxEl.value)
```

6. 省略的位置
   省略的位置可以是在开头、中间、结尾，就要稍微改下省略文本的计算方式。
7. 优点

- ant-design-mobile 实现方案真的不错
- 支持省略位置，可以在开头、中间、结尾

8. 缺点

- 计算有点复杂，需要耗费一点计算量

## 封装 el-tooltip 自动显示隐藏

```vue
<script lang="ts" setup>
interface Props {
  content: string
}
const popos = defineProps<Props>()
const disableTip = ref(true)
const tooltipRef = ref<HTMLDivElement>()
async function calcEll() {
  await nextTick()
  if (!tooltipRef.value) return
  const { offsetWidth, scrollWidth } = tooltipRef.value
  disableTip.value = scrollWidth <= offsetWidth
}
onBeforeMount(() => {
  calcEll()
})
</script>

<template>
  <el-tooltip effect="dark" placement="top" :disabled="disableTip" v-bind="$attrs">
    <template #content>
      <div>{{ content }}</div>
    </template>
    <div ref="tooltipRef" class="tooltip-content">
      {{ content }}
    </div>
  </el-tooltip>
</template>

<style scoped lang="less">
.tooltip-content {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis; //文本溢出显示省略号
  white-space: nowrap; //文本不会换行
}
</style>
```
