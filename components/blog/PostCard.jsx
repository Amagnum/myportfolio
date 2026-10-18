import Link from 'next/link';
import Image from 'next/image';
import { formatDate } from '../../lib/blog';

export default function PostCard({ post, readMoreLabel, priority = false }) {
  return (
    <article className="blog-card">
      <Link href={`/blog/${post.slug}`} className="blog-card__link">
        {post.cover && (
          <div className="blog-card__cover">
            <Image
              src={post.cover.src}
              alt={post.cover.alt}
              fill
              sizes="(max-width: 809px) 100vw, (max-width: 1199px) 50vw, 33vw"
              priority={priority}
              style={{ objectFit: 'cover' }}
            />
          </div>
        )}
        <div className="blog-card__body">
          <p className="blog-meta">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden="true">·</span>
            <span>{post.readingMinutes} min read</span>
            {post.draft && <span className="blog-draft">Draft</span>}
          </p>
          <h2 className="blog-card__title">{post.title}</h2>
          {post.description && <p className="blog-card__excerpt">{post.description}</p>}
          <span className="blog-card__more">
            {readMoreLabel} <span aria-hidden="true">→</span>
          </span>
        </div>
      </Link>
    </article>
  );
}
