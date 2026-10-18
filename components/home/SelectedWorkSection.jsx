'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import OptimizedImage from '../OptimizedImage';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { pages } from '../../content/site';
import { projects } from '../../content/projects';

const { heading, description, cta, projectCtaLabel, backgroundImage } = pages.home.featured;

const cardId = (project) => `${project.slug}-works`;

const FRAMER_IMAGE_HOST = 'https://framerusercontent.com/';

// Framer CDN images support ?scale-down-to; local images are served as-is.
function framerSrcSet(src) {
  if (!src.startsWith(FRAMER_IMAGE_HOST)) return undefined;
  const [base, query = ''] = src.split('?');
  const params = query ? `&${query}` : '';
  return [512, 1024]
    .map((size) => `${base}?scale-down-to=${size}${params} ${size}w`)
    .concat(`${src} 1456w`)
    .join(', ');
}

const radius = (value) => ({
  borderBottomLeftRadius: value,
  borderBottomRightRadius: value,
  borderTopLeftRadius: value,
  borderTopRightRadius: value,
});

const ctaLinkStyle = {
  '--border-bottom-width': '0px',
  '--border-color': 'rgba(0, 0, 0, 0)',
  '--border-left-width': '0px',
  '--border-right-width': '0px',
  '--border-style': 'solid',
  '--border-top-width': '0px',
  backgroundColor: 'var(--token-b57a4573-ef01-446f-89ba-6fc5461bb54f, rgb(189, 238, 99))',
  height: '100%',
  ...radius('100px'),
};

function PrimaryButton({ href, label }) {
  return (
    <Link
      className="framer-IYN0L framer-ZROfX framer-l5zbuo framer-v-l5zbuo framer-11131nd"
      data-framer-name="Primary"
      href={href}
      style={ctaLinkStyle}
    >
      <div
        className="framer-mb4s8"
        data-framer-component-type="RichTextContainer"
        style={{
          '--extracted-r6o4lv': 'var(--token-fcdd5164-bf55-48ca-a517-fc569e2d93cc, rgb(17, 17, 17))',
          '--framer-link-text-color': 'rgb(0, 153, 255)',
          '--framer-link-text-decoration': 'underline',
          transform: 'none',
        }}
      >
        <p
          className="framer-text framer-styles-preset-1t46aaw"
          data-styles-preset="YNEdw0Tqm"
          dir="auto"
          style={{
            '--framer-text-alignment': 'center',
            '--framer-text-color': 'var(--extracted-r6o4lv, var(--token-fcdd5164-bf55-48ca-a517-fc569e2d93cc, rgb(17, 17, 17)))',
          }}
        >
          {label}
        </p>
      </div>
    </Link>
  );
}

const headerTextStyle = {
  '--framer-text-alignment': 'center',
  '--framer-text-color': 'var(--token-880999e0-fa5d-4c65-a75a-ae1653ed7391, rgb(255, 255, 255))',
};

// Desktop/Tablet header is centred with translate(-50%, -50%) and wraps the CTA in an
// extra ssr-variant div; the Phone header only translates on Y.
const HEADER_VARIANTS = {
  desktop: { wrapperClassName: 'ssr-variant hidden-1m3130y', transform: 'translate(-50%, -50%)', wrapCta: true },
  phone: { wrapperClassName: 'ssr-variant hidden-b6pbbz hidden-72rtr7', transform: 'translateY(-50%)', wrapCta: false },
};

function FeaturedHeader({ variant }) {
  const { wrapperClassName, transform, wrapCta } = HEADER_VARIANTS[variant];
  const button = (
    <div className="framer-17ewgxy-container">
      <PrimaryButton href={cta.href} label={cta.label} />
    </div>
  );

  return (
    <div className={wrapperClassName}>
      <div className="framer-m011k3" data-framer-name="Content" style={{ willChange: 'transform', opacity: '1', transform }}>
        <div className="framer-14f1qr0" data-framer-name="Text Wrapper">
          <div className="framer-1wa31ee" data-framer-component-type="RichTextContainer" style={{ transform: 'none' }}>
            <h2 className="framer-text framer-styles-preset-1qm3avk" data-styles-preset="oxOD4BVXa" dir="auto" style={headerTextStyle}>
              {heading}
            </h2>
          </div>
          <div className="framer-fs7eln" data-framer-component-type="RichTextContainer" style={{ transform: 'none' }}>
            <p className="framer-text framer-styles-preset-myvcqd" data-styles-preset="vnfdw_xAY" dir="auto" style={headerTextStyle}>
              {description}
            </p>
          </div>
        </div>
        {wrapCta ? <div className="ssr-variant">{button}</div> : button}
      </div>
    </div>
  );
}

// Each project card is rendered once per breakpoint; variants differ only in these values.
const CARD_VARIANTS = [
  {
    name: 'Desktop',
    wrapperClassName: 'ssr-variant hidden-1m3130y hidden-b6pbbz',
    variantClassName: 'framer-v-5wbq63',
    cardRadius: '40px',
    imageRadius: '28px',
  },
  {
    name: 'Phone',
    wrapperClassName: 'ssr-variant hidden-b6pbbz hidden-72rtr7',
    variantClassName: 'framer-v-1agh7xt',
    cardRadius: '24px',
    imageRadius: '12px',
  },
  {
    name: 'Tablet',
    wrapperClassName: 'ssr-variant hidden-1m3130y hidden-72rtr7',
    variantClassName: 'framer-v-1clcsgm',
    cardRadius: '40px',
    imageRadius: '28px',
  },
];

const richTextStyle = {
  '--framer-link-text-color': 'rgb(0, 153, 255)',
  '--framer-link-text-decoration': 'underline',
  transform: 'none',
};

function ProjectCard({ project, variant }) {
  return (
    <div className={variant.wrapperClassName}>
      <div className="framer-jdz17d-container" id={cardId(project)}>
        <div
          className={`framer-O5jti framer-ybGf8 framer-kZscH framer-5wbq63 ${variant.variantClassName}`}
          data-border="true"
          data-framer-name={variant.name}
          style={{
            '--border-bottom-width': '1px',
            '--border-color': 'var(--token-8ac823af-7d80-4133-952a-528a09c81339, rgb(237, 237, 237))',
            '--border-left-width': '1px',
            '--border-right-width': '1px',
            '--border-style': 'solid',
            '--border-top-width': '1px',
            backgroundColor: 'var(--token-880999e0-fa5d-4c65-a75a-ae1653ed7391, rgb(255, 255, 255))',
            width: '100%',
            ...radius(variant.cardRadius),
          }}
        >
          <div className="framer-ez6tx1" data-framer-name="Content">
            <div className="framer-1run6bl" data-framer-name="Text Wrapper">
              <div className="framer-1vdb549" data-framer-name="Header">
                <div className="framer-5n4re2-container">
                  <div
                    className="framer-2T7Tu framer-kZscH framer-r7dCw framer-bfiwa4 framer-v-9qgcu2"
                    data-framer-name="Small"
                    style={{
                      '--1p5bjhd': '6px 12px 6px 12px',
                      backgroundColor: 'var(--token-c06ac48a-21a8-4582-b3d6-9f37581073a1, rgb(247, 247, 247))',
                      ...radius('100px'),
                    }}
                  >
                    <div
                      className="framer-1aav1cc"
                      data-framer-component-type="RichTextContainer"
                      style={{
                        '--extracted-r6o4lv': 'var(--variable-reference-tcohuOKFO-ICt5de5ug)',
                        '--framer-link-text-color': 'rgb(0, 153, 255)',
                        '--framer-link-text-decoration': 'underline',
                        '--variable-reference-tcohuOKFO-ICt5de5ug': 'var(--token-e4c01179-4e7b-45a8-915a-d5bcd5f31dc2, rgb(51, 51, 51))',
                        transform: 'none',
                      }}
                    >
                      <p
                        className="framer-text framer-styles-preset-1e0m3iw"
                        data-styles-preset="wD8LD2XOT"
                        dir="auto"
                        style={{ '--framer-text-color': 'var(--extracted-r6o4lv, var(--variable-reference-tcohuOKFO-ICt5de5ug))' }}
                      >
                        {project.category}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="framer-1djehkn" data-framer-name="Text">
                  <div className="framer-19wgdpu" data-framer-component-type="RichTextContainer" style={richTextStyle}>
                    <p className="framer-text framer-styles-preset-19detod" data-styles-preset="x6Mmcqb50" dir="auto">
                      {project.name}
                    </p>
                  </div>
                  <div className="framer-11eb35q" data-framer-component-type="RichTextContainer" style={richTextStyle}>
                    <p className="framer-text framer-styles-preset-myvcqd" data-styles-preset="vnfdw_xAY" dir="auto">
                      {project.summary}
                    </p>
                  </div>
                </div>
                {project.highlights?.length > 0 && (
                  <ul className="work-card__highlights">
                    {project.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
                {project.stack?.length > 0 && (
                  <ul className="work-card__stack" aria-label="Tech stack">
                    {project.stack.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="work-card__actions">
                <div className="framer-dm44af-container">
                  <PrimaryButton href={`/work/${project.slug}`} label={projectCtaLabel} />
                </div>
                {project.url && (
                  <a className="work-card__live" href={project.url} target="_blank" rel="noopener noreferrer">
                    {project.urlLabel || 'Visit'} <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="framer-h3n27g" data-framer-name="Image Container" style={radius(variant.imageRadius)}>
            <div className="framer-v3p9e">
              <div
                style={{ position: 'absolute', borderRadius: 'inherit', cornerShape: 'inherit', top: '0', right: '0', bottom: '0', left: '0' }}
                data-framer-background-image-wrapper="true"
              >
                <OptimizedImage src={project.image.src} alt={project.image.alt} sizes="(max-width: 809px) 100vw, 50vw" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SelectedWorkSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Featured Projects Header Elements (Desktop and Mobile variants)
      const headings = section.querySelectorAll('.framer-1wa31ee h2');
      const descriptions = section.querySelectorAll('.framer-fs7eln p');
      const ctaButtons = section.querySelectorAll('.framer-17ewgxy-container');
      const headerContents = section.querySelectorAll('.framer-m011k3');

      // Set initial state
      gsap.set(headings, { autoAlpha: 0, y: 45 });
      gsap.set(descriptions, { autoAlpha: 0, y: 30 });
      gsap.set(ctaButtons, { autoAlpha: 0, y: 25, scale: 0.94 });

      // Animate header into view when the section comes into view
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 35%',
          toggleActions: 'play none none reverse',
        },
      });

      headerTl
        .to(headings, {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
        })
        .to(
          descriptions,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            ease: 'power3.out',
          },
          '-=0.55',
        )
        .to(
          ctaButtons,
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: 'back.out(1.2)',
          },
          '-=0.45',
        );

      // 2. Parallax fade for the sticky hero background text as user scrolls into the cards
      const cardsWrapper = section.querySelector('.framer-d39ao4');
      if (cardsWrapper) {
        gsap.to(headerContents, {
          autoAlpha: 0,
          y: -40,
          ease: 'none',
          scrollTrigger: {
            trigger: cardsWrapper,
            start: 'top 85%',
            end: 'top 55%',
            scrub: 0.6,
          },
        });
      }

      // 3. Project Cards Entrance Animation (animated per card container on scroll)
      const cardIds = projects.map((project) => cardId(project));

      cardIds.forEach((id) => {
        const matchingCards = section.querySelectorAll(`#${id}`);
        matchingCards.forEach((cardEl) => {
          gsap.fromTo(
            cardEl,
            {
              autoAlpha: 0,
              y: 70,
              scale: 0.97,
            },
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: 0.85,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: cardEl,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
            },
          );
        });
      });
    }, sectionRef);

    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    return () => {
      clearTimeout(refreshTimer);
      ctx.revert();
    };
  }, []);

  return (
    <main ref={sectionRef} className="framer-1b1hb6y" data-framer-name="Works">
      <div className="framer-1vdg3ch" data-framer-name="Sticky">
        <div className="framer-gyzmkk" data-framer-name="Image">
          <div
            style={{ position: 'absolute', borderRadius: 'inherit', cornerShape: 'inherit', top: '0', right: '0', bottom: '0', left: '0' }}
            data-framer-background-image-wrapper="true"
          >
            <img
              decoding="async"
              loading="lazy"
              width="1456"
              height="816"
              sizes="(min-width: 1200px) 100vw, (min-width: 810px) and (max-width: 1199.98px) 100vw, (max-width: 809.98px) 100vw"
              srcSet={framerSrcSet(backgroundImage.src)}
              src={backgroundImage.src}
              alt={backgroundImage.alt}
              style={{
                display: 'block',
                width: '100%',
                height: '100%',
                borderRadius: 'inherit',
                cornerShape: 'inherit',
                objectPosition: 'center',
                objectFit: 'cover',
              }}
            />
          </div>
          <div className="framer-ka9vek" data-framer-name="Overlay"></div>
        </div>
        <FeaturedHeader variant="desktop" />
        <FeaturedHeader variant="phone" />
      </div>
      <div className="framer-d39ao4" data-framer-name="Content">
        <div className="framer-1yjb3vd">
          {projects.map((project) =>
            CARD_VARIANTS.map((variant) => <ProjectCard key={`${project.slug}-${variant.name}`} project={project} variant={variant} />)
          )}
        </div>
      </div>
    </main>
  );
}
