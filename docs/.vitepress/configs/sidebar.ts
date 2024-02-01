import type { DefaultTheme } from "vitepress";

export const sidebar: DefaultTheme.Config["sidebar"] = {
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
        { text: "手写专题", link: "/frontEnd/interview/hand_writing" },
        { text: "问题记录", link: "/frontEnd/interview/question" },
      ],
    },
    {
      text: "概念与业务应用",
      collapsed: false,
      items: [
        { text: "微前端", link: "/frontEnd/microFE/" },
        { text: "业务应用记录", link: "/frontEnd/application/" },
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
    {
      text: "操作系统",
      collapsed: false,
      items: [
        { text: "基础知识", link: "backEnd/os/index" },
        { text: "问题解决", link: "backEnd/os/solved" },
      ],
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
        { text: "Umi", link: "/framework/workflow/umi/" },
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
        { text: "nvm", link: "/skill/nvm/" },
        { text: "在线实用工具", link: "/skill/git/" },
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
    {
      text: "环境配置与软件安装",
      collapsed: false,
      items: [
        { text: "VS Code 插件与配置", link: "/skill/vscode/" },
        { text: "Mac OS 平台", link: "/skill/mac/" },
        { text: "package.json依赖配置", link: "/skill/package/" },
        // { text: "Mac OS 平台", link: "/skill/mac/" }
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
};
