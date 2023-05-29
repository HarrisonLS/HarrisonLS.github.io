# React 理论知识

## 宏观设计：数据驱动视图

::: tip 数据驱动视图
UI = render(data)
:::

## 虚拟 DOM

React.createElement 计算出来的东西叫做虚拟 DOM，虚拟 DOM 仅仅是对真实 DOM 的一层描述而已。要想把虚拟 DOM 转换为真实 DOM，我们需要调用的是  ReactDOM.render()这个 API

```jsx
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

## fiber 架构

### 什么是 fiber

在 React16 以前，React 更新是通过树的深度优先遍历完成的，遍历是不能中断的，当树的层级深就会产生栈的层级过深，页面渲染速度变慢的问题，为了解决这个问题引入了 fiber，React fiber 就是虚拟 DOM，它是一个链表结构，返回了 return、children、siblings，分别代表父 fiber，子 fiber 和兄弟 fiber，随时可中断

## 组件设计

- 高阶组件 HOC
- render props
- 容器组件/展示组件
- 函数组件 + hooks

### 高阶组件

::: tip 高阶组件
高阶组件（HOC）是 React 中用于复用组件逻辑的一种高级技巧。HOC 自身不是 React API 的一部分，它是一种基于 React 的组合特性而形成的设计模式。 具体而言，高阶组件是参数为组件，返回值为新组件的函数。 ——React 官方文档
:::

```js
function Hoc(Component) {
  return class WrapComponent extends React.Component {
    // 强化操作
    render() {
      return <Component {...this.props} />
    }
  }
}
```

### render props

render props 模式和组合模式类似。区别不同的是，用函数的形式代替 children。函数的参数，由容器组件提供，这样的好处，将容器组件的状态，提升到当前外层组件中

```js
export default function App() {
  const aProps = {
    name: '《React进阶实践指南》',
  }
  return <Container>{(cProps) => <Children {...cProps} {...aProps} />}</Container>
}
```

## 性能优化手段

1. shouldComponentUpdate
2. memo
3. getDerviedStateFromProps
4. 使用 Fragment
5. 使用正确的 key
6. 拆分尽可能小的可复用组件，ErrorBoundary
7. 使用 React.lazy 和 React.Suspense 延迟加载不需要立马使用的组件

## 相关文章

- [javascript 函数式编程实践指南小册](https://juejin.cn/book/7173591403639865377)
- [一文吃透 React 高阶组件(HOC)](https://juejin.cn/post/6940422320427106335#heading-55)
- [「React 进阶」 学好这些 React 设计模式，能让你的 React 项目飞起来](https://juejin.cn/post/7007214462813863950#heading-8)
