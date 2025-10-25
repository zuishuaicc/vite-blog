import { fruitesIcon } from "./fruitesIcon"
// 依次获取图标
let fruites: Array<string> = JSON.parse(JSON.stringify(fruitesIcon))
function getIcon() {
  if (!fruites.length) {
    fruites = JSON.parse(JSON.stringify(fruitesIcon))
  }
  const icon = fruites.shift()
  return icon
}
export const sidebar = [
  {
    text: "使用样例",
    items: [
      { text: "Markdown Examples", link: "/markdown-examples" },
      { text: "Runtime API Examples", link: "/api-examples" },
    ],
  },
  {
    items: [
      {
        text: "📁前端",
        collapsed: true,
        items: [
          { text: getIcon() + " 常用算法", link: "/views/frontend/algorithms" },
          { text: getIcon() + " js基础", link: "/views/frontend/js-base" },
          { text: getIcon() + " 样式合集", link: "/views/frontend/styleCollection" },
          { text: getIcon() + " css画悬浮球", link: "/views/frontend/css-ball" },
          { text: getIcon() + " vite.config配置", link: "/views/frontend/viteConfig" },
          { text: getIcon() + " electron-builder配置", link: "/views/frontend/electron-builder" },
          { text: getIcon() + " chrome-extension", link: "/views/frontend/chrome-extension" },
          { text: getIcon() + " canvas使用", link: "/views/frontend/canvas" },
          { text: getIcon() + " js页面拖拽", link: "/views/frontend/drag" },
          { text: getIcon() + " clickoutside指令", link: "/views/frontend/clickoutside" },
          { text: getIcon() + " indexDB使用", link: "/views/frontend/indexDB" },
          { text: getIcon() + " word前端操作", link: "/views/frontend/word" },
          { text: getIcon() + " excel前端操作", link: "/views/frontend/excel" },
          { text: getIcon() + " ant-design-vue可变列宽表格", link: "/views/frontend/vue-drag" },
          { text: getIcon() + " 文件分片上传", link: "/views/frontend/file-slice" },
          { text: getIcon() + " vue-to-pdf使用", link: "/views/frontend/vue-to-pdf" },
          { text: getIcon() + " 微信小程序中使用formdata", link: "/views/frontend/wx-formdata" },
          { text: getIcon() + " 人脸识别", link: "/views/frontend/face-api" },
          { text: getIcon() + " 原生webcomponent", link: "/views/frontend/webcomponent" },
          { text: getIcon() + " qiankun搭配vite", link: "/views/frontend/qiankun-vite" },
          { text: getIcon() + " 消除异步传染性", link: "/views/frontend/async-infect" },
          { text: getIcon() + " tsconfig详细配置", link: "/views/frontend/tsconfig-detail" },
          { text: getIcon() + " tailwind使用", link: "/views/frontend/tailwind" },
          { text: getIcon() + " 多行文本省略", link: "/views/frontend/ellipsis-text" },
          { text: getIcon() + " 原生js动画", link: "/views/frontend/web-animation-api" },
          { text: getIcon() + " 移动端事件库", link: "/views/frontend/hammerjs" },
          { text: getIcon() + " Eslint配置相关", link: "/views/frontend/eslint-config" },
          {
            text: "📁React",
            items: [
              { text: getIcon() + " vite搭建React+ts", link: "/views/frontend/react/react-quick-start" },
              { text: getIcon() + " react实战问题", link: "/views/frontend/react/react-practice" },
              { text: getIcon() + " react组件复用技巧", link: "/views/frontend/react/react-skill" },
            ],
          },
          {
            text: "📁Vue",
            items: [
              { text: getIcon() + " vue源码解析", link: "/views/frontend/vue/vue-sourcecode" },
              { text: getIcon() + " 自定义组件库", link: "/views/frontend/vue/component-lib" },
              { text: getIcon() + " vue3批量绑定ref", link: "/views/frontend/vue/vue-ref" },
              { text: getIcon() + " vue3实现defineModel宏", link: "/views/frontend/vue/vue-defineModel" },
            ],
          },
          {
            text: "📁Typescript",
            items: [{ text: getIcon() + " TypeScript常见类型错误", link: "/views/frontend/typescript/type-error" }],
          },
        ],
      },
    ],
  },
  {
    items: [
      {
        text: "📁服务端",
        collapsed: true,
        items: [
          { text: getIcon() + " node中使用esm", link: "/views/backend/node-esm" },
          { text: getIcon() + " node操作word", link: "/views/backend/node-word" },
          { text: getIcon() + " node操作excel", link: "/views/backend/node-excel" },
          { text: getIcon() + " 三方登录表结构", link: "/views/backend/third-table" },
          { text: getIcon() + " node中使用子进程", link: "/views/backend/node-child_process" },
          { text: getIcon() + " node爬虫", link: "/views/backend/node-crawl" },
          { text: getIcon() + " node+tensorflow", link: "/views/backend/node-tensorflow" },
          { text: getIcon() + " Midway", link: "/views/backend/midway" },
          {
            text: "📁nestjs", items: [
              { text: getIcon() + "nestjs实战", link: "/views/backend/nestjs/nestjs-practise" },
              { text: getIcon() + "微信支付", link: "/views/backend/nestjs/nestjs-wxpay" }
            ]
          },
          { text: getIcon() + " 任务队列", link: "/views/backend/task-manager" },
          { text: getIcon() + " pnpm使用", link: "/views/backend/pnpm" },
        ],
      },
    ],
  },
  {
    items: [
      {
        text: "📁客户端",
        collapsed: true,
        items: [
          { text: getIcon() + " Election", link: "/views/application/electron" },
          { text: getIcon() + " Election-rebuild", link: "/views/application/electron-rebuild" },
          { text: getIcon() + " Election-sqlite", link: "/views/application/electron-sqlite" },
          { text: getIcon() + " node与动态连接库", link: "/views/application/node-cpp" },
          { text: getIcon() + " VScodeExtension", link: "/views/application/your-first-extension" },
          { text: getIcon() + " VScode调试应用", link: "/views/application/vscode-debug" },
          {
            text: "📁Rust",
            items: [
              { text: getIcon() + " Rust基础", link: "/views/application/rust/rust-base" },
              { text: getIcon() + " Rust动态链接库", link: "/views/application/rust/rust-lib" },
              { text: getIcon() + " Rust扩展node插件", link: "/views/application/rust/rust-node" },
              { text: getIcon() + " Rust开发wasm", link: "/views/application/rust/rust-wasm" },
            ],
          },
        ],
      },
    ],
  },
  {
    items: [
      {
        text: "📁技术栈",
        collapsed: true,
        items: [
          { text: getIcon() + " mac使用", link: "/views/techStack/mac" },
          { text: getIcon() + " git操作", link: "/views/techStack/git" },
          { text: getIcon() + " navicat使用（mac版本）", link: "/views/techStack/navicat" },
          { text: getIcon() + " docker使用", link: "/views/techStack/docker" },
          { text: getIcon() + " bat命令", link: "/views/techStack/bat" },
          { text: getIcon() + " linux使用", link: "/views/techStack/linux" },
          { text: getIcon() + " nginx使用", link: "/views/techStack/nginx" },
          { text: getIcon() + " 位运算", link: "/views/techStack/bit-operate" },
          { text: getIcon() + " vim操作", link: "/views/techStack/vim-operate" },
          { text: getIcon() + " methodPlug", link: "/views/techStack/method-plug" },
          { text: getIcon() + " 日常杂记", link: "/views/techStack/dailyNote" },
          
        ],
      },
    ],
  },
]
