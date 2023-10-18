import { defineConfig } from "vitepress";

import { head, nav, sidebar, algolia } from "./configs";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "五目十行",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline: { level: [1, 4] },
    nav: [
      { text: "首页", link: "/" },
      { text: "导航", link: "/nav", activeMatch: "^/nav" },
      {
        text: "前端",
        items: [
          { text: "JavaScript 基础知识", link: "/frontEnd/javascript/type" },
          { text: "TypeScript 基础知识", link: "/frontEnd/typescript/" },
          { text: "CSS 理论知识", link: "/frontEnd/css/" },
          { text: "ES6 常用知识", link: "/frontEnd/es6/" },
          { text: "设计模式", link: "/frontEnd/dm/" },
          { text: "浏览器 基础知识", link: "/frontEnd/browser/" },
          { text: "计算机网络 基础知识", link: "/frontEnd/network/" },
          { text: "面试宝典", link: "/frontEnd/interview/js" },
        ],
        activeMatch: "^/frontEnd",
      },
      {
        text: "后端",
        items: [
          { text: "NestJS", link: "/backEnd/nest/" },
          { text: "Docker", link: "/backEnd/docker/" },
          { text: "Rust", link: "/backEnd/rust/" },
        ],
      },
      {
        text: "框架使用",
        items: [
          {
            text: "工作流",
            items: [
              { text: "React", link: "/framework/workflow/react/" },
              { text: "Vue", link: "/framework/workflow/vue/" },
              { text: "NextJS", link: "/framework/workflow/nextjs/" },
              { text: "Taro", link: "/framework/workflow/taro/" },
              { text: "IceJS", link: "/framework/workflow/ice/" },
            ],
          },
          {
            text: "状态管理",
            items: [
              { text: "Redux", link: "/framework/state/redux/" },
              // { text: 'React', link: '/framework/react' }
            ],
          },
        ],
      },
      {
        text: "工具&技巧",
        items: [
          {
            text: "提效工具",
            items: [
              { text: "Git", link: "/skill/git/" },
              { text: "包管理", link: "/skill/npm/" },
              { text: "umi", link: "/skill/umi/" },
            ],
          },
          {
            text: "环境配置与设置",
            items: [
              // { text: "Git", link: "/skill/react" },
              // { text: "Npm", link: "/skill/react" },
              // { text: "Yarn", link: "/skill/react" },
              // { text: "Pnpm", link: "/skill/react" },
            ],
          },
        ],
      },
      {
        text: "算法",
        items: [
          { text: "LeetCode记录", link: "/algorithm/leetcode/all" },
          // { text: 'huawei', link: '/algorithm/huawei/niuke' },
        ],
      },
      {
        text: "兴趣拓展",
        items: [{ text: "web GL记录", link: "/interest/webgl/" }],
      },
    ],
    sidebar: {
      "/frontEnd/": [
        {
          text: "JavaScript 基础知识",
          collapsed: false,
          items: [
            { text: "数据类型及方法", link: "/frontEnd/javascript/type" },
            { text: "事件循环", link: "/frontEnd/javascript/eventLoop" },
            // { text: "引用类型的拷贝", link: "/frontEnd/javascript/clone" },
            // { text: "类型转换", link: "/frontEnd/javascript/conversions" },
            { text: "原型和原型链", link: "/frontEnd/javascript/prototype" },
            // { text: "继承", link: "/frontEnd/javascript/inherit" },
          ],
        },
        {
          text: "设计模式",
          link: "frontEnd/dm/",
        },
        {
          text: "HTML / CSS",
          collapsed: false,
          items: [
            { text: "HTML 理论知识点", link: "/frontEnd/html/" },
            { text: "CSS 理论知识点", link: "/frontEnd/css/" },
          ],
        },
        {
          text: "浏览器/计算机网络",
          collapsed: false,
          items: [
            { text: "浏览器 理论知识点", link: "/frontEnd/browser/" },
            { text: "计算机网络 理论知识点", link: "/frontEnd/network/" },
          ],
        },
        {
          text: "TypeScript",
          collapsed: false,
          items: [
            { text: "TypeScript 理论知识点", link: "/frontEnd/typescript/" },
            // { text: "CSS 理论知识点", link: "/frontEnd/css/" },
          ],
        },
        {
          text: "面试宝典",
          collapsed: false,
          items: [
            { text: "Javascript相关", link: "/frontEnd/interview/js" },
            { text: "CSS相关", link: "/frontEnd/interview/css" },
            { text: "浏览器相关", link: "/frontEnd/interview/browser" },
            { text: "React相关", link: "/frontEnd/interview/react" },
            { text: "问题记录", link: "/frontEnd/interview/question" },
          ],
        },
      ],
      "/backEnd/": [
        {
          text: "NestJS",
          collapsed: false,
          items: [{ text: "基础知识", link: "backEnd/nest/index" }],
        },
        {
          text: "Rust",
          collapsed: false,
          items: [{ text: "基础知识", link: "backEnd/rust/index" }],
        },
        {
          text: "Docker",
          collapsed: false,
          items: [{ text: "基础知识", link: "backEnd/docker/index" }],
        },
      ],
      "/framework": [
        {
          text: "React",
          collapsed: false,
          items: [
            { text: "基础知识", link: "framework/workflow/react/index" },
            { text: "hooks", link: "framework/workflow/react/hooks" },
          ],
        },
        {
          text: "workflow工作流",
          collapsed: false,
          items: [
            { text: "Vue", link: "/framework/workflow/vue/" },
            { text: "IceJS", link: "/framework/workflow/ice/" },
          ],
        },
        {
          text: "状态管理",
          collapsed: false,
          items: [
            { text: "Redux", link: "/framework/state/redux/" },
            // { text: "Mobx", link: "/framework/state/mobx/" },
          ],
        },
      ],
      "/skill": [
        {
          text: "工具使用",
          collapsed: false,
          items: [
            { text: "Git", link: "/skill/git/" },
            { text: "Umi", link: "/skill/umi/" },
          ],
        },
        {
          text: "包管理",
          collapsed: false,
          items: [
            { text: "Npm", link: "/skill/npm/" },
            { text: "Pnpm", link: "/skill/pnpm/" },
            { text: "Yarn", link: "/skill/yarn/" },
          ],
        },
      ],
      "/algorithm": [
        {
          text: "算法题目记录",
          collapsed: false,
          items: [
            { text: "LeetCode算法题", link: "/algorithm/leetcode/all" },
            // { text: 'huawei牛客', link: '/algorithm/huawei/niuke' },
          ],
        },
      ],
      "/interest": [
        {
          text: "webGL",
          collapsed: false,
          items: [{ text: "基础记录", link: "/interest/webgl/" }],
        },
        {
          text: "SVG",
          collapsed: false,
          items: [{ text: "基础记录", link: "/interest/svg/" }],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
