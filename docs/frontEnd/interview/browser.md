# 浏览器相关

## async 和 defer 的解析过程

浏览器解析到带 async 属性的 script 标签时，不会中断 html 解析，而是并行下载脚本；当脚本下载完成后，中断解析并执行脚本；
浏览器解析到带 defer 属性的 script 标签时，不会中断 html 解析，而是并行下载脚本；当浏览器解析完 HTML 时、DOMContentLoaded 事件即将被触发时，此时再执行下载完成的脚本；

## 浏览器重绘与重排的区别

- 重排/回流（Reflow）：当 DOM 的变化影响了元素的几何信息，浏览器需要重新计算元素的几何属性，将其安放在界面中的正确位置，这个过程叫做重排。表现为重新生成布局，重新排列元素。
- 重绘(Repaint): 当一个元素的外观发生改变，但没有改变布局,重新把元素外观绘制出来的过程，叫做重绘。表现为某些元素的外观被改变

重绘不一定会出现重排/回流，但重排必然会导致重绘。

一些不会触发重排与重绘的 CSS 属性包括：

1. Transform 属性：例如 translate、rotate、scale 等
2. Opacity 属性：改变元素的透明度
3. Box-shadow 属性：添加阴影效果
4. Background 属性：改变元素的背景颜色、图片等
5. Visibility 属性：控制元素的可见性
6. Outline 属性：添加轮廓线效果
7. Text-decoration 属性：控制文本的装饰效果，如下划线、删除线等

这些属性的改变不会引起文档流的重新计算，也不会导致元素的重绘，因此在性能优化方面具有一定的优势。

## performance 性能指标

[Chrome Performance 常见名词解释](https://web.dev/cls/)

- Load

代表页面中依赖的所有资源加载完的事件

- FP——First Page

表示渲染出第一个像素点。FP 一般在 HTML 解析完成或者解析一部分时候触发。

- FCP——First Contentful Paint

表示渲染出第一个内容，这里的“内容”可以是文本、图片、canvas。

- FMP——First Meaningful Paint

首次渲染有意义的内容的时间。

- LCP——largest contentful Paint

代表在 viewport 中最大的页面元素加载的时间. LCP 的数据会通过 PerformanceEntry 对象记录, 每次出现更大的内容渲染, 则会产生一个新的 PerformanceEntry 对象。

- TTI——Time to interactive

标记应用已进行视觉渲染并能可靠响应用户输入的时间点。

- TBT——Total Blocking time

汇总所有加载过程中阻塞用户操作的时长，在 FCP 和 TTI 之间任何 long task 中阻塞部分都会被汇总。

- CLS——Cumulative layout shift

一个元素初始时和其 hidden 之间的任何时间如果元素偏移了, 则会被计算进去。

- TTFB —— Time To First Byte

从客户端发出 HTTP 请求到服务器返回第一个字节的时间。

### ‘258’原则

- 2：页面的加载时间应该控制在 2 秒以内，这是用户能够接受的最短时间。
- 5：页面的加载时间在 5 秒以内，用户对页面加载速度的不满意度开始上升。
- 8：页面的加载时间超过 8 秒，用户的流失率将急剧增加，用户很可能会放弃访问该页面。
