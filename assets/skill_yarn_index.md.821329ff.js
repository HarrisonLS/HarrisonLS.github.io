import{_ as a,o as s,c as n,O as e}from"./chunks/framework.451c4d8b.js";const u=JSON.parse('{"title":"Yarn 包管理工具","description":"","frontmatter":{},"headers":[],"relativePath":"skill/yarn/index.md","filePath":"skill/yarn/index.md"}'),l={name:"skill/yarn/index.md"},p=e(`<h1 id="yarn-包管理工具" tabindex="-1">Yarn 包管理工具 <a class="header-anchor" href="#yarn-包管理工具" aria-label="Permalink to &quot;Yarn 包管理工具&quot;">​</a></h1><p><a href="https://www.jianshu.com/p/f1d96bdc545b" target="_blank" rel="noreferrer">Yarn 构建工具入门基础</a></p><h3 id="基础操作" tabindex="-1">基础操作 <a class="header-anchor" href="#基础操作" aria-label="Permalink to &quot;基础操作&quot;">​</a></h3><br><h4 id="初始化" tabindex="-1">初始化 <a class="header-anchor" href="#初始化" aria-label="Permalink to &quot;初始化&quot;">​</a></h4><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">init</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="添加依赖" tabindex="-1">添加依赖 <a class="header-anchor" href="#添加依赖" aria-label="Permalink to &quot;添加依赖&quot;">​</a></h4><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">add</span><span style="color:#BABED8;"> [package]</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">add</span><span style="color:#BABED8;"> [package]@</span><span style="color:#89DDFF;">[</span><span style="color:#BABED8;">version</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">add</span><span style="color:#BABED8;"> [package]@</span><span style="color:#89DDFF;">[</span><span style="color:#BABED8;">tag</span><span style="color:#89DDFF;">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="更新依赖" tabindex="-1">更新依赖 <a class="header-anchor" href="#更新依赖" aria-label="Permalink to &quot;更新依赖&quot;">​</a></h4><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">upgrade</span><span style="color:#BABED8;"> [package]</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">upgrade</span><span style="color:#BABED8;"> [package]@</span><span style="color:#89DDFF;">[</span><span style="color:#BABED8;">version</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">upgrade</span><span style="color:#BABED8;"> [package]@</span><span style="color:#89DDFF;">[</span><span style="color:#BABED8;">tag</span><span style="color:#89DDFF;">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="删除依赖" tabindex="-1">删除依赖 <a class="header-anchor" href="#删除依赖" aria-label="Permalink to &quot;删除依赖&quot;">​</a></h4><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">remove</span><span style="color:#BABED8;"> [package]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="安装所有依赖" tabindex="-1">安装所有依赖 <a class="header-anchor" href="#安装所有依赖" aria-label="Permalink to &quot;安装所有依赖&quot;">​</a></h4><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">yarn</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">//</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">or</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">install</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,14),r=[p];function o(t,c,i,d,y,h){return s(),n("div",null,r)}const b=a(l,[["render",o]]);export{u as __pageData,b as default};
