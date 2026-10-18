import { getAllPosts } from '../../../lib/blog';
import { pages, person, siteConfig } from '../../../content/site';
import { absoluteUrl } from '../../../lib/seo';

export const dynamic = 'force-static';

function escapeXml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function GET() {
  const posts = getAllPosts().filter((post) => !post.draft);

  const items = posts
    .map((post) => {
      const url = absoluteUrl(`/blog/${post.slug}`);
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(post.description)}</description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <author>${escapeXml(`${person.email} (${person.name})`)}</author>
${post.tags.map((tag) => `      <category>${escapeXml(tag)}</category>`).join('\n')}
    </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(`${siteConfig.name} — ${pages.blog.heading}`)}</title>
    <link>${absoluteUrl('/blog')}</link>
    <description>${escapeXml(pages.blog.seo.description)}</description>
    <language>en</language>
    <atom:link href="${absoluteUrl('/blog/rss.xml')}" rel="self" type="application/rss+xml" />
${posts[0] ? `    <lastBuildDate>${new Date(posts[0].updated || posts[0].date).toUTCString()}</lastBuildDate>\n` : ''}${items}
  </channel>
</rss>
`;

  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
