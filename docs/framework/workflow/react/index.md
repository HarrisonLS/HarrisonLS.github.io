# React 理论知识

## 宏观设计：数据驱动视图

::: tip 数据驱动视图
UI = render(data)
:::

## 基础理解

### React 中的组件通信方式

- props 和 callback
- context（跨层级）
- Event 事件
- ref 传递
- 状态管理

### React 控制 render 渲染的方法

- 从父组件直接隔断子组件的渲染，经典的就是 memo，缓存 element 对象
- 组件从自身来控制是否 render ，比如：PureComponent ，shouldComponentUpdate

![渲染控制](/image/react/react_render_strategy.png)

#### 什么时候需要注意渲染节流

- 第一种情况数据可视化的模块组件（展示了大量的数据），这种情况比较小心因为一次更新，可能伴随大量的 diff ，数据量越大也就越浪费性能，所以对于数据展示模块组件，有必要采取 memo ， shouldComponentUpdate 等方案控制自身组件渲染。

- 第二种情况含有大量表单的页面，React 一般会采用受控组件的模式去管理表单数据层，表单数据层完全托管于 props 或是 state ，而用户操作表单往往是频繁的，需要频繁改变数据层，所以很有可能让整个页面组件高频率 render 。

- 第三种情况就是越是靠近 app root 根组件越值得注意，根组件渲染会波及到整个组件树重新 render ，子组件 render ，一是浪费性能，二是可能执行 useEffect ，componentWillReceiveProps 等钩子，造成意想不到的情况发生。

### 强化组件的四种方式

- mixin 模式(已废弃)
- extends
- 高阶组件
- 自定义 hook

#### extends

```js
// 新写的类组件中如果有同名的重写方法，会覆盖所被继承的类组件里的方法
class App extends React.Component {}
```

#### 高阶组件

```ts
import React, { useState } from "react";
import { Button } from "antd";

const HOC = (Component: any) => (props: any) => {
  return <Component name={"harrison"} {...props}></Component>;
};

const Index: React.FC<any> = (props) => {
  const [flag, setFlag] = useState<boolean>(false);

  return (
    <div>
      <Button type="primary" onClick={() => setFlag(true)}>
        获取props
      </Button>
      {flag && <div>{JSON.stringify(props)}</div>}
    </div>
  );
};

export default HOC(Index);
```

### React Hooks

#### useState

useState 有点类似于 PureComponent，它会进行一个比较浅的比较，这就导致了一个问题，如果是对象直接传入的时候，并不会实时更新

```ts
import { useState } from "react";
import { Button } from "antd";

const Index: React.FC<any> = () => {
  const [state, setState] = useState({ number: 0 });
  let [count, setCount] = useState(0);

  return (
    <>
      <div>数字形式：{count}</div>
      <Button
        type="primary"
        onClick={() => {
          count++;
          setCount(count);
        }}
      >
        点击+1
      </Button>
      <div>对象形式：{state.number}</div>
      <Button
        type="primary"
        onClick={() => {
          state.number++;
          setState(state);
        }}
      >
        点击+1
      </Button>
    </>
  );
};

export default Index;
```

#### useEffect

副作用，这个钩子成功弥补了函数式组件没有生命周期的缺陷.  
基本使用

```ts
useEffect(() => {
  return destory;
}, deps);
```

#### useContext

设置全局共享数据，使所有组件可跨层级实现共享。  
基本使用

```ts
const contextValue = useContext(context);
```

用法介绍

```ts
import { useState, createContext, useContext } from "react";
import { Button } from "antd";

const CountContext = createContext(-1);

const Child = () => {
  const count = useContext(CountContext);

  return (
    <div style={{ marginTop: 10 }}>
      子组件获取到的count: {count}
      <Son />
    </div>
  );
};

const Son = () => {
  const count = useContext(CountContext);

  return <div style={{ marginTop: 10 }}>孙组件获取到的count: {count}</div>;
};

const Index: React.FC<any> = () => {
  let [count, setCount] = useState(0);

  return (
    <>
      <div>父组件中的count：{count}</div>
      <Button type="primary" onClick={() => setCount((v) => v + 1)}>
        点击+1
      </Button>
      <CountContext.Provider value={count}>
        <Child />
      </CountContext.Provider>
    </>
  );
};

export default Index;
```

#### useReducer

#### useMemo

#### useCallback

#### useRef

#### useImperativeHandle
`useImperativeHandle` 是 React 中的一个 Hook，它允许你自定义由 ref 暴露出来的句柄。这通常与 `forwardRef` 一起使用，以便将 ref 传递给函数组件。使用 `useImperativeHandle`，你可以向父组件暴露自定义的 ref 句柄，例如，暴露你自己的命令式方法 。

在以下例子中，`CustomInput` 组件通过 `useImperativeHandle` 暴露了 `focusInput` 和 `clearInput` 方法给父组件 `App`。父组件就可以通过 ref 调用这些方法控制输入框的行为 。

```jsx
import { forwardRef, useImperativeHandle, useRef } from 'react';

const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  // 通过 useImperativeHandle 自定义 ref 句柄
  useImperativeHandle(ref, () => {
    return {
      focusInput: () => {
        inputRef.current.focus();
      },
      clearInput: () => {
        inputRef.current.value = '';
      },
    };
  }, []); // 依赖数组为空，意味着这个句柄在组件的整个生命周期中只会被创建一次

  return <input ref={inputRef} {...props} />;
});

// 使用 CustomInput 组件
function App() {
  const inputRef = useRef();

  return (
    <div>
      <CustomInput ref={inputRef} type="text" />
      <button onClick={() => inputRef.current.focusInput()}>Focus Input</button>
      <button onClick={() => inputRef.current.clearInput()}>Clear Input</button>
    </div>
  );
}
```



#### useLayoutEffect

#### useDebugValue

### React API

#### useId
```js
import React from 'react';

const id = React.useId();

```

## 虚拟 DOM

React.createElement 计算出来的东西叫做虚拟 DOM，虚拟 DOM 仅仅是对真实 DOM 的一层描述而已。要想把虚拟 DOM 转换为真实 DOM，我们需要调用的是  ReactDOM.render()这个 API

```jsx
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

## fiber 架构

### 什么是 fiber

在 React16 以前，React 更新是通过树的深度优先遍历完成的，遍历是不能中断的，当树的层级深就会产生栈的层级过深，页面渲染速度变慢的问题，为了解决这个问题引入了 fiber，React fiber 就是虚拟 DOM，它是一个链表结构，返回了 return、children、siblings，分别代表父 fiber，子 fiber 和兄弟 fiber。

#### 个人理解

fiber 是一种处理架构，也可以说是一种数据结构，承担着作为动态 element 到实际 dom 结构构建桥梁的作用；在实际上是使用 fiber 结构完成虚拟 DOM 的构建，再根据双缓冲树机制，进行深度遍历的一系列操作，完成 DOM 结构的更新。

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
      return <Component {...this.props} />;
    }
  };
}
```

### render props

render props 模式和组合模式类似。区别不同的是，用函数的形式代替 children。函数的参数，由容器组件提供，这样的好处，将容器组件的状态，提升到当前外层组件中

```js
export default function App() {
  const aProps = {
    name: "《React进阶实践指南》",
  };
  return (
    <Container>{(cProps) => <Children {...cProps} {...aProps} />}</Container>
  );
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
- [玩转 React Hooks ](https://juejin.cn/book/7230622711905517605)
- [一文吃透 React 高阶组件(HOC)](https://juejin.cn/post/6940422320427106335#heading-55)
- [「React 进阶」 学好这些 React 设计模式，能让你的 React 项目飞起来](https://juejin.cn/post/7007214462813863950#heading-8)
- [图解 React 原理](https://7km.top/)
