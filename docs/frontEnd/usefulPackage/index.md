# 实用三方包

## NestJS相关

### class-validator
`class-validator` 是一个用于数据验证的 npm 包，它提供了一种基于装饰器和非装饰器的验证方式。这个库在内部使用 `validator.js` 来执行验证，并且可以在浏览器和 Node.js 平台上运行。它非常适合与 TypeScript 结合使用，可以在编译时提供类型安全保障，并减少运行时错误的可能性。


#### 使用示例
使用 `class-validator` 时，你可以在你的类上添加装饰器来定义想要验证的属性。例如：
```typescript
import { IsEmail, IsNotEmpty, MinLength, MaxLength } from 'class-validator';

export class User {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(20)
  name: string;
}
```
然后，你可以使用 `validate` 或 `validateOrReject` 方法来执行实际的验证：
```typescript
import { validate } from 'class-validator';

const user = new User();
user.email = 'example@mail.com';
user.name = 'John';

validate(user).then(errors => {
  if (errors.length > 0) {
    console.log('Validation failed', errors);
  } else {
    console.log('Validation succeeded');
  }
});
```
#### 自定义验证
`class-validator` 也支持自定义验证逻辑。你可以创建自定义的验证类或装饰器来满足特定的验证需求。例如，创建一个自定义验证装饰器 `@IsLongerThan`：
```typescript
import { registerDecorator } from 'class-validator';

export function IsLongerThan(property: string) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isLongerThan',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [property],
      validator: {
        validate(value: string, args: any) {
          const relatedProperty = (args.object as any)[args.constraints[0]];
          return value.length > relatedProperty.length;
        },
      },
    });
  };
}
```
### class-transformer
`class-transformer` 是一个 npm 包，它提供了一种将普通 JavaScript 对象（通常从 JSON 解析得到）转换为类实例的方法，并且可以用来转换类的属性。这个库通常与 `class-validator` 一起使用，后者是一个流行的用于验证 JavaScript 对象和类实例的库。

1. **转换普通对象到类实例**：`class-transformer` 允许你将普通 JavaScript 对象（plain object）转换为类的实例，这在使用装饰器进行验证之前非常有用。

2. **属性转换**：它还提供了转换属性的功能，例如将字符串日期转换为 `Date` 对象。

3. **嵌套对象转换**：能够处理嵌套对象和数组，将它们转换为相应的类实例。

4. **自定义转换器**：支持定义自定义转换器，以处理特殊的转换逻辑。

#### 使用示例

```typescript
import { plainToClass, ClassTransformer } from 'class-transformer';
import { IsString, IsInt } from 'class-validator';

class User {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsInt()
  age: number;
}

const userObject = {
  firstName: 'John',
  lastName: 'Doe',
  age: '30', // 将被转换为数字类型
};

const user = plainToClass(User, userObject);
console.log(user instanceof User); // true
console.log(user.age); // 30
```


## @monaco-editor/react

- [monaco-editor/react](https://www.npmjs.com/package/@monaco-editor/react)

一个封装了 Monaco Editor 的 React 组件库,由 Visual Studio Code 团队开发的代码编辑器，它提供了丰富的代码编辑功能，包括语法高亮、智能感知、代码自动补全等。


```jsx
import Editor from '@monaco-editor/react';

function App() {

    const code =`import { useEffect, useState } from "react";

function App() {
    const [num, setNum] = useState(() => {
        const num1 = 1 + 2;
        const num2 = 2 + 3;
        return num1 + num2
    });

    return (
        <div onClick={() => setNum((prevNum) => prevNum + 1)}>{num}</div>
    );
}

export default App;
`;

    return <Editor height="500px" defaultLanguage="javascript" defaultValue={code} />;
}

export default App;

```

![monaco](./assets/mpnaco.png)
