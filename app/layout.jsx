import './globals.css';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SvgTemplates from '../components/SvgTemplates';
import ScrollAnimations from '../components/ScrollAnimations';
import ScrollToTop from '../components/ScrollToTop';
import JsonLd from '../components/JsonLd';
import { siteConfig, person } from '../content/site';
import { personJsonLd } from '../lib/seo';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: siteConfig.themeColor,
};

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.defaultTitle,
    template: siteConfig.titleTemplate,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: siteConfig.keywords,
  authors: [{ name: person.name, url: siteConfig.url }],
  creator: person.name,
  publisher: person.name,
  alternates: {
    canonical: '/',
    types: { 'application/rss+xml': [{ url: '/blog/rss.xml', title: `${siteConfig.name} — Blog` }] },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [{ url: siteConfig.favicon, type: 'image/png' }],
    shortcut: siteConfig.favicon,
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    title: siteConfig.shortName,
  },
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: '/',
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    siteName: siteConfig.name,
    ...(siteConfig.ogImage && { images: [siteConfig.ogImage] }),
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
  },
};

const siteJsonLd = [
  personJsonLd,
  {
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: { '@id': `${siteConfig.url}/#person` },
    inLanguage: 'en',
  },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <JsonLd data={siteJsonLd} />
        <div id="main">
          <div className="framer-3wnNZ framer-1u2jidb" data-layout-template="true" style={{ minHeight: '100vh', width: 'auto' }}>
            <Navbar />
            {children}
            <Footer />
          </div>
        </div>
        <ScrollToTop />
        <ScrollAnimations />
        <SvgTemplates />
      </body>
    </html>
  );
}
