---
outline: deep
---

# qiankun 配合 vite 使用

## 一、qiankun 基本原理

主应用通过 `qiankun` 提供的方法以路由路径的形式匹配子应用并引入，而后将子应用 `html` 作为入口，并通过 [import-html-entry](https://github.com/kuitos/import-html-entry) 来加载子应用所需要的 `js、css` 资源列表，再依次用 `eval` 去执行，从而完成子应用的加载。更多细节可以参考 [微前端原理分析](https://juejin.cn/column/7070032389811994631)

## 二、qiankun 搭配 vite 构建

### 存在问题

- Q1:`vite` 的模块加载方式是 `esm`, 而 `qiankun` 并不支持在非 `module script` 标签内解析 `esm` 格式的代码，导致子应用无法正确加载
- Q2:对于 `react-refresh` 需要全局变量 `__vite_plugin_react_preamble_installed`, 由于 `qiankun` 使用 `window+proxy` 实现了 `js` 沙箱，所以这里的全局变量实际上会被挂载到 `window.proxy` 上，导致后续访问全局变量会报错
- Q3:`vite` 不支持运行时 `publicPath` 的配置，而 `qiankun` 需要在运行时动态修改 `publicPath` 来加载子应用的资源

### 解决方案

1. 开发环境下
   我们可以借助 `vite-plugin-qiankun` 插件来得到解决。它通过 `dynamic import()` 的形式来加载子应用程序，从而使得可以在模块系统【 `ESM` 和 `CommonJS` 】下均可正确加载子应用程序；同时它还会在 `window` 上挂载 **INJECTED_PUBLIC_PATH_BY_QIANKUN** 全局变量，用于在运行时动态修改 publicPath 来加载子应用的资源。详情可参考 [vite-plugin-qiankun](https://github.com/tengmaoqing/vite-plugin-qiankun)
2. 生产环境下
   生产模式下依旧不支持 `publicPath` , 需要将 `vite.config.ts` 中 `base` 配置写死。而如果是写死的话可能导致多环境部署不便捷并且它无法像在 `webpack` 中结合 `window.INJECTED_PUBLIC_PATH_BY_QIANKUN + publicpath` 来解决
   `Vite` 对 `runtime publicpath` 的支持，可以尝试下面这个插件：
   [vite-plugin-dynamic-base](https://github.com/chenxch/vite-plugin-dynamic-base)，它可以解析所有资源文件动态 `publicPath`，如 `Webpack` 的**webpack_public_path** 类似。

### 实际案例

#### 主应用(micro-main)

##### 1. 初始化项目

```bash
pnpm create vite micro-main --template react-ts
```

##### 2. 注册子应用

```ts
import { registerMicroApps, setDefaultMountApp, start, runAfterFirstMounted } from "qiankun"
// 注册子应用
registerMicroApps(
  [
    {
      label: "React 应用", // 子应用名称
      name: "reactApp", // 子应用名称
      entry: "//localhost:8888", // 子应用入口
      container: "#subapp-viewport", // 子应用挂载的容器
      activeRule: "/micro/reactApp", // 子应用的激活规则【匹配路由】
      props: {
        // 传递给子应用的数据
        basename: "/micro/reactApp",
      },
    },
    {
      label: "Vue 应用",
      name: "vueApp",
      entry: "//localhost:9999",
      container: "#subapp-viewport",
      activeRule: "/micro/vueApp",
      props: {
        basename: "/micro/vueApp",
      },
    },
  ],
  {
    // qiankun 生命周期钩子 - 加载前
    beforeLoad: (app) => {
      console.log("before load", app)
    },
    // qiankun 生命周期钩子 - 挂载后
    afterMount: (app) => {
      console.log("before mount", app)
    },
    // qiankun 生命周期钩子 - 卸载后
    afterUnmount: (app) => {
      console.log("after unload", app)
    },
  }
)

// 设置默认进入的子应用
setDefaultMountApp("/micro/reactApp")

// 启动 qiankun
start()

// 第一个子应用加载完毕回调
runAfterFirstMounted(() => {
  console.log("[MainApp] first app mounted")
})
```

#### 子应用(react-app)

相对于 `react` 子应用而言，简单使用的 `vite-plugin-qiankun` 插件可以正确使用，但是 `react-refresh` (热更新)无法生效，这里参考 `vite-plugin-qiankun` 插件并结合 `vite` 相关配置来进行处理。详情可参考 [micro-frontends-qiankun/react-app](https://github.com/niezicheng/micro-frontends-qiankun/tree/main/react-app)。

##### 1. 初始化项目

```bash
pnpm create vite react-app --template react-ts
```

##### 2. `main.tsx`中添加生命周期钩子

```tsx
import React from "react"
import { createRoot } from "react-dom/client"
import { renderWithQiankun, qiankunWindow } from "plugins/qiankun/helper"
import App from "App"

let root: any = null

// 渲染函数
const render = (props: { [x: string]: any; container?: any }) => {
  const { container } = props
  root = createRoot(container ? container.querySelector("#root") : (document.getElementById("root") as HTMLElement))
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}

// 导出 qiankun 的生命周期钩子函数
renderWithQiankun({
  mount(props) {
    console.log("[react18] props from main framework", props)
    // 挂在后渲染
    render(props)
  },
  bootstrap() {
    console.log("[react18] react app bootstraped")
  },
  unmount(props) {
    const { container } = props
    // 卸载后清理
    root.unmount(container ? container.querySelector("#root") : (document.getElementById("root") as HTMLElement))
  },
  update(props: any) {
    console.log("[react18] react app update", props)
  },
})

// 判断是否在 qiankun 环境下而后渲染
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({})
}
```

##### 3. vite.config.ts

```ts
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import qiankunPlugin from "./src/plugins/qiankun/vite-plugin-qiankun"
import { name } from "./package.json"

const port = 8888 // dev port
const useDevMode = true // 是否使用开发模式

export default defineConfig(({ mode }) => ({
  plugins: [
    react({
      babel: {
        babelrc: false,
        // 支持解析装饰器【结合 qiankunPlugin 处理开发环境热更新问题】
        plugins: [["@babel/plugin-proposal-decorators", { legacy: true }]],
      },
    }),
    qiankunPlugin(name, { useDevMode }),
  ],
}))
```

#### 子应用(vue-app)

相对于 `vue` 子应用而言，简单使用的 `vite-plugin-qiankun` 插件即可，无需额外配置。不过开发环境下需添加 `server.origin` 配置，否则在主应用中无法获取到子应用的静态资源。详情可参考 [micro-frontends-qiankun/vue-app](https://github.com/niezicheng/micro-frontends-qiankun/tree/main/vue-app)，

##### 1. 初始化项目

```bash
pnpm create vite vue --template vue-ts

```

##### 2.`main.ts`中添加生命周期钩子

```ts
import { App as TApp, createApp } from "vue"
import { renderWithQiankun, qiankunWindow } from "vite-plugin-qiankun/es/helper"
import App from "App.vue"

let app: TApp

// 渲染函数
function render(props: any) {
  const { container } = props
  app = createApp(App)
  const c = container ? container.querySelector("#app") : document.getElementById("app")
  app.mount(c)
}

// 导出 qiankun 的生命周期钩子函数
renderWithQiankun({
  mount(props) {
    console.log("vue3sub mount", props)
    // 挂在后渲染
    render(props)
  },
  bootstrap() {
    console.log("bootstrap")
  },
  unmount(props: any) {
    console.log("vue3sub unmount", props)
    app.unmount()
  },
  update(props: any) {
    console.log("vue3sub update", props)
  },
})

// 判断是否在 qiankun 环境下而后渲染
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({})
}
```

##### 3. vite.config.ts

```ts
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import qiankunPlugin from "vite-plugin-qiankun"
import tsconfigPaths from "vite-tsconfig-paths"
import { name } from "./package.json"

const port = 9999 // dev port
const useDevMode = true // 是否使用开发模式

export default defineConfig(({ mode }) => ({
  plugins: [vue(), qiankunPlugin(name, { useDevMode })],
  server: {
    port,
    cors: true,
    // 需要设置为 true, 否则开发环境下子应用资源无法在主应用展示
    origin: `http://localhost:${port}`,
  },
  // 生产模式下依旧不支持 publicPath, 需要将 vite.config.js 中 base 配置写死【致使多环境部署不便捷】
  base: mode === "development" ? "/" : `http://127.0.0.1:${port}/`,
  resolve: {
    // 忽略后缀名的配置选项, 添加 .vue 选项时要记得原本默认忽略的选项也要手动写入
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
  },
}))
```
