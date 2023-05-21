### 基础
#### flex：1是什么含义
[https://blog.csdn.net/weixin_43554584/article/details/113839778](https://blog.csdn.net/weixin_43554584/article/details/113839778)
flex实际上是flex-grow、flex-shrink和flex-basis三个属性的缩写。
```
flex:1  ==> flex: 1 1 auto
```
#### backdrop-filter如何使用？
[https://cloud.tencent.com/developer/section/1072019](https://cloud.tencent.com/developer/section/1072019)

#### rem与em的区别
rem的大小是根据html目录的字体大小进行计算的
em的大小是根据父元素的字体大小设置的
[https://blog.csdn.net/qq_35432904/article/details/51804227](https://blog.csdn.net/qq_35432904/article/details/51804227)

### CSS-In-JS方案
#### emotion
[emotion](https://emotion.sh/docs/introduction)


#### styled-components
[styled-components:前端组件拆分新思路](https://juejin.cn/post/6844903878580764686)

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

## UnoCSS
[https://antfu.me/posts/reimagine-atomic-css-zh#%E4%BB%80%E4%B9%88%E6%98%AF%E5%8E%9F%E5%AD%90%E5%8C%96-css](https://antfu.me/posts/reimagine-atomic-css-zh#%E4%BB%80%E4%B9%88%E6%98%AF%E5%8E%9F%E5%AD%90%E5%8C%96-css)
## 常用样式

#### 文字添加下划线
```css
text-decoration: underline;
```
