import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.b85f4cea.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"views/techStack/linux.md","filePath":"views/techStack/linux.md","lastUpdated":1716391526000}'),p={name:"views/techStack/linux.md"},e=l(`<h2 id="防火墙指令" tabindex="-1">防火墙指令 <a class="header-anchor" href="#防火墙指令" aria-label="Permalink to &quot;防火墙指令&quot;">​</a></h2><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#FFCB6B;">firewall-cmd</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--add-port=1935/tcp</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--permanent</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">#开放端口</span></span>
<span class="line"><span style="color:#FFCB6B;">firewall-cmd</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--list-all</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">#查看已开放的端口</span></span>
<span class="line"><span style="color:#FFCB6B;">firewall-cmd</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--permanent</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--remove-port</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">3306</span><span style="color:#C3E88D;">/tcp</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">#关闭端口</span></span>
<span class="line"><span style="color:#FFCB6B;">firewall-cmd</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--reload</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">#防火墙重启</span></span>
<span class="line"><span style="color:#FFCB6B;">firewall-cmd</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--query-port=80/tcp</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">#查看指定端口是否开放</span></span>
<span class="line"><span style="color:#FFCB6B;">systemctl</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">start</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">firewalld</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">#重启防火墙</span></span></code></pre><pre class="shiki material-theme-palenight vp-code-light"><code><span class="line"><span style="color:#FFCB6B;">firewall-cmd</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--add-port=1935/tcp</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--permanent</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">#开放端口</span></span>
<span class="line"><span style="color:#FFCB6B;">firewall-cmd</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--list-all</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">#查看已开放的端口</span></span>
<span class="line"><span style="color:#FFCB6B;">firewall-cmd</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--permanent</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--remove-port</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">3306</span><span style="color:#C3E88D;">/tcp</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">#关闭端口</span></span>
<span class="line"><span style="color:#FFCB6B;">firewall-cmd</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--reload</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">#防火墙重启</span></span>
<span class="line"><span style="color:#FFCB6B;">firewall-cmd</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--query-port=80/tcp</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">#查看指定端口是否开放</span></span>
<span class="line"><span style="color:#FFCB6B;">systemctl</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">start</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">firewalld</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">#重启防火墙</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="文件操作指令" tabindex="-1">文件操作指令 <a class="header-anchor" href="#文件操作指令" aria-label="Permalink to &quot;文件操作指令&quot;">​</a></h2><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#FFCB6B;">ll</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">#查看所有前端包记录</span></span>
<span class="line"><span style="color:#FFCB6B;">rm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-rf</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">dist</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">#删除当前包</span></span>
<span class="line"><span style="color:#FFCB6B;">unzip</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-q</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">dist.zip</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">#解压dist</span></span>
<span class="line"><span style="color:#FFCB6B;">mv</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">初始文件名</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">改后文件名</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">#重命名文件</span></span>
<span class="line"><span style="color:#FFCB6B;">touch</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">#创建文件</span></span>
<span class="line"><span style="color:#FFCB6B;">cp</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">#复制</span></span></code></pre><pre class="shiki material-theme-palenight vp-code-light"><code><span class="line"><span style="color:#FFCB6B;">ll</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">#查看所有前端包记录</span></span>
<span class="line"><span style="color:#FFCB6B;">rm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-rf</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">dist</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">#删除当前包</span></span>
<span class="line"><span style="color:#FFCB6B;">unzip</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-q</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">dist.zip</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">#解压dist</span></span>
<span class="line"><span style="color:#FFCB6B;">mv</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">初始文件名</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">改后文件名</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">#重命名文件</span></span>
<span class="line"><span style="color:#FFCB6B;">touch</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">#创建文件</span></span>
<span class="line"><span style="color:#FFCB6B;">cp</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">#复制</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="mongodb-操作" tabindex="-1">mongodb 操作 <a class="header-anchor" href="#mongodb-操作" aria-label="Permalink to &quot;mongodb 操作&quot;">​</a></h2><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#FFCB6B;">mongod</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-f</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">mongodb.cfg</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--fork</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">开启</span></span>
<span class="line"><span style="color:#FFCB6B;">mongod</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-f</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">mongodb.cfg</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--shutdown</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">关闭</span></span></code></pre><pre class="shiki material-theme-palenight vp-code-light"><code><span class="line"><span style="color:#FFCB6B;">mongod</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-f</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">mongodb.cfg</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--fork</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">开启</span></span>
<span class="line"><span style="color:#FFCB6B;">mongod</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-f</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">mongodb.cfg</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--shutdown</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">关闭</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="mongodb配置文件" tabindex="-1">mongodb配置文件 <a class="header-anchor" href="#mongodb配置文件" aria-label="Permalink to &quot;mongodb配置文件&quot;">​</a></h2><div class="language-yml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#C3E88D;">dbpath=/usr/local/src/mongodb/data</span></span>
<span class="line"><span style="color:#C3E88D;">logpath=/usr/local/src/mongodb/logs/mongodb.log</span></span>
<span class="line"><span style="color:#C3E88D;">bind_ip=0.0.0.0</span></span>
<span class="line"><span style="color:#C3E88D;">port=27017</span></span>
<span class="line"><span style="color:#C3E88D;">logappend=true</span></span>
<span class="line"><span style="color:#C3E88D;">fork=true</span></span>
<span class="line"><span style="color:#C3E88D;">maxConns=5000</span></span>
<span class="line"><span style="color:#C3E88D;">auth=true</span></span></code></pre><pre class="shiki material-theme-palenight vp-code-light"><code><span class="line"><span style="color:#C3E88D;">dbpath=/usr/local/src/mongodb/data</span></span>
<span class="line"><span style="color:#C3E88D;">logpath=/usr/local/src/mongodb/logs/mongodb.log</span></span>
<span class="line"><span style="color:#C3E88D;">bind_ip=0.0.0.0</span></span>
<span class="line"><span style="color:#C3E88D;">port=27017</span></span>
<span class="line"><span style="color:#C3E88D;">logappend=true</span></span>
<span class="line"><span style="color:#C3E88D;">fork=true</span></span>
<span class="line"><span style="color:#C3E88D;">maxConns=5000</span></span>
<span class="line"><span style="color:#C3E88D;">auth=true</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="nginx配置文件" tabindex="-1">nginx配置文件 <a class="header-anchor" href="#nginx配置文件" aria-label="Permalink to &quot;nginx配置文件&quot;">​</a></h2><div class="language-yml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#676E95;font-style:italic;">#user  nobody;</span></span>
<span class="line"><span style="color:#C3E88D;">worker_processes  1;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#error_log  logs/error.log;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#error_log  logs/error.log  notice;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#error_log  logs/error.log  info;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#pid        logs/nginx.pid;</span></span>
<span class="line"><span style="color:#C3E88D;">events {</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#C3E88D;">worker_connections  1024;</span></span>
<span class="line"><span style="color:#BABED8;">}</span></span>
<span class="line"><span style="color:#C3E88D;">http {</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#C3E88D;">include       mime.types;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#C3E88D;">default_type  application/octet-stream;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#                  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#                  &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#access_log  logs/access.log  main;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#C3E88D;">sendfile        on;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#tcp_nopush     on;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#keepalive_timeout  0;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#C3E88D;">keepalive_timeout  65;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#C3E88D;">error_log /usr/local/nginx/nginx-error.log error;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#gzip  on;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#C3E88D;">server {</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#C3E88D;">listen       3000;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#C3E88D;">server_name  192.168.248.130;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#charset koi8-r;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#access_log  logs/host.access.log  main;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#C3E88D;">location / {</span></span>
<span class="line"><span style="color:#BABED8;">            </span><span style="color:#C3E88D;">root   /usr/local/src/dist;</span></span>
<span class="line"><span style="color:#BABED8;">            </span><span style="color:#C3E88D;">index  index.html index.htm;</span></span>
<span class="line"><span style="color:#BABED8;">            </span><span style="color:#C3E88D;">try_files  $uri $uri/  /index.html;</span></span>
<span class="line"><span style="color:#BABED8;">        }</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#C3E88D;">location /api/{</span></span>
<span class="line"><span style="color:#BABED8;">            </span><span style="color:#C3E88D;">proxy_pass http://192.168.248.130:8000/api/;</span></span>
<span class="line"><span style="color:#BABED8;">            </span><span style="color:#C3E88D;">proxy_set_header Host &amp;host;</span></span>
<span class="line"><span style="color:#BABED8;">        }</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#C3E88D;">location /uploads/{</span></span>
<span class="line"><span style="color:#BABED8;">            </span><span style="color:#C3E88D;">proxy_pass http://192.168.248.130:8000/uploads/;</span></span>
<span class="line"><span style="color:#BABED8;">        }</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#error_page  404              /404.html;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;"># redirect server error pages to the static page /50x.html</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#C3E88D;">error_page   500 502 503 504  /50x.html;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#C3E88D;">location = /50x.html {</span></span>
<span class="line"><span style="color:#BABED8;">            </span><span style="color:#C3E88D;">root   html;</span></span>
<span class="line"><span style="color:#BABED8;">        }</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;"># proxy the PHP scripts to Apache listening on 127.0.0.1:80</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#location ~ \\.php$ {</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#    proxy_pass   http://127.0.0.1;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#}</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;"># pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#location ~ \\.php$ {</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#    root           html;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#    fastcgi_pass   127.0.0.1:9000;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#    fastcgi_index  index.php;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#    include        fastcgi_params;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#}</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;"># deny access to .htaccess files, if Apache&#39;s document root</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;"># concurs with nginx&#39;s one</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#location ~ /\\.ht {</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#    deny  all;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#}</span></span>
<span class="line"><span style="color:#BABED8;">    }</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;"># another virtual host using mix of IP-, name-, and port-based configuration</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#server {</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#    listen       8000;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#    listen       somename:8080;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#    server_name  somename  alias  another.alias;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#    location / {</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#        root   html;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#        index  index.html index.htm;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#    }</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#}</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;"># HTTPS server</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#server {</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#    listen       443 ssl;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#    server_name  localhost;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#    ssl_certificate      cert.pem;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#    ssl_certificate_key  cert.key;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#    ssl_session_cache    shared:SSL:1m;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#    ssl_session_timeout  5m;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#    ssl_ciphers  HIGH:!aNULL:!MD5;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#    ssl_prefer_server_ciphers  on;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#    location / {</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#        root   html;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#        index  index.html index.htm;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#    }</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#}</span></span>
<span class="line"><span style="color:#BABED8;">}</span></span></code></pre><pre class="shiki material-theme-palenight vp-code-light"><code><span class="line"><span style="color:#676E95;font-style:italic;">#user  nobody;</span></span>
<span class="line"><span style="color:#C3E88D;">worker_processes  1;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#error_log  logs/error.log;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#error_log  logs/error.log  notice;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#error_log  logs/error.log  info;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#pid        logs/nginx.pid;</span></span>
<span class="line"><span style="color:#C3E88D;">events {</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#C3E88D;">worker_connections  1024;</span></span>
<span class="line"><span style="color:#BABED8;">}</span></span>
<span class="line"><span style="color:#C3E88D;">http {</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#C3E88D;">include       mime.types;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#C3E88D;">default_type  application/octet-stream;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#                  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#                  &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#access_log  logs/access.log  main;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#C3E88D;">sendfile        on;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#tcp_nopush     on;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#keepalive_timeout  0;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#C3E88D;">keepalive_timeout  65;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#C3E88D;">error_log /usr/local/nginx/nginx-error.log error;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#gzip  on;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#C3E88D;">server {</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#C3E88D;">listen       3000;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#C3E88D;">server_name  192.168.248.130;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#charset koi8-r;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#access_log  logs/host.access.log  main;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#C3E88D;">location / {</span></span>
<span class="line"><span style="color:#BABED8;">            </span><span style="color:#C3E88D;">root   /usr/local/src/dist;</span></span>
<span class="line"><span style="color:#BABED8;">            </span><span style="color:#C3E88D;">index  index.html index.htm;</span></span>
<span class="line"><span style="color:#BABED8;">            </span><span style="color:#C3E88D;">try_files  $uri $uri/  /index.html;</span></span>
<span class="line"><span style="color:#BABED8;">        }</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#C3E88D;">location /api/{</span></span>
<span class="line"><span style="color:#BABED8;">            </span><span style="color:#C3E88D;">proxy_pass http://192.168.248.130:8000/api/;</span></span>
<span class="line"><span style="color:#BABED8;">            </span><span style="color:#C3E88D;">proxy_set_header Host &amp;host;</span></span>
<span class="line"><span style="color:#BABED8;">        }</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#C3E88D;">location /uploads/{</span></span>
<span class="line"><span style="color:#BABED8;">            </span><span style="color:#C3E88D;">proxy_pass http://192.168.248.130:8000/uploads/;</span></span>
<span class="line"><span style="color:#BABED8;">        }</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#error_page  404              /404.html;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;"># redirect server error pages to the static page /50x.html</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#C3E88D;">error_page   500 502 503 504  /50x.html;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#C3E88D;">location = /50x.html {</span></span>
<span class="line"><span style="color:#BABED8;">            </span><span style="color:#C3E88D;">root   html;</span></span>
<span class="line"><span style="color:#BABED8;">        }</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;"># proxy the PHP scripts to Apache listening on 127.0.0.1:80</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#location ~ \\.php$ {</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#    proxy_pass   http://127.0.0.1;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#}</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;"># pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#location ~ \\.php$ {</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#    root           html;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#    fastcgi_pass   127.0.0.1:9000;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#    fastcgi_index  index.php;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#    include        fastcgi_params;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#}</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;"># deny access to .htaccess files, if Apache&#39;s document root</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;"># concurs with nginx&#39;s one</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#location ~ /\\.ht {</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#    deny  all;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#}</span></span>
<span class="line"><span style="color:#BABED8;">    }</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;"># another virtual host using mix of IP-, name-, and port-based configuration</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#server {</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#    listen       8000;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#    listen       somename:8080;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#    server_name  somename  alias  another.alias;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#    location / {</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#        root   html;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#        index  index.html index.htm;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#    }</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#}</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;"># HTTPS server</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#server {</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#    listen       443 ssl;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#    server_name  localhost;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#    ssl_certificate      cert.pem;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#    ssl_certificate_key  cert.key;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#    ssl_session_cache    shared:SSL:1m;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#    ssl_session_timeout  5m;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#    ssl_ciphers  HIGH:!aNULL:!MD5;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#    ssl_prefer_server_ciphers  on;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#    location / {</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#        root   html;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#        index  index.html index.htm;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#    }</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#}</span></span>
<span class="line"><span style="color:#BABED8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br></div></div><h2 id="nginx操作指令" tabindex="-1">nginx操作指令 <a class="header-anchor" href="#nginx操作指令" aria-label="Permalink to &quot;nginx操作指令&quot;">​</a></h2><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#FFCB6B;">nginx:启动</span></span>
<span class="line"><span style="color:#FFCB6B;">nginx</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-s</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">reload</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">#重启</span></span>
<span class="line"><span style="color:#FFCB6B;">nginx</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-s</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">stop</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">#停止服务</span></span>
<span class="line"><span style="color:#FFCB6B;">ps</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-ef</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">grep</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">nginx</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">#查看过滤nginx运行状态</span></span></code></pre><pre class="shiki material-theme-palenight vp-code-light"><code><span class="line"><span style="color:#FFCB6B;">nginx:启动</span></span>
<span class="line"><span style="color:#FFCB6B;">nginx</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-s</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">reload</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">#重启</span></span>
<span class="line"><span style="color:#FFCB6B;">nginx</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-s</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">stop</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">#停止服务</span></span>
<span class="line"><span style="color:#FFCB6B;">ps</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-ef</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">grep</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">nginx</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">#查看过滤nginx运行状态</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,12),o=[e];function t(c,r,i,y,D,E){return n(),a("div",null,o)}const F=s(p,[["render",t]]);export{m as __pageData,F as default};
