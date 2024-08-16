import{_ as s,o as n,c as a,O as l}from"./chunks/framework.c3a12751.js";const B=JSON.parse('{"title":"问题解决","description":"","frontmatter":{},"headers":[],"relativePath":"backEnd/os/solved.md","filePath":"backEnd/os/solved.md"}'),e={name:"backEnd/os/solved.md"},p=l(`<h1 id="问题解决" tabindex="-1">问题解决 <a class="header-anchor" href="#问题解决" aria-label="Permalink to &quot;问题解决&quot;">​</a></h1><h2 id="关闭-node-或其他服务" tabindex="-1">关闭 node 或其他服务 <a class="header-anchor" href="#关闭-node-或其他服务" aria-label="Permalink to &quot;关闭 node 或其他服务&quot;">​</a></h2><ol><li>使用 kill-port 第三方包</li></ol><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npx</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">kill-port</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">3000</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">5000</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">9000</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># or</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># install package globally</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">install</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--global</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">kill-port</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># stop process on port 3000</span></span>
<span class="line"><span style="color:#82AAFF;">kill</span><span style="color:#BABED8;">-port </span><span style="color:#C3E88D;">--port</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">3000</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ol start="2"><li>使用 lsof 查看服务端口，用 kill 命令杀进程。</li></ol><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 查看端口对应具体的进程PID</span></span>
<span class="line"><span style="color:#FFCB6B;">lsof</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-i</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">:3000</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 通过PID强制杀死该进程服务</span></span>
<span class="line"><span style="color:#82AAFF;">kill</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-9</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">PI</span><span style="color:#BABED8;">D</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,6),o=[p];function t(r,c,i,d,y,b){return n(),a("div",null,o)}const u=s(e,[["render",t]]);export{B as __pageData,u as default};