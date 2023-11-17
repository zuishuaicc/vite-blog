---
outline: deep
---
## node生成excel
### 安装依赖
```bash
npm install xlsx
```
### 生成excel
```js
async function jsonToXlsx() {
  const content = await fs.readFile(path.join(__dirname,'./templete/users.xlsx'))
  // 工作簿
  const workbook = XLSX.read(content)
  // sheet页
  const sheet2 = XLSX.utils.json_to_sheet(
    [
      { '姓名': '张胜男1', '年龄': 18, '手机号': 13112345678, '工作': '软件工程师' },
      { '姓名': '李思思1', '年龄': 19, '手机号': 13114545679, '工作': '面点师' },
      { '姓名': '王武1', '年龄': 17, '手机号': 13112085680, '工作': '操盘手' },
      { '姓名': '赵流柳1', '年龄': 20, '手机号': 13112655681, '工作': '平面设计师' },
      { '姓名': '钱琪琪1', '年龄': 21, '手机号': 13112905682, '工作': '公司老板' },
      { '姓名': '孙霸坝1', '年龄': 27, '手机号': 13113945683, '工作': '自由职业' }
    ]
  )
  // 向工作簿添加sheet页
  XLSX.utils.book_append_sheet(workbook,sheet2,'Sheet2')
    // 生成excel
  XLSX.writeFile(workbook,'users.xlsx')

}
jsonToXlsx()
```
## node读取excel为json格式
### 安装依赖
```bash
npm install xlsx
```
### 读取excel为json格式
```js
async function xlsxToJson() {
  console.log( `\x1B[36m start read xlsx \x1B[0m`);
  const content = await fs.readFile(path.join(__dirname,'./templete/users.xlsx'))
  const workbook = XLSX.read(content)
  const jsonData = XLSX.utils.sheet_to_json(workbook.Sheets['Sheet1'])
  console.log(jsonData)
  console.log( `\x1B[36m read xlsx finished \x1B[0m`);

}

xlsxToJson()
```