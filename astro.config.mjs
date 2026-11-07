// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// SITE   : 生产环境站点地址，如 https://yourname.github.io
// BASE_PATH: 部署在子路径时设置，如 GitHub Pages 项目站点 /my-repo
//          Cloudflare Pages 保持默认 '/' 即可
const site = process.env.SITE || 'https://example.com';
const basePath = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base: basePath,
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      themes: {
        dark: 'github-dark-default',
        light: 'github-light',
      },
      wrap: true,
    },
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
