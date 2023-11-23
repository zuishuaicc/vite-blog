const fruites=['🥨' ,'🥯' ,'🥞' ,'🧇' ,'🥓' ,'🍟' ,'🍕' ,'🌭' ,'🥪' ,'🌮' ,'🌯' ,'🥙' ,'🍎' ,'🍌' ,'🍇' ,'🍊','🍓','🍍','🍑','🍒','🍉','🍋','🥝','🍈','🥭','🍐','🍅','🍆', '🥑','🍿', '🧈','🧂','🥫',	'🍱','🍘','🍙','🍚','🍛','🍜','🧆','🥚','🍳','🥘','🍠','🌶️','🧄','🧅','🍄','🥜','🌰','🍞','🥐','🥖','🥥','🥦','🌽','🥕']
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
          {text:fruites[0]+' 常用算法',link:'/views/frontend/algorithms'},
          {text:fruites[1]+' 样式合集',link:'/views/frontend/styleCollection'},
          {text:fruites[2]+' css画悬浮球',link:'/views/frontend/css-ball'},
          {text:fruites[3]+' vite.config配置',link:'/views/frontend/viteConfig'},
          {text:fruites[4]+' electron-builder配置',link:'/views/frontend/electron-builder'},
          {text:fruites[5]+' chrome-extension',link:'/views/frontend/chrome-extension'},
          {text:fruites[6]+' canvas使用',link:'/views/frontend/canvas'},
          {text:fruites[7]+' js页面拖拽',link:'/views/frontend/drag'},
          {text:fruites[8]+' clickoutside指令',link:'/views/frontend/clickoutside'},
          {text:fruites[9]+' indexDB使用',link:'/views/frontend/indexDB'},
          {text:fruites[10]+' word前端操作',link:'/views/frontend/word'},
          {text:fruites[11]+' excel前端操作',link:'/views/frontend/excel'},
          {text:fruites[12]+' ant-design-vue可变列宽表格',link:'/views/frontend/vue-drag'},
          {text:fruites[13]+' 文件分片上传',link:'/views/frontend/file-slice'},
          {text:fruites[14]+' vue-to-pdf使用',link:'/views/frontend/vue-to-pdf'},
          {text:fruites[15]+' 微信小程序中使用formdata',link:'/views/frontend/wx-formdata'},
          {text:fruites[26]+' 人脸识别',link:'/views/frontend/face-api'},
          {text:fruites[30]+' vite搭建React+ts',link:'/views/frontend/react'},
        ]
      }
    ]
  },
  {
    items: [
      {
        text: '服务端',
        collapsed: true,
        items: [
          {text:fruites[16]+' node中操作word',link:'/views/backend/node-word'},
          {text:fruites[17]+' 三方登录表结构',link:'/views/backend/third-table'},
          {text:fruites[27]+' node中使用子进程',link:'/views/backend/node-child_process'},
          {text:fruites[28]+' node爬虫',link:'/views/backend/node-crawl'},
          {text:fruites[29]+' Midway',link:'/views/backend/midway'},
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
          {text:fruites[18]+' mac使用',link:'/views/techStack/mac'},
          {text:fruites[19]+' navicat使用（mac版本）', link:'/views/techStack/navicat' },
          {text:fruites[20]+' docker使用',link:'/views/techStack/docker'},
          {text:fruites[21]+' bat命令',link:'/views/techStack/bat'},
          {text:fruites[22]+' linux使用',link:'/views/techStack/linux'},
          {text:fruites[23]+' nginx使用',link:'/views/techStack/nginx'},
          {text:fruites[24]+' 日常杂记',link:'/views/techStack/dailyNote'},
          {text:fruites[25]+' methodPlug',link:'/views/techStack/method-plug'},
         
        ]
      }
    ]
  }
]