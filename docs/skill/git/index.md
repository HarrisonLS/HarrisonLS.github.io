### ![image.png](https://cdn.nlark.com/yuque/0/2021/png/605135/1636993583886-0dfe4b11-3764-40bb-8fc3-8b83e5c6223a.png#clientId=uff9c0ec7-eba8-4&from=paste&id=u332ee9f8&originHeight=227&originWidth=800&originalType=url&ratio=1&size=109405&status=done&style=none&taskId=u6998750b-31cb-4525-8faa-d627a4c9256)

[git 官方文档](https://git-scm.com/about)
[廖雪峰](https://www.liaoxuefeng.com/wiki/896043488029600)

git remote 查看的是主机名
git branch 查看的是分支名

### git 重要命令

#### git clone

克隆某资源的版本库，相当于下载别人的代码。

```shell
$ git clone <版本库的网址>
```

指定本地目录名

```shell
$ git clone <版本库的网址> <本地目录名>
```

todo:整理

#### git merge

![image.png](https://cdn.nlark.com/yuque/0/2021/png/605135/1637050969330-4f4c06e7-872c-4b6d-8f51-f2f570592973.png#clientId=u3fdb676d-3ca0-4&from=paste&height=446&id=u8f9c4d01&originHeight=892&originWidth=1920&originalType=binary&ratio=1&size=190648&status=done&style=none&taskId=u7ad5d33a-7ebb-487c-9780-3a0016646ca&width=960)

冲突解决
[https://www.liaoxuefeng.com/wiki/896043488029600/900004111093344](https://www.liaoxuefeng.com/wiki/896043488029600/900004111093344)

#### git tag

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

![image.png](https://cdn.nlark.com/yuque/0/2021/png/605135/1629891309760-6b85add0-6b1e-493b-811a-b3a9f19bf4ed.png#clientId=u599fc3f7-dfce-4&from=paste&height=474&id=uc5ac9a93&originHeight=948&originWidth=1034&originalType=binary&ratio=1&size=149274&status=done&style=none&taskId=u6201a93e-d09c-4e88-ac62-3d67d0bf362&width=517)

### git push 的时候代码与仓库不一致（仓库有文件未拉取到本地）

[https://blog.csdn.net/k_young1997/article/details/90489734](https://blog.csdn.net/k_young1997/article/details/90489734)

git pull --rebase origin master

![image.png](https://cdn.nlark.com/yuque/0/2021/png/605135/1628585066275-8fc19c43-5157-483b-955a-11f0ad32773d.png#clientId=ud2172002-005c-4&from=paste&height=382&id=ua4e78c98&originHeight=763&originWidth=985&originalType=binary&ratio=1&size=91051&status=done&style=none&taskId=ua083bec2-ce93-47c7-a68e-08c59de371e&width=492.5)

### git 初始化账号密码输入错误，导致绑定失败

![image.png](https://cdn.nlark.com/yuque/0/2021/png/605135/1632386807554-9d37a1f6-0bbf-4e2e-a9fe-df8dc67c9b82.png#clientId=u5b443532-442d-4&from=paste&height=36&id=ue38c03e7&originHeight=72&originWidth=723&originalType=binary&ratio=1&size=35563&status=done&style=none&taskId=ue7aaa4c4-05df-4996-b347-b9a33308fc6&width=361.5)
打开控制面板，找到“用户账户”。
![image.png](https://cdn.nlark.com/yuque/0/2021/png/605135/1632386702257-eeeda8de-6560-42b5-ac8a-ddacafbf30e9.png#clientId=u5b443532-442d-4&from=paste&height=278&id=u72cb3607&originHeight=556&originWidth=736&originalType=binary&ratio=1&size=122994&status=done&style=none&taskId=u78c2e9b8-95aa-48a3-86c2-e61e86db334&width=368)
找到管理凭据
![image.png](https://cdn.nlark.com/yuque/0/2021/png/605135/1632386720350-7176158e-43e8-4c41-bc93-6fcd53ef2e33.png#clientId=u5b443532-442d-4&from=paste&height=289&id=ue50a02f8&originHeight=577&originWidth=769&originalType=binary&ratio=1&size=79523&status=done&style=none&taskId=ue979f178-576f-44ef-9600-3aaae2342b1&width=384.5)
找到需要修改的凭据
![image.png](https://cdn.nlark.com/yuque/0/2021/png/605135/1632386749289-9dfe5b6d-cc10-4147-b2c4-d3c415191eb4.png#clientId=u5b443532-442d-4&from=paste&height=289&id=ud0e8741f&originHeight=577&originWidth=938&originalType=binary&ratio=1&size=131236&status=done&style=none&taskId=udefac50e-5fe6-4ad9-9fee-ee605f817b3&width=469)

修改即可
![image.png](https://cdn.nlark.com/yuque/0/2021/png/605135/1632386788335-2b7adeaa-672f-4cce-8155-d00928602c53.png#clientId=u5b443532-442d-4&from=paste&height=289&id=u01a22a8c&originHeight=577&originWidth=938&originalType=binary&ratio=1&size=65666&status=done&style=none&taskId=u5beb67ac-6dbb-4347-8d16-2864cd7a462&width=469)

再次 push 后发现不报错了

![image.png](https://cdn.nlark.com/yuque/0/2021/png/605135/1632386825052-109f106f-aec1-44f2-9a18-fdbee418c13c.png#clientId=u5b443532-442d-4&from=paste&height=124&id=u3d4cbdf0&originHeight=248&originWidth=897&originalType=binary&ratio=1&size=124523&status=done&style=none&taskId=u3646f80a-d0d0-48d6-9fa5-f255d155af1&width=448.5)
