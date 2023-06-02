# umi 使用记录

## umi2 升级到 umi3

不再保留 umi/xxx 的接口，全部从 umi 中 import

```js
# 比如Link的导出改动

- import Link from 'umi/link';
+ import { Link } from 'umi';
```

router 更换为 history

```js
- import router from 'umi/router';
+ import { history } from 'umi';

- router.push('/foo');
+ history.push('/foo');
```

## 去除了 history.push 方法的 query 使用

[react-router](https://reactrouter.com/en/6.11.2)
- 是由于 react-router v6 的改动，umi 的封装也跟着发生变化

```js
- history.push({ pathname: 'path', query: { id: itemId } })
+ history.push(`path?id=${itemId}`)
```
