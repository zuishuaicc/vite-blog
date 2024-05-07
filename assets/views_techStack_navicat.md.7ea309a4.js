import{_ as a,o as s,c as e,Q as p}from"./chunks/framework.249ccecd.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"views/techStack/navicat.md","filePath":"views/techStack/navicat.md","lastUpdated":1715097500000}'),n={name:"views/techStack/navicat.md"},o=p('<h2 id="mac安装navicat-无法通过mac校验" tabindex="-1">mac安装navicat,无法通过mac校验 <a class="header-anchor" href="#mac安装navicat-无法通过mac校验" aria-label="Permalink to &quot;mac安装navicat,无法通过mac校验&quot;">​</a></h2><p>先打开 <code>系统偏好设置</code>-&gt; <code>安全与隐私</code>-&gt; <code>通用</code> 选项卡，检查是否已经启用了 <code>任何来源</code> 选项。<br> 如果没有启用，先点击左下角的小黄锁图标解锁，然后选中<code>任何来源</code>。</p><p>如果没有这个选项，我们打开 <code>终端</code>(可以在聚焦搜索 terminal)，输入以下命令 (可以通过点击屏幕右上角的搜索图标，输入 终端 快速运行)：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">spctl</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--master-disable</span></span></code></pre><pre class="shiki material-theme-palenight vp-code-light"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">spctl</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--master-disable</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>然后按下键盘的回车键（return），输入密码，再按回车键，完成。<br> 输入命令回车后会看见个 password 后面还有个钥匙图标，在钥匙图标后面输入你自己电脑解锁密码（输入的时候不显示你输入的密码，感觉就是输入不了东西一样，也不用管，凭感觉输入完正确解锁密码后按回车键）</p><p>好了，现在回到 <code>系统偏好设置</code> -&gt; <code>安全性与隐私</code> -&gt; <code>通用</code> 里，就会发现已选中 任何来源 选项了。</p><p><em><code>一般执行完命令会默认选中的，如果没有选中，解锁一下选中就可以了！</code></em></p><p>到这里一般情况下应用都可以运行了，特别是 macOS 10.14 及以下系统</p><p>但是 macOS 10.15x 系统对于未签名的应用又进一步收缩了权限，众所周知破解软件基本上不会进行签名的，特别是所以当我们在 10.15.x 系统上运行破解软件的时候可能还会提示 xxx.app已损坏，不过没关系，我们通过命令绕过苹果的公证 Gatekeeper 就可以了。</p><p>绕过公证： 打开终端，输入以下命令：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">xattr</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-rd</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">com.apple.quarantine</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">/Applications/xxxxxx.app</span></span></code></pre><pre class="shiki material-theme-palenight vp-code-light"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">xattr</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-rd</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">com.apple.quarantine</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">/Applications/xxxxxx.app</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>将上面的 xxxxxx.app 换成你的App名称，比如 Sketch.app</code></p><p>sudo xattr -rd com.apple.quarantine /Applications/Sketch.app 或者复制以下命令粘贴到终端后</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">xattr</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-rd</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">com.apple.quarantine</span></span></code></pre><pre class="shiki material-theme-palenight vp-code-light"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">xattr</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-rd</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">com.apple.quarantine</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>打开<code>Finder</code>（访达），点击左侧的 <code>应用程序</code>，将应用拖进终端中，然后按键盘的<code>回车键（return）</code>，输入密码，再按<code>回车</code>键，完成。</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>注意 quarantine 后面必须有个空格</p></div><p>好了再看一下是不是可以打开APP了！</p>',17),c=[o];function l(t,r,d,i,m,B){return s(),e("div",null,c)}const u=a(n,[["render",l]]);export{y as __pageData,u as default};
