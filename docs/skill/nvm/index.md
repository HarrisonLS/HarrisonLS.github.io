# nvm 工具使用

[nvm github 地址](https://github.com/nvm-sh/nvm)

可以使用 Node Version Manager（nvm）来更新 Node.js 到特定的版本，包括从 16.19.0 升级到 20.11.0。下面是具体的步骤：

1. **安装 nvm：** 如果你还没有安装 nvm，可以通过终端命令进行安装。可以使用以下命令来安装 nvm：

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

或者

```bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

2. **使用 nvm 安装 Node.js 20.11.0：**

- 首先，检查当前安装的 Node.js 版本。在终端中执行以下命令：

```bash
node --version
```

- 如果之前没有安装 Node.js 20.11.0，你可以通过以下命令来安装：

```bash
nvm install 20.11.0
```

3. **切换到新版本：** 安装完成后，可以使用以下命令切换到新安装的 Node.js 版本：

```bash
nvm use 20.11.0
```

4. **验证版本：** 最后，可以再次执行以下命令来验证 Node.js 版本：

```bash
node --version
```

以上步骤将帮助你在 macOS 上使用 nvm 来更新 Node.js 到指定的版本。记得在进行版本切换之前，备份你的项目或者确保你的项目在新版本下能够正常工作。
