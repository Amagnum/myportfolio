import AboutContent from '../../components/about/AboutContent';
import AboutAnimations from '../../components/about/AboutAnimations';
import AboutEnhancements from '../../components/about/AboutEnhancements';
import JsonLd from '../../components/JsonLd';
import { pages, siteConfig } from '../../content/site';
import { absoluteUrl, breadcrumbJsonLd, buildMetadata } from '../../lib/seo';

export const metadata = buildMetadata({ ...pages.about.seo, path: '/about', type: 'profile' });

const jsonLd = [
  breadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
  ]),
  {
    '@type': 'ProfilePage',
    url: absoluteUrl('/about'),
    name: pages.about.seo.title,
    description: pages.about.seo.description,
    mainEntity: { '@id': `${siteConfig.url}/#person` },
  },
];

export default function AboutPage() {
  return (
    <div data-about-page>
      <JsonLd data={jsonLd} />
      <AboutContent />
      <AboutEnhancements />
      <AboutAnimations />
    </div>
  );
}
