# Rust 相关知识

## 参考文档

- [Rust 程序设计语言 中文版](https://www.rustwiki.org.cn/zh-CN/book/appendix-07-nightly-rust.html)
- [Rust 中文站点](https://rustwiki.org/)

### Cargo 创建项目

Cargo 是 Rust 的构建系统和包管理器。大多数 Rustacean 们使用 Cargo 来管理他们的 Rust 项目。

```shell
# 查看版本号
cargo --version

# 创建项目
cargo new hello-cargo

hello-cargo
├── Cargo.lock
├── Cargo.toml
├── src
│   └── main.rs
└── target
    ├── CACHEDIR.TAG
    └── debug

# 构建项目
cargo build

# 在一个命令中同时编译代码并运行生成的可执行文件
cargo run

# 快速检查代码确保其可以编译，但并不产生可执行文件
cargo check

# 在 target/release 而不是 target/debug 下生成可执行文件。
# 这些优化可以让 Rust 代码运行的更快，不过启用这些优化也需要消耗更长的编译时间。
cargo build --release

```

### crate 增加功能依赖库

在 Cargo.toml 的[dependencies]中添加 rand 依赖

```toml
[package]
name = "guessing_game"
version = "0.1.0"
edition = "2021"

# See more keys and their definitions at https://doc.rust-lang.org/cargo/reference/manifest.html

[dependencies]
rand = "0.8.3"

```

使用 cargo build 命令即可下载依赖包后完成编译

#### Cargo.lock

同目录下的 Cargo.lock 确保版本相同，使得重新构建都会产生相同的结果

而 cargo update 命令则会忽略 Cargo.lock 文件，并计算出所有符合 Cargo.toml 声明的最新版本。
比如说 rand 的当前版本设定为 0.8.3，那么 cargo update 回去查找大于或等于 0.8.3 而小于 0.9.0 的版本。

### 疑难杂症

#### 添加dependencies依赖进行cargo build后一直等待
```shell


```
