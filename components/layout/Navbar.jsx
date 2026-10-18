'use client';

import { useEffect, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { navigation, person } from '../../content/site';

const isInternalHref = (href) => typeof href === 'string' && href.startsWith('/') && !href.startsWith('//');

// Renders next/link for internal routes and a plain anchor otherwise.
function NavAnchor({ href, children, ...props }) {
  if (isInternalHref(href)) {
    return <Link href={href} {...props}>{children}</Link>;
  }
  return <a href={href} {...props}>{children}</a>;
}

const PILL_RADIUS = { "borderBottomLeftRadius": "100px", "borderBottomRightRadius": "100px", "borderTopLeftRadius": "100px", "borderTopRightRadius": "100px" };
const NAV_BORDER_STYLE = { "--border-bottom-width": "1px", "--border-color": "var(--token-c06ac48a-21a8-4582-b3d6-9f37581073a1, rgb(247, 247, 247))", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "0px", "backgroundColor": "var(--token-880999e0-fa5d-4c65-a75a-ae1653ed7391, rgb(255, 255, 255))", "width": "100%" };
const MENU_ICON_STYLE = { "--1m6trwb": "0", "--21h8s6": "var(--token-fcdd5164-bf55-48ca-a517-fc569e2d93cc, rgb(17, 17, 17))", "--pgex8v": "1.5" };

// Framer gave each nav item container its own (identically styled) class.
const NAV_ITEM_CONTAINERS = ['framer-1vjtges-container', 'framer-1s9bism-container', 'framer-19ij2du-container'];
const navItemContainer = (index) => NAV_ITEM_CONTAINERS[index] ?? NAV_ITEM_CONTAINERS[1];

// Per-breakpoint differences between the Framer variants.
const VARIANTS = {
  desktop: {
    wrapper: 'ssr-variant hidden-1ony1ue hidden-444z6o',
    navClass: 'framer-v-1vxy7d1',
    navName: 'Desktop',
    brandClass: 'framer-v-vramua',
    brandName: 'Desktop 2',
    menu: false,
    navItemStyle: { "backgroundColor": "var(--token-c06ac48a-21a8-4582-b3d6-9f37581073a1, rgb(247, 247, 247))", ...PILL_RADIUS },
    linkClass: 'framer-v-4fu3xj',
    linkName: 'Desktop',
    linkPreset: ['framer-styles-preset-1e0m3iw', 'wD8LD2XOT'],
  },
  phone: {
    wrapper: 'ssr-variant hidden-1u2jidb hidden-444z6o',
    navClass: 'framer-v-1nr8znp',
    navName: 'Phone Closed',
    brandClass: 'framer-v-1cbn7cv',
    brandName: 'Phone',
    menu: true,
    navItemStyle: { "backgroundColor": "rgba(0, 0, 0, 0)", "borderBottomLeftRadius": "0px", "borderBottomRightRadius": "0px", "borderTopLeftRadius": "0px", "borderTopRightRadius": "0px" },
    linkClass: 'framer-v-bi9kq9',
    linkName: 'Phone',
    linkPreset: ['framer-styles-preset-myvcqd', 'vnfdw_xAY'],
  },
  tablet: {
    wrapper: 'ssr-variant hidden-1ony1ue hidden-1u2jidb',
    navClass: 'framer-v-dyskp6',
    navName: 'Tablet',
    brandClass: 'framer-v-1cbn7cv',
    brandName: 'Phone',
    menu: false,
    navItemStyle: { "backgroundColor": "var(--token-c06ac48a-21a8-4582-b3d6-9f37581073a1, rgb(247, 247, 247))", ...PILL_RADIUS },
    linkClass: 'framer-v-4fu3xj',
    linkName: 'Desktop',
    linkPreset: ['framer-styles-preset-1e0m3iw', 'wD8LD2XOT'],
  },
};

function Brand({ variant }) {
  return (
    <div className="framer-306p1r-container"><Link className={`framer-0gSxu framer-kZscH framer-gama31 ${variant.brandClass} framer-siuqd0`} data-framer-name={variant.brandName} data-highlight="true" href="/" tabIndex="0" style={{ "opacity": "1" }}><div className="framer-dbhgb7" style={PILL_RADIUS}><div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true"><img decoding="async" width="400" height="400" src={person.avatar} alt={person.name} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} /></div></div><div className="framer-3azvt" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-jwF9ZLI4w-gC2XncC4h)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-jwF9ZLI4w-gC2XncC4h": "var(--token-fcdd5164-bf55-48ca-a517-fc569e2d93cc, rgb(17, 17, 17))", "transform": "none" }}><p className="framer-text framer-styles-preset-myvcqd" data-styles-preset="vnfdw_xAY" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-jwF9ZLI4w-gC2XncC4h))" }}>{person.name}</p></div></Link></div>
  );
}

function MenuToggle() {
  return (
    <>
      <input type="checkbox" id="navbar-mobile-menu" className="navbar-mobile-checkbox" aria-hidden="true" tabIndex={-1} />
      <label htmlFor="navbar-mobile-menu" className="framer-s7i71q navbar-menu-button" data-framer-name="Menu" aria-label="Open menu" style={{ transform: 'none' }}><svg className="framer-ohg0r framer-4jie80 navbar-menu-icon-open" role="presentation" viewBox="0 0 24 24" aria-hidden="true" style={MENU_ICON_STYLE}><use href="#465907804" /></svg><svg className="framer-ohg0r framer-4jie80 navbar-menu-icon-close" role="presentation" viewBox="0 0 24 24" aria-hidden="true" style={MENU_ICON_STYLE}><use href="#navbar-menu-close" /></svg></label>
    </>
  );
}

function NavItem({ link, index, variant }) {
  const [presetClass, presetId] = variant.linkPreset;
  return (
    <div className={navItemContainer(index)}><NavAnchor className={`framer-AF1XY framer-r7dCw framer-kZscH framer-4fu3xj ${variant.linkClass} framer-sbbihx`} data-framer-name={variant.linkName} data-highlight="true" href={link.href} tabIndex="0" style={{ "height": "100%", ...PILL_RADIUS }}><div className="framer-1d4v92r" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-fcdd5164-bf55-48ca-a517-fc569e2d93cc, rgb(17, 17, 17))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}><p className={`framer-text ${presetClass}`} data-styles-preset={presetId} dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-fcdd5164-bf55-48ca-a517-fc569e2d93cc, rgb(17, 17, 17)))" }}>{link.label}</p></div></NavAnchor></div>
  );
}

function NavCta() {
  const { cta } = navigation;
  return (
    <div className="framer-c8zt8c-container"><NavAnchor className="framer-IYN0L framer-ZROfX framer-l5zbuo framer-v-l5zbuo framer-11131nd" data-framer-name="Primary" href={cta.href} style={{ "--border-bottom-width": "0px", "--border-color": "rgba(0, 0, 0, 0)", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "0px", "backgroundColor": "var(--token-b57a4573-ef01-446f-89ba-6fc5461bb54f, rgb(189, 238, 99))", "height": "100%", ...PILL_RADIUS }}><div className="framer-mb4s8" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-fcdd5164-bf55-48ca-a517-fc569e2d93cc, rgb(17, 17, 17))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}><p className="framer-text framer-styles-preset-1t46aaw" data-styles-preset="YNEdw0Tqm" dir="auto" style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-fcdd5164-bf55-48ca-a517-fc569e2d93cc, rgb(17, 17, 17)))" }}>{cta.label}</p></div></NavAnchor></div>
  );
}

function NavVariant({ variant }) {
  return (
    <div className={variant.wrapper}><nav className={`framer-FkhBr framer-1vxy7d1 ${variant.navClass}`} data-border="true" data-framer-name={variant.navName} style={NAV_BORDER_STYLE}><div className="framer-y2n41y" data-framer-name="Container"><div className="framer-1qnmbe7" data-framer-name="Brand Name & Menu"><Brand variant={variant} />{variant.menu ? <MenuToggle /> : null}</div><div className="framer-18a3s1j" data-framer-name="Nav Wrapper"><nav className="framer-kpjn1v" data-framer-name="Nav Item" style={variant.navItemStyle}>{navigation.links.map((link, index) => <NavItem key={link.href} link={link} index={index} variant={variant} />)}</nav><NavCta /></div></div></nav></div>
  );
}

export default function Navbar() {
  const navRef = useRef(null);
  const lastPathRef = useRef(null);
  const animatedHereRef = useRef(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const checkbox = navRef.current?.querySelector('.navbar-mobile-checkbox');
    if (checkbox) checkbox.checked = false;
  }, [pathname]);

  const handleInternalNavigation = (event) => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    const link = event.target.closest('a[href]');
    if (!link || link.target || link.hasAttribute('download')) return;

    const destination = new URL(link.href, window.location.href);
    if (destination.origin !== window.location.origin) return;

    event.preventDefault();
    const checkbox = navRef.current?.querySelector('.navbar-mobile-checkbox');
    if (checkbox) checkbox.checked = false;
    router.push(`${destination.pathname}${destination.search}${destination.hash}`);
  };

  useLayoutEffect(() => {
    const samePathReplay = lastPathRef.current === pathname;
    lastPathRef.current = pathname;

    const nav = navRef.current;
    if (pathname !== '/' || !nav || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const isInitialHomeLoad = window.__portfolioHomeIntroEligible ??= window.location.pathname === '/';
    if (!isInitialHomeLoad) return undefined;

    // Allow React Strict Mode to replay this effect on the same mount, but skip
    // the animation when the homepage is reached again through client navigation.
    if (window.__portfolioNavbarIntroPlayed && !(animatedHereRef.current && samePathReplay)) return undefined;
    window.__portfolioNavbarIntroPlayed = true;
    animatedHereRef.current = true;

    const visible = (selector) => [...nav.querySelectorAll(selector)]
      .filter((element) => element.getClientRects().length > 0);
    const brand = visible('nav[data-framer-name="Desktop"] .framer-306p1r-container > a')[0];
    const links = visible('nav[data-framer-name="Desktop"] .framer-kpjn1v a');
    const emailButton = visible('nav[data-framer-name="Desktop"] .framer-c8zt8c-container > a')[0];
    const brandBounds = brand?.getBoundingClientRect();
    const centerOffset = brandBounds
      ? window.innerWidth / 2 - (brandBounds.left + brandBounds.width / 2)
      : 0;

    const context = gsap.context(() => {
      const timeline = gsap.timeline({ delay: 2.4 });
      const contentStart = brand ? 0.48 : 0;

      if (brand) {
        timeline.fromTo(
          brand,
          { x: centerOffset, scale: 1.04 },
          { x: 0, scale: 1, duration: 1.8, ease: 'elastic.out(1, 0.82)' }
        );
      }

      if (links.length) {
        timeline.fromTo(
          links,
          { autoAlpha: 0, x: -52 },
          { autoAlpha: 1, x: 0, duration: 0.78, stagger: 0.12, ease: 'back.out(1.25)' },
          contentStart
        );
      }

      if (emailButton) {
        timeline.fromTo(
          emailButton,
          { autoAlpha: 0, x: 60 },
          { autoAlpha: 1, x: 0, duration: 0.82, ease: 'back.out(1.25)' },
          contentStart
        );
      }
    }, nav);

    return () => context.revert();
  }, [pathname]);

  return (
    <div ref={navRef} className="framer-1jk3wwm-container" onClickCapture={handleInternalNavigation}>
      <NavVariant variant={VARIANTS.desktop} />
      <NavVariant variant={VARIANTS.phone} />
      <NavVariant variant={VARIANTS.tablet} />
    </div>
  );
}
