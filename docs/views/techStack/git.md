## outline: deep

# git 常规操作

## mac 上 git branch 命令执行后，q 退出后无法查看分支

解决方案:

```bash
git config --global pager.branch false
```

**作用: 关闭 git 使用默认的 less 分页器**
