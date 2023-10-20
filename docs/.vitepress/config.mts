import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "日常博客",
  description: "write daily note",
  base: '/vite-blog/',
  head: [
    // 添加图标
    ['link', { rel: 'icon', href: '/future.png' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '文档内容', link: '/markdown-examples' },
      {text:'常用算法',link:'/algorithms'}
    ],

    sidebar: [
      {
        text: '文档内容',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          {text:'常用算法',link:'/algorithms'},
          {text:'样式合集',link:'/styleCollection'},
          {text:'vite.config配置',link:'/viteConfig'},
          {text:'日常杂记',link:'/dailyNote'},
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  markdown: {
    lineNumbers: true
  }
})
