---
outline: deep
---

# 修复 electron 使用 node 软件

有些在 node 环境下运行的包，无法直接在 electron 环境下运行，需要使用工具重新编译一下

## 1. 下载编译依赖

```bash
npm install --save-dev @electron/rebuild
```

## 2. 执行编译

直接命令行运行

```bash
npx electron-rebuild
```

或者配置成 script 脚本运行

```json
"scripts": {
  "rebuild": "electron-rebuild"
}
```
