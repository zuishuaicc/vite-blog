**安装依赖**
```bash
-- 安装 docxtemplater
npm install docxtemplater pizzip  --save

-- 安装 jszip-utils
npm install jszip-utils --save 

-- 安装 jszip
npm install jszip --save

-- 安装 FileSaver
npm install file-saver --save

--安装 docxtemplater-image-module-free
npm docxtemplater-image-module-free --save

```
**先定义一个word处理方法**
```js
import PizZip from 'pizzip'
import Docxtemplater from 'docxtemplater'
import JSZipUtils from 'jszip-utils'
import { saveAs } from 'file-saver'
import ImageModule from 'docxtemplater-image-module-free'
/**
 * 
 * @param {*object} data 模板变量字段数据
 * @param {*string} name 生成word文件名字
 * @param {*string} template 加载的word模板文件
 */
//图片解析配置项
const imageOptions = {
  getImage: (tagValue, tagName)=> {
    const base64Value = base64Parser(tagValue)
    return base64Value
  },
  getSize: (img, tagValue, tagName) => {
    const maxWidth = 200
    const maxHeight = 200
    return new Promise((resolve, reject) => {
      const image = new Image()
      image.src = tagValue
      image.onload = () => {
        const sizeObj = {
          width: image.width,
          height: image.height
        }
        const widthRatio = sizeObj.width / maxWidth;
        const heightRatio = sizeObj.height / maxHeight;
        if (widthRatio < 1 && heightRatio < 1) {
          resolve([sizeObj.width, sizeObj.height])
        }
        let finalWidth, finalHeight;
        if (widthRatio > heightRatio) {
          finalWidth = maxWidth;
          finalHeight = sizeObj.height / widthRatio;
        } else {
          finalHeight = maxHeight;
          finalWidth = sizeObj.width / heightRatio;
        }
        resolve([Math.round(finalWidth), Math.round(finalHeight)])
      }
      image.onerror = (error) => {
        console.log(error)
        reject(error)
      }  
    })
    // return [maxWidth,maxHeight]
  },
  getProps: (img,tagValue,tagName) => {
    return {
      align:'center'
    }
  }
}
//base64解析为二进制
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
//读取模板
export const creatWord = (data,name,template) => {
  JSZipUtils.getBinaryContent(template,async(error,content)=>{
    if(error){
      throw error
    }
    const zip = new PizZip(content)
    const doc = new Docxtemplater(zip, {
      modules:[new ImageModule(imageOptions)]
    })
    try {
      //异步获取文件
      await doc.renderAsync(data)
      const outFile = doc.getZip().generate({
        type:'blob',
        mimeType:'application/vnd.openxmlformats-officedocment.wordprocessingml.document'
      })    
      saveAs(outFile,name)
    } catch (error) {
      const e = {
        message:error.message,
        name:error.name,
        stack:error.stack,
        properties:error.properties
      }
      console.log(e);
      throw error
    }
  })
}
```
**在vue中使用**
```vue

<script>
import Docxtemplater from 'docxtemplater'
import PizZip from 'pizzip'
import JSZipUtils from 'jszip-utils'
import { saveAs } from 'file-saver'

// 点击导出word
const exportWord = () => {
  // 读取并获得模板文件的二进制内容，模板路径读取public或者static目录下
  JSZipUtils.getBinaryContent('word模板路径.docx', function (error, content) {
    // model.docx是模板。我们在导出的时候，会根据此模板来导出对应的数据
    // 抛出异常
    if (error) {
      throw error
    }
    // 创建一个PizZip实例，内容为模板的内容
    const zip = new PizZip(content)
    // 创建并加载docxtemplater实例对象
    const doc = new Docxtemplater()
    doc.loadZip(zip)
    // 设置模板变量的值
    doc.setData({
      table: this.videoParam.data
    })

    try {
      // 用模板变量的值替换所有模板变量
      doc.render()
    } catch (error) {
      // 抛出异常
      const e = {
        message: error.message,
        name: error.name,
        stack: error.stack,
        properties: error.properties
      }
      console.log(JSON.stringify({ error: e }))
      throw error
    }
    // 生成一个代表docxtemplater对象的zip文件（不是一个真实的文件，而是在内存中的表示）
    const out = doc.getZip().generate({
      type: 'blob',
      mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    })
    // 将目标文件对象保存为目标类型的文件，并命名
    saveAs(out, '输出文件名字.docx')
  })
}
</script>

```