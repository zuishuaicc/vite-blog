#!/usr/bin/env bash

# 忽略错误
set -e

# 构建
npm run docs:build

# 进入待发布的目录
# cd docs/.vitepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git add -A
git commit -m 'deploy-vite-blog'

# 如果部署到 https://<USERNAME>.github.io
git push -f git@gitee.com:zuishuaicc/vite-blog.git master:master
git push -f git@github.com:zuishuaicc/vite-blog.git master:master