# package.json 依赖配置安装

## Tailwind CSS

[Tailwind官网安装](https://www.tailwindcss.cn/docs/guides/vite#react)

```shell
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## typescript

安装 typescript 相关包

```shell

npm install typescript ts-node @types/node --save-dev

```

创建 tsconfig.json

```shell
npx tsc --init
```

[typescript.json 具体配置](/frontEnd/typescript/)


## babel

### @babel/standalone包
 Babel 的一个独立构建版本，它允许你在浏览器和其他非 Node.js 环境中使用 Babel
```shell
# 安装包本身与类型注释
npm i --save @babel/standalone
npm i --save-dev @types/babel__standalone

```