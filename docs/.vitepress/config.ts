import { defineConfig } from "vitepress";

import { head, nav, sidebar, algolia } from "./configs";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "五目十行",
  description: "A VitePress Site",

  /* markdown 配置 */
  markdown: {
    lineNumbers: true,
  },
  lang: "zh-CN",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline: { level: [1, 4] },

    nav: nav,
    sidebar: sidebar,

    algolia,

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
