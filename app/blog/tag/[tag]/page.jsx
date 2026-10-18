import { notFound } from 'next/navigation';
import BlogIndex from '../../../../components/blog/BlogIndex';
import { getAllPosts, getAllTags, slugify } from '../../../../lib/blog';
import { buildMetadata } from '../../../../lib/seo';

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllTags().map((tag) => ({ tag: tag.slug }));
}

function findTag(slug) {
  return getAllTags().find((tag) => tag.slug === slug);
}

export async function generateMetadata({ params }) {
  const tag = findTag((await params).tag);
  if (!tag) return {};
  return buildMetadata({
    title: `Articles about ${tag.name}`,
    description: `Articles by Adarsh Baghel about ${tag.name}.`,
    path: `/blog/tag/${tag.slug}`,
  });
}

export default async function TagPage({ params }) {
  const tag = findTag((await params).tag);
  if (!tag) notFound();

  const posts = getAllPosts().filter((post) => post.tags.some((name) => slugify(name) === tag.slug));
  return <BlogIndex posts={posts} tags={getAllTags()} activeTag={tag.slug} heading={tag.name} description={`${posts.length} article${posts.length === 1 ? '' : 's'}`} />;
}
