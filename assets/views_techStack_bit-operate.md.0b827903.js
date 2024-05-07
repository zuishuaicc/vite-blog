import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.249ccecd.js";const d=JSON.parse('{"title":"位运算","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"views/techStack/bit-operate.md","filePath":"views/techStack/bit-operate.md","lastUpdated":1715097500000}'),p={name:"views/techStack/bit-operate.md"},e=l(`<h1 id="位运算" tabindex="-1">位运算 <a class="header-anchor" href="#位运算" aria-label="Permalink to &quot;位运算&quot;">​</a></h1><h2 id="位运算基本知识" tabindex="-1">位运算基本知识 <a class="header-anchor" href="#位运算基本知识" aria-label="Permalink to &quot;位运算基本知识&quot;">​</a></h2><h3 id="与运算" tabindex="-1">与运算 <a class="header-anchor" href="#与运算" aria-label="Permalink to &quot;与运算&quot;">​</a></h3><p>符号： &amp;<br> 同位所有值都为1，结果为1，否则结果为0</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#F78C6C;">00001010</span></span>
<span class="line"><span style="color:#89DDFF;">&amp;</span></span>
<span class="line"><span style="color:#F78C6C;">00000111</span></span>
<span class="line"><span style="color:#89DDFF;">--------</span></span>
<span class="line"><span style="color:#F78C6C;">00000010</span></span></code></pre><pre class="shiki material-theme-palenight vp-code-light"><code><span class="line"><span style="color:#F78C6C;">00001010</span></span>
<span class="line"><span style="color:#89DDFF;">&amp;</span></span>
<span class="line"><span style="color:#F78C6C;">00000111</span></span>
<span class="line"><span style="color:#89DDFF;">--------</span></span>
<span class="line"><span style="color:#F78C6C;">00000010</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="或运算" tabindex="-1">或运算 <a class="header-anchor" href="#或运算" aria-label="Permalink to &quot;或运算&quot;">​</a></h3><p>符号： ｜<br> 同位所有值都为0，结果为，否则结果为1</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#F78C6C;">00001010</span></span>
<span class="line"><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#F78C6C;">00000111</span></span>
<span class="line"><span style="color:#89DDFF;">--------</span></span>
<span class="line"><span style="color:#F78C6C;">00001111</span></span></code></pre><pre class="shiki material-theme-palenight vp-code-light"><code><span class="line"><span style="color:#F78C6C;">00001010</span></span>
<span class="line"><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#F78C6C;">00000111</span></span>
<span class="line"><span style="color:#89DDFF;">--------</span></span>
<span class="line"><span style="color:#F78C6C;">00001111</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="非运算" tabindex="-1">非运算 <a class="header-anchor" href="#非运算" aria-label="Permalink to &quot;非运算&quot;">​</a></h3><p>符号： ～ 将每一位取反，即0变1，1变0，包括最前面的符号位也要取反</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#89DDFF;">~</span><span style="color:#F78C6C;">00000101</span></span>
<span class="line"><span style="color:#89DDFF;">---------</span></span>
<span class="line"><span style="color:#F78C6C;">11111010</span></span></code></pre><pre class="shiki material-theme-palenight vp-code-light"><code><span class="line"><span style="color:#89DDFF;">~</span><span style="color:#F78C6C;">00000101</span></span>
<span class="line"><span style="color:#89DDFF;">---------</span></span>
<span class="line"><span style="color:#F78C6C;">11111010</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="异或运算" tabindex="-1">异或运算 <a class="header-anchor" href="#异或运算" aria-label="Permalink to &quot;异或运算&quot;">​</a></h3><p>符号： ^ 同位两数相同，结果为0，同位两数不同，结果为1</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#F78C6C;">00001010</span></span>
<span class="line"><span style="color:#89DDFF;">^</span></span>
<span class="line"><span style="color:#F78C6C;">00000111</span></span>
<span class="line"><span style="color:#89DDFF;">--------</span></span>
<span class="line"><span style="color:#F78C6C;">00001101</span></span></code></pre><pre class="shiki material-theme-palenight vp-code-light"><code><span class="line"><span style="color:#F78C6C;">00001010</span></span>
<span class="line"><span style="color:#89DDFF;">^</span></span>
<span class="line"><span style="color:#F78C6C;">00000111</span></span>
<span class="line"><span style="color:#89DDFF;">--------</span></span>
<span class="line"><span style="color:#F78C6C;">00001101</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="左位移运算" tabindex="-1">左位移运算 <a class="header-anchor" href="#左位移运算" aria-label="Permalink to &quot;左位移运算&quot;">​</a></h3><p>符号： &lt;&lt; 将二进制数向左移动指定的位数，右侧用0填充</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#F78C6C;">00000101</span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F78C6C;">2</span></span>
<span class="line"><span style="color:#89DDFF;">----------</span></span>
<span class="line"><span style="color:#F78C6C;">00010100</span></span></code></pre><pre class="shiki material-theme-palenight vp-code-light"><code><span class="line"><span style="color:#F78C6C;">00000101</span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F78C6C;">2</span></span>
<span class="line"><span style="color:#89DDFF;">----------</span></span>
<span class="line"><span style="color:#F78C6C;">00010100</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>从十进制来看，n&lt;&lt;m,相当于 n乘以 2的m次方</strong></p><h3 id="右位移运算" tabindex="-1">右位移运算 <a class="header-anchor" href="#右位移运算" aria-label="Permalink to &quot;右位移运算&quot;">​</a></h3><p>符号： &gt;&gt; 将二进制数向右移动指定的位数，左侧用原来的最高位填充。</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#F78C6C;">11110110</span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#F78C6C;">2</span></span>
<span class="line"><span style="color:#89DDFF;">----------</span></span>
<span class="line"><span style="color:#F78C6C;">11111101</span></span></code></pre><pre class="shiki material-theme-palenight vp-code-light"><code><span class="line"><span style="color:#F78C6C;">11110110</span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#F78C6C;">2</span></span>
<span class="line"><span style="color:#89DDFF;">----------</span></span>
<span class="line"><span style="color:#F78C6C;">11111101</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>右位移可能丢失数据</strong></p><h3 id="无符号右位移运算" tabindex="-1">无符号右位移运算 <a class="header-anchor" href="#无符号右位移运算" aria-label="Permalink to &quot;无符号右位移运算&quot;">​</a></h3><p>符号： &gt;&gt;&gt; 将二进制数向右移动指定的位数，左侧用0填充。</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#F78C6C;">11110110</span><span style="color:#89DDFF;">&gt;&gt;&gt;</span><span style="color:#F78C6C;">2</span></span>
<span class="line"><span style="color:#89DDFF;">----------</span></span>
<span class="line"><span style="color:#F78C6C;">00111101</span></span></code></pre><pre class="shiki material-theme-palenight vp-code-light"><code><span class="line"><span style="color:#F78C6C;">11110110</span><span style="color:#89DDFF;">&gt;&gt;&gt;</span><span style="color:#F78C6C;">2</span></span>
<span class="line"><span style="color:#89DDFF;">----------</span></span>
<span class="line"><span style="color:#F78C6C;">00111101</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>右位移可能丢失数据</strong></p><h2 id="位运算实际应用-做权限控制" tabindex="-1">位运算实际应用：做权限控制 <a class="header-anchor" href="#位运算实际应用-做权限控制" aria-label="Permalink to &quot;位运算实际应用：做权限控制&quot;">​</a></h2><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 保存了锁哟可能的权限</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> perm </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">read</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">0b001</span><span style="color:#89DDFF;">,</span><span style="color:#676E95;font-style:italic;">//可读权限</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">write</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">0b010</span><span style="color:#89DDFF;">,</span><span style="color:#676E95;font-style:italic;">//可写权限</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">create</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">0b100</span><span style="color:#89DDFF;">,</span><span style="color:#676E95;font-style:italic;">//创建权限</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 变量p中保存可读可写权限（通过或运算添加权限）</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> p </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> perm</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">read </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> perm</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">write</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 去掉可写权限(为了防止报错，先添加可写权限再通过异或运算去掉写权限)</span></span>
<span class="line"><span style="color:#BABED8;">p </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> p </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> perm</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">write </span><span style="color:#89DDFF;">^</span><span style="color:#BABED8;"> perm</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">write</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 判断权限：p中是否有可读权限</span></span>
<span class="line"><span style="color:#BABED8;">p </span><span style="color:#89DDFF;">&amp;</span><span style="color:#BABED8;"> perm</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">read </span><span style="color:#89DDFF;">===</span><span style="color:#BABED8;">perm</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">read</span><span style="color:#89DDFF;">?</span><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">可读</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">不可读</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">)</span></span></code></pre><pre class="shiki material-theme-palenight vp-code-light"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 保存了锁哟可能的权限</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> perm </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">read</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">0b001</span><span style="color:#89DDFF;">,</span><span style="color:#676E95;font-style:italic;">//可读权限</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">write</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">0b010</span><span style="color:#89DDFF;">,</span><span style="color:#676E95;font-style:italic;">//可写权限</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">create</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">0b100</span><span style="color:#89DDFF;">,</span><span style="color:#676E95;font-style:italic;">//创建权限</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 变量p中保存可读可写权限（通过或运算添加权限）</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> p </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> perm</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">read </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> perm</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">write</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 去掉可写权限(为了防止报错，先添加可写权限再通过异或运算去掉写权限)</span></span>
<span class="line"><span style="color:#BABED8;">p </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> p </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> perm</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">write </span><span style="color:#89DDFF;">^</span><span style="color:#BABED8;"> perm</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">write</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 判断权限：p中是否有可读权限</span></span>
<span class="line"><span style="color:#BABED8;">p </span><span style="color:#89DDFF;">&amp;</span><span style="color:#BABED8;"> perm</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">read </span><span style="color:#89DDFF;">===</span><span style="color:#BABED8;">perm</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">read</span><span style="color:#89DDFF;">?</span><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">可读</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">不可读</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="变量交换" tabindex="-1">变量交换 <a class="header-anchor" href="#变量交换" aria-label="Permalink to &quot;变量交换&quot;">​</a></h2><h3 id="使用中间变量交换" tabindex="-1">使用中间变量交换 <a class="header-anchor" href="#使用中间变量交换" aria-label="Permalink to &quot;使用中间变量交换&quot;">​</a></h3><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">5</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> b </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">6</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> temp </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> b</span></span>
<span class="line"><span style="color:#BABED8;">b </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> a</span></span>
<span class="line"><span style="color:#BABED8;">a </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> temp</span></span></code></pre><pre class="shiki material-theme-palenight vp-code-light"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">5</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> b </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">6</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> temp </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> b</span></span>
<span class="line"><span style="color:#BABED8;">b </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> a</span></span>
<span class="line"><span style="color:#BABED8;">a </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> temp</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="使用es6结构赋值" tabindex="-1">使用ES6结构赋值 <a class="header-anchor" href="#使用es6结构赋值" aria-label="Permalink to &quot;使用ES6结构赋值&quot;">​</a></h3><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">5</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> b </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">6</span></span>
<span class="line"><span style="color:#BABED8;">[ a </span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> b ] </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> [ b </span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> a]</span></span></code></pre><pre class="shiki material-theme-palenight vp-code-light"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">5</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> b </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">6</span></span>
<span class="line"><span style="color:#BABED8;">[ a </span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> b ] </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> [ b </span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> a]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="使用算数运算-a-b都必须为数字" tabindex="-1">使用算数运算（a，b都必须为数字） <a class="header-anchor" href="#使用算数运算-a-b都必须为数字" aria-label="Permalink to &quot;使用算数运算（a，b都必须为数字）&quot;">​</a></h3><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">5</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> b </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">6</span></span>
<span class="line"><span style="color:#BABED8;">a </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> a </span><span style="color:#89DDFF;">+</span><span style="color:#BABED8;"> b</span></span>
<span class="line"><span style="color:#BABED8;">b </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> a </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;"> b</span></span>
<span class="line"><span style="color:#BABED8;">a </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> a </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;"> b</span></span></code></pre><pre class="shiki material-theme-palenight vp-code-light"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">5</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> b </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">6</span></span>
<span class="line"><span style="color:#BABED8;">a </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> a </span><span style="color:#89DDFF;">+</span><span style="color:#BABED8;"> b</span></span>
<span class="line"><span style="color:#BABED8;">b </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> a </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;"> b</span></span>
<span class="line"><span style="color:#BABED8;">a </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> a </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;"> b</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>可简化为</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">5</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> b </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">6</span></span>
<span class="line"><span style="color:#BABED8;">a </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> b </span><span style="color:#89DDFF;">+</span><span style="color:#BABED8;"> ( b </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> a) </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;"> b</span></span></code></pre><pre class="shiki material-theme-palenight vp-code-light"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">5</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> b </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">6</span></span>
<span class="line"><span style="color:#BABED8;">a </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> b </span><span style="color:#89DDFF;">+</span><span style="color:#BABED8;"> ( b </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> a) </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;"> b</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="使用位运算的异或运算-a-b都必须为整数" tabindex="-1">使用位运算的异或运算（a，b都必须为整数） <a class="header-anchor" href="#使用位运算的异或运算-a-b都必须为整数" aria-label="Permalink to &quot;使用位运算的异或运算（a，b都必须为整数）&quot;">​</a></h3><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">5</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> b </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">6</span></span>
<span class="line"><span style="color:#BABED8;">a </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> a </span><span style="color:#89DDFF;">^</span><span style="color:#BABED8;"> b</span></span>
<span class="line"><span style="color:#BABED8;">b </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> a </span><span style="color:#89DDFF;">^</span><span style="color:#BABED8;"> b</span></span>
<span class="line"><span style="color:#BABED8;">a </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> a </span><span style="color:#89DDFF;">^</span><span style="color:#BABED8;"> b</span></span></code></pre><pre class="shiki material-theme-palenight vp-code-light"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">5</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> b </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">6</span></span>
<span class="line"><span style="color:#BABED8;">a </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> a </span><span style="color:#89DDFF;">^</span><span style="color:#BABED8;"> b</span></span>
<span class="line"><span style="color:#BABED8;">b </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> a </span><span style="color:#89DDFF;">^</span><span style="color:#BABED8;"> b</span></span>
<span class="line"><span style="color:#BABED8;">a </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> a </span><span style="color:#89DDFF;">^</span><span style="color:#BABED8;"> b</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,39),o=[e];function t(c,r,i,y,D,F){return a(),n("div",null,o)}const b=s(p,[["render",t]]);export{d as __pageData,b as default};
