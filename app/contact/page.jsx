import ContactContent from '../../components/contact/ContactContent';
import { pages } from '../../content/site';
import { buildMetadata } from '../../lib/seo';

export const metadata = buildMetadata({ ...pages.contact.seo, path: '/contact' });

export default function ContactPage() {
  return <ContactContent />;
}
