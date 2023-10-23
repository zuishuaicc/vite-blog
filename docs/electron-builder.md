```js
 // 使用electron-builder打包需要配置"build"
 "build": {
      "productName":"xxxx",   // 项目名称
      "appId": "electron.app",  // 安装包名称
      "directories": { 			
        "output": "build"
      }, // 输出文件夹
      "copyright":"xxxx", // 版权信息
      "nsis": {	//nsis相关配置，打包方式为nsis时生效
        "oneClick": false, 				// 是否一键安装
        "allowElevation": true, 			// 允许请求提升，如果为false，则用户必须使用提升的权限重新启动安装程序。
        "allowToChangeInstallationDirectory": true, 	// 允许修改安装目录
        "installerIcon": "./build/icons/aaa.ico",	// 安装图标
        "uninstallerIcon": "./build/icons/bbb.ico",	// 卸载图标
        "installerHeaderIcon": "./build/icons/aaa.ico", // 安装时头部图标
        "createDesktopShortcut": true, 			// 创建桌面图标
        "createStartMenuShortcut": true,		// 创建开始菜单图标
        "shortcutName": "xxxx", 			// 图标名称
        "include": "build/script/installer.nsh", 	// 包含的自定义nsis脚本
      },
      // 发布到github
      publish: {
        provider: 'github',
        repo: 'xxxx', // git仓库
        owner: 'xxxx', // 拥有者
        token: 'xxxxxxxxxxxxxxx', // gitToken
        releaseType: 'release',
        publishAutoUpdate: true // 发布自动更新（需要配置GH_TOKEN）。 默认true
      },
      //配置windows环境
      "win": {
        "icon": "build/icons/aims.ico",
        "target": ["nsis","zip"]
      },
      //配置mac环境
      "mac": {
        "target": ["dmg","zip"]
      },
      //配置linux环境
      "linux": {
        "icon": "build/icons"
      }
  }

```