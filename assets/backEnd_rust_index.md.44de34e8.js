import{_ as s,o as a,c as n,O as l}from"./chunks/framework.932f8bee.js";const u=JSON.parse('{"title":"Rust 相关知识","description":"","frontmatter":{},"headers":[],"relativePath":"backEnd/rust/index.md","filePath":"backEnd/rust/index.md"}'),e={name:"backEnd/rust/index.md"},o=l(`<h1 id="rust-相关知识" tabindex="-1">Rust 相关知识 <a class="header-anchor" href="#rust-相关知识" aria-label="Permalink to &quot;Rust 相关知识&quot;">​</a></h1><h2 id="参考文档" tabindex="-1">参考文档 <a class="header-anchor" href="#参考文档" aria-label="Permalink to &quot;参考文档&quot;">​</a></h2><ul><li><a href="https://www.rustwiki.org.cn/zh-CN/book/appendix-07-nightly-rust.html" target="_blank" rel="noreferrer">Rust 程序设计语言 中文版</a></li><li><a href="https://rustwiki.org/" target="_blank" rel="noreferrer">Rust 中文站点</a></li></ul><h3 id="cargo-创建项目" tabindex="-1">Cargo 创建项目 <a class="header-anchor" href="#cargo-创建项目" aria-label="Permalink to &quot;Cargo 创建项目&quot;">​</a></h3><p>Cargo 是 Rust 的构建系统和包管理器。大多数 Rustacean 们使用 Cargo 来管理他们的 Rust 项目。</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 查看版本号</span></span>
<span class="line"><span style="color:#FFCB6B;">cargo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--version</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 创建项目</span></span>
<span class="line"><span style="color:#FFCB6B;">cargo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">hello-cargo</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">hello-cargo</span></span>
<span class="line"><span style="color:#FFCB6B;">├──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Cargo.lock</span></span>
<span class="line"><span style="color:#FFCB6B;">├──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Cargo.toml</span></span>
<span class="line"><span style="color:#FFCB6B;">├──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">src</span></span>
<span class="line"><span style="color:#FFCB6B;">│  </span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">└──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">main.rs</span></span>
<span class="line"><span style="color:#FFCB6B;">└──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">target</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">├──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">CACHEDIR.TAG</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">└──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">debug</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 构建项目</span></span>
<span class="line"><span style="color:#FFCB6B;">cargo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 在一个命令中同时编译代码并运行生成的可执行文件</span></span>
<span class="line"><span style="color:#FFCB6B;">cargo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 快速检查代码确保其可以编译，但并不产生可执行文件</span></span>
<span class="line"><span style="color:#FFCB6B;">cargo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">check</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 在 target/release 而不是 target/debug 下生成可执行文件。</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 这些优化可以让 Rust 代码运行的更快，不过启用这些优化也需要消耗更长的编译时间。</span></span>
<span class="line"><span style="color:#FFCB6B;">cargo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">build</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--release</span></span></code></pre></div><h3 id="crate-增加功能依赖库" tabindex="-1">crate 增加功能依赖库 <a class="header-anchor" href="#crate-增加功能依赖库" aria-label="Permalink to &quot;crate 增加功能依赖库&quot;">​</a></h3><p>在 Cargo.toml 的[dependencies]中添加 rand 依赖</p><div class="language-toml"><button title="Copy Code" class="copy"></button><span class="lang">toml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#FFCB6B;">package</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">guessing_game</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">version </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0.1.0</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">edition </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2021</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># See more keys and their definitions at https://doc.rust-lang.org/cargo/reference/manifest.html</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#FFCB6B;">dependencies</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">rand </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0.8.3</span><span style="color:#89DDFF;">&quot;</span></span></code></pre></div><p>使用 cargo build 命令即可下载依赖包后完成编译</p><h4 id="cargo-lock" tabindex="-1">Cargo.lock <a class="header-anchor" href="#cargo-lock" aria-label="Permalink to &quot;Cargo.lock&quot;">​</a></h4><p>同目录下的 Cargo.lock 确保版本相同，使得重新构建都会产生相同的结果</p><p>而 cargo update 命令则会忽略 Cargo.lock 文件，并计算出所有符合 Cargo.toml 声明的最新版本。 比如说 rand 的当前版本设定为 0.8.3，那么 cargo update 回去查找大于或等于 0.8.3 而小于 0.9.0 的版本。</p><h3 id="疑难杂症" tabindex="-1">疑难杂症 <a class="header-anchor" href="#疑难杂症" aria-label="Permalink to &quot;疑难杂症&quot;">​</a></h3><h4 id="添加dependencies依赖进行cargo-build后一直等待" tabindex="-1">添加dependencies依赖进行cargo build后一直等待 <a class="header-anchor" href="#添加dependencies依赖进行cargo-build后一直等待" aria-label="Permalink to &quot;添加dependencies依赖进行cargo build后一直等待&quot;">​</a></h4><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"></span></code></pre></div>`,16),p=[o];function t(c,r,i,C,y,d){return a(),n("div",null,p)}const h=s(e,[["render",t]]);export{u as __pageData,h as default};