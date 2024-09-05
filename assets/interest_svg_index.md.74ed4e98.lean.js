import{_ as n,o as a,c as l,M as o}from"./chunks/framework.ba1267c7.js";const i=JSON.parse('{"title":"SVG 基础知识","description":"","frontmatter":{},"headers":[],"relativePath":"interest/svg/index.md","filePath":"interest/svg/index.md"}'),p={name:"interest/svg/index.md"};function t(e,s,r,c,D,y){return a(),l("div",null,s[0]||(s[0]=[o(`<h1 id="svg-基础知识" tabindex="-1">SVG 基础知识 <a class="header-anchor" href="#svg-基础知识" aria-label="Permalink to &quot;SVG 基础知识&quot;">​</a></h1><table><thead><tr><th>特点</th><th>SVG</th><th>Canvas</th></tr></thead><tbody><tr><td>绘图方式</td><td>使用 XML 描述图形，基于矢量的图形格式</td><td>通过 JavaScript 绘制图形，绘制的图形是位图</td></tr><tr><td>可缩放性</td><td>可以无限缩放而不失真</td><td>在缩放和变换时会有失真</td></tr><tr><td>功能和灵活性</td><td>是一个完整的文档对象模型（DOM），支持事件处理、动画效果、滤镜等高级功能，可以对图形进行平移、旋转、缩放等变换操作</td><td>提供基本的绘图 API，可以绘制线条、填充颜色、绘制图像等，但不支持高级功能如事件处理、动画效果等</td></tr><tr><td>性能</td><td>当图形比较复杂时，渲染的性能会受到影响，特别是在移动设备上，每个元素都会占用一定的内存和 CPU 资源，当 SVG 元素较多时，性能可能会下降</td><td>在处理大量图形时，性能较好，绘制的元素不会占用额外的内存和 CPU 资源</td></tr><tr><td>兼容性</td><td>在大多数现代浏览器中都有很好的支持，但在一些旧版本的浏览器中，对 SVG 的支持可能有限</td><td>在大多数现代浏览器中都有很好的支持，但在一些旧版本的浏览器中可能不被支持</td></tr></tbody></table><p>综上所述，SVG 适用于需要实现复杂交互和动态效果的图形，以及需要高质量缩放的场景。而 Canvas 适用于需要处理大量图形，以及对性能要求较高的场景。</p><h2 id="基础属性" tabindex="-1">基础属性 <a class="header-anchor" href="#基础属性" aria-label="Permalink to &quot;基础属性&quot;">​</a></h2><h3 id="viewbox" tabindex="-1"><a href="https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/viewBox" target="_blank" rel="noreferrer">viewBox</a> <a class="header-anchor" href="#viewbox" aria-label="Permalink to &quot;[viewBox](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/viewBox)&quot;">​</a></h3><p>viewBox 属性允许指定一个给定的一组图形伸展以适应特定的容器元素。</p><p>viewBox 属性的值是一个包含 4 个参数的列表 min-x, min-y, width and height。</p><h2 id="基础图形绘制" tabindex="-1">基础图形绘制 <a class="header-anchor" href="#基础图形绘制" aria-label="Permalink to &quot;基础图形绘制&quot;">​</a></h2><h3 id="圆形" tabindex="-1">圆形 <a class="header-anchor" href="#圆形" aria-label="Permalink to &quot;圆形&quot;">​</a></h3><div style="width:100px;margin:10px 0;"><svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"></circle></svg></div><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">svg</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">viewBox</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0 0 100 100</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">xmlns</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://www.w3.org/2000/svg</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">&lt;!-- cx、cy分别为定义中心点的 x、y 轴坐标 --&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">&lt;!-- r 属性用来定义圆的半径 --&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">circle</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">cx</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">50</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">cy</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">50</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">r</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">50</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">svg</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="椭圆" tabindex="-1">椭圆 <a class="header-anchor" href="#椭圆" aria-label="Permalink to &quot;椭圆&quot;">​</a></h3><div style="width:100px;margin:10px 0;"><svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg"><ellipse cx="100" cy="50" rx="100" ry="50"></ellipse></svg></div><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">svg</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">viewBox</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0 0 200 100</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">xmlns</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://www.w3.org/2000/svg</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">&lt;!-- rx 属性用于定义水平轴向的圆角半径尺寸 --&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">&lt;!-- ry 属性用于定义垂直轴向的圆角半径尺寸 --&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">ellipse</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">cx</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">100</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">cy</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">50</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">rx</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">100</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">ry</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">50</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">svg</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="线" tabindex="-1">线 <a class="header-anchor" href="#线" aria-label="Permalink to &quot;线&quot;">​</a></h3><div style="width:100px;margin:10px 0;"><svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><line x1="0" y1="80" x2="100" y2="20" stroke="black"></line></svg></div><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">svg</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">viewBox</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0 0 100 100</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">xmlns</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://www.w3.org/2000/svg</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">line</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">x1</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">y1</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">80</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">x2</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">100</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">y2</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">20</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">stroke</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">black</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">&lt;!-- 如果不指定描边颜色，则无法看见线条 --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">svg</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="polygon-多边形" tabindex="-1">polygon 多边形 <a class="header-anchor" href="#polygon-多边形" aria-label="Permalink to &quot;polygon 多边形&quot;">​</a></h3><div style="width:100px;margin:10px 0;"><svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg"><polygon points="0,100 50,25 50,75 100,0"></polygon><polygon points="100,100 150,25 150,75 200,0" fill="none" stroke="black"></polygon></svg></div><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">svg</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">viewBox</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0 0 200 100</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">xmlns</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://www.w3.org/2000/svg</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">&lt;!-- 具有默认填充的多边形示例 --&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">polygon</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">points</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0,100 50,25 50,75 100,0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">&lt;!-- 具有描边但无填充的相同的多边形形状示例 --&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">polygon</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">points</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">100,100 150,25 150,75 200,0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">fill</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">none</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">stroke</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">black</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">svg</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="polyline-多段线" tabindex="-1">polyline 多段线 <a class="header-anchor" href="#polyline-多段线" aria-label="Permalink to &quot;polyline 多段线&quot;">​</a></h3><div style="width:100px;margin:10px 0;"><svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg"><polyline points="0,100 50,25 50,75 100,0"></polyline><polyline points="100,100 150,25 150,75 200,0" fill="none" stroke="black"></polyline></svg></div><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">svg</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">viewBox</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0 0 200 100</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">xmlns</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://www.w3.org/2000/svg</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">&lt;!-- 具有默认填充的折线示例 --&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">polyline</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">points</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0,100 50,25 50,75 100,0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">&lt;!-- 具有描边但无填充的相同的多段线形状示例 --&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">polyline</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">points</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">100,100 150,25 150,75 200,0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">fill</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">none</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">stroke</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">black</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">svg</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="react-矩形" tabindex="-1">react 矩形 <a class="header-anchor" href="#react-矩形" aria-label="Permalink to &quot;react 矩形&quot;">​</a></h3><div style="width:100px;margin:10px 0;"><svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100"></rect><rect x="20" y="120" width="60" height="60" rx="0" ry="15"></rect><rect x="120" y="120" width="60" height="60" rx="15" ry="15"></rect><rect x="220" y="120" width="60" height="60" rx="150" ry="15"></rect></svg></div><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">svg</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">viewBox</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0 0 220 100</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">xmlns</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://www.w3.org/2000/svg</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">&lt;!-- Simple rectangle --&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">rect</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">width</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">100</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">height</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">100</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">&lt;!-- Rounded corner rectangle --&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">&lt;!-- rx 属性用于定义水平轴向的圆角半径尺寸。 --&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">&lt;!-- ry 属性用于定义垂直轴向的圆角半径尺寸。 --&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">rect</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">x</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">20</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">y</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">120</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">width</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">60</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">height</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">60</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">rx</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">ry</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">15</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">rect</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">x</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">120</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">y</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">120</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">width</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">60</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">height</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">60</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">rx</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">15</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">ry</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">15</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">rect</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">x</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">220</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">y</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">120</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">width</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">60</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">height</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">60</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">rx</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">150</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">ry</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">15</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">svg</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="参考文章" tabindex="-1">参考文章 <a class="header-anchor" href="#参考文章" aria-label="Permalink to &quot;参考文章&quot;">​</a></h2><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element" target="_blank" rel="noreferrer">MDN SVG 文档</a></p>`,28)]))}const u=n(p,[["render",t]]);export{i as __pageData,u as default};
