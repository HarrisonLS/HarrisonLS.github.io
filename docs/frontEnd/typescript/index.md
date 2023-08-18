# TypeScript 基础知识点

- [英文文档](https://www.typescriptlang.org/)
- [中文文档](https://www.tslang.cn/)
- [在线 playground](https://www.typescriptlang.org/zh/play)
- [TypeScript 入门教程](https://ts.xcatliu.com/)
- [全栈教程](https://tut.qzxdp.cn/typescript/decorator.html)

## tsconfig 中文说明

- [全栈教程 tsconfig](https://tut.qzxdp.cn/typescript/tsconfigjson.html#%E7%AE%80%E4%BB%8B)

```json
{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig to read more about this file */

    /* Projects */
    // "incremental": true,                              /* 保存 .tsbuildinfo 文件，以实现项目的增量编译。 */
    // "composite": true,                                /* 启用允许 TypeScript 项目与项目引用一起使用的约束条件。 */
    // "tsBuildInfoFile": "./.tsbuildinfo",              /* 指定 .tsbuildinfo 增量编译文件的路径。 */
    // "disableSourceOfProjectReferenceRedirect": true,  /* 在引用复合项目时禁用优先使用源文件而不是声明文件。 */
    // "disableSolutionSearching": true,                 /* 在编辑时将项目从多项目引用检查中排除。 */
    // "disableReferencedProjectLoad": true,             /* 减少 TypeScript 自动加载的项目数量。 */

    /* Language and Environment */
    "target": "es2016" /* 设置生成的 JavaScript 的 JavaScript 语言版本，并包括兼容的库声明。 */,
    // "lib": [],                                        /* 指定一组捆绑的库声明文件，描述目标运行时环境。 */
    // "jsx": "preserve",                                /* 指定生成的 JSX 代码。 */
    // "experimentalDecorators": true,                   /* 启用对旧实验性装饰器的实验性支持。 */
    // "emitDecoratorMetadata": true,                    /* 在源文件中为装饰的声明发出设计类型元数据。 */
    // "jsxFactory": "",                                 /* 指定在目标为 React JSX 发出时使用的 JSX 工厂函数，例如 'React.createElement' 或 'h'。 */
    // "jsxFragmentFactory": "",                         /* 指定在目标为 React JSX 发出时用于片段的 JSX Fragment 引用，例如 'React.Fragment' 或 'Fragment'。 */
    // "jsxImportSource": "",                            /* 指定使用 'jsx: react-jsx*' 时用于导入 JSX 工厂函数的模块规范符号。 */
    // "reactNamespace": "",                             /* 仅适用于 'react' JSX 发出时，指定用于 'createElement' 的对象调用。 */
    // "noLib": true,                                    /* 禁用包括任何库文件，包括默认的 lib.d.ts。 */
    // "useDefineForClassFields": true,                  /* 发出符合 ECMAScript 标准的类字段。 */
    // "moduleDetection": "auto",                        /* 控制用于检测模块格式 JS 文件的方法。 */

    /* Modules */
    "module": "commonjs" /* 指定生成的模块代码。 */,
    // "rootDir": "./",                                  /* 指定源文件中的根文件夹。 */
    // "moduleResolution": "node10",                     /* 指定 TypeScript 如何从给定的模块规范符号查找文件。 */
    // "baseUrl": "./",                                  /* 指定解析非相对模块名称的基本目录。 */
    // "paths": {},                                      /* 指定一组重新映射导入到其他查找位置的条目。 */
    // "rootDirs": [],                                   /* 在解析模块时，允许将多个文件夹视为一个。 */
    // "typeRoots": [],                                  /* 指定多个文件夹，作为 './node_modules/@types' 的替代。 */
    // "types": [],                                      /* 指定要包含的类型包名称，而无需在源文件中引用。 */
    // "allowUmdGlobalAccess": true,                     /* 允许从模块访问 UMD 全局变量。 */
    // "moduleSuffixes": [],                             /* 解析模块时要搜索的文件名后缀列表。 */
    // "allowImportingTsExtensions": true,               /* 允许导入包含 TypeScript 文件扩展名的文件。需要设置 '--moduleResolution bundler'，并且要么设置 '--noEmit'，要么设置 '--emitDeclarationOnly'。 */
    // "resolvePackageJsonExports": true,                /* 在解析包导入时使用 package.json 的 'exports' 字段。 */
    // "resolvePackageJsonImports": true,                /* 在解析导入时使用 package.json 的 'imports' 字段。 */
    // "customConditions": [],                           /* 在解析导入时设置的附加条件，除了解析器特定的默认条件。 */
    // "resolveJsonModule": true,                        /* 启用导入 .json 文件。 */
    // "allowArbitraryExtensions": true,                 /* 启用导入具有任何扩展名的文件，只要存在声明文件即可。 */
    // "noResolve": true,                                /* 禁止 'import'、'require' 或 '<reference>' 扩展 TypeScript 应该添加到项目中的文件数量。 */

    /* JavaScript Support */
    // "allowJs": true,                                  /* 允许 JavaScript 文件成为程序的一部分。使用 'checkJS' 选项可以从这些文件中获取错误信息。 */
    // "checkJs": true,                                  /* 启用在类型检查的 JavaScript 文件中报告错误。 */
    // "maxNodeModuleJsDepth": 1,                        /* 指定用于检查来自 'node_modules' 的 JavaScript 文件的最大文件夹深度。仅适用于 'allowJs'。 */

    /* Emit */
    // "declaration": true,                              /* 从项目中的 TypeScript 和 JavaScript 文件生成 .d.ts 文件。 */
    // "declarationMap": true,                           /* 为 d.ts 文件创建源映射。 */
    // "emitDeclarationOnly": true,                      /* 仅输出 d.ts 文件而不是 JavaScript 文件。 */
    // "sourceMap": true,                                /* 为生成的 JavaScript 文件创建源映射文件。 */
    // "inlineSourceMap": true,                          /* 在生成的 JavaScript 文件中包含源映射文件。 */
    // "outFile": "./",                                  /* 指定一个文件，将所有输出打包到一个 JavaScript 文件中。如果 'declaration' 为 true，则还指定一个文件，将所有 .d.ts 输出打包到其中。 */
    // "outDir": "./",                                   /* 为所有生成的文件指定一个输出文件夹。 */
    // "removeComments": true,                           /* 禁用注释的输出。 */
    // "noEmit": true,                                   /* 禁用编译时的文件输出。 */
    // "importHelpers": true,                            /* 允许每个项目只导入一次 tslib 中的辅助函数，而不是每个文件都包含它们。 */
    // "importsNotUsedAsValues": "remove",               /* 指定仅用于类型的导入的发出/检查行为。 */
    // "downlevelIteration": true,                       /* 为迭代生成更符合规范但冗长且性能较差的 JavaScript。 */
    // "sourceRoot": "",                                 /* 指定调试器查找引用源代码的根路径。 */
    // "mapRoot": "",                                    /* 指定调试器应该在哪里定位映射文件，而不是生成的位置。 */
    // "inlineSources": true,                            /* 在生成的 JavaScript 中的源映射中包含源代码。 */
    // "emitBOM": true,                                  /* 在输出文件的开头生成一个 UTF-8 字节顺序标记 (BOM)。 */
    // "newLine": "crlf",                                /* 设置用于输出文件的换行符。 */
    // "stripInternal": true,                            /* 禁止生成具有 JSDoc 注释中 '@internal' 的声明。 */
    // "noEmitHelpers": true,                            /* 禁止在编译输出中生成自定义辅助函数，如 '__extends'。 */
    // "noEmitOnError": true,                            /* 如果报告任何类型检查错误，则禁止生成文件。 */
    // "preserveConstEnums": true,                       /* 禁止擦除生成代码中的 'const enum' 声明。 */
    // "declarationDir": "./",                           /* 指定生成的声明文件的输出目录。 */
    // "preserveValueImports": true,                     /* 在 JavaScript 输出中保留未使用的导入值，否则将被删除。 */

    /* Interop Constraints */
    // "isolatedModules": true,                          /* 确保每个文件可以安全地转译，而无需依赖其他导入。 */
    // "verbatimModuleSyntax": true,                     /* 不要转换或省略未标记为仅类型的任何导入或导出，确保它们按照 'module' 设置的格式写入输出文件。 */
    // "allowSyntheticDefaultImports": true,             /* 当模块没有默认导出时，允许使用 'import x from y'。 */
    "esModuleInterop": true /* 发出额外的 JavaScript 以便支持导入 CommonJS 模块。这启用了 'allowSyntheticDefaultImports' 以实现类型兼容性。 */,
    // "preserveSymlinks": true,                         /* 禁止解析符号链接到其真实路径。这与 node 中的同一标志相关。 */
    "forceConsistentCasingInFileNames": true /* 确保导入的大小写正确。 */,

    /* Type Checking */
    "strict": true /* 启用所有严格的类型检查选项。 */,
    // "noImplicitAny": true,                            /* 对具有隐含的 'any' 类型的表达式和声明启用错误报告。 */
    // "strictNullChecks": true,                         /* 在类型检查时考虑 'null' 和 'undefined'。 */
    // "strictFunctionTypes": true,                      /* 在分配函数时，检查参数和返回值是否是子类型兼容的。 */
    // "strictBindCallApply": true,                      /* 检查 'bind'、'call' 和 'apply' 方法的参数是否与原始函数匹配。 */
    // "strictPropertyInitialization": true,             /* 检查在构造函数中声明但未设置的类属性。 */
    // "noImplicitThis": true,                           /* 当 'this' 被赋予类型 'any' 时，启用错误报告。 */
    // "useUnknownInCatchVariables": true,               /* 将默认的 catch 子句变量设置为 'unknown' 而不是 'any'。 */
    // "alwaysStrict": true,                             /* 确保始终发出 'use strict'。 */
    // "noUnusedLocals": true,                           /* 在本地变量未被读取时启用错误报告。 */
    // "noUnusedParameters": true,                       /* 当函数参数未被读取时引发错误。 */
    // "exactOptionalPropertyTypes": true,               /* 将可选属性类型解释为所写的内容，而不是添加 'undefined'。 */
    // "noImplicitReturns": true,                        /* 对于在函数中没有显式返回的代码路径启用错误报告。 */
    // "noFallthroughCasesInSwitch": true,               /* 对于 switch 语句中的 fallthrough 情况启用错误报告。 */
    // "noUncheckedIndexedAccess": true,                 /* 使用索引访问时，将 'undefined' 添加到类型中。 */
    // "noImplicitOverride": true,                       /* 确保派生类中的覆盖成员标记为 override 修饰符。 */
    // "noPropertyAccessFromIndexSignature": true,       /* 强制使用索引访问器来访问使用索引类型声明的键。 */
    // "allowUnusedLabels": true,                        /* 禁用未使用标签的错误报告。 */
    // "allowUnreachableCode": true,                     /* 禁用无法访问的代码的错误报告。 */

    /* Completeness */
    // "skipDefaultLibCheck": true,                      /* 跳过对 TypeScript 中包含的 .d.ts 文件进行类型检查。 */
    "skipLibCheck": true /* 跳过对所有 .d.ts 文件进行类型检查。 */
  }
}
```

## 官网学习

### 基础类型

- 布尔值 boolean
- 数字 number
- 字符串 string
- 数组 [] || Array<元素类型>
- 元组 Tuple
- 枚举

```ts
// 默认情况下，从0开始为元素编号
enum Color {
  Red,
  Green,
  Blue,
} // 0 1 2
let c: Color = Color.Green;

enum Color1 {
  Red = 1,
  Green,
  Blue,
} // 1 2 3
let c1: Color1 = Color1.Green;

enum Color2 {
  Red = 1,
  Green = 2,
  Blue = 4,
} // 1 2 4
let c2: Color2 = Color2.Green;
```

- Any
- void
- Null 和 Undefined
- Never
- Object

### 类型断言

用户主观意见

- 尖括号语法

```ts
let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;
```

- as 语法

```ts
let some_value: any = "this is a string";

let str_length: number = (someValue as string).length;
```

### 泛型

```ts
/*
 * 何为泛型
 */
function identity_number(arg: number): number {
  return arg;
}

function identity_any(arg: any): any {
  return arg;
}

function identity<T>(arg: T): T {
  return arg;
}
```

- 泛型类型

```ts
/*
 * 泛型类型
 */
function identity_type<T>(arg: T): T {
  return arg;
}

// let myIdentity: <T>(arg: T) => T = identity_type;

/*
 * 泛型接口
 */
interface GenericIdentityFn<T> {
  (arg: T): T;
}

let myIdentity: GenericIdentityFn<number> = identity_type;

/*
 * 泛型类
 */
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};
```

## TypeScript 入门教程

### 联合类型

```ts
let mySaturday: string | number;
mySaturday = "weekend";
mySaturday = 6;
```

### 对象的类型 —— 接口

```ts
interface Person {
  name: string;
  age: number;
  // 添加问号变为可选属性
  // age?: number;
}

let harrison: Person = {
  name: "harrison",
  age: 25,
};
// 缺少或多出属性都会引起typescript检查报错
```

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
type StatusCode = 200 | 301 | 400 | 500 | 502;
type PossibleDataTypes = string | number | (() => unknown);

const status: StatusCode = 502;

// 抽离一个函数类型
type Handler = (e: Event) => void;

const clickHandler: Handler = (e) => {};
const moveHandler: Handler = (e) => {};
const dragHandler: Handler = (e) => {};
```

#### 字面量类型

```ts
interface Tmp {
  bool: true | false;
  num: 1 | 2 | 3;
  str: "lin" | "sen";
}
```

#### 联合类型

```typescript
interface Tmp {
  user:
    | {
        vip: true;
        expires: string;
      }
    | {
        vip: false;
        promotion: string;
      };
}

declare var tmp: Tmp;

if (tmp.user.vip) {
  console.log(tmp.user.expires);
}
```

#### 交叉类型

```typescript
interface NameStruct {
  name: string;
}

interface AgeStruct {
  age: number;
}

type ProfileStruct = NameStruct & AgeStruct;

const profile: ProfileStruct = {
  name: "linbudu",
  age: 18,
};
```

#### 对象字面量类型

```typescript
// 对象字面量类型就是一个对象类型的值。当然，这也就意味着这个对象的值全都为字面量值
interface Tmp {
  obj: {
    name: "linbudu";
    age: 18;
  };
}

const tmp: Tmp = {
  obj: {
    name: "linbudu",
    age: 18,
  },
};
```

#### 枚举

```ts
// 可以同时使用字符串枚举值和数字枚举值
enum Mixed {
  Num = 599,
  Str = "linsen",
}
```

**枚举和对象的重要差异在于，对象是单向映射的，我们只能从键映射到键值。而枚举是双向映射的，即你可以从枚举成员映射到枚举值，也可以从枚举值映射到枚举成员**

```ts
enum Items {
  Foo,
  Bar,
  Baz,
}

const fooValue = Items.Foo; // 0
const fooKey = Items[0]; // "Foo"
```

### 函数

#### 函数的类型签名

```typescript
function foo(name: string): number {
  return name.length;
}
```

#### 函数重载签名

```ts
function func(foo: number, bar: true): string;
function func(foo: number, bar?: false): number;
function func(foo: number, bar?: boolean): string | number {
  if (bar) {
    return String(foo);
  } else {
    return foo * 599;
  }
}

const res1 = func(599); // number
const res2 = func(599, true); // string
const res3 = func(599, false); // number
```

#### 异步函数、Generator 函数等类型签名

```ts
async function asyncFunc(): Promise<void> {}

function* genFunc(): Iterable<void> {}

async function* asyncGenFunc(): AsyncIterable<void> {}
```

## 部分类型工具

### Exclude

用来从联合类型 UnionType 里面，删除某些类型 ExcludedMembers，组成一个新的类型返回。

```ts
type T1 = Exclude<"a" | "b" | "c", "a">; // 'b'|'c'
type T2 = Exclude<"a" | "b" | "c", "a" | "b">; // 'c'
type T3 = Exclude<string | (() => void), Function>; // string
type T4 = Exclude<string | string[], any[]>; // string
type T5 = Exclude<(() => void) | null, Function>; // null
type T6 = Exclude<200 | 400, 200 | 201>; // 400
type T7 = Exclude<number, boolean>; // number
```

实现方法

```ts
type Exclude<T, U> = T extends U ? never : T;
```

### Extract

用来从联合类型 UnionType 之中，提取指定类型 Union，组成一个新类型返回。它与 Exclude<T, U>正好相反。
如果参数类型 Union 不包含在联合类型 UnionType 之中，则返回 never 类型。

```ts
type T1 = Extract<"a" | "b" | "c", "a">; // 'a'
type T2 = Extract<"a" | "b" | "c", "a" | "b">; // 'a'|'b'
type T3 = Extract<"a" | "b" | "c", "a" | "d">; // 'a'
type T4 = Extract<string | string[], any[]>; // string[]
type T5 = Extract<(() => void) | null, Function>; // () => void
type T6 = Extract<200 | 400, 200 | 201>; // 200
```

实现

```ts
type Extract<T, U> = T extends U ? T : never;
```

### NonNullable

用来从联合类型 Type 删除 null 类型和 undefined 类型，组成一个新类型返回，也就是返回 Type 的非空类型版本。

```ts
// string|number
type T1 = NonNullable<string | number | undefined>;

// string[]
type T2 = NonNullable<string[] | null | undefined>;

type T3 = NonNullable<boolean>; // boolean
type T4 = NonNullable<number | null>; // number
type T5 = NonNullable<string | undefined>; // string
type T6 = NonNullable<null | undefined>; // never
```

实现

```ts
// T & {}等同于求T & Object的交叉类型。由于 TypeScript 的非空值都属于Object的子类型，所以会返回自身；
// 而null和undefined不属于Object，会返回never类型。
type NonNullable<T> = T & {};
```

### Omit

用来从对象类型 Type 中，删除指定的属性 Keys，组成一个新的对象类型返回。

```ts
interface A {
  x: number;
  y: number;
}

type T1 = Omit<A, "x">; // { y: number }
type T2 = Omit<A, "y">; // { x: number }
type T3 = Omit<A, "x" | "y">; // { }
```

实现

```ts
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
```

### Partial

返回一个新类型，将参数类型 Type 的所有属性变为可选属性。

```ts
interface A {
  x: number;
  y: number;
}

type T = Partial<A>; // { x?: number; y?: number; }
```

实现

```ts
type Partial<T> = {
  [P in keyof T]?: T[P];
};

// 符号+?表示增加可选属性的“问号”
type Partial<T> = {
  [P in keyof T]+?: T[P];
};
```

### Required

返回一个新类型，将参数类型 Type 的所有属性变为必选属性。它与 Partial 的作用正好相反。

```ts
interface A {
  x?: number;
  y: number;
}

type T = Required<A>; // { x: number; y: number; }
```

实现

```ts
// 符号-?表示去除可选属性的“问号”
type Required<T> = {
  [P in keyof T]-?: T[P];
};
```

### Pick

返回一个新的对象类型，第一个参数 Type 是一个对象类型，第二个参数 Keys 是 Type 里面被选定的键名。

```ts
interface A {
  x: number;
  y: number;
}

type T1 = Pick<A, "x">; // { x: number }
type T2 = Pick<A, "y">; // { y: number }
type T3 = Pick<A, "x" | "y">; // { x: number; y: number }
```

实现

```ts
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};
```

### 字符串类型工具

#### Uppercase

```ts
type A = "hello";

// "HELLO"
type B = Uppercase<A>;
```

#### Lowercase

```ts
type A = "HELLO";

// "hello"
type B = Lowercase<A>;
```

#### Capitalize

```ts
type A = "hello";

// "Hello"
type B = Capitalize<A>;
```

#### Uncapitalize

```ts
type A = "HELLO";

// "hELLO"
type B = Uncapitalize<A>;
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
