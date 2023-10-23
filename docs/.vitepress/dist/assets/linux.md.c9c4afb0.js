import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.808cf4e8.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"linux.md","filePath":"linux.md"}'),p={name:"linux.md"},o=l(`<h2 id="防火墙指令" tabindex="-1">防火墙指令 <a class="header-anchor" href="#防火墙指令" aria-label="Permalink to &quot;防火墙指令&quot;">​</a></h2><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">firewall-cmd</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--add-port=1935/tcp</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--permanent</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">#开放端口</span></span>
<span class="line"><span style="color:#B392F0;">firewall-cmd</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--list-all</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">#查看已开放的端口</span></span>
<span class="line"><span style="color:#B392F0;">firewall-cmd</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--permanent</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--remove-port</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3306</span><span style="color:#9ECBFF;">/tcp</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">#关闭端口</span></span>
<span class="line"><span style="color:#B392F0;">firewall-cmd</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--reload</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">#防火墙重启</span></span>
<span class="line"><span style="color:#B392F0;">firewall-cmd</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--query-port=80/tcp</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">#查看指定端口是否开放</span></span>
<span class="line"><span style="color:#B392F0;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">firewalld</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">#重启防火墙</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">firewall-cmd</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--add-port=1935/tcp</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--permanent</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">#开放端口</span></span>
<span class="line"><span style="color:#6F42C1;">firewall-cmd</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--list-all</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">#查看已开放的端口</span></span>
<span class="line"><span style="color:#6F42C1;">firewall-cmd</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--permanent</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--remove-port</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3306</span><span style="color:#032F62;">/tcp</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">#关闭端口</span></span>
<span class="line"><span style="color:#6F42C1;">firewall-cmd</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--reload</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">#防火墙重启</span></span>
<span class="line"><span style="color:#6F42C1;">firewall-cmd</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--query-port=80/tcp</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">#查看指定端口是否开放</span></span>
<span class="line"><span style="color:#6F42C1;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span><span style="color:#032F62;">firewalld</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">#重启防火墙</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="文件操作指令" tabindex="-1">文件操作指令 <a class="header-anchor" href="#文件操作指令" aria-label="Permalink to &quot;文件操作指令&quot;">​</a></h2><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">ll</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">#查看所有前端包记录</span></span>
<span class="line"><span style="color:#B392F0;">rm</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-rf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dist</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">#删除当前包</span></span>
<span class="line"><span style="color:#B392F0;">unzip</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-q</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dist.zip</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">#解压dist</span></span>
<span class="line"><span style="color:#B392F0;">mv</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">初始文件名</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">改后文件名</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">#重命名文件</span></span>
<span class="line"><span style="color:#B392F0;">touch</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">#创建文件</span></span>
<span class="line"><span style="color:#B392F0;">cp</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">#复制</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">ll</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">#查看所有前端包记录</span></span>
<span class="line"><span style="color:#6F42C1;">rm</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-rf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dist</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">#删除当前包</span></span>
<span class="line"><span style="color:#6F42C1;">unzip</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-q</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dist.zip</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">#解压dist</span></span>
<span class="line"><span style="color:#6F42C1;">mv</span><span style="color:#24292E;"> </span><span style="color:#032F62;">初始文件名</span><span style="color:#24292E;"> </span><span style="color:#032F62;">改后文件名</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">#重命名文件</span></span>
<span class="line"><span style="color:#6F42C1;">touch</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">#创建文件</span></span>
<span class="line"><span style="color:#6F42C1;">cp</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">#复制</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="mongodb-操作" tabindex="-1">mongodb 操作 <a class="header-anchor" href="#mongodb-操作" aria-label="Permalink to &quot;mongodb 操作&quot;">​</a></h2><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">mongod</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-f</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mongodb.cfg</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--fork</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">开启</span></span>
<span class="line"><span style="color:#B392F0;">mongod</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-f</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mongodb.cfg</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--shutdown</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">关闭</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">mongod</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-f</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mongodb.cfg</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--fork</span><span style="color:#24292E;"> </span><span style="color:#032F62;">开启</span></span>
<span class="line"><span style="color:#6F42C1;">mongod</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-f</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mongodb.cfg</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--shutdown</span><span style="color:#24292E;"> </span><span style="color:#032F62;">关闭</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="mongodb配置文件" tabindex="-1">mongodb配置文件 <a class="header-anchor" href="#mongodb配置文件" aria-label="Permalink to &quot;mongodb配置文件&quot;">​</a></h2><div class="language-yml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#9ECBFF;">dbpath=/usr/local/src/mongodb/data</span></span>
<span class="line"><span style="color:#9ECBFF;">logpath=/usr/local/src/mongodb/logs/mongodb.log</span></span>
<span class="line"><span style="color:#9ECBFF;">bind_ip=0.0.0.0</span></span>
<span class="line"><span style="color:#9ECBFF;">port=27017</span></span>
<span class="line"><span style="color:#9ECBFF;">logappend=true</span></span>
<span class="line"><span style="color:#9ECBFF;">fork=true</span></span>
<span class="line"><span style="color:#9ECBFF;">maxConns=5000</span></span>
<span class="line"><span style="color:#9ECBFF;">auth=true</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#032F62;">dbpath=/usr/local/src/mongodb/data</span></span>
<span class="line"><span style="color:#032F62;">logpath=/usr/local/src/mongodb/logs/mongodb.log</span></span>
<span class="line"><span style="color:#032F62;">bind_ip=0.0.0.0</span></span>
<span class="line"><span style="color:#032F62;">port=27017</span></span>
<span class="line"><span style="color:#032F62;">logappend=true</span></span>
<span class="line"><span style="color:#032F62;">fork=true</span></span>
<span class="line"><span style="color:#032F62;">maxConns=5000</span></span>
<span class="line"><span style="color:#032F62;">auth=true</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="nginx配置文件" tabindex="-1">nginx配置文件 <a class="header-anchor" href="#nginx配置文件" aria-label="Permalink to &quot;nginx配置文件&quot;">​</a></h2><div class="language-yml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">#user  nobody;</span></span>
<span class="line"><span style="color:#9ECBFF;">worker_processes  1;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#error_log  logs/error.log;</span></span>
<span class="line"><span style="color:#6A737D;">#error_log  logs/error.log  notice;</span></span>
<span class="line"><span style="color:#6A737D;">#error_log  logs/error.log  info;</span></span>
<span class="line"><span style="color:#6A737D;">#pid        logs/nginx.pid;</span></span>
<span class="line"><span style="color:#9ECBFF;">events {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">worker_connections  1024;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#9ECBFF;">http {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">include       mime.types;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">default_type  application/octet-stream;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#                  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#                  &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#access_log  logs/access.log  main;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">sendfile        on;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#tcp_nopush     on;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#keepalive_timeout  0;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">keepalive_timeout  65;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">error_log /usr/local/nginx/nginx-error.log error;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#gzip  on;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">server {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">listen       3000;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">server_name  192.168.248.130;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#charset koi8-r;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#access_log  logs/host.access.log  main;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">location / {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">root   /usr/local/src/dist;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">index  index.html index.htm;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">try_files  $uri $uri/  /index.html;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">location /api/{</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">proxy_pass http://192.168.248.130:8000/api/;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">proxy_set_header Host &amp;host;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">location /uploads/{</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">proxy_pass http://192.168.248.130:8000/uploads/;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#error_page  404              /404.html;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># redirect server error pages to the static page /50x.html</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">error_page   500 502 503 504  /50x.html;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">location = /50x.html {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">root   html;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># proxy the PHP scripts to Apache listening on 127.0.0.1:80</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#location ~ \\.php$ {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#    proxy_pass   http://127.0.0.1;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#}</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#location ~ \\.php$ {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#    root           html;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#    fastcgi_pass   127.0.0.1:9000;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#    fastcgi_index  index.php;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#    include        fastcgi_params;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#}</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># deny access to .htaccess files, if Apache&#39;s document root</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># concurs with nginx&#39;s one</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#location ~ /\\.ht {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#    deny  all;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#}</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># another virtual host using mix of IP-, name-, and port-based configuration</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#server {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#    listen       8000;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#    listen       somename:8080;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#    server_name  somename  alias  another.alias;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#    location / {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#        root   html;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#        index  index.html index.htm;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#}</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># HTTPS server</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#server {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#    listen       443 ssl;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#    server_name  localhost;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#    ssl_certificate      cert.pem;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#    ssl_certificate_key  cert.key;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#    ssl_session_cache    shared:SSL:1m;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#    ssl_session_timeout  5m;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#    ssl_ciphers  HIGH:!aNULL:!MD5;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#    ssl_prefer_server_ciphers  on;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#    location / {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#        root   html;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#        index  index.html index.htm;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#}</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">#user  nobody;</span></span>
<span class="line"><span style="color:#032F62;">worker_processes  1;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#error_log  logs/error.log;</span></span>
<span class="line"><span style="color:#6A737D;">#error_log  logs/error.log  notice;</span></span>
<span class="line"><span style="color:#6A737D;">#error_log  logs/error.log  info;</span></span>
<span class="line"><span style="color:#6A737D;">#pid        logs/nginx.pid;</span></span>
<span class="line"><span style="color:#032F62;">events {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">worker_connections  1024;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#032F62;">http {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">include       mime.types;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">default_type  application/octet-stream;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#                  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#                  &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#access_log  logs/access.log  main;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">sendfile        on;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#tcp_nopush     on;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#keepalive_timeout  0;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">keepalive_timeout  65;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">error_log /usr/local/nginx/nginx-error.log error;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#gzip  on;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">server {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">listen       3000;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">server_name  192.168.248.130;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">#charset koi8-r;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">#access_log  logs/host.access.log  main;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">location / {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">root   /usr/local/src/dist;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">index  index.html index.htm;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">try_files  $uri $uri/  /index.html;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">location /api/{</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">proxy_pass http://192.168.248.130:8000/api/;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">proxy_set_header Host &amp;host;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">location /uploads/{</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">proxy_pass http://192.168.248.130:8000/uploads/;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">#error_page  404              /404.html;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;"># redirect server error pages to the static page /50x.html</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">error_page   500 502 503 504  /50x.html;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">location = /50x.html {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">root   html;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;"># proxy the PHP scripts to Apache listening on 127.0.0.1:80</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">#location ~ \\.php$ {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">#    proxy_pass   http://127.0.0.1;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">#}</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;"># pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">#location ~ \\.php$ {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">#    root           html;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">#    fastcgi_pass   127.0.0.1:9000;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">#    fastcgi_index  index.php;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">#    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">#    include        fastcgi_params;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">#}</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;"># deny access to .htaccess files, if Apache&#39;s document root</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;"># concurs with nginx&#39;s one</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">#location ~ /\\.ht {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">#    deny  all;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">#}</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># another virtual host using mix of IP-, name-, and port-based configuration</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#server {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#    listen       8000;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#    listen       somename:8080;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#    server_name  somename  alias  another.alias;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#    location / {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#        root   html;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#        index  index.html index.htm;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#}</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># HTTPS server</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#server {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#    listen       443 ssl;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#    server_name  localhost;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#    ssl_certificate      cert.pem;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#    ssl_certificate_key  cert.key;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#    ssl_session_cache    shared:SSL:1m;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#    ssl_session_timeout  5m;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#    ssl_ciphers  HIGH:!aNULL:!MD5;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#    ssl_prefer_server_ciphers  on;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#    location / {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#        root   html;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#        index  index.html index.htm;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br></div></div><h2 id="nginx操作指令" tabindex="-1">nginx操作指令 <a class="header-anchor" href="#nginx操作指令" aria-label="Permalink to &quot;nginx操作指令&quot;">​</a></h2><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">nginx:启动</span></span>
<span class="line"><span style="color:#B392F0;">nginx</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-s</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">reload</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">#重启</span></span>
<span class="line"><span style="color:#B392F0;">nginx</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-s</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stop</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">#停止服务</span></span>
<span class="line"><span style="color:#B392F0;">ps</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-ef</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">grep</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nginx</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">#查看过滤nginx运行状态</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">nginx:启动</span></span>
<span class="line"><span style="color:#6F42C1;">nginx</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-s</span><span style="color:#24292E;"> </span><span style="color:#032F62;">reload</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">#重启</span></span>
<span class="line"><span style="color:#6F42C1;">nginx</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-s</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stop</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">#停止服务</span></span>
<span class="line"><span style="color:#6F42C1;">ps</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-ef</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">grep</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nginx</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">#查看过滤nginx运行状态</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,12),e=[o];function r(c,t,i,y,E,b){return n(),a("div",null,e)}const d=s(p,[["render",r]]);export{u as __pageData,d as default};
