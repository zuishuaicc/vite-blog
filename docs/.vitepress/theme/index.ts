import DefaultTheme from 'vitepress/theme-without-fonts'
import 'viewerjs/dist/viewer.min.css';
import imageViewer from 'vitepress-plugin-image-viewer';
import vImageViewer from 'vitepress-plugin-image-viewer/lib/vImageViewer.vue';
import { useData, useRoute } from 'vitepress';
import './custom.css'
import Layout from './Layout.vue'
import { toRefs } from 'vue';
import giscusTalk from 'vitepress-plugin-comment-with-giscus';

export default {
  ...DefaultTheme,
  Layout,
  enhanceApp(ctx: any) {
    DefaultTheme.enhanceApp(ctx);
    // 注册全局组件，如果你不想使用也可以不添加
    ctx.app.component('vImageViewer', vImageViewer);
  },
  setup() {
    // 获取路由
    const route = useRoute();
    // 使用图片预览插件
    imageViewer(route);
    // 获取前言和路由
    const { frontmatter } = toRefs(useData());

    // 评论组件 - https://giscus.app/
    giscusTalk({
      repo: 'zuishuaicc/vite-blog',
      repoId: 'R_kgDOL4Weng',
      category: 'General', // 默认: `General`
      categoryId: 'DIC_kwDOL4Wens4C0pIY',
      mapping: 'pathname', // 默认: `pathname`
      inputPosition: 'bottom', // 默认: `top`
      lang: 'zh-CN', // 默认: `zh-CN`
      // i18n 国际化设置（注意：该配置会覆盖 lang 设置的默认语言）
      // 配置为一个对象，里面为键值对组：
      // [你的 i18n 配置名称]: [对应 Giscus 中的语言包名称]
      locales: {
        'zh-Hans': 'zh-CN',
        'en-US': 'en'
      },
      homePageShowComment: false, // 首页是否显示评论区，默认为否
      lightTheme: 'light', // 默认: `light`
      darkTheme: 'transparent_dark', // 默认: `transparent_dark`
      // ...
    }, {
      frontmatter, route
    },
      // 是否全部页面启动评论区。
      // 默认为 true，表示启用，此参数可忽略；
      // 如果为 false，表示不启用。
      // 可以在页面使用 `comment: true` 前言单独启用
      true
    );
  }
}