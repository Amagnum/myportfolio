import { getAllPosts, getAllTags } from '../lib/blog';
import { getAllPhotos } from '../lib/photography';
import { projects } from '../content/projects';
import { absoluteUrl } from '../lib/seo';

export default function sitemap() {
  const posts = getAllPosts().filter((post) => !post.draft);
  const photos = getAllPhotos().filter((photo) => !photo.draft);
  const latestPost = posts[0] ? new Date(posts[0].updated || posts[0].date) : undefined;

  const staticPages = [
    { path: '/', priority: 1, changeFrequency: 'monthly' },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/work', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/photography', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/blog', priority: 0.8, changeFrequency: 'weekly', lastModified: latestPost },
    { path: '/contact', priority: 0.5, changeFrequency: 'yearly' },
  ];

  return [
    ...staticPages.map(({ path, lastModified, ...rest }) => ({ url: absoluteUrl(path), lastModified, ...rest })),
    ...projects.map((project) => ({
      url: absoluteUrl(`/work/${project.slug}`),
      changeFrequency: 'yearly',
      priority: 0.7,
    })),
    ...posts.map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: new Date(post.updated || post.date),
      changeFrequency: 'monthly',
      priority: 0.7,
    })),
    ...photos.map((photo) => ({
      url: absoluteUrl(`/photography/${photo.slug}`),
      ...(photo.date && { lastModified: new Date(photo.date) }),
      changeFrequency: 'yearly',
      priority: 0.5,
      images: [absoluteUrl(photo.image.src)],
    })),
    ...getAllTags().map((tag) => ({
      url: absoluteUrl(`/blog/tag/${tag.slug}`),
      changeFrequency: 'weekly',
      priority: 0.3,
    })),
  ];
}
