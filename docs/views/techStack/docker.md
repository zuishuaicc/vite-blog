---
outline: deep
---

## docker 安装(Rocky Linux)

1. 更新软件包

```bash
sudo dnf check-update

```

2. 添加官方 docker 仓库

```bash
sudo dnf config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
```

_虽然 Docker 没有专门的 Rocky Linux 仓库，但 Rocky Linux 是基于 CentOS 的，可以使用相同的仓库。添加好仓库后，安装 Docker，它由三个软件包组成。_

3. 安装 docker 镜像

```bash
sudo dnf install docker-ce docker-ce-cli containerd.io
```

4. 启动 docker 守护程序

```bash
sudo systemctl start docker
```

5. 添加服务重启自动启动 docker

```bash
sudo systemctl enable docker
```

## docker compose 安装

1. 创建插件目录：

```bash
mkdir -p ~/.docker/cli-plugins/
```

2. 下载 Docker Compose V2 二进制文件：

```bash
curl -SL https://github.com/docker/compose/releases/download/v2.1.1/docker-compose-linux-x86_64 -o ~/.docker/cli-plugins/docker-compose
```

_请注意，v2.1.1 是版本号，你可以到 Docker Compose 发布页面 查看最新版本，并替换下载链接中的版本号。_

3. 设置可执行权限：

```bash
chmod +x ~/.docker/cli-plugins/docker-compose
```

4. 验证 docker compose 版本

```bash
docker compose version
```
5. 启动docker compose
```bash
docker compose up --build -d
```
6. 关闭docker compose 并销毁容器
```bash
docker compose down
```
## Docker Hub 镜像源

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

4. 重启 docker

```bash
sudo systemctl restart docker
```

## docker 操作命令

```bash
docker container run 创建并运行容器
docker container ps -a 查看运行容器状态
docker rm 容器id或者容器name 清除指定容器
docker image rm 镜像名字 =====删除指定镜像
docker container exec -it 容器id sh（sh命令行） ====exit（退出）进入容器内部和退出容器
docker pull 要下载的镜像
docker run 运行镜像成容器
docker build -t 镜像名字:版本 . ====打包镜像
docker tag 旧镜像名字：旧版本号 新镜像名字：新版本号 ====更改镜像名字

Mysql 镜像启动：docker run --name cc-mysql -p 33060:3306 -e MYSQL_ROOT_PASSWORD=123456 -d mysql
Redis 镜像启动：docker run --name cc-redis -p 6379:6379 -d redis --requirepass "123456"
```

## mysql 镜像启动

```bash
docker run --name cc-mysql -p 33060:3306 -e MYSQL_ROOT_PASSWORD=123456 -d mysql
```

## redis 镜像启动

```bash
docker run -itd --name cc-redis -p 6379:6379 redis
```
