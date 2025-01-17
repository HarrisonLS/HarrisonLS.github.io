# eslint 代码编写校验配置

[eslint 官网](https://eslint.nodejs.cn/)

## 基本使用规则

### 规则错误级别
- "off" 或 0 - 关闭规则
- "warn" 或 1 - 打开规则作为警告（不影响退出代码）
- "error" 或 2 - 打开规则作为错误（触发时退出代码为 1`)

## React + Typescript 项目类型配置

```js
module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      tsx: true,
    },
    ecmaVersion: 2020,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/ban-types": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
```
