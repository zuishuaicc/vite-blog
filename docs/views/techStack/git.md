## outline: deep

# git 常规操作

## mac 上 git branch 命令执行后，q 退出后无法查看分支

解决方案:

```bash
git config --global pager.branch false
```

**作用: 关闭 git 使用默认的 less 分页器**

## vscode查看git

vscode中使用git lens查看git提交记录
**破解git lens pro方法**

1. 打开扩展文件文件`/Users/chenchen/.vscode/extensions/eamodio.gitlens-x.x.x/dist/webviews/graph.js`
2. 搜索`this.graphState.allowed`找到如下位置后，把其中的`1`改为`0`,保存重启
   ```ts 6
   .featurePreview=${this.graphState.featurePreview}
   		featurePreviewCommandLink=${(this.graphState.featurePreview?dQ("gitlens.plus.continueFeaturePreview",{feature:this.graphState.featurePreview.feature}):void 0)??eR}
   		appearance="alert"
   		featureRestriction="private-repos"
   		featureWithArticleIfNeeded="the Commit Graph"
   	?hidden=${!1!==this.graphState.allowed}
   		.source=${{source:"graph",detail:"gate"}}
   		.state=${this.graphState.subscription?.state}
   		.webroot=${this.graphState.webroot}
   ```
