import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.249ccecd.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"views/front/chrome-extension.md","filePath":"views/front/chrome-extension.md"}'),l={name:"views/front/chrome-extension.md"},o=p(`<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//chrome插件的版本</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;manifest_version&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//插件名称</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;ChromeName&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//插件版本号</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;version&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;1.0.0&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//插件描述，Plugin_Desc是多语言的key，chrome插件支持多语言配置，__MSG_xxx__</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;description&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;__MSG_Plugin_Desc__&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//默认语言(如果当前浏览器设置的语言不存在多语言配置文件，则默认中文)，Chrome插件的多语言只能根据当前浏览器设置的语言来设定，无法通过代码更改语言</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;default_locale&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;zh_CN&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#6A737D;">//内容安全政策，V2的value是字符串，V3是对象</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;content_security_policy&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//原文：此政策涵盖您的扩展程序中的页面，包括 html 文件和服务人员；具体不是很明白，但是参数值得是self，即当前自己</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;extension_pages&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;script-src &#39;self&#39;; object-src &#39;self&#39;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">//原文：此政策涵盖您的扩展程序使用的任何[沙盒扩展程序页面]；具体不是很明白，但是参数值得是self，即当前自己</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;sandbox&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;sandbox allow-scripts; script-src &#39;self&#39;; object-src &#39;self&#39;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#6A737D;">//key，发布插件后会给一个key，把那个key的值放这里</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;key&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;xxx&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//icon，浏览器扩展程序管理里面的图标、浏览器右侧插件图标点开的下拉菜单展示的已开启插件的图标、以及插件详情页的标签卡的那个小图标</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;icons&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;16&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;static/img/logo-16.png&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;19&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;static/img/logo-19.png&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;38&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;static/img/logo-38.png&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;48&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;static/img/logo-48.png&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;128&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;static/img/logo-128.png&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//背景页，后台脚本引入，v2是scripts:[xxx,xxx]，可以引入多个js文件，v3是service_worker：&#39;xxx&#39;，只能引入一个js，v3版最大的改动应该就是这里了，扩展程序管理界面的插件的那个“背景页”也将变成“Service Worker”，改动之后background.js将和浏览器完全分离，即无法调用window和ducoment对象</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//可以看介绍：</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//1、//developer.chrome.com/docs/extensions/mv3/intro/mv3-migration/#background-service-workers；</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//2、//developer.chrome.com/docs/extensions/mv3/migrating_to_service_workers/</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;background&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;service_worker&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;background.js&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//注入脚本，值是个数组对象，可以有多个对象</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;content_scripts&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//每个对象代表一个注入的配置</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">	    </span><span style="color:#6A737D;">//需要在指定页面注入的js脚本文件</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;js&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;xxx.js&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;xxx.js&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      ],</span></span>
<span class="line"><span style="color:#E1E4E8;">	   </span><span style="color:#6A737D;">//需要注入js脚本文件的指定页面</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;matches&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;https://*.csdn.net/*&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;https://*.xxx.com/*&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      ],</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#6A737D;">//不允许注入js脚本文件的指定页面</span></span>
<span class="line"><span style="color:#E1E4E8;"> 	   </span><span style="color:#79B8FF;">&quot;exclude_matches&quot;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;https://*.xxx.com/*&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">	   </span><span style="color:#6A737D;">//什么时候注入的js脚本，document_start=页面加载开始时，document_end=页面加载结束时</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;run_at&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;document_end&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//API权限，需要使用某些API时需要设置该API权限才行</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;permissions&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">	  </span><span style="color:#9ECBFF;">&quot;contextMenus&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//自定义创建右键菜单API</span></span>
<span class="line"><span style="color:#E1E4E8;">	  </span><span style="color:#9ECBFF;">&quot;tabs&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//tab选项卡API</span></span>
<span class="line"><span style="color:#E1E4E8;">	  </span><span style="color:#9ECBFF;">&quot;storage&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//缓存API</span></span>
<span class="line"><span style="color:#E1E4E8;">	  </span><span style="color:#9ECBFF;">&quot;webRequest&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//监听浏览器请求API</span></span>
<span class="line"><span style="color:#E1E4E8;">	  </span><span style="color:#FDAEB7;font-style:italic;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//主机权限，在背景页backgroud.js里面或者popup页面走请求时，请求域名的白名单权限，如果没添加的则请求会失败</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;host_permissions&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;https://*.csdn.net/*&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;https://*.xxx.com/*&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//动作API，原文：在 Manifest V2 中，有两种不同的 API 来实现操作： \`&quot;browser_action&quot;\` 和 \`&quot;page_action&quot;\` . </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//这些 API 在引入时扮演了不同的角色，但随着时间的推移它们变得多余，因此在 Manifest V3 中，我们将它们统一为单个 \`&quot;action&quot;\` API； </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//配置上action:{}，可以是空对象，但是action这个配置得有，不然的话扩展程序管理界面的“Service Worker”将显示无效，</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//且无法点开“Service Worker”的开发者工具控制台以及点击插件图标时触发的这个方法会报错：chrome.action.onClicked.addListener，</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;action&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//通过网络访问的资源，v2是提供一个数组，v3得提供数组对象，每个对象可以映射到一组资源到一组 URL 或扩展 ID</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;web_accessible_resources&quot;</span><span style="color:#E1E4E8;">: [{</span></span>
<span class="line"><span style="color:#E1E4E8;">  	</span><span style="color:#6A737D;">//允许访问的资源路径，数组传多个参数</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;resources&quot;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;*/img/xxx.png&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;*/img/xxx2.png&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">//允许访问资源的页面</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;matches&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;https://*.csdn.net/*&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;https://*.xxx.com/*&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  }]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//chrome插件的版本</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;manifest_version&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//插件名称</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;ChromeName&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//插件版本号</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;version&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;1.0.0&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//插件描述，Plugin_Desc是多语言的key，chrome插件支持多语言配置，__MSG_xxx__</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;description&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;__MSG_Plugin_Desc__&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//默认语言(如果当前浏览器设置的语言不存在多语言配置文件，则默认中文)，Chrome插件的多语言只能根据当前浏览器设置的语言来设定，无法通过代码更改语言</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;default_locale&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;zh_CN&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6A737D;">//内容安全政策，V2的value是字符串，V3是对象</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;content_security_policy&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//原文：此政策涵盖您的扩展程序中的页面，包括 html 文件和服务人员；具体不是很明白，但是参数值得是self，即当前自己</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;extension_pages&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;script-src &#39;self&#39;; object-src &#39;self&#39;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">//原文：此政策涵盖您的扩展程序使用的任何[沙盒扩展程序页面]；具体不是很明白，但是参数值得是self，即当前自己</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;sandbox&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;sandbox allow-scripts; script-src &#39;self&#39;; object-src &#39;self&#39;&quot;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6A737D;">//key，发布插件后会给一个key，把那个key的值放这里</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;key&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;xxx&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//icon，浏览器扩展程序管理里面的图标、浏览器右侧插件图标点开的下拉菜单展示的已开启插件的图标、以及插件详情页的标签卡的那个小图标</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;icons&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;16&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;static/img/logo-16.png&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;19&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;static/img/logo-19.png&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;38&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;static/img/logo-38.png&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;48&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;static/img/logo-48.png&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;128&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;static/img/logo-128.png&quot;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//背景页，后台脚本引入，v2是scripts:[xxx,xxx]，可以引入多个js文件，v3是service_worker：&#39;xxx&#39;，只能引入一个js，v3版最大的改动应该就是这里了，扩展程序管理界面的插件的那个“背景页”也将变成“Service Worker”，改动之后background.js将和浏览器完全分离，即无法调用window和ducoment对象</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//可以看介绍：</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//1、//developer.chrome.com/docs/extensions/mv3/intro/mv3-migration/#background-service-workers；</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//2、//developer.chrome.com/docs/extensions/mv3/migrating_to_service_workers/</span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;background&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;service_worker&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;background.js&quot;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//注入脚本，值是个数组对象，可以有多个对象</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;content_scripts&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//每个对象代表一个注入的配置</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">	    </span><span style="color:#6A737D;">//需要在指定页面注入的js脚本文件</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;js&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;xxx.js&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;xxx.js&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      ],</span></span>
<span class="line"><span style="color:#24292E;">	   </span><span style="color:#6A737D;">//需要注入js脚本文件的指定页面</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;matches&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;https://*.csdn.net/*&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;https://*.xxx.com/*&quot;</span></span>
<span class="line"><span style="color:#24292E;">      ],</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#6A737D;">//不允许注入js脚本文件的指定页面</span></span>
<span class="line"><span style="color:#24292E;"> 	   </span><span style="color:#005CC5;">&quot;exclude_matches&quot;</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;https://*.xxx.com/*&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">	   </span><span style="color:#6A737D;">//什么时候注入的js脚本，document_start=页面加载开始时，document_end=页面加载结束时</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;run_at&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;document_end&quot;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//API权限，需要使用某些API时需要设置该API权限才行</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;permissions&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">	  </span><span style="color:#032F62;">&quot;contextMenus&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//自定义创建右键菜单API</span></span>
<span class="line"><span style="color:#24292E;">	  </span><span style="color:#032F62;">&quot;tabs&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//tab选项卡API</span></span>
<span class="line"><span style="color:#24292E;">	  </span><span style="color:#032F62;">&quot;storage&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//缓存API</span></span>
<span class="line"><span style="color:#24292E;">	  </span><span style="color:#032F62;">&quot;webRequest&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//监听浏览器请求API</span></span>
<span class="line"><span style="color:#24292E;">	  </span><span style="color:#B31D28;font-style:italic;">...</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//主机权限，在背景页backgroud.js里面或者popup页面走请求时，请求域名的白名单权限，如果没添加的则请求会失败</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;host_permissions&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;https://*.csdn.net/*&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;https://*.xxx.com/*&quot;</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//动作API，原文：在 Manifest V2 中，有两种不同的 API 来实现操作： \`&quot;browser_action&quot;\` 和 \`&quot;page_action&quot;\` . </span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//这些 API 在引入时扮演了不同的角色，但随着时间的推移它们变得多余，因此在 Manifest V3 中，我们将它们统一为单个 \`&quot;action&quot;\` API； </span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//配置上action:{}，可以是空对象，但是action这个配置得有，不然的话扩展程序管理界面的“Service Worker”将显示无效，</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//且无法点开“Service Worker”的开发者工具控制台以及点击插件图标时触发的这个方法会报错：chrome.action.onClicked.addListener，</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;action&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//通过网络访问的资源，v2是提供一个数组，v3得提供数组对象，每个对象可以映射到一组资源到一组 URL 或扩展 ID</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;web_accessible_resources&quot;</span><span style="color:#24292E;">: [{</span></span>
<span class="line"><span style="color:#24292E;">  	</span><span style="color:#6A737D;">//允许访问的资源路径，数组传多个参数</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;resources&quot;</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;*/img/xxx.png&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;*/img/xxx2.png&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">	</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">//允许访问资源的页面</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;matches&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;https://*.csdn.net/*&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;https://*.xxx.com/*&quot;</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">  }]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br></div></div>`,1),e=[o];function c(t,r,E,y,i,u){return n(),a("div",null,e)}const m=s(l,[["render",c]]);export{b as __pageData,m as default};
