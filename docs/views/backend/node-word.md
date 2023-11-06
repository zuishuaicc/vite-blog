---
outline: deep
---
## node生成word
### 安装依赖
```bash
npm install docx-templates --save
```
### 生成word代码
```js
import createReport from 'docx-templates';
import fs from 'node:fs';
const template = fs.readFileSync('./templete/temp.docx');


// 生成word
async function createWord() {
  const buffer = await createReport({
    template,
    data: {
      title: '标题',
      description: '描述'
    },
    cmdDelimiter: ['<<','>>'],
  });
  
  fs.writeFileSync('./result/res.docx', buffer)
}
createWord()
```
## node读取word为html字符串

### 安装依赖
```bash
npm install mammoth --save
```
### 读取文件代码
```js
import mammoth from "mammoth";
import fs from 'node:fs'

async function parseWord(){
  try {
    const result = await mammoth.convertToHtml({path: "./templete/sdy.docx"})
    var html = result.value; // The generated HTML
    const rmImgHtml = html.replace(/<img\b[^>]*>/gi, '')//去除图片
    var messages = result.messages; // Any messages, such as warnings during conversion
    fs.writeFileSync('./text.html',rmImgHtml )
    return rmImgHtml
  } catch (error) {
    console.log(error);
  }
  return 
}
const html = parseWord()
// export {
//   parseWord
// }
```