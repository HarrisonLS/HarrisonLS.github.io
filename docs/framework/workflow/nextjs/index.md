# Nextjs 使用记录

## 概念解析

### 客户端与服务端组件

- <strong>服务端组件只会在服务端渲染，但客户端组件会在服务端渲染一次，然后在客户端渲染。</strong>
- <strong>服务端组件可以直接导入客户端组件，但客户端组件并不能导入服务端组件。</strong>
  - 因为服务端可能包含Node API等而无法在客户端组件中使用
  - 但可以将服务端组件以props的形式传给客户端组件

在 Next.js 中，组件默认就是服务端组件。
```js

// 在组件顶部声明 "use client" 即可变为客户端组件
// "use client"

export default async function Page() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  const data = (await res.json()).slice(0, 10)
  console.log(data)
  return <ul>
    {data.map(({ title, id }) => {
      return <li key={id}>{title}</li>
    })}
  </ul>
}

```
请求会在服务端执行，并将渲染后的 HTML 发送给客户端

1. 数据获取：通常服务端环境（网络、性能等）更好，离数据源更近，在服务端获取数据会更快。通过减少数据加载时间以及客户端发出的请求数量来提高性能
2. 安全：在服务端保留敏感数据和逻辑，不用担心暴露给客户端
3. 缓存：服务端渲染的结果可以在后续的请求中复用，提高性能
4. bundle 大小：服务端组件的代码不会打包到 bundle 中，减少了 bundle 包的大小
5. 初始页面加载和 FCP：服务端渲染生成 HTML，快速展示 UI
6. Streaming：服务端组件可以将渲染工作拆分为 chunks，并在准备就绪时将它们流式传输到客户端。用户可以更早看到页面的部分内容，而不必等待整个页面渲染完毕

所以在实际项目开发的时候，<strong>能使用服务端组件就尽可能使用服务端组件。</strong>

#### 区别

| 特性               | 客户端组件                           | 服务端组件               |
|-------------------|------------------------------------|-------------------------|
| **渲染位置**       | 浏览器                             | 服务器                   |
| **交互性**         | 可直接操作 DOM                     | 通过生成的 HTML 进行渲染，不直接操作 DOM |
| **数据获取**       | 通常在组件挂载后获取               | 可在服务器渲染时获取并嵌入   |
| **生命周期**       | 遵循 React 生命周期               | 不适用 React 生命周期     |
| **SEO**            | 较差，依赖客户端渲染              | 较好，服务器渲染直接输出 HTML |
| **首屏加载时间**   | 可能较长，需要客户端下载并执行 JS   | 较快，HTML 直接发送到客户端   |
| **导航**           | 客户端路由，SPA 体验               | 服务端渲染，每次导航可能涉及页面重载 |

#### 优缺点

| 组件类型          | 优点                                   | 缺点                                   |
|----------------|---------------------------------------|---------------------------------------|
| 客户端组件      | - 高度交互性<br>- 适用于复杂的用户界面<br>- 易于实现动态内容更新 | - 首屏加载时间可能较长<br>- 对搜索引擎不友好<br>- 需要额外的优化措施 |
| 服务端组件      | - 良好的 SEO 支持<br>- 快速的首屏加载时间<br>- 适合内容不变的页面 | - 对实时动态交互支持有限<br>- 每次导航可能涉及页面重载<br>- 服务器负载较高时可能影响性能 |

### 服务端组件React Server Component的使用实践
<br>

#### 多个组件数据共用

```js
// 服务端组件用不了React Context，但React拓展了fetch的功能
// 添加了记忆缓存功能，相同的请求和参数，返回的数据会做缓存
async function getItem() {
  const res = await fetch('https://.../item/1')
  return res.json()
}
 
// 函数被调用了两次，但只有第一次才执行
const item = await getItem() // cache MISS
 
// 第二次使用了缓存
const item = await getItem() // cache HIT

```

#### 限制组件只在服务端使用
安装server-only包
```shell
npm install server-only
```

在服务端的组件代码中引用

```js
import 'server-only'
 
export async function getData() {
  const res = await fetch('https://external-service.com/data', {
    headers: {
      authorization: process.env.API_KEY,
    },
  })
 
  return res.json()
}

```

#### 使用第三方包和Context Provider

### 客户端组件React Client Component的使用实践

#### 客户端组件尽可能下移
```js
// SearchBar 客户端组件
import SearchBar from './searchbar'
// Logo 服务端组件
import Logo from './logo'
 
// Layout 依然作为服务端组件
export default function Layout({ children }) {
  return (
    <>
      <nav>
        <Logo />
        <SearchBar />
        {/* 一个交互式的使用状态的搜索栏的布局 */}
      </nav>
      <main>{children}</main>
    </>
  )
}
```

#### 从服务端组件到客户端组件传递的数据需要序列化
所谓可序列化，简单的理解就是 JSON.stringify() 一段数据不会出现错误。
但 JSX 对象是可以正常传递的。

## 实战搭建

### 项目引入redis
<br>

#### 安装依赖包
```shell
npm install ioredis

```
#### 连接代码示例
```js
import Redis from 'ioredis'

const redis = new Redis()

const initialData = {
  "1702459181837": '{"title":"sunt aut","content":"quia et suscipit suscipit recusandae","updateTime":"2023-12-13T09:19:48.837Z"}',
  "1702459182837": '{"title":"qui est","content":"est rerum tempore vitae sequi sint","updateTime":"2023-12-13T09:19:48.837Z"}',
  "1702459188837": '{"title":"ea molestias","content":"et iusto sed quo iure","updateTime":"2023-12-13T09:19:48.837Z"}'
}

export async function getAllNotes() {
  const data = await redis.hgetall("notes");
  if (Object.keys(data).length == 0) {
    await redis.hset("notes", initialData);
  }
  return await redis.hgetall("notes")
}

export async function addNote(data) {
  const uuid = Date.now().toString();
  await redis.hset("notes", [uuid], data);
  return uuid
}

export async function updateNote(uuid, data) {
  await redis.hset("notes", [uuid], data);
}

export async function getNote(uuid) {
  return JSON.parse(await redis.hget("notes", uuid));
}

export async function delNote(uuid) {
  return redis.hdel("notes", uuid)
}

export default redis


```