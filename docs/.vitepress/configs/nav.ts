import type { DefaultTheme } from "vitepress";

export const nav: DefaultTheme.Config["nav"] = [
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
          { text: "umi", link: "/skill/umi/" },
          { text: "包管理", link: "/skill/npm/" },
        ],
      },
      {
        text: "环境配置与软件安装",
        items: [
          { text: "VS Code 插件与配置", link: "/skill/vscode/" },
          { text: "Mac OS 平台", link: "/skill/mac/" },
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
];
