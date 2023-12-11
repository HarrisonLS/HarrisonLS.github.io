# 微前端

## 概念及原理

### 页面渲染及浏览器 IPC

browser 主进程工作机制，:laughing:联想“输入 URL 地址，浏览器的整个工作过程”问题。

![browser进程](/image/microFE/browser进程.webp)

如果在 Renderer 进程中发起新的导航（例如用户点击链接标签进行跳转或者使用 JavaScript 执行 window.location = "https://new.site.com"），Renderer 进程会通过 IPC 告知 Browser 进程重复上述处理步骤，如果新导航处理的是不同站点的页面信息，则 Browserer 进程会启动新的 Renderer 进程进行页面渲染。不管是新开标签页还是提交导航，页面被加载后都会有生命周期的概念

![browser renderer进程](/image/microFE/renderer进程.webp)

## 环境搭建问题

- 快速创建 react 应用

  [react 项目脚手架](https://github.com/facebook/create-react-app)

```shell
# npx create-react-app my-app
# cd my-app
# npm start
npx create-react-app my-react-app

```

- 快速创建 vue 应用

  [vue 项目脚手架](https://cn.vuejs.org/guide/scaling-up/tooling.html)

```shell
npm create vue@latest

```

## iframe 方案

## npm 方案

## Web Components 方案
