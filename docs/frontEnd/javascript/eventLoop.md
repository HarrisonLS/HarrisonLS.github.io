# 事件循环机制

事件环的运行机制是，先会执行栈中的内容，栈中的内容执行后执行微任务，微任务清空后再执行宏任务，先取出一个宏任务，再去执行微任务，然后在取宏任务清微任务这样不停的循环。

- 宏任务
  - 宿主环境提供的，比如浏览器
    ajax、setTimeout、setInterval、setTmmediate(只兼容 ie)、script、requestAnimationFrame、messageChannel、UI 渲染、一些浏览器 api
- 微任务
  - 语言本身提供的，比如 promise.then
    then、queueMicrotask(基于 then)、mutationObserver(浏览器提供)、messageChannel 、mutationObersve

## 例子与输出结果

```js
setTimeout(function () {
  console.log("set1");
  new Promise(function (resolve) {
    resolve();
  }).then(function () {
    new Promise(function (resolve) {
      resolve();
    }).then(function () {
      console.log("then4");
    });
    console.log("then2");
  });
});
new Promise(function (resolve) {
  console.log("pr1");
  resolve();
}).then(function () {
  console.log("then1");
});
setTimeout(function () {
  console.log("set2");
});
console.log(2);
queueMicrotask(() => {
  console.log("queueMicrotask1");
});
new Promise(function (resolve) {
  resolve();
}).then(function () {
  console.log("then3");
});
```

结果

```text
pr1
2
then1
queueMicrotask1
then3
set1
then2
then4
set2
```

![eventLoop](/image/javascript/eventLoop/eventLoop.webp)
