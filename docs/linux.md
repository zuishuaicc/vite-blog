# 防火墙指令
```bash
firewall-cmd --add-port=1935/tcp --permanent #开放端口
firewall-cmd --list-all #查看已开放的端口
firewall-cmd --permanent --remove-port 3306/tcp #关闭端口
firewall-cmd --reload #防火墙重启
firewall-cmd --query-port=80/tcp #查看指定端口是否开放
systemctl start firewalld #重启防火墙
```
# 文件操作指令
```bash
ll #查看所有前端包记录
rm -rf dist #删除当前包
unzip -q dist.zip #解压dist
mv 初始文件名 改后文件名 #重命名文件
touch #创建文件
cp #复制
```
# mongodb 操作
```bash
mongod -f mongodb.cfg --fork 开启
mongod -f mongodb.cfg --shutdown 关闭
```
# mongodb配置文件
```yml
dbpath=/usr/local/src/mongodb/data
logpath=/usr/local/src/mongodb/logs/mongodb.log
bind_ip=0.0.0.0
port=27017
logappend=true
fork=true
maxConns=5000
auth=true
```
# nginx配置文件
```yml
#user  nobody;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;
#pid        logs/nginx.pid;
events {
    worker_connections  1024;
}
http {
    include       mime.types;
    default_type  application/octet-stream;

    #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';
    #access_log  logs/access.log  main;
    sendfile        on;
    #tcp_nopush     on;
    #keepalive_timeout  0;
    keepalive_timeout  65;
    error_log /usr/local/nginx/nginx-error.log error;
    #gzip  on;
    server {
        listen       3000;
        server_name  192.168.248.130;
        #charset koi8-r;
        #access_log  logs/host.access.log  main;
        location / {
            root   /usr/local/src/dist;
            index  index.html index.htm;
            try_files  $uri $uri/  /index.html;
        }
        location /api/{
            proxy_pass http://192.168.248.130:8000/api/;
            proxy_set_header Host &host;
        }
        location /uploads/{
            proxy_pass http://192.168.248.130:8000/uploads/;
        }
        #error_page  404              /404.html;
        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
        # proxy the PHP scripts to Apache listening on 127.0.0.1:80
        #
        #location ~ \.php$ {
        #    proxy_pass   http://127.0.0.1;
        #}
        # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
        #
        #location ~ \.php$ {
        #    root           html;
        #    fastcgi_pass   127.0.0.1:9000;
        #    fastcgi_index  index.php;
        #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
        #    include        fastcgi_params;
        #}
        # deny access to .htaccess files, if Apache's document root
        # concurs with nginx's one
        #
        #location ~ /\.ht {
        #    deny  all;
        #}
    }
    # another virtual host using mix of IP-, name-, and port-based configuration
    #
    #server {
    #    listen       8000;
    #    listen       somename:8080;
    #    server_name  somename  alias  another.alias;
    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}
    # HTTPS server
    #
    #server {
    #    listen       443 ssl;
    #    server_name  localhost;
    #    ssl_certificate      cert.pem;
    #    ssl_certificate_key  cert.key;
    #    ssl_session_cache    shared:SSL:1m;
    #    ssl_session_timeout  5m;
    #    ssl_ciphers  HIGH:!aNULL:!MD5;
    #    ssl_prefer_server_ciphers  on;
    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}
}
```
# nginx操作指令
```bash
nginx:启动
nginx -s reload #重启
nginx -s stop #停止服务
ps -ef | grep nginx #查看过滤nginx运行状态
```