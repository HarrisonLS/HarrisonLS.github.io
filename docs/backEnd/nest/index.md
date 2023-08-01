**文档**

- [nest 中文指南](https://docs.nestjs.cn/9/firststeps)
- [nest - github 仓库](https://github.com/nestjs/nest)
- [掘金小册 - nest 通关秘籍（已购）](https://juejin.cn/book/7226988578700525605?utm_source=course_list)

个人仓库地址：[https://github.com/HarrisonLS/my-nest-project](https://github.com/HarrisonLS/my-nest-project)

**环境准备**
安装 node，并保证版本大于等于 12

```
$node -v
v16.18.1
$ npm -v
7.x.x
```

安装 nest 包

```
$ npm i -g @nestjs/cli
$ nest new project-name
```

##

中文指南教程
new 一个新项目后，进入 src 路径可以看到以下内容。

```
src
 ├── app.controller.spec.ts // 对于基本控制器的单元测试样例。
 ├── app.controller.ts      // 带有单个路由的基本控制器示例。
 ├── app.module.ts          // 应用程序的根模块。
 ├── app.service.ts         // 带有单个方法的基本服务
 └── main.ts                // 应用程序入口文件，
                               它使用 NestFactory
                               用来创建 Nest 应用实例。
```

项目初始化及 IOC
[https://qingtu.co/b/05c63cbc77fd43dfb4faed3d49046920](https://qingtu.co/b/05c63cbc77fd43dfb4faed3d49046920)

## 小册 - nest 通关秘籍

nest cli 命令

```
nest new 快速创建项目
nest generate 快速生成各种代码
nest build 使用 tsc 或者 webpack 构建代码
nest start 启动开发服务，支持 watch 和调试
nest info 打印 node、npm、nest 包的依赖版本
```

数据传输的方式主要有 5 种

- url param
- query
- form-urlencoded
- form-data
- json

nest 创建 crud 服务

- 安装 @nestjs/cli，使用 nest new xxx 创建一个 Nest 的项目，
- 在根目录执行 nest g resource person 快速生成 person 模块的 crud 代码
- nest start --watch 启动 Nest 服务
