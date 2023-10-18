# SVG 基础知识

| 特点         | SVG                                                                                                                                  | Canvas                                                                                         |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------- |
| 绘图方式     | 使用 XML 描述图形，基于矢量的图形格式                                                                                                | 通过 JavaScript 绘制图形，绘制的图形是位图                                                     |
| 可缩放性     | 可以无限缩放而不失真                                                                                                                 | 在缩放和变换时会有失真                                                                         |
| 功能和灵活性 | 是一个完整的文档对象模型（DOM），支持事件处理、动画效果、滤镜等高级功能，可以对图形进行平移、旋转、缩放等变换操作                    | 提供基本的绘图 API，可以绘制线条、填充颜色、绘制图像等，但不支持高级功能如事件处理、动画效果等 |
| 性能         | 当图形比较复杂时，渲染的性能会受到影响，特别是在移动设备上，每个元素都会占用一定的内存和 CPU 资源，当 SVG 元素较多时，性能可能会下降 | 在处理大量图形时，性能较好，绘制的元素不会占用额外的内存和 CPU 资源                            |
| 兼容性       | 在大多数现代浏览器中都有很好的支持，但在一些旧版本的浏览器中，对 SVG 的支持可能有限                                                  | 在大多数现代浏览器中都有很好的支持，但在一些旧版本的浏览器中可能不被支持                       |

综上所述，SVG 适用于需要实现复杂交互和动态效果的图形，以及需要高质量缩放的场景。而 Canvas 适用于需要处理大量图形，以及对性能要求较高的场景。

## 基础属性

### [viewBox](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/viewBox)

viewBox 属性允许指定一个给定的一组图形伸展以适应特定的容器元素。

viewBox 属性的值是一个包含 4 个参数的列表 min-x, min-y, width and height。

## 基础图形绘制

### 圆形

<div style="width:100px;margin:10px 0">
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="50" />
</svg>
</div>

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <!-- cx、cy分别为定义中心点的 x、y 轴坐标 -->
  <!-- r 属性用来定义圆的半径 -->
  <circle cx="50" cy="50" r="50" />
</svg>
```

### 椭圆

<div style="width:100px;margin:10px 0">
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="100" cy="50" rx="100" ry="50" />
</svg>
</div>

```html
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <!-- rx 属性用于定义水平轴向的圆角半径尺寸 -->
  <!-- ry 属性用于定义垂直轴向的圆角半径尺寸 -->
  <ellipse cx="100" cy="50" rx="100" ry="50" />
</svg>
```

### 线

<div style="width:100px;margin:10px 0">
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <line x1="0" y1="80" x2="100" y2="20" stroke="black" />

  <!-- 如果不指定描边颜色，则无法看见线条 -->
</svg>

</div>

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <line x1="0" y1="80" x2="100" y2="20" stroke="black" />

  <!-- 如果不指定描边颜色，则无法看见线条 -->
</svg>
```

### polygon 多边形

<div style="width:100px;margin:10px 0">
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <!-- 具有默认填充的多边形示例 -->
  <polygon points="0,100 50,25 50,75 100,0" />

  <!-- 具有描边但无填充的相同的多边形形状示例 -->
  <polygon points="100,100 150,25 150,75 200,0" fill="none" stroke="black" />
</svg>

</div>

```html
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <!-- 具有默认填充的多边形示例 -->
  <polygon points="0,100 50,25 50,75 100,0" />

  <!-- 具有描边但无填充的相同的多边形形状示例 -->
  <polygon points="100,100 150,25 150,75 200,0" fill="none" stroke="black" />
</svg>
```

### polyline 多段线

<div style="width:100px;margin:10px 0">
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <!-- 具有默认填充的折线示例 -->
  <polyline points="0,100 50,25 50,75 100,0" />

  <!-- 具有描边但无填充的相同的多段线形状示例 -->
  <polyline points="100,100 150,25 150,75 200,0" fill="none" stroke="black" />
</svg>
</div>

```html
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <!-- 具有默认填充的折线示例 -->
  <polyline points="0,100 50,25 50,75 100,0" />

  <!-- 具有描边但无填充的相同的多段线形状示例 -->
  <polyline points="100,100 150,25 150,75 200,0" fill="none" stroke="black" />
</svg>
```

### react 矩形

<div style="width:100px;margin:10px 0">
<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <!-- Simple rectangle -->
  <rect width="100" height="100" />

  <!-- Rounded corner rectangle -->
  <rect x="20" y="120" width="60" height="60" rx="0" ry="15" />
  <rect x="120" y="120" width="60" height="60" rx="15" ry="15" />
  <rect x="220" y="120" width="60" height="60" rx="150" ry="15" />
</svg>
</div>

```html
<svg viewBox="0 0 220 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Simple rectangle -->
  <rect width="100" height="100" />

  <!-- Rounded corner rectangle -->
  <!-- rx 属性用于定义水平轴向的圆角半径尺寸。 -->
  <!-- ry 属性用于定义垂直轴向的圆角半径尺寸。 -->
  <rect x="20" y="120" width="60" height="60" rx="0" ry="15" />
  <rect x="120" y="120" width="60" height="60" rx="15" ry="15" />
  <rect x="220" y="120" width="60" height="60" rx="150" ry="15" />
</svg>
```

## 参考文章

[MDN SVG 文档](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element)
