import { renderOgCard, ogSize } from '../../../lib/og';
import { getAllPosts, getPost } from '../../../lib/blog';

export const size = ogSize;
export const contentType = 'image/png';
export const alt = 'Blog article by Adarsh Baghel';

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export default async function Image({ params }) {
  const post = getPost((await params).slug);
  return renderOgCard({ eyebrow: 'Blog', title: post?.title || 'Blog', description: post?.description });
}
