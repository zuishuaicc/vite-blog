import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "日常博客",
  description: "write daily note",
  base: '/vite-blog/',
  head: [
    // 添加图标
    ['link', { rel: 'icon', href: './future.png' }]
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
          {text:'mac使用',link:'/mac'},
          {text:'docker使用',link:'/docker'},
          {text:'navicat使用（mac版本）',link:'/navicat'},
          {text:'bat命令',link:'/bat'},
          {text:'electron-builder配置',link:'/electron-builder'},
          {text:'linux使用',link:'/linux'},
          {text:'chrome-extension',link:'/chrome-extension'},
          {text:'canvas使用',link:'/canvas'},
          {text:'js页面拖拽',link:'/drag'},
          {text:'clickoutside指令',link:'/clickoutside'},
          {text:'indexDB使用',link:'/indexDB'},
          {text:'word前端导出',link:'/word'},
          {text:'excel前端导出',link:'/excel'},
          {text:'ant-design-vue可变列宽表格',link:'/vue-drag'},
          {text:'文件分片上传',link:'/file-slice'},
          {text:'vue-to-pdf使用',link:'/vue-to-pdf'},
          {text:'微信小程序中使用formdata',link:'/wx-formdata'},
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
