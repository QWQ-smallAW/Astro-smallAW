#!/usr/bin/env node
// 自动创建文章：content/blog/<slug>/index.md + 补全 frontmatter
// 用法：npm run newpost -- "文章标题" [英文slug]
//   - 标题必填；slug 可选（纯英文标题会自动生成，中文标题必须手动给）
//   - slug 规范：小写字母/数字/连字符（站内约定，图片文件名也用英文）

import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const [title, slugArg] = process.argv.slice(2);

if (!title || !title.trim()) {
  console.error('用法: npm run newpost -- "文章标题" [英文slug]');
  console.error('示例: npm run newpost -- "我的新文章" my-new-post');
  process.exit(1);
}

// 生成 slug：小写、空白转连字符、去掉非法字符
function slugify(s) {
  return s
    .toLowerCase()
    .trim()
    .replace(/[\s_]+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

const slug = slugArg ? slugify(slugArg) : slugify(title);

if (!slug) {
  console.error('✗ 无法生成英文 slug。中文标题请手动提供第二个参数：');
  console.error(`  npm run newpost -- "${title}" my-english-slug`);
  process.exit(1);
}

if (slugArg && slug !== slugify(slugArg)) {
  console.log(`ℹ slug 已规范化为: ${slug}`);
}

const dir = join(process.cwd(), 'content', 'blog', slug);
if (existsSync(dir)) {
  console.error(`✗ 文章已存在: content/blog/${slug}/ （换个 slug，或直接往里写）`);
  process.exit(1);
}

// 本地日期 YYYY-MM-DD（与站内现有文章格式一致）
const now = new Date();
const pad = (n) => String(n).padStart(2, '0');
const date = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;

// 标题/描述用双引号包裹（JSON.stringify 产物即合法 YAML 双引号标量），
// 避免标题里出现半角冒号、引号时破坏 YAML 结构
const frontmatter = `---
title: ${JSON.stringify(title.trim())}
date: ${date}
description: ""
tags: []
draft: true
---
`;

mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, 'index.md'), frontmatter, 'utf8');

console.log(`✓ 文章已创建: content/blog/${slug}/index.md`);
console.log(`  标题:   ${title.trim()}`);
console.log(`  日期:   ${date}`);
console.log(`  状态:   draft: true（写完记得改成 false 才会发布）`);
console.log(`  下一步: 补上 description 和 tags，图片直接放同文件夹相对路径引用`);
