import Link from 'next/link';
import Image from 'next/image';
import JsonLd from '../../components/JsonLd';
import { getAllPhotos } from '../../lib/photography';
import { pages, siteConfig } from '../../content/site';
import { absoluteUrl, breadcrumbJsonLd, buildMetadata } from '../../lib/seo';

const copy = pages.photography;

export const metadata = buildMetadata({ ...copy.seo, path: '/photography' });

export default function PhotographyPage() {
  const photos = getAllPhotos();

  const jsonLd = [
    breadcrumbJsonLd([
      { name: 'Home', path: '/' },
      { name: copy.heading, path: '/photography' },
    ]),
    {
      '@type': 'CollectionPage',
      url: absoluteUrl('/photography'),
      name: `${copy.heading} — ${siteConfig.name}`,
      description: copy.seo.description,
      author: { '@id': `${siteConfig.url}/#person` },
      hasPart: photos.map((photo) => ({
        '@type': 'Photograph',
        name: photo.title,
        url: absoluteUrl(`/photography/${photo.slug}`),
        image: absoluteUrl(photo.image.src),
      })),
    },
  ];

  return (
    <main className="blog-shell photo-shell">
      <JsonLd data={jsonLd} />
      <header className="blog-header">
        <p className="photo-eyebrow">{copy.eyebrow}</p>
        <h1 className="blog-title">{copy.heading}</h1>
        <p className="blog-lede">{copy.description}</p>
      </header>

      {photos.length === 0 ? (
        <p className="blog-empty">{copy.emptyState}</p>
      ) : (
        <ul className="photo-grid">
          {photos.map((photo, index) => (
            <li key={photo.slug} className="photo-grid__item">
              <Link href={`/photography/${photo.slug}`} className="photo-tile">
                <Image
                  src={photo.image.src}
                  alt={photo.image.alt}
                  width={photo.image.width}
                  height={photo.image.height}
                  sizes="(max-width: 809px) 100vw, (max-width: 1199px) 50vw, 33vw"
                  priority={index < 2}
                  className="photo-tile__image"
                />
                <span className="photo-tile__caption">
                  <span className="photo-tile__title">
                    {photo.title}
                    {photo.draft && <span className="blog-draft">Draft</span>}
                  </span>
                  {photo.location && <span className="photo-tile__meta">{photo.location}</span>}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
