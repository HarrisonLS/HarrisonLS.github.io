# 问题解决

## 关闭 node 或其他服务

1. 使用 kill-port 第三方包

```shell
npx kill-port 3000 5000 9000

# or

# install package globally
npm install --global kill-port

# stop process on port 3000
kill-port --port 3000


```

2. 使用 lsof 查看服务端口，用 kill 命令杀进程。

```shell
# 查看端口对应具体的进程PID
lsof -i :3000

# 通过PID强制杀死该进程服务
kill -9 <PID>


```
