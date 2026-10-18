import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import sizeOf from 'image-size';
import { renderMarkdown } from './blog';

// Each photo is a Markdown file in content/photography/<slug>.md: frontmatter
// describes the photo, the body is the story behind it. Image files live in
// public/images/photography/. Files starting with "_" are ignored.
const PHOTOS_DIR = path.join(process.cwd(), 'content', 'photography');
const PUBLIC_DIR = path.join(process.cwd(), 'public');

function toIsoDate(value) {
  if (!value) return undefined;
  const date = value instanceof Date ? value : new Date(value);
  return Number.isNaN(date.getTime()) ? undefined : date.toISOString();
}

function readImageSize(src) {
  try {
    const { width, height } = sizeOf(path.join(PUBLIC_DIR, src));
    return { width, height };
  } catch {
    throw new Error(`Photo "${src}" was not found in /public. Check the "image" field.`);
  }
}

function readPhotoFile(fileName) {
  const slug = fileName.replace(/\.mdx?$/, '');
  const { data, content } = matter(fs.readFileSync(path.join(PHOTOS_DIR, fileName), 'utf8'));

  if (!data.title || !data.image || !data.alt) {
    throw new Error(`content/photography/${fileName} needs "title", "image" and "alt" in its frontmatter.`);
  }

  return {
    slug,
    title: data.title,
    caption: data.caption || '',
    image: { src: data.image, alt: data.alt, ...readImageSize(data.image) },
    date: toIsoDate(data.date),
    location: data.location || '',
    camera: data.camera || '',
    lens: data.lens || '',
    settings: data.settings || '',
    tags: Array.isArray(data.tags) ? data.tags : data.tags ? [data.tags] : [],
    order: typeof data.order === 'number' ? data.order : null,
    draft: Boolean(data.draft),
    story: content.trim(),
  };
}

const showDrafts = process.env.NODE_ENV !== 'production';

// Sorted by `order` (lowest first) when set, otherwise newest photo first.
export function getAllPhotos() {
  if (!fs.existsSync(PHOTOS_DIR)) return [];

  return fs
    .readdirSync(PHOTOS_DIR)
    .filter((file) => /\.mdx?$/.test(file) && !file.startsWith('_'))
    .map(readPhotoFile)
    .filter((photo) => showDrafts || !photo.draft)
    .sort((a, b) => {
      if (a.order !== null || b.order !== null) return (a.order ?? Infinity) - (b.order ?? Infinity);
      return new Date(b.date || 0) - new Date(a.date || 0);
    });
}

export function getPhoto(slug) {
  const photos = getAllPhotos();
  const index = photos.findIndex((photo) => photo.slug === slug);
  if (index === -1) return null;

  const { html } = renderMarkdown(photos[index].story);
  return {
    ...photos[index],
    storyHtml: html,
    previous: photos[index - 1] || null,
    next: photos[index + 1] || null,
  };
}
