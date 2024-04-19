---
outline: deep
---

# 使用 neon 实现 Rust 开发 node 模块化插件

官网：https://github.com/neon-bindings/neon

## 一.使用 create-neon 脚手架创建项目

```bash
npm init neon rslib
```

接下来就是按照提示来输入相关的项目信息，全部按回车键跳过就好，后续需要修改可以在 `package.json`和 `Cargo.toml` 中进行修改。

命令创建完之后，我们可以看见这样的一个目录结构：

```
└─RSLIB
    │  .gitignore
    │  Cargo.toml
    │  package.json
    │  README.md
    └─src
       lib.rs
```

## 二.编写 rust 代码

打开文件 `RSLIB/src/lib.rs` ，写入如下代码：

```rust
// 预导入 neon 所有相关的属性
use neon::prelude::*;

// 编写函数，cx 里面放着一些关于函数的上下文信息，JsResult是一个泛型的返回类型
fn count_words(mut cx: FunctionContext) -> JsResult<JsNumber> {
    // JS函数的第一个参数，类型为 string
    let text = cx.argument::<JsString>(0)?.value(&mut cx);
    // JS函数的第二个参数，类型为 string
    let word = cx.argument::<JsString>(1)?.value(&mut cx);
    // 返回一个数字，计算文本中出现单词的次数，将所有单词转小写，然后再根据空格分割，再过滤算出个数
    Ok(cx.number(
        text.to_lowercase()
            .split(" ")
            .filter(|s| s == &word)
            .count() as f64,
    ))
}

#[neon::main]
fn main(mut cx: ModuleContext) -> NeonResult<()> {
    cx.export_function("count_words", count_words)?;
    Ok(())
}

```

## 三.编译为 nodejs 插件

编写完成 Rust 代码之后，接下来将项目生成 node 模块，项目根目录下运行命令：

```bash
npm install
```

然后依赖会自动安装并且会执行相应的 cargo 编译命令，完成之后你可以看到在根目录下生成了一个新文件 `index.node`

## 四.Node.js 加载插件文件

### 1.commonjs 模块化加载插件

```js
const rsModel = require("./index.node")

const testText = "Nice to meet you"
const count = rsModel.count_words(testText, "you")
console.log(count) // 输出1
```

### 2.esmodule 模块化加载插件

```js
import { createRequire } from "module"
const cjsRequire = createRequire(import.meta.url)
const rsModel = cjsRequire("./index.node")

const testText = "Nice to meet you"
const count = rsModel.count_words(testText, "you")
console.log(count) // 输出1
```

### 五.在 Electron 中使用 neon 的区别

https://juejin.cn/post/7028816441935675405  
https://juejin.cn/post/7029325530168033288
