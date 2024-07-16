# 事件循环机制

事件循环的运行机制是，先会执行栈中的内容，栈中的内容执行后执行微任务，微任务清空后再执行宏任务，先取出一个宏任务，再去执行微任务，然后在取宏任务清微任务这样不停的循环。  
也分浏览器环境与 node 环境，一般指的是浏览器环境

- 宏任务
  - 宿主环境提供的，比如浏览器
    ajax、setTimeout、setInterval、setTmmediate(只兼容 ie)、script、requestAnimationFrame、messageChannel、UI 渲染、一些浏览器 api
- 微任务

  - 语言本身提供的，比如 promise.then
    then、queueMicrotask(基于 then)、mutationObserver(浏览器提供)、messageChannel 、mutationObersve

- [在线练习网站](http://jsv9000.app)

![eventLoop](/image/javascript/eventLoop/eventLoop.webp)

## 例子与输出结果

### example 1

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

  ### example 2

```js
async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}
async function async2() {
  console.log("async2");
}
console.log("script start");
setTimeout(function () {
  console.log("setTimeout");
}, 0);
async1();
new Promise(function (resolve) {
  console.log("promise1");
  resolve();
  console.log("promise2");
}).then(function () {
  console.log("promise3");
});
console.log("script end");
```


结果

```text
script start
async1 start
async2
promise1
promise2
script end

在含有await的async中，同一代码块中await后的所有代码将被放置
返回的promise的then方法中执行，也即await后的代码将被加载进微任务队列
而promise的resolve后的代码不会被放进微任务队列，所以会直接打印promise2.
```
