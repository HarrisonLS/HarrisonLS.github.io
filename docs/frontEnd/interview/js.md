# javascript 相关

## let、const、var

主要概念

- 作用域
- 变量提升
- 暂时性死区

这一篇足够简洁清晰：
[let、const 和 var 的区别](https://blog.csdn.net/qq_46883835/article/details/123345602)

## 闭包

定义：内部函数访问外部函数的作用与；  
个人理解：在作用上，相当于局部的全局变量，将变量变为私有化，不会被外部影响。

- 会引起内存泄漏，但不是所有的内存泄漏需要手动回收。

```js
function outer() {
  let a = 0;
  function add() {
    a = a + 1;
    console.log("a: ", a);
  }
  add();
}
const fn = outer();

//  外部如果需要使用闭包的变量，则此时需要return

function outer() {
  let a = 0;
  return function add() {
    a = a + 1;
    console.log("a: ", a);
  };
}
const fn = outer(); //调用一次fn会让a的值+1
```

## IIFE

```js
// IIFE示例写法
var add = (function () {
  var counter = 0;
  return function () {
    return ++counter;
  };
})();

console.log(add()); //1
console.log(add()); //2

var b = 10;
(function b() {
  b = 20;
  console.log(b);
})();

// 打印结果
// ƒ b(){
//     b = 20;
//     console.log(b);
// }
```

## 防抖、节流以及实现原理

防抖：多次操作下只取最后一次

```js
function debounce(fn,timeout) {
  let timer:
  return function (...arg){
    if(timer) clearTimeout(timer);
    timer = setTimeout(()=>{
      fn.apply(this,arg)
    },timeout)
  }
}
```

节流：将多次执行变为每隔一段时间执行

```js
function throttle() {
  let timer;
  return function (...arg) {
    if (timer) return;
    timer = setTimeout(() => {
      fn.apply(this.arg);
      timer = null;
    }, timeout);
  };
}
```

## this 的指向

**在 ES5 中，this 永远指向最后调用它的那个对象**

改变 this 的指向

- ES6 中的箭头函数
- 使用 apply、call、bind
- 函数内部使用\_this = this

## apply、call、bind 的区别以及实现

```text
const min = Math.min.apply(null,[2,3,4,5,6,7,1])
console.log('min: ', min);
1

const min = Math.min.call(null,2,3,4,5,6,7,1)
console.log('min: ', min);
1

const min = Math.min.bind(null,2,3,4,5,6,7,1)()
console.log('min: ', min);
1
```

### apply 的使用

```text{5}
Function.prototype.apply(thisArg,argsArray)

return 调用有指定 this 值和参数的函数的结果。

语法与 call() 几乎相同，但根本区别在于，call() 接受一个参数列表，而 apply() 接受一个参数的单数组。
```

```js
const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);

console.log(max);
// Expected output: 7

const min = Math.min.apply(null, numbers);

console.log(min);
// Expected output: 2
```

### apply 的实现

```js
Function.prototype.myBind = function (ctx, array) {
  ctx = ctx || window;
  var fn = Symbol();
  var result;
  if (!array) {
    // 判断array是否存在
    result = ctx[fn]();
  } else {
    result = ctx[fn](...array);
  }
  delete ctx[fn];
  return result;
};
```

## call 的实现

```js
Function.prototype.myCall = function (ctx) {
  ctx = ctx || window;
  var fn = Symbol(); // 确定唯一
  var args = [...arguments].slice(1);
  ctx[fn] = this;
  var result = ctx[fn](...args);
  delete ctx[fn];
  return result;
};
```

## 柯里化函数

## 箭头函数与普通函数的区别

1. 箭头函数没有自己的 this

   1.1 箭头函数不会创建自己的 this， 所以它没有自己的 this，它只会在自己作用域的上一层继承 this。所以箭头函数中 this 的指向在它在定义时已经确定了，之后不会改变。

2. 箭头函数继承来的 this 指向永远不会改变

```js
var id = "GLOBAL";
var obj = {
  id: "OBJ",
  a: function () {
    console.log(this.id);
  },
  b: () => {
    console.log(this.id);
  },
};
obj.a(); // 'OBJ'
obj.b(); // 'GLOBAL'
new obj.a(); // undefined
new obj.b(); // Uncaught TypeError: obj.b is not a constructor
```

3. call()、apply()、bind()等方法不能改变箭头函数中 this 的指向

```js
var id = "Global";
let fun1 = () => {
  console.log(this.id);
};
fun1(); // 'Global'
fun1.call({ id: "Obj" }); // 'Global'
fun1.apply({ id: "Obj" }); // 'Global'
fun1.bind({ id: "Obj" })(); // 'Global'
```

4. 以及一些箭头函数无法做到的事情

- 箭头函数不能作为构造函数使用
- 箭头函数没有自己的 arguments
- 箭头函数没有 prototype

## 扩展运算符的作用及使用场景

### 对象扩展运算符

对象的扩展运算符(...)用于取出参数对象中的所有可遍历属性，拷贝到当前对象之中。

```js
let bar = { a: 1, b: 2 };
let baz = { ...bar }; // { a: 1, b: 2 }

// 等价于

let bar = { a: 1, b: 2 };
let baz = Object.assign({}, bar); // { a: 1, b: 2 }
```

Object.assign 方法的第一个参数是目标对象，后面的参数都是源对象。
**(如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性)**。

```js
let bar = { a: 1, b: 2 };
let baz = { ...bar, ...{ a: 2, b: 4 } }; // {a: 2, b: 4}
```

### 数组扩展运算符

数组的扩展运算符可以将一个数组转为用逗号分隔的参数序列，且每次只能展开一层数组。

```js
console.log(...[1, 2, 3]);
// 1 2 3
console.log(...[1, [2, 3, 4], 5]);
// 1 [2, 3, 4] 5
```

- 合并数组

```js
const arr1 = ["two", "three"];
const arr2 = ["one", ...arr1, "four", "five"]; // ["one", "two", "three", "four", "five"]
```

- 字符串转为真正的数组

```js
[..."hello"]; // [ "h", "e", "l", "l", "o" ]
```

# ajax、axios、fetch 的区别

- Ajax

  - 是一种使用现有标准和技术的异步请求处理技术，可以在不重新加载整个网页的情况下更新部分网页。
  - 优点：兼容性好，支持跨域请求，可以实现文件上传和下载等功能。
  - 缺点：无法取消请求，代码复杂度高，需要手动处理错误信息。

- Axios

  - 是一个基于 Promise 的 HTTP 库，可以用在浏览器和 Node.js 中。
  - 优点：API 简单易用，支持并发请求，拦截请求和响应，自动转换 JSON 数据，可以取消请求，统一处理错误信息。
  - 缺点：不支持 IE8 及以下版本浏览器。

- Fetch
  - 是一种新的网络请求 API，原生支持 Promise 和 async/await。
  - 优点：语法简洁，符合标准，支持跨域请求，支持 Request 和 Response 对象，支持流式操作。
  - 缺点：兼容性较差，需要手动处理 HTTP 错误状态码，无法取消请求。

**使用方法**

### Ajax

```javascript
const xhr = new XMLHttpRequest();
xhr.open("GET", "/api/user", true);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.responseText);
  }
};
xhr.send();
```

### Axios

```javascript
import axios from "axios";
axios
  .get("/api/user")
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
```

### Fetch

```javascript
fetch("/api/user")
  .then(function (response) {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Network response was not ok.");
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(
      "There has been a problem with your fetch operation: ",
      error.message
    );
  });
```

## 请依次输出代码结果系列

### 函数表达式和函数声明的区别

```js
var foo = function () {
  console.log("foo1");
};
foo();

var foo = function () {
  console.log("foo2");
};
foo();

function foo() {
  console.log("foo1");
}
foo();

function foo() {
  console.log("foo2");
}
foo();
```

::: details 结果及解释
函数表达式相对于函数声明的一个重要区别是函数声明在代码解析阶段就会被提升（函数声明提升），而函数表达式则需要在赋值语句执行到达时才会创建函数对象

```text
// 结果打印：
// foo1
// foo2
// foo2
// foo2
```

:::

## 相关文章

[高频前端面试题汇总之 JavaScript 篇（上）](https://juejin.cn/post/6940945178899251230)
