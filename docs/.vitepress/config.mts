import { defineConfig } from 'vitepress'
import {sidebar} from './slidebar'

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
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '使用样例', link: '/markdown-examples' },
      {text:'常用算法',link:'/algorithms'}
    ],
    sidebar:sidebar,
    search: {
      provider: 'algolia',
      options: {
        appId: 'XVMUZ4Z9UJ',
        apiKey: 'f1dc8ba702a233b6fdcdb36820fcbd93',
        indexName: 'zuishuaicc-gitee'
      }
      // provider: 'local',
      // options: {
      //   locales: {
      //     zh: {
      //       translations: {
      //         button: {
      //           buttonText: '搜索文档',
      //           buttonAriaLabel: '搜索文档'
      //         },
      //         modal: {
      //           noResultsText: '无法找到相关结果',
      //           resetButtonTitle: '清除查询条件',
      //           footer: {
      //             selectText: '选择',
      //             navigateText: '切换'
      //           }
      //         }
      //       }
      //     }
      //   }
      // }
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  markdown: {
    lineNumbers: true
  }
})
