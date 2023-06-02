# javascript 相关

## 箭头函数与普通函数的区别

1. 箭头函数没有自己的 this

   1.1 箭头函数不会创建自己的 this， 所以它没有自己的 this，它只会在自己作用域的上一层继承 this。所以箭头函数中 this 的指向在它在定义时已经确定了，之后不会改变。

2. 箭头函数继承来的 this 指向永远不会改变

```js
var id = 'GLOBAL'
var obj = {
  id: 'OBJ',
  a: function () {
    console.log(this.id)
  },
  b: () => {
    console.log(this.id)
  },
}
obj.a() // 'OBJ'
obj.b() // 'GLOBAL'
new obj.a() // undefined
new obj.b() // Uncaught TypeError: obj.b is not a constructor
```

3. call()、apply()、bind()等方法不能改变箭头函数中 this 的指向

```js
var id = 'Global'
let fun1 = () => {
  console.log(this.id)
}
fun1() // 'Global'
fun1.call({ id: 'Obj' }) // 'Global'
fun1.apply({ id: 'Obj' }) // 'Global'
fun1.bind({ id: 'Obj' })() // 'Global'
```

4. 以及一些箭头函数无法做到的事情

- 箭头函数不能作为构造函数使用
- 箭头函数没有自己的 arguments
- 箭头函数没有 prototype

## 扩展运算符的作用及使用场景

### 对象扩展运算符

对象的扩展运算符(...)用于取出参数对象中的所有可遍历属性，拷贝到当前对象之中。

```js
let bar = { a: 1, b: 2 }
let baz = { ...bar } // { a: 1, b: 2 }

// 等价于

let bar = { a: 1, b: 2 }
let baz = Object.assign({}, bar) // { a: 1, b: 2 }
```

Object.assign 方法的第一个参数是目标对象，后面的参数都是源对象。
**(如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性)**。

```js
let bar = { a: 1, b: 2 }
let baz = { ...bar, ...{ a: 2, b: 4 } } // {a: 2, b: 4}
```

### 数组扩展运算符
数组的扩展运算符可以将一个数组转为用逗号分隔的参数序列，且每次只能展开一层数组。
```js 
console.log(...[1, 2, 3])
// 1 2 3
console.log(...[1, [2, 3, 4], 5])
// 1 [2, 3, 4] 5
```

- 合并数组
```js
const arr1 = ['two', 'three'];const arr2 = ['one', ...arr1, 'four', 'five'];// ["one", "two", "three", "four", "five"]
```

- 字符串转为真正的数组
```js
[...'hello']    // [ "h", "e", "l", "l", "o" ]

```

## 请依次输出代码结果系列

### 函数表达式和函数声明的区别

```js
var foo = function () {
  console.log('foo1')
}
foo()

var foo = function () {
  console.log('foo2')
}
foo()

function foo() {
  console.log('foo1')
}
foo()

function foo() {
  console.log('foo2')
}
foo()
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
