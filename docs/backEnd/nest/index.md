# NestJS学习记录

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

## 中文指南教程

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

### nest cli 命令

```shell
# 快速创建项目
nest new 

# 快速生成各种代码
nest generate 

# 使用 tsc 或者 webpack 构建代码
nest build 

# 启动开发服务，支持 watch 和调试
nest start 

# 打印 node、npm、nest 包的依赖版本
nest info 
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

### 常用拦截器Interceptor
在 NestJS 中，拦截器（Interceptor）是一种特殊的装饰器，用于执行副作用操作，例如日志记录、性能监控、事务处理、数据验证等。除了 `FilesInterceptor` 用于处理文件上传外，以下是一些常用的拦截器：

1. **ClassSerializerInterceptor**：
   - 用于自动序列化或反序列化 DTO（Data Transfer Object）。
   - 可以自定义序列化行为，例如过滤敏感数据。

2. **CacheInterceptor**：
   - 提供缓存功能，用于存储和检索方法调用的结果，以减少重复计算或数据库查询。

3. **TimeoutInterceptor**：
   - 用于设置方法调用的超时时间。
   - 如果方法执行超过指定时间，将抛出超时异常。

4. **WsInterceptor**：
   - 用于 WebSockets，可以拦截 WebSocket 消息并执行额外的逻辑。

5. **HttpInterceptor**：
   - 用于 HTTP 请求和响应的拦截，可以修改请求头、查询参数或响应内容。

6. **RmqInterceptor**：
   - 用于 RabbitMQ 消息队列，可以拦截消息并进行处理。

7. **TypeOrmMainInterceptor**：
   - 用于 TypeORM，提供事务支持，确保数据库操作的原子性。

8. **EventPatternInterceptor**：
   - 用于基于事件模式的通信，可以拦截和响应自定义事件。

9. **IoRedisPubSubInterceptor**：
   - 用于 ioredis 的发布/订阅模式，可以拦截发布的消息。

10. **FilesInterceptor**
   - 用于处理多文件上传的拦截器。

使用拦截器通常涉及以下步骤：

- **创建拦截器**：定义一个类，实现 `NestInterceptor` 接口，并在 `intercept` 方法中编写拦截逻辑。

- **注册拦截器**：将拦截器注册到模块中，可以在全局、控制器或方法级别注册。

- **应用拦截器**：使用 `@UseInterceptors()` 装饰器将拦截器应用于控制器或方法。

示例代码：

```typescript
// 创建一个简单的日志拦截器
@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();
    return next.handle().pipe(
      tap(() => console.log(`Elapsed time: ${Date.now() - now}ms`)),
    );
  }
}

// 在模块中注册拦截器
@Module({
  providers: [LoggingInterceptor],
  exports: [LoggingInterceptor],
})
export class AppModule {}

// 在控制器或方法上使用拦截器
@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  @Get()
  @UseInterceptors(LoggingInterceptor)
  getHello(): string {
    return this.appService.getHello();
  }
}
```

### 代码记录
    
#### TypeOrmModule 模版

```js
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'linsen123',
      database: 'email_login_test',
      synchronize: true,
      logging: true,
      entities: [],
      poolSize: 10,
      connectorPackage: 'mysql2',
      extra: {
        authPlugin: 'sha256_password',
      },
    }),
```
