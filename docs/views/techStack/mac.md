---
outline: deep
---

## 赋予sh脚本执行权限
```bash
chmod +x <脚本路径>
```
## 清除一个app文件的所有扩展属性（用于解决网上下载的app无法执行）
```bash
xattr -r -d com.apple.quarantine +目录路径
```

## 删除目录下.DS_Store文件
```bash
find . -name ".DS_Store" -delete
```
## 禁止生成 .DS_store 文件
macOS可以通过命令行修改系统配置，让系统不再在文件夹中生成这个配置文件，命令如下：
```bash
defaults write com.apple.desktopservices DSDontWriteNetworkStores true
```