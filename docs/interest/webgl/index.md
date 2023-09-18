# webGL 基础知识记录

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
