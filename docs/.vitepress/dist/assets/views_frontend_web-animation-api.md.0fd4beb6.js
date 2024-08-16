import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.b85f4cea.js";const A=JSON.parse('{"title":"原生js动画","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"views/frontend/web-animation-api.md","filePath":"views/frontend/web-animation-api.md","lastUpdated":null}'),p={name:"views/frontend/web-animation-api.md"},o=l(`<h1 id="原生js动画" tabindex="-1">原生js动画 <a class="header-anchor" href="#原生js动画" aria-label="Permalink to &quot;原生js动画&quot;">​</a></h1><h2 id="web-animation-api" tabindex="-1">web animation API <a class="header-anchor" href="#web-animation-api" aria-label="Permalink to &quot;web animation API&quot;">​</a></h2><ol><li>先上代码</li></ol><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> targetDom </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">querySelector</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#target-dom</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 取消之前所有动画实例</span></span>
<span class="line"><span style="color:#BABED8;">targetDom</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getAnimations</span><span style="color:#BABED8;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">forEach</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">animate</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">=&gt;</span><span style="color:#BABED8;">animate</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">cancel</span><span style="color:#BABED8;">())</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 创建新动画</span></span>
<span class="line"><span style="color:#BABED8;">targetDom</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">animate</span><span style="color:#BABED8;">(</span></span>
<span class="line"><span style="color:#BABED8;">    [</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">            </span><span style="color:#F07178;">transform</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">translate(0,0)</span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">{</span><span style="color:#BABED8;">   </span></span>
<span class="line"><span style="color:#BABED8;">            </span><span style="color:#F07178;">transform</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">translate(</span><span style="color:#89DDFF;">\${</span><span style="color:#BABED8;">x</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">px,</span><span style="color:#89DDFF;">\${</span><span style="color:#BABED8;">y</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">)px</span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">    ]，</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#F07178;">duration</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">2000</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#F07178;">fill</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">forwards</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">)</span></span></code></pre><pre class="shiki material-theme-palenight vp-code-light"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> targetDom </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">querySelector</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#target-dom</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 取消之前所有动画实例</span></span>
<span class="line"><span style="color:#BABED8;">targetDom</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getAnimations</span><span style="color:#BABED8;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">forEach</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">animate</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">=&gt;</span><span style="color:#BABED8;">animate</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">cancel</span><span style="color:#BABED8;">())</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 创建新动画</span></span>
<span class="line"><span style="color:#BABED8;">targetDom</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">animate</span><span style="color:#BABED8;">(</span></span>
<span class="line"><span style="color:#BABED8;">    [</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">            </span><span style="color:#F07178;">transform</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">translate(0,0)</span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">{</span><span style="color:#BABED8;">   </span></span>
<span class="line"><span style="color:#BABED8;">            </span><span style="color:#F07178;">transform</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">translate(</span><span style="color:#89DDFF;">\${</span><span style="color:#BABED8;">x</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">px,</span><span style="color:#89DDFF;">\${</span><span style="color:#BABED8;">y</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">)px</span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">    ]，</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#F07178;">duration</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">2000</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#F07178;">fill</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">forwards</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><ol start="2"><li>优点 与三方的动画库对比，此实现方式类似css动画，不操作DOM,不会导致重绘重排，性能更高</li></ol>`,5),e=[o];function t(r,c,D,y,F,i){return n(),a("div",null,e)}const E=s(p,[["render",t]]);export{A as __pageData,E as default};
