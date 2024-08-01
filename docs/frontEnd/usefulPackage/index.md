# 实用三方包

### @monaco-editor/react

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
