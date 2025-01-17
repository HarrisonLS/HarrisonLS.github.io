# webGL 基础知识记录

Three.js 和 WebGL 的关系

WebGL 是一种 3D 绘图协议，它提供了 JavaScript API，允许开发者在浏览器中直接使用 GPU 进行 3D 图形渲染。WebGL 基于 OpenGL ES 2.0 标准，可以用于在任何兼容的 Web 浏览器中呈现交互式 3D 和 2D 图形，而无需使用插件。WebGL 可以为 HTML5 Canvas 提供硬件 3D 加速渲染，使 Web 开发人员能够借助系统显卡在浏览器中更流畅地展示 3D 场景和模型。

Three.js 是一个基于 WebGL 的 JavaScript 3D 图形库，它封装了 WebGL 的复杂性，提供了更高级别的 API，使开发者能够更容易地创建和显示 3D 图形。Three.js 由居住在西班牙巴塞罗那的程序员 Ricardo Cabbello Miguel（网名 Mr.doob）开发，它以简单、直观的方式封装了 3D 图形编程中常用的对象，极大地提高了性能。

## 图形学概念

### SDF 函数

SDF 函数 —— 中文译作“符号距离函数”，它用于描述这么一个函数：它将空间里的一个位置作为输入，并返回该位置到给定形状的距离。  
它的前面还有个“符号”，是因为在形状外的距离为正数（“+”号），在形状内的距离为负数（“-”号），边界处的值恰好为 0

### 工具库

- [gl-rotate](https://github.com/dmnsgn/glsl-rotate) —— 用于 2d 旋转的库
- [gl-transitions](https://github.com/gl-transitions/gl-transitions) —— 社区实现的 Shader 转场效果
- [glsl-random](https://github.com/mattdesl/glsl-random) —— 封装好的随机函数
- [glsl-noise](https://github.com/hughsk/glsl-noise) —— 封装好的噪声函数

### 资源链接

- [SDF 函数](https://iquilezles.org/articles/distfunctions2d/)
- [graph toy](https://graphtoy.com/) —— 对 Shader 的函数进行可视化的调试
