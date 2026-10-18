import { renderOgCard, ogSize } from '../../../lib/og';
import { getProject, projects } from '../../../content/projects';

export const size = ogSize;
export const contentType = 'image/png';
export const alt = 'Case study by Adarsh Baghel';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function Image({ params }) {
  const project = getProject((await params).slug);
  return renderOgCard({ eyebrow: project?.category || 'Case study', title: project?.name || 'Case study', description: project?.summary });
}
