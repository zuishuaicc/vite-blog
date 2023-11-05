// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme-without-fonts'
import './custom.css'
import Layout from './Layout.vue'

export default {
  ...DefaultTheme,
  Layout
}