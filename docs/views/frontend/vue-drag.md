---
outline: deep
---

# 可拖拽表格

## 安装依赖

```bash
npm install vue-draggable-resizable --save
```

## 封装 ant-design-vue 可拖拽表格

```js
// 可选行表格//mixin混入使用
import Vue from "vue"
import VueDraggableResizable from "vue-draggable-resizable"
Vue.component("vue-draggable-resizable", VueDraggableResizable)
const initDrag = (tbCols) => {
  const draggingMap = {}
  getDraggingMap(tbCols, draggingMap, 1)
  const draggingState = Vue.observable(draggingMap)
  return (h, props, children) => {
    let thDomIndex = 0
    const { key, ...restProps } = props
    let col = {}
    // 处理多级表头
    col = getRenderCoL(key, tbCols)
    if (!col || !col.width) {
      // 这儿要求表格数据中要有宽width属性，若是没有是不会执行下面的拖拽的
      return <th {...restProps}>{children}</th>
    }
    const onDrag = (x) => {
      col.width = Math.max(x, 1)
      draggingState[key] = col.width
      thDomIndex = 0
      loopDom(tbCols, col)
      if (!this.attrBute.isCheck) {
        thDomIndex--
      }
      const colgroup = document.querySelectorAll("colgroup")
      colgroup.forEach((Element) => {
        const childCol = Element.children
        if (childCol[thDomIndex]) childCol[thDomIndex].style.width = col.width + "px"
      })
      resetFixedColumns(col.width)
    }
    const loopDom = (cols, col) => {
      let tag = true
      this._.forEach(cols, (co) => {
        if (co.dataIndex === col.dataIndex) {
          thDomIndex++
          tag = false
          return tag
        }
        if (co.children) {
          tag = loopDom(co.children, col)
          return tag
        } else {
          thDomIndex++
        }
      })
      return tag
    }
    const onDragstop = () => {}

    return (
      <th {...restProps} width={draggingState[key]} class="resize-table-th" dataIndex={col.key}>
        {children}
        <vue-draggable-resizable
          key={col.dataIndex || col.key}
          class="table-draggable-handle"
          w={20}
          h={getResizableHandler(col)}
          x={draggingState[key]}
          z={100}
          axis="x"
          draggable={true}
          resizable={false}
          onDragging={onDrag}
          onDragstop={onDragstop}
        ></vue-draggable-resizable>
      </th>
    )
  }
}
const getResizableHandler = (col) => {
  // let baseH = thDom.getBoundingClientRect().height;
  const size = this.cellsize ? this.cellsize : this.attrBute.cellsize
  const baseH = size === "middle" ? 47 : size === "small" ? 39 : 55
  if (col.isEndNode) return baseH * col.nodeLevel
  else if (col.leafNode && col.nodeLevel < this.maxLevel) {
    return baseH * this.maxLevel
  } else return baseH
}
const resetFixedColumns = (width) => {
  const fixedHead = document.querySelector(".ant-table-fixed-left .ant-table-header")
  const fixedBody = document.querySelector(".ant-table-fixed-left .ant-table-body-outer .ant-table-fixed")
  if (fixedHead) {
    fixedHead.style.width = width + "px"
    fixedBody.style.width = width + "px"
  }
}
const getDraggingMap = (tbCols, draggingMap, nodeLevel) => {
  tbCols.forEach((col, index) => {
    col.nodeLevel = nodeLevel
    col.isEndNode = index === tbCols.length - 1
    this.maxLevel = Math.max(this.maxLevel, nodeLevel)
    if (col.children) {
      col.leafNode = false
      getDraggingMap(col.children, draggingMap, nodeLevel + 1)
    } else {
      col.leafNode = true
      const key = col.dataIndex || col.key // 这儿要求表格数据中要有这两个属性
      draggingMap[key] = col.width || 0
    }
  })
}
const getRenderCoL = (key, tbCols) => {
  let result = ""
  this._.forEach(tbCols, (item) => {
    if (item.children) {
      result = getRenderCoL(key, item.children)
      return !result
    } else {
      const k = item.dataIndex || item.key
      if (k === key) {
        result = item
        return false
      }
    }
  })
  return result
}
export { initDrag }
```

```js
// 非可选行表格//js导入使用
import Vue from "vue"
import VueDraggableResizable from "vue-draggable-resizable"
Vue.component("vue-draggable-resizable", VueDraggableResizable)
const exportResizeableTitle = (columns) => {
  const draggingMap = {}
  columns.forEach((col) => {
    draggingMap[col.key] = col.width
  })
  const draggingState = Vue.observable(draggingMap)
  return (h, props, children) => {
    let thDom = null
    const { key, ...restProps } = props
    const col = columns.find((col) => {
      const k = col.dataIndex || col.key
      return k === key
    })
    if (!col || !col.width) {
      return <th {...restProps}>{children}</th>
    }
    const onDrag = (x) => {
      draggingState[key] = 0
      col.width = Math.max(x, 1)
    }
    const onDragstop = () => {
      draggingState[key] = thDom.getBoundingClientRect().width
    }
    return (
      <th {...restProps} v-ant-ref={(r) => (thDom = r)} width={col.width} class="resize-table-th">
        {children}
        <vue-draggable-resizable
          key={col.key}
          class="table-draggable-handle"
          w={10}
          x={draggingState[key] || col.width}
          z={1}
          axis="x"
          draggable={true}
          resizable={false}
          onDragging={onDrag}
          onDragstop={onDragstop}
        ></vue-draggable-resizable>
      </th>
    )
  }
}

export { exportResizeableTitle }
```

## vue 组件中使用

```vue
<script>
import { initDrag } from "@/utils/drag"
export default {
  mounted() {
    initDrag(this.columns)
  },
}
</script>
```
