---
outline: deep
---
# 原生webcomponent
## 什么是webcomponent
Web Components 是一组不同的技术，允许你创建可重用的自定义元素 — 这些元素的功能在你的代码中可以封装起来，以便在你的 Web 应用中使用。

Web Components 标准主要由 三个 技术组成：
1.Custom Elements：一组 JavaScript API，允许你定义 custom elements 及其行为，然后在你的用户界面中使用它们。
2.Shadow DOM：一组 JavaScript API，用于封装在一个 Web 组件中的样式和标记，不受外部世界的影响，也不影响外部世界。
3.HTML Templates：`<template>` 和 `<slot>` 元素使你能够编写不在渲染页面时直接显示的标记模板。然后，你可以将这些模板当作 custom element 结构的基础复用在多个地方。

## 创建简单的webcomponent
```html
<body>

  <!-- 使用子组件 -->
  <sub-component></sub-component>

  <!-- 创建子组件模版 -->
  <template id="sub-component">
    <!-- 子组件样式 -->
    <style>
      p{
        color: brown;
        background-color: #8df;
      }
    </style>
    <!-- 子组件标签 -->
    <p>子组件</p>
  </template>

  <!-- 子组件js脚本 -->
  <script>
    // 子组件类
    class SubComponent extends HTMLElement{
      constructor(){
        super()//继承父类
        // 获取组件模版内容
        const template = document.querySelector('#sub-component').content
        // 创建组件根节点：影子DOM节点
        const shadowRoot=this.attachShadow({mode:'open'})
        // 将模版节点内容添加到影子DOM节点中
        shadowRoot.appendChild(template.cloneNode(true))
      }
    } 
    // 创建子组件定义
    customElements.define('sub-component',SubComponent)
  </script>
  
</body>
```
## 传值

```diff
<body>

  <!-- 使用子组件 -->
-  <sub-component></sub-component>
+  <sub-component message='one'></sub-component>
  <!-- 创建子组件模版 -->
  <template id="sub-component">
    <!-- 子组件样式 -->
    <style>
      p{
        color: brown;
        background-color: #8df;
      }
    </style>
    <!-- 子组件标签 -->
    <p>
      <span></span>
    </p>
  </template>

  <!-- 子组件js脚本 -->
  <script>
    // 子组件类
    class SubComponent extends HTMLElement{
      constructor(){
        super()//继承父类
        // 获取组件模版内容
        const template = document.querySelector('#sub-component').content
        // 创建组件根节点：影子DOM节点
        const shadowRoot=this.attachShadow({mode:'open'})
        // 将模版节点内容添加到影子DOM节点中
        shadowRoot.appendChild(template.cloneNode(true))
+        // 获取子组件上参数属性
+        const propData =  this.getAttribute('message')
+        // 将参数设置到节点标签内容上
+        shadowRoot.querySelector('span').innerText=propData
      }
    } 
    // 创建子组件定义
    customElements.define('sub-component',SubComponent)
  </script>
  
</body>
```
## 插槽
```diff
<body>

  <!-- 使用子组件 -->
  <sub-component message="one"></sub-component>
+  <!-- 使用带插槽子组件 -->
+  <sub-component>
+    <div slot="content">this is a solt</div>
+  </sub-component>

  <!-- 创建子组件模版 -->
  <template id="sub-component">
    <!-- 子组件样式 -->
    <style>
      p{
        color: brown;
        background-color: #8df;
      }
    </style>
    <!-- 子组件标签 -->
    <p>
      <span></span>
+      <div>
+        <slot name="content"></slot>
+      </div>
    </p>
  </template>

  <!-- 子组件js脚本 -->
  <script>
    // 子组件类
    class SubComponent extends HTMLElement{
      constructor(){
        super()//继承父类
        // 获取组件模版内容
        const template = document.querySelector('#sub-component').content
        // 创建组件根节点：影子DOM节点
        const shadowRoot=this.attachShadow({mode:'open'})
        // 将模版节点内容添加到影子DOM节点中
        shadowRoot.appendChild(template.cloneNode(true))
        // 获取子组件上参数属性
        const propData =  this.getAttribute('message')
        // 将参数设置到节点标签内容上
        shadowRoot.querySelector('span').innerText=propData
      }
    } 
    // 创建子组件定义
    customElements.define('sub-component',SubComponent)
  </script>

</body>
```
## webcomponent 应用、封装
### 前端框架
#### Stencil  
Stencil 是用于生成 Web Components 的编译器，由 Ionic 团队构建。Stencil 允许开发人员使用。TypeScript 和 JSX 等技术来定义组件，然后生成可在现代浏览器和旧版浏览器上运行的 100% 基于标准的 Web Component。当你的组件一旦经过 build 完成后，就会脱离 Stencil，不再依赖。并且 Stencil 相对原生 Web Components 提供了完善的项目目录架构和配置，与直接使用 Custom Elements 相比，Stencil 提供了额外的 API，使编写快速组件变得更加简单，
#### Omi
Omi 是腾讯开源的前端跨框架跨平台的框架。是下一代 Web 框架，Omi 的目标是去万物糟粕，合精华为一。Omi 是一个跨框架的框架，任何框架都可以使用 Omi 自定义原始，当然 Web Components 也可以。
#### Slim.js
Slim.js 是一个开源的轻量级 Web Components 库，它为组件提供数据绑定和扩展能力，使用 es6 原生类继承。专注于帮助开发者更好的编写原生web组件，而不依赖于其他框架，但是也提供了良好的拓展性，开发者可以自由拓展。
#### Polymer
Polymer 是 Google 推出的 Web Components 库，支持数据的单向和双向绑定，兼容性较好，跨浏览器性能也较好；提供了一组用于创建 custom elements 的功能。这些功能旨在使 custom elements 像标准 DOM 元素一样工作更容易和更快。与标准 DOM 元素类似，
#### hybrids
hybrids 是一个 JavaScript UI 框架，用于创建功能齐全的 Web 应用程序、组件库或具有独特的混合声明性和功能性架构的单个 Web Components。该框架的主要目标是为网络平台提供一套完整的工具——一切都没有外部依赖。它支持构建 UI 组件、管理复杂状态、使用客户端路由创建应用程序流以及针对全球市场本地化其内容。所有部分都遵循相同的独特概念，使其易于理解和使用！
#### X-Tag
X-Tag 是微软推出的开源库，支持 Web Components 规范，兼容Web Components。X-Tag 最初由 Mozilla 开发，现在由 Microsoft 的开发人员提供支持，它是一个开源 JavaScript 库，它包装了 W3C 标准 Web Components API 系列，为组件开发提供了一个紧凑、功能丰富的接口。虽然 X-Tag 可以轻松利用所有 Web Components API（自定义元素、Shadow DOM、模板和 HTML 导入），但它只需要自定义元素 API 支持即可运行。在没有原生自定义元素 API 的情况下，X-Tag 使用 Google 的 Polymer 框架所依赖的相同的 polyfill 。
#### LitElement
LitElement 是一个简单的基类，用于使用 lit-html 创建快速、轻量级的 Web Components。LitElement 现在是Lit 库 monorepo的一部分。Lit 2 包括 lit-html 2.x 和 LitElement 3.x。LitElement 使用lit-html渲染到元素的Shadow DOM 中，并添加 API 来帮助管理元素属性和特性。LitElement 对属性的变化做出反应。
#### direflow
direflow 是一个 React组件 + web component +web componen t属性变化重新挂载 React 组件的 web component框架。direflow的响应式其实分为2块： 组件内部响应式（通过React自身响应式流程），组件外部响应式（WebComponents属性变化监听重渲染组件）。如果外部属性不会经常变化的话，性能这块没有问题，因为组件内部的响应式完全是走了React自身的响应式。 属性外部属性如果会经常变化的话，direflow框架在这块还有一定的优化空间。

### 微前端框架
#### qiankun(single-spa)
QianKun 基于 single-spa ，阿里系开源的微前端框架，
#### Mirco-App(webcomponent)
Micro App 是京东出的一款基于 Web Component 原生组件进行渲染的微前端框架，不同于目前流行的开源框架，它从组件化的思维实现微前端，旨在降低上手难度、提升工作效率。
#### 无界(webcomponent+iframe)
无界是腾讯推出的一款微前端解决方式。它是一种基于 Web Components + iframe 的全新微前端方案，继承iframe的优点，补足 iframe 的缺点，让 iframe 焕发新生。Web Components 是一个浏览器原生支持的组件封装技术，可以有效隔离元素之间的样式，iframe 可以给子应用提供一个原生隔离的运行环境，相比自行构造的沙箱 iframe 提供了独立的 window、document、history、location，可以更好的和外部解耦
#### Garfish(single-spa)
Garfish 字节跳动出品，当时出现的时候还是比较火热的。但是感觉有点半成品，没啥issue，没啥人用
#### EMP（Webpack5 Module Federation）
EMP是欢聚时代基于 Webpack5 Module Federation 搭建的微前端方案，更多的是去支持webpack，用的人也不多。
#### module-federation（Module Federation）
![图片](../../assets/images/webcomponent/module-federation.webp)
1.Module Federation | webpack 中文文档  
2.需要加载打包后的产物，启动preview模式  
3.JS沙箱、样式隔离需要自己做  
4.按照如下方式构建后，加载子应用，就和加载一个组件一毛一样  
5.使用@originjs/vite-plugin-federation也能在vite架构下实现模块联邦
:::info
体验非常好，完全的spa切换体验，非常丝滑
:::
#### 其他框架
- ice-lab/icestark 飞冰的微前端方案
- teambit/bit 无中文文档，国外挺火

### 微前端框架的选择
- 自由度更高：module-federation，但是需要自定义实现css隔离、js沙箱、路由劫持等功能
- 用的最多：qiankun，相对比较成熟，社区活跃，webpack体系、接入相对比较重
- 接入更流畅：wujie、micro-app，都是基于react +vite技术栈