import{_ as a,o as s,c as n,Q as l}from"./chunks/framework.249ccecd.js";const B=JSON.parse('{"title":"wx-formdata","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"views/frontend/wx-formdata.md","filePath":"views/frontend/wx-formdata.md","lastUpdated":null}'),e={name:"views/frontend/wx-formdata.md"},p=l(`<h1 id="wx-formdata" tabindex="-1">wx-formdata <a class="header-anchor" href="#wx-formdata" aria-label="Permalink to &quot;wx-formdata&quot;">​</a></h1><p><strong>封装库地址</strong> <a href="https://github.com/zlyboy/wx-formdata#readme" target="_blank" rel="noreferrer">https://github.com/zlyboy/wx-formdata#readme</a><br> 在小程序中使用formdata上传数据，可实现多文件上传<br><strong>也可使用最新的ts版formdata库</strong><a href="https://www.npmjs.com/package/miniprogram-formdata" target="_blank" rel="noreferrer">https://www.npmjs.com/package/miniprogram-formdata</a></p><h2 id="用法" tabindex="-1">用法 <a class="header-anchor" href="#用法" aria-label="Permalink to &quot;用法&quot;">​</a></h2><p>跟浏览器中的FormData对象类似 引入js文件</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> FormData </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">require</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./formData.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">)</span></span></code></pre><pre class="shiki material-theme-palenight vp-code-light"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> FormData </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">require</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./formData.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>new一个FormData对象</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> formData </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">new</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">FormData</span><span style="color:#BABED8;">()</span><span style="color:#89DDFF;">;</span></span></code></pre><pre class="shiki material-theme-palenight vp-code-light"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> formData </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">new</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">FormData</span><span style="color:#BABED8;">()</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>调用它的<a href="#formdataappend">append()</a>方法来添加字段或者调用<a href="#formdataappendfile">appendFile()</a>方法添加文件</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#BABED8;">formData</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">append</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">value</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">formData</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">appendFile</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">file</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> filepath</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">文件名</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span></code></pre><pre class="shiki material-theme-palenight vp-code-light"><code><span class="line"><span style="color:#BABED8;">formData</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">append</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">value</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">formData</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">appendFile</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">file</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> filepath</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">文件名</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>添加完成后调用它的<a href="#formdatagetdata">getData()</a>生成上传数据，之后调用小程序的wx.request提交请求</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> data </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> formData</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getData</span><span style="color:#BABED8;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">wx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">request</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">url</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://接口地址</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">header</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">content-type</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> data</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">contentType</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> data</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">buffer</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span></code></pre><pre class="shiki material-theme-palenight vp-code-light"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> data </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> formData</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getData</span><span style="color:#BABED8;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">wx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">request</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">url</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://接口地址</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">header</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">content-type</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> data</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">contentType</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> data</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">buffer</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="成员函数" tabindex="-1">成员函数 <a class="header-anchor" href="#成员函数" aria-label="Permalink to &quot;成员函数&quot;">​</a></h2><h3 id="formdata-append" tabindex="-1">FormData.append() <a class="header-anchor" href="#formdata-append" aria-label="Permalink to &quot;FormData.append()&quot;">​</a></h3><h4 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-label="Permalink to &quot;语法&quot;">​</a></h4><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#BABED8;">formData</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">append</span><span style="color:#BABED8;">(name</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> value)</span><span style="color:#89DDFF;">;</span></span></code></pre><pre class="shiki material-theme-palenight vp-code-light"><code><span class="line"><span style="color:#BABED8;">formData</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">append</span><span style="color:#BABED8;">(name</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> value)</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">参数名</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">name</td><td style="text-align:left;">value中包含的数据对应的表单名称</td></tr><tr><td style="text-align:left;">value</td><td style="text-align:left;">表单的值</td></tr></tbody></table><h3 id="formdata-appendfile" tabindex="-1">FormData.appendFile() <a class="header-anchor" href="#formdata-appendfile" aria-label="Permalink to &quot;FormData.appendFile()&quot;">​</a></h3><h4 id="语法-1" tabindex="-1">语法 <a class="header-anchor" href="#语法-1" aria-label="Permalink to &quot;语法&quot;">​</a></h4><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#BABED8;">formData</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">appendFile</span><span style="color:#BABED8;">(name</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> filepath</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> fileName)</span><span style="color:#89DDFF;">;</span></span></code></pre><pre class="shiki material-theme-palenight vp-code-light"><code><span class="line"><span style="color:#BABED8;">formData</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">appendFile</span><span style="color:#BABED8;">(name</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> filepath</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> fileName)</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="参数-1" tabindex="-1">参数 <a class="header-anchor" href="#参数-1" aria-label="Permalink to &quot;参数&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">参数名</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">name</td><td style="text-align:left;">value中包含的数据对应的表单名称</td></tr><tr><td style="text-align:left;">filepath</td><td style="text-align:left;">文件路径</td></tr><tr><td style="text-align:left;">fileName</td><td style="text-align:left;">文件名【可选】</td></tr></tbody></table><h3 id="formdata-getdata" tabindex="-1">FormData.getData() <a class="header-anchor" href="#formdata-getdata" aria-label="Permalink to &quot;FormData.getData()&quot;">​</a></h3><h4 id="语法-2" tabindex="-1">语法 <a class="header-anchor" href="#语法-2" aria-label="Permalink to &quot;语法&quot;">​</a></h4><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> data </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> formData</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getData</span><span style="color:#BABED8;">()</span><span style="color:#89DDFF;">;</span></span></code></pre><pre class="shiki material-theme-palenight vp-code-light"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> data </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> formData</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getData</span><span style="color:#BABED8;">()</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="返回值对象属性" tabindex="-1">返回值对象属性 <a class="header-anchor" href="#返回值对象属性" aria-label="Permalink to &quot;返回值对象属性&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">属性名</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">buffer</td><td style="text-align:left;">表单数据的ArrayBuffer对象</td></tr><tr><td style="text-align:left;">contentType</td><td style="text-align:left;">http请求Content-Type头部内容</td></tr></tbody></table>`,27),t=[p];function o(r,c,D,i,y,F){return s(),n("div",null,t)}const h=a(e,[["render",o]]);export{B as __pageData,h as default};
