import HeroSection from '../components/home/HeroSection';
import AboutBriefSection from '../components/home/AboutBriefSection';
import BackedByWorkSection from '../components/home/BackedByWorkSection';
import SelectedWorkSection from '../components/home/SelectedWorkSection';
import ServicesSection from '../components/home/ServicesSection';
import { pages } from '../content/site';
import { buildMetadata } from '../lib/seo';

export const metadata = buildMetadata({ ...pages.home.seo, path: '/' });

export default function HomePage() {
  return (
    <div
      data-framer-root=""
      className="framer-pNPRd framer-kZscH framer-xIMGr framer-S9Z77 framer-HmoXg framer-r7dCw framer-72rtr7"
      style={{ minHeight: '100vh', width: 'auto', display: 'contents' }}
    >
      <HeroSection />
      <AboutBriefSection />
      <BackedByWorkSection />
      <SelectedWorkSection />
      <ServicesSection />
    </div>
  );
}
