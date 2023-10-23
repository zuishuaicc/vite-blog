---
outline: deep
---

##  安装依赖
```bash
npm i vue-to-pdf --save
```
##  全局注册组件
```js
import vueToPdf from 'vue-to-pdf';
Vue.use(vueToPdf);
```
##  组件使用
```vue
<script>
methods:{
  //导出pdf
	this.$PDFSave(dom, '我的文件')
  //获取pdf的blob地址
  var promiseObj = this.$PDFOutput(this.$refs['box'])
 	 promiseObj.then((value) => {
      console.log(value)
  }) 
}
</script>
 
```