# Npm 包管理工具

#### [npm 中文文档](https://www.npmjs.cn/)

#### NPM 是随同 NodeJS 一起安装的包管理工具，能解决 NodeJS 代码部署上的很多问题，常见的使用场景有以下几种：

- 允许用户从 NPM 服务器下载别人编写的第三方包到本地使用。
- 允许用户从 NPM 服务器下载并安装别人编写的命令行程序到本地使用。
- 允许用户将自己编写的包或命令行程序上传到 NPM 服务器供别人使用

### npm 相关

####

#### 查看 npm 版本

```
npm -v
```

####

#### 升级 npm 版本

```shell
npm install npm -g
```

#### 清除缓存

```javascript
npm cache clean --force
```

#### 全局与本地

```
npm install <Module Name> # 本地安装
npm install <Module Name> -g # 全局安装
```

####

#### 更换淘宝镜像源

```shell
// 通过cnpm使用
npm install -g cnpm --registry=https://registry.npm.taobao.org

// 全局持续使用
npm config set registry https://registry.npm.taobao.orgshiyong

// 临时使用
npm --registry https://registry.npm.taobao.org install express

// 切换回官方源
npm config set registry https://registry.npmjs.org
```

#### 查看安装信息

```shell
// 查看所有全局安装模块
npm list -g
```

#### 删除 node_modules

```shell
npm install rimraf -g
rimraf node_modules
```

| 命令                   | node_modules | package.json    | npm install | npm install --production |
| ---------------------- | ------------ | --------------- | ----------- | ------------------------ |
| npm install            | 是           | 否              | 否          | 否                       |
| npm install -g         | 否           | 否              | 否          | 否                       |
| npm install --save     | 是           | dependencies    | 是          | 是                       |
| npm install --save-dev | 是           | devDependencies | 是          | 否                       |

#### 简写

npm i module_name => npm install module_name
npm i module_name -S => npm install module_name --save
npm i module_name -D => npm install module_name --save-dev
devDependencies 里面的插件只用于开发环境，不用于生产环境，而 dependencies 是需要发布到生产环境的

#### npm config

```javascript
// 查看所有配置
npm config ls -l

// 删除相应配置
npm config delete configName
```

#### npm ci 和 npm i 的区别

- npm i 依赖 package.json，而 npm ci 依赖 package-lock.json。
- 当 package-lock.json 中的依赖于 package.json 不一致时，npm ci 退出但不会修改 package-lock.json。
- npm ci 只可以一次性的安装整个项目依赖，但无法添加单个依赖项。
- npm ci 安装包之前，会删除掉 node_modules 文件夹，因此他不需要去校验已下载文件版本与控制版本的关系，也不用校验是否存在最新版本的库，所以下载的速度更快。
- npm 安装时，不会修改 package.json 与 package-lock.json。

### module 相关

####

#### 编辑 module

```shell
// 安装（i）
npm install [<name><version>][-g]/[--save][-dev]


// 更新（up, upgrade）
npm update [<name><version>][-g]/[--save][-dev]

// 查找
npm search [<name><version>][-g]/[--save][-dev]

// 卸载（remove、rm、r, un、unlink）
npm uninstall [<name><version>][-g]/[--save][-dev]
```

### package.json 相关

#### "browserslist"

[https://www.npmjs.com/package/browserslist](https://www.npmjs.com/package/browserslist)

| 例子                       | 说明                                                    |
| -------------------------- | ------------------------------------------------------- |
| > 1%                       | 全球超过 1%人使用的浏览器                               |
| > 5% in US                 | 指定国家使用率覆盖                                      |
| last 2 versions            | 所有浏览器兼容到最后两个版本根据 CanIUse.com 追踪的版本 |
| Firefox ESR                | 火狐最新版本                                            |
| Firefox > 20               | 指定浏览器的版本范围                                    |
| not ie <=8                 | 方向排除部分版本                                        |
| Firefox 12.1               | 指定浏览器的兼容到指定版本                              |
| unreleased versions        | 所有浏览器的 beta 测试版本                              |
| unreleased Chrome versions | 指定浏览器的测试版本                                    |
| since 2013                 | 2013 年之后发布的所有版本                               |

### 配置镜像地址

[https://juejin.cn/book/7034689774719860739/section/7036006572954222607](https://juejin.cn/book/7034689774719860739/section/7036006572954222607)
:::tips
npm config set electron_mirror https://npm.taobao.org/mirrors/electron/
npm config set phantomjs_cdnurl https://npm.taobao.org/mirrors/phantomjs/
npm config set puppeteer_download_host https://npm.taobao.org/mirrors/
npm config set python_mirror https://npm.taobao.org/mirrors/python/
npm config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/
npm config set sentrycli_cdnurl https://npm.taobao.org/mirrors/sentry-cli/
npm config set sharp_binary_host https://npm.taobao.org/mirrors/sharp/
npm config set sharp_dist_base_url https://npm.taobao.org/mirrors/sharp-libvips/
npm config set sharp_libvips_binary_host https://npm.taobao.org/mirrors/sharp-libvips/
npm config set sqlite3_binary_site https://npm.taobao.org/mirrors/sqlite3/
:::

### 官网发包相关

[https://mp.weixin.qq.com/s/yk315F-aAmGf3jHeXQNtmQ](https://mp.weixin.qq.com/s/yk315F-aAmGf3jHeXQNtmQ)

#### 登录官网

![image.png](https://cdn.nlark.com/yuque/0/2022/png/605135/1667963786066-92b9198b-aa13-4de9-a12b-81ab7478000a.png#averageHue=%232a303a&clientId=u2978f88a-9564-4&from=paste&height=81&id=Io2hW&originHeight=81&originWidth=355&originalType=binary&ratio=1&rotation=0&showTitle=false&size=6122&status=done&style=none&taskId=u9f5328aa-d5bd-4ec0-a73f-9ed4e06de3e&title=&width=355)

```powershell
# 登录
npm adduser
# or
npm login
# login是adduser的一个别名
# 登录403的话重新设置一下官方源

npm whoami
# 查看当前npm的登陆人

```

#### 查看某个包的文档

```powershell
# 此命令会尝试猜测包文档 URL 的可能位置，一般没有自定义的话，就会打开包的github地址。
npm docs [package-name]
# or
npm home [package-name]
```

#### 查看某个包的代码仓库

```powershell
# 此命令尝试猜测包的存储库 URL 的可能位置
npm repo [package-name]
```

#### 查看某个包的详细信息

```powershell
npm v [package-name]
# or
npm view [package-name]
npm info [package-name]
npm show [package-name]
```

#### 查看某个包的历史版本

```powershell
npm v [package-name] versions
```
