---
outline: deep
---

## vim基础操作
### 删除复制粘贴
| 删除复制粘贴        |      描述      |
| ------------- | :-----------: |
| dd    | 在一行字当中，x为向后删除一个字符（相当于[Del]按键），X为向前删除一个字符（相当于[Backspace]）（常用）          |
| ndd      |   n为数字。删除光标所在的向下n行，例如20dd则是删除20行（常用）|
| yy  |   复制光标所在的那一行（常用）  |
| nyy  |   n为数字。复制光标所在的向下n行，例如20yy则是复制20行（常用）   |
| p,P  |   p为将已复制的数据在光标下一行粘贴，P则为粘贴在光标上一行。举例来说，我目前光标在第20行，且已经复制了10行数据。则按下p后，那10行数据会粘贴在原本的20行之后，也即由21行开始粘贴。但如果是按下P呢？那么原本的第20行会被变成30行（常用）   |
| u  |   复原前一个操作（常用）   |
| [Ctrl]+r  |   重做上一个操作（常用）这个u与[Ctrl]+r是很常用的命令。一个是复原，另一个则是重做一次，利用它们，你的编辑会更加得心应手   |
| .  |   不要怀疑。这就是小数点。意思是重复前一个操作的意思。如果你想要重复删除、重复粘贴等操作，按下小数点“.”就好了（常用）   |
	
### 块选择 
	
| 块选择  |      描述      |
| ------------- | :-----------: |
| v    | 字符选择，会将光标经过的地方反白选择（常用）  |
| V    | 行选择，会将光标经过的行反白选择（常用）  |
| [Ctr]+v    | 块选择，可以用长方形的方式选择数据（常用）  |
| y    | 将反白的地方复制起来（常用）  |
| d    | 将反白的地方删除（常用）  |
	
	
	
	
	
