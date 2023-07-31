# React Hooks

## 自定义 hook

### useLatest 获取最新的更新值

```ts
import { useRef } from "react";

const useLatest = <T>(value: T): { readonly current: T } => {
  const ref = useRef(value);
  ref.current = value;

  return ref;
};

export default useLatest;
```

用法

```ts
import { useState, useEffect } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  const ref = useLatest(count);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("count:", count);
      console.log("ref:", ref);
      setCount(ref.current + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div>自定义Hooks：useLatestt</div>
      <div>count: {count}</div>
    </>
  );
};

export default Count;
```

### useMount 组件初始化执行的 hook

```ts
// useMount
import { useEffect } from "react";

const useMount = (fn: () => void) => {
  useEffect(() => {
    fn?.();
  }, []);
};

export default useMount;
```

### useUnmount 组件卸载时的 hook

```ts
// useUnmount
import { useEffect } from "react";
import useLatest from "../useLatest";

const useUnmount = (fn: () => void) => {
  const fnRef = useLatest(fn);

  useEffect(
    () => () => {
      fnRef.current();
    },
    []
  );
};

export default useUnmount;
```

### useUnmountedRef 获取当前组件是否卸载

```ts
import { useEffect, useRef } from "react";

const useUnmountedRef = (): { readonly current: boolean } => {
  const unmountedRef = useRef<boolean>(false);

  useEffect(() => {
    unmountedRef.current = false;
    return () => {
      unmountedRef.current = true;
    };
  }, []);

  return unmountedRef;
};

export default useUnmountedRef;
```

### useSafeState(未了解)

### useUpdate 强制组件重新渲染，返回一个函数

```ts
import { useReducer } from "react";

function useUpdate(): () => void {
  const [, update] = useReducer((num: number): number => num + 1, 0);

  return update;
}

export default useUpdate;
```

### useCreation 强化 useMemo 和 useRef，用法与 useMemo 一样，一般用于性能优化

## 参考文章

[玩转 React Hooks](https://juejin.cn/book/7230622711905517605)
