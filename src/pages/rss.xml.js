import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { sortPosts, tagSlug } from '../utils';
import { SITE } from '../site.config';

export async function GET(context) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const posts = sortPosts(await getCollection('blog'));

  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      categories: post.data.tags.map(tagSlug),
      link: `${base}/posts/${post.id}/`,
    })),
    customData: '<language>zh-CN</language>',
  });
}
