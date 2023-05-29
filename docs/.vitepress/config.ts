import { defineConfig } from 'vitepress'

import { head, nav, sidebar, algolia } from './configs'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '五目十行',
  description: 'A VitePress Site',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '导航', link: '/nav', activeMatch: '^/nav' },
      {
        text: '前端',
        items: [
          { text: 'JavaScript 基础知识', link: '/frontEnd/javascript/type' },
          { text: 'TypeScript 基础知识', link: '/frontEnd/typescript/' },
          { text: 'CSS 理论知识', link: '/frontEnd/css/' },
          { text: 'ES6 常用知识', link: '/frontEnd/es6/' },
          { text: '浏览器相关知识', link: '/frontEnd/browser/' },
          { text: '面试宝典', link: '/frontEnd/interview/js' },
          { text: '设计模式', link: '/frontEnd/dm/' },
        ],
        activeMatch: '^/frontEnd',
      },
      {
        text: '框架使用',
        items: [
          {
            text: '工作流',
            items: [
              { text: 'React', link: '/framework/workflow/react/' },
              { text: 'Vue', link: '/framework/workflow/vue' },
              { text: 'NextJS', link: '/framework/workflow/nextjs' },
              { text: 'Taro', link: '/framework/workflow/taro' },
            ],
          },
          {
            text: '状态管理',
            items: [
              { text: 'Redux', link: '/framework/state/redux/' },
              // { text: 'React', link: '/framework/react' }
            ],
          },
        ],
      },
      {
        text: '工具&技巧',
        items: [
          {
            text: '提效工具',
            items: [
              { text: 'Git', link: '/skill/react' },
              { text: 'Npm', link: '/skill/react' },
              { text: 'Yarn', link: '/skill/react' },
              { text: 'Pnpm', link: '/skill/react' },
            ],
          },
          {
            text: '环境配置与设置',
            items: [
              { text: 'Git', link: '/skill/react' },
              { text: 'Npm', link: '/skill/react' },
              { text: 'Yarn', link: '/skill/react' },
              { text: 'Pnpm', link: '/skill/react' },
            ],
          },
        ],
      },
      {
        text: '算法',
        items: [
          { text: 'LeetCode记录', link: '/algorithm/leetcode/all' },
          { text: 'huawei', link: '/algorithm/huawei/niuke' },
        ],
      },
    ],
    sidebar: {
      '/frontEnd/': [
        {
          text: 'JavaScript 基础知识',
          collapsed: false,
          items: [
            { text: '数据类型及方法', link: '/frontEnd/javascript/type' },
            // { text: "引用类型的拷贝", link: "/frontEnd/javascript/clone" },
            // { text: "类型转换", link: "/frontEnd/javascript/conversions" },
            // { text: "原型和原型链", link: "/frontEnd/javascript/prototype" },
            // { text: "继承", link: "/frontEnd/javascript/inherit" },
          ],
        },
        {
          text: '设计模式',
          link: 'frontEnd/dm/',
        },
        {
          text: 'HTML / CSS',
          collapsed: false,
          items: [
            { text: 'HTML 理论知识点', link: '/frontEnd/html/' },
            { text: 'CSS 理论知识点', link: '/frontEnd/css/' },
          ],
        },
        {
          text: 'TypeScript',
          collapsed: false,
          items: [
            { text: 'TypeScript 理论知识点', link: '/frontEnd/typescript/' },
            // { text: "CSS 理论知识点", link: "/frontEnd/css/" },
          ],
        },
        {
          text: '面试宝典',
          collapsed: false,
          items: [
            { text: 'Javascript相关', link: '/frontEnd/interview/js' },
            { text: '浏览器相关', link: '/frontEnd/interview/browser' },
          ],
        },
      ],
      '/framework': [
        {
          text: 'workflow工作流',
          collapsed: false,
          items: [
            { text: 'React', link: '/framework/workflow/react/' },
            { text: 'Vue', link: '/framework/workflow/vue/' },
          ],
        },
        {
          text: '状态管理',
          collapsed: false,
          items: [
            { text: 'Redux', link: '/framework/state/redux/' },
            { text: 'Mobx', link: '/framework/state/mobx/' },
          ],
        },
      ],
      '/algorithm': [
        {
          text: '算法题目记录',
          collapsed: false,
          items: [
            { text: 'LeetCode算法题', link: '/algorithm/leetcode/all' },
            { text: 'huawei牛客', link: '/algorithm/huawei/niuke' },
          ],
        },
      ],
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
  },
})
