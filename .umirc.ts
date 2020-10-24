import { defineConfig } from 'dumi'

export default defineConfig({
  title: 'Monki UI',
  favicon: 'https://img.icons8.com/ultraviolet/2x/year-of-monkey.png',
  logo: 'https://img.icons8.com/ultraviolet/2x/year-of-monkey.png',
  base: '/monki-ui',
  publicPath: '/monki-ui/',
  mode: 'site',
  exportStatic: {}, // 将所有路由输出为 HTML 目录结构，以免刷新页面时 404
  // more config: https://d.umijs.org/config
})
