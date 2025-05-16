---
outline: deep
---

# vue3批量设置动态ref
## 1.templete模版中设置
```vue
<template v-for="item in selectList">
	<el-select v-model="item.value" :ref="el => setRef(el, item)">
	    <el-option
	      v-for="v in item.options"
	      :key="v.value"
	      :label="v.label"
	      :value="v.value"
	    />
	  </el-select>
 </template>
```
## 2.script中设置
```ts
const state = reactive({
	selectList:[
		{ key:'aaa', value:'', options:[{ label:'测试', value:'1' }]},
		{ key:'bbb', value:'', options:[{ label:'测试', value:'1' }]} 
	]
})
const { selectList } = toRefs(state)
const selectRef = ref<{[key:string]:HTMLElement}>({});

//动态设置ref
const setRef= (el, item) => {
  if (el) {
    selectRef.value[item.key] = el
  }
}

// 打印出来的值为 动态绑定的选择框aaa的ref属性

```