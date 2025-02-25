---
outline: deep
---

## docker 安装
```bash
docker container run 创建并运行容器
docker container ps -a 查看运行容器状态
docker rm 容器id或者容器name 清除指定容器
docker image rm 镜像名字 =====删除指定镜像
docker container exec -it 容器id sh（sh命令行） ====exit（退出）进入容器内部和退出容器
docker pull 要下载的镜像
docker run 运行镜像成容器
docker build -t 镜像名字:版本 . ====打包镜像名字
docker tag 旧镜像名字：旧版本号 新镜像名字：新版本号 ====更改镜像名字

Mysql 镜像启动：docker run --name cc-mysql -p 33060:3306 -e MYSQL_ROOT_PASSWORD=123456 -d mysql 
Redis 镜像启动：docker run --name cc-redis -p 6379:6379 -d redis --requirepass "123456" 
```
## mysql镜像启动
```bash
docker run --name cc-mysql -p 33060:3306 -e MYSQL_ROOT_PASSWORD=123456 -d mysql
```
## redis镜像启动
```bash
docker run -itd --name cc-redis -p 6379:6379 redis
```
## Docker Hub镜像源
1. 打开配置文件
```bash
sudo vim /etc/docker/daemon.json
```
2. 写入配置
```bash
{
    "registry-mirrors": [
        "https://docker.m.daocloud.io",
        "https://dockerproxy.com",
        "https://docker.mirrors.ustc.edu.cn",
        "https://docker.nju.edu.cn",
        "https://iju9kaj2.mirror.aliyuncs.com",
        "http://hub-mirror.c.163.com",
        "https://cr.console.aliyun.com",
        "https://hub.docker.com",
        "http://mirrors.ustc.edu.cn"
    ]
}
```
3. 重新加载配置文件
```bash
sudo systemctl daemon-reload
```
4. 重启docker
```bash
sudo systemctl restart docker
```