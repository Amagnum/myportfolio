import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import JsonLd from '../../../components/JsonLd';
import { getAllPhotos, getPhoto } from '../../../lib/photography';
import { formatDate } from '../../../lib/blog';
import { pages, person, siteConfig } from '../../../content/site';
import { absoluteUrl, breadcrumbJsonLd, buildMetadata } from '../../../lib/seo';

const copy = pages.photography;

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPhotos().map((photo) => ({ slug: photo.slug }));
}

function describe(photo) {
  return photo.caption || [photo.title, photo.location].filter(Boolean).join(' — ');
}

export async function generateMetadata({ params }) {
  const photo = getPhoto((await params).slug);
  if (!photo) return {};

  return buildMetadata({
    title: `${photo.title} — ${copy.heading}`,
    description: describe(photo),
    path: `/photography/${photo.slug}`,
    image: photo.image,
    noIndex: photo.draft,
  });
}

function PhotoNavLink({ photo, label, direction }) {
  if (!photo) return <span />;
  return (
    <Link href={`/photography/${photo.slug}`} className={`photo-nav__link photo-nav__link--${direction}`}>
      <span className="photo-nav__thumb">
        <Image src={photo.image.src} alt="" fill sizes="96px" style={{ objectFit: 'cover' }} />
      </span>
      <span className="photo-nav__text">
        <span className="photo-nav__label">
          {direction === 'previous' && <span aria-hidden="true">← </span>}
          {label}
          {direction === 'next' && <span aria-hidden="true"> →</span>}
        </span>
        <span className="photo-nav__title">{photo.title}</span>
      </span>
    </Link>
  );
}

export default async function PhotoStoryPage({ params }) {
  const photo = getPhoto((await params).slug);
  if (!photo) notFound();

  const url = absoluteUrl(`/photography/${photo.slug}`);
  const details = [
    { label: 'Taken', value: photo.date && <time dateTime={photo.date}>{formatDate(photo.date)}</time> },
    { label: 'Location', value: photo.location },
    { label: 'Camera', value: photo.camera },
    { label: 'Lens', value: photo.lens },
    { label: 'Settings', value: photo.settings },
  ].filter((item) => item.value);

  const jsonLd = [
    breadcrumbJsonLd([
      { name: 'Home', path: '/' },
      { name: copy.heading, path: '/photography' },
      { name: photo.title, path: `/photography/${photo.slug}` },
    ]),
    {
      '@type': 'Photograph',
      '@id': `${url}#photo`,
      url,
      name: photo.title,
      description: describe(photo),
      dateCreated: photo.date,
      keywords: photo.tags.join(', '),
      creator: { '@id': `${siteConfig.url}/#person`, '@type': 'Person', name: person.name },
      ...(photo.location && { contentLocation: { '@type': 'Place', name: photo.location } }),
      image: {
        '@type': 'ImageObject',
        contentUrl: absoluteUrl(photo.image.src),
        width: photo.image.width,
        height: photo.image.height,
        caption: photo.image.alt,
        creator: { '@type': 'Person', name: person.name },
        creditText: person.name,
        copyrightNotice: `© ${person.name}`,
      },
    },
  ];

  return (
    <main className="blog-shell photo-shell">
      <JsonLd data={jsonLd} />
      <article className="photo-story">
        <nav aria-label="Breadcrumb" className="blog-breadcrumb">
          <Link href="/photography">
            <span aria-hidden="true">←</span> {copy.backLabel}
          </Link>
        </nav>

        <figure className="photo-story__figure">
          <Image
            src={photo.image.src}
            alt={photo.image.alt}
            width={photo.image.width}
            height={photo.image.height}
            sizes="(max-width: 1360px) 100vw, 1280px"
            priority
            className="photo-story__image"
          />
        </figure>

        <div className="photo-story__body">
          <header className="photo-story__header">
            <h1 className="blog-post__title">
              {photo.title}
              {photo.draft && <span className="blog-draft">Draft — hidden in production</span>}
            </h1>
            {photo.caption && <p className="blog-lede">{photo.caption}</p>}
          </header>

          {photo.storyHtml && (
            <section className="photo-story__text" aria-labelledby="story-heading">
              <h2 id="story-heading" className="photo-eyebrow">
                {copy.storyLabel}
              </h2>
              <div className="blog-prose" dangerouslySetInnerHTML={{ __html: photo.storyHtml }} />
            </section>
          )}

          {details.length > 0 && (
            <aside className="photo-details" aria-label={copy.detailsLabel}>
              <p className="blog-toc__title">{copy.detailsLabel}</p>
              <dl>
                {details.map((item) => (
                  <div key={item.label}>
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          )}

          {photo.tags.length > 0 && (
            <ul className="blog-tags photo-tags" aria-label="Tags">
              {photo.tags.map((tag) => (
                <li key={tag} className="blog-tag">
                  {tag}
                </li>
              ))}
            </ul>
          )}
        </div>

        {(photo.previous || photo.next) && (
          <nav className="photo-nav" aria-label="More photos">
            <PhotoNavLink photo={photo.previous} label={copy.previousLabel} direction="previous" />
            <PhotoNavLink photo={photo.next} label={copy.nextLabel} direction="next" />
          </nav>
        )}
      </article>
    </main>
  );
}
