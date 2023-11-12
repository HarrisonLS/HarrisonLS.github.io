# 手写专题

## Promise 相关

[promise article by woai3c](https://github.com/woai3c/Front-end-articles/blob/master/promise.md)

### Promise.all 的功能及手写实现

Promise.all 里面参数为一个数组，数组的每一项是一个返回 promise 的函数调用
then 的第一个参数是所有 promise 都成功的调用，返回结果是一个数组，数组的每一项为函数 promise 的返回结果。
then 的第二个参数：返回结果有一个失败则执行失败的回调，拿到的是第一个失败的值

```js
Promise.all = function (promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject("非数组参数形式！");
    }
    const result = [];
    const len = promises.length;
    let count = 0;
    promises.forEach((p) => {
      Promise.resolve(p)
        .then((val) => {
          count++;
          result.push(val);
          if (count === len) {
            resolver(result);
          }
        })
        .catch((e) => {
          return reject(e);
        });
    });
  });
};
```

### Promise.race 的功能及手写实现

数组中的任务哪个获取的块，就返回哪个，不管结果本身是成功还是失败。

```js
Promise.race = function (promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject("非数组形式参数！");
    }

    if (!promises.length) return;

    promises.forEach((p) => {
      Promise.resolve(p)
        .then((val) => {
          return resolve(val);
        })
        .catch((e) => {
          return reject(e);
        });
    });
  });
};
```
