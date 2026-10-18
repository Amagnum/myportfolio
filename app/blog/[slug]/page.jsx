import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import JsonLd from '../../../components/JsonLd';
import PostCard from '../../../components/blog/PostCard';
import { formatDate, getAllPosts, getPost, slugify } from '../../../lib/blog';
import { pages, person, siteConfig } from '../../../content/site';
import { absoluteUrl, breadcrumbJsonLd, buildMetadata } from '../../../lib/seo';

const copy = pages.blog;

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const post = getPost((await params).slug);
  if (!post) return {};

  const metadata = buildMetadata({
    title: post.seoTitle || post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    image: post.cover || undefined,
    type: 'article',
    publishedTime: post.date,
    modifiedTime: post.updated,
    tags: post.tags,
    noIndex: post.draft,
  });

  if (post.canonical) metadata.alternates = { canonical: post.canonical };
  return { ...metadata, keywords: post.tags };
}

export default async function BlogPostPage({ params }) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  const url = absoluteUrl(`/blog/${post.slug}`);
  const related = getAllPosts()
    .filter((item) => item.slug !== post.slug)
    .map((item) => ({ item, score: item.tags.filter((tag) => post.tags.includes(tag)).length }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 2)
    .map(({ item }) => item);

  const jsonLd = [
    breadcrumbJsonLd([
      { name: 'Home', path: '/' },
      { name: 'Blog', path: '/blog' },
      { name: post.title, path: `/blog/${post.slug}` },
    ]),
    {
      '@type': 'BlogPosting',
      '@id': `${url}#article`,
      mainEntityOfPage: url,
      url,
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      dateModified: post.updated || post.date,
      image: post.cover ? absoluteUrl(post.cover.src) : absoluteUrl(`/blog/${post.slug}/opengraph-image`),
      keywords: post.tags.join(', '),
      wordCount: post.content.split(/\s+/).filter(Boolean).length,
      author: { '@id': `${siteConfig.url}/#person`, '@type': 'Person', name: person.name, url: siteConfig.url },
      publisher: { '@id': `${siteConfig.url}/#person` },
      isPartOf: { '@id': `${siteConfig.url}/blog#blog` },
      inLanguage: 'en',
    },
  ];

  return (
    <main className="blog-shell">
      <JsonLd data={jsonLd} />
      <article className="blog-post">
        <header className="blog-post__header">
          <nav aria-label="Breadcrumb" className="blog-breadcrumb">
            <Link href="/blog">
              <span aria-hidden="true">←</span> {copy.backLabel}
            </Link>
          </nav>
          <h1 className="blog-post__title">{post.title}</h1>
          {post.description && <p className="blog-lede">{post.description}</p>}
          <div className="blog-byline">
            <Image src={person.avatar} alt="" width={40} height={40} className="blog-byline__avatar" />
            <div>
              <p className="blog-byline__name">
                <Link href="/about" rel="author">
                  {person.name}
                </Link>
              </p>
              <p className="blog-meta">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                {post.updated && post.updated !== post.date && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span>
                      Updated <time dateTime={post.updated}>{formatDate(post.updated)}</time>
                    </span>
                  </>
                )}
                <span aria-hidden="true">·</span>
                <span>{post.readingMinutes} min read</span>
                {post.draft && <span className="blog-draft">Draft — hidden in production</span>}
              </p>
            </div>
          </div>
          {post.cover && (
            <div className="blog-post__cover">
              <Image src={post.cover.src} alt={post.cover.alt} fill priority sizes="(max-width: 860px) 100vw, 820px" style={{ objectFit: 'cover' }} />
            </div>
          )}
        </header>

        {post.headings.length > 2 && (
          <nav className="blog-toc" aria-label="Table of contents">
            <p className="blog-toc__title">On this page</p>
            <ol>
              {post.headings.map((heading) => (
                <li key={heading.id} data-depth={heading.depth}>
                  <a href={`#${heading.id}`}>{heading.text}</a>
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div className="blog-prose" dangerouslySetInnerHTML={{ __html: post.html }} />

        {post.tags.length > 0 && (
          <footer className="blog-post__footer">
            <nav className="blog-tags" aria-label="Topics">
              {post.tags.map((tag) => (
                <Link key={tag} href={`/blog/tag/${slugify(tag)}`} className="blog-tag" rel="tag">
                  {tag}
                </Link>
              ))}
            </nav>
          </footer>
        )}
      </article>

      {related.length > 0 && (
        <section className="blog-related" aria-labelledby="related-heading">
          <h2 id="related-heading" className="blog-related__title">
            Keep reading
          </h2>
          <div className="blog-grid">
            {related.map((item) => (
              <PostCard key={item.slug} post={item} readMoreLabel={copy.readMoreLabel} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
