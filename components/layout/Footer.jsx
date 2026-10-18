'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { footer, person } from '../../content/site';

const isInternalHref = (href) => typeof href === 'string' && href.startsWith('/') && !href.startsWith('//');
const isExternalHttp = (href) => /^https?:\/\//i.test(href ?? '');

// next/link for internal routes; external web links open in a new tab.
function FooterAnchor({ href, children, ...props }) {
  if (isInternalHref(href)) {
    return <Link href={href} {...props}>{children}</Link>;
  }
  const external = isExternalHttp(href) ? { target: '_blank', rel: 'noopener' } : {};
  return <a href={href} {...props} {...external}>{children}</a>;
}

const WHITE = 'var(--token-880999e0-fa5d-4c65-a75a-ae1653ed7391, rgb(255, 255, 255))';
const MUTED = 'var(--token-773240fd-3518-4816-8026-d74555f02613, rgb(108, 113, 121))';
const DARK = 'var(--token-fcdd5164-bf55-48ca-a517-fc569e2d93cc, rgb(17, 17, 17))';
const PILL_RADIUS = { "borderBottomLeftRadius": "100px", "borderBottomRightRadius": "100px", "borderTopLeftRadius": "100px", "borderTopRightRadius": "100px" };
const radius = (value) => ({ "borderBottomLeftRadius": value, "borderBottomRightRadius": value, "borderTopLeftRadius": value, "borderTopRightRadius": value });

// Per-breakpoint differences between the Framer variants.
const VARIANTS = [
  { wrapper: 'ssr-variant hidden-1ony1ue hidden-444z6o', footerClass: 'framer-v-k9pa7b', name: 'Desktop', radius: '40px' },
  { wrapper: 'ssr-variant hidden-1u2jidb hidden-444z6o', footerClass: 'framer-v-h9v3jn', name: 'Phone', radius: '24px' },
  { wrapper: 'ssr-variant hidden-1ony1ue hidden-1u2jidb', footerClass: 'framer-v-rwosqb', name: 'Tablet', radius: '40px' },
];

// Framer class slots for each footer column (layout CSS is keyed on these).
// Columns/links beyond the original slots reuse identically styled classes.
const COLUMN_SLOTS = [
  { column: 'framer-jafpdf', name: 'Pages', title: 'framer-1p5ri0v', wrapper: 'framer-v73b2k', wrapperName: 'Link Wrapper', items: ['framer-1qzw0lh', 'framer-9tq0nq', 'framer-1f0bt3g', 'framer-gsow6k'] },
  { column: 'framer-9n2dse', name: 'Connect', title: 'framer-189c55u', wrapper: 'framer-1t5qpc4', wrapperName: '1', items: ['framer-1ere6la', 'framer-12nn74s', 'framer-1xcduko'] },
  { column: 'framer-e418mo', name: 'Connect', title: 'framer-u6u8ao', wrapper: 'framer-1e68958', wrapperName: '2', items: ['framer-sc32nh', 'framer-1vzb0ly', 'framer-1kbb00z'] },
];
const columnSlot = (index) => COLUMN_SLOTS[index] ?? COLUMN_SLOTS[COLUMN_SLOTS.length - 1];

function FooterText({ className, color, linkVars = true, children }) {
  const containerStyle = linkVars
    ? { "--extracted-r6o4lv": color, "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }
    : { "--extracted-r6o4lv": color, "transform": "none" };
  return (
    <div className={className} data-framer-component-type="RichTextContainer" style={containerStyle}><p className="framer-text framer-styles-preset-myvcqd" data-styles-preset="vnfdw_xAY" dir="auto" style={{ "--framer-text-color": `var(--extracted-r6o4lv, ${color})` }}>{children}</p></div>
  );
}

function FooterColumn({ column, index }) {
  const slot = columnSlot(index);
  return (
    <div className={slot.column} data-framer-name={slot.name}><FooterText className={slot.title} color={MUTED}>{column.title}</FooterText><div className={slot.wrapper} data-framer-name={slot.wrapperName}>{column.links.map((link, linkIndex) => (
      <FooterText key={`${link.label}-${link.href}`} className={slot.items[linkIndex] ?? slot.items[0]} color={WHITE} linkVars={false}><FooterAnchor className="framer-text framer-styles-preset-ed70x8" data-styles-preset="ahikRel7B" href={link.href}>{link.label}</FooterAnchor></FooterText>
    ))}</div></div>
  );
}

function FooterVariant({ variant, copyright }) {
  return (
    <div className={variant.wrapper}><footer className={`framer-1sCNJ framer-S9Z77 framer-kZscH framer-9DwZu framer-k9pa7b ${variant.footerClass}`} data-framer-name={variant.name} style={{ "width": "100%" }}><div className="framer-18we12h" data-framer-name="Container" style={{ "backgroundColor": DARK, ...radius(variant.radius) }}><div className="framer-lv7mt" data-framer-name="Content"><div className="framer-e2ili2" data-framer-name="CTA"><div className="framer-1pc8r1o" data-framer-component-type="RichTextContainer" style={{ "--extracted-1of0zx5": WHITE, "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}><h2 className="framer-text framer-styles-preset-1qm3avk" data-styles-preset="oxOD4BVXa" dir="auto" style={{ "--framer-text-alignment": "center", "--framer-text-color": `var(--extracted-1of0zx5, ${WHITE})` }}>{footer.heading}</h2></div><div className="framer-1ablyfh-container"><FooterAnchor className="framer-IYN0L framer-ZROfX framer-l5zbuo framer-v-l5zbuo framer-11131nd" data-framer-name="Primary" href={footer.cta.href} style={{ "--border-bottom-width": "0px", "--border-color": "rgba(0, 0, 0, 0)", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "0px", "backgroundColor": "var(--token-b57a4573-ef01-446f-89ba-6fc5461bb54f, rgb(189, 238, 99))", "height": "100%", ...PILL_RADIUS }}><div className="framer-mb4s8" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": DARK, "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}><p className="framer-text framer-styles-preset-1t46aaw" data-styles-preset="YNEdw0Tqm" dir="auto" style={{ "--framer-text-alignment": "center", "--framer-text-color": `var(--extracted-r6o4lv, ${DARK})` }}>{footer.cta.label}</p></div></FooterAnchor></div></div><div className="framer-1f1nq63" data-framer-name="Content Wrapper"><div className="framer-wxgusm" data-framer-name="Header"><div className="framer-7oysf6-container"><Link className="framer-0gSxu framer-kZscH framer-gama31 framer-v-gama31 framer-siuqd0" data-framer-name="Desktop" data-highlight="true" href="/" tabIndex="0" style={{ "opacity": "1" }}><div className="framer-dbhgb7" style={PILL_RADIUS}><div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true"><img decoding="async" loading="lazy" width="400" height="400" src={person.avatar} alt={person.name} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} /></div></div><div className="framer-3azvt" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-jwF9ZLI4w-gC2XncC4h)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-jwF9ZLI4w-gC2XncC4h": WHITE, "transform": "none" }}><p className="framer-text framer-styles-preset-myvcqd" data-styles-preset="vnfdw_xAY" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-jwF9ZLI4w-gC2XncC4h))" }}>{person.name}</p></div></Link></div><div className="framer-19z9yo3" data-framer-name="Links">{footer.columns.map((column, index) => <FooterColumn key={column.title} column={column} index={index} />)}</div></div><div className="framer-1rah4xv" data-border="true" data-framer-name="Credit" style={{ "--border-bottom-width": "0px", "--border-color": "var(--token-e4c01179-4e7b-45a8-915a-d5bcd5f31dc2, rgb(51, 51, 51))", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "1px" }}><FooterText className="framer-10tgdn0" color={MUTED}>{copyright}</FooterText></div></div></div></div></footer></div>
  );
}

export default function Footer() {
  const router = useRouter();
  const copyright = footer.copyright.replace('{year}', String(new Date().getFullYear()));

  const handleInternalNavigation = (event) => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    const link = event.target.closest('a[href]');
    if (!link || link.target || link.hasAttribute('download')) return;

    const destination = new URL(link.href, window.location.href);
    if (destination.origin !== window.location.origin) return;

    event.preventDefault();
    router.push(`${destination.pathname}${destination.search}${destination.hash}`);
  };

  return (
    <div className="framer-14ily4e-container" onClickCapture={handleInternalNavigation}>
      {VARIANTS.map((variant) => <FooterVariant key={variant.name} variant={variant} copyright={copyright} />)}
    </div>
  );
}
