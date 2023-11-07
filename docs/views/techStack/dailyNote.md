---
outline: deep
---

## vscode下载CDN

**/stable地址之前的地址换为如下内容**：

[vscode.cdn.azure.cn](https://link.zhihu.com/?target=http%3A//vscode.cdn.azure.cn/) <--------就是左边这个

## 处理npm包依赖冲突

```
npm install xxxx --legacy-peer-deps
```


## vitepress中文官网
https://vitejs.cn/vitepress/  
https://vitepress.qzxdp.cn/guide/what-is-vitepress.html

## ts定义种少包含一种类型(工具类型)
```ts
type AtleastOne<T,U> = {[k in keyof T]: Pick<T, K>}=Partial<T>&U[keyof U]
```
![图片](../../assets/images/atleast.png)