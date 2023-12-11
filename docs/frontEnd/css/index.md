# CSS 理论知识点

## 基础概念

### 1、盒模型

::: tip 盒模型的组成为
content（元素内容） + padding（内边距） + border（边框） + margin（外边距）
:::

- 标准盒子模型：盒子实际总宽高=内容的宽高 width\height（content）+ border + padding + margin，通过 box-sizing: content-box 设置；
- IE 盒子模型：盒子实际总宽高=内容的宽高 width\height（content+border+padding）+ margin，通过 box-sizing: border-box 设置；

### 2、BFC 块级格式化上下文

是一个独立的渲染区域，让处于 BFC 内部的元素与外部的元素相互隔离，使内外元素的定位不会相互影响。

触发条件

- position:absolute/fixed
- display:inline-block、flex
- float 设置除 none 以外的值

### 3、层叠上下文

![zIndex](/image/css/zIndex.webp)

### 4、选择器权重

![priority](/image/css/priority.png)

::: tip 注意
不同来源下：内联样式 > 内部样式 > 外部样式 > 浏览器用户自定义样式 > 浏览器默认样式。
:::

### 5、Flex 布局

容器的属性：

- flex-direction：决定主轴的方向（即子 item 的排列方法）flex-direction: row | row-reverse | column | column-reverse;
- flex-wrap：决定换行规则 flex-wrap: nowrap | wrap | wrap-reverse;
<!-- - flex-flow： .box { flex-flow:  ; } -->
- justify-content：对其方式，水平主轴对齐方式
- align-items：对齐方式，竖直轴线方向
- align-content

项目的属性（元素的属性）：

- order 属性：定义项目的排列顺序，顺序越小，排列越靠前，默认为 0
- flex-grow 属性：定义项目的放大比例，即使存在空间，也不会放大
- flex-shrink 属性：定义了项目的缩小比例，当空间不足的情况下会等比例的缩小，如果 定义个 item 的 flow-shrink 为 0，则为不缩小
- flex-basis 属性：定义了在分配多余的空间，项目占据的空间。
- flex：是 flex-grow 和 flex-shrink、flex-basis 的简写，默认值为 0 1 auto。
- align-self：允许单个项目与其他项目不一样的对齐方式，可以覆盖
- align-items，默认属 性为 auto，表示继承父元素的 align-items 比如说，用 flex 实现圣杯布局

### 伪类和伪元素

css 引入伪类和伪元素概念是为了格式化文档树以外的信息。也就是说，伪类和伪元素都是用来修饰不在文档树中的部分

伪类

- 是为了通过选择器找到那些不存在 DOM 树中的信息以及不能被常规 CSS 选择器获取到的信息

伪元素

- 伪元素用于创建一些不在文档树中的元素，并为其添加样式。

比如说，我们可以通过:before 来在一个元素前增加一些文本，并为这些文本添加样式。虽然用户可以看到这些文本，但是这些文本实际上不在文档树中。
常见的伪元素有：::before，::after，::first-line，::first-letter，::selection、::placeholder 等

::: tip 伪类与伪元素的区别

1. 有没有创建一个文档树之外的元素
2. 伪元素是::双冒号，伪类是:单冒号
   :::

## 疑点难点

### flex：1 是什么含义

[https://blog.csdn.net/weixin_43554584/article/details/113839778](https://blog.csdn.net/weixin_43554584/article/details/113839778)
flex 实际上是 flex-grow、flex-shrink 和 flex-basis 三个属性的缩写。

```
flex:1  ==> flex: 1 1 auto
```

### backdrop-filter 如何使用？

[https://cloud.tencent.com/developer/section/1072019](https://cloud.tencent.com/developer/section/1072019)

### rem 与 em 的区别

rem 的大小是根据 html 目录的字体大小进行计算的
em 的大小是根据父元素的字体大小设置的
[https://blog.csdn.net/qq_35432904/article/details/51804227](https://blog.csdn.net/qq_35432904/article/details/51804227)

## CSS-In-JS 方案

### emotion

[emotion](https://emotion.sh/docs/introduction)

### styled-components

[styled-components:前端组件拆分新思路](https://juejin.cn/post/6844903878580764686)

## UnoCSS

[https://antfu.me/posts/reimagine-atomic-css-zh#%E4%BB%80%E4%B9%88%E6%98%AF%E5%8E%9F%E5%AD%90%E5%8C%96-css](https://antfu.me/posts/reimagine-atomic-css-zh#%E4%BB%80%E4%B9%88%E6%98%AF%E5%8E%9F%E5%AD%90%E5%8C%96-css)

## 常用样式

### 控制页面滚动条样式

reference：[https://www.cnblogs.com/momo798/p/10143855.html](https://www.cnblogs.com/momo798/p/10143855.html)

```css
::-webkit-scrollbar                滚动条整体部分
::-webkit-scrollbar-thumb          滚动条里面的小方块，能向上向下移动（或向左向右移动）
::-webkit-scrollbar-track          滚动条的轨道（里面装有Thumb）
::-webkit-scrollbar-button         滚动条的轨道的两端按钮，由于通过点击微调小方块的位置。
::-webkit-scrollbar-track-piece    内层轨道，滚动条中间部分
::-webkit-scrollbar-corner         边角，即垂直滚动条和水平滚动条相交的地方
::-webkit-resizer                  两个滚动条的交汇处上用于拖动调整元素大小的小控件
```

### 文字添加下划线

```css
text-decoration: underline;
```

### 文本超出显示省略号

```css
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
```

### 实现小于 12px 的字体效果

css 设置字体大小为 12px 及以下时，显示都是一样大小，都是默认 12px

```css
transform: scale(0.7);
```

::: tip

- transform:scale()这个属性只可以缩放可以定义宽高的元素
- 而行内元素是没有宽高的，所以对于行内元素设置小于 12px，我们可以加上一个 display:inline-block;
  :::

## 相关文章

[面试知识点复盘【CSS】篇](https://juejin.cn/post/7179809074551193659/)
