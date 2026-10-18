import BlogIndex from '../../components/blog/BlogIndex';
import JsonLd from '../../components/JsonLd';
import { getAllPosts, getAllTags } from '../../lib/blog';
import { pages, siteConfig } from '../../content/site';
import { absoluteUrl, breadcrumbJsonLd, buildMetadata } from '../../lib/seo';

export const metadata = buildMetadata({ ...pages.blog.seo, path: '/blog' });

export default function BlogPage() {
  const posts = getAllPosts();

  const jsonLd = [
    breadcrumbJsonLd([
      { name: 'Home', path: '/' },
      { name: 'Blog', path: '/blog' },
    ]),
    {
      '@type': 'Blog',
      '@id': `${siteConfig.url}/blog#blog`,
      url: absoluteUrl('/blog'),
      name: `${siteConfig.name} — ${pages.blog.heading}`,
      description: pages.blog.seo.description,
      author: { '@id': `${siteConfig.url}/#person` },
      blogPost: posts.map((post) => ({
        '@type': 'BlogPosting',
        headline: post.title,
        url: absoluteUrl(`/blog/${post.slug}`),
        datePublished: post.date,
      })),
    },
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <BlogIndex posts={posts} tags={getAllTags()} />
    </>
  );
}
