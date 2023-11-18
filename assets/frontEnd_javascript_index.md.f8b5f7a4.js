import{_ as a,o as e,c as s,R as n}from"./chunks/framework.385be6c2.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"frontEnd/javascript/index.md","filePath":"frontEnd/javascript/index.md"}'),r={name:"frontEnd/javascript/index.md"},t=n(`<h3 id="基础" tabindex="-1">基础 <a class="header-anchor" href="#基础" aria-label="Permalink to &quot;基础&quot;">​</a></h3><h4 id="flex-1是什么含义" tabindex="-1">flex：1是什么含义 <a class="header-anchor" href="#flex-1是什么含义" aria-label="Permalink to &quot;flex：1是什么含义&quot;">​</a></h4><p><a href="https://blog.csdn.net/weixin_43554584/article/details/113839778" target="_blank" rel="noreferrer">https://blog.csdn.net/weixin_43554584/article/details/113839778</a> flex实际上是flex-grow、flex-shrink和flex-basis三个属性的缩写。</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">flex:1  ==&gt; flex: 1 1 auto</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="backdrop-filter如何使用" tabindex="-1">backdrop-filter如何使用？ <a class="header-anchor" href="#backdrop-filter如何使用" aria-label="Permalink to &quot;backdrop-filter如何使用？&quot;">​</a></h4><p><a href="https://cloud.tencent.com/developer/section/1072019" target="_blank" rel="noreferrer">https://cloud.tencent.com/developer/section/1072019</a></p><h4 id="rem与em的区别" tabindex="-1">rem与em的区别 <a class="header-anchor" href="#rem与em的区别" aria-label="Permalink to &quot;rem与em的区别&quot;">​</a></h4><p>rem的大小是根据html目录的字体大小进行计算的 em的大小是根据父元素的字体大小设置的 <a href="https://blog.csdn.net/qq_35432904/article/details/51804227" target="_blank" rel="noreferrer">https://blog.csdn.net/qq_35432904/article/details/51804227</a></p><h3 id="css-in-js方案" tabindex="-1">CSS-In-JS方案 <a class="header-anchor" href="#css-in-js方案" aria-label="Permalink to &quot;CSS-In-JS方案&quot;">​</a></h3><h4 id="emotion" tabindex="-1">emotion <a class="header-anchor" href="#emotion" aria-label="Permalink to &quot;emotion&quot;">​</a></h4><p><a href="https://emotion.sh/docs/introduction" target="_blank" rel="noreferrer">emotion</a></p><h4 id="styled-components" tabindex="-1">styled-components <a class="header-anchor" href="#styled-components" aria-label="Permalink to &quot;styled-components&quot;">​</a></h4><p><a href="https://juejin.cn/post/6844903878580764686" target="_blank" rel="noreferrer">styled-components:前端组件拆分新思路</a></p><h3 id="控制页面滚动条样式" tabindex="-1">控制页面滚动条样式 <a class="header-anchor" href="#控制页面滚动条样式" aria-label="Permalink to &quot;控制页面滚动条样式&quot;">​</a></h3><p>reference：<a href="https://www.cnblogs.com/momo798/p/10143855.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/momo798/p/10143855.html</a></p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">::</span><span style="color:#C792EA;">-webkit-scrollbar</span><span style="color:#A6ACCD;">                滚动条整体部分</span></span>
<span class="line"><span style="color:#89DDFF;">::</span><span style="color:#C792EA;">-webkit-scrollbar-thumb</span><span style="color:#A6ACCD;">          滚动条里面的小方块，能向上向下移动（或向左向右移动）</span></span>
<span class="line"><span style="color:#89DDFF;">::</span><span style="color:#C792EA;">-webkit-scrollbar-track</span><span style="color:#A6ACCD;">          滚动条的轨道（里面装有Thumb）</span></span>
<span class="line"><span style="color:#89DDFF;">::</span><span style="color:#C792EA;">-webkit-scrollbar-button</span><span style="color:#A6ACCD;">         滚动条的轨道的两端按钮，由于通过点击微调小方块的位置。</span></span>
<span class="line"><span style="color:#89DDFF;">::</span><span style="color:#C792EA;">-webkit-scrollbar-track-piece</span><span style="color:#A6ACCD;">    内层轨道，滚动条中间部分</span></span>
<span class="line"><span style="color:#89DDFF;">::</span><span style="color:#C792EA;">-webkit-scrollbar-corner</span><span style="color:#A6ACCD;">         边角，即垂直滚动条和水平滚动条相交的地方</span></span>
<span class="line"><span style="color:#89DDFF;">::</span><span style="color:#C792EA;">-webkit-resizer</span><span style="color:#A6ACCD;">                  两个滚动条的交汇处上用于拖动调整元素大小的小控件</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="unocss" tabindex="-1">UnoCSS <a class="header-anchor" href="#unocss" aria-label="Permalink to &quot;UnoCSS&quot;">​</a></h2><p><a href="https://antfu.me/posts/reimagine-atomic-css-zh#%E4%BB%80%E4%B9%88%E6%98%AF%E5%8E%9F%E5%AD%90%E5%8C%96-css" target="_blank" rel="noreferrer">https://antfu.me/posts/reimagine-atomic-css-zh#%E4%BB%80%E4%B9%88%E6%98%AF%E5%8E%9F%E5%AD%90%E5%8C%96-css</a></p><h2 id="常用样式" tabindex="-1">常用样式 <a class="header-anchor" href="#常用样式" aria-label="Permalink to &quot;常用样式&quot;">​</a></h2><h4 id="文字添加下划线" tabindex="-1">文字添加下划线 <a class="header-anchor" href="#文字添加下划线" aria-label="Permalink to &quot;文字添加下划线&quot;">​</a></h4><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">text-decoration</span><span style="color:#A6ACCD;">: underline;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,21),l=[t];function o(i,c,p,d,h,b){return e(),s("div",null,l)}const f=a(r,[["render",o]]);export{u as __pageData,f as default};
