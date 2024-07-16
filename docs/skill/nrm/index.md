# nrm 工具使用

## nrm默认源地址
```text
  npm ---------- https://registry.npmjs.org/
  yarn --------- https://registry.yarnpkg.com/
  tencent ------ https://mirrors.cloud.tencent.com/npm/
  cnpm --------- https://r.cnpmjs.org/
  taobao ------- https://registry.npmmirror.com/
  npmMirror ---- https://skimdb.npmjs.com/registry/
```

### nrm安装
```shell
npm install -g nrm

# 安装验证
nrm -v
```

### 查看可用源
```shell
nrm ls
```

### 切换源
```shell
nrm use taobao
```

### 添加新的源
```shell
# 搭建私库
nrm add myregistry http://my-private-registry.com
```

### 删除源
```shell
nrm del myregistry
```

### 查看当前使用的源
```shell
nrm current
```

## 测试源的响应时间
```shell
nrm test
```