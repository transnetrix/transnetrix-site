import type { APIRoute } from 'astro';
import { getPosts } from '../../lib/articles';
import { site } from '../../data/site';

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export const GET: APIRoute = async () => {
  const posts = await getPosts();
  const items = posts.map((p) => {
    const link = new URL(`/articles/${p.id}/`, site.url).toString();
    return `<item><title>${esc(p.data.title)}</title><link>${link}</link><guid>${link}</guid><pubDate>${p.data.date.toUTCString()}</pubDate><author>${esc(p.data.author)}</author><category>${p.data.type}</category><description>${esc(p.data.summary)}</description></item>`;
  }).join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Transnetrix: Articles and News</title><link>${site.url}/articles/</link><description>Articles by Abid Majeed Khawar and news from Transnetrix.</description><language>en</language>${items}</channel></rss>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
};
