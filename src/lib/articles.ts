import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'articles'>;

/** Published posts, newest first. Drafts never appear on the live site. */
export async function getPosts(type?: 'article' | 'news'): Promise<Post[]> {
  const all = await getCollection('articles', (p) => !p.data.draft && (!type || p.data.type === type));
  return all.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export const readingTime = (body = '') => Math.max(1, Math.round(body.trim().split(/\s+/).length / 220));

export const formatDate = (d: Date) =>
  d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Asia/Karachi' });

export const typeLabel = (t: 'article' | 'news') => (t === 'article' ? 'Article' : 'News');
