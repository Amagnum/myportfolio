import WorkContent from '../../components/work/WorkContent';
import JsonLd from '../../components/JsonLd';
import { pages } from '../../content/site';
import { projects } from '../../content/projects';
import { absoluteUrl, breadcrumbJsonLd, buildMetadata } from '../../lib/seo';

export const metadata = buildMetadata({ ...pages.work.seo, path: '/work' });

const jsonLd = [
  breadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
  ]),
  {
    '@type': 'ItemList',
    itemListElement: projects.map((project, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: absoluteUrl(`/work/${project.slug}`),
      name: project.name,
    })),
  },
];

export default function WorkPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <WorkContent />
    </>
  );
}
