import { siteConfig, person, social } from '../content/site';

export function absoluteUrl(path = '/') {
  return new URL(path, siteConfig.url).toString();
}

// Builds a page's Next.js metadata from a few fields so every page gets a
// canonical URL plus matching Open Graph / Twitter tags.
export function buildMetadata({
  title,
  description = siteConfig.description,
  path = '/',
  image,
  type = 'website',
  publishedTime,
  modifiedTime,
  tags,
  noIndex = false,
} = {}) {
  const fullTitle = title ? siteConfig.titleTemplate.replace('%s', title) : siteConfig.defaultTitle;
  const images = image ? [{ url: image.src, alt: image.alt || fullTitle }] : undefined;

  return {
    title: title ? title : { absolute: siteConfig.defaultTitle },
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      url: path,
      title: fullTitle,
      description,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      ...(images && { images }),
      ...(type === 'article' && {
        publishedTime,
        modifiedTime: modifiedTime || publishedTime,
        authors: [siteConfig.url],
        tags,
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      ...(siteConfig.twitterHandle && { creator: siteConfig.twitterHandle }),
      ...(images && { images: images.map((img) => img.url) }),
    },
    ...(noIndex && { robots: { index: false, follow: true } }),
  };
}

export const personJsonLd = {
  '@type': 'Person',
  '@id': `${siteConfig.url}/#person`,
  name: person.name,
  url: siteConfig.url,
  image: absoluteUrl(person.avatar),
  jobTitle: person.jobTitle,
  email: `mailto:${person.email}`,
  worksFor: { '@type': 'Organization', name: person.company, url: person.companyUrl },
  alumniOf: person.alumniOf.map((name) => ({ '@type': 'CollegeOrUniversity', name })),
  knowsAbout: person.knowsAbout,
  sameAs: [social.github, social.linkedin],
};

export function breadcrumbJsonLd(items) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
