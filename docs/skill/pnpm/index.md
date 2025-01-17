# Pnpm 包管理工具使用

[官方文档](https://www.pnpm.cn/installation)

## 安装

### window 系统

```javascript
npm install -g pnpm@next-7
```

### mac 系统

```shell
brew install pnpm
```

## 升级

```shell
pnpm add -g pnpm
```

## 使用方法

| npm 命令    | pnpm 等价命令 |
| ----------- | ------------- |
| npm install | pnpm install  |
| npm add pkg | pnpm add pkg  |
| npm cmd     | pnpm cmd      |

版本兼容性：

pnpm 7 需要至少 Node.js v14 的版本，而 pnpm 9 需要至少 Node.js v18.12 的版本。

| 兼容性     | pnpm 7 | pnpm 8 | pnpm 9 |
| ---------- | ------ | ------ | ------ |
| Node.js 12 | ❌     | ❌     | ❌     |
| Node.js 14 | ✔️     | ❌     | ❌     |
| Node.js 16 | ✔️     | ✔️     | ❌     |
| Node.js 18 | ✔️     | ✔️     | ✔️     |
| Node.js 20 | ✔️     | ✔️     | ✔️     |

## 卸载

[https://www.pnpm.cn/uninstall](https://www.pnpm.cn/uninstall)

<!-- ## 参考文档： -->
<!-- [为什么推荐使用pnpm](https://zhuanlan.zhihu.com/p/419399115) -->
<!-- [什么是pnpm？](https://www.jianshu.com/p/a805e182798f) -->
