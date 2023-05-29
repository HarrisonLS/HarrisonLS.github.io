# TypeScript 基础知识点

- [英文文档](https://www.typescriptlang.org/)
- [中文文档](https://www.tslang.cn/)

## 掘金——Typescript 全面进阶指南

### 准备工作

安装 vscode 插件：[TypeScript Importer](https://link.juejin.cn/?target=https%3A%2F%2Fmarketplace.visualstudio.com%2Fitems%3FitemName%3Dpmneo.tsimporter) 、[Move TS](https://link.juejin.cn/?target=https%3A%2F%2Fmarketplace.visualstudio.com%2Fitems%3FitemName%3Dstringham.move-ts)
安装全局环境，并创建配置文件 tsconfig.json

```shell
// 安装全局环境
npm i ts-node typescript -g

// 创建tsconfig.json
tsc --init
```

### 概念解析

#### 类型别名 type

```typescript
type Handler = (e: Event) => void

const clickHandler: Handler = (e) => {}
const moveHandler: Handler = (e) => {}
const dragHandler: Handler = (e) => {}
```

#### 联合类型

```typescript
interface Tmp {
  user:
    | {
        vip: true
        expires: string
      }
    | {
        vip: false
        promotion: string
      }
}

declare var tmp: Tmp

if (tmp.user.vip) {
  console.log(tmp.user.expires)
}
```

#### 交叉类型

```typescript
interface NameStruct {
  name: string
}

interface AgeStruct {
  age: number
}

type ProfileStruct = NameStruct & AgeStruct

const profile: ProfileStruct = {
  name: 'linbudu',
  age: 18,
}
```

#### 对象字面量类型

```typescript
// 对象字面量类型就是一个对象类型的值。当然，这也就意味着这个对象的值全都为字面量值
interface Tmp {
  obj: {
    name: 'linbudu'
    age: 18
  }
}

const tmp: Tmp = {
  obj: {
    name: 'linbudu',
    age: 18,
  },
}
```

#### 函数的类型签名

```typescript
function foo(name: string): number {
  return name.length
}
```

## 类型挑战

- 仓库：[https://github.com/type-challenges/type-challenges/blob/main/README.zh-CN.md](https://github.com/type-challenges/type-challenges/blob/main/README.zh-CN.md)
- 本机项目路径：E:\Programming\vscode_projects\front_end\typescript\typeChallenges

## 疑难解惑

### TypeScript 中的“as const”是什么意思？

[https://blog.csdn.net/weixin_45747310/article/details/120479974](https://blog.csdn.net/weixin_45747310/article/details/120479974)


### extends 关键字

[https://blog.csdn.net/kelly0721/article/details/122968285](https://blog.csdn.net/kelly0721/article/details/122968285)

### infer 关键字

[https://www.jianshu.com/p/08e61d2d4a14](https://www.jianshu.com/p/08e61d2d4a14)

### 报错 Cannot write file 'xxx.js' because it would overwrite input file

[深入理解 ts](https://jkchao.github.io/typescript-book-chinese/faqs/tsconfig-behavior.html#%E4%B8%BA%E4%BB%80%E4%B9%88%E6%8A%8A%E4%B8%80%E4%B8%AA%E6%96%87%E4%BB%B6%E6%94%BE%E5%85%A5%E3%80%8Cexclude%E3%80%8D%E9%80%89%E9%A1%B9%E4%B8%AD%EF%BC%8C%E5%AE%83%E4%BB%8D%E7%84%B6%E4%BC%9A%E8%A2%AB%E7%BC%96%E8%AF%91%E5%99%A8%E9%80%89%E4%B8%AD%EF%BC%9F)
对于 TypeScript 文件来说，在默认情况下，编译器将在同一目录中生成与 JavaScript 相同文件名的文件。因为 TypeScript 文件与编译后的文件总是拥有不同的后缀，这么做是安全的。然而，如果你设置  allowJs  编译选项为  true  和没有设置任何的编译输出属性（outFile  和  outDir），编译器将会尝试使用相同的规则来编译文件，这将导致发出的 JavaScript 文件与源文件具有相同的文件名。为了避免意外覆盖源文件，编译器将会发出此警告，并跳过编写输出文件。
有多种方法可以解决此问题，但所有这些方法都涉及配置编译器选项，因此建议你在项目根目录中的 tsconfig.json 文件来启用此功能。如果你不想编译 JavaScript 文件，你只需要将  allowJs  选项设置为  false；如果你确实想要包含和编译这些 JavaScript 文件，你应该设置  outDir  或者  outFile  选项，定向到其他位置，这样他们就不会与源文件冲突。如果你仅仅是想包含这些 JavaScript 文件，但是不需要编译，设置  noEmit  选项为  true  可以跳过编译检查。

### Cannot find module './index.less' or its corresponding type declarations.ts(2307）

[react-app-env.d.ts 的作用以及如何生成的？](https://segmentfault.com/a/1190000038874526)
