# 设计模式

## 策略模式

要实现某一个功能，有多种方案可以选择。我们定义策略，把它们一个个封装起来，并且使它们可以相互转换。

需要改造的代码

```js
function checkAuth(data) {
  if (data.role !== 'juejin') {
    console.log('不是掘金用户')
    return false
  }
  if (data.grade < 1) {
    console.log('掘金等级小于 1 级')
    return false
  }
  if (data.job !== 'FE') {
    console.log('不是前端开发')
    return false
  }
  if (data.type !== 'eat melons') {
    console.log('不是吃瓜群众')
    return false
  }
}
```

以上代码中的策略项无法复用，而且会违反开闭原则。
::: tip 开闭原则
一个软件实体如类，模块和函数应该对扩展开放，对修改关闭。
:::

用策略模式改造后的代码

```js
// 维护权限列表
const jobList = ['FE', 'BE']

// 策略
var strategies = {
  checkRole: function (value) {
    if (value === 'juejin') {
      return true
    }
    return false
  },
  checkGrade: function (value) {
    if (value >= 1) {
      return true
    }
    return false
  },
  checkJob: function (value) {
    if (jobList.indexOf(value) > 1) {
      return true
    }
    return false
  },
  checkEatType: function (value) {
    if (value === 'eat melons') {
      return true
    }
    return false
  },
}

// 校验规则
var Validator = function () {
  this.cache = []

  // 添加策略事件
  this.add = function (value, method) {
    this.cache.push(function () {
      return strategies[method](value)
    })
  }

  // 检查
  this.check = function () {
    for (let i = 0; i < this.cache.length; i++) {
      let valiFn = this.cache[i]
      var data = valiFn() // 开始检查
      if (!data) {
        return false
      }
    }
    return true
  }
}
```

用以下条件验证代码

- 掘金用户
- 掘金等级 1 级以上

```js
var compose1 = function () {
  var validator = new Validator()
  const data1 = {
    role: 'juejin',
    grade: 3,
  }
  validator.add(data1.role, 'checkRole')
  validator.add(data1.grade, 'checkGrade')
  const result = validator.check()
  return result
}
```

## 发布-订阅模式

## 装饰器模式

引申 react HOC

## 代理模式

## 相关文章

[前端设计模式](https://github.com/PDKSophia/DesignPatternsToJS/blob/master/%E5%89%8D%E7%AB%AF%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F.md)
