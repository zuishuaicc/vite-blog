import{_ as s,o as a,c as e,Q as n}from"./chunks/framework.249ccecd.js";const m=JSON.parse('{"title":"Rust 开发","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"views/application/rust/rust-base.md","filePath":"views/application/rust/rust-base.md","lastUpdated":null}'),l={name:"views/application/rust/rust-base.md"},p=n(`<h1 id="rust-开发" tabindex="-1">Rust 开发 <a class="header-anchor" href="#rust-开发" aria-label="Permalink to &quot;Rust 开发&quot;">​</a></h1><h2 id="一、环境要求" tabindex="-1">一、环境要求 <a class="header-anchor" href="#一、环境要求" aria-label="Permalink to &quot;一、环境要求&quot;">​</a></h2><p>必须具有 c++编译环境</p><h2 id="二、安装-rust" tabindex="-1">二、安装 Rust <a class="header-anchor" href="#二、安装-rust" aria-label="Permalink to &quot;二、安装 Rust&quot;">​</a></h2><h3 id="_1-macos、linux-或其它类-unix-系统可直接使用脚本安装" tabindex="-1">1，macOS、Linux 或其它类 Unix 系统可直接使用脚本安装 <a class="header-anchor" href="#_1-macos、linux-或其它类-unix-系统可直接使用脚本安装" aria-label="Permalink to &quot;1，macOS、Linux 或其它类 Unix 系统可直接使用脚本安装&quot;">​</a></h3><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--proto</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">=https</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--tlsv1.2</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-sSf</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">https://sh.rustup.rs</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">sh</span></span></code></pre><pre class="shiki material-theme-palenight vp-code-light"><code><span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--proto</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">=https</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--tlsv1.2</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-sSf</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">https://sh.rustup.rs</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">sh</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_2-windows-系统可通过官方网址下载-msi-格式的-rustup-安装-直接运行安装" tabindex="-1">2，windows 系统可通过官方网址下载 msi 格式的 rustup 安装，直接运行安装 <a class="header-anchor" href="#_2-windows-系统可通过官方网址下载-msi-格式的-rustup-安装-直接运行安装" aria-label="Permalink to &quot;2，windows 系统可通过官方网址下载 msi 格式的 rustup 安装，直接运行安装&quot;">​</a></h3><p>官网地址 <a href="https://www.rust-lang.org/zh-CN/learn/get-started" target="_blank" rel="noreferrer">https://www.rust-lang.org/zh-CN/learn/get-started</a></p><h3 id="_3-安装程序完成后-查看版本号-确认是否安装成功" tabindex="-1">3，安装程序完成后，查看版本号，确认是否安装成功 <a class="header-anchor" href="#_3-安装程序完成后-查看版本号-确认是否安装成功" aria-label="Permalink to &quot;3，安装程序完成后，查看版本号，确认是否安装成功&quot;">​</a></h3><p>查看 rust 版本</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#FFCB6B;">rustc</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--version</span></span></code></pre><pre class="shiki material-theme-palenight vp-code-light"><code><span class="line"><span style="color:#FFCB6B;">rustc</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--version</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>查看 cargo 版本</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#FFCB6B;">cargo</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--version</span></span></code></pre><pre class="shiki material-theme-palenight vp-code-light"><code><span class="line"><span style="color:#FFCB6B;">cargo</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--version</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_4-更新-rust-版本" tabindex="-1">4,更新 rust 版本 <a class="header-anchor" href="#_4-更新-rust-版本" aria-label="Permalink to &quot;4,更新 rust 版本&quot;">​</a></h3><p>因 rust 官方发行版本比较频繁，所以，想要体验 rust 新功能可自行更行 rust 版本，</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#FFCB6B;">rustup</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">update</span></span></code></pre><pre class="shiki material-theme-palenight vp-code-light"><code><span class="line"><span style="color:#FFCB6B;">rustup</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">update</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="三、idea-安装与配置" tabindex="-1">三、idea 安装与配置 <a class="header-anchor" href="#三、idea-安装与配置" aria-label="Permalink to &quot;三、idea 安装与配置&quot;">​</a></h2><p>1,下载 vscode 并安装</p><p>2，vscode 扩展市场直接搜索 Rust 插件安装即可，他会附带安装三个插件，包括 rust-analyzer，可进行代码语法检查和格式化</p><p>3，vscode 扩展市场搜索 CodeLLDB，用于 rust 程序 debug</p><h2 id="四、创建-rust-工程" tabindex="-1">四、创建 Rust 工程 <a class="header-anchor" href="#四、创建-rust-工程" aria-label="Permalink to &quot;四、创建 Rust 工程&quot;">​</a></h2><p>1，通过 cargo 包管理器直接创建名字为 hello-rust 的工程</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#FFCB6B;">cargo</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">new</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">hello-rust</span></span></code></pre><pre class="shiki material-theme-palenight vp-code-light"><code><span class="line"><span style="color:#FFCB6B;">cargo</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">new</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">hello-rust</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>这会生成一个名为 hello-rust 的新目录，其中包含以下文件：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#babed8;">hello-rust</span></span>
<span class="line"><span style="color:#babed8;">|- Cargo.toml</span></span>
<span class="line"><span style="color:#babed8;">|- src</span></span>
<span class="line"><span style="color:#babed8;">  |- main.rs</span></span></code></pre><pre class="shiki material-theme-palenight vp-code-light"><code><span class="line"><span style="color:#babed8;">hello-rust</span></span>
<span class="line"><span style="color:#babed8;">|- Cargo.toml</span></span>
<span class="line"><span style="color:#babed8;">|- src</span></span>
<span class="line"><span style="color:#babed8;">  |- main.rs</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>2，文件目录结构说明<br> 1️⃣，Cargo.toml 为 Rust 的清单文件。其中包含了项目的元数据和依赖库，相当于 npm 的 package.json<br> 2️⃣，main.rs 即为入口文件，里面的 fn main(){} 就是入口函数</p><h2 id="五、rust-工程打包" tabindex="-1">五、Rust 工程打包 <a class="header-anchor" href="#五、rust-工程打包" aria-label="Permalink to &quot;五、Rust 工程打包&quot;">​</a></h2><p>1,使用 rustc 打包</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#FFCB6B;">rustc</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">./src/main.rs</span></span></code></pre><pre class="shiki material-theme-palenight vp-code-light"><code><span class="line"><span style="color:#FFCB6B;">rustc</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">./src/main.rs</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>2,通过 cargo 打包</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#FFCB6B;">cargo</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">build</span></span></code></pre><pre class="shiki material-theme-palenight vp-code-light"><code><span class="line"><span style="color:#FFCB6B;">cargo</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">build</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>会生成 target 目录，在 target/debug 中，有一个与工程文件夹同名的可执行文件，该文件即为生成的安装包</p><p><strong>注：如编译正式发行包，需加上--release 参数，优化打包</strong></p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#FFCB6B;">cargo</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">build</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--release</span></span></code></pre><pre class="shiki material-theme-palenight vp-code-light"><code><span class="line"><span style="color:#FFCB6B;">cargo</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">build</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--release</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>生成的可执行文件在 target/release 文件夹中，而不是 debug 了</p><h2 id="六、执行-rust-包" tabindex="-1">六、执行 Rust 包 <a class="header-anchor" href="#六、执行-rust-包" aria-label="Permalink to &quot;六、执行 Rust 包&quot;">​</a></h2><p>1,使用脚本执行方式执行</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#FFCB6B;">./target/debug/工程名字</span></span></code></pre><pre class="shiki material-theme-palenight vp-code-light"><code><span class="line"><span style="color:#FFCB6B;">./target/debug/工程名字</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>2，使用 cargo 执行</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#FFCB6B;">cargo</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">run</span></span></code></pre><pre class="shiki material-theme-palenight vp-code-light"><code><span class="line"><span style="color:#FFCB6B;">cargo</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">run</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>注：使用 cargo 执行时，工程会先进行 build 编译，之后再执行编译后的可执行文件</strong></p><h2 id="七、rust-依赖包管理" tabindex="-1">七、rust 依赖包管理 <a class="header-anchor" href="#七、rust-依赖包管理" aria-label="Permalink to &quot;七、rust 依赖包管理&quot;">​</a></h2><p>1,添加可执行文件依赖</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#FFCB6B;">cargo</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">install</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">依赖名</span></span></code></pre><pre class="shiki material-theme-palenight vp-code-light"><code><span class="line"><span style="color:#FFCB6B;">cargo</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">install</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">依赖名</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>2,添加库类型依赖</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#FFCB6B;">cargo</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">add</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">.</span></span></code></pre><pre class="shiki material-theme-palenight vp-code-light"><code><span class="line"><span style="color:#FFCB6B;">cargo</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">add</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">.</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="八、实现一个简单的命令行工具" tabindex="-1">八、实现一个简单的命令行工具 <a class="header-anchor" href="#八、实现一个简单的命令行工具" aria-label="Permalink to &quot;八、实现一个简单的命令行工具&quot;">​</a></h2><p><a href="https://mp.weixin.qq.com/s/VPi-I5DiUFIqwh0XOcsF5g" target="_blank" rel="noreferrer">https://mp.weixin.qq.com/s/VPi-I5DiUFIqwh0XOcsF5g</a></p><h2 id="九、rust-创建动态链接库并使用" tabindex="-1">九、Rust 创建动态链接库并使用 <a class="header-anchor" href="#九、rust-创建动态链接库并使用" aria-label="Permalink to &quot;九、Rust 创建动态链接库并使用&quot;">​</a></h2><p><a href="https://zhuanlan.zhihu.com/p/667830617" target="_blank" rel="noreferrer">https://zhuanlan.zhihu.com/p/667830617</a></p><h2 id="十、rust-中-create-type-类型的区别" tabindex="-1">十、rust 中 create-type 类型的区别 <a class="header-anchor" href="#十、rust-中-create-type-类型的区别" aria-label="Permalink to &quot;十、rust 中 create-type 类型的区别&quot;">​</a></h2><p><a href="https://cloud.tencent.com/developer/article/1583081" target="_blank" rel="noreferrer">https://cloud.tencent.com/developer/article/1583081</a></p>`,52),t=[p];function r(o,c,i,d,h,u){return a(),e("div",null,t)}const y=s(l,[["render",r]]);export{m as __pageData,y as default};
