---
outline: deep
---

# Gin Web

## 1. Gin Web 框架

Gin 是 Go 里常用的 HTTP 框架。路由按请求方法分开注册，取参数、回 JSON 都比 `net/http` 少写几行。它底层仍是标准库，上一篇里「读请求、写响应」的概念这里照样用。

本篇按动手顺序来：

1. 把 Go 升到最新稳定版（旧版和 SSE 依赖有兼容问题），或按版本另装一份  
2. 安装 Gin  
3. 安装热更新工具 Air，并看懂那条 `go install`  
4. 起一个最小服务  
5. 传参：路径参数、Query、表单、JSON  

中间件、路由分组这些先不讲。

### 1.1 Go 版本：建议升到最新

先看本机版本：

```bash
go version
```

Gin 会依赖 [`github.com/gin-contrib/sse`](https://github.com/gin-contrib/sse)（Server-Sent Events，服务端按事件往客户端推数据）。这里有两层问题：

- 新版 `sse` 提高了 Go 语言版本要求。Go 太旧时，`go get` 最新 Gin 会在拉依赖阶段失败。  
- 旧版 `sse` 跟较新的 `net/http` 在刷新响应（Flush）上行为不一致，真正用到推流时容易出兼容问题。  

当前最新稳定版是 **Go 1.27.4**。直接覆盖安装最省事：打开 [https://go.dev/dl/](https://go.dev/dl/) 下载对应系统的安装包。Windows 也可以：

```powershell
winget upgrade GoLang.Go
```

装完再执行 `go version`，应看到 `go1.27.4`。

#### 1.1.1 不想替换系统里的 go：按版本另装

机器上已经有一个旧的 `go`，又不想动它，可以再装一份指定版本，两条命令：

```bash
go install golang.org/dl/go1.27.4@latest
go1.27.4 download
```

| 命令 | 做了什么 |
| --- | --- |
| `go install golang.org/dl/go1.27.4@latest` | 只装一个名叫 `go1.27.4` 的小命令，放到 `GOPATH/bin`，这时还没有完整工具链 |
| `go1.27.4 download` | 用上面那个命令，把 Go 1.27.4 本体下载下来 |

之后在这个项目里把 `go` 换成 `go1.27.4`，例如 `go1.27.4 mod init`、`go1.27.4 get ...`、`go1.27.4 run .`。原来的 `go version` 不变。

### 1.2 安装 Gin

在模块目录里执行（还没有模块就先 `go mod init example.com/gin-demo`）：

```bash
go get github.com/gin-gonic/gin@latest
```

`@latest` 拉当前最新稳定版。写作时是 **v1.12.0**，`go.mod` 里要求 **Go 1.25+**，所以前面才先升级。

代码里加上导入，再整理一次依赖：

```go
import "github.com/gin-gonic/gin"
```

```bash
go mod tidy
```

国内拉模块超时的话，先配代理（Modules 那篇写过）：

```bash
go env -w GOPROXY=https://goproxy.cn,direct
```

用了上一节的并存版本时，这几条里的 `go` 同样换成 `go1.27.4`。

### 1.3 热更新：Air

开发时每次改完都要自己停进程、再 `go run`，比较烦。Air 就是干这个的：盯着项目里的源文件，一保存就重新编译并重启进程。

安装命令：

```bash
go install github.com/air-verse/air@latest
```

把它拆开看：

| 片段 | 含义 |
| --- | --- |
| `go install` | 编译这个程序，把可执行文件装进 `GOPATH/bin`。它**不会**写进当前项目的 `go.mod`，因为 Air 是你本机的开发工具，不是业务依赖 |
| `github.com/air-verse/air` | 模块路径。早期仓库在 `github.com/cosmtrek/air`，已经迁到 `air-verse`，安装用新路径 |
| `@latest` | 装最新版。Air 本身要求 Go 1.25+，所以同样用刚升级的那套 Go |

装好后进入项目目录：

```bash
air
```

它会按默认配置监视 `.go` 文件。想改监视规则再执行 `air init`，会在当前目录生成 `.air.toml`。

记住它的边界：Air 只在**你自己电脑上写代码**时用。上线还是正常 `go build` 出一个二进制，不会在生产环境里靠它热重启。

Windows 上如果提示找不到 `air`，把 `go env GOPATH` 下面的 `bin` 加进 PATH（常见是 `C:\Users\你的用户名\go\bin`），新开一个终端再执行。并存安装时，用 `go1.27.4 install github.com/air-verse/air@latest`，装出来的命令同样在那个 `bin` 里。

### 1.4 最小服务

```go
package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()

	router.GET("/", func(ctx *gin.Context) {
		ctx.String(http.StatusOK, "你好")
	})

	if err := router.Run(); err != nil {
		panic(err)
	}
}
```

| API | 作用 |
| --- | --- |
| `gin.Default()` | 创建一个引擎，自带访问日志和 panic 恢复 |
| `router.GET(路径, 处理函数)` | 只接收 GET。POST 就写成 `router.POST` |
| `ctx.String(状态码, 格式, 参数...)` | 往响应里写一段文本，格式和 `fmt.Sprintf` 一样 |
| `router.Run()` | 监听 `:8080`。写成 `router.Run(":8080")` 是一回事 |

`*gin.Context` 同时负责读这次请求、写这次响应，对应标准库里的 `r` 和 `w`。

`go run .` 或 `air` 启动后，浏览器打开 `http://localhost:8080`，能看到「你好」。端口被占用时 `Run` 会返回错误，这里直接 `panic` 让终端把原因打出来。

### 1.5 传参

接口里数据通常从四个地方来：

| 方式 | 长什么样 | 怎么取 |
| --- | --- | --- |
| 路径参数 | `/user/12` | `ctx.Param("id")` |
| Query | `/user?id=1&name=小满` | `ctx.DefaultQuery` / `ctx.Query` |
| 表单 | POST，正文是 `id=1&name=小满` | `ctx.DefaultPostForm` |
| JSON | POST，正文是 `{"name":"小满","age":18}` | `ctx.ShouldBindJSON` |

下面每种先看一小段，最后合成一个能跑的 `main.go`。

#### 1.5.1 路径参数

路径里用 `:名字` 占一位：

```go
router.GET("/user/:id", func(ctx *gin.Context) {
	id := ctx.Param("id") // /user/12 → "12"
	ctx.String(http.StatusOK, "id=%s", id)
})
```

`Param` 拿到的永远是字符串。请求是 `/user/12`，`id` 就是 `"12"`，不会自动变成数字。

#### 1.5.2 Query

问号后面的键值对，用在「筛选、搜索」这种可选条件上：

```go
router.GET("/user", func(ctx *gin.Context) {
	id := ctx.DefaultQuery("id", "none")
	name := ctx.DefaultQuery("name", "none")
	ctx.String(http.StatusOK, "id=%s name=%s", id, name)
})
```

`DefaultQuery` 的第二个参数是**没带这个键**时的默认值。`/user` 什么都不带，两个都是 `none`；`/user?id=1&name=小满` 则取到实际的值。

只要键出现了，哪怕值是空的（`?name=`），也不会再用默认值。想要「空字符串就是没有」，用 `ctx.Query("name")`，缺省时它返回 `""`。

`/user/:id` 和 `/user` 可以同时注册：一个要路径上多一段，一个就是 `/user` 本身，Gin 能分开。

#### 1.5.3 表单

POST 的正文是表单（`application/x-www-form-urlencoded` 或 `multipart/form-data`）时，用 `DefaultPostForm`。第二个参数同样是「没带这个字段」时的默认值：

```go
router.POST("/user/formdata", func(ctx *gin.Context) {
	id := ctx.DefaultPostForm("id", "none")
	name := ctx.DefaultPostForm("name", "none")
	ctx.String(http.StatusOK, "id=%s name=%s", id, name)
})
```

它读的是 **Body**，不是 URL 上的 `?id=1`。用 Query 那套函数去读表单，会一直拿到默认值。

#### 1.5.4 JSON

定义一个结构体，字段要大写才能被填上。`` `json` `` 决定 JSON 里的名字，`` `binding` `` 决定要不要校验：

```go
type User struct {
	Name string `json:"name" binding:"required"`
	Age  int    `json:"age"`
}
```

标签是 `binding`，少写一个字母就不会校验，请求照样能进来。

```go
router.POST("/user/create", func(ctx *gin.Context) {
	var user User
	if err := ctx.ShouldBindJSON(&user); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{
			"error": err.Error(),
		})
		return
	}

	ctx.JSON(http.StatusCreated, gin.H{
		"code":    1,
		"data":    user,
		"success": true,
	})
})
```

`ShouldBindJSON` 做两件事：按 `json` 标签把正文填进结构体，再按 `binding` 标签检查。`Name` 标了 `required`，缺 `name` 或是空字符串都会返回错误。`Age` 没标，不传就是 `0`。

失败时要 `return`。否则函数还会继续往下走，同一次响应里先写 400、再写 201。

`gin.H` 是 `map[string]any` 的别名，用来随手组一个 JSON 对象。`ctx.JSON` 会设置 `Content-Type: application/json` 并序列化。这里成功用 `201 Created`，参数不合法用 `400 Bad Request`。

请求需要：

- 方法：`POST`  
- 头：`Content-Type: application/json`  
- 正文：`{"name":"小满","age":18}`  

#### 1.5.5 合在一起

```go
package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type User struct {
	Name string `json:"name" binding:"required"`
	Age  int    `json:"age"`
}

func main() {
	router := gin.Default()

	router.GET("/", func(ctx *gin.Context) {
		ctx.String(http.StatusOK, "你好")
	})

	// 路径参数：/user/12
	router.GET("/user/:id", func(ctx *gin.Context) {
		id := ctx.Param("id")
		ctx.String(http.StatusOK, "id=%s", id)
	})

	// Query：/user?id=1&name=小满
	router.GET("/user", func(ctx *gin.Context) {
		id := ctx.DefaultQuery("id", "none")
		name := ctx.DefaultQuery("name", "none")
		ctx.String(http.StatusOK, "id=%s name=%s", id, name)
	})

	// 表单正文：id=1&name=小满
	router.POST("/user/formdata", func(ctx *gin.Context) {
		id := ctx.DefaultPostForm("id", "none")
		name := ctx.DefaultPostForm("name", "none")
		ctx.String(http.StatusOK, "id=%s name=%s", id, name)
	})

	// JSON 正文：{"name":"小满","age":18}
	router.POST("/user/create", func(ctx *gin.Context) {
		var user User
		if err := ctx.ShouldBindJSON(&user); err != nil {
			ctx.JSON(http.StatusBadRequest, gin.H{
				"error": err.Error(),
			})
			return
		}
		ctx.JSON(http.StatusCreated, gin.H{
			"code":    1,
			"data":    user,
			"success": true,
		})
	})

	if err := router.Run(); err != nil {
		panic(err)
	}
}
```

用 `curl` 对一下（服务已在 8080）：

```bash
curl http://localhost:8080/
curl http://localhost:8080/user/12
curl "http://localhost:8080/user?id=1&name=小满"
curl -X POST http://localhost:8080/user/formdata -d "id=1&name=小满"
curl -X POST http://localhost:8080/user/create \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"小满\",\"age\":18}"
```

| 请求 | 结果 |
| --- | --- |
| `GET /` | `你好` |
| `GET /user/12` | `id=12` |
| `GET /user?id=1&name=小满` | `id=1 name=小满` |
| `GET /user` | `id=none name=none` |
| `POST /user/formdata`，正文 `id=1&name=小满` | `id=1 name=小满` |
| `POST /user/create`，正文 `{"name":"小满","age":18}` | `201`，`data` 里是这个用户 |
| `POST /user/create`，正文 `{}` | `400`，提示 `name` 为必填 |

### 1.6 小结

| 主题 | 记住什么 |
| --- | --- |
| Go 版本 | 升到最新稳定版（目前 1.27.4）。旧 Go 和新版 `gin-contrib/sse` 对不上；不想覆盖安装就 `go install golang.org/dl/go1.27.4@latest` 再 `download` |
| 装 Gin | `go get github.com/gin-gonic/gin@latest`，然后 `go mod tidy` |
| Air | `go install github.com/air-verse/air@latest`，项目目录执行 `air`。它监视文件并重启进程，只用于本地开发 |
| 启动 | `gin.Default()` 注册路由，`router.Run()` 监听 `:8080` |
| 路径参数 | `/user/:id`，用 `ctx.Param("id")`，结果是字符串 |
| Query | `ctx.DefaultQuery("id", "none")`，第二个参数是没带这个键时的默认值 |
| 表单 | `ctx.DefaultPostForm`，读的是 POST 正文，不是 URL |
| JSON | 结构体加 `json` / `binding` 标签，`ShouldBindJSON` 绑定；失败要 `return`，再用 `ctx.JSON` 写响应 |

## 2. Gin 上传文件

上传走的是 `multipart/form-data`：浏览器把文件拆成一段一段放进请求正文，服务端按**表单字段名**把文件取出来，再写到磁盘。

本篇按动手顺序来：

1. 单文件上传  
2. 校验大小和后缀  
3. 多文件上传  

上一篇的 `DefaultPostForm` 只能读普通表单字段，读不到文件。文件用 `FormFile` 或 `MultipartForm`。

### 2.1 单文件上传

前端字段名是什么，服务端就按什么取。下面约定字段名是 `file`：

```html
<form action="/upload" method="post" enctype="multipart/form-data">
  <input type="file" name="file">
  <button type="submit">上传</button>
</form>
```

`enctype="multipart/form-data"` 必须写上，否则正文里没有文件。

```go
router.POST("/upload", func(ctx *gin.Context) {
	file, err := ctx.FormFile("file")
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// etc/static/1.png → 1.png，只留文件名
	dst := filepath.Join("./files/", filepath.Base(file.Filename))
	if err := ctx.SaveUploadedFile(file, dst); err != nil {
		ctx.String(http.StatusInternalServerError, "保存失败")
		return
	}
	ctx.String(http.StatusOK, "上传成功")
})
```

| API | 作用 |
| --- | --- |
| `ctx.FormFile("file")` | 按字段名取出**一个**文件。返回的是 `*multipart.FileHeader`，里面有原始文件名和大小 |
| `file.Filename` | 客户端带来的文件名，可能带目录，例如 `etc/static/1.png` |
| `filepath.Base(file.Filename)` | 只留最后一段：`etc/static/1.png` → `1.png` |
| `filepath.Join("./files/", 文件名)` | 拼出落盘路径 `files/1.png`。分隔符按当前系统处理 |
| `ctx.SaveUploadedFile(file, dst)` | 把文件写到 `dst`。父目录不存在时会自己建 |

`Base` 要加上。客户端可以带上 `../` 或一整段路径，直接拿 `file.Filename` 去拼接，文件会写到 `./files/` 外面。`Base` 丢掉目录，只留下 `1.png` 这种名字，再和 `./files/` 拼在一起。

`SaveUploadedFile` 的错误要判断。保存失败时如果继续往下写「上传成功」，前端看到的结果是错的。

用 `curl` 试（`-F` 会自动带上 `multipart/form-data`）：

```bash
curl -F "file=@1.png" http://localhost:8080/upload
```

`file=` 对应 `FormFile("file")`，`@1.png` 表示把本地文件 `1.png` 传上去。成功后项目下会出现 `files/1.png`。

### 2.2 校验大小和后缀

文件取出来之后、写盘之前做两道检查：太大的丢掉，后缀不在白名单里的丢掉。

#### 2.2.1 大小：`5 << 20` 就是 5MB

`<<` 是左移。二进制往左挪 n 位，数值乘上 2 的 n 次方。内存里文件大小的单位是**字节**，所以用位移写出 KB、MB、GB：

| 写法 | 等于 | 含义 |
| --- | --- | --- |
| `1 << 10` | 1024 字节 | 1KB |
| `1 << 20` | 1024 × 1024 字节 | 1MB |
| `1 << 30` | 1024 × 1024 × 1024 字节 | 1GB |
| `5 << 20` | 5 × 1MB | 5MB |

左移的位数决定单位：`10` 是 KB，`20` 是 MB，`30` 是 GB。前面的数字是「几个」这种单位。`5 << 20` 就是 5 个 MB。

```go
const MaxSize = 5 << 20 // 5MB

if file.Size > MaxSize {
	ctx.String(http.StatusRequestEntityTooLarge, "文件过大")
	return
}
```

`file.Size` 是字节数。超过 5MB 回 **413**（`StatusRequestEntityTooLarge`），然后 `return`，后面的保存不再执行。

#### 2.2.2 后缀：只允许 png 和 jpg

用 map 当白名单，查找是 O(1)，不在里面的键读出来是 `false`：

```go
var allowExt = map[string]bool{
	".png": true,
	".jpg": true,
}

ext := strings.ToLower(filepath.Ext(file.Filename))
if !allowExt[ext] {
	ctx.String(http.StatusBadRequest, "该后缀暂时不支持")
	return
}
```

`filepath.Ext` 带点，`"1.png"` 得到 `".png"`，所以白名单里要写成 `".png"`，不能写成 `"png"`。

后缀大小写不固定，Windows 上经常是 `.PNG`、`.JPG`。`Ext` 不会帮你转小写，比较前用 `strings.ToLower`，否则合法图片会被拒。

两道检查都放在 `SaveUploadedFile` 前面：

```go
router.POST("/upload", func(ctx *gin.Context) {
	file, err := ctx.FormFile("file")
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	if file.Size > MaxSize {
		ctx.String(http.StatusRequestEntityTooLarge, "文件过大")
		return
	}
	ext := strings.ToLower(filepath.Ext(file.Filename))
	if !allowExt[ext] {
		ctx.String(http.StatusBadRequest, "该后缀暂时不支持")
		return
	}

	dst := filepath.Join("./files/", filepath.Base(file.Filename))
	if err := ctx.SaveUploadedFile(file, dst); err != nil {
		ctx.String(http.StatusInternalServerError, "保存失败")
		return
	}
	ctx.String(http.StatusOK, "上传成功")
})
```

| 请求 | 结果 |
| --- | --- |
| `1.png`，小于 5MB | `files/1.png`，响应「上传成功」 |
| 6MB 的 png | `413`，「文件过大」，磁盘上没有这个文件 |
| `1.gif` | `400`，「该后缀暂时不支持」 |
| `photo.JPG` | 转小写后是 `.jpg`，允许保存 |

### 2.3 多文件上传

一次选好几个文件时，`FormFile` 只会拿到该字段的第一个。整包解析用 `MultipartForm`，再按字段名取出文件切片。

前端字段名改成 `files`，并加上 `multiple`：

```html
<input type="file" name="files" multiple>
```

```go
form, err := ctx.MultipartForm()
if err != nil {
	ctx.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	return
}

files := form.File["files"]
```

`form.File` 的类型是 `map[string][]*multipart.FileHeader`。键是字段名 `"files"`，值是这个字段上的全部文件。字段名和前端 `name` 不一致时，取出来是 `nil`，循环一次都不会进。

大小、后缀和单文件是同一套判断，放进循环里，每个文件单独看。有一个不合格就 `return`，不再保存后面的：

```go
router.POST("/upload", func(ctx *gin.Context) {
	form, err := ctx.MultipartForm()
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	files := form.File["files"]
	if len(files) == 0 {
		ctx.String(http.StatusBadRequest, "没有文件")
		return
	}

	for _, file := range files {
		if file.Size > MaxSize {
			ctx.String(http.StatusRequestEntityTooLarge, "文件过大")
			return
		}
		ext := strings.ToLower(filepath.Ext(file.Filename))
		if !allowExt[ext] {
			ctx.String(http.StatusBadRequest, "该后缀暂时不支持")
			return
		}

		dst := filepath.Join("./files/", filepath.Base(file.Filename))
		if err := ctx.SaveUploadedFile(file, dst); err != nil {
			ctx.String(http.StatusInternalServerError, "保存失败")
			return
		}
	}
	ctx.String(http.StatusOK, "上传成功")
})
```

循环结束后再回复「上传成功」。写在循环里面的话，第一个文件保存完就会结束响应。

两个文件一起传：

```bash
curl -F "files=@1.png" -F "files=@2.jpg" http://localhost:8080/upload
```

两次 `-F` 的字段名都是 `files`，对应 `form.File["files"]`。

#### 2.3.1 合在一起

```go
package main

import (
	"net/http"
	"path/filepath"
	"strings"

	"github.com/gin-gonic/gin"
)

// 1 << 10 是 1KB，1 << 20 是 1MB，1 << 30 是 1GB
const MaxSize = 5 << 20 // 5MB

var allowExt = map[string]bool{
	".png": true,
	".jpg": true,
}

func main() {
	router := gin.Default()

	router.POST("/upload", func(ctx *gin.Context) {
		form, err := ctx.MultipartForm()
		if err != nil {
			ctx.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		files := form.File["files"]
		if len(files) == 0 {
			ctx.String(http.StatusBadRequest, "没有文件")
			return
		}

		for _, file := range files {
			if file.Size > MaxSize {
				ctx.String(http.StatusRequestEntityTooLarge, "文件过大")
				return
			}
			ext := strings.ToLower(filepath.Ext(file.Filename))
			if !allowExt[ext] {
				ctx.String(http.StatusBadRequest, "该后缀暂时不支持")
				return
			}

			dst := filepath.Join("./files/", filepath.Base(file.Filename))
			if err := ctx.SaveUploadedFile(file, dst); err != nil {
				ctx.String(http.StatusInternalServerError, "保存失败")
				return
			}
		}
		ctx.String(http.StatusOK, "上传成功")
	})

	if err := router.Run(); err != nil {
		panic(err)
	}
}
```

只传一个文件时，用同一个接口即可，字段名仍然是 `files`：

```bash
curl -F "files=@1.png" http://localhost:8080/upload
```

单文件那节的 `FormFile("file")` 适合确定只有一个文件的接口；多个文件用 `MultipartForm`。

### 2.4 小结

| 主题 | 记住什么 |
| --- | --- |
| 单文件 | `ctx.FormFile("file")`，字段名和前端 `name` 一致 |
| 落盘 | `filepath.Join("./files/", filepath.Base(file.Filename))`，`Base` 去掉客户端带来的目录 |
| 保存 | `ctx.SaveUploadedFile(file, dst)`，错误要 `return` |
| 大小 | `5 << 20` 是 5MB。`10` / `20` / `30` 分别对应 KB / MB / GB。超限回 413 |
| 后缀 | `filepath.Ext` 的结果带点，白名单写成 `".png"`。比较前 `strings.ToLower` |
| 多文件 | `ctx.MultipartForm()`，用 `form.File["files"]` 取出切片，循环里做同一套校验再保存 |

## 3. Gin 中间件

什么是中间件?

中间件属于，[真正的业务代码]，之前，以及之后一段的通用逻辑，对请求做统一的加工，拦截，包装等，基本所有的框架都有这个思想。

例如：

- 跨域 CORS
- 登录鉴权、权限校验
- 请求日志、耗时统计
- panic 捕获 & 统一异常返回
- 请求限流、ip 黑名单
- 统一加请求 ID（traceId）

### 3.1 注册中间件

中间件，是通过`Use`方法去进行注册的，接受一个函数，并且注入参数`gin.Context`上下文，
>需注意：中间件是放在顶部的，而不能放在路由下面，否则不生效

```go
package main

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

func Cors(ctx *gin.Context) {
	//请求之前做点什么
	fmt.Println("==================before")
	ctx.Next()
    //请求之后做点什么
	fmt.Println("==================after")
}

func main() {
	router := gin.New()
	router.Use(Cors)

	router.GET("/ping", func(ctx *gin.Context) {
		fmt.Println("result")
		ctx.String(http.StatusOK, "请求成功:%v", ctx.Request.URL)
	})

    //router.Use(Cors) 如放在路由下面则不生效

	router.Run()
}
```

输出结果

```txt
==================before
result
==================after
```

### 3.2 Next & Abort

#### 3.2.1 Next函数
请求进来时，Gin 把中间件和路由处理函数排成一条链，从头开始调用。遇到 Next()，当前函数先停住，去执行链上还没跑的部分：后面的中间件，以及最后的 GET /ping。这些全部 return 之后，Next() 才返回，after 才会打印

```go
func cors(c *gin.Context) {
    // 👉【前置逻辑】先跑这里
    fmt.Println("before next")

    c.Next() // ✅ 关键点：放行，去跑后面的链条，这里代码会卡住，等待后面全部跑完

    // 👉【后置逻辑】等后面所有中间件、handler 跑完之后，才回来执行这里
    fmt.Println("after next")
}
```

#### 3.2.2 Abort

`Abort` 把这条链标记为已中止。还没开始的后续中间件，以及最后的业务函数，都不会再被调用。`/ping` 里的 `result` 不会打印。

它不会让当前函数停在这一行。`Abort()` 下面的语句照常往下走。想跳过当前函数剩下的代码，要自己 `return`。`return` 只离开当前函数，拦住后面链条的是 `Abort`。

已经在外层执行、并且调用过 `Next()` 的中间件也不受影响。内层中止之后，外层的 `Next()` 会返回，写在它下面的后置逻辑仍会执行。

`Abort` 本身不写响应。只调用它时，客户端拿到的是默认的 **200** 和空正文。拦截时先把状态码和内容写出去，或者直接用 `AbortWithStatusJSON`（内部就是先 `Abort`，再 `JSON`）。

```go
func logCost(ctx *gin.Context) {
	fmt.Println("Log before")
	ctx.Next()
	fmt.Println("Log after")
}

func auth(ctx *gin.Context) {
	fmt.Println("before Abort")

	if ctx.GetHeader("token") == "" {
		ctx.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{
			"error": "未登录",
		})
		fmt.Println("after Abort")
		return
	}

	ctx.Next()
}
```

注册顺序是先 `logCost` 再 `auth`。没带 `token` 访问 `/ping` 时：

```txt
Log before
before Abort
after Abort
Log after
```

响应是 `401`，正文 `{"error":"未登录"}`。`Log after` 仍会打印，因为 `logCost` 已经停在自己的 `Next()` 上，等的就是内层返回。`Abort` 拦的是还没轮到的函数。

### 3.3 多个中间件执行例子

`Use` 可以连续注册。先注册的包在外面，后注册的在里面。同一次请求先按注册顺序走进去，业务函数返回后，再按相反的顺序走出来。

下面先挂 `Cors`，再挂 `Cors2`。两个路由都写在 `Use` 后面，所以 `/ping` 和 `/test` 都会经过这两个中间件。下面这份输出是访问 `/ping` 的：只有它在处理函数里打印了 `result`。

```go
package main

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

func Cors(ctx *gin.Context) {
	//请求之前做点什么
	fmt.Println("==================before")
	ctx.Next()
	fmt.Println("==================after")
}
func Cors2(ctx *gin.Context) {
	//请求之前做点什么
	fmt.Println("==================before2")
	ctx.Next()
	fmt.Println("==================after2")
}

func main() {
	router := gin.New()

	router.Use(Cors)
	router.Use(Cors2)

	router.GET("/ping", func(ctx *gin.Context) {
		fmt.Println("result")
		ctx.String(http.StatusOK, "请求成功:%v", ctx.Request.URL)
	})

	router.GET("/test", func(ctx *gin.Context) {
		ctx.String(http.StatusOK, "请求成功:%v", ctx.Request.URL)
	})

	router.Run()
}
```

访问 `GET /ping` 的输出：

```txt
==================before
==================before2
result
==================after2
==================after
```

套在一起就是：

```txt
Cors before
  Cors2 before
    result
  Cors2 after
Cors after
```

`Cors` 先打印 `before`，调用 `Next()` 后停住，把控制权交给后注册的 `Cors2`。`Cors2` 同样先打印 `before2`，再 `Next()` 进入 `/ping`。`/ping` 返回之后，才轮到 `after2`；接着 `Cors` 的 `Next()` 返回，最后打印 `after`。

谁先 `Use`，谁的前置最早执行，谁的后置最晚执行。把 `Use(Cors)` 和 `Use(Cors2)` 对调，`before` / `after` 的先后也会对调。

访问 `/test` 时，两层中间件的顺序相同，中间没有 `result` 这一行。

### 3.4 案例：跨域 CORS

浏览器默认只让页面读**同源**接口的响应。源看三样：协议、主机、端口，三样全相同才算同一个源。

| 页面地址 | 接口地址 | 是否同源 |
| --- | --- | --- |
| `http://127.0.0.1:5500` | `http://127.0.0.1:5500/ping` | 同源 |
| `http://127.0.0.1:5500` | `http://127.0.0.1:8080/ping` | 跨域，端口不同 |
| `http://localhost:8080` | `http://127.0.0.1:8080` | 跨域，`localhost` 和 `127.0.0.1` 是两台「主机」 |
| `https://example.com` | `http://example.com` | 跨域，协议不同 |

上面这段脚本如果跑在 `http://127.0.0.1:5500` 的页面里，去请求 `http://localhost:8080/ping`，就是跨域。服务端不给 CORS 响应头时，接口其实可能已经执行了，但浏览器会把结果拦下，前端 `fetch` 直接报错。

```html
<script>
    fetch("http://localhost:8080/ping", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }
    })
</script>
```

#### 3.4.1 请求方法

`method` 就是这次请求的方法，和 Gin 里 `router.GET`、`router.DELETE` 是同一组名字：

| 方法 | 一般用途 |
| --- | --- |
| `GET` | 查询 |
| `POST` | 新建、提交 |
| `PUT` / `PATCH` | 更新 |
| `DELETE` | 删除 |
| `OPTIONS` | 浏览器用来问「这个跨域请求允不允许」，不是业务接口 |

这里写的是 `DELETE`，所以服务端要有 `router.DELETE("/ping", ...)`。写成 `router.GET` 时，真正的删除请求对不上，会得到 404。

#### 3.4.2 预检请求

有的跨域请求浏览器会直接发，有的会先发一次 **预检**。预检是浏览器自动补的 `OPTIONS`，页面里的 `fetch` 不用自己写。

这次会预检，因为同时占了两条：

- 方法是 `DELETE`（不是 `GET` / `HEAD` / `POST`）
- 请求头 `Content-Type` 是 `application/json`（不是表单或纯文本）

浏览器实际会发两次：

1. `OPTIONS /ping`，头里带上 `Origin`（页面的源，例如 `http://127.0.0.1:5500`）、`Access-Control-Request-Method: DELETE`、`Access-Control-Request-Headers: content-type`。问服务器：这个源、这个方法、这个头，能不能发。
2. 预检通过之后，才发真正的 `DELETE /ping`。

预检没有对应的业务路由。中间件不接住 `OPTIONS` 的话，Gin 回 404，浏览器认为不允许跨域，第二次 `DELETE` 也不会发，终端里看不到 `result`。

#### 3.4.3 三个响应头

手写的中间件在进业务之前，把允许范围写到响应头上。真正的 `DELETE` 也要带上这些头，所以写在 `OPTIONS` 判断的前面，两条请求都能带上。

| 响应头 | 例子里的值 | 作用 |
| --- | --- | --- |
| `Access-Control-Allow-Origin` | `*` | 允许哪个源读取响应。`*` 表示任意源。页面要带 Cookie 时不能用 `*`，得写成具体源 |
| `Access-Control-Allow-Methods` | `GET,POST,DELETE,PUT,PATCH` | 预检时告诉浏览器，这些方法可以跨域调用。要包含这次的 `DELETE` |
| `Access-Control-Allow-Headers` | `Content-Type` | 预检时告诉浏览器，请求可以带哪些头。前端写了 `Content-Type`，这里就要允许它 |

```go
func Cors(ctx *gin.Context) {
	fmt.Println("==================before")
	ctx.Header("Access-Control-Allow-Origin", "*")
	ctx.Header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT,PATCH")
	ctx.Header("Access-Control-Allow-Headers", "Content-Type")

	// 预检不是业务请求，回 204 后结束，不再进入 /ping
	if ctx.Request.Method == "OPTIONS" {
		ctx.AbortWithStatus(http.StatusNoContent)
		return
	}

	ctx.Next()
	fmt.Println("==================after")
}
```

`AbortWithStatus(204)` 把预检标成成功（没有正文），并中止后面的链条。这里要 `return`：否则还会继续执行 `Next()`。`Abort` 之后 `Next()` 不会进 `/ping`，但当前函数剩下的代码仍会走，和上一节一样。

完整例子：

```go
package main

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

func Cors(ctx *gin.Context) {
	fmt.Println("==================before")
	ctx.Header("Access-Control-Allow-Origin", "*")
	ctx.Header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT,PATCH")
	ctx.Header("Access-Control-Allow-Headers", "Content-Type")

	if ctx.Request.Method == "OPTIONS" {
		ctx.AbortWithStatus(http.StatusNoContent)
		return
	}

	ctx.Next()
	fmt.Println("==================after")
}

func main() {
	router := gin.New()
	router.Use(Cors)

	router.DELETE("/ping", func(ctx *gin.Context) {
		fmt.Println("result")
		ctx.String(http.StatusOK, "请求成功:%v", ctx.Request.URL)
	})

	router.Run()
}
```

用另一个源的页面点这次 `fetch`，顺序是：

| 顺序 | 请求 | 终端 | 响应 |
| --- | --- | --- | --- |
| 1 | `OPTIONS /ping` | 只有 `before` | `204`，带上面三个头 |
| 2 | `DELETE /ping` | `before`、`result`、`after` | `200`，正文是「请求成功」，响应里同样有 `Access-Control-Allow-Origin` |

第二次如果缺 `Allow-Origin`，浏览器还是不会把正文交给 `fetch`。

#### 3.4.4 项目里用现成的

上面这份是为了看清预检和三个头，项目里不用自己维护。Gin 官方配套的是 [`github.com/gin-contrib/cors`](https://github.com/gin-contrib/cors)，它会处理 `OPTIONS`、补响应头。

```bash
go get github.com/gin-contrib/cors
go mod tidy
```

和手写 `*` 同样宽松的写法：

```go
import "github.com/gin-contrib/cors"

func main() {
	router := gin.New()
	router.Use(cors.Default())

	router.DELETE("/ping", func(ctx *gin.Context) {
		ctx.String(http.StatusOK, "请求成功:%v", ctx.Request.URL)
	})

	router.Run()
}
```

`cors.Default()` 允许任意源，效果接近 `Access-Control-Allow-Origin: *`，也不带 Cookie。要收成某一个前端地址时，改用配置。`AllowOrigins` 写页面的源，方法、请求头和手写的那三行是同一件事：

```go
config := cors.DefaultConfig()
config.AllowOrigins = []string{"http://127.0.0.1:5500"}
config.AllowMethods = []string{"GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"}
config.AllowHeaders = []string{"Content-Type"}

router.Use(cors.New(config))
```

`DefaultConfig()` 里其实已经带了这些方法和 `Content-Type`。源必须自己填，漏了的话 `cors.New` 会直接报配置冲突。页面地址是 `localhost` 还是 `127.0.0.1`，要和 `AllowOrigins` 里的字符串一致。
