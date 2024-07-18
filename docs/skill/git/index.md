# git 工具使用

![git_logi](/image/git/git_logi.png)

- [git 官方文档](https://git-scm.com/about)
- [廖雪峰](https://www.liaoxuefeng.com/wiki/896043488029600)
- [可视化的 git 练习网站](https://learngitbranching.js.org/?locale=zh_CN)

git remote 查看的是主机名  
git branch 查看的是分支名

## git 提交规范

- [约定式提交](https://www.conventionalcommits.org/zh-hans/v1.0.0-beta.4/)
- [commitlint+husky 约束 git 的 commit](https://juejin.cn/post/7103170376531705864?searchId=202311140014415A9B5CFFC4867C865C6E)

commit 的类型：

- feat: 新功能、新特性
- fix: 修改 bug
- perf: 更改代码，以提高性能（在不影响代码内部行为的前提下，对程序性能进行优化）
- refactor: 代码重构（重构，在不影响代码内部行为、功能下的代码修改）
- docs: 文档修改
- style: 代码格式修改, 注意不是 css 修改（例如分号修改）
- test: 测试用例新增、修改
- build: 影响项目构建或依赖项修改
- revert: 恢复上一次提交
- ci: 持续集成相关文件修改
- chore: 其他修改（不在上述类型中的修改）
- release: 发布新版本

## git 重要命令

### git clone

克隆某资源的版本库，相当于下载别人的代码。

```shell
$ git clone <版本库的网址>
```

指定本地目录名

```shell
$ git clone <版本库的网址> <本地目录名>
```

### git merge

冲突解决
[https://www.liaoxuefeng.com/wiki/896043488029600/900004111093344](https://www.liaoxuefeng.com/wiki/896043488029600/900004111093344)

### git tag

附注标签

```shell
$ git tag -a tagName -m "标注信息内容"
```

删除本地 tag

```shell
$ git tag -d "V1.0.0"
```

删除远程 tag

```shell
$ git push origin :refs/tags/v20190514
```

### git flow

### git 创建并链接分支

```git
// 1,从已有的分支创建新的分支(如从master分支),创建一个dev分支
git checkout -b dev

// 2,创建完可以查看一下,分支已经切换到dev
git branch
dev
master

// 3.建立本地到上游（远端）仓的链接 --这样代码才能提交上去
git branch --set-upstream-to=origin/dev

// 取消对master的跟踪
git branch --unset-upstream master
```

### git 修改本地分支名字

```javascript
git branch -m 旧本地分支名 新本地分支名
```

### git push 的时候代码与仓库不一致（仓库有文件未拉取到本地）

[https://blog.csdn.net/k_young1997/article/details/90489734](https://blog.csdn.net/k_young1997/article/details/90489734)

git pull --rebase origin master

### git 初始化账号密码输入错误，导致绑定失败

### git fetch 和 git pull 的区别

git fetch 是将远程主机的最新内容拉到本地，用户在检查了以后决定是否合并到工作本机分支中。  
而 git pull 则是将远程主机的最新内容拉下来后直接合并，即：git pull = git fetch + git merge，这样可能会产生冲突，需要手动解决。


## GitHub 上的克隆仓库方式

1. **HTTPS**：
2. **SSH**：
3. **GitHub CLI**：

### HTTPS

**HTTPS** 是超文本传输安全协议，是 HTTP 协议的安全版本。使用 HTTPS 克隆仓库是最直接的方法：

- **安全性**：数据传输过程中经过 SSL 加密，保证了传输的安全性。
- **便利性**：不需要额外配置 SSH 密钥。
- **访问控制**：通过用户名和密码进行访问控制，也可以使用个人访问令牌（PAT）。
- **使用方式**：
  ```sh
  git clone https://github.com/username/repo-name.git
  ```

### SSH

**SSH** 是安全外壳协议，是一种网络协议，用于加密方式远程登录到服务器。

- **安全性**：使用非对称加密技术，安全性更高。
- **便利性**：需要在本地生成 SSH 密钥，并将公钥添加到 GitHub 账户。
- **访问控制**：通过 SSH 密钥进行访问控制，适合自动化脚本和持续集成系统。
- **使用方式**：
  ```sh
  git clone git@github.com:username/repo-name.git
  ```

### GitHub CLI

**GitHub CLI** 是 GitHub 的命令行工具，它提供了一种更简单、更一致的方式来使用 GitHub。

- **统一性**：提供了一个统一的界面来管理多个 Git 仓库。
- **功能丰富**：除了克隆仓库，还支持其他 GitHub 功能，如 issue 管理、PR 管理等。
- **配置简单**：通过 `gh auth login` 命令进行身份验证，之后即可使用。
- **使用方式**：
  ```sh
  gh repo clone username/repo-name
  ```

### 区别

- **安全性**：
  - HTTPS：数据传输加密，适合大多数用户。
  - SSH：更高级别的安全性，适合需要自动化和高级访问控制的场景。
  - GitHub CLI：通过 OAuth 进行身份验证，安全性较高。

- **配置复杂度**：
  - HTTPS：无需额外配置，直接使用用户名和密码或 PAT。
  - SSH：需要生成和配置 SSH 密钥。
  - GitHub CLI：需要安装 CLI 工具并通过 `gh auth login` 进行身份验证。

- **使用场景**：
  - HTTPS：适合所有用户，特别是那些不需要自动化脚本的用户。
  - SSH：适合需要自动化操作和高级访问控制的用户。
  - GitHub CLI：适合需要统一管理 GitHub 操作的用户。

- **访问控制**：
  - HTTPS：基于用户名和密码或 PAT。
  - SSH：基于 SSH 密钥。
  - GitHub CLI：基于 OAuth。

