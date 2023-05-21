import{_ as s,o as a,c as n,O as e}from"./chunks/framework.62a149d4.js";const F=JSON.parse('{"title":"写组件 demo","description":"","frontmatter":{"nav":"指南","group":"基础","order":5,"mobile":false},"headers":[],"relativePath":"nav.md","filePath":"nav.md"}'),t={name:"nav.md"},l=e(`<h1 id="写组件-demo" tabindex="-1">写组件 demo <a class="header-anchor" href="#写组件-demo" aria-label="Permalink to &quot;写组件 demo&quot;">​</a></h1><h3 id="直接嵌入文档" tabindex="-1">直接嵌入文档 <a class="header-anchor" href="#直接嵌入文档" aria-label="Permalink to &quot;直接嵌入文档&quot;">​</a></h3><p>配置 <code>inline</code> 为 <code>true</code> 则不会展示包裹器、直接在文档里嵌入 demo：</p><pre lang="markdown">\`\`\`jsx
/**
 * inline: true
 */

import React from &#39;react&#39;;

export default () =&gt; &lt;p&gt;我会被直接嵌入&lt;/p&gt;;
\`\`\`
</pre><p>就像这样：</p><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * inline: true</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> React </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">react</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">我会被直接嵌入</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;;</span></span></code></pre></div>`,6),o=[l];function p(c,r,i,d,y,D){return a(),n("div",null,o)}const m=s(t,[["render",p]]);export{F as __pageData,m as default};
