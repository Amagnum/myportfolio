import { notFound } from 'next/navigation';
import CaseStudyContent from '../../../components/work/CaseStudyContent';
import JsonLd from '../../../components/JsonLd';
import { getOtherProjects, getProject, projects } from '../../../content/projects';
import { absoluteUrl, breadcrumbJsonLd, buildMetadata } from '../../../lib/seo';
import { siteConfig } from '../../../content/site';

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return buildMetadata({
    title: project.seo?.title || project.name,
    description: project.seo?.description || project.summary,
    path: `/work/${project.slug}`,
  });
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const jsonLd = [
    breadcrumbJsonLd([
      { name: 'Home', path: '/' },
      { name: 'Work', path: '/work' },
      { name: project.name, path: `/work/${project.slug}` },
    ]),
    {
      '@type': 'CreativeWork',
      name: project.name,
      headline: project.seo?.title || project.name,
      description: project.seo?.description || project.summary,
      url: absoluteUrl(`/work/${project.slug}`),
      image: absoluteUrl(project.image.src),
      genre: project.category,
      author: { '@id': `${siteConfig.url}/#person` },
      ...(project.url && { sameAs: project.url }),
    },
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <CaseStudyContent project={project} otherProjects={getOtherProjects(project.slug)} />
    </>
  );
}
