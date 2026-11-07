---
title: 用 Astro 搭一个终端风博客
description: 从选型到部署：内容集合、标签聚合、Pagefind 全文搜索与双平台静态托管的完整思路。
date: 2026-03-08
tags: [Astro, 前端, 教程]
---

这个博客本身就是一个案例：Astro 5 构建，纯静态输出，GitHub Pages 和 Cloudflare Pages 都能一键部署。这篇文章记录关键决策。

## 为什么是 Astro

对纯内容站来说，最重要的指标是：**默认输出的 HTML 就是最终产物**，不 hydrate、不加载框架运行时。同时它原生支持 Markdown 内容集合，写作体验零摩擦。

## 内容集合与类型校验

`src/content.config.ts` 里定义 frontmatter 的 schema，字段写错会在构建时直接报错：

```ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
```

## 标签聚合的思路

标签不需要单独的数据文件，遍历所有文章即可聚合出 `Map<tag, count>`，再用 `getStaticPaths` 为每个标签生成静态页面：

```ts
export async function getStaticPaths() {
  const posts = await getCollection('blog');
  const tags = collectTags(posts);
  return [...tags.keys()].map((tag) => ({
    params: { tag: tagSlug(tag) },
    props: { posts: posts.filter((p) => p.data.tags.includes(tag)) },
  }));
}
```

## 全文搜索：Pagefind

Pagefind 在构建完成后扫描 `dist/` 目录，生成按需加载的分片索引——文章越多，单次搜索要下载的数据反而越小。接入只需要十几行代码，零服务端。

## 部署

| 平台 | 方式 | 成本 |
|------|------|------|
| GitHub Pages | Actions workflow 自动构建 | 免费 |
| Cloudflare Pages | 连接仓库，`npm run build` | 免费 |

同一份 `dist/` 产物，两边行为完全一致。唯一要注意的是 GitHub Pages 的子路径：通过 `BASE_PATH` 环境变量把 `base` 传给 Astro 即可。

## 结语

整套方案没有黑魔法，每一层都可以替换。这正是"可移植"的含义：不是绑定某个平台，而是把依赖降到最低。
