import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.b85f4cea.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"views/techStack/bat.md","filePath":"views/techStack/bat.md","lastUpdated":1747392621000}'),p={name:"views/techStack/bat.md"},e=l(`<div class="language-bat vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bat</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#676E95;font-style:italic;">::           --是批处理文件中一种注释语句的方式;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#89DDFF;font-style:italic;">REM</span><span style="color:#676E95;font-style:italic;">         --表示在回显状态开启时也不显示该注释行,运行BAT时就会自动忽略这个句子;</span></span>
<span class="line"><span style="color:#89DDFF;">@echo</span><span style="color:#BABED8;"> off    --执行以后，后面所有的命令均不显示，包括本条命令;</span></span>
<span class="line"><span style="color:#89DDFF;">echo</span><span style="color:#BABED8;"> off    --执行以后，后面所有的命令均不显示，但本条命令是显示的;</span></span>
<span class="line"><span style="color:#89DDFF;">echo</span><span style="color:#BABED8;">         --输出语句，相当于system.out.println();</span></span>
<span class="line"><span style="color:#89DDFF;">pause</span><span style="color:#BABED8;">        --作用是使程序暂停，也就是输出“请按任意键继续…”的原因;</span></span></code></pre><pre class="shiki material-theme-palenight vp-code-light"><code><span class="line"><span style="color:#676E95;font-style:italic;">::           --是批处理文件中一种注释语句的方式;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#89DDFF;font-style:italic;">REM</span><span style="color:#676E95;font-style:italic;">         --表示在回显状态开启时也不显示该注释行,运行BAT时就会自动忽略这个句子;</span></span>
<span class="line"><span style="color:#89DDFF;">@echo</span><span style="color:#BABED8;"> off    --执行以后，后面所有的命令均不显示，包括本条命令;</span></span>
<span class="line"><span style="color:#89DDFF;">echo</span><span style="color:#BABED8;"> off    --执行以后，后面所有的命令均不显示，但本条命令是显示的;</span></span>
<span class="line"><span style="color:#89DDFF;">echo</span><span style="color:#BABED8;">         --输出语句，相当于system.out.println();</span></span>
<span class="line"><span style="color:#89DDFF;">pause</span><span style="color:#BABED8;">        --作用是使程序暂停，也就是输出“请按任意键继续…”的原因;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="启动mongodb" tabindex="-1">启动mongodb <a class="header-anchor" href="#启动mongodb" aria-label="Permalink to &quot;启动mongodb&quot;">​</a></h2><div class="language-bat vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bat</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#676E95;font-style:italic;">::启动mongodb的命令</span></span>
<span class="line"><span style="color:#89DDFF;">@echo</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">off</span></span>
<span class="line"><span style="color:#89DDFF;">echo</span><span style="color:#BABED8;"> mongodb start......</span></span>
<span class="line"><span style="color:#89DDFF;">title</span><span style="color:#BABED8;"> mongodb-server</span></span>
<span class="line"><span style="color:#89DDFF;">set</span><span style="color:#BABED8;"> ENV_HOME</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">D:MongoDB\\bin</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">color</span><span style="color:#BABED8;"> 0a</span></span>
<span class="line"><span style="color:#89DDFF;">cd</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">%</span><span style="color:#BABED8;">ENV_HOME</span><span style="color:#89DDFF;">%</span></span>
<span class="line"><span style="color:#BABED8;">mongod.exe --auth --dbpath=d:/MongoDB/data/db</span></span></code></pre><pre class="shiki material-theme-palenight vp-code-light"><code><span class="line"><span style="color:#676E95;font-style:italic;">::启动mongodb的命令</span></span>
<span class="line"><span style="color:#89DDFF;">@echo</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">off</span></span>
<span class="line"><span style="color:#89DDFF;">echo</span><span style="color:#BABED8;"> mongodb start......</span></span>
<span class="line"><span style="color:#89DDFF;">title</span><span style="color:#BABED8;"> mongodb-server</span></span>
<span class="line"><span style="color:#89DDFF;">set</span><span style="color:#BABED8;"> ENV_HOME</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">D:MongoDB\\bin</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">color</span><span style="color:#BABED8;"> 0a</span></span>
<span class="line"><span style="color:#89DDFF;">cd</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">%</span><span style="color:#BABED8;">ENV_HOME</span><span style="color:#89DDFF;">%</span></span>
<span class="line"><span style="color:#BABED8;">mongod.exe --auth --dbpath=d:/MongoDB/data/db</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="启动redis" tabindex="-1">启动redis <a class="header-anchor" href="#启动redis" aria-label="Permalink to &quot;启动redis&quot;">​</a></h2><div class="language-bat vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bat</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#676E95;font-style:italic;">::启动redis的命令</span></span>
<span class="line"><span style="color:#89DDFF;">@echo</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">off</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">::打印日志</span></span>
<span class="line"><span style="color:#89DDFF;">echo</span><span style="color:#BABED8;"> redis start......</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">::窗口标题</span></span>
<span class="line"><span style="color:#89DDFF;">title</span><span style="color:#BABED8;"> redis-server</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">::设置cd路径</span></span>
<span class="line"><span style="color:#89DDFF;">set</span><span style="color:#BABED8;"> ENV_HOME</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">D:Redis</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">::设置字体颜色</span></span>
<span class="line"><span style="color:#89DDFF;">color</span><span style="color:#BABED8;"> 0a</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">::cd进入路径</span></span>
<span class="line"><span style="color:#89DDFF;">cd</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">%</span><span style="color:#BABED8;">ENV_HOME</span><span style="color:#89DDFF;">%</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">::需要启动的程序名字 后接配置</span></span>
<span class="line"><span style="color:#BABED8;">redis-server.exe</span></span>
<span class="line"><span style="color:#BABED8;">redis.windows.yml</span></span></code></pre><pre class="shiki material-theme-palenight vp-code-light"><code><span class="line"><span style="color:#676E95;font-style:italic;">::启动redis的命令</span></span>
<span class="line"><span style="color:#89DDFF;">@echo</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">off</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">::打印日志</span></span>
<span class="line"><span style="color:#89DDFF;">echo</span><span style="color:#BABED8;"> redis start......</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">::窗口标题</span></span>
<span class="line"><span style="color:#89DDFF;">title</span><span style="color:#BABED8;"> redis-server</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">::设置cd路径</span></span>
<span class="line"><span style="color:#89DDFF;">set</span><span style="color:#BABED8;"> ENV_HOME</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">D:Redis</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">::设置字体颜色</span></span>
<span class="line"><span style="color:#89DDFF;">color</span><span style="color:#BABED8;"> 0a</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">::cd进入路径</span></span>
<span class="line"><span style="color:#89DDFF;">cd</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">%</span><span style="color:#BABED8;">ENV_HOME</span><span style="color:#89DDFF;">%</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">::需要启动的程序名字 后接配置</span></span>
<span class="line"><span style="color:#BABED8;">redis-server.exe</span></span>
<span class="line"><span style="color:#BABED8;">redis.windows.yml</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>`,5),o=[e];function t(c,r,i,D,y,d){return n(),a("div",null,o)}const B=s(p,[["render",t]]);export{b as __pageData,B as default};
