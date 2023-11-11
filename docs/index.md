---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "日常博客"
  text: "记录心路历程"
  tagline: do everything you love to do
  image:
    src: /logo.png
    alt: future
  actions:
    # - theme: brand
    #   text: Markdown Examples
    #   link: /markdown-examples
    # - theme: alt
    #   text: API Examples
    #   link: /api-examples
    - theme: brand
      text: 开始阅读
      link: /views/frontend/algorithms.md

features:
  - title:  Mac使用
    icon:
      src: /home/icon_mac.svg
    details: 让你对你的mac更加了解
    link: /views/techStack/mac
  - title: Docker使用
    icon:
      src: /home/icon_docker.svg 
    details: 打造一致的运行环境，Docker让部署应用变得轻松无比。
    link: /views/techStack/docker
  - title: Linux使用
    icon:
      src: /home/icon_linux.svg
    details: 一种自由和开放源代码的类 Unix 操作系统，广泛应用于各种计算机硬件平台。
    link: /views/techStack/linux
---