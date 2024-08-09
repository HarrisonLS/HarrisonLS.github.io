import{_ as s,o as a,c as n,O as e}from"./chunks/framework.5c60c28a.js";const B=JSON.parse('{"title":"package.json 依赖配置安装","description":"","frontmatter":{},"headers":[],"relativePath":"skill/package/index.md","filePath":"skill/package/index.md"}'),l={name:"skill/package/index.md"},p=e(`<h1 id="package-json-依赖配置安装" tabindex="-1">package.json 依赖配置安装 <a class="header-anchor" href="#package-json-依赖配置安装" aria-label="Permalink to &quot;package.json 依赖配置安装&quot;">​</a></h1><h2 id="tailwind-css" tabindex="-1">Tailwind CSS <a class="header-anchor" href="#tailwind-css" aria-label="Permalink to &quot;Tailwind CSS&quot;">​</a></h2><p><a href="https://www.tailwindcss.cn/docs/guides/vite#react" target="_blank" rel="noreferrer">Tailwind官网安装</a></p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">install</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-D</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">tailwindcss</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">postcss</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">autoprefixer</span></span>
<span class="line"><span style="color:#FFCB6B;">npx</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">tailwindcss</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">init</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-p</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="typescript" tabindex="-1">typescript <a class="header-anchor" href="#typescript" aria-label="Permalink to &quot;typescript&quot;">​</a></h2><p>安装 typescript 相关包</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">install</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">typescript</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">ts-node</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">@types/node</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--save-dev</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>创建 tsconfig.json</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npx</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">tsc</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--init</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><a href="/frontEnd/typescript/">typescript.json 具体配置</a></p><h2 id="babel" tabindex="-1">babel <a class="header-anchor" href="#babel" aria-label="Permalink to &quot;babel&quot;">​</a></h2><h3 id="babel-standalone包" tabindex="-1">@babel/standalone包 <a class="header-anchor" href="#babel-standalone包" aria-label="Permalink to &quot;@babel/standalone包&quot;">​</a></h3><p>Babel 的一个独立构建版本，它允许你在浏览器和其他非 Node.js 环境中使用 Babel</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 安装包本身与类型注释</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">i</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--save</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">@babel/standalone</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">i</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--save-dev</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">@types/babel__standalone</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,14),o=[p];function t(r,c,i,d,y,b){return a(),n("div",null,o)}const u=s(l,[["render",t]]);export{B as __pageData,u as default};
