# term.log — 终端风博客

Astro 7 构建的极简终端风博客：Markdown 写作、标签分类、浮层式全文搜索（Ctrl/⌘+K）、Twikoo 评论、RSS / Sitemap，纯静态输出，GitHub Pages 与 Cloudflare Pages 皆可部署。

> **使用文档（配置作者信息、写作、评论、部署）见 [docs/USAGE.md](docs/USAGE.md)**，本文面向开发与架构。

## 快速开始

```bash
npm install
npm run dev       # 本地开发 http://localhost:4321
npm run build     # 构建到 dist/（含 Pagefind 搜索索引）
npm run preview   # 本地预览构建产物（搜索可正常体验）
```

## 写作

每篇文章是一个独立文件夹，内容放在文件夹内的 `index.md`，图片等资源也放在该文件夹中：

```
content/blog/
└── my-new-post/
    ├── index.md        # 文章内容
    └── images/         # 本文的图片（可选）
        └── cover.png
```

`index.md` 开头写 frontmatter：

```yaml
---
title: 文章标题
description: 一两句话的摘要（可选，用于列表页与 RSS）
date: 2026-01-01
tags: [标签一, 标签二]
draft: false        # true 则构建时隐藏
---

正文使用 Markdown。文件夹内的图片用相对路径引用，构建时自动优化：

![说明文字](./images/cover.png)
```

- 文章 URL 由文件夹名决定（`my-new-post` → `/posts/my-new-post/`）
- frontmatter 字段有类型校验，写错会在构建时报错
- 标签自动聚合到 `/tags/`，无需额外注册

## 站点配置

- **站点信息**：改 `src/site.config.ts`（标题、作者、签名、描述、社交链接、仓库地址）
- **评论（Twikoo）**：在 `src/site.config.ts` 填 `TWIKOO_ENVID` 为你的后端地址，留空则不渲染评论
- **头像**：替换 `public/avatar.svg`（或换成你的图片路径，改 `src/components/Profile.astro`）
- **配色与字体**：改 `src/styles/global.css` 顶部的 CSS 变量

## 评论系统（Twikoo）

1. 部署 Twikoo 后端（任选其一）：[Vercel 一键部署](https://twikoo.js.org/quick-start.html#前端手动部署：vercel-deploy)、Netlify、腾讯云 CloudBase 或自建服务器，得到后端地址（如 `https://xxx.vercel.app`）
2. 把地址填入 `src/site.config.ts`：`export const TWIKOO_ENVID = 'https://xxx.vercel.app'`
3. 重新构建即可。评论区只出现在文章页，滚动到评论区才加载脚本，不拖慢首屏
4. 管理面板：在任意文章评论区点击小齿轮设置管理员密码
- **域名与路径**：见下

## 部署前检查清单（安全）

- [ ] `src/site.config.ts`：改掉所有占位内容（作者名、签名、SOCIALS 四个链接、SITE.repo）
- [ ] `astro.config.mjs`：生产部署时设置环境变量 `SITE` 为真实域名（影响 sitemap / robots.txt 的绝对地址）
- [ ] GitHub Pages 项目仓库：workflow 自动带 `BASE_PATH`；绑定自定义域名则设 `SITE` 并删除 `BASE_PATH`
- [ ] Twikoo：部署后端后填入 `TWIKOO_ENVID`，**上线后立即在评论区齿轮图标设置管理员密码**
- [ ] Twikoo 建议开启反垃圾（管理面板内置选项 / Akismet），并留意官方更新
- [ ] ~~`npm audit` 告警~~ 已清零：Astro 7.4.1（2026-11-07 升级），**要求 Node ≥ 22.22**——本地开发与所有构建环境（GH Actions 已配 22 / Cloudflare Pages 需设环境变量 `NODE_VERSION=22`）都要满足

## 安全说明

- `public/_headers`：Cloudflare Pages 会自动生效（nosniff / 禁止被嵌套 iframe / Referrer / Permissions 策略）；GitHub Pages 不支持自定义响应头，需在迁移时用 Cloudflare 代理补齐
- 评论 envId 经 `data-env-id` 属性传递（Astro 自动转义），脚本中不拼接任何用户可控字符串
- 搜索摘要来自 Pagefind 构建期生成（仅包含站主自己写的 Markdown），无用户注入面
- 外部链接均带 `rel="noopener"`；`robots.txt` 为动态路由，sitemap 地址跟随 `SITE` 配置
- Twikoo 脚本版本锁定 `twikoo@1.6.45`，升级时同步更新 `Comments.astro` 中的 CDN 地址

## 部署

### Cloudflare Pages（推荐，零配置）

1. 仓库推到 GitHub，Cloudflare Dashboard → Workers & Pages → 创建 Pages 项目 → 连接仓库
2. 构建命令 `npm run build`，输出目录 `dist`
3. **设置环境变量 `NODE_VERSION` = `22`**（Astro 7 要求 Node ≥ 22.22）
4. 保存即部署，之后每次 push 自动发布

不需要设置 `SITE` / `BASE_PATH`（绑定自定义域名时把 `SITE` 设为你的域名即可）。

### GitHub Pages

1. 推送仓库，GitHub 仓库 Settings → Pages → Source 选 **GitHub Actions**
2. `.github/workflows/deploy.yml` 已就绪，push 到 main 自动构建部署
3. 路径规则：
   - 仓库为 `用户名/用户名.github.io` → 打开 workflow，删除 `BASE_PATH` 那一行
   - 其他仓库名 → 保持现状（自动使用 `/仓库名/` 子路径）

## 目录结构

```
├── astro.config.mjs        # 站点配置（site/base/Shiki 高亮主题）
├── content/blog/           # 文章目录（每篇文章一个文件夹，内容为 index.md）
├── src/
│   ├── content.config.ts   # frontmatter 类型校验
│   ├── site.config.ts      # 站点元信息
│   ├── utils.ts            # 工具函数（标签聚合、阅读时长等）
│   ├── layouts/            # BaseLayout / PostLayout
│   ├── components/         # 文章列表项、搜索浮层（Ctrl/⌘+K）、侧栏资料卡、侧栏文章目录
│   ├── pages/              # 首页/文章/标签/归档/关于/404/RSS
│   └── styles/global.css   # 设计 token + 全部样式
└── .github/workflows/      # GitHub Pages 部署
```

## 动效说明

页面切换（View Transitions API）、滚动渐入（IntersectionObserver）、光标闪烁均已适配 `prefers-reduced-motion`，对动效敏感的用户自动降级。
