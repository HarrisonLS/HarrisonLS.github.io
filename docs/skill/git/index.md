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
