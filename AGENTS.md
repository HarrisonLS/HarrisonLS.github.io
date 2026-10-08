# AGENTS.md

本文件定义 AI 编码助手在本仓库中的工作约定。适用于仓库根目录及全部子目录；若子目录存在更具体的 `AGENTS.md`，以距离目标文件最近的规则为准。

## 项目定位

- 本项目是个人技术知识站「五目十行」，以中文技术笔记和前端资源导航为主要内容。
- 站点由 VitePress 构建，内容以 Markdown 为主，并通过 Vue 3、TypeScript 和 SCSS 扩展主题。
- `main` 分支推送后，GitHub Actions 会构建站点并部署到 GitHub Pages。
- 修改目标应优先保证内容准确、导航可达、静态构建成功，并保持现有站点风格。

## 技术栈与常用命令

- 运行时：Node.js 22（与 `.github/workflows/deploy.yml` 和 `package.json` 保持一致）。
- 包管理器：优先使用 pnpm；CI 使用 `pnpm install` 和 `pnpm run build`。
- 本地开发：`pnpm dev`。
- 生产构建：`pnpm build`。
- 本地预览：`pnpm docs:preview`。
- 文档健康检查：`pnpm run check:docs`。
- 格式检查：`pnpm run format:check`。
- 完整验证：`pnpm run check`（格式、文档健康检查和生产构建）。

仓库使用 `pnpm-lock.yaml` 作为唯一依赖锁文件。不要使用 npm 或 Yarn 更新依赖，也不要重新生成 `package-lock.json` 或 `yarn.lock`。

## 目录地图

- `docs/index.md`：站点首页。
- `docs/nav.md`、`docs/nav/data.ts`、`docs/nav/index.scss`：资源导航页面及其数据、样式。
- `docs/frontEnd/`：前端基础、浏览器、网络、面试及业务应用笔记。
- `docs/backEnd/`：NestJS、Rust、Docker、操作系统等后端笔记。
- `docs/framework/`：React、Vue、工作流和状态管理笔记。
- `docs/skill/`：Git、包管理、编辑器和开发工具笔记。
- `docs/algorithm/`：算法题记录。
- `docs/interest/`：WebGL、SVG、TweenJS 等兴趣内容。
- `docs/public/`：图片、思维导图等静态资源；在 Markdown 和 Vue 中以站点根路径引用，例如 `/image/css/priority.png`。
- `docs/.vitepress/config.ts`：VitePress 站点入口配置。
- `docs/.vitepress/configs/`：导航栏、侧边栏、HTML head 和搜索配置。
- `docs/.vitepress/theme/`：自定义 Vue 组件及 SCSS 样式。
- `.github/workflows/deploy.yml`：GitHub Pages 部署流程。

## 工作流程

1. 开始修改前阅读相关页面、相邻页面和对应导航配置，不根据文件名猜测结构。
2. 保持改动聚焦；不要顺手重写无关旧笔记、统一全仓格式或升级依赖。
3. 新增或移动文档时，同步检查 `docs/.vitepress/configs/nav.ts` 与 `sidebar.ts`，确保页面能从站点导航访问。
4. 新增导航站点卡片时修改 `docs/nav/data.ts`；新增字段需同步更新 `docs/.vitepress/theme/types.ts` 和相关组件。
5. 修改主题组件时检查服务端渲染：浏览器对象只能在客户端生命周期内或 `typeof window !== "undefined"` 判断后使用。
6. 完成后运行 `pnpm build`。若无法运行，明确记录原因，不得声称已验证。
7. 交付时概述改动文件、用户可见影响、验证命令和仍存在的风险。

## Markdown 内容规范

- 默认使用简体中文，技术名词、命令和 API 名称保留官方写法。
- 普通知识页以一个清晰的一级标题开始，再按 `##`、`###` 递进；不要跳级堆叠标题。
- 以可验证的事实为主。涉及版本、兼容性或易变化结论时注明适用版本或来源，避免把推测写成定论。
- 示例代码应尽量完整、可读，并使用准确的语言标识，如 `ts`、`js`、`css`、`sh`、`json`。
- 命令示例默认应安全且可复制；删除、覆盖、强推等危险命令必须附带清楚警告。
- 内部链接优先使用以 `/` 开头的 VitePress 路径，不链接生成后的 `.html` 文件。
- 图片放入 `docs/public/` 的语义化子目录，文件名应稳定；添加后确认大小写与引用路径完全一致。
- 只有页面确实需要特殊布局、描述或目录层级时才添加 frontmatter；保留已有页面的 frontmatter 和 Vue/HTML 嵌入能力。
- 编辑旧文章时尊重其原有范围，修正相关错误即可，不要把局部任务扩展成整篇重写。

## TypeScript、Vue 与样式规范

- 延续现有 Vue 3 Composition API 和 `<script setup>` 写法；新增组件优先使用 TypeScript。
- 公共数据结构放在 `docs/.vitepress/theme/types.ts` 或相应配置模块中，避免在多个组件重复定义。
- Props、事件和外部数据应有明确类型；避免新增 `any`，除非第三方接口确实无法可靠建模并附有说明。
- 组件名使用 PascalCase，变量和函数使用 camelCase；文件命名跟随所在目录现有风格。
- 样式优先使用现有 VitePress CSS 变量，兼顾亮色、暗色和移动端布局。
- SCSS 修改限制在最小作用域；组件私有样式使用 `scoped`，全局样式仅放入主题样式目录。
- 不在源码中硬编码私密令牌或凭证。Algolia 的公开搜索 key 可视为客户端配置，但任何新增密钥都必须通过安全的部署配置注入。

## 导航与路由约束

- 路由由 `docs/` 下的文件路径生成：目录中的 `index.md` 对应目录路由，其余 Markdown 文件对应同名路由。
- 新页面至少应从导航栏、侧边栏、索引页或相关文章之一可达，避免产生孤立页面。
- 导航链接统一优先使用绝对站内路径，例如 `/frontEnd/javascript/type`。
- 移动或重命名已有页面前，先搜索其全部引用；如会破坏外部链接，应保留兼容页或在交付中明确说明。
- 不要仅为“看起来一致”而批量改变现有 URL、目录大小写或中英文命名。

## 生成物与仓库卫生

- `docs/.vitepress/cache/` 和 `docs/.vitepress/dist/` 是 VitePress 生成物，已由 `.gitignore` 排除，不应提交到版本库。
- 构建后只提交源文件；部署流程会在 CI 中重新生成站点产物。
- 不提交 `node_modules/`、日志、编辑器临时文件或包含本机绝对路径的临时产物。
- 不删除用户已有改动，不使用 `git reset --hard`、`git clean -fd` 或强制覆盖来整理工作区。

## 验证清单

根据改动范围执行以下检查：

- 所有改动：`pnpm run check`。
- 文档改动：标题层级、代码围栏、内部链接、图片路径正确，新增页面已接入导航。
- 导航改动：链接目标存在，路径前导 `/` 一致，分组和激活范围合理。
- Vue/主题改动：构建无 SSR 报错；交互在桌面端和窄屏下均可用；亮暗主题可读。
- 依赖或 CI 改动：Node 22 环境可安装和构建，工作流命令与 `package.json` 脚本一致。

## 禁止事项

- 不编造来源、运行结果、兼容性结论或已完成状态。
- 不以“清理”为由修改无关文件、批量格式化全仓或删除历史内容。
- 不直接编辑构建产物来实现功能。
- 不把密钥、Cookie、个人令牌或其他敏感信息写入仓库、文档、示例或日志。
- 未经明确要求，不发布站点、不推送分支、不创建提交，也不改写 Git 历史。
