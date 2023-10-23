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

