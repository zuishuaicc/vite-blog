---
outline: deep
---

## 去除elementUI中table所有边框
```css
/deep/.el-table {
		 border: 0;
		 th,
		 tr,
		 td{
			  border: 0;
			  background-color: #fff;
		 }
		 &::before {
			  height: 0px;
		  }
		  &::after {
			 width: 0;
		  }
		 .el-table__fixed:before {
			 height: 0;
		  }
	 }
```

