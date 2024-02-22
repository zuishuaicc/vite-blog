---
outline: deep
---

# Rust 开发

## 一、环境要求

必须具有 c++编译环境

## 二、安装 Rust

### 1，macOS、Linux 或其它类 Unix 系统可直接使用脚本安装

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

### 2，windows 系统可通过官方网址下载 msi 格式的 rustup 安装，直接运行安装

官网地址 https://www.rust-lang.org/zh-CN/learn/get-started

### 3，安装程序完成后，查看版本号，确认是否安装成功

查看 rust 版本

```bash
rustc --version
```

查看 cargo 版本

```bash
cargo --version
```

### 4,更新 rust 版本

因 rust 官方发行版本比较频繁，所以，想要体验 rust 新功能可自行更行 rust 版本，

```bash
rustup update
```

## 三、idea 安装与配置

1,下载 vscode 并安装

2，vscode 扩展市场直接搜索 Rust 插件安装即可，他会附带安装三个插件，包括 rust-analyzer，可进行代码语法检查和格式化

3，vscode 扩展市场搜索 CodeLLDB，用于 rust 程序 debug

## 四、创建 Rust 工程

1，通过 cargo 包管理器直接创建名字为 hello-rust 的工程

```bash
cargo new hello-rust
```

这会生成一个名为 hello-rust 的新目录，其中包含以下文件：

```
hello-rust
|- Cargo.toml
|- src
  |- main.rs
```

2，文件目录结构说明  
1️⃣，Cargo.toml 为 Rust 的清单文件。其中包含了项目的元数据和依赖库，相当于 npm 的 package.json  
2️⃣，main.rs 即为入口文件，里面的 fn main(){} 就是入口函数

## 五、Rust 工程打包

1,使用 rustc 打包

```bash
rustc ./src/main.rs
```

2,通过 cargo 打包

```bash
cargo build
```

会生成 target 目录，在 target/debug 中，有一个与工程文件夹同名的可执行文件，该文件即为生成的安装包

**注：如编译正式发行包，需加上--release 参数，优化打包**

```bash
cargo build --release
```

生成的可执行文件在 target/release 文件夹中，而不是 debug 了

## 六、执行 Rust 包

1,使用脚本执行方式执行

```bash
./target/debug/工程名字
```

2，使用 cargo 执行

```bash
cargo run
```

**注：使用 cargo 执行时，工程会先进行 build 编译，之后再执行编译后的可执行文件**

## 七、rust 依赖包管理

1,添加可执行文件依赖

```bash
cargo install 依赖名
```

2,添加库类型依赖

```bash
cargo add .
```

## 八、实现一个简单的命令行工具

https://mp.weixin.qq.com/s/VPi-I5DiUFIqwh0XOcsF5g

## 九、Rust 创建动态链接库并使用

https://zhuanlan.zhihu.com/p/667830617

## 十、rust 中 create-type 类型的区别

https://cloud.tencent.com/developer/article/1583081
