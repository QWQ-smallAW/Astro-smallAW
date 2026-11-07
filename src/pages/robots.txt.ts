import type { APIRoute } from 'astro';

// sitemap 地址跟随 astro.config.mjs 的 site / base 配置（SITE 环境变量）
export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const sitemap = site ? new URL(`${base}/sitemap-index.xml`, site).href : `${base}/sitemap-index.xml`;

  return new Response(
    `User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } }
  );
};
