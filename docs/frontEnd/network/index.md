# 计算机网络 基础知识

## 1、HTTP 常见状态码

### 1XX

- 1xx：接受，继续处理
- 103（Early Hints）：客户端应在服务端返回 HTML 前开始预加载资源

### 2XX

- 200：成功并返回数据
- 201：已创建
- 202：已接收
- 203：成功但未进行授权
- 204：成功但无内容
- 205：成功并重置内容
- 206：成功，部分内容，用于实现断电续传

### 3XX

- 301： 永久重定向。场景是使用域名跳转，新的 URL 在响应中给出
- 302：临时重定向。场景是未登陆的用户跳转登录；浏览器默认使用 get 方式重新发出请求，会导致第一次以 post 请求的参数丢失；（才衍生出了 307 状态码）
- 303：临时重定向，强制浏览器将请求方法从 POST 改到 GET；
- 304：资源未修改，可使用缓存（协商缓存）
- 305：需代理访问
- 307：307 和 302 一样是临时重定向，唯一的区别在于，307 状态码不允许浏览器将原本为 POST 的请求重定向到 GET 请求上。
- 308：308 和 301 一样是永久重定向，唯一的区别在于，308 状态码不允许浏览器将原本为 POST 的请求重定向到 GET 请求上。

### 4XX

- 400：请求语法错误
- 401：要求身份认证
- 403：拒绝请求
- 404：资源不存在
- 405：请求方法错误或不允许

### 5XX

- 500：服务器错误
- 502：网关错误
- 503：服务不可用
- 504：网关或代理服务器超时

## 2、浏览器从输入 URL 到页面呈现的过程

### 第一部分 请求响应的过程

1. 解析 url
2. DNS 解析，获取实际 IP 地址
3. 建立 TCP 连接，根据 IP 地址，进行三次握手连接机制
4. 建立 HTTP 连接
5. 负载均衡，分配给对应集群服务器获取资源
6. 服务器响应返回
7. 浏览器客户端接受 http 响应，响应后根据 connection:keep-alive 的值来选择通过 四次挥手来断开 TCP 连接，或者保留；

### 第二部分 解析及渲染资源的过程

1. 构建 DOM 树
2. 构建 CSSOM 树
3. 构建渲染树
4. 布局
5. 绘制

## 3、HTTP

HTTP 是超文本传输协议，HTTP 是一个在计算机世界里专门在两点之间传输文字、图片、音频、视频等超文本数据的约定和规范。

## 4、WebSocket

## 5、DNS

DNS 的作用就是通过域名查询到具体的 IP。是应用层协议，通常该协议运行在 UDP 协议之上，使用的是 53 端口号。

### 递归查询

![递归查询](/image/network/dgcx.webp)

### 迭代查询

![迭代查询](/image/network/ddcx.webp)

## 6、HTTPS

HTTPS 并不是一个新的协议，它只是在 HTTP 和 TCP 的传输中建立了一个安全层，它其实就是 HTTP + SSL/TLS 协议组合而成，而安全性的保证正是 SSL/TLS 所做的工作。

## 7、HTTP2

参考资料：

- [HTTP/2 简介](https://web.dev/articles/performance-http2?hl=zh-cn)
- [半小时搞懂 HTTP、HTTPS 和 HTTP2](https://github.com/woai3c/Front-end-articles/blob/master/http-https-http2.md)

## 计算机网络模型

## 即时通信方案

### 方案

1. 短轮询：前端用定时器每隔一段时间就 ajax 向后端获取更新；
2. 长轮询：长轮询是短轮询的改进，请求到服务端后会被挂起，直到有新的消息才会返回响应；然后再重新发起请求
3. 基于流 —— SSE：SSE 是一个 H5 的属性，它只能由服务器向浏览器发送数据，所以协作式通过 http 发送消息，sse 接受消息；
4. WebSocket： HTML5 开始提供的一种在单个 TCP 连接上进行全双工通信的协议；钉钉表格就是用的原生 WebSocket；
5. Socket.io：为了解决 websocket 兼容性的一个方案，将 websocket、长轮询两种通信封装成了统一的通信接口。

### 单工、半双工和全双工通信

1. 单工通信：指消息只能单方向传输的工作方式，数据信息从一端到另一端是单方向的。例：广播。
2. 半双工通信：可以实现双向的通信，但是不能在两个方向同时进行，必须交替进行。这中模式下，接收端和发送端可以互相转换。例：对讲机。
3. 全双工通信：是指在通信的任意时刻，都允许数据同时在两个方向上传输，在这个模式下，通信系统的每一端都设置了发送器和接收器。

## XSS 攻击

## head 请求和 options 请求

|          | HEAD 请求                                    | OPTIONS 请求                                |
| -------- | -------------------------------------------- | ------------------------------------------- |
| 用途     | 获取资源的元数据，不返回实际内容             | 获取服务器支持的通信选项，不返回实际内容    |
| 主要场景 | 获取资源信息、检查资源是否存在、是否被修改过 | CORS 中的预检请求，了解服务器支持的功能选项 |
| 返回结果 | 返回资源的首部信息                           | 返回服务器支持的通信选项                    |
| 示例     | 获取文件大小、类型、修改日期等元数据         | 了解服务器支持的请求方法、头部信息等        |

```js
// 发送HEAD请求示例
fetch("https://example.com/resource", {
  method: "HEAD",
})
  .then((response) => {
    // 处理响应，只获取资源的首部信息
    console.log("HEAD请求的响应首部:", response.headers);
  })
  .catch((error) => {
    console.error("发生错误:", error);
  });

// 发送OPTIONS请求示例
fetch("https://example.com/resource", {
  method: "OPTIONS",
})
  .then((response) => {
    // 处理响应，获取服务器支持的通信选项
    console.log("OPTIONS请求的响应:", response);
    console.log(
      "支持的请求方法:",
      response.headers.get("access-control-allow-methods")
    );
    console.log(
      "支持的头部信息:",
      response.headers.get("access-control-allow-headers")
    );
  })
  .catch((error) => {
    console.error("发生错误:", error);
  });
```

![options请求](/image/network/httpOptionsRequest.png)

关联问题：[post 为什么会发两次请求](https://mp.weixin.qq.com/s/X1NQ0TnxQd561rVshR7BSA)

## 相关文章

[面试知识点复盘【计算机网络】篇](https://juejin.cn/post/7166870049066582053#heading-53)
