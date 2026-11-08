# term.log 使用文档

一份手把手的说明：从拿到项目到发布第一篇文章、配置个人信息、开启评论与搜索，再到上线。

> 开发与架构视角的内容见根目录 `README.md`；本文面向日常使用。

---

## 1. 环境要求

| 依赖 | 版本要求 | 说明 |
|------|----------|------|
| Node.js | **≥ 22.22** | Astro 7 的硬性要求，`node -v` 自查 |
| npm | ≥ 9.6.5 | 随 Node 附带 |

首次使用：

```bash
npm install      # 安装依赖
npm run dev      # 本地开发，http://localhost:4321
npm run build    # 构建到 dist/（含搜索索引）
npm run preview  # 预览构建产物（搜索功能只有在构建后可用）
```

---

## 2. 配置作者信息（最重要的一步）

所有个人信息集中在 **`src/site.config.ts`** 一个文件里，打开后逐项替换：

```ts
export const SITE = {
  title: 'term.log',                    // 站点名：出现在左上角 logo、浏览器标题、RSS
  subtitle: '记录、折腾、思考',          // 副标题：首页 h1 旁的一行字
  author: 'Your Name',                  // 作者名：侧栏资料卡、页脚版权
  signature: '把折腾变成文字，把文字变成沉淀。',  // 签名：侧栏头像下方
  description: '一个终端风格的个人博客…', // 站点描述：SEO meta 与 RSS
  repo: 'https://github.com/yourname/your-repo', // 仓库地址：页脚 source 链接
  postDir: 'content/blog',
};

export const SOCIALS = [               // 侧栏四个社交图标，改成自己的地址
  { name: 'GitHub',   url: 'https://github.com/你的用户名' },
  { name: 'Bilibili', url: 'https://space.bilibili.com/你的ID' },
  { name: '知乎',     url: 'https://www.zhihu.com/people/你的ID' },
  { name: 'QQ',       url: 'https://wpa.qq.com/msgrd?v=3&site=qq&menu=yes&uin=你的QQ号' },
];

export const TWIKOO_ENVID = '';        // 评论后端地址，留空 = 不显示评论区
```

改完保存，`npm run dev` 下即时生效。

### 2.1 更换头像

当前头像 `public/avatar.jpg`。换成自己的照片或图片：

1. 用同名新图覆盖 `public/avatar.jpg`（建议 160×160 以上、正方形；用其他文件名则同步改 `Profile.astro` 的引用）
2. 打开 `src/components/Profile.astro`，把第 12 行改为：
   ```html
   <img class="avatar" src={withBase('/avatar.png')} alt="作者头像" width="72" height="72" />
   ```

侧栏会自动做圆角与边框处理，无需改样式。

### 2.2 修改站内文字提示

页面上的终端风提示语（`you@blog:~$ whoami` 等）分布在这些文件里，搜关键词即可改：

- 首页问候语：`src/pages/index.astro`
- 各页面标题提示符：`tags/`、`archive.astro`、`about.astro`、`404.astro`、`PostLayout.astro`
- 评论区标题：`src/components/Comments.astro`

---

## 3. 写文章

### 3.1 新建一篇文章

在 `content/blog/` 下**建一个文件夹**（文件夹名就是文章 URL），里面放 `index.md`：

```
content/blog/
└── hello-world/          # URL → /posts/hello-world/
    ├── index.md
    └── images/           # 本文的图片（可选）
        └── cover.png
```

`index.md` 内容：

```markdown
---
title: 我的第一篇文章
description: 显示在列表页和 RSS 里的一句话摘要
date: 2026-11-08
tags: [随笔, 教程]
draft: false
---

正文从这里开始，标准 Markdown。
```

保存后 `npm run build`，文章、标签页、归档、RSS、搜索索引全部自动生成。

### 3.2 frontmatter 字段说明

| 字段 | 必填 | 说明 |
|------|------|------|
| `title` | ✅ | 文章标题 |
| `date` | ✅ | 发布日期 `YYYY-MM-DD`，影响排序与归档年份 |
| `updated` | 可省 | 最新更新日期 `YYYY-MM-DD`；距今超过 7 天的文章头部会自动显示"内容可能过时"提示，元信息行也会显示"更新于 …" |
| `description` | 建议 | 一句话摘要，列表页/搜索/RSS 展示 |
| `tags` | 可省 | 标签数组，自动聚合到标签页 |
| `draft` | 可省 | `true` = 构建时隐藏（草稿） |

字段名写错会在 `npm run build` 时**直接报错**并指出位置——这是故意的，保证列表页永不出现半成品。

### 3.3 图片

图片放在文章自己的文件夹里，Markdown 中用相对路径：

```markdown
![图片说明](./images/cover.png)
```

支持 PNG / JPG / WebP / SVG，构建时自动压缩并加内容哈希。

> 建议：文件名（文件夹名和图片名）用英文或拼音，避免个别环境的中文路径编码问题。

### 3.4 草稿工作流

想法还没成型也先建文件夹，`draft: true`：

- `npm run dev` 时**仍然可见**，方便自己预览
- `npm run build` 时被隐藏，不会发布
- 写完把字段改成 `false` 即可发布

---

## 4. 标签

- 一篇文章的 frontmatter 里写 `tags: [随笔, 教程]` 即可，**不需要注册**
- `/tags/` 页自动聚合所有标签和数量
- 建议规范：一篇文章 ≤ 3 个标签；能归入已有标签就不新建；用一年后自己还会搜的词

---

## 5. 搜索

- 网站任意页面按 **Ctrl + K**（Mac 为 ⌘ + K）或点右上角放大镜
- 支持标题、正文全文检索，`↑` `↓` 选结果，`Enter` 打开，`Esc` 关闭
- 索引在 `npm run build` 时生成——`npm run dev` 下提示"索引未找到"是正常的

---

## 5.5 彩蛋（给愿意探索的访客）

- **迷你终端**：任意页面按反引号 **`**，或点击左上角 logo 的 `$` 符号——quake 式下拉终端，支持 `help` / `neofetch` / `whoami` / `waifu`（随机二次元图）/ `particles on|off`（樱花雪粒子开关）/ `sudo` 等命令，`↑` 翻历史
- **季节粒子**：3-5 月飘樱花、11-1 月飘雪（自动按月份切换），尊重系统"减少动态效果"设置
- **Konami Code**：键盘输入 ↑↑↓↓←→←→BA，触发 5 秒粉色风暴
- 页脚的「萌ICP备xxxx号」是二次元博客圈的趣味传统，指向 [moe.icu](https://moe.icu/)，不是真备案；编号在 `src/layouts/BaseLayout.astro` 的 `moe-line` 处修改

---

## 6. 评论（Twikoo）

### 开启三步

1. 部署 Twikoo 后端（推荐 [Vercel 一键部署](https://twikoo.js.org/quick-start.html)，免费）：
   - 访问 Twikoo 官网 → Vercel 部署按钮 → 登录 GitHub 授权 → 得到后端地址，如 `https://twikoo-xxx.vercel.app`
2. 地址填入 `src/site.config.ts`：
   ```ts
   export const TWIKOO_ENVID = 'https://twikoo-xxx.vercel.app';
   ```
3. 重新构建部署。文章页底部自动出现评论区

### 上线后必做

- 在任意文章的评论区点**齿轮图标**，设置管理员密码（否则任何人都能进管理面板）
- 管理面板里开启反垃圾选项（内置过滤 / Akismet）
- 评论数据保存在 Twikoo 后端（Vercel 挂 MongoDB Atlas），与本博客仓库无关，迁移时单独备份

### 关闭评论

`TWIKOO_ENVID` 改回 `''` 即可，页面上不会留下任何痕迹。

---

## 7. 外观定制

### 7.1 配色

所有颜色集中在 `src/styles/global.css` 顶部：

- `:root { ... }` —— 深色主题（默认）
- `[data-theme='light'] { ... }` —— 浅色主题

常用变量：

| 变量 | 含义 |
|------|------|
| `--bg` | 页面背景 |
| `--fg` | 正文文字 |
| `--accent` | 强调色（链接、当前页、光标） |
| `--cyan` / `--amber` / `--red` | 少量点缀色 |

改一组变量，明暗两套主题会一起变。**注意**：`--shiki-dark` 相关的代码高亮切换规则不要动（见 7.3）。

### 7.2 字体

`--font-mono`（等宽，用于标题/导航/代码）和 `--font-sans`（正文）在 `global.css` 顶部，默认使用系统字体栈，无网络请求。想用 Google Fonts 自行在 `BaseLayout.astro` 的 `<head>` 加 link 即可。

### 7.3 不要动的两处（防复发提示）

- `[data-theme='dark'] .astro-code span { color: var(--shiki-dark) ... }` —— 代码高亮明暗切换的核心，方向不能反
- 顶栏/页脚容器的 `max-width` 与 `@media` 回退 —— 与内容列对齐相关，改动需三处联动

### 7.4 每页布局速记

- 深色优先、右上有主题切换按钮，选择存 localStorage 并跟随系统默认
- 移动端：侧栏折叠为顶部资料卡、导航回退为紧凑排列、目录出现在正文上方

---

## 8. 部署上线

### Cloudflare Pages（推荐）

1. 把项目推到 GitHub
2. Cloudflare Dashboard → Workers & Pages → 创建 Pages → 连接仓库
3. 构建命令 `npm run build`，输出目录 `dist`
4. **环境变量设置 `NODE_VERSION` = `22`**（Astro 7 要求）
5. 保存即上线，之后 git push 自动发布

### GitHub Pages

1. 推送仓库，仓库 Settings → Pages → Source 选 **GitHub Actions**
2. `.github/workflows/deploy.yml` 已配好（Node 22），push 到 main 自动部署
3. 路径规则：
   - 仓库名为 `你的用户名.github.io` → 打开 workflow，**删除 `BASE_PATH` 那一行**
   - 其他仓库名 → 保持现状，自动使用 `/仓库名/` 子路径

### 域名与 SEO

- 部署平台设置 `SITE` 环境变量为你的正式域名（如 `https://blog.example.com`），影响 sitemap / robots.txt / RSS 里的绝对地址
- CF Pages 会自动应用 `public/_headers` 里的安全响应头；GitHub Pages 不支持自定义响应头

---

## 9. 部署前检查清单

- [ ] `site.config.ts` 无占位内容（作者、签名、4 个社交链接、repo）
- [ ] 头像已替换
- [ ] 示例文章已删除或替换（`content/blog/` 下 4 篇）
- [ ] `about` 页的自我介绍已修改（`src/pages/about.astro`）
- [ ] `SITE` 环境变量指向正式域名
- [ ] Node 构建环境 ≥ 22.22（GH Actions 已配 22；CF Pages 设 `NODE_VERSION=22`）
- [ ] Twikoo 管理员密码已设置、反垃圾已开启

---

## 10. 常见问题

**Q：`npm run dev` 下搜索没反应？**
正常。索引只在 `npm run build` 生成，用 `npm run build && npm run preview` 体验完整搜索。

**Q：评论区不出现？**
检查 `TWIKOO_ENVID` 是否已填、是否重新构建过；Twikoo 后端免费额度休眠时首次加载会慢几秒。

**Q：构建报 frontmatter 错误？**
报错信息会指出具体文件和字段，通常是 `date` 格式（要 `YYYY-MM-DD`）或 tags 拼写问题。

**Q：GitHub Actions 构建失败提示 Node 版本？**
确认 workflow 里 `node-version: 22`，且 `package.json` 的 `engines.node` 为 `>=22.22.0`。

**Q：换电脑 / 换人接手？**
克隆仓库 → `npm install` → 全部个性化配置都在 `src/site.config.ts` 和 `content/` 里，无隐藏状态。

**Q：想加新页面（如友链）？**
在 `src/pages/` 下新建 `.astro`，复制 `about.astro` 的结构即可；导航入口在 `src/layouts/BaseLayout.astro` 的 `<nav>` 里加一项。
