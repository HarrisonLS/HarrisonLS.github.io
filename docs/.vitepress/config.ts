import { defineConfig } from "vitepress";

import { nav, sidebar, algolia } from "./configs";

const siteUrl = "https://harrisonls.github.io";

function getCanonicalPath(relativePath: string) {
  if (relativePath === "index.md") return "/";
  if (relativePath.endsWith("/index.md")) {
    return `/${relativePath.slice(0, -"index.md".length)}`;
  }

  return `/${relativePath.replace(/\.md$/, ".html")}`;
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "五目十行",
  description: "Harrison 的前端开发知识库与技术资源导航",
  sitemap: {
    hostname: siteUrl,
  },
  transformHead({ pageData }) {
    if (pageData.isNotFound) return [];

    return [
      [
        "link",
        {
          rel: "canonical",
          href: `${siteUrl}${getCanonicalPath(pageData.relativePath)}`,
        },
      ],
    ];
  },
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
    search: {
      provider: "algolia",
      options: algolia,
    },

    nav: nav,
    sidebar: sidebar,

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/HarrisonLS/HarrisonLS.github.io",
      },
    ],
  },
});
