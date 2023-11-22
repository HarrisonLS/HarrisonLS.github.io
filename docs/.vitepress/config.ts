import { defineConfig } from "vitepress";

import { head, nav, sidebar, algolia } from "./configs";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "五目十行",
  description: "A VitePress Site",
  head: [
    [
      "link",
      {
        href: "https://cdn.jsdelivr.net/npm/@docsearch/css@3",
        rel: "stylesheet",
      },
    ],
    ["script", { src: "https://cdn.jsdelivr.net/npm/@docsearch/js@3" }],
  ],
  /* markdown 配置 */
  markdown: {
    lineNumbers: true,
  },
  lang: "zh-CN",
  

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline: { level: [1, 4] },
    // search: {
    //   provider: "algolia",
    //   options: algolia,
    // },
    algolia,

    nav: nav,
    sidebar: sidebar,

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
