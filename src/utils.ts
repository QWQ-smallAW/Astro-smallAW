import type { CollectionEntry } from 'astro:content';

/** 拼接 base 路径（GitHub Pages 子路径部署时自动生效） */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path}`;
}

export function formatDate(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

export function sortPosts(posts: CollectionEntry<'blog'>[]): CollectionEntry<'blog'>[] {
  return posts
    .filter((p) => !p.data.draft)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function readingTime(text: string): string {
  const cjk = (text.match(/[\u4e00-\u9fff]/g) ?? []).length;
  const words = text
    .replace(/[\u4e00-\u9fff]/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length;
  const minutes = Math.max(1, Math.round((cjk / 400 + words / 200)));
  return `${minutes} min`;
}

/** 聚合所有标签 -> { tag: 文章数 }，按数量降序 */
export function collectTags(posts: CollectionEntry<'blog'>[]): Map<string, number> {
  const map = new Map<string, number>();
  for (const p of posts) {
    for (const t of p.data.tags) {
      map.set(t, (map.get(t) ?? 0) + 1);
    }
  }
  return new Map([...map.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])));
}

/** 标签 slug 化：中文保留，空格转连字符 */
export function tagSlug(tag: string): string {
  return tag.trim().replace(/\s+/g, '-');
}
