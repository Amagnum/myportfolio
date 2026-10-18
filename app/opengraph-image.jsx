import { renderOgCard, ogSize } from '../lib/og';
import { pages, siteConfig } from '../content/site';

export const alt = siteConfig.defaultTitle;
export const size = ogSize;
export const contentType = 'image/png';

export default function Image() {
  return renderOgCard({ title: pages.home.hero.title, description: siteConfig.description });
}
