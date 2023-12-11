import{_ as a,o as e,c as s,R as l}from"./chunks/framework.385be6c2.js";const n="/image/css/zIndex.webp",r="/image/css/priority.png",x=JSON.parse('{"title":"CSS 理论知识点","description":"","frontmatter":{},"headers":[],"relativePath":"frontEnd/css/index.md","filePath":"frontEnd/css/index.md"}'),t={name:"frontEnd/css/index.md"},i=l('<h1 id="css-理论知识点" tabindex="-1">CSS 理论知识点 <a class="header-anchor" href="#css-理论知识点" aria-label="Permalink to &quot;CSS 理论知识点&quot;">​</a></h1><h2 id="基础概念" tabindex="-1">基础概念 <a class="header-anchor" href="#基础概念" aria-label="Permalink to &quot;基础概念&quot;">​</a></h2><h3 id="_1、盒模型" tabindex="-1">1、盒模型 <a class="header-anchor" href="#_1、盒模型" aria-label="Permalink to &quot;1、盒模型&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">盒模型的组成为</p><p>content（元素内容） + padding（内边距） + border（边框） + margin（外边距）</p></div><ul><li>标准盒子模型：盒子实际总宽高=内容的宽高 width\\height（content）+ border + padding + margin，通过 box-sizing: content-box 设置；</li><li>IE 盒子模型：盒子实际总宽高=内容的宽高 width\\height（content+border+padding）+ margin，通过 box-sizing: border-box 设置；</li></ul><h3 id="_2、bfc-块级格式化上下文" tabindex="-1">2、BFC 块级格式化上下文 <a class="header-anchor" href="#_2、bfc-块级格式化上下文" aria-label="Permalink to &quot;2、BFC 块级格式化上下文&quot;">​</a></h3><p>是一个独立的渲染区域，让处于 BFC 内部的元素与外部的元素相互隔离，使内外元素的定位不会相互影响。</p><p>触发条件</p><ul><li>position:absolute/fixed</li><li>display:inline-block、flex</li><li>float 设置除 none 以外的值</li></ul><h3 id="_3、层叠上下文" tabindex="-1">3、层叠上下文 <a class="header-anchor" href="#_3、层叠上下文" aria-label="Permalink to &quot;3、层叠上下文&quot;">​</a></h3><p><img src="'+n+'" alt="zIndex"></p><h3 id="_4、选择器权重" tabindex="-1">4、选择器权重 <a class="header-anchor" href="#_4、选择器权重" aria-label="Permalink to &quot;4、选择器权重&quot;">​</a></h3><p><img src="'+r+`" alt="priority"></p><div class="tip custom-block"><p class="custom-block-title">注意</p><p>不同来源下：内联样式 &gt; 内部样式 &gt; 外部样式 &gt; 浏览器用户自定义样式 &gt; 浏览器默认样式。</p></div><h3 id="_5、flex-布局" tabindex="-1">5、Flex 布局 <a class="header-anchor" href="#_5、flex-布局" aria-label="Permalink to &quot;5、Flex 布局&quot;">​</a></h3><p>容器的属性：</p><ul><li>flex-direction：决定主轴的方向（即子 item 的排列方法）flex-direction: row | row-reverse | column | column-reverse;</li><li>flex-wrap：决定换行规则 flex-wrap: nowrap | wrap | wrap-reverse;</li></ul><ul><li>justify-content：对其方式，水平主轴对齐方式</li><li>align-items：对齐方式，竖直轴线方向</li><li>align-content</li></ul><p>项目的属性（元素的属性）：</p><ul><li>order 属性：定义项目的排列顺序，顺序越小，排列越靠前，默认为 0</li><li>flex-grow 属性：定义项目的放大比例，即使存在空间，也不会放大</li><li>flex-shrink 属性：定义了项目的缩小比例，当空间不足的情况下会等比例的缩小，如果 定义个 item 的 flow-shrink 为 0，则为不缩小</li><li>flex-basis 属性：定义了在分配多余的空间，项目占据的空间。</li><li>flex：是 flex-grow 和 flex-shrink、flex-basis 的简写，默认值为 0 1 auto。</li><li>align-self：允许单个项目与其他项目不一样的对齐方式，可以覆盖</li><li>align-items，默认属 性为 auto，表示继承父元素的 align-items 比如说，用 flex 实现圣杯布局</li></ul><h3 id="伪类和伪元素" tabindex="-1">伪类和伪元素 <a class="header-anchor" href="#伪类和伪元素" aria-label="Permalink to &quot;伪类和伪元素&quot;">​</a></h3><p>css 引入伪类和伪元素概念是为了格式化文档树以外的信息。也就是说，伪类和伪元素都是用来修饰不在文档树中的部分</p><p>伪类</p><ul><li>是为了通过选择器找到那些不存在 DOM 树中的信息以及不能被常规 CSS 选择器获取到的信息</li></ul><p>伪元素</p><ul><li>伪元素用于创建一些不在文档树中的元素，并为其添加样式。</li></ul><p>比如说，我们可以通过:before 来在一个元素前增加一些文本，并为这些文本添加样式。虽然用户可以看到这些文本，但是这些文本实际上不在文档树中。 常见的伪元素有：::before，::after，::first-line，::first-letter，::selection、::placeholder 等</p><div class="tip custom-block"><p class="custom-block-title">伪类与伪元素的区别</p><ol><li>有没有创建一个文档树之外的元素</li><li>伪元素是::双冒号，伪类是:单冒号</li></ol></div><h2 id="疑点难点" tabindex="-1">疑点难点 <a class="header-anchor" href="#疑点难点" aria-label="Permalink to &quot;疑点难点&quot;">​</a></h2><h3 id="flex-1-是什么含义" tabindex="-1">flex：1 是什么含义 <a class="header-anchor" href="#flex-1-是什么含义" aria-label="Permalink to &quot;flex：1 是什么含义&quot;">​</a></h3><p><a href="https://blog.csdn.net/weixin_43554584/article/details/113839778" target="_blank" rel="noreferrer">https://blog.csdn.net/weixin_43554584/article/details/113839778</a> flex 实际上是 flex-grow、flex-shrink 和 flex-basis 三个属性的缩写。</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">flex:1  ==&gt; flex: 1 1 auto</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="backdrop-filter-如何使用" tabindex="-1">backdrop-filter 如何使用？ <a class="header-anchor" href="#backdrop-filter-如何使用" aria-label="Permalink to &quot;backdrop-filter 如何使用？&quot;">​</a></h3><p><a href="https://cloud.tencent.com/developer/section/1072019" target="_blank" rel="noreferrer">https://cloud.tencent.com/developer/section/1072019</a></p><h3 id="rem-与-em-的区别" tabindex="-1">rem 与 em 的区别 <a class="header-anchor" href="#rem-与-em-的区别" aria-label="Permalink to &quot;rem 与 em 的区别&quot;">​</a></h3><p>rem 的大小是根据 html 目录的字体大小进行计算的 em 的大小是根据父元素的字体大小设置的 <a href="https://blog.csdn.net/qq_35432904/article/details/51804227" target="_blank" rel="noreferrer">https://blog.csdn.net/qq_35432904/article/details/51804227</a></p><h2 id="css-in-js-方案" tabindex="-1">CSS-In-JS 方案 <a class="header-anchor" href="#css-in-js-方案" aria-label="Permalink to &quot;CSS-In-JS 方案&quot;">​</a></h2><h3 id="emotion" tabindex="-1">emotion <a class="header-anchor" href="#emotion" aria-label="Permalink to &quot;emotion&quot;">​</a></h3><p><a href="https://emotion.sh/docs/introduction" target="_blank" rel="noreferrer">emotion</a></p><h3 id="styled-components" tabindex="-1">styled-components <a class="header-anchor" href="#styled-components" aria-label="Permalink to &quot;styled-components&quot;">​</a></h3><p><a href="https://juejin.cn/post/6844903878580764686" target="_blank" rel="noreferrer">styled-components:前端组件拆分新思路</a></p><h2 id="unocss" tabindex="-1">UnoCSS <a class="header-anchor" href="#unocss" aria-label="Permalink to &quot;UnoCSS&quot;">​</a></h2><p><a href="https://antfu.me/posts/reimagine-atomic-css-zh#%E4%BB%80%E4%B9%88%E6%98%AF%E5%8E%9F%E5%AD%90%E5%8C%96-css" target="_blank" rel="noreferrer">https://antfu.me/posts/reimagine-atomic-css-zh#%E4%BB%80%E4%B9%88%E6%98%AF%E5%8E%9F%E5%AD%90%E5%8C%96-css</a></p><h2 id="常用样式" tabindex="-1">常用样式 <a class="header-anchor" href="#常用样式" aria-label="Permalink to &quot;常用样式&quot;">​</a></h2><h3 id="控制页面滚动条样式" tabindex="-1">控制页面滚动条样式 <a class="header-anchor" href="#控制页面滚动条样式" aria-label="Permalink to &quot;控制页面滚动条样式&quot;">​</a></h3><p>reference：<a href="https://www.cnblogs.com/momo798/p/10143855.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/momo798/p/10143855.html</a></p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">::</span><span style="color:#C792EA;">-webkit-scrollbar</span><span style="color:#A6ACCD;">                滚动条整体部分</span></span>
<span class="line"><span style="color:#89DDFF;">::</span><span style="color:#C792EA;">-webkit-scrollbar-thumb</span><span style="color:#A6ACCD;">          滚动条里面的小方块，能向上向下移动（或向左向右移动）</span></span>
<span class="line"><span style="color:#89DDFF;">::</span><span style="color:#C792EA;">-webkit-scrollbar-track</span><span style="color:#A6ACCD;">          滚动条的轨道（里面装有Thumb）</span></span>
<span class="line"><span style="color:#89DDFF;">::</span><span style="color:#C792EA;">-webkit-scrollbar-button</span><span style="color:#A6ACCD;">         滚动条的轨道的两端按钮，由于通过点击微调小方块的位置。</span></span>
<span class="line"><span style="color:#89DDFF;">::</span><span style="color:#C792EA;">-webkit-scrollbar-track-piece</span><span style="color:#A6ACCD;">    内层轨道，滚动条中间部分</span></span>
<span class="line"><span style="color:#89DDFF;">::</span><span style="color:#C792EA;">-webkit-scrollbar-corner</span><span style="color:#A6ACCD;">         边角，即垂直滚动条和水平滚动条相交的地方</span></span>
<span class="line"><span style="color:#89DDFF;">::</span><span style="color:#C792EA;">-webkit-resizer</span><span style="color:#A6ACCD;">                  两个滚动条的交汇处上用于拖动调整元素大小的小控件</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="文字添加下划线" tabindex="-1">文字添加下划线 <a class="header-anchor" href="#文字添加下划线" aria-label="Permalink to &quot;文字添加下划线&quot;">​</a></h3><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">text-decoration</span><span style="color:#A6ACCD;">: underline;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="文本超出显示省略号" tabindex="-1">文本超出显示省略号 <a class="header-anchor" href="#文本超出显示省略号" aria-label="Permalink to &quot;文本超出显示省略号&quot;">​</a></h3><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">overflow: hidden;</span></span>
<span class="line"><span style="color:#FFCB6B;">text-overflow</span><span style="color:#A6ACCD;">: ellipsis;</span></span>
<span class="line"><span style="color:#FFCB6B;">white-space</span><span style="color:#A6ACCD;">: nowrap;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="实现小于-12px-的字体效果" tabindex="-1">实现小于 12px 的字体效果 <a class="header-anchor" href="#实现小于-12px-的字体效果" aria-label="Permalink to &quot;实现小于 12px 的字体效果&quot;">​</a></h3><p>css 设置字体大小为 12px 及以下时，显示都是一样大小，都是默认 12px</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">transform: scale(0</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">7</span><span style="color:#A6ACCD;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li>transform:scale()这个属性只可以缩放可以定义宽高的元素</li><li>而行内元素是没有宽高的，所以对于行内元素设置小于 12px，我们可以加上一个 display:inline-block;</li></ul></div><h2 id="相关文章" tabindex="-1">相关文章 <a class="header-anchor" href="#相关文章" aria-label="Permalink to &quot;相关文章&quot;">​</a></h2><p><a href="https://juejin.cn/post/7179809074551193659/" target="_blank" rel="noreferrer">面试知识点复盘【CSS】篇</a></p>`,57),o=[i];function p(c,d,h,b,u,m){return e(),s("div",null,o)}const g=a(t,[["render",p]]);export{x as __pageData,g as default};
