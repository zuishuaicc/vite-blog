import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "日常博客",
  description: "write daily note",
  head: [
    // 添加图标
    ['link', { rel: 'icon', href: '/future.png' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      {text:'常用算法',link:'/algorithms.md'}
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          {text:'常用算法',link:'/algorithms.md'},
          {text:'样式合集',link:'/styleCollection.md'},
          {text:'vite.config配置',link:'/viteConfig.md'},
          {text:'日常杂记',link:'/dailyNote.md'},
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
