import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.df4a10e8.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"styleCollection.md","filePath":"styleCollection.md"}'),p={name:"styleCollection.md"},o=l(`<div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">// 去除elementUI中table所有边框</span></span>
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
<span class="line"><span style="color:#24292E;">	 }</span></span></code></pre></div>`,1),t=[o];function e(c,r,E,y,i,C){return n(),a("div",null,t)}const _=s(p,[["render",e]]);export{d as __pageData,_ as default};
