import { defineConfig } from 'vitepress'
import {sidebar} from './slidebar.mts'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "zuishauicc的学习历程",
  description: "write daily note",
  base: '/vite-blog/',
  head: [
    // 添加图标
    ['link', { rel: 'icon', href: './future.png' }]
  ],
  themeConfig: {
    logo: '/future.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '使用样例', link: '/markdown-examples' },
      { text: '常用算法', link: '/views/frontend/algorithms' }
    ],
    sidebar: sidebar,
    search: {
      provider: 'algolia',
      options: {
        appId: 'XVMUZ4Z9UJ',
        apiKey: 'f1dc8ba702a233b6fdcdb36820fcbd93',
        indexName: 'zuishuaicc-gitee',
        locales: {
          root: {
            placeholder: '搜索文档',
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                searchBox: {
                  resetButtonTitle: '清除查询条件',
                  resetButtonAriaLabel: '清除查询条件',
                  cancelButtonText: '取消',
                  cancelButtonAriaLabel: '取消'
                },
                startScreen: {
                  recentSearchesTitle: '搜索历史',
                  noRecentSearchesText: '没有搜索历史',
                  saveRecentSearchButtonTitle: '保存至搜索历史',
                  removeRecentSearchButtonTitle: '从搜索历史中移除',
                  favoriteSearchesTitle: '收藏',
                  removeFavoriteSearchButtonTitle: '从收藏中移除'
                },
                errorScreen: {
                  titleText: '无法获取结果',
                  helpText: '你可能需要检查你的网络连接'
                },
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                  searchByText: '搜索提供者'
                },
                noResultsScreen: {
                  noResultsText: '无法找到相关结果',
                  suggestedQueryText: '你可以尝试查询',
                  reportMissingResultsText: '你认为该查询应该有结果？',
                  reportMissingResultsLinkText: '点击反馈'
                }
              }
            }
          }
        }
      }
    },
    outlineTitle: '本页目录',
    darkModeSwitchLabel: '切换主题',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    socialLinks: [
      { icon: 'github', link: 'https://gitee.com/zuishuaicc/vite-blog' }
    ],
    footer: {
      message: '努力成为全干型人才',
      copyright: '@copyright 2023',
    }
  },
  markdown: {
    // theme: 'material-theme-palenight',
    theme: {
      light: "material-theme-palenight",
      dark: "material-theme-palenight",
    },
    lineNumbers: true
  },
  lastUpdated:true
})
