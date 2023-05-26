import{_ as s,o as a,c as n,O as o}from"./chunks/framework.62a149d4.js";const C=JSON.parse('{"title":"javascript 相关","description":"","frontmatter":{},"headers":[],"relativePath":"frontEnd/interview/js.md","filePath":"frontEnd/interview/js.md"}'),l={name:"frontEnd/interview/js.md"},p=o(`<h1 id="javascript-相关" tabindex="-1">javascript 相关 <a class="header-anchor" href="#javascript-相关" aria-label="Permalink to &quot;javascript 相关&quot;">​</a></h1><h2 id="请依次输出代码结果系列" tabindex="-1">请依次输出代码结果系列 <a class="header-anchor" href="#请依次输出代码结果系列" aria-label="Permalink to &quot;请依次输出代码结果系列&quot;">​</a></h2><h3 id="函数表达式和函数声明的区别" tabindex="-1">函数表达式和函数声明的区别 <a class="header-anchor" href="#函数表达式和函数声明的区别" aria-label="Permalink to &quot;函数表达式和函数声明的区别&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> foo </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">foo1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#82AAFF;">foo</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> foo </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">foo2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#82AAFF;">foo</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">foo</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">foo1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#82AAFF;">foo</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">foo</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">foo2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#82AAFF;">foo</span><span style="color:#A6ACCD;">()</span></span></code></pre></div><details class="details custom-block"><summary>结果及解释</summary><p>函数表达式相对于函数声明的一个重要区别是函数声明在代码解析阶段就会被提升（函数声明提升），而函数表达式则需要在赋值语句执行到达时才会创建函数对象</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 结果打印：</span></span>
<span class="line"><span style="color:#A6ACCD;">// foo1</span></span>
<span class="line"><span style="color:#A6ACCD;">// foo2</span></span>
<span class="line"><span style="color:#A6ACCD;">// foo2</span></span>
<span class="line"><span style="color:#A6ACCD;">// foo2</span></span></code></pre></div></details>`,5),e=[p];function t(c,r,y,F,D,i){return a(),n("div",null,e)}const d=s(l,[["render",t]]);export{C as __pageData,d as default};
