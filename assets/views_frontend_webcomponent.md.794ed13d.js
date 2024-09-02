import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.b85f4cea.js";const p="/assets/module-federation.6c68883b.webp",F=JSON.parse('{"title":"原生webcomponent","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"views/frontend/webcomponent.md","filePath":"views/frontend/webcomponent.md","lastUpdated":1725287741000}'),e={name:"views/frontend/webcomponent.md"},o=l(`<h1 id="原生webcomponent" tabindex="-1">原生webcomponent <a class="header-anchor" href="#原生webcomponent" aria-label="Permalink to &quot;原生webcomponent&quot;">​</a></h1><h2 id="什么是webcomponent" tabindex="-1">什么是webcomponent <a class="header-anchor" href="#什么是webcomponent" aria-label="Permalink to &quot;什么是webcomponent&quot;">​</a></h2><p>Web Components 是一组不同的技术，允许你创建可重用的自定义元素 — 这些元素的功能在你的代码中可以封装起来，以便在你的 Web 应用中使用。</p><p>Web Components 标准主要由 三个 技术组成： 1.Custom Elements：一组 JavaScript API，允许你定义 custom elements 及其行为，然后在你的用户界面中使用它们。 2.Shadow DOM：一组 JavaScript API，用于封装在一个 Web 组件中的样式和标记，不受外部世界的影响，也不影响外部世界。 3.HTML Templates：<code>&lt;template&gt;</code> 和 <code>&lt;slot&gt;</code> 元素使你能够编写不在渲染页面时直接显示的标记模板。然后，你可以将这些模板当作 custom element 结构的基础复用在多个地方。</p><h2 id="创建简单的webcomponent" tabindex="-1">创建简单的webcomponent <a class="header-anchor" href="#创建简单的webcomponent" aria-label="Permalink to &quot;创建简单的webcomponent&quot;">​</a></h2><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">&lt;!-- 使用子组件 --&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">sub-component</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">sub-component</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">&lt;!-- 创建子组件模版 --&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">sub-component</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#676E95;font-style:italic;">&lt;!-- 子组件样式 --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">    &lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#FFCB6B;">p</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> brown</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">#</span><span style="color:#BABED8;">8df</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#676E95;font-style:italic;">&lt;!-- 子组件标签 --&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">子组件</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">&lt;!-- 子组件js脚本 --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">  &lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 子组件类</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#C792EA;">class</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">SubComponent</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">extends</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">HTMLElement</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#BABED8;">super</span><span style="color:#F07178;">()</span><span style="color:#676E95;font-style:italic;">//继承父类</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 获取组件模版内容</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">template</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">querySelector</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#sub-component</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">content</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 创建组件根节点：影子DOM节点</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">shadowRoot</span><span style="color:#89DDFF;">=this.</span><span style="color:#82AAFF;">attachShadow</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">mode</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">open</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 将模版节点内容添加到影子DOM节点中</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#BABED8;">shadowRoot</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">appendChild</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">template</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">cloneNode</span><span style="color:#F07178;">(</span><span style="color:#FF9CAC;">true</span><span style="color:#F07178;">))</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 创建子组件定义</span></span>
<span class="line"><span style="color:#BABED8;">    customElements</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">define</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">sub-component</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;">SubComponent)</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><pre class="shiki material-theme-palenight vp-code-light"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">&lt;!-- 使用子组件 --&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">sub-component</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">sub-component</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">&lt;!-- 创建子组件模版 --&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">sub-component</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#676E95;font-style:italic;">&lt;!-- 子组件样式 --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">    &lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#FFCB6B;">p</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> brown</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">#</span><span style="color:#BABED8;">8df</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#676E95;font-style:italic;">&lt;!-- 子组件标签 --&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">子组件</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">&lt;!-- 子组件js脚本 --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">  &lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 子组件类</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#C792EA;">class</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">SubComponent</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">extends</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">HTMLElement</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#BABED8;">super</span><span style="color:#F07178;">()</span><span style="color:#676E95;font-style:italic;">//继承父类</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 获取组件模版内容</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">template</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">querySelector</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#sub-component</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">content</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 创建组件根节点：影子DOM节点</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">shadowRoot</span><span style="color:#89DDFF;">=this.</span><span style="color:#82AAFF;">attachShadow</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">mode</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">open</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 将模版节点内容添加到影子DOM节点中</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#BABED8;">shadowRoot</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">appendChild</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">template</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">cloneNode</span><span style="color:#F07178;">(</span><span style="color:#FF9CAC;">true</span><span style="color:#F07178;">))</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 创建子组件定义</span></span>
<span class="line"><span style="color:#BABED8;">    customElements</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">define</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">sub-component</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;">SubComponent)</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><h2 id="传值" tabindex="-1">传值 <a class="header-anchor" href="#传值" aria-label="Permalink to &quot;传值&quot;">​</a></h2><div class="language-diff vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#BABED8;">&lt;body&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  &lt;!-- 使用子组件 --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#F07178;">  &lt;sub-component&gt;&lt;/sub-component&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#C3E88D;">  &lt;sub-component message=&#39;one&#39;&gt;&lt;/sub-component&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  &lt;!-- 创建子组件模版 --&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  &lt;template id=&quot;sub-component&quot;&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    &lt;!-- 子组件样式 --&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    &lt;style&gt;</span></span>
<span class="line"><span style="color:#BABED8;">      p{</span></span>
<span class="line"><span style="color:#BABED8;">        color: brown;</span></span>
<span class="line"><span style="color:#BABED8;">        background-color: #8df;</span></span>
<span class="line"><span style="color:#BABED8;">      }</span></span>
<span class="line"><span style="color:#BABED8;">    &lt;/style&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    &lt;!-- 子组件标签 --&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    &lt;p&gt;</span></span>
<span class="line"><span style="color:#BABED8;">      &lt;span&gt;&lt;/span&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    &lt;/p&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  &lt;/template&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  &lt;!-- 子组件js脚本 --&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  &lt;script&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    // 子组件类</span></span>
<span class="line"><span style="color:#BABED8;">    class SubComponent extends HTMLElement{</span></span>
<span class="line"><span style="color:#BABED8;">      constructor(){</span></span>
<span class="line"><span style="color:#BABED8;">        super()//继承父类</span></span>
<span class="line"><span style="color:#BABED8;">        // 获取组件模版内容</span></span>
<span class="line"><span style="color:#BABED8;">        const template = document.querySelector(&#39;#sub-component&#39;).content</span></span>
<span class="line"><span style="color:#BABED8;">        // 创建组件根节点：影子DOM节点</span></span>
<span class="line"><span style="color:#BABED8;">        const shadowRoot=this.attachShadow({mode:&#39;open&#39;})</span></span>
<span class="line"><span style="color:#BABED8;">        // 将模版节点内容添加到影子DOM节点中</span></span>
<span class="line"><span style="color:#BABED8;">        shadowRoot.appendChild(template.cloneNode(true))</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#C3E88D;">        // 获取子组件上参数属性</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#C3E88D;">        const propData =  this.getAttribute(&#39;message&#39;)</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#C3E88D;">        // 将参数设置到节点标签内容上</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#C3E88D;">        shadowRoot.querySelector(&#39;span&#39;).innerText=propData</span></span>
<span class="line"><span style="color:#BABED8;">      }</span></span>
<span class="line"><span style="color:#BABED8;">    } </span></span>
<span class="line"><span style="color:#BABED8;">    // 创建子组件定义</span></span>
<span class="line"><span style="color:#BABED8;">    customElements.define(&#39;sub-component&#39;,SubComponent)</span></span>
<span class="line"><span style="color:#BABED8;">  &lt;/script&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span></span>
<span class="line"><span style="color:#BABED8;">&lt;/body&gt;</span></span></code></pre><pre class="shiki material-theme-palenight vp-code-light"><code><span class="line"><span style="color:#BABED8;">&lt;body&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  &lt;!-- 使用子组件 --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#F07178;">  &lt;sub-component&gt;&lt;/sub-component&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#C3E88D;">  &lt;sub-component message=&#39;one&#39;&gt;&lt;/sub-component&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  &lt;!-- 创建子组件模版 --&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  &lt;template id=&quot;sub-component&quot;&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    &lt;!-- 子组件样式 --&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    &lt;style&gt;</span></span>
<span class="line"><span style="color:#BABED8;">      p{</span></span>
<span class="line"><span style="color:#BABED8;">        color: brown;</span></span>
<span class="line"><span style="color:#BABED8;">        background-color: #8df;</span></span>
<span class="line"><span style="color:#BABED8;">      }</span></span>
<span class="line"><span style="color:#BABED8;">    &lt;/style&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    &lt;!-- 子组件标签 --&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    &lt;p&gt;</span></span>
<span class="line"><span style="color:#BABED8;">      &lt;span&gt;&lt;/span&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    &lt;/p&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  &lt;/template&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  &lt;!-- 子组件js脚本 --&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  &lt;script&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    // 子组件类</span></span>
<span class="line"><span style="color:#BABED8;">    class SubComponent extends HTMLElement{</span></span>
<span class="line"><span style="color:#BABED8;">      constructor(){</span></span>
<span class="line"><span style="color:#BABED8;">        super()//继承父类</span></span>
<span class="line"><span style="color:#BABED8;">        // 获取组件模版内容</span></span>
<span class="line"><span style="color:#BABED8;">        const template = document.querySelector(&#39;#sub-component&#39;).content</span></span>
<span class="line"><span style="color:#BABED8;">        // 创建组件根节点：影子DOM节点</span></span>
<span class="line"><span style="color:#BABED8;">        const shadowRoot=this.attachShadow({mode:&#39;open&#39;})</span></span>
<span class="line"><span style="color:#BABED8;">        // 将模版节点内容添加到影子DOM节点中</span></span>
<span class="line"><span style="color:#BABED8;">        shadowRoot.appendChild(template.cloneNode(true))</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#C3E88D;">        // 获取子组件上参数属性</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#C3E88D;">        const propData =  this.getAttribute(&#39;message&#39;)</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#C3E88D;">        // 将参数设置到节点标签内容上</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#C3E88D;">        shadowRoot.querySelector(&#39;span&#39;).innerText=propData</span></span>
<span class="line"><span style="color:#BABED8;">      }</span></span>
<span class="line"><span style="color:#BABED8;">    } </span></span>
<span class="line"><span style="color:#BABED8;">    // 创建子组件定义</span></span>
<span class="line"><span style="color:#BABED8;">    customElements.define(&#39;sub-component&#39;,SubComponent)</span></span>
<span class="line"><span style="color:#BABED8;">  &lt;/script&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span></span>
<span class="line"><span style="color:#BABED8;">&lt;/body&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div><h2 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-label="Permalink to &quot;插槽&quot;">​</a></h2><div class="language-diff vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#BABED8;">&lt;body&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  &lt;!-- 使用子组件 --&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  &lt;sub-component message=&quot;one&quot;&gt;&lt;/sub-component&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#C3E88D;">  &lt;!-- 使用带插槽子组件 --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#C3E88D;">  &lt;sub-component&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#C3E88D;">    &lt;div slot=&quot;content&quot;&gt;this is a solt&lt;/div&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#C3E88D;">  &lt;/sub-component&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  &lt;!-- 创建子组件模版 --&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  &lt;template id=&quot;sub-component&quot;&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    &lt;!-- 子组件样式 --&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    &lt;style&gt;</span></span>
<span class="line"><span style="color:#BABED8;">      p{</span></span>
<span class="line"><span style="color:#BABED8;">        color: brown;</span></span>
<span class="line"><span style="color:#BABED8;">        background-color: #8df;</span></span>
<span class="line"><span style="color:#BABED8;">      }</span></span>
<span class="line"><span style="color:#BABED8;">    &lt;/style&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    &lt;!-- 子组件标签 --&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    &lt;p&gt;</span></span>
<span class="line"><span style="color:#BABED8;">      &lt;span&gt;&lt;/span&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#C3E88D;">      &lt;div&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#C3E88D;">        &lt;slot name=&quot;content&quot;&gt;&lt;/slot&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#C3E88D;">      &lt;/div&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    &lt;/p&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  &lt;/template&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  &lt;!-- 子组件js脚本 --&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  &lt;script&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    // 子组件类</span></span>
<span class="line"><span style="color:#BABED8;">    class SubComponent extends HTMLElement{</span></span>
<span class="line"><span style="color:#BABED8;">      constructor(){</span></span>
<span class="line"><span style="color:#BABED8;">        super()//继承父类</span></span>
<span class="line"><span style="color:#BABED8;">        // 获取组件模版内容</span></span>
<span class="line"><span style="color:#BABED8;">        const template = document.querySelector(&#39;#sub-component&#39;).content</span></span>
<span class="line"><span style="color:#BABED8;">        // 创建组件根节点：影子DOM节点</span></span>
<span class="line"><span style="color:#BABED8;">        const shadowRoot=this.attachShadow({mode:&#39;open&#39;})</span></span>
<span class="line"><span style="color:#BABED8;">        // 将模版节点内容添加到影子DOM节点中</span></span>
<span class="line"><span style="color:#BABED8;">        shadowRoot.appendChild(template.cloneNode(true))</span></span>
<span class="line"><span style="color:#BABED8;">        // 获取子组件上参数属性</span></span>
<span class="line"><span style="color:#BABED8;">        const propData =  this.getAttribute(&#39;message&#39;)</span></span>
<span class="line"><span style="color:#BABED8;">        // 将参数设置到节点标签内容上</span></span>
<span class="line"><span style="color:#BABED8;">        shadowRoot.querySelector(&#39;span&#39;).innerText=propData</span></span>
<span class="line"><span style="color:#BABED8;">      }</span></span>
<span class="line"><span style="color:#BABED8;">    } </span></span>
<span class="line"><span style="color:#BABED8;">    // 创建子组件定义</span></span>
<span class="line"><span style="color:#BABED8;">    customElements.define(&#39;sub-component&#39;,SubComponent)</span></span>
<span class="line"><span style="color:#BABED8;">  &lt;/script&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">&lt;/body&gt;</span></span></code></pre><pre class="shiki material-theme-palenight vp-code-light"><code><span class="line"><span style="color:#BABED8;">&lt;body&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  &lt;!-- 使用子组件 --&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  &lt;sub-component message=&quot;one&quot;&gt;&lt;/sub-component&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#C3E88D;">  &lt;!-- 使用带插槽子组件 --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#C3E88D;">  &lt;sub-component&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#C3E88D;">    &lt;div slot=&quot;content&quot;&gt;this is a solt&lt;/div&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#C3E88D;">  &lt;/sub-component&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  &lt;!-- 创建子组件模版 --&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  &lt;template id=&quot;sub-component&quot;&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    &lt;!-- 子组件样式 --&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    &lt;style&gt;</span></span>
<span class="line"><span style="color:#BABED8;">      p{</span></span>
<span class="line"><span style="color:#BABED8;">        color: brown;</span></span>
<span class="line"><span style="color:#BABED8;">        background-color: #8df;</span></span>
<span class="line"><span style="color:#BABED8;">      }</span></span>
<span class="line"><span style="color:#BABED8;">    &lt;/style&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    &lt;!-- 子组件标签 --&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    &lt;p&gt;</span></span>
<span class="line"><span style="color:#BABED8;">      &lt;span&gt;&lt;/span&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#C3E88D;">      &lt;div&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#C3E88D;">        &lt;slot name=&quot;content&quot;&gt;&lt;/slot&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#C3E88D;">      &lt;/div&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    &lt;/p&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  &lt;/template&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  &lt;!-- 子组件js脚本 --&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  &lt;script&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    // 子组件类</span></span>
<span class="line"><span style="color:#BABED8;">    class SubComponent extends HTMLElement{</span></span>
<span class="line"><span style="color:#BABED8;">      constructor(){</span></span>
<span class="line"><span style="color:#BABED8;">        super()//继承父类</span></span>
<span class="line"><span style="color:#BABED8;">        // 获取组件模版内容</span></span>
<span class="line"><span style="color:#BABED8;">        const template = document.querySelector(&#39;#sub-component&#39;).content</span></span>
<span class="line"><span style="color:#BABED8;">        // 创建组件根节点：影子DOM节点</span></span>
<span class="line"><span style="color:#BABED8;">        const shadowRoot=this.attachShadow({mode:&#39;open&#39;})</span></span>
<span class="line"><span style="color:#BABED8;">        // 将模版节点内容添加到影子DOM节点中</span></span>
<span class="line"><span style="color:#BABED8;">        shadowRoot.appendChild(template.cloneNode(true))</span></span>
<span class="line"><span style="color:#BABED8;">        // 获取子组件上参数属性</span></span>
<span class="line"><span style="color:#BABED8;">        const propData =  this.getAttribute(&#39;message&#39;)</span></span>
<span class="line"><span style="color:#BABED8;">        // 将参数设置到节点标签内容上</span></span>
<span class="line"><span style="color:#BABED8;">        shadowRoot.querySelector(&#39;span&#39;).innerText=propData</span></span>
<span class="line"><span style="color:#BABED8;">      }</span></span>
<span class="line"><span style="color:#BABED8;">    } </span></span>
<span class="line"><span style="color:#BABED8;">    // 创建子组件定义</span></span>
<span class="line"><span style="color:#BABED8;">    customElements.define(&#39;sub-component&#39;,SubComponent)</span></span>
<span class="line"><span style="color:#BABED8;">  &lt;/script&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">&lt;/body&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br></div></div><h2 id="webcomponent-应用、封装" tabindex="-1">webcomponent 应用、封装 <a class="header-anchor" href="#webcomponent-应用、封装" aria-label="Permalink to &quot;webcomponent 应用、封装&quot;">​</a></h2><h3 id="前端框架" tabindex="-1">前端框架 <a class="header-anchor" href="#前端框架" aria-label="Permalink to &quot;前端框架&quot;">​</a></h3><h4 id="stencil" tabindex="-1">Stencil <a class="header-anchor" href="#stencil" aria-label="Permalink to &quot;Stencil&quot;">​</a></h4><p>Stencil 是用于生成 Web Components 的编译器，由 Ionic 团队构建。Stencil 允许开发人员使用。TypeScript 和 JSX 等技术来定义组件，然后生成可在现代浏览器和旧版浏览器上运行的 100% 基于标准的 Web Component。当你的组件一旦经过 build 完成后，就会脱离 Stencil，不再依赖。并且 Stencil 相对原生 Web Components 提供了完善的项目目录架构和配置，与直接使用 Custom Elements 相比，Stencil 提供了额外的 API，使编写快速组件变得更加简单，</p><h4 id="omi" tabindex="-1">Omi <a class="header-anchor" href="#omi" aria-label="Permalink to &quot;Omi&quot;">​</a></h4><p>Omi 是腾讯开源的前端跨框架跨平台的框架。是下一代 Web 框架，Omi 的目标是去万物糟粕，合精华为一。Omi 是一个跨框架的框架，任何框架都可以使用 Omi 自定义原始，当然 Web Components 也可以。</p><h4 id="slim-js" tabindex="-1">Slim.js <a class="header-anchor" href="#slim-js" aria-label="Permalink to &quot;Slim.js&quot;">​</a></h4><p>Slim.js 是一个开源的轻量级 Web Components 库，它为组件提供数据绑定和扩展能力，使用 es6 原生类继承。专注于帮助开发者更好的编写原生web组件，而不依赖于其他框架，但是也提供了良好的拓展性，开发者可以自由拓展。</p><h4 id="polymer" tabindex="-1">Polymer <a class="header-anchor" href="#polymer" aria-label="Permalink to &quot;Polymer&quot;">​</a></h4><p>Polymer 是 Google 推出的 Web Components 库，支持数据的单向和双向绑定，兼容性较好，跨浏览器性能也较好；提供了一组用于创建 custom elements 的功能。这些功能旨在使 custom elements 像标准 DOM 元素一样工作更容易和更快。与标准 DOM 元素类似，</p><h4 id="hybrids" tabindex="-1">hybrids <a class="header-anchor" href="#hybrids" aria-label="Permalink to &quot;hybrids&quot;">​</a></h4><p>hybrids 是一个 JavaScript UI 框架，用于创建功能齐全的 Web 应用程序、组件库或具有独特的混合声明性和功能性架构的单个 Web Components。该框架的主要目标是为网络平台提供一套完整的工具——一切都没有外部依赖。它支持构建 UI 组件、管理复杂状态、使用客户端路由创建应用程序流以及针对全球市场本地化其内容。所有部分都遵循相同的独特概念，使其易于理解和使用！</p><h4 id="x-tag" tabindex="-1">X-Tag <a class="header-anchor" href="#x-tag" aria-label="Permalink to &quot;X-Tag&quot;">​</a></h4><p>X-Tag 是微软推出的开源库，支持 Web Components 规范，兼容Web Components。X-Tag 最初由 Mozilla 开发，现在由 Microsoft 的开发人员提供支持，它是一个开源 JavaScript 库，它包装了 W3C 标准 Web Components API 系列，为组件开发提供了一个紧凑、功能丰富的接口。虽然 X-Tag 可以轻松利用所有 Web Components API（自定义元素、Shadow DOM、模板和 HTML 导入），但它只需要自定义元素 API 支持即可运行。在没有原生自定义元素 API 的情况下，X-Tag 使用 Google 的 Polymer 框架所依赖的相同的 polyfill 。</p><h4 id="litelement" tabindex="-1">LitElement <a class="header-anchor" href="#litelement" aria-label="Permalink to &quot;LitElement&quot;">​</a></h4><p>LitElement 是一个简单的基类，用于使用 lit-html 创建快速、轻量级的 Web Components。LitElement 现在是Lit 库 monorepo的一部分。Lit 2 包括 lit-html 2.x 和 LitElement 3.x。LitElement 使用lit-html渲染到元素的Shadow DOM 中，并添加 API 来帮助管理元素属性和特性。LitElement 对属性的变化做出反应。</p><h4 id="direflow" tabindex="-1">direflow <a class="header-anchor" href="#direflow" aria-label="Permalink to &quot;direflow&quot;">​</a></h4><p>direflow 是一个 React组件 + web component +web componen t属性变化重新挂载 React 组件的 web component框架。direflow的响应式其实分为2块： 组件内部响应式（通过React自身响应式流程），组件外部响应式（WebComponents属性变化监听重渲染组件）。如果外部属性不会经常变化的话，性能这块没有问题，因为组件内部的响应式完全是走了React自身的响应式。 属性外部属性如果会经常变化的话，direflow框架在这块还有一定的优化空间。</p><h3 id="微前端框架" tabindex="-1">微前端框架 <a class="header-anchor" href="#微前端框架" aria-label="Permalink to &quot;微前端框架&quot;">​</a></h3><h4 id="qiankun-single-spa" tabindex="-1">qiankun(single-spa) <a class="header-anchor" href="#qiankun-single-spa" aria-label="Permalink to &quot;qiankun(single-spa)&quot;">​</a></h4><p>QianKun 基于 single-spa ，阿里系开源的微前端框架，</p><h4 id="mirco-app-webcomponent" tabindex="-1">Mirco-App(webcomponent) <a class="header-anchor" href="#mirco-app-webcomponent" aria-label="Permalink to &quot;Mirco-App(webcomponent)&quot;">​</a></h4><p>Micro App 是京东出的一款基于 Web Component 原生组件进行渲染的微前端框架，不同于目前流行的开源框架，它从组件化的思维实现微前端，旨在降低上手难度、提升工作效率。</p><h4 id="无界-webcomponent-iframe" tabindex="-1">无界(webcomponent+iframe) <a class="header-anchor" href="#无界-webcomponent-iframe" aria-label="Permalink to &quot;无界(webcomponent+iframe)&quot;">​</a></h4><p>无界是腾讯推出的一款微前端解决方式。它是一种基于 Web Components + iframe 的全新微前端方案，继承iframe的优点，补足 iframe 的缺点，让 iframe 焕发新生。Web Components 是一个浏览器原生支持的组件封装技术，可以有效隔离元素之间的样式，iframe 可以给子应用提供一个原生隔离的运行环境，相比自行构造的沙箱 iframe 提供了独立的 window、document、history、location，可以更好的和外部解耦</p><h4 id="garfish-single-spa" tabindex="-1">Garfish(single-spa) <a class="header-anchor" href="#garfish-single-spa" aria-label="Permalink to &quot;Garfish(single-spa)&quot;">​</a></h4><p>Garfish 字节跳动出品，当时出现的时候还是比较火热的。但是感觉有点半成品，没啥issue，没啥人用</p><h4 id="emp-webpack5-module-federation" tabindex="-1">EMP（Webpack5 Module Federation） <a class="header-anchor" href="#emp-webpack5-module-federation" aria-label="Permalink to &quot;EMP（Webpack5 Module Federation）&quot;">​</a></h4><p>EMP是欢聚时代基于 Webpack5 Module Federation 搭建的微前端方案，更多的是去支持webpack，用的人也不多。</p><h4 id="module-federation-module-federation" tabindex="-1">module-federation（Module Federation） <a class="header-anchor" href="#module-federation-module-federation" aria-label="Permalink to &quot;module-federation（Module Federation）&quot;">​</a></h4><p><img src="`+p+'" alt="图片"> 1.Module Federation | webpack 中文文档<br> 2.需要加载打包后的产物，启动preview模式<br> 3.JS沙箱、样式隔离需要自己做<br> 4.按照如下方式构建后，加载子应用，就和加载一个组件一毛一样<br> 5.使用@originjs/vite-plugin-federation也能在vite架构下实现模块联邦</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>体验非常好，完全的spa切换体验，非常丝滑</p></div><h4 id="其他微前端框架" tabindex="-1">其他微前端框架 <a class="header-anchor" href="#其他微前端框架" aria-label="Permalink to &quot;其他微前端框架&quot;">​</a></h4><ul><li>ice-lab/icestark 飞冰的微前端方案</li><li>teambit/bit 无中文文档，国外挺火</li></ul><h3 id="微前端框架的选择" tabindex="-1">微前端框架的选择 <a class="header-anchor" href="#微前端框架的选择" aria-label="Permalink to &quot;微前端框架的选择&quot;">​</a></h3><ul><li>自由度更高：module-federation，但是需要自定义实现css隔离、js沙箱、路由劫持等功能</li><li>用的最多：qiankun，相对比较成熟，社区活跃，webpack体系、接入相对比较重</li><li>接入更流畅：wujie、micro-app，都是基于react +vite技术栈</li></ul>',46),t=[o];function c(r,i,y,D,b,B){return n(),a("div",null,t)}const u=s(e,[["render",c]]);export{F as __pageData,u as default};
