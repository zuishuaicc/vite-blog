import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.249ccecd.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"views/frontend/electron-builder.md","filePath":"views/frontend/electron-builder.md","lastUpdated":null}'),o={name:"views/frontend/electron-builder.md"},p=l(`<div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#89DDFF;"> </span><span style="color:#676E95;font-style:italic;">// 使用electron-builder打包需要配置&quot;build&quot;</span></span>
<span class="line"><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">build</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">productName</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">xxxx</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;">   </span><span style="color:#676E95;font-style:italic;">// 项目名称</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">appId</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">electron.app</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">// 安装包名称</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">directories</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#BABED8;"> 			</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">output</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">build</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">},</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 输出文件夹</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">copyright</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">xxxx</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 版权信息</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">nsis</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#BABED8;">	</span><span style="color:#676E95;font-style:italic;">//nsis相关配置，打包方式为nsis时生效</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">oneClick</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> 				</span><span style="color:#676E95;font-style:italic;">// 是否一键安装</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">allowElevation</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> 			</span><span style="color:#676E95;font-style:italic;">// 允许请求提升，如果为false，则用户必须使用提升的权限重新启动安装程序。</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">allowToChangeInstallationDirectory</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> 	</span><span style="color:#676E95;font-style:italic;">// 允许修改安装目录</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">installerIcon</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./build/icons/aaa.ico</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;">	</span><span style="color:#676E95;font-style:italic;">// 安装图标</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">uninstallerIcon</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./build/icons/bbb.ico</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;">	</span><span style="color:#676E95;font-style:italic;">// 卸载图标</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">installerHeaderIcon</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./build/icons/aaa.ico</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 安装时头部图标</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">createDesktopShortcut</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> 			</span><span style="color:#676E95;font-style:italic;">// 创建桌面图标</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">createStartMenuShortcut</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;">		</span><span style="color:#676E95;font-style:italic;">// 创建开始菜单图标</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">shortcutName</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">xxxx</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> 			</span><span style="color:#676E95;font-style:italic;">// 图标名称</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">include</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">build/script/installer.nsh</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> 	</span><span style="color:#676E95;font-style:italic;">// 包含的自定义nsis脚本</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// 发布到github</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#F07178;">publish</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#F07178;">provider</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">github</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#F07178;">repo</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">xxxx</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// git仓库</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#F07178;">owner</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">xxxx</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 拥有者</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#F07178;">token</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">xxxxxxxxxxxxxxx</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// gitToken</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#F07178;">releaseType</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">release</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#F07178;">publishAutoUpdate</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 发布自动更新（需要配置GH_TOKEN）。 默认true</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">//配置windows环境</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">win</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">icon</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">build/icons/aims.ico</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">target</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">nsis</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">zip</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">]</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">//配置mac环境</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">mac</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">target</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">dmg</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">zip</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">]</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">//配置linux环境</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">linux</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">icon</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">build/icons</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">}</span></span></code></pre><pre class="shiki material-theme-palenight vp-code-light"><code><span class="line"><span style="color:#89DDFF;"> </span><span style="color:#676E95;font-style:italic;">// 使用electron-builder打包需要配置&quot;build&quot;</span></span>
<span class="line"><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">build</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">productName</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">xxxx</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;">   </span><span style="color:#676E95;font-style:italic;">// 项目名称</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">appId</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">electron.app</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">// 安装包名称</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">directories</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#BABED8;"> 			</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">output</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">build</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">},</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 输出文件夹</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">copyright</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">xxxx</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 版权信息</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">nsis</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#BABED8;">	</span><span style="color:#676E95;font-style:italic;">//nsis相关配置，打包方式为nsis时生效</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">oneClick</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> 				</span><span style="color:#676E95;font-style:italic;">// 是否一键安装</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">allowElevation</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> 			</span><span style="color:#676E95;font-style:italic;">// 允许请求提升，如果为false，则用户必须使用提升的权限重新启动安装程序。</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">allowToChangeInstallationDirectory</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> 	</span><span style="color:#676E95;font-style:italic;">// 允许修改安装目录</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">installerIcon</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./build/icons/aaa.ico</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;">	</span><span style="color:#676E95;font-style:italic;">// 安装图标</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">uninstallerIcon</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./build/icons/bbb.ico</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;">	</span><span style="color:#676E95;font-style:italic;">// 卸载图标</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">installerHeaderIcon</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./build/icons/aaa.ico</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 安装时头部图标</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">createDesktopShortcut</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> 			</span><span style="color:#676E95;font-style:italic;">// 创建桌面图标</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">createStartMenuShortcut</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;">		</span><span style="color:#676E95;font-style:italic;">// 创建开始菜单图标</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">shortcutName</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">xxxx</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> 			</span><span style="color:#676E95;font-style:italic;">// 图标名称</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">include</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">build/script/installer.nsh</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> 	</span><span style="color:#676E95;font-style:italic;">// 包含的自定义nsis脚本</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// 发布到github</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#F07178;">publish</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#F07178;">provider</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">github</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#F07178;">repo</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">xxxx</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// git仓库</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#F07178;">owner</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">xxxx</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 拥有者</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#F07178;">token</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">xxxxxxxxxxxxxxx</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// gitToken</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#F07178;">releaseType</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">release</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#F07178;">publishAutoUpdate</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 发布自动更新（需要配置GH_TOKEN）。 默认true</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">//配置windows环境</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">win</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">icon</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">build/icons/aims.ico</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">target</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">nsis</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">zip</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">]</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">//配置mac环境</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">mac</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">target</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">dmg</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">zip</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">]</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">//配置linux环境</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">linux</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">icon</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">build/icons</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div>`,1),t=[p];function e(c,D,r,F,y,i){return n(),a("div",null,t)}const E=s(o,[["render",e]]);export{u as __pageData,E as default};
