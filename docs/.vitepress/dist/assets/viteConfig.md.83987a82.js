import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.df4a10e8.js";const D=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"viteConfig.md","filePath":"viteConfig.md"}'),p={name:"viteConfig.md"},o=l(`<p>vite.config.js中配置</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> vue </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@vitejs/plugin-vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">path</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;path&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;">// vite.config.js # or vite.config.ts</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&#39;./src&#39;</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  plugins: [</span><span style="color:#B392F0;">vue</span><span style="color:#E1E4E8;">()],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&quot;resolve.alias&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 键必须以斜线开始和结束</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;/@/&#39;</span><span style="color:#E1E4E8;">: path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&#39;./src&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  hostname: </span><span style="color:#9ECBFF;">&#39;127.0.0.1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  port: </span><span style="color:#79B8FF;">3000</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 是否自动在浏览器打开</span></span>
<span class="line"><span style="color:#E1E4E8;">  open: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 是否开启 https</span></span>
<span class="line"><span style="color:#E1E4E8;">  https: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 服务端渲染</span></span>
<span class="line"><span style="color:#E1E4E8;">  ssr: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * 在生产中服务时的基本公共路径。</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#F97583;">@default</span><span style="color:#6A737D;"> </span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;">/</span><span style="color:#9ECBFF;">&#39;</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#E1E4E8;">  base: </span><span style="color:#9ECBFF;">&#39;./&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * 与“根”相关的目录，构建输出将放在其中。如果目录存在，它将在构建之前被删除。</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#F97583;">@default</span><span style="color:#6A737D;"> </span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;">dist</span><span style="color:#9ECBFF;">&#39;</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#E1E4E8;">  outDir: </span><span style="color:#9ECBFF;">&#39;dist&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 反向代理，此处应该特别注意，网上很多教程是直接设置proxy，并没有向官网那样添加 server，可能会导致失败，vite官网：https://vitejs.dev/guide/features.html#async-chunk-loading-optimization</span></span>
<span class="line"><span style="color:#E1E4E8;">  server:{</span></span>
<span class="line"><span style="color:#E1E4E8;">    proxy: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;/api&#39;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        target: </span><span style="color:#9ECBFF;">&#39;https://api.pingping6.com/tools/baidutop/&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        changeOrigin: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">rewrite</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">path</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> path.</span><span style="color:#B392F0;">replace</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">^</span><span style="color:#85E89D;font-weight:bold;">\\/</span><span style="color:#DBEDFF;">api</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> vue </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@vitejs/plugin-vue&#39;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">path</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;path&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;">// vite.config.js # or vite.config.ts</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(path.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&#39;./src&#39;</span><span style="color:#24292E;">))</span></span>
<span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  plugins: [</span><span style="color:#6F42C1;">vue</span><span style="color:#24292E;">()],</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&quot;resolve.alias&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 键必须以斜线开始和结束</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;/@/&#39;</span><span style="color:#24292E;">: path.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&#39;./src&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  hostname: </span><span style="color:#032F62;">&#39;127.0.0.1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  port: </span><span style="color:#005CC5;">3000</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 是否自动在浏览器打开</span></span>
<span class="line"><span style="color:#24292E;">  open: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 是否开启 https</span></span>
<span class="line"><span style="color:#24292E;">  https: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 服务端渲染</span></span>
<span class="line"><span style="color:#24292E;">  ssr: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * 在生产中服务时的基本公共路径。</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#D73A49;">@default</span><span style="color:#6A737D;"> </span><span style="color:#032F62;">&#39;</span><span style="color:#24292E;">/</span><span style="color:#032F62;">&#39;</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#24292E;">  base: </span><span style="color:#032F62;">&#39;./&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * 与“根”相关的目录，构建输出将放在其中。如果目录存在，它将在构建之前被删除。</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#D73A49;">@default</span><span style="color:#6A737D;"> </span><span style="color:#032F62;">&#39;</span><span style="color:#24292E;">dist</span><span style="color:#032F62;">&#39;</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#24292E;">  outDir: </span><span style="color:#032F62;">&#39;dist&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 反向代理，此处应该特别注意，网上很多教程是直接设置proxy，并没有向官网那样添加 server，可能会导致失败，vite官网：https://vitejs.dev/guide/features.html#async-chunk-loading-optimization</span></span>
<span class="line"><span style="color:#24292E;">  server:{</span></span>
<span class="line"><span style="color:#24292E;">    proxy: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;/api&#39;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        target: </span><span style="color:#032F62;">&#39;https://api.pingping6.com/tools/baidutop/&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        changeOrigin: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">rewrite</span><span style="color:#24292E;">: </span><span style="color:#E36209;">path</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> path.</span><span style="color:#6F42C1;">replace</span><span style="color:#24292E;">(</span><span style="color:#032F62;">/</span><span style="color:#D73A49;">^</span><span style="color:#22863A;font-weight:bold;">\\/</span><span style="color:#032F62;">api/</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineConfig } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vite&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 帮手函数，这样不用 jsdoc 注解也可以获取类型提示</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> vue </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@vitejs/plugin-vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">resolve</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;path&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { viteMockServe } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;vite-plugin-mock&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">localEnabled</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p<wbr>rocess.env.</span><span style="color:#79B8FF;">USE_MOCK</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">prodEnabled</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p<wbr>rocess.env.</span><span style="color:#79B8FF;">USE_CHUNK_MOCK</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// https://vitejs.dev/config/</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;"> plugins: [ </span><span style="color:#6A737D;">//配置需要使用的插件列表</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">vue</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">viteMockServe</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">   mockPath: </span><span style="color:#9ECBFF;">&quot;./src/server/mock&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">   localEnabled: localEnabled, </span><span style="color:#6A737D;">// 开发打包开关 true时打开mock  false关闭mock</span></span>
<span class="line"><span style="color:#E1E4E8;">   prodEnabled: prodEnabled,</span><span style="color:#6A737D;">//prodEnabled, // 生产打包开关</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#6A737D;">// 这样可以控制关闭mock的时候不让mock打包到最终代码内</span></span>
<span class="line"><span style="color:#E1E4E8;">   injectCode: </span><span style="color:#9ECBFF;">\`</span></span>
<span class="line"><span style="color:#9ECBFF;">    import { setupProdMockServer } from &#39;./mockProdServer&#39;;</span></span>
<span class="line"><span style="color:#9ECBFF;">    setupProdMockServer();</span></span>
<span class="line"><span style="color:#9ECBFF;">   \`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">   logger: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//是否在控制台显示请求日志</span></span>
<span class="line"><span style="color:#E1E4E8;">   supportTs:</span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">//打开后，可以读取 ts 文件模块 打开后将无法监视 .js 文件</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;"> ],</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 强制预构建插件包</span></span>
<span class="line"><span style="color:#E1E4E8;"> optimizeDeps: {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//检测需要预构建的依赖项</span></span>
<span class="line"><span style="color:#E1E4E8;">  entries: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//默认情况下，不在 node_modules 中的，链接的包不会预构建</span></span>
<span class="line"><span style="color:#E1E4E8;">  include: [</span><span style="color:#9ECBFF;">&#39;axios&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  exclude:[</span><span style="color:#9ECBFF;">&#39;your-package-name&#39;</span><span style="color:#E1E4E8;">] </span><span style="color:#6A737D;">//排除在优化之外</span></span>
<span class="line"><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">//静态资源服务的文件夹</span></span>
<span class="line"><span style="color:#E1E4E8;"> publicDir: </span><span style="color:#9ECBFF;">&quot;public&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;"> base: </span><span style="color:#9ECBFF;">&#39;./&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">//静态资源处理</span></span>
<span class="line"><span style="color:#E1E4E8;"> assetsInclude: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">//控制台输出的级别 info 、warn、error、silent</span></span>
<span class="line"><span style="color:#E1E4E8;"> logLevel: </span><span style="color:#9ECBFF;">&quot;info&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 设为false 可以避免 vite 清屏而错过在终端中打印某些关键信息</span></span>
<span class="line"><span style="color:#E1E4E8;"> clearScreen:</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;"> resolve: {</span></span>
<span class="line"><span style="color:#E1E4E8;">  alias: [</span><span style="color:#6A737D;">//配置别名</span></span>
<span class="line"><span style="color:#E1E4E8;">   { find: </span><span style="color:#9ECBFF;">&#39;@&#39;</span><span style="color:#E1E4E8;">, replacement: </span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&#39;src&#39;</span><span style="color:#E1E4E8;">) }</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 情景导出 package.json 配置中的exports字段</span></span>
<span class="line"><span style="color:#E1E4E8;">  conditions: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 导入时想要省略的扩展名列表</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 不建议使用 .vue 影响IDE和类型支持</span></span>
<span class="line"><span style="color:#E1E4E8;">  extensions:[</span><span style="color:#9ECBFF;">&#39;.mjs&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&#39;.js&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&#39;.ts&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&#39;.jsx&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&#39;.tsx&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&#39;.json&#39;</span><span style="color:#E1E4E8;">]  </span></span>
<span class="line"><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// css</span></span>
<span class="line"><span style="color:#E1E4E8;"> css: {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 配置 css modules 的行为</span></span>
<span class="line"><span style="color:#E1E4E8;">  modules: {  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// postCss 配置</span></span>
<span class="line"><span style="color:#E1E4E8;">  postcss: {</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//指定传递给 css 预处理器的选项</span></span>
<span class="line"><span style="color:#E1E4E8;">  preprocessorOptions:{</span></span>
<span class="line"><span style="color:#E1E4E8;">   scss: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    additionalData:</span><span style="color:#9ECBFF;">\`$injectedColor:orange;\`</span></span>
<span class="line"><span style="color:#E1E4E8;">   }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;"> json: {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//是否支持从 .json 文件中进行按名导入</span></span>
<span class="line"><span style="color:#E1E4E8;">  namedExports: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//若设置为 true 导入的json会被转为 export default JSON.parse(&quot;..&quot;) 会比转译成对象字面量性能更好</span></span>
<span class="line"><span style="color:#E1E4E8;">  stringify:</span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">//继承自 esbuild 转换选项，最常见的用例是自定义 JSX</span></span>
<span class="line"><span style="color:#E1E4E8;"> esbuild: {</span></span>
<span class="line"><span style="color:#E1E4E8;">  jsxFactory: </span><span style="color:#9ECBFF;">&quot;h&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  jsxFragment: </span><span style="color:#9ECBFF;">&quot;Fragment&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  jsxInject:</span><span style="color:#9ECBFF;">\`import Vue from &#39;vue&#39;\`</span></span>
<span class="line"><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">//本地运行配置，以及反向代理配置</span></span>
<span class="line"><span style="color:#E1E4E8;"> server: {</span></span>
<span class="line"><span style="color:#E1E4E8;">  host: </span><span style="color:#9ECBFF;">&quot;localhost&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  https: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span><span style="color:#6A737D;">//是否启用 http 2</span></span>
<span class="line"><span style="color:#E1E4E8;">  cors: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span><span style="color:#6A737D;">//为开发服务器配置 CORS , 默认启用并允许任何源</span></span>
<span class="line"><span style="color:#E1E4E8;">  open: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span><span style="color:#6A737D;">//服务启动时自动在浏览器中打开应用</span></span>
<span class="line"><span style="color:#E1E4E8;">  port: </span><span style="color:#9ECBFF;">&quot;9000&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  strictPort: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//设为true时端口被占用则直接退出，不会尝试下一个可用端口</span></span>
<span class="line"><span style="color:#E1E4E8;">  force: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span><span style="color:#6A737D;">//是否强制依赖预构建</span></span>
<span class="line"><span style="color:#E1E4E8;">  hmr: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span><span style="color:#6A737D;">//禁用或配置 HMR 连接</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 传递给 chockidar 的文件系统监视器选项</span></span>
<span class="line"><span style="color:#E1E4E8;">  watch: {</span></span>
<span class="line"><span style="color:#E1E4E8;">   ignored:[</span><span style="color:#9ECBFF;">&quot;!**/node_modules/your-package-name/**&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 反向代理配置</span></span>
<span class="line"><span style="color:#E1E4E8;">  proxy: { </span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#9ECBFF;">&#39;/api&#39;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    target: </span><span style="color:#9ECBFF;">&quot;https://xxxx.com/&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    changeOrigin: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">rewrite</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">path</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> path.</span><span style="color:#B392F0;">replace</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">^</span><span style="color:#85E89D;font-weight:bold;">\\/</span><span style="color:#DBEDFF;">api</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">   }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">//打包配置</span></span>
<span class="line"><span style="color:#E1E4E8;"> build: {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//浏览器兼容性  &quot;esnext&quot;|&quot;modules&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  target: </span><span style="color:#9ECBFF;">&quot;modules&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//指定输出路径</span></span>
<span class="line"><span style="color:#E1E4E8;">  outDir: </span><span style="color:#9ECBFF;">&quot;dist&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//生成静态资源的存放路径</span></span>
<span class="line"><span style="color:#E1E4E8;">  assetsDir: </span><span style="color:#9ECBFF;">&quot;assets&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求。设置为 0 可以完全禁用此项</span></span>
<span class="line"><span style="color:#E1E4E8;">  assetsInlineLimit: </span><span style="color:#79B8FF;">4096</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//启用/禁用 CSS 代码拆分</span></span>
<span class="line"><span style="color:#E1E4E8;">  cssCodeSplit: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//构建后是否生成 source map 文件</span></span>
<span class="line"><span style="color:#E1E4E8;">  sourcemap: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//自定义底层的 Rollup 打包配置</span></span>
<span class="line"><span style="color:#E1E4E8;">  rollupOptions: {</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//@rollup/plugin-commonjs 插件的选项</span></span>
<span class="line"><span style="color:#E1E4E8;">  commonjsOptions: {</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//构建的库</span></span>
<span class="line"><span style="color:#E1E4E8;">  lib: {</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//当设置为 true，构建后将会生成 manifest.json 文件</span></span>
<span class="line"><span style="color:#E1E4E8;">  manifest: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 设置为 false 可以禁用最小化混淆，</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 或是用来指定使用哪种混淆器</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// boolean | &#39;terser&#39; | &#39;esbuild&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  minify: </span><span style="color:#9ECBFF;">&quot;terser&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//terser 构建后文件体积更小</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//传递给 Terser 的更多 minify 选项。</span></span>
<span class="line"><span style="color:#E1E4E8;">  terserOptions: {</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//设置为 false 来禁用将构建后的文件写入磁盘</span></span>
<span class="line"><span style="color:#E1E4E8;">  write: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//默认情况下，若 outDir 在 root 目录下，则 Vite 会在构建时清空该目录。</span></span>
<span class="line"><span style="color:#E1E4E8;">  emptyOutDir: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//启用/禁用 brotli 压缩大小报告</span></span>
<span class="line"><span style="color:#E1E4E8;">  brotliSize: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//chunk 大小警告的限制</span></span>
<span class="line"><span style="color:#E1E4E8;">  chunkSizeWarningLimit: </span><span style="color:#79B8FF;">500</span></span>
<span class="line"><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;"> ssr: {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 列出的是要为 SSR 强制外部化的依赖</span></span>
<span class="line"><span style="color:#E1E4E8;">  external: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//列出的是防止被 SSR 外部化依赖项</span></span>
<span class="line"><span style="color:#E1E4E8;">  noExternal: [</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { defineConfig } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vite&#39;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// 帮手函数，这样不用 jsdoc 注解也可以获取类型提示</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> vue </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@vitejs/plugin-vue&#39;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">resolve</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;path&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { viteMockServe } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;vite-plugin-mock&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">localEnabled</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p<wbr>rocess.env.</span><span style="color:#005CC5;">USE_MOCK</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">prodEnabled</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p<wbr>rocess.env.</span><span style="color:#005CC5;">USE_CHUNK_MOCK</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// https://vitejs.dev/config/</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;"> plugins: [ </span><span style="color:#6A737D;">//配置需要使用的插件列表</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">vue</span><span style="color:#24292E;">(),</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">viteMockServe</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">   mockPath: </span><span style="color:#032F62;">&quot;./src/server/mock&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">   localEnabled: localEnabled, </span><span style="color:#6A737D;">// 开发打包开关 true时打开mock  false关闭mock</span></span>
<span class="line"><span style="color:#24292E;">   prodEnabled: prodEnabled,</span><span style="color:#6A737D;">//prodEnabled, // 生产打包开关</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6A737D;">// 这样可以控制关闭mock的时候不让mock打包到最终代码内</span></span>
<span class="line"><span style="color:#24292E;">   injectCode: </span><span style="color:#032F62;">\`</span></span>
<span class="line"><span style="color:#032F62;">    import { setupProdMockServer } from &#39;./mockProdServer&#39;;</span></span>
<span class="line"><span style="color:#032F62;">    setupProdMockServer();</span></span>
<span class="line"><span style="color:#032F62;">   \`</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">   logger: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//是否在控制台显示请求日志</span></span>
<span class="line"><span style="color:#24292E;">   supportTs:</span><span style="color:#005CC5;">false</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">//打开后，可以读取 ts 文件模块 打开后将无法监视 .js 文件</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;"> ],</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6A737D;">// 强制预构建插件包</span></span>
<span class="line"><span style="color:#24292E;"> optimizeDeps: {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//检测需要预构建的依赖项</span></span>
<span class="line"><span style="color:#24292E;">  entries: [],</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//默认情况下，不在 node_modules 中的，链接的包不会预构建</span></span>
<span class="line"><span style="color:#24292E;">  include: [</span><span style="color:#032F62;">&#39;axios&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  exclude:[</span><span style="color:#032F62;">&#39;your-package-name&#39;</span><span style="color:#24292E;">] </span><span style="color:#6A737D;">//排除在优化之外</span></span>
<span class="line"><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6A737D;">//静态资源服务的文件夹</span></span>
<span class="line"><span style="color:#24292E;"> publicDir: </span><span style="color:#032F62;">&quot;public&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;"> base: </span><span style="color:#032F62;">&#39;./&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6A737D;">//静态资源处理</span></span>
<span class="line"><span style="color:#24292E;"> assetsInclude: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6A737D;">//控制台输出的级别 info 、warn、error、silent</span></span>
<span class="line"><span style="color:#24292E;"> logLevel: </span><span style="color:#032F62;">&quot;info&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6A737D;">// 设为false 可以避免 vite 清屏而错过在终端中打印某些关键信息</span></span>
<span class="line"><span style="color:#24292E;"> clearScreen:</span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;"> resolve: {</span></span>
<span class="line"><span style="color:#24292E;">  alias: [</span><span style="color:#6A737D;">//配置别名</span></span>
<span class="line"><span style="color:#24292E;">   { find: </span><span style="color:#032F62;">&#39;@&#39;</span><span style="color:#24292E;">, replacement: </span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&#39;src&#39;</span><span style="color:#24292E;">) }</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 情景导出 package.json 配置中的exports字段</span></span>
<span class="line"><span style="color:#24292E;">  conditions: [],</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 导入时想要省略的扩展名列表</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 不建议使用 .vue 影响IDE和类型支持</span></span>
<span class="line"><span style="color:#24292E;">  extensions:[</span><span style="color:#032F62;">&#39;.mjs&#39;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&#39;.js&#39;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&#39;.ts&#39;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&#39;.jsx&#39;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&#39;.tsx&#39;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&#39;.json&#39;</span><span style="color:#24292E;">]  </span></span>
<span class="line"><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6A737D;">// css</span></span>
<span class="line"><span style="color:#24292E;"> css: {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 配置 css modules 的行为</span></span>
<span class="line"><span style="color:#24292E;">  modules: {  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// postCss 配置</span></span>
<span class="line"><span style="color:#24292E;">  postcss: {</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//指定传递给 css 预处理器的选项</span></span>
<span class="line"><span style="color:#24292E;">  preprocessorOptions:{</span></span>
<span class="line"><span style="color:#24292E;">   scss: {</span></span>
<span class="line"><span style="color:#24292E;">    additionalData:</span><span style="color:#032F62;">\`$injectedColor:orange;\`</span></span>
<span class="line"><span style="color:#24292E;">   }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;"> json: {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//是否支持从 .json 文件中进行按名导入</span></span>
<span class="line"><span style="color:#24292E;">  namedExports: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//若设置为 true 导入的json会被转为 export default JSON.parse(&quot;..&quot;) 会比转译成对象字面量性能更好</span></span>
<span class="line"><span style="color:#24292E;">  stringify:</span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6A737D;">//继承自 esbuild 转换选项，最常见的用例是自定义 JSX</span></span>
<span class="line"><span style="color:#24292E;"> esbuild: {</span></span>
<span class="line"><span style="color:#24292E;">  jsxFactory: </span><span style="color:#032F62;">&quot;h&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  jsxFragment: </span><span style="color:#032F62;">&quot;Fragment&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  jsxInject:</span><span style="color:#032F62;">\`import Vue from &#39;vue&#39;\`</span></span>
<span class="line"><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6A737D;">//本地运行配置，以及反向代理配置</span></span>
<span class="line"><span style="color:#24292E;"> server: {</span></span>
<span class="line"><span style="color:#24292E;">  host: </span><span style="color:#032F62;">&quot;localhost&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  https: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span><span style="color:#6A737D;">//是否启用 http 2</span></span>
<span class="line"><span style="color:#24292E;">  cors: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span><span style="color:#6A737D;">//为开发服务器配置 CORS , 默认启用并允许任何源</span></span>
<span class="line"><span style="color:#24292E;">  open: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span><span style="color:#6A737D;">//服务启动时自动在浏览器中打开应用</span></span>
<span class="line"><span style="color:#24292E;">  port: </span><span style="color:#032F62;">&quot;9000&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  strictPort: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//设为true时端口被占用则直接退出，不会尝试下一个可用端口</span></span>
<span class="line"><span style="color:#24292E;">  force: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span><span style="color:#6A737D;">//是否强制依赖预构建</span></span>
<span class="line"><span style="color:#24292E;">  hmr: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span><span style="color:#6A737D;">//禁用或配置 HMR 连接</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 传递给 chockidar 的文件系统监视器选项</span></span>
<span class="line"><span style="color:#24292E;">  watch: {</span></span>
<span class="line"><span style="color:#24292E;">   ignored:[</span><span style="color:#032F62;">&quot;!**/node_modules/your-package-name/**&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 反向代理配置</span></span>
<span class="line"><span style="color:#24292E;">  proxy: { </span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#032F62;">&#39;/api&#39;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    target: </span><span style="color:#032F62;">&quot;https://xxxx.com/&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    changeOrigin: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">rewrite</span><span style="color:#24292E;">: (</span><span style="color:#E36209;">path</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> path.</span><span style="color:#6F42C1;">replace</span><span style="color:#24292E;">(</span><span style="color:#032F62;">/</span><span style="color:#D73A49;">^</span><span style="color:#22863A;font-weight:bold;">\\/</span><span style="color:#032F62;">api/</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">   }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6A737D;">//打包配置</span></span>
<span class="line"><span style="color:#24292E;"> build: {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//浏览器兼容性  &quot;esnext&quot;|&quot;modules&quot;</span></span>
<span class="line"><span style="color:#24292E;">  target: </span><span style="color:#032F62;">&quot;modules&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//指定输出路径</span></span>
<span class="line"><span style="color:#24292E;">  outDir: </span><span style="color:#032F62;">&quot;dist&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//生成静态资源的存放路径</span></span>
<span class="line"><span style="color:#24292E;">  assetsDir: </span><span style="color:#032F62;">&quot;assets&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求。设置为 0 可以完全禁用此项</span></span>
<span class="line"><span style="color:#24292E;">  assetsInlineLimit: </span><span style="color:#005CC5;">4096</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//启用/禁用 CSS 代码拆分</span></span>
<span class="line"><span style="color:#24292E;">  cssCodeSplit: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//构建后是否生成 source map 文件</span></span>
<span class="line"><span style="color:#24292E;">  sourcemap: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//自定义底层的 Rollup 打包配置</span></span>
<span class="line"><span style="color:#24292E;">  rollupOptions: {</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//@rollup/plugin-commonjs 插件的选项</span></span>
<span class="line"><span style="color:#24292E;">  commonjsOptions: {</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//构建的库</span></span>
<span class="line"><span style="color:#24292E;">  lib: {</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//当设置为 true，构建后将会生成 manifest.json 文件</span></span>
<span class="line"><span style="color:#24292E;">  manifest: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 设置为 false 可以禁用最小化混淆，</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 或是用来指定使用哪种混淆器</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// boolean | &#39;terser&#39; | &#39;esbuild&#39;</span></span>
<span class="line"><span style="color:#24292E;">  minify: </span><span style="color:#032F62;">&quot;terser&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//terser 构建后文件体积更小</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//传递给 Terser 的更多 minify 选项。</span></span>
<span class="line"><span style="color:#24292E;">  terserOptions: {</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//设置为 false 来禁用将构建后的文件写入磁盘</span></span>
<span class="line"><span style="color:#24292E;">  write: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//默认情况下，若 outDir 在 root 目录下，则 Vite 会在构建时清空该目录。</span></span>
<span class="line"><span style="color:#24292E;">  emptyOutDir: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//启用/禁用 brotli 压缩大小报告</span></span>
<span class="line"><span style="color:#24292E;">  brotliSize: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//chunk 大小警告的限制</span></span>
<span class="line"><span style="color:#24292E;">  chunkSizeWarningLimit: </span><span style="color:#005CC5;">500</span></span>
<span class="line"><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;"> ssr: {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 列出的是要为 SSR 强制外部化的依赖</span></span>
<span class="line"><span style="color:#24292E;">  external: [],</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//列出的是防止被 SSR 外部化依赖项</span></span>
<span class="line"><span style="color:#24292E;">  noExternal: [</span></span>
<span class="line"><span style="color:#24292E;">  ]</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div>`,3),e=[o];function c(t,r,E,y,i,F){return n(),a("div",null,e)}const A=s(p,[["render",c]]);export{D as __pageData,A as default};
