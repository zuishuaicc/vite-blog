import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.808cf4e8.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"bat.md","filePath":"bat.md"}'),p={name:"bat.md"},e=l(`<div class="language-bat vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bat</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">::           --是批处理文件中一种注释语句的方式;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">@</span><span style="color:#F97583;">REM</span><span style="color:#6A737D;">         --表示在回显状态开启时也不显示该注释行,运行BAT时就会自动忽略这个句子;</span></span>
<span class="line"><span style="color:#F97583;">@echo</span><span style="color:#E1E4E8;"> off    --执行以后，后面所有的命令均不显示，包括本条命令;</span></span>
<span class="line"><span style="color:#F97583;">echo</span><span style="color:#E1E4E8;"> off    --执行以后，后面所有的命令均不显示，但本条命令是显示的;</span></span>
<span class="line"><span style="color:#F97583;">echo</span><span style="color:#E1E4E8;">         --输出语句，相当于system.out.println();</span></span>
<span class="line"><span style="color:#F97583;">pause</span><span style="color:#E1E4E8;">        --作用是使程序暂停，也就是输出“请按任意键继续…”的原因;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">::           --是批处理文件中一种注释语句的方式;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">@</span><span style="color:#D73A49;">REM</span><span style="color:#6A737D;">         --表示在回显状态开启时也不显示该注释行,运行BAT时就会自动忽略这个句子;</span></span>
<span class="line"><span style="color:#D73A49;">@echo</span><span style="color:#24292E;"> off    --执行以后，后面所有的命令均不显示，包括本条命令;</span></span>
<span class="line"><span style="color:#D73A49;">echo</span><span style="color:#24292E;"> off    --执行以后，后面所有的命令均不显示，但本条命令是显示的;</span></span>
<span class="line"><span style="color:#D73A49;">echo</span><span style="color:#24292E;">         --输出语句，相当于system.out.println();</span></span>
<span class="line"><span style="color:#D73A49;">pause</span><span style="color:#24292E;">        --作用是使程序暂停，也就是输出“请按任意键继续…”的原因;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="启动mongodb" tabindex="-1">启动mongodb <a class="header-anchor" href="#启动mongodb" aria-label="Permalink to &quot;启动mongodb&quot;">​</a></h2><div class="language-bat vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bat</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">::启动mongodb的命令</span></span>
<span class="line"><span style="color:#F97583;">@echo</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">off</span></span>
<span class="line"><span style="color:#F97583;">echo</span><span style="color:#E1E4E8;"> mongodb start......</span></span>
<span class="line"><span style="color:#F97583;">title</span><span style="color:#E1E4E8;"> mongodb-server</span></span>
<span class="line"><span style="color:#F97583;">set</span><span style="color:#E1E4E8;"> ENV_HOME</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;D:MongoDB\\bin&quot;</span></span>
<span class="line"><span style="color:#F97583;">color</span><span style="color:#E1E4E8;"> 0a</span></span>
<span class="line"><span style="color:#F97583;">cd</span><span style="color:#E1E4E8;"> %ENV_HOME%</span></span>
<span class="line"><span style="color:#E1E4E8;">mongod.exe --auth --dbpath=d:/MongoDB/data/db</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">::启动mongodb的命令</span></span>
<span class="line"><span style="color:#D73A49;">@echo</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">off</span></span>
<span class="line"><span style="color:#D73A49;">echo</span><span style="color:#24292E;"> mongodb start......</span></span>
<span class="line"><span style="color:#D73A49;">title</span><span style="color:#24292E;"> mongodb-server</span></span>
<span class="line"><span style="color:#D73A49;">set</span><span style="color:#24292E;"> ENV_HOME</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;D:MongoDB\\bin&quot;</span></span>
<span class="line"><span style="color:#D73A49;">color</span><span style="color:#24292E;"> 0a</span></span>
<span class="line"><span style="color:#D73A49;">cd</span><span style="color:#24292E;"> %ENV_HOME%</span></span>
<span class="line"><span style="color:#24292E;">mongod.exe --auth --dbpath=d:/MongoDB/data/db</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="启动redis" tabindex="-1">启动redis <a class="header-anchor" href="#启动redis" aria-label="Permalink to &quot;启动redis&quot;">​</a></h2><div class="language-bat vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bat</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">::启动redis的命令</span></span>
<span class="line"><span style="color:#F97583;">@echo</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">off</span></span>
<span class="line"><span style="color:#6A737D;">::打印日志</span></span>
<span class="line"><span style="color:#F97583;">echo</span><span style="color:#E1E4E8;"> redis start......</span></span>
<span class="line"><span style="color:#6A737D;">::窗口标题</span></span>
<span class="line"><span style="color:#F97583;">title</span><span style="color:#E1E4E8;"> redis-server</span></span>
<span class="line"><span style="color:#6A737D;">::设置cd路径</span></span>
<span class="line"><span style="color:#F97583;">set</span><span style="color:#E1E4E8;"> ENV_HOME</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;D:Redis&quot;</span></span>
<span class="line"><span style="color:#6A737D;">::设置字体颜色</span></span>
<span class="line"><span style="color:#F97583;">color</span><span style="color:#E1E4E8;"> 0a</span></span>
<span class="line"><span style="color:#6A737D;">::cd进入路径</span></span>
<span class="line"><span style="color:#F97583;">cd</span><span style="color:#E1E4E8;"> %ENV_HOME%</span></span>
<span class="line"><span style="color:#6A737D;">::需要启动的程序名字 后接配置</span></span>
<span class="line"><span style="color:#E1E4E8;">redis-server.exe</span></span>
<span class="line"><span style="color:#E1E4E8;">redis.windows.yml</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">::启动redis的命令</span></span>
<span class="line"><span style="color:#D73A49;">@echo</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">off</span></span>
<span class="line"><span style="color:#6A737D;">::打印日志</span></span>
<span class="line"><span style="color:#D73A49;">echo</span><span style="color:#24292E;"> redis start......</span></span>
<span class="line"><span style="color:#6A737D;">::窗口标题</span></span>
<span class="line"><span style="color:#D73A49;">title</span><span style="color:#24292E;"> redis-server</span></span>
<span class="line"><span style="color:#6A737D;">::设置cd路径</span></span>
<span class="line"><span style="color:#D73A49;">set</span><span style="color:#24292E;"> ENV_HOME</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;D:Redis&quot;</span></span>
<span class="line"><span style="color:#6A737D;">::设置字体颜色</span></span>
<span class="line"><span style="color:#D73A49;">color</span><span style="color:#24292E;"> 0a</span></span>
<span class="line"><span style="color:#6A737D;">::cd进入路径</span></span>
<span class="line"><span style="color:#D73A49;">cd</span><span style="color:#24292E;"> %ENV_HOME%</span></span>
<span class="line"><span style="color:#6A737D;">::需要启动的程序名字 后接配置</span></span>
<span class="line"><span style="color:#24292E;">redis-server.exe</span></span>
<span class="line"><span style="color:#24292E;">redis.windows.yml</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>`,5),o=[e];function c(r,t,i,d,y,b){return n(),a("div",null,o)}const m=s(p,[["render",c]]);export{u as __pageData,m as default};
