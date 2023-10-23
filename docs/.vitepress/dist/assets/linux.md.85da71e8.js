import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.808cf4e8.js";const d=JSON.parse('{"title":"防火墙指令","description":"","frontmatter":{},"headers":[],"relativePath":"linux.md","filePath":"linux.md"}'),e={name:"linux.md"},p=l(`<h1 id="防火墙指令" tabindex="-1">防火墙指令 <a class="header-anchor" href="#防火墙指令" aria-label="Permalink to &quot;防火墙指令&quot;">​</a></h1><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">firewall-cmd</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--add-port=1935/tcp</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--permanent</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">#开放端口</span></span>
<span class="line"><span style="color:#B392F0;">firewall-cmd</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--list-all</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">#查看已开放的端口</span></span>
<span class="line"><span style="color:#B392F0;">firewall-cmd</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--permanent</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--remove-port</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3306</span><span style="color:#9ECBFF;">/tcp</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">#关闭端口</span></span>
<span class="line"><span style="color:#B392F0;">firewall-cmd</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--reload</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">#防火墙重启</span></span>
<span class="line"><span style="color:#B392F0;">firewall-cmd</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--query-port=80/tcp</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">#查看指定端口是否开放</span></span>
<span class="line"><span style="color:#B392F0;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">firewalld</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">#重启防火墙</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">firewall-cmd</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--add-port=1935/tcp</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--permanent</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">#开放端口</span></span>
<span class="line"><span style="color:#6F42C1;">firewall-cmd</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--list-all</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">#查看已开放的端口</span></span>
<span class="line"><span style="color:#6F42C1;">firewall-cmd</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--permanent</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--remove-port</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3306</span><span style="color:#032F62;">/tcp</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">#关闭端口</span></span>
<span class="line"><span style="color:#6F42C1;">firewall-cmd</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--reload</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">#防火墙重启</span></span>
<span class="line"><span style="color:#6F42C1;">firewall-cmd</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--query-port=80/tcp</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">#查看指定端口是否开放</span></span>
<span class="line"><span style="color:#6F42C1;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span><span style="color:#032F62;">firewalld</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">#重启防火墙</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h1 id="文件操作指令" tabindex="-1">文件操作指令 <a class="header-anchor" href="#文件操作指令" aria-label="Permalink to &quot;文件操作指令&quot;">​</a></h1><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">ll</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">#查看所有前端包记录</span></span>
<span class="line"><span style="color:#B392F0;">rm</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-rf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dist</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">#删除当前包</span></span>
<span class="line"><span style="color:#B392F0;">unzip</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-q</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dist.zip</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">#解压dist</span></span>
<span class="line"><span style="color:#B392F0;">mv</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">初始文件名</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">改后文件名</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">#重命名文件</span></span>
<span class="line"><span style="color:#B392F0;">touch</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">#创建文件</span></span>
<span class="line"><span style="color:#B392F0;">cp</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">#复制</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">ll</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">#查看所有前端包记录</span></span>
<span class="line"><span style="color:#6F42C1;">rm</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-rf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dist</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">#删除当前包</span></span>
<span class="line"><span style="color:#6F42C1;">unzip</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-q</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dist.zip</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">#解压dist</span></span>
<span class="line"><span style="color:#6F42C1;">mv</span><span style="color:#24292E;"> </span><span style="color:#032F62;">初始文件名</span><span style="color:#24292E;"> </span><span style="color:#032F62;">改后文件名</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">#重命名文件</span></span>
<span class="line"><span style="color:#6F42C1;">touch</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">#创建文件</span></span>
<span class="line"><span style="color:#6F42C1;">cp</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">#复制</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h1 id="mongodb-操作" tabindex="-1">mongodb 操作 <a class="header-anchor" href="#mongodb-操作" aria-label="Permalink to &quot;mongodb 操作&quot;">​</a></h1><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">mongod</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-f</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mongodb.cfg</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--fork</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">开启</span></span>
<span class="line"><span style="color:#B392F0;">mongod</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-f</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mongodb.cfg</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--shutdown</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">关闭</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">mongod</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-f</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mongodb.cfg</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--fork</span><span style="color:#24292E;"> </span><span style="color:#032F62;">开启</span></span>
<span class="line"><span style="color:#6F42C1;">mongod</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-f</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mongodb.cfg</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--shutdown</span><span style="color:#24292E;"> </span><span style="color:#032F62;">关闭</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h1 id="mongodb配置文件" tabindex="-1">mongodb配置文件 <a class="header-anchor" href="#mongodb配置文件" aria-label="Permalink to &quot;mongodb配置文件&quot;">​</a></h1><div class="language-conf vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">conf</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">dbpath=/usr/local/src/mongodb/data</span></span>
<span class="line"><span style="color:#e1e4e8;">logpath=/usr/local/src/mongodb/logs/mongodb.log</span></span>
<span class="line"><span style="color:#e1e4e8;">bind_ip=0.0.0.0</span></span>
<span class="line"><span style="color:#e1e4e8;">port=27017</span></span>
<span class="line"><span style="color:#e1e4e8;">logappend=true</span></span>
<span class="line"><span style="color:#e1e4e8;">fork=true</span></span>
<span class="line"><span style="color:#e1e4e8;">maxConns=5000</span></span>
<span class="line"><span style="color:#e1e4e8;">auth=true</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">dbpath=/usr/local/src/mongodb/data</span></span>
<span class="line"><span style="color:#24292e;">logpath=/usr/local/src/mongodb/logs/mongodb.log</span></span>
<span class="line"><span style="color:#24292e;">bind_ip=0.0.0.0</span></span>
<span class="line"><span style="color:#24292e;">port=27017</span></span>
<span class="line"><span style="color:#24292e;">logappend=true</span></span>
<span class="line"><span style="color:#24292e;">fork=true</span></span>
<span class="line"><span style="color:#24292e;">maxConns=5000</span></span>
<span class="line"><span style="color:#24292e;">auth=true</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h1 id="nginx配置文件" tabindex="-1">nginx配置文件 <a class="header-anchor" href="#nginx配置文件" aria-label="Permalink to &quot;nginx配置文件&quot;">​</a></h1><div class="language-conf vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">conf</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">#user  nobody;</span></span>
<span class="line"><span style="color:#e1e4e8;">worker_processes  1;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">#error_log  logs/error.log;</span></span>
<span class="line"><span style="color:#e1e4e8;">#error_log  logs/error.log  notice;</span></span>
<span class="line"><span style="color:#e1e4e8;">#error_log  logs/error.log  info;</span></span>
<span class="line"><span style="color:#e1e4e8;">#pid        logs/nginx.pid;</span></span>
<span class="line"><span style="color:#e1e4e8;">events {</span></span>
<span class="line"><span style="color:#e1e4e8;">    worker_connections  1024;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">http {</span></span>
<span class="line"><span style="color:#e1e4e8;">    include       mime.types;</span></span>
<span class="line"><span style="color:#e1e4e8;">    default_type  application/octet-stream;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    #log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">    #                  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">    #                  &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">    #access_log  logs/access.log  main;</span></span>
<span class="line"><span style="color:#e1e4e8;">    sendfile        on;</span></span>
<span class="line"><span style="color:#e1e4e8;">    #tcp_nopush     on;</span></span>
<span class="line"><span style="color:#e1e4e8;">    #keepalive_timeout  0;</span></span>
<span class="line"><span style="color:#e1e4e8;">    keepalive_timeout  65;</span></span>
<span class="line"><span style="color:#e1e4e8;">    error_log /usr/local/nginx/nginx-error.log error;</span></span>
<span class="line"><span style="color:#e1e4e8;">    #gzip  on;</span></span>
<span class="line"><span style="color:#e1e4e8;">    server {</span></span>
<span class="line"><span style="color:#e1e4e8;">        listen       3000;</span></span>
<span class="line"><span style="color:#e1e4e8;">        server_name  192.168.248.130;</span></span>
<span class="line"><span style="color:#e1e4e8;">        #charset koi8-r;</span></span>
<span class="line"><span style="color:#e1e4e8;">        #access_log  logs/host.access.log  main;</span></span>
<span class="line"><span style="color:#e1e4e8;">        location / {</span></span>
<span class="line"><span style="color:#e1e4e8;">            root   /usr/local/src/dist;</span></span>
<span class="line"><span style="color:#e1e4e8;">            index  index.html index.htm;</span></span>
<span class="line"><span style="color:#e1e4e8;">            try_files  $uri $uri/  /index.html;</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">        location /api/{</span></span>
<span class="line"><span style="color:#e1e4e8;">            proxy_pass http://192.168.248.130:8000/api/;</span></span>
<span class="line"><span style="color:#e1e4e8;">            proxy_set_header Host &amp;host;</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">        location /uploads/{</span></span>
<span class="line"><span style="color:#e1e4e8;">            proxy_pass http://192.168.248.130:8000/uploads/;</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">        #error_page  404              /404.html;</span></span>
<span class="line"><span style="color:#e1e4e8;">        # redirect server error pages to the static page /50x.html</span></span>
<span class="line"><span style="color:#e1e4e8;">        #</span></span>
<span class="line"><span style="color:#e1e4e8;">        error_page   500 502 503 504  /50x.html;</span></span>
<span class="line"><span style="color:#e1e4e8;">        location = /50x.html {</span></span>
<span class="line"><span style="color:#e1e4e8;">            root   html;</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">        # proxy the PHP scripts to Apache listening on 127.0.0.1:80</span></span>
<span class="line"><span style="color:#e1e4e8;">        #</span></span>
<span class="line"><span style="color:#e1e4e8;">        #location ~ \\.php$ {</span></span>
<span class="line"><span style="color:#e1e4e8;">        #    proxy_pass   http://127.0.0.1;</span></span>
<span class="line"><span style="color:#e1e4e8;">        #}</span></span>
<span class="line"><span style="color:#e1e4e8;">        # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000</span></span>
<span class="line"><span style="color:#e1e4e8;">        #</span></span>
<span class="line"><span style="color:#e1e4e8;">        #location ~ \\.php$ {</span></span>
<span class="line"><span style="color:#e1e4e8;">        #    root           html;</span></span>
<span class="line"><span style="color:#e1e4e8;">        #    fastcgi_pass   127.0.0.1:9000;</span></span>
<span class="line"><span style="color:#e1e4e8;">        #    fastcgi_index  index.php;</span></span>
<span class="line"><span style="color:#e1e4e8;">        #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;</span></span>
<span class="line"><span style="color:#e1e4e8;">        #    include        fastcgi_params;</span></span>
<span class="line"><span style="color:#e1e4e8;">        #}</span></span>
<span class="line"><span style="color:#e1e4e8;">        # deny access to .htaccess files, if Apache&#39;s document root</span></span>
<span class="line"><span style="color:#e1e4e8;">        # concurs with nginx&#39;s one</span></span>
<span class="line"><span style="color:#e1e4e8;">        #</span></span>
<span class="line"><span style="color:#e1e4e8;">        #location ~ /\\.ht {</span></span>
<span class="line"><span style="color:#e1e4e8;">        #    deny  all;</span></span>
<span class="line"><span style="color:#e1e4e8;">        #}</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    # another virtual host using mix of IP-, name-, and port-based configuration</span></span>
<span class="line"><span style="color:#e1e4e8;">    #</span></span>
<span class="line"><span style="color:#e1e4e8;">    #server {</span></span>
<span class="line"><span style="color:#e1e4e8;">    #    listen       8000;</span></span>
<span class="line"><span style="color:#e1e4e8;">    #    listen       somename:8080;</span></span>
<span class="line"><span style="color:#e1e4e8;">    #    server_name  somename  alias  another.alias;</span></span>
<span class="line"><span style="color:#e1e4e8;">    #    location / {</span></span>
<span class="line"><span style="color:#e1e4e8;">    #        root   html;</span></span>
<span class="line"><span style="color:#e1e4e8;">    #        index  index.html index.htm;</span></span>
<span class="line"><span style="color:#e1e4e8;">    #    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    #}</span></span>
<span class="line"><span style="color:#e1e4e8;">    # HTTPS server</span></span>
<span class="line"><span style="color:#e1e4e8;">    #</span></span>
<span class="line"><span style="color:#e1e4e8;">    #server {</span></span>
<span class="line"><span style="color:#e1e4e8;">    #    listen       443 ssl;</span></span>
<span class="line"><span style="color:#e1e4e8;">    #    server_name  localhost;</span></span>
<span class="line"><span style="color:#e1e4e8;">    #    ssl_certificate      cert.pem;</span></span>
<span class="line"><span style="color:#e1e4e8;">    #    ssl_certificate_key  cert.key;</span></span>
<span class="line"><span style="color:#e1e4e8;">    #    ssl_session_cache    shared:SSL:1m;</span></span>
<span class="line"><span style="color:#e1e4e8;">    #    ssl_session_timeout  5m;</span></span>
<span class="line"><span style="color:#e1e4e8;">    #    ssl_ciphers  HIGH:!aNULL:!MD5;</span></span>
<span class="line"><span style="color:#e1e4e8;">    #    ssl_prefer_server_ciphers  on;</span></span>
<span class="line"><span style="color:#e1e4e8;">    #    location / {</span></span>
<span class="line"><span style="color:#e1e4e8;">    #        root   html;</span></span>
<span class="line"><span style="color:#e1e4e8;">    #        index  index.html index.htm;</span></span>
<span class="line"><span style="color:#e1e4e8;">    #    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    #}</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">#user  nobody;</span></span>
<span class="line"><span style="color:#24292e;">worker_processes  1;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">#error_log  logs/error.log;</span></span>
<span class="line"><span style="color:#24292e;">#error_log  logs/error.log  notice;</span></span>
<span class="line"><span style="color:#24292e;">#error_log  logs/error.log  info;</span></span>
<span class="line"><span style="color:#24292e;">#pid        logs/nginx.pid;</span></span>
<span class="line"><span style="color:#24292e;">events {</span></span>
<span class="line"><span style="color:#24292e;">    worker_connections  1024;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">http {</span></span>
<span class="line"><span style="color:#24292e;">    include       mime.types;</span></span>
<span class="line"><span style="color:#24292e;">    default_type  application/octet-stream;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    #log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span></span>
<span class="line"><span style="color:#24292e;">    #                  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span></span>
<span class="line"><span style="color:#24292e;">    #                  &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span></span>
<span class="line"><span style="color:#24292e;">    #access_log  logs/access.log  main;</span></span>
<span class="line"><span style="color:#24292e;">    sendfile        on;</span></span>
<span class="line"><span style="color:#24292e;">    #tcp_nopush     on;</span></span>
<span class="line"><span style="color:#24292e;">    #keepalive_timeout  0;</span></span>
<span class="line"><span style="color:#24292e;">    keepalive_timeout  65;</span></span>
<span class="line"><span style="color:#24292e;">    error_log /usr/local/nginx/nginx-error.log error;</span></span>
<span class="line"><span style="color:#24292e;">    #gzip  on;</span></span>
<span class="line"><span style="color:#24292e;">    server {</span></span>
<span class="line"><span style="color:#24292e;">        listen       3000;</span></span>
<span class="line"><span style="color:#24292e;">        server_name  192.168.248.130;</span></span>
<span class="line"><span style="color:#24292e;">        #charset koi8-r;</span></span>
<span class="line"><span style="color:#24292e;">        #access_log  logs/host.access.log  main;</span></span>
<span class="line"><span style="color:#24292e;">        location / {</span></span>
<span class="line"><span style="color:#24292e;">            root   /usr/local/src/dist;</span></span>
<span class="line"><span style="color:#24292e;">            index  index.html index.htm;</span></span>
<span class="line"><span style="color:#24292e;">            try_files  $uri $uri/  /index.html;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">        location /api/{</span></span>
<span class="line"><span style="color:#24292e;">            proxy_pass http://192.168.248.130:8000/api/;</span></span>
<span class="line"><span style="color:#24292e;">            proxy_set_header Host &amp;host;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">        location /uploads/{</span></span>
<span class="line"><span style="color:#24292e;">            proxy_pass http://192.168.248.130:8000/uploads/;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">        #error_page  404              /404.html;</span></span>
<span class="line"><span style="color:#24292e;">        # redirect server error pages to the static page /50x.html</span></span>
<span class="line"><span style="color:#24292e;">        #</span></span>
<span class="line"><span style="color:#24292e;">        error_page   500 502 503 504  /50x.html;</span></span>
<span class="line"><span style="color:#24292e;">        location = /50x.html {</span></span>
<span class="line"><span style="color:#24292e;">            root   html;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">        # proxy the PHP scripts to Apache listening on 127.0.0.1:80</span></span>
<span class="line"><span style="color:#24292e;">        #</span></span>
<span class="line"><span style="color:#24292e;">        #location ~ \\.php$ {</span></span>
<span class="line"><span style="color:#24292e;">        #    proxy_pass   http://127.0.0.1;</span></span>
<span class="line"><span style="color:#24292e;">        #}</span></span>
<span class="line"><span style="color:#24292e;">        # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000</span></span>
<span class="line"><span style="color:#24292e;">        #</span></span>
<span class="line"><span style="color:#24292e;">        #location ~ \\.php$ {</span></span>
<span class="line"><span style="color:#24292e;">        #    root           html;</span></span>
<span class="line"><span style="color:#24292e;">        #    fastcgi_pass   127.0.0.1:9000;</span></span>
<span class="line"><span style="color:#24292e;">        #    fastcgi_index  index.php;</span></span>
<span class="line"><span style="color:#24292e;">        #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;</span></span>
<span class="line"><span style="color:#24292e;">        #    include        fastcgi_params;</span></span>
<span class="line"><span style="color:#24292e;">        #}</span></span>
<span class="line"><span style="color:#24292e;">        # deny access to .htaccess files, if Apache&#39;s document root</span></span>
<span class="line"><span style="color:#24292e;">        # concurs with nginx&#39;s one</span></span>
<span class="line"><span style="color:#24292e;">        #</span></span>
<span class="line"><span style="color:#24292e;">        #location ~ /\\.ht {</span></span>
<span class="line"><span style="color:#24292e;">        #    deny  all;</span></span>
<span class="line"><span style="color:#24292e;">        #}</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    # another virtual host using mix of IP-, name-, and port-based configuration</span></span>
<span class="line"><span style="color:#24292e;">    #</span></span>
<span class="line"><span style="color:#24292e;">    #server {</span></span>
<span class="line"><span style="color:#24292e;">    #    listen       8000;</span></span>
<span class="line"><span style="color:#24292e;">    #    listen       somename:8080;</span></span>
<span class="line"><span style="color:#24292e;">    #    server_name  somename  alias  another.alias;</span></span>
<span class="line"><span style="color:#24292e;">    #    location / {</span></span>
<span class="line"><span style="color:#24292e;">    #        root   html;</span></span>
<span class="line"><span style="color:#24292e;">    #        index  index.html index.htm;</span></span>
<span class="line"><span style="color:#24292e;">    #    }</span></span>
<span class="line"><span style="color:#24292e;">    #}</span></span>
<span class="line"><span style="color:#24292e;">    # HTTPS server</span></span>
<span class="line"><span style="color:#24292e;">    #</span></span>
<span class="line"><span style="color:#24292e;">    #server {</span></span>
<span class="line"><span style="color:#24292e;">    #    listen       443 ssl;</span></span>
<span class="line"><span style="color:#24292e;">    #    server_name  localhost;</span></span>
<span class="line"><span style="color:#24292e;">    #    ssl_certificate      cert.pem;</span></span>
<span class="line"><span style="color:#24292e;">    #    ssl_certificate_key  cert.key;</span></span>
<span class="line"><span style="color:#24292e;">    #    ssl_session_cache    shared:SSL:1m;</span></span>
<span class="line"><span style="color:#24292e;">    #    ssl_session_timeout  5m;</span></span>
<span class="line"><span style="color:#24292e;">    #    ssl_ciphers  HIGH:!aNULL:!MD5;</span></span>
<span class="line"><span style="color:#24292e;">    #    ssl_prefer_server_ciphers  on;</span></span>
<span class="line"><span style="color:#24292e;">    #    location / {</span></span>
<span class="line"><span style="color:#24292e;">    #        root   html;</span></span>
<span class="line"><span style="color:#24292e;">    #        index  index.html index.htm;</span></span>
<span class="line"><span style="color:#24292e;">    #    }</span></span>
<span class="line"><span style="color:#24292e;">    #}</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br></div></div><h1 id="nginx操作指令" tabindex="-1">nginx操作指令 <a class="header-anchor" href="#nginx操作指令" aria-label="Permalink to &quot;nginx操作指令&quot;">​</a></h1><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">nginx:启动</span></span>
<span class="line"><span style="color:#B392F0;">nginx</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-s</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">reload</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">#重启</span></span>
<span class="line"><span style="color:#B392F0;">nginx</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-s</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stop</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">#停止服务</span></span>
<span class="line"><span style="color:#B392F0;">ps</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-ef</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">grep</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nginx</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">#查看过滤nginx运行状态</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">nginx:启动</span></span>
<span class="line"><span style="color:#6F42C1;">nginx</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-s</span><span style="color:#24292E;"> </span><span style="color:#032F62;">reload</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">#重启</span></span>
<span class="line"><span style="color:#6F42C1;">nginx</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-s</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stop</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">#停止服务</span></span>
<span class="line"><span style="color:#6F42C1;">ps</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-ef</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">grep</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nginx</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">#查看过滤nginx运行状态</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,12),o=[p];function r(c,t,i,y,b,m){return n(),a("div",null,o)}const E=s(e,[["render",r]]);export{d as __pageData,E as default};
