export const sidebar = [
  {
    text: '使用样例',
    items: [
      { text: 'Markdown Examples', link: '/markdown-examples' },
      { text: 'Runtime API Examples', link: '/api-examples' },
    ]
  },
  {
    items: [
      {
        text: '前端',
        collapsed: true,
        items: [
          {text:'🥨 常用算法',link:'/views/front/algorithms'},
          {text:'🥯 样式合集',link:'/views/front/styleCollection'},
          {text:'🥞 css画悬浮球',link:'/views/front/css-ball'},
          {text:'🧇 vite.config配置',link:'/views/front/viteConfig'},
          {text:'🥓 electron-builder配置',link:'/views/front/electron-builder'},
          {text:'🍟 chrome-extension',link:'/views/front/chrome-extension'},
          {text:'🍕 canvas使用',link:'/views/front/canvas'},
          {text:'🌭 js页面拖拽',link:'/views/front/drag'},
          {text:'🥪 clickoutside指令',link:'/views/front/clickoutside'},
          {text:'🌮 indexDB使用',link:'/views/front/indexDB'},
          {text:'🌯 word操作',link:'/views/front/word'},
          {text:'🥙 excel前端导出',link:'/views/front/excel'},
          {text:'🍎 ant-design-vue可变列宽表格',link:'/views/front/vue-drag'},
          {text:'🍌 文件分片上传',link:'/views/front/file-slice'},
          {text:'🍇 vue-to-pdf使用',link:'/views/front/vue-to-pdf'},
          {text:'🍊 微信小程序中使用formdata',link:'/views/front/wx-formdata'},
        ]
      }
    ]
  },
  {
    items: [
      {
        text: '技术栈',
        collapsed: true,
        items: [
          {text:'🧀 mac使用',link:'/views/techStack/mac'},
          {text: '🍗 navicat使用（mac版本）', link:'/views/techStack/navicat' },
          {text:'🍖 docker使用',link:'/views/techStack/docker'},
          {text:'🥩 bat命令',link:'/views/techStack/bat'},
          {text:'🍔 linux使用',link:'/views/techStack/linux'},
          {text:'🍍 日常杂记',link:'/views/techStack/dailyNote'},
          {text:'🍓 methodPlug',link:'/views/techStack/method-plug'},
         
        ]
      }
    ]
  }
  
]