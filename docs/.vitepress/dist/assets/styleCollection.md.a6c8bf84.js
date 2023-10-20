import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.808cf4e8.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"styleCollection.md","filePath":"styleCollection.md"}'),p={name:"styleCollection.md"},e=l(`<div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">// 去除elementUI中table所有边框</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">/deep/</span><span style="color:#B392F0;">.el-table</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">		 </span><span style="color:#79B8FF;">border</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">		 </span><span style="color:#79B8FF;">th</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">		 </span><span style="color:#79B8FF;">tr</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">		 </span><span style="color:#79B8FF;">td</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">			  </span><span style="color:#79B8FF;">border</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">			  </span><span style="color:#79B8FF;">background-color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#fff</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">		 }</span></span>
<span class="line"><span style="color:#E1E4E8;">		 &amp;</span><span style="color:#B392F0;">::before</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">			  </span><span style="color:#79B8FF;">height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">		  }</span></span>
<span class="line"><span style="color:#E1E4E8;">		  &amp;</span><span style="color:#B392F0;">::after</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">			 </span><span style="color:#79B8FF;">width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">		  }</span></span>
<span class="line"><span style="color:#E1E4E8;">		 </span><span style="color:#B392F0;">.el-table__fixed:before</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">			 </span><span style="color:#79B8FF;">height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">		  }</span></span>
<span class="line"><span style="color:#E1E4E8;">	 }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">// 去除elementUI中table所有边框</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">/deep/</span><span style="color:#6F42C1;">.el-table</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">		 </span><span style="color:#005CC5;">border</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">		 </span><span style="color:#005CC5;">th</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		 </span><span style="color:#005CC5;">tr</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		 </span><span style="color:#005CC5;">td</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">			  </span><span style="color:#005CC5;">border</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">			  </span><span style="color:#005CC5;">background-color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#fff</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">		 }</span></span>
<span class="line"><span style="color:#24292E;">		 &amp;</span><span style="color:#6F42C1;">::before</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">			  </span><span style="color:#005CC5;">height</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">		  }</span></span>
<span class="line"><span style="color:#24292E;">		  &amp;</span><span style="color:#6F42C1;">::after</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">			 </span><span style="color:#005CC5;">width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">		  }</span></span>
<span class="line"><span style="color:#24292E;">		 </span><span style="color:#6F42C1;">.el-table__fixed:before</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">			 </span><span style="color:#005CC5;">height</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">		  }</span></span>
<span class="line"><span style="color:#24292E;">	 }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div>`,1),o=[e];function t(c,r,E,y,i,b){return n(),a("div",null,o)}const F=s(p,[["render",t]]);export{C as __pageData,F as default};
