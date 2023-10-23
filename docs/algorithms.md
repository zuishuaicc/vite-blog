**替换树状穿梭框数据源中的key名字**
```js
const replaceKey = (list) => {
     const arr = []
     list.forEach(item => {
       const obj = {}
       for (const k in item) {
         if (item[k] instanceof Array) {
           obj[k] = replaceKey(item[k])
         } else {
           if (k === 'name') {
             obj['title'] = item[k]
           } else if (k === 'bzkid') {
             obj['key'] = item[k]
           } else {
             obj[k] = item[k]
           }
         }
       }
       arr.push(obj)
     })
     return arr
   }
```
**扁平化树状数据源**
```js
const flatten = (list = []) => {
  let newList = []
  list.forEach(item => {
    const {children,...rest} = item
    newList.push(rest)
    if(children&&children.length){
     newList=[...newList,...flatten(children)] 
    }
  })
  return newList
}
```
**接收文件流下载文件**
```js
async download (record) {
      var params = {
        uuid: record.uuid
      }
      try {
        const res = await download(params)
        const blob = new Blob([res], {})
        if (window.navigator.msSaveOrOpenBlob) {
          navigator.msSaveBlob(blob, record.fjmc)
        } else {
          var link = document.createElement('a')
          var href = window.URL.createObjectURL(blob)
          link.setAttribute('href', href)
          link.setAttribute('download', record.fjmc)
       	  // 触发a的单击事件
          // link.click()
          let event = new MouseEvent('click');
          link.dispatchEvent(event);
          //移除a连接
          window.URL.revokeObjectURL(link.href)
        }
      } catch (err) {
        console.log(err)
      }
    },
```

**文件流转blob**

```js
const blob=new Blob([res],{type:'application/vnd.ms-excel'})//xlxs
const blob=new Blob([res],{type:'zip;charset=utf-8'})//zip
```

**blob转base64算法**

```js
getBase64 (file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = error => reject(error)
      })
    }
```

**base64转二进制流**

```js
//base64解析为二进制 入参base64t图片
const base64Parser = (dataURL) => {
  const base64Regex =/^data:image\/(png|jpg|svg|svg\+xml);base64,/
  if (typeof dataURL !== "string" ||!base64Regex.test(dataURL)) return false
  const stringBase64 = dataURL.replace(base64Regex, "")
  const binaryString = window.atob(stringBase64)
  const len = binaryString.length
  const bytes = new Uint8Array(len)
  for (let i = 0; i < len; i++){
    const ascii = binaryString.charCodeAt(i)
    bytes[i] = ascii
  }
  return bytes.buffer
}
```

**获取base64图片的属性**

```js
let newImage = new Image()
// 这里将src传入需要获取信息的图片地址或base64
newImage.src = base64
// onload是异步的,封装的话可以用promise
newImage.onload = () => {
  // 输出图片信息 比如可以获取图片宽高
  console.log(newImage)
  console.log(newImage.width)
  console.log(newImage.height)
}
```

**下划线与驼峰互转**

```js
// 下划线转换驼峰
function toHump(name) {
    return name.replace(/\_(\w)/g, function(all, letter){
        return letter.toUpperCase();
    });
}
// 驼峰转换下划线
function toLine(name) {
  return name.replace(/([A-Z])/g,"_$1").toLowerCase();
}
 
```

**截取去除路由base,并在新窗口中打开路由**

```js
let path = 需要跳转的路由
let base = window.location.href
base = base.substring(0,base.indexOf('基路由地址'))
window.open(base+path,'_blank')
```

**根据id找出树结构数据中的对应项**

```js
@输入参数 id： 要查找数据对应的id
@输入参数 list： 要查询的树形结构数组
@输出：返回该数据或null
// 方法一
function findItemById(id, list) {
  let res = list.find(item => item.id == id)
  if (res) {
    return res
  } else {
      list.forEach(item=>{
          if(item.children instanceof Array && item.children.length>0){
              const subRes = findItemById(id,item.children)
              if(subRes){
                  res = subRes
              }
          }
      })
    /*for (let i=0; i<list.length; i++) {
      if (list[i].children instanceof Array && list[i].children.length > 0) {
        res = findItemById(id, list[i].children)
        if(res){
          return res
        }
      }
    }*/
   // return null
   return res 
  }
}
// 方法二
function findItemById(id: string, list: any) {
  for (const node of list) {
    if (node.id === id) {
      return node
    }
   if(node.children){
      const foundNode: any = findItemById(id, node.children)
      if (foundNode) {
          return foundNode
      }
   }
  }
  return null
}

```

**实现文件上传进度**

```js
// 文件上传接口，添加onUploadProgress获取上传进度信息
export function apiImport (data,onUploadProgress) {
  return request({
    url: 'xxx',
    method: 'post',
    headers: { 'Content-Type': 'multipart/form-data' },
    responseType: 'blob',
    data: data,
    onUploadProgress//添加进度事件
  })
}
//定义进度事件
const uploadEvent = (progressEvent) => {
    //计算进度
          this.progressPercent = Number(
            ((progressEvent.loaded / progressEvent.total) * 100).toFixed(2)
          );
        };
// 接口上传文件传入进度事件
        await apiImport(formData, uploadEvent)
```

**vue2全局注册扩展api组件**

```js
import Vue from 'vue'
import Custom from '@/components/outWorkerComp/Custom.vue'
const CustomComponent = Vue.extend(Custome)
const MyPlugin = {}
MyPlugin.install = function (Vue, options) {

  Vue.prototype.$showCustom = function () {
    var instance = new CustomComponent().$mount()
    document.body.appendChild(instance.$el) // 添加到 body 标签之中
  }
}
export default MyPlugin
//main.js中use

```

**绝对路径/相对路径判断**

```js
//判断绝对路径
export function isAbsoluteURL(url: string): boolean {
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url)
}
//相对路径拼接基地址
export function combineURL(baseURL: string, relativeURL?: string): string {
  return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL
}
```

**去除字符串中的HTML标签**

```js
const pureStr = str.replace(/<[^<]*>/g,'')
```

**读取剪切板上的excel数据**

```js
document.addEventListener('paste', event => {
  // event里的clipboardData对象
  const html = event.clipboardData.getData('text/html');
  const excelDocument = new DOMParser().parseFromString(html,'text/html');
  // 加载所有的行
  const tableDom = excelDocument.querySelectorAll('table tr')
  const tableData = []
  for(const trNode of tableDom){
      const trData = []
      for(const tdNode of trNode.children){
          trData.push(tdNode.innerText)
      }
      tableData.push(trData)
  }
  console.log(tableData)//嵌套表格数据结果
})
```

**过滤树节点菜单数据**

```js
function filterTreeData(
  keyWord: string,
  data: FileMenu,
  attribute: string = 'name'
) {
  return data.filter((item: any) => {
    const hasChildren = item.children && item.children.length > 0
    const isMatch = item[attribute].includes(keyWord)
    if (hasChildren) {
      item.children = filterTreeData(keyWord, item.children)
      return item.children.length > 0
    } else {
      return isMatch
    }
  })
}
```

**h5判断ios和Android**

```js
 // 判断iOS 
function isIOS() {
  const u = navigator.userAgent
  return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
}

 // 判断android 
export const isAndroid = ()=>{
    let u = navigator.userAgent;
    let android = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; 
    return android
}
```

**一维数组转二位数组**

```js
const arrTrans = (num, arr) => {
  const iconsArr = []; // 声明外层数组
  arr.forEach((item, index) => {
    const page = Math.floor(index / num); // 计算该元素应为第几个元素组内
    if (!iconsArr[page]) { // 判断要加入的分组数组是否存在
      iconsArr[page] = [];
    }
    iconsArr[page].push(item);
  });
  return iconsArr;
}
```

**批量压缩下载文件**

```js
/**
 * 获取文件
 * @param url
 * @returns {Promise<any>}
 */
const getBlob = (url) => {
  return new Promise((resolve) => {
    const xhr = new XMLHttpRequest()

    xhr.open('GET', url, true)
    xhr.responseType = 'blob'
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(xhr.response)
      }
    }

    xhr.send()
  })
}

/**
 * 批量打包zip包下载
 * @param urlArr Array [{url: 下载文件的路径, fileName: 下载文件名称}]
 * @param filename zip文件名
 */
export const download = (urlArr, filename = '打包下载') => {
  if (!urlArr.length > 0) return
  const zip = new JSZip()
  const cache = {}
  const promises = []
  urlArr.forEach((item) => {
    const promise = getBlob(item.url).then((data) => { // 下载文件, 并存成ArrayBuffer对象
      zip.file(item.fileName, data, { binary: true }) // 逐个添加文件
      cache[item.fileName] = data
    })
    promises.push(promise)
  })

  Promise.all(promises).then(() => {
    zip.generateAsync({ type: 'blob' }).then((content) => { // 生成二进制流
      FileSaver.saveAs(content, `${filename}.zip`) // 利用file-saver保存文件
    })
  })
}
```
