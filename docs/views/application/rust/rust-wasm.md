---
outline: deep
---

# 使用 wasm-bindgen 实现 Rust 开发 wasm

## 一.环境

Rust 1.70.0  
wasm-bindgen 0.2.87

## 二.创建项目并添加依赖

1. 使用 Cargo 创建一个名为 hello-wasm 的项目：

```bash
cargo new --lib hello-wasm

```

2. 进入项目，打开文件 Cargo.toml，添加依赖：

```toml
[lib]
crate-type = ["cdylib"]

[dependencies]
wasm-bindgen = "0.2.87"
```

## 三.更新 lib.rs

默认创建项目中，存在一个名为 lib.rs 的文件，将内容全部替换成：

```rust
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn add(a: i32, b: i32) -> i32 {
  a + b
}
```

## 四.编译

然后我们可以进行编译了，编译之前需要安装一个工具 wasm-pack：

```bash
cargo install wasm-pack
```

然后进行编译：

```bash
wasm-pack build --target web
```

## 五.前端引入

1. 创建 index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>使用Rust和WebAssembly整花活儿</title>
  </head>

  <body>
    Hello, World!
  </body>
</html>
```

2. 引入 WASM

```js
<script type="module">
    import init, { add } from './pkg/hello_wasm.js';

    const run = async () => {
        await init();
        const result = add(1, 2);
        console.log(`the result from rust is: ${result}`);
    }

    run();
</script>
```

## 六. 验证

运行该 html 文件控制台就可以得到 wasm 的计算结果
