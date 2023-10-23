---
outline: deep
---

```bat
::           --是批处理文件中一种注释语句的方式;

@REM         --表示在回显状态开启时也不显示该注释行,运行BAT时就会自动忽略这个句子;
@echo off    --执行以后，后面所有的命令均不显示，包括本条命令;
echo off    --执行以后，后面所有的命令均不显示，但本条命令是显示的;
echo         --输出语句，相当于system.out.println();
pause        --作用是使程序暂停，也就是输出“请按任意键继续…”的原因;
```
## 启动mongodb
```bat
::启动mongodb的命令
@echo off
echo mongodb start......
title mongodb-server
set ENV_HOME="D:MongoDB\bin"
color 0a
cd %ENV_HOME%
mongod.exe --auth --dbpath=d:/MongoDB/data/db
```
## 启动redis
```bat
::启动redis的命令
@echo off
::打印日志
echo redis start......
::窗口标题
title redis-server
::设置cd路径
set ENV_HOME="D:Redis"
::设置字体颜色
color 0a
::cd进入路径
cd %ENV_HOME%
::需要启动的程序名字 后接配置
redis-server.exe
redis.windows.yml
```