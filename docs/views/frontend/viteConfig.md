---
outline: deep
---

# vite 配置与兼容

## 一、vite.config.js 中配置

```js
import vue from "@vitejs/plugin-vue"
const path = require("path")
// vite.config.js # or vite.config.ts
console.log(path.resolve(__dirname, "./src"))
module.exports = {
  plugins: [vue()],
  "resolve.alias": {
    // 键必须以斜线开始和结束
    "/@/": path.resolve(__dirname, "./src"),
  },
  hostname: "127.0.0.1",
  port: 3000,
  // 是否自动在浏览器打开
  open: true,
  // 是否开启 https
  https: false,
  // 服务端渲染
  ssr: false,
  /**
   * 在生产中服务时的基本公共路径。
   * @default '/'
   */
  base: "./",
  /**
   * 与“根”相关的目录，构建输出将放在其中。如果目录存在，它将在构建之前被删除。
   * @default 'dist'
   */
  outDir: "dist",
  // 反向代理，此处应该特别注意，网上很多教程是直接设置proxy，并没有向官网那样添加 server，可能会导致失败，vite官网：https://vitejs.dev/guide/features.html#async-chunk-loading-optimization
  server: {
    proxy: {
      "/api": {
        target: "https://api.pingping6.com/tools/baidutop/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
}
```

```js
import { defineConfig } from "vite" // 帮手函数，这样不用 jsdoc 注解也可以获取类型提示
import vue from "@vitejs/plugin-vue"
const { resolve } = require("path")
import { viteMockServe } from "vite-plugin-mock"

const localEnabled = process.env.USE_MOCK || false
const prodEnabled = process.env.USE_CHUNK_MOCK || false

// https://vitejs.dev/config/
export default () =>
  defineConfig({
    plugins: [
      //配置需要使用的插件列表
      vue(),
      viteMockServe({
        mockPath: "./src/server/mock",
        localEnabled: localEnabled, // 开发打包开关 true时打开mock  false关闭mock
        prodEnabled: prodEnabled, //prodEnabled, // 生产打包开关
        // 这样可以控制关闭mock的时候不让mock打包到最终代码内
        injectCode: `
    import { setupProdMockServer } from './mockProdServer';
    setupProdMockServer();
   `,
        logger: false, //是否在控制台显示请求日志
        supportTs: false, //打开后，可以读取 ts 文件模块 打开后将无法监视 .js 文件
      }),
    ],
    // 强制预构建插件包
    optimizeDeps: {
      //检测需要预构建的依赖项
      entries: [],
      //默认情况下，不在 node_modules 中的，链接的包不会预构建
      include: ["axios"],
      exclude: ["your-package-name"], //排除在优化之外
    },
    //静态资源服务的文件夹
    publicDir: "public",
    base: "./",
    //静态资源处理
    assetsInclude: "",
    //控制台输出的级别 info 、warn、error、silent
    logLevel: "info",
    // 设为false 可以避免 vite 清屏而错过在终端中打印某些关键信息
    clearScreen: true,
    resolve: {
      alias: [
        //配置别名
        { find: "@", replacement: resolve(__dirname, "src") },
      ],
      // 情景导出 package.json 配置中的exports字段
      conditions: [],
      // 导入时想要省略的扩展名列表
      // 不建议使用 .vue 影响IDE和类型支持
      extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
    },
    // css
    css: {
      // 配置 css modules 的行为
      modules: {},
      // postCss 配置
      postcss: {},
      //指定传递给 css 预处理器的选项
      preprocessorOptions: {
        scss: {
          additionalData: `$injectedColor:orange;`,
        },
      },
    },
    json: {
      //是否支持从 .json 文件中进行按名导入
      namedExports: true,
      //若设置为 true 导入的json会被转为 export default JSON.parse("..") 会比转译成对象字面量性能更好
      stringify: false,
    },
    //继承自 esbuild 转换选项，最常见的用例是自定义 JSX
    esbuild: {
      jsxFactory: "h",
      jsxFragment: "Fragment",
      jsxInject: `import Vue from 'vue'`,
    },
    //本地运行配置，以及反向代理配置
    server: {
      host: "localhost",
      https: false, //是否启用 http 2
      cors: true, //为开发服务器配置 CORS , 默认启用并允许任何源
      open: true, //服务启动时自动在浏览器中打开应用
      port: "9000",
      strictPort: false, //设为true时端口被占用则直接退出，不会尝试下一个可用端口
      force: true, //是否强制依赖预构建
      hmr: false, //禁用或配置 HMR 连接
      // 传递给 chockidar 的文件系统监视器选项
      watch: {
        ignored: ["!**/node_modules/your-package-name/**"],
      },
      // 反向代理配置
      proxy: {
        "/api": {
          target: "https://xxxx.com/",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
    //打包配置
    build: {
      //浏览器兼容性  "esnext"|"modules"
      target: "modules",
      //指定输出路径
      outDir: "dist",
      //生成静态资源的存放路径
      assetsDir: "assets",
      //小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求。设置为 0 可以完全禁用此项
      assetsInlineLimit: 4096,
      //启用/禁用 CSS 代码拆分
      cssCodeSplit: true,
      //构建后是否生成 source map 文件
      sourcemap: false,
      //自定义底层的 Rollup 打包配置
      rollupOptions: {},
      //@rollup/plugin-commonjs 插件的选项
      commonjsOptions: {},
      //构建的库
      lib: {},
      //当设置为 true，构建后将会生成 manifest.json 文件
      manifest: false,
      // 设置为 false 可以禁用最小化混淆，
      // 或是用来指定使用哪种混淆器
      // boolean | 'terser' | 'esbuild'
      minify: "terser", //terser 构建后文件体积更小
      //传递给 Terser 的更多 minify 选项。
      terserOptions: {},
      //设置为 false 来禁用将构建后的文件写入磁盘
      write: true,
      //默认情况下，若 outDir 在 root 目录下，则 Vite 会在构建时清空该目录。
      emptyOutDir: true,
      //启用/禁用 brotli 压缩大小报告
      brotliSize: true,
      //chunk 大小警告的限制
      chunkSizeWarningLimit: 500,
    },
    ssr: {
      // 列出的是要为 SSR 强制外部化的依赖
      external: [],
      //列出的是防止被 SSR 外部化依赖项
      noExternal: [],
    },
  })
```

## 二、vite 配置 cdn

### 使用 rollup-plugin-external-globals 插件包

Vite 的打包是通过 Rollup，打包时使用 CDN 需要安装一个插件：rollup-plugin-external-globals

```ts
import { defineConfig } from "vite"
import externalGlobals from "rollup-plugin-external-globals"

export default defineConfig({
  // other config
  build: {
    rollupOptions: {
      external: ["vue", "vuex", "axios", "vue-router"],
      plugins: [
        externalGlobals({
          vue: "Vue",
          vuex: "Vuex",
          axios: "axios",
          "vue-router": "VueRouter",
        }),
      ],
    },
  },
})
```

external 是 CDN 的包名

externalGlobals 里的键值对与 webpack externals 的解释一致

然后在 index.html 加入 CDN 文件

```html
<script src="https://cdn/vue····"></script>
<script src="https://cdn/vuex····"></script>
<script src="https://cdn/axios····"></script>
<script src="https://cdn/vue-routers····"></script>
```

### 使用 vite-plugin-cdn-import 插件包

```ts
import importToCDN from 'vite-plugin-cdn-import';
importToCDN({
    modules: [
        {
            name: 'vue',//被引入的安装包名字
            var: 'Vue',//全局变量名字
            path: 'https://cdn.jsdelivr.net/npm/vue@3.2.25/dist/vue.global.prod.js'//cdn地址
        },
        {
            name: 'vue-i18n',
            var: 'VueI18n',
            path: 'https://cdn.bootcdn.net/ajax/libs/vue-i18n/9.1.10/vue-i18n.global.prod.min.js'
        },
        {
            name: 'vue-router',
            var: 'VueRouter',
            path: 'https://unpkg.com/vue-router@4.0.16/dist/vue-router.global.prod.js'
        },

        {
            name: 'element-plus',
            var: 'ElementPlus',
            path: `https://unpkg.com/element-plus@2.2.6/dist/index.full.js`,
            css: 'https://unpkg.com/element-plus/dist/index.css'
        },
        {
            name: 'vue-demi',
            var: 'VueDemi',
            path: 'https://cdn.bootcdn.net/ajax/libs/vue-demi/0.13.1/index.iife.js'
        },
        {
            name: 'pinia',
            var: 'Pinia',
            path: 'https://cdn.bootcdn.net/ajax/libs/pinia/2.0.14/pinia.iife.prod.min.js'
        },
        {
            name: '@smallwei/avue',
            var: 'AVUE',
            path: 'https://cdn.jsdelivr.net/npm/@smallwei/avue@3.0.17'
        }
    ]
}),
```

这上面的都有引用关系所以都需要通过 cdn 的方式引入
VueDemi 这个是 pinia 用来判断是 vue2 还是 vue3 所需要的，要额外引入一下

## 三、vite 打包兼容 file 协议打开

https://zhuanlan.zhihu.com/p/650561443

## 四、vite 配置加载 env 文件

作用：使用 import.meta.env.时，有类型提示，并且可以读取 env 文件内值的原始类型，包括 boolean 等类型

1. 安装插件

```bash
npm install vite-plugin-env-parse -D
```

2. 配置插件

```ts
// vite.config.js / vite.config.ts
import { envParse } from'vite-plugin-env-parse'

exportdefault {
  plugins: [envParse()]
}
```

参考文档：https://mp.weixin.qq.com/s/c_RveVmANSQFzvdz9sFzjQ
