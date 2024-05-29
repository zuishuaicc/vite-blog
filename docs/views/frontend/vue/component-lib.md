---
outline: deep
---

# 自定义组件库实现

## 一、创建项目

```bash
npm create vite
```

1. 使用 `vite` 搭建一个正常的 `vue` 项目
2. 删除 `public` 、 `src/assets` 和 `src/components` 文件夹；
3. 删除 `src/style.css` 文件；
<!-- 4. 清空 App.vue 文件里的代码，随便写入一个 `*.vue` 模板即可； -->

## 二、根目录下创建创建以下文件

`package/Button/Button.vue`

```vue
<template>
  <div class="quill-editor">
    <div>{{ msg }}</div>
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: "Button",
})
const msg: string = "测试按钮组件"
</script>

<style scoped></style>
```

`package/Button/index.ts`

```ts
import type { App } from "vue"
import Button from "./Button.vue"

// 使用install方法，在app.use挂载
Button.install = (app: App) => {
  app.component(Button.name!, Button)
}

export default Button
```

`package/index.ts`

```ts
import type { App, Plugin } from "vue"
import Button from "./Button"

// 所有组件列表
const components = [Button]

// 定义 install 方法
const install = (app: App): void => {
  // 遍历注册所有组件
  /*
    component.name ts报错
    Argument of type 'string | undefined' is not assignable to parameter of type 'string'.
    Type 'undefined' is not assignable to type 'string'.ts(2345)
    解决方式一：使用// @ts-ignore
    解决方式二：使用类型断言 尖括号语法(<string>component.name) 或 as语法(component.name as string)
  */
  components.forEach((component) => app.component(component.name!, component))
}

export { Button }

const CustomLib: Plugin = {
  install,
}

export default CustomLib
```

## 三、vite.config.ts 修改

```ts
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx" //支持tsx
import { resolve } from "node:path"
import dts from "vite-plugin-dts" //支持打包生成.d.ts文件

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), dts({ rollupTypes: true })],
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: true,
    lib: {
      name: "components-lib",
      entry: resolve(__dirname, "package/index.ts"),
      fileName: "components-lib",
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ["vue"],
      // output: {
      //   //输出为es、cjs文件
      //   // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
      //   exports: "named",
      //   externalLiveBindings: false,
      //   globals: {
      //     vue: "Vue",
      //   },
      // },
      output: [
        //输出为es、cjs文件夹
        {
          format: "es",
          entryFileNames: "[name].js",
          preserveModules: true,
          dir: "dist/es",
          preserveModulesRoot: "src",
        },
        {
          format: "cjs",
          entryFileNames: "[name].js",
          preserveModules: true,
          dir: "dist/lib",
          preserveModulesRoot: "src",
        },
      ],
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
      format: {
        comments: false,
      },
    },
    // cssCodeSplit:true
  },
})
```

## 四、package.json 修改

```json
{
  "name": "components-lib", // 组件名称
  "private": false, // 必须为false
  "version": "0.1.0", // 版本
  "type": "module",
  "main": "./dist/lib/index.js", // 入口文件
  "module": "./dist/es/index.js", // 文件
  "typings": "./dist/index.d.ts",
  "exports": {
    // 导入导出文件以及引入样式
    "./dist/index.css": "./dist/style.css",
    "./index.css": "./dist/style.css",
    ".": {
      "import": "./dist/es/index.js",
      "require": "./dist/lib/index.js"
    }
  },
  "scripts": {
    "dev": "vite",
    "build": "vue-tsc && vite build",
    "preview": "vite preview"
  },
  "author": "", // 作者
  "license": "MIT", // 公开方式
  "dependencies": {
    "vue": "^3.3.11"
  },
  "devDependencies": {
    "@types/node": "^20.12.12",
    "@vitejs/plugin-vue": "^4.5.2",
    "@vitejs/plugin-vue-jsx": "^3.1.0",
    "typescript": "^5.2.2",
    "vite": "^5.0.8",
    "vite-plugin-dts": "^3.9.1",
    "vue-tsc": "^1.8.25"
  }
}
```

## 五、打包

```bash
npm run build
```

编译结束后`dist`目录中就会生成 `es` 和 `lib` 两个文件夹，分别代表 `esm` 和 `cjs` 的模块化方式

## 六、本地测试使用

1. `src/main.ts`文件中添加如下代码

```ts
import { createApp } from "vue"
import App from "./App.vue"
import Package from "../package/index"
const app = createApp(App)

app.use(Package)
app.mount("#app")
```

2. 在`App.vue`文件中使用组件

```vue
<script setup lang="ts"></script>

<template>
  <div>
    <Button></Button>
  </div>
</template>

<style scoped></style>
```

## 七、发布 npm 包

```bash
npm publish
```
