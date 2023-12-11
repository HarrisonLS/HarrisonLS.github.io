import{_ as e,o as a,c as s,R as n}from"./chunks/framework.385be6c2.js";const r="/image/microFE/browser进程.webp",t="/image/microFE/renderer进程.webp",f=JSON.parse('{"title":"微前端","description":"","frontmatter":{},"headers":[],"relativePath":"frontEnd/microFE/index.md","filePath":"frontEnd/microFE/index.md"}'),l={name:"frontEnd/microFE/index.md"},o=n('<h1 id="微前端" tabindex="-1">微前端 <a class="header-anchor" href="#微前端" aria-label="Permalink to &quot;微前端&quot;">​</a></h1><h2 id="概念及原理" tabindex="-1">概念及原理 <a class="header-anchor" href="#概念及原理" aria-label="Permalink to &quot;概念及原理&quot;">​</a></h2><h3 id="页面渲染及浏览器-ipc" tabindex="-1">页面渲染及浏览器 IPC <a class="header-anchor" href="#页面渲染及浏览器-ipc" aria-label="Permalink to &quot;页面渲染及浏览器 IPC&quot;">​</a></h3><p>browser 主进程工作机制，😆联想“输入 URL 地址，浏览器的整个工作过程”问题。</p><p><img src="'+r+'" alt="browser进程"></p><p>如果在 Renderer 进程中发起新的导航（例如用户点击链接标签进行跳转或者使用 JavaScript 执行 window.location = &quot;<a href="https://new.site.com" target="_blank" rel="noreferrer">https://new.site.com</a>&quot;），Renderer 进程会通过 IPC 告知 Browser 进程重复上述处理步骤，如果新导航处理的是不同站点的页面信息，则 Browserer 进程会启动新的 Renderer 进程进行页面渲染。不管是新开标签页还是提交导航，页面被加载后都会有生命周期的概念</p><p><img src="'+t+`" alt="browser renderer进程"></p><h2 id="环境搭建问题" tabindex="-1">环境搭建问题 <a class="header-anchor" href="#环境搭建问题" aria-label="Permalink to &quot;环境搭建问题&quot;">​</a></h2><ul><li><p>快速创建 react 应用</p><p><a href="https://github.com/facebook/create-react-app" target="_blank" rel="noreferrer">react 项目脚手架</a></p></li></ul><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># npx create-react-app my-app</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># cd my-app</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># npm start</span></span>
<span class="line"><span style="color:#FFCB6B;">npx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">create-react-app</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">my-react-app</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li><p>快速创建 vue 应用</p><p><a href="https://cn.vuejs.org/guide/scaling-up/tooling.html" target="_blank" rel="noreferrer">vue 项目脚手架</a></p></li></ul><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">create</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vue@latest</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="iframe-方案" tabindex="-1">iframe 方案 <a class="header-anchor" href="#iframe-方案" aria-label="Permalink to &quot;iframe 方案&quot;">​</a></h2><h2 id="npm-方案" tabindex="-1">npm 方案 <a class="header-anchor" href="#npm-方案" aria-label="Permalink to &quot;npm 方案&quot;">​</a></h2><h2 id="web-components-方案" tabindex="-1">Web Components 方案 <a class="header-anchor" href="#web-components-方案" aria-label="Permalink to &quot;Web Components 方案&quot;">​</a></h2>`,15),p=[o];function i(c,d,m,h,u,b){return a(),s("div",null,p)}const C=e(l,[["render",i]]);export{f as __pageData,C as default};