import Link from 'next/link';
import PostCard from './PostCard';
import { pages } from '../../content/site';

const copy = pages.blog;

export default function BlogIndex({ posts, tags, activeTag, heading = copy.heading, description = copy.description }) {
  return (
    <main className="blog-shell">
      <header className="blog-header">
        {activeTag && (
          <Link href="/blog" className="blog-back">
            <span aria-hidden="true">←</span> {copy.backLabel}
          </Link>
        )}
        <h1 className="blog-title">{heading}</h1>
        {description && <p className="blog-lede">{description}</p>}
        {tags.length > 0 && (
          <nav className="blog-tags" aria-label="Topics">
            {tags.map((tag) => (
              <Link
                key={tag.slug}
                href={`/blog/tag/${tag.slug}`}
                className="blog-tag"
                aria-current={activeTag === tag.slug ? 'page' : undefined}
              >
                {tag.name}
              </Link>
            ))}
          </nav>
        )}
      </header>

      {posts.length === 0 ? (
        <p className="blog-empty">{copy.emptyState}</p>
      ) : (
        <div className="blog-grid">
          {posts.map((post, index) => (
            <PostCard key={post.slug} post={post} readMoreLabel={copy.readMoreLabel} priority={index === 0} />
          ))}
        </div>
      )}
    </main>
  );
}
