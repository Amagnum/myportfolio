---
title: How I made my Next.js portfolio SEO-friendly
description: Moving a Framer-exported portfolio to a content-driven Next.js App Router setup with real case studies, a Markdown blog, sitemaps, and structured data.
date: 2026-10-19
tags: [Next.js, SEO, Web Development]
draft: true
---

My portfolio started life as a Framer export. It looked good, but under the hood it had the problems most exported sites share: copy hardcoded in thousands of lines of markup, template filler on the case-study pages, and very little for search engines to work with. Here's how I restructured it on the Next.js App Router.

## One content file instead of hardcoded copy

Every headline, description, image and link now lives in a single `content/site.js` file, with projects in `content/projects.js`. Components read from those files instead of carrying their own text.

That has two big benefits:

- **Consistency.** The same project name, summary and image are used on the home page, the work page and the case study — no more drifting copies.
- **Better SEO hygiene.** Every image has a real, descriptive `alt` attribute, and every page gets its title and description from one place.

## Real URLs for case studies

The exported site had case studies on template URLs like `/work/brightly-studio`. They now live at descriptive slugs such as `/work/moji`, generated from the project list with `generateStaticParams`. The old URLs return permanent (308) redirects so any existing links keep working.

Project cards also link to these internal pages instead of jumping straight to external sites, which gives search engines a clear path through the site.

## Metadata on every page

A small `buildMetadata()` helper gives each page:

- a unique `<title>` and meta description,
- a canonical URL,
- matching Open Graph and Twitter card tags.

Social share images are generated at build time with `next/og`, so every blog post and case study gets its own preview card without me designing one by hand.

## Structured data

Search engines understand a page better when you describe it with [schema.org](https://schema.org) JSON-LD. The site now ships:

- `Person` and `WebSite` on every page,
- `BreadcrumbList` on inner pages,
- `CreativeWork` for each case study,
- `BlogPosting` for each article.

## A Markdown blog

Posts are plain Markdown files in `content/blog/`. Frontmatter holds the title, description, date and tags; the file name becomes the URL. The blog generates tag pages, related posts, a table of contents, an RSS feed at `/blog/rss.xml`, and adds every post to `sitemap.xml` automatically.

## What's next

With the foundations in place, the most important SEO work is the simplest: writing useful posts regularly and keeping the case studies detailed and up to date.
