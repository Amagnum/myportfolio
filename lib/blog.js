import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { Marked } from 'marked';

// Blog posts are Markdown files in content/blog/<slug>.md with frontmatter.
// Files starting with "_" (e.g. _TEMPLATE.md) are ignored.
const POSTS_DIR = path.join(process.cwd(), 'content', 'blog');
const WORDS_PER_MINUTE = 220;

export function slugify(value) {
  return String(value)
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/[\s-]+/g, '-');
}

function escapeAttr(value) {
  return String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
}

// Plain text from rendered inline HTML (tags removed, entities decoded).
function stripTags(html) {
  return html
    .replace(/<[^>]*>/g, '')
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');
}

function createRenderer(headings) {
  const marked = new Marked({ gfm: true });
  const usedIds = new Map();

  marked.use({
    renderer: {
      heading({ tokens, depth }) {
        const html = this.parser.parseInline(tokens);
        const text = stripTags(html);
        const base = slugify(text) || 'section';
        const count = usedIds.get(base) || 0;
        usedIds.set(base, count + 1);
        const id = count ? `${base}-${count}` : base;
        if (depth === 2 || depth === 3) headings.push({ id, text, depth });
        return `<h${depth} id="${id}"><a class="blog-anchor" href="#${id}" aria-hidden="true" tabindex="-1">#</a>${html}</h${depth}>\n`;
      },
      image({ href, title, text }) {
        const titleAttr = title ? ` title="${escapeAttr(title)}"` : '';
        return `<img src="${escapeAttr(href)}" alt="${escapeAttr(text)}"${titleAttr} loading="lazy" decoding="async" />`;
      },
      link({ href, title, tokens }) {
        const html = this.parser.parseInline(tokens);
        const titleAttr = title ? ` title="${escapeAttr(title)}"` : '';
        const external = /^https?:\/\//.test(href);
        const rel = external ? ' target="_blank" rel="noopener noreferrer"' : '';
        return `<a href="${escapeAttr(href)}"${titleAttr}${rel}>${html}</a>`;
      },
    },
  });

  return marked;
}

function toIsoDate(value) {
  if (!value) return undefined;
  const date = value instanceof Date ? value : new Date(value);
  return Number.isNaN(date.getTime()) ? undefined : date.toISOString();
}

function readPostFile(fileName) {
  const slug = fileName.replace(/\.mdx?$/, '');
  const raw = fs.readFileSync(path.join(POSTS_DIR, fileName), 'utf8');
  const { data, content } = matter(raw);

  if (!data.title || !data.date) {
    throw new Error(`content/blog/${fileName} needs at least "title" and "date" in its frontmatter.`);
  }

  const words = content.split(/\s+/).filter(Boolean).length;

  return {
    slug,
    title: data.title,
    description: data.description || '',
    date: toIsoDate(data.date),
    updated: toIsoDate(data.updated),
    tags: Array.isArray(data.tags) ? data.tags : data.tags ? [data.tags] : [],
    cover: data.cover ? { src: data.cover, alt: data.coverAlt || data.title } : null,
    seoTitle: data.seoTitle || null,
    canonical: data.canonical || null,
    draft: Boolean(data.draft),
    readingMinutes: Math.max(1, Math.round(words / WORDS_PER_MINUTE)),
    content,
  };
}

const showDrafts = process.env.NODE_ENV !== 'production';

export function getAllPosts() {
  if (!fs.existsSync(POSTS_DIR)) return [];

  return fs
    .readdirSync(POSTS_DIR)
    .filter((file) => /\.mdx?$/.test(file) && !file.startsWith('_'))
    .map(readPostFile)
    .filter((post) => showDrafts || !post.draft)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPost(slug) {
  const post = getAllPosts().find((item) => item.slug === slug);
  if (!post) return null;

  return { ...post, ...renderMarkdown(post.content) };
}

// Markdown → HTML with heading anchors; also used for photo stories.
export function renderMarkdown(markdown) {
  const headings = [];
  const html = createRenderer(headings).parse(markdown);
  return { html, headings };
}

export function getAllTags() {
  const counts = new Map();
  for (const post of getAllPosts()) {
    for (const tag of post.tags) counts.set(tag, (counts.get(tag) || 0) + 1);
  }
  return [...counts.entries()].map(([name, count]) => ({ name, slug: slugify(name), count }));
}

export function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' });
}
