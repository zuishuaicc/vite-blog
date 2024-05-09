import{_ as s,o as a,c as e,Q as n}from"./chunks/framework.249ccecd.js";const l="/vite-blog/assets/atleast.96ccbcd3.png",h=JSON.parse('{"title":"","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"views/techStack/dailyNote.md","filePath":"views/techStack/dailyNote.md","lastUpdated":1715259434000}'),p={name:"views/techStack/dailyNote.md"},o=n('<h2 id="vscode下载cdn" tabindex="-1">vscode下载CDN <a class="header-anchor" href="#vscode下载cdn" aria-label="Permalink to &quot;vscode下载CDN&quot;">​</a></h2><p><strong>/stable地址之前的地址换为如下内容</strong>：</p><p><a href="https://link.zhihu.com/?target=http%3A//vscode.cdn.azure.cn/" target="_blank" rel="noreferrer">vscode.cdn.azure.cn</a> &lt;--------就是左边这个</p><h2 id="处理npm包依赖冲突" tabindex="-1">处理npm包依赖冲突 <a class="header-anchor" href="#处理npm包依赖冲突" aria-label="Permalink to &quot;处理npm包依赖冲突&quot;">​</a></h2><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">install</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">xxxx</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--legacy-peer-deps</span></span></code></pre><pre class="shiki material-theme-palenight vp-code-light"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">install</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">xxxx</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--legacy-peer-deps</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="vitepress中文官网" tabindex="-1">vitepress中文官网 <a class="header-anchor" href="#vitepress中文官网" aria-label="Permalink to &quot;vitepress中文官网&quot;">​</a></h2><p><a href="https://vitejs.cn/vitepress/" target="_blank" rel="noreferrer">https://vitejs.cn/vitepress/</a><br><a href="https://vitepress.qzxdp.cn/guide/what-is-vitepress.html" target="_blank" rel="noreferrer">https://vitepress.qzxdp.cn/guide/what-is-vitepress.html</a></p><h2 id="ts定义种少包含一种类型-工具类型" tabindex="-1">ts定义种少包含一种类型(工具类型) <a class="header-anchor" href="#ts定义种少包含一种类型-工具类型" aria-label="Permalink to &quot;ts定义种少包含一种类型(工具类型)&quot;">​</a></h2><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">AtleastOne</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">,</span><span style="color:#FFCB6B;">U</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#BABED8;">[</span><span style="color:#FFCB6B;">k</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">in</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">keyof</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#BABED8;">]</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Pick</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">K</span><span style="color:#89DDFF;">&gt;}</span><span style="color:#BABED8;">=</span><span style="color:#FFCB6B;">Partial</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;&amp;</span><span style="color:#FFCB6B;">U</span><span style="color:#BABED8;">[</span><span style="color:#89DDFF;">keyof</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">U</span><span style="color:#BABED8;">]</span></span></code></pre><pre class="shiki material-theme-palenight vp-code-light"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">AtleastOne</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">,</span><span style="color:#FFCB6B;">U</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#BABED8;">[</span><span style="color:#FFCB6B;">k</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">in</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">keyof</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#BABED8;">]</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Pick</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">K</span><span style="color:#89DDFF;">&gt;}</span><span style="color:#BABED8;">=</span><span style="color:#FFCB6B;">Partial</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;&amp;</span><span style="color:#FFCB6B;">U</span><span style="color:#BABED8;">[</span><span style="color:#89DDFF;">keyof</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">U</span><span style="color:#BABED8;">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+l+'" alt="图片"></p>',10),t=[o];function r(c,B,y,i,F,D){return a(),e("div",null,t)}const m=s(p,[["render",r]]);export{h as __pageData,m as default};