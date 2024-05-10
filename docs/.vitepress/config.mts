import { defineConfig } from "vitepress"
import { sidebar } from "./slidebar.mts"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "cc的学习历程",
  description: "write daily note",
  // base: "/vite-blog/",//github pages使用custom domain时，不需要仓库名
  head: [
    // 添加图标
    ["link", { rel: "icon", href: "./future.png" }],
  ],
  themeConfig: {
    logo: "/future.png",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "主页", link: "/" },
      { text: "使用样例", link: "/markdown-examples" },
      { text: "常用算法", link: "/views/frontend/algorithms" },
      {
        text: "其他博客",
        items: [
          { text: "全栈工具", link: "https://tools.qzxdp.cn/" },
          { text: "全栈教程", link: "https://tut.qzxdp.cn/typescript/" },
        ],
      },
    ],
    sidebar: sidebar,
    search: {
      provider: "algolia",
      options: {
        appId: "XVMUZ4Z9UJ",
        apiKey: "f1dc8ba702a233b6fdcdb36820fcbd93",
        indexName: "zuishuaicc-gitee",
        locales: {
          root: {
            placeholder: "搜索文档",
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                searchBox: {
                  resetButtonTitle: "清除查询条件",
                  resetButtonAriaLabel: "清除查询条件",
                  cancelButtonText: "取消",
                  cancelButtonAriaLabel: "取消",
                },
                startScreen: {
                  recentSearchesTitle: "搜索历史",
                  noRecentSearchesText: "没有搜索历史",
                  saveRecentSearchButtonTitle: "保存至搜索历史",
                  removeRecentSearchButtonTitle: "从搜索历史中移除",
                  favoriteSearchesTitle: "收藏",
                  removeFavoriteSearchButtonTitle: "从收藏中移除",
                },
                errorScreen: {
                  titleText: "无法获取结果",
                  helpText: "你可能需要检查你的网络连接",
                },
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                  closeText: "关闭",
                  searchByText: "搜索提供者",
                },
                noResultsScreen: {
                  noResultsText: "无法找到相关结果",
                  suggestedQueryText: "你可以尝试查询",
                  reportMissingResultsText: "你认为该查询应该有结果？",
                  reportMissingResultsLinkText: "点击反馈",
                },
              },
            },
          },
        },
      },
    },
    outlineTitle: "本页目录",
    darkModeSwitchLabel: "切换主题",
    sidebarMenuLabel: "菜单",
    returnToTopLabel: "回到顶部",
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/zuishuaicc/vite-blog" },
      {
        icon: {
          svg: '<svg height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#c71d23" r="16"/><path d="m24.0987698 14.2225144h-9.0863697c-.4362899.000207-.7900048.3538292-.790326.7901191l-.0005173 1.9752185c-.0003277.4363707.353328.7902117.7896987.790326.0000712 0 .0001424 0 .0002135-.0002135l5.5317648-.0000461c.4363708-.0000102.7901221.3537352.7901257.790106 0 .0000022 0 .0000044-.0000066.0000066v.1975077.1975318c0 1.3091122-1.0612451 2.3703573-2.3703573 2.3703573h-7.5067195c-.4363081-.0000218-.790009-.353713-.7900429-.7900211l-.0002069-7.5059917c-.0001014-1.3091122 1.0611145-2.3703865 2.3702267-2.3704226.0000217 0 .0000435 0 .0000653.0000653h11.0602463c.4361793-.0004902.7898484-.35394.7906091-.79011894l.0012251-1.97521881c.0007606-.43637034-.3527683-.79033806-.7891389-.79060871-.0001634-.0000001-.0003268-.00000015-.0004901.00048976h-11.0617654c-3.27278051 0-5.92589329 2.65311278-5.92589329 5.9258933v11.0612755c0 .4363707.35374837.7901191.7901191.7901191h11.65447149c2.9454379 0 5.3331872-2.3877493 5.3331872-5.3331872v-4.5430682c0-.4363707-.3537484-.7901191-.7901191-.7901191z" fill="#fff"/></g></svg>',
        },
        link: "https://gitee.com/zuishuaicc/vite-blog",
      },
    ],
    footer: {
      message: "努力成为全干型人才",
      copyright: "Copyright © 2023-present zuishuaicc",
    },
  },
  markdown: {
    // theme: 'material-theme-palenight',
    theme: {
      light: "material-theme-palenight",
      dark: "material-theme-palenight",
    },
    lineNumbers: true,
  },
  lastUpdated: true,
})
