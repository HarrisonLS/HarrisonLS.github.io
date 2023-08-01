# Docker

[VSCode + Docker 配置完美开发环境](https://juejin.cn/post/7002505996220416037?utm_source=gold_browser_extension)
[从 0 开始了解 Docker](https://juejin.cn/post/6844903591375814669#heading-5)
[Docker 镜像加速](https://www.runoob.com/docker/docker-mirror-acceleration.html)
[利用 docker 搭建前端开发环境](https://juejin.cn/post/6932808129189150734)

## docker 命令

```bash
#检查docker的版本
docker version
```

```bash
# 查询镜像
docker serach 镜像名字
```

![image.png](/image/docker/docker_search.png)

```bash
# 下载容器镜像
docker pull learn/tutorial

# 执行pull命令的时候要写完整的名字，比如"learn/tutorial"。
```

![image.png](/image/docker/docker_pull.png)

```bash
# 容器运行进程
docker run learn/tutorial echo "hello word"
```

![image.png](/image/docker/docker_run.png)

## docker 入门教程

[docker 入门教程](https://www.docker.org.cn/book/docker/prepare-docker-5.html)

### 1、什么是 docker

Docker 是一个开源的引擎，可以轻松的为任何应用创建一个轻量级的、可移植的、自给自足的容器。开发者在笔记本上编译测试通过的容器可以批量地在生产环境中部署，包括 VMs（虚拟机）、 [bare metal](http://www.whatis.com.cn/word_5275.htm)、OpenStack 集群和其他的基础应用平台。

#### Docker 通常用于如下场景：

- web 应用的自动化打包和发布；
- 自动化测试和持续集成、发布；
- 在服务型环境中部署和调整数据库或其他的后台应用；
- 从头编译或者扩展现有的 OpenShift 或 Cloud Foundry 平台来搭建自己的 PaaS 环境。

```bash
#检查docker的版本
docker version
```

### 2、搜索可用 docker 镜像

使用 docker 最简单的方式莫过于从现有的容器镜像开始。Docker 官方网站专门有一个页面来存储所有可用的镜像，网址是： [index.docker.io](http://index.docker.io/)。你可以通过浏览这个网页来查找你想要使用的镜像，或者使用命令行的工具来检索。

[官网可用镜像搜索](index.docker.io)
命令行的格式为：docker search 镜像名字

```bash
# 查询镜像
docker serach 镜像名字
```

![image.png](/image/docker/docker_search.png)

### 3、下载容器镜像

下载镜像的命令非常简单，使用 docker pull 命令即可。(译者按：docker 命令和 git 有一些类似的地方）。在 docker 的镜像索引网站上面，镜像都是按照 **用户名/** **镜像名**的方式来存储的。有一组比较特殊的镜像，比如 ubuntu 这类基础镜像，经过官方的验证，值得信任，可以直接用 **镜像名**来检索到。

执行 pull 命令的时候要写完整的名字，比如"learn/tutorial"。

```bash
# 下载容器镜像
docker pull learn/tutorial

# 执行pull命令的时候要写完整的名字，比如"learn/tutorial"。
```

![image.png](/image/docker/docker_pull.png)

### 4、在 docker 容器中运行 hello world

docker 容器可以理解为在沙盒中运行的进程。这个沙盒包含了该进程运行所必须的资源，包括文件系统、系统类库、shell 环境等等。但这个沙盒默认是不会运行任何程序的。你需要在沙盒中运行一个进程来启动某一个容器。**这个进程是该容器的唯一进程，所以当该进程结束的时候，容器也会完全的停止。**

```bash
# 容器运行进程
docker run learn/tutorial echo "hello word"
```

![image.png](/image/docker/docker_run.png)

### 5、在 docker 容器中安装新的程序

我们之前下载的 tutorial 镜像是基于 ubuntu 的，所以你可以使用 ubuntu 的 apt-get 命令来安装 ping 程序： **apt-get install -y ping**。
备注：apt-get 命令执行完毕之后，容器就会停止，**但对容器的改动不会丢失。**

#### 提示：

在执行 apt-get 命令的时候，要带上-y 参数。如果不指定-y 参数的话，apt-get 命令会进入交互模式，需要用户输入命令来进行确认，但在 docker 环境中是无法响应这种交互的。

```bash
# 通过run在容器中安装程序
docker run learn/tutorial apt-get install -y ping
```

![image.png](/image/docker/docker_run.png)

### 6、保存对容器的修改

当你对某一个容器做了修改之后（通过在容器中运行某一个命令），可以把对容器的修改保存下来，这样下次可以从保存后的最新状态运行该容器。docker 中保存状态的过程称之为 committing，它保存的新旧状态之间的区别，从而产生一个新的版本。

1. 运行 docker commit，可以查看该命令的参数列表。
2. 你需要指定要提交保存容器的 ID。(译者按：通过 docker ps -l 命令获得)
3. 无需拷贝完整的 id，通常来讲最开始的三至四个字母即可区分。（译者按：非常类似 git 里面的版本号)

通过 docker ps -l 查看容器 id，将 learn/tutorial 容器保存为 learn/ping。
![image.png](/image/docker/docker_ps.png)

执行完 docker commit 命令之后，会返回新版本镜像的 id 号。

### 7、运行新的镜像

```bash
docker run lean/ping ping www.google.com
```

### 8、检查运行中的镜像

使用 docker ps 命令可以查看所有正在运行中的容器列表，使用 docker inspect 命令我们可以查看更详细的关于某一个容器的信息。

```bash
# 查找某一个运行中容器的id
docker ps

# 查看容器的信息。
docker inspect efe
```

### 8、发布自己的镜像

现在我们已经验证了新镜像可以正常工作，下一步我们可以将其发布到官方的索引网站。我们也可以把我们自己编译的镜像发布到索引页面，一方面可以自己重用，另一方面也可以分享给其他人使用。

1. docker images 命令可以列出所有安装过的镜像。
2. docker push 命令可以将某一个镜像发布到官方网站。
3. 你只能将镜像发布到自己的空间下面。这个模拟器登录的是 learn 帐号。

```bash
# 发布/推送镜像
docker push learn/ping
```

### 启动命令模版

docker run --name nginx-test2 -p 80:80 -v /tmp/aaa:/usr/share/nginx/html -e KEY1=VALUE1 -d nginx:latest
