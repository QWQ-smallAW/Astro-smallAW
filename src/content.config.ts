import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  // 一篇文章一个文件夹：content/blog/<slug>/index.md，图片等资源放在同文件夹内
  loader: glob({ pattern: '**/index.md', base: './content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(), // 最新更新日期；超过 7 天文章头部会显示过时提示
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
