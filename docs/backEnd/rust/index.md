# Rust 相关知识

- [rustup 工具](https://rustup.rs/) 用于管理自己的 Rust 版本

### rustup 工具使用

```shell
# 版本查看
rustc -v

# 版本更新
rustup update
rustup update 1.72.0 # 指定版本


# 编译文件
rustc xxx.rs # 编译后产生同名可运行文件xxx，利用脚本方式./xxx 运行产物。


```

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

# 用来做 lint
cargo clippy

# 自动格式化代码
cargo fmt

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

#### print 的几种格式

- [更多格式参考](https://doc.rust-lang.org/std/fmt/)

```rs
fn main() {
format!      // described above
write!       // first argument is either a &mut io::Write or a &mut fmt::Write, the destination
writeln!     // same as write but appends a newline
print!       // the format string is printed to the standard output
println!     // same as print but appends a newline
eprint!      // the format string is printed to the standard error
eprintln!    // same as eprint but appends a newline
format_args! // described below.
}

```

### 语法基础

label 关键字 —— Rust 可以给循环加上标签

```rs
fn main() {
    let x = 1;

    // 分别用 'outer 和 'inner 来标记这两个循环
    let z = 'outer: loop {
        let mut y = 1;

        'inner: loop {
            if y == 3 {
                y += 1;
                continue 'inner; // Skips to the next iteration of the 'inner loop
            }

            println!("x:{},y:{}", x, y);

            y += 1;

            if y > 5 {
                // break 'outer; // Breaks out of the 'inner loop
                break 'outer y; // break可以带上返回值
            }
        }
    };
    println!("z: {}", z);
}

// for 循环添加 label 关键字

// fn main() {
//     'outer: for x in 1..=3 {
//         for y in 1..=5 {
//             if y == 3 {
//                 continue 'outer; // Skips the current iteration of the 'outer loop
//             }

//             if x == 2 && y == 4 {
//                 break 'outer; // Breaks out of the 'outer loop
//             }

//             println!("x: {}, y: {}", x, y);
//         }
//     }
// }

```

### 所有权

所有权是 Rust 用来管理内存的一套规则。

#### 所有权规则

- Rust 中每个值都有一个所有者。
- 一个值同时只能有一个所有者。
- 当所有者离开作用域范围，这个值将被丢弃。

```rs
fn main() {
    // 规则 1：Rust中每个值都有一个所有者
    let s1 = String::from("hello"); // s1 是值 "hello" 的所有者

    {
        // 规则 2：一个值同时只能有一个所有者
        let s2 = s1; // 所有权从 s1 转移到 s2（s1 不再有效）
        // println!("{}", s1); // 这会导致编译时错误，因为 s1 不再有效
        println!("{}", s2); // 这是允许的，因为 s2 现在拥有该值
    } // s2在此处超出范围

    // 规则 3：当所有者离开作用域范围，这个值将被丢弃
    // 由于 s2 超出范围，因此为值 "hello" 分配的内存在此处自动释放。
}

```

### 疑难杂症

#### 添加 dependencies 依赖进行 cargo build 后一直等待

```shell
rm -rf ~/.cargo/registry/index/* ~/.cargo/.package-cache

```

### 参考文档

- [Rust 程序设计语言 中文版](https://www.rustwiki.org.cn/zh-CN/book/appendix-07-nightly-rust.html)
- [Rust 中文站点](https://rustwiki.org/)
- [Comprehensive Rust](https://google.github.io/comprehensive-rust/zh-CN/index.html)
- [Rust 语言圣经](https://course.rs/about-book.html) —— 由 Google 的 Android 团队开发的免费 Rust 课程
- [Rust 语言实战](https://zh.practice.rs/why-exercise.html)
