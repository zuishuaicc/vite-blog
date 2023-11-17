---
outline: deep
---

## 安装依赖
```bash
-- 安装 FileSaver
npm install file-saver --save

--安装 xlsx
npm install xlsx --save

```
## 先定义一个excel处理方法
```js
import { saveAs } from 'file-saver'
import * as XLSX from 'xlsx'

interface JsonToExcelData {
  header: Array<string>
  multiHeader: Array<Array<string>>
  data: Array<Array<string>>
  filename: string
  merges: Array<any>
  autoWidth: boolean
  bookType: XLSX.BookType
}
interface Cell {
  v: any
  t?: any
  z?: any
}
interface Ws {
  ['!ref']: string
  ['!merge']: Array<XLSX.Range>
  [key: string]: any
}
// function generateArray(table) {
//   const out = []
//   const rows = table.querySelectorAll('tr')
//   const ranges = []
//   for (let R = 0; R < rows.length; ++R) {
//     const outRow = []
//     const row = rows[R]
//     const columns = row.querySelectorAll('td')
//     for (let C = 0; C < columns.length; ++C) {
//       const cell = columns[C]
//       let colspan = cell.getAttribute('colspan')
//       let rowspan = cell.getAttribute('rowspan')
//       let cellValue = cell.innerText
//       if (cellValue !== '' && cellValue == +cellValue) cellValue = +cellValue

//       //Skip ranges
//       ranges.forEach(function (range) {
//         if (
//           R >= range.s.r &&
//           R <= range.e.r &&
//           outRow.length >= range.s.c &&
//           outRow.length <= range.e.c
//         ) {
//           for (let i = 0; i <= range.e.c - range.s.c; ++i) outRow.push(null)
//         }
//       })

//       //Handle Row Span
//       if (rowspan || colspan) {
//         rowspan = rowspan || 1
//         colspan = colspan || 1
//         ranges.push({
//           s: {
//             r: R,
//             c: outRow.length
//           },
//           e: {
//             r: R + rowspan - 1,
//             c: outRow.length + colspan - 1
//           }
//         })
//       }

//       //Handle Value
//       outRow.push(cellValue !== '' ? cellValue : null)

//       //Handle Colspan
//       if (colspan) for (let k = 0; k < colspan - 1; ++k) outRow.push(null)
//     }
//     out.push(outRow)
//   }
//   return [out, ranges]
// }
// 转换js时间格式为excel时间格式
function datenum(v: any, date1904?: number) {
  if (date1904) v += 1462
  const epoch = Date.parse(v)
  return (
    (epoch - new Date(Date.UTC(1899, 11, 30)).getTime()) / (24 * 60 * 60 * 1000)
  )
}

function sheet_from_array_of_arrays(data: Array<Array<any>>) {
  const ws: Ws = {} as unknown as Ws
  const range = {
    s: {
      c: 10000000,
      r: 10000000
    },
    e: {
      c: 0,
      r: 0
    }
  }
  for (let R = 0; R != data.length; ++R) {
    for (let C = 0; C != data[R].length; ++C) {
      if (range.s.r > R) range.s.r = R
      if (range.s.c > C) range.s.c = C
      if (range.e.r < R) range.e.r = R
      if (range.e.c < C) range.e.c = C
      const cell: Cell = {
        v: data[R][C]
      }
      if (cell.v == null) continue
      const cell_ref = XLSX.utils.encode_cell({
        c: C,
        r: R
      })

      if (typeof cell.v === 'number') cell.t = 'n'
      else if (typeof cell.v === 'boolean') cell.t = 'b'
      else if (cell.v instanceof Date) {
        cell.t = 'n'
        cell.z = XLSX.SSF._table[14]
        cell.v = datenum(cell.v)
      } else cell.t = 's'

      ws[cell_ref] = cell
    }
  }
  if (range.s.c < 10000000) ws['!ref'] = XLSX.utils.encode_range(range)
  return ws
}

// function Workbook() {
//   if (!(this instanceof Workbook)) return new Workbook()
//   this.SheetNames = []
//   this.Sheets = {}
// }

// 使用类改写工厂函数
class Workbook {
  SheetNames: Array<string>
  Sheets: { [key: string]: Ws }
  constructor(SheetNames = [], Sheets = {}) {
    this.SheetNames = SheetNames
    this.Sheets = Sheets
  }
}

function s2ab(s: any) {
  const buf = new ArrayBuffer(s.length)
  const view = new Uint8Array(buf)
  for (let i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xff
  return buf
}

// export function export_table_to_excel(id) {
//   const theTable = document.getElementById(id)
//   const oo = generateArray(theTable)
//   const ranges = oo[1]

//   /* original data */
//   const data = oo[0]
//   const ws_name = 'SheetJS'

//   const wb = new Workbook(),
//     ws = sheet_from_array_of_arrays(data)

//   /* add ranges to worksheet */
//   // ws['!cols'] = ['apple', 'banan'];
//   ws['!merges'] = ranges

//   /* add worksheet to workbook */
//   wb.SheetNames.push(ws_name)
//   wb.Sheets[ws_name] = ws

//   const wbout = XLSX.write(wb, {
//     bookType: 'xlsx',
//     bookSST: false,
//     type: 'binary'
//   })

//   saveAs(
//     new Blob([s2ab(wbout)], {
//       type: 'application/octet-stream'
//     }),
//     'test.xlsx'
//   )
// }

export function export_json_to_excel({
  multiHeader = [],
  header,
  data,
  filename,
  merges = [],
  autoWidth = true,
  bookType = 'xlsx'
}: JsonToExcelData) {
  /* original data */
  filename = filename || 'excel-list'
  data = [...data]
  data.unshift(header) //前部插入表头

  // 前部插入多级表头
  for (let i = multiHeader.length - 1; i > -1; i--) {
    data.unshift(multiHeader[i])
  }

  const ws_name = 'SheetJS'
  const wb = new Workbook(),
    ws = sheet_from_array_of_arrays(data)

  if (merges.length > 0) {
    if (!ws['!merges']) ws['!merges'] = []
    merges.forEach((item) => {
      ws['!merges'].push(XLSX.utils.decode_range(item))
    })
  }

  if (autoWidth) {
    /*设置worksheet每列的最大宽度*/
    const colWidth = data.map((row) =>
      row.map((val) => {
        /*先判断是否为null/undefined*/
        if (val == null) {
          return {
            wch: 10
          }
        } else if (val.toString().charCodeAt(0) > 255) {
          /*再判断是否为中文*/
          return {
            wch: val.toString().length * 2
          }
        } else {
          return {
            wch: val.toString().length
          }
        }
      })
    )
    /*以第一行为初始值*/
    const result = colWidth[0]
    for (let i = 1; i < colWidth.length; i++) {
      for (let j = 0; j < colWidth[i].length; j++) {
        if (result[j]['wch'] < colWidth[i][j]['wch']) {
          result[j]['wch'] = colWidth[i][j]['wch']
        }
      }
    }
    ws['!cols'] = result
  }

  /* add worksheet to workbook */
  wb.SheetNames.push(ws_name)
  wb.Sheets[ws_name] = ws

  const wbout = XLSX.write(wb, {
    bookType: bookType,
    bookSST: false,
    type: 'binary'
  })
  saveAs(
    new Blob([s2ab(wbout)], {
      type: 'application/octet-stream'
    }),
    `${filename}.${bookType}`
  )
}

```
## 在vue中导出excel
```vue

<script>
export default {
method:{
   // 导出
    async handleDownload() {
      // const headersArr = ['姓名', '手机号', '入职日期', '聘用形式', '转正日期', '工号', '部门']
      const multiHeader = [['姓名', '主要信息', '', '', '', '', '部门']] // 复杂表头
      const merges = ['A1:A2', 'B1:F1', 'G1:G2'] // 合并表格信息
      const headersRelations = {
        '姓名': 'username',
        '手机号': 'mobile',
        '入职日期': 'timeOfEntry',
        '聘用形式': 'formOfEmployment',
        '转正日期': 'correctionTime',
        '工号': 'workNumber',
        '部门': 'departmentName'
      }
      // 在点击下载的一瞬间获取到所有的员工列表
      const { data: { rows }} = await reqGetEmployees(1, this.total) // rows是所有员工信息
      // console.log(this.format2Array(rows, headersArr, headersRelations))
      const tabledata = this.format2Array(rows, Object.keys(headersRelations), headersRelations)
      // 性能  用户点击下载按钮后,再导入Export2Excel这个包 进行下载处理
      import('@/vendor/Export2Excel').then(excel => { // excel是一个对象包含了Export2Excel导出两个方法
        excel.export_json_to_excel({
          header: Object.keys(headersRelations), // 表格的头部是一个数组
          multiHeader,
          merges,
          data: tabledata,
          filename: '员工信息表', // 导出的表格文件名
          autoWidth: true, // 宽度自适应
          bookType: 'xlsx'// 文件扩展名
        })
      })
    },
    // 处理二维数组的方法
    format2Array(rows, headersArr, headersRelations) {
      return rows.map(item => { // item是每一个对象
        // console.log(item)
        const arr = []
        // 转换二维数组 还要处理中英文对照关系
        headersArr.forEach(k => { // k是表格标题数组的字符串
          // console.log(headersRelations[k]) // 英文键
          const englishKey = headersRelations[k]
          let value = item[englishKey] // 要导出的数据
          // 处理日期
          if (['timeOfEntry', 'correctionTime'].includes(englishKey)) {
            value = value ? formatTime(value) : '不详'
          }
          // 处理聘用形式
          if (englishKey === 'formOfEmployment') {
            // console.log(employeeMenu.hireType)
            const o = employeeMenu.hireType.find(item => item.id === +value)
            value = o ? o.value : '未知'
          }
          arr.push(value)
        })
        return arr
      })
    }
}
}
</script>

```
## 在vue中导入excel
```vue
<script>
import XLSX from 'xlsx'
import constant from '@/constant/index'

export default {
  data () {
    return {
      loading: false,
      excelData: {
        header: null,
        results: null
      },
      relations: constant.equipRelations
    }
  },
  methods: {
    handleUpload () {
      this.$refs['excel-upload-input'].click()
    },
    handleClick (e) {
      const files = e.target.files
      const rawFile = files[0] // only use files[0]
      if (!rawFile) return
      this.upload(rawFile)
    },
    upload (rawFile) {
      this.$refs['excel-upload-input'].value = null // fix can't select the same excel
      this.readerData(rawFile)
    },
    readerData (rawFile) {
      this.loading = true
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        //读取文件
        reader.readAsArrayBuffer(rawFile)
        //文件加载完成后
        reader.onload = e => {
          const data = e.target.result
          const workbook = XLSX.read(data, { type: 'array' })
          const firstSheetName = workbook.SheetNames[0]
          const worksheet = workbook.Sheets[firstSheetName]
          const header = this.getHeaderRow(worksheet)
          const results = XLSX.utils.sheet_to_json(worksheet)
          this.generateData({ header, results })
          this.loading = false
          resolve()
        }
      })
    },
    //获取表格header
    getHeaderRow (sheet) {
      const headers = []
      const range = XLSX.utils.decode_range(sheet['!ref'])//最大列
      let C
      const R = range.s.r//行数
      /* start in the first row */
      for (C = range.s.c; C <= range.e.c; ++C) { /* walk every column in the range */
        const cell = sheet[XLSX.utils.encode_cell({ c: C, r: R })]
        /* find the cell in the first row */
        let hdr = 'UNKNOWN ' + C // <-- replace with your desired default
        //格式化单元格
        if (cell && cell.t) hdr = XLSX.utils.format_cell(cell)
        headers.push(hdr)
      }
      return headers
    },
    //根据表头获取表格内容数据
    generateData ({ header, results }) {
      this.excelData.header = header
      this.excelData.results = results
      this.handleSuccess(this.excelData)
    },
    // 成功上传文件后的操作函数
    async handleSuccess ({ results, header }) {
      const data = this.handleExcelData(results, header)
      this.$emit('importData', data)
    },
    // 封装处理上传的Excel中中文字段转英文字段的函数
    handleExcelData (results, header) {
      return results.map(item => {
        const obj = {}
        for (const k in this.relations) {
          obj[this.relations[k]] = item[k]
        }
        return obj
      })
    }
  }
}
</script>
```