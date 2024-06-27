import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.b85f4cea.js";const d=JSON.parse('{"title":"使用 wasm-bindgen 实现 Rust 开发 wasm","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"views/application/rust/rust-wasm.md","filePath":"views/application/rust/rust-wasm.md","lastUpdated":1719498828000}'),p={name:"views/application/rust/rust-wasm.md"},o=l(`<h1 id="使用-wasm-bindgen-实现-rust-开发-wasm" tabindex="-1">使用 wasm-bindgen 实现 Rust 开发 wasm <a class="header-anchor" href="#使用-wasm-bindgen-实现-rust-开发-wasm" aria-label="Permalink to &quot;使用 wasm-bindgen 实现 Rust 开发 wasm&quot;">​</a></h1><h2 id="一-环境" tabindex="-1">一.环境 <a class="header-anchor" href="#一-环境" aria-label="Permalink to &quot;一.环境&quot;">​</a></h2><p>Rust 1.70.0<br> wasm-bindgen 0.2.87</p><h2 id="二-创建项目并添加依赖" tabindex="-1">二.创建项目并添加依赖 <a class="header-anchor" href="#二-创建项目并添加依赖" aria-label="Permalink to &quot;二.创建项目并添加依赖&quot;">​</a></h2><ol><li>使用 Cargo 创建一个名为 hello-wasm 的项目：</li></ol><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#FFCB6B;">cargo</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">new</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--lib</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">hello-wasm</span></span></code></pre><pre class="shiki material-theme-palenight vp-code-light"><code><span class="line"><span style="color:#FFCB6B;">cargo</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">new</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--lib</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">hello-wasm</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2"><li>进入项目，打开文件 Cargo.toml，添加依赖：</li></ol><div class="language-toml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">toml</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#FFCB6B;">lib</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#BABED8;">crate-type </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">cdylib</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#FFCB6B;">dependencies</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#BABED8;">wasm-bindgen </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0.2.87</span><span style="color:#89DDFF;">&quot;</span></span></code></pre><pre class="shiki material-theme-palenight vp-code-light"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#FFCB6B;">lib</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#BABED8;">crate-type </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">cdylib</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#FFCB6B;">dependencies</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#BABED8;">wasm-bindgen </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0.2.87</span><span style="color:#89DDFF;">&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="三-更新-lib-rs" tabindex="-1">三.更新 lib.rs <a class="header-anchor" href="#三-更新-lib-rs" aria-label="Permalink to &quot;三.更新 lib.rs&quot;">​</a></h2><p>默认创建项目中，存在一个名为 lib.rs 的文件，将内容全部替换成：</p><div class="language-rust vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">rust</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#F78C6C;">use</span><span style="color:#FFCB6B;"> wasm_bindgen</span><span style="color:#89DDFF;">::</span><span style="color:#FFCB6B;">prelude</span><span style="color:#89DDFF;">::*;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">#[</span><span style="color:#BABED8;">wasm_bindgen</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#F78C6C;">pub</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">fn</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">add</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">a</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">i32</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> b</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">i32</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">i32</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  a </span><span style="color:#89DDFF;">+</span><span style="color:#BABED8;"> b</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><pre class="shiki material-theme-palenight vp-code-light"><code><span class="line"><span style="color:#F78C6C;">use</span><span style="color:#FFCB6B;"> wasm_bindgen</span><span style="color:#89DDFF;">::</span><span style="color:#FFCB6B;">prelude</span><span style="color:#89DDFF;">::*;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">#[</span><span style="color:#BABED8;">wasm_bindgen</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#F78C6C;">pub</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">fn</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">add</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">a</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">i32</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> b</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">i32</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">i32</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  a </span><span style="color:#89DDFF;">+</span><span style="color:#BABED8;"> b</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="四-编译" tabindex="-1">四.编译 <a class="header-anchor" href="#四-编译" aria-label="Permalink to &quot;四.编译&quot;">​</a></h2><p>然后我们可以进行编译了，编译之前需要安装一个工具 wasm-pack：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#FFCB6B;">cargo</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">install</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">wasm-pack</span></span></code></pre><pre class="shiki material-theme-palenight vp-code-light"><code><span class="line"><span style="color:#FFCB6B;">cargo</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">install</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">wasm-pack</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>然后进行编译：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#FFCB6B;">wasm-pack</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">build</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--target</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">web</span></span></code></pre><pre class="shiki material-theme-palenight vp-code-light"><code><span class="line"><span style="color:#FFCB6B;">wasm-pack</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">build</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--target</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">web</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="五-前端引入" tabindex="-1">五.前端引入 <a class="header-anchor" href="#五-前端引入" aria-label="Permalink to &quot;五.前端引入&quot;">​</a></h2><ol><li>创建 index.html</li></ol><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#89DDFF;">&lt;!</span><span style="color:#F07178;">DOCTYPE</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">en</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">charset</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">UTF-8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">viewport</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">width=device-width, initial-scale=1.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">使用Rust和WebAssembly整花活儿</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    Hello, World!</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><pre class="shiki material-theme-palenight vp-code-light"><code><span class="line"><span style="color:#89DDFF;">&lt;!</span><span style="color:#F07178;">DOCTYPE</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">en</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">charset</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">UTF-8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">viewport</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">width=device-width, initial-scale=1.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">使用Rust和WebAssembly整花活儿</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    Hello, World!</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><ol start="2"><li>引入 WASM</li></ol><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">module</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    import init, </span><span style="color:#89DDFF;">{</span><span style="color:#BABED8;"> add </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> from &#39;./pkg/hello_wasm.js&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">    const run = async () =&gt; </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">init</span><span style="color:#BABED8;">();</span></span>
<span class="line"><span style="color:#BABED8;">        const result </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">add</span><span style="color:#BABED8;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">2</span><span style="color:#BABED8;">);</span></span>
<span class="line"><span style="color:#BABED8;">        console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">the result from rust is: </span><span style="color:#89DDFF;">\${</span><span style="color:#BABED8;">result</span><span style="color:#89DDFF;">}\`</span><span style="color:#BABED8;">);</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">    run();</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><pre class="shiki material-theme-palenight vp-code-light"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">module</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    import init, </span><span style="color:#89DDFF;">{</span><span style="color:#BABED8;"> add </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> from &#39;./pkg/hello_wasm.js&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">    const run = async () =&gt; </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">init</span><span style="color:#BABED8;">();</span></span>
<span class="line"><span style="color:#BABED8;">        const result </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">add</span><span style="color:#BABED8;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">2</span><span style="color:#BABED8;">);</span></span>
<span class="line"><span style="color:#BABED8;">        console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">the result from rust is: </span><span style="color:#89DDFF;">\${</span><span style="color:#BABED8;">result</span><span style="color:#89DDFF;">}\`</span><span style="color:#BABED8;">);</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">    run();</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="六-验证" tabindex="-1">六. 验证 <a class="header-anchor" href="#六-验证" aria-label="Permalink to &quot;六. 验证&quot;">​</a></h2><p>运行该 html 文件控制台就可以得到 wasm 的计算结果</p>`,23),e=[o];function t(r,c,D,F,y,i){return a(),n("div",null,e)}const m=s(p,[["render",t]]);export{d as __pageData,m as default};