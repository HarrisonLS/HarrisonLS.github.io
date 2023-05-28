# javascript 相关

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
