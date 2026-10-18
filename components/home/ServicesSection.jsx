import Link from 'next/link';
import { pages } from '../../content/site';

const { heading, description, ctaLabel, ctaHref, moreLabel, items } = pages.home.services;

// Framer positions each service card by slot-specific class names. Services from
// the config are mapped onto these slots by index (the layout has 3 slots).
const SERVICE_SLOTS = [
  {
    card: 'framer-3oqp3m',
    content: 'framer-1ugj1jg',
    visual: 'framer-1whqtvz',
    imageFrame: 'framer-7frlyr',
    imageFrameBordered: true,
    body: 'framer-j21mic',
    bodyWrapper: 'framer-5wnx9q',
    textWrapper: 'framer-198p28d',
    title: 'framer-1obxjd4',
    description: 'framer-1uwqyj1',
    tags: 'framer-r6ycx1',
    tagContainers: ['framer-1gzcp1e-container', 'framer-tnyzct-container'],
    moreContainer: 'framer-2rwkt7-container',
    cta: 'framer-1rs0gtg-container',
  },
  {
    card: 'framer-11hio96',
    content: 'framer-1yql48y',
    visual: 'framer-kko1i1',
    imageFrame: 'framer-1n44dn6',
    imageFrameBordered: false,
    body: 'framer-1uw7kg3',
    bodyWrapper: 'framer-14y5dy5',
    textWrapper: 'framer-1f4ukqa',
    title: 'framer-7tda5a',
    description: 'framer-awshxl',
    tags: 'framer-jsj76d',
    tagContainers: ['framer-1umq6ba-container', 'framer-106cmx0-container'],
    moreContainer: 'framer-18v7fz6-container',
    cta: 'framer-1tacka1-container',
  },
  {
    card: 'framer-ub61ec',
    content: 'framer-ttdt3f',
    visual: 'framer-1xi70ab',
    imageFrame: 'framer-c5wu88',
    imageFrameBordered: false,
    body: 'framer-1veg3l3',
    bodyWrapper: 'framer-1u9g69a',
    textWrapper: 'framer-1wwsp6l',
    title: 'framer-1rzq0ec',
    description: 'framer-1l145l2',
    tags: 'framer-8yqbf2',
    tagContainers: ['framer-1rcb4vj-container', 'framer-16rz7b7-container'],
    moreContainer: 'framer-wp2jyd-container',
    cta: 'framer-12vmf6a-container',
  },
];

// The section is rendered once per breakpoint; variants differ only in these values.
const VARIANTS = [
  {
    key: 'desktop',
    wrapperClassName: 'ssr-variant hidden-1m3130y hidden-b6pbbz',
    variantClassName: 'framer-v-1fl0ekb',
    name: 'Desktop 0',
    cardRadius: '40px',
    highlight: true,
    ctaStyle: { opacity: '0', transform: 'scale(0.8)' },
  },
  {
    key: 'phone',
    wrapperClassName: 'ssr-variant hidden-b6pbbz hidden-72rtr7',
    variantClassName: 'framer-v-n915gg',
    name: 'Phone',
    cardRadius: '24px',
    highlight: false,
    ctaStyle: { opacity: '1', transform: 'none' },
  },
  {
    key: 'tablet',
    wrapperClassName: 'ssr-variant hidden-1m3130y hidden-72rtr7',
    variantClassName: 'framer-v-d3d5s5',
    name: 'Tablet',
    cardRadius: '40px',
    highlight: false,
    ctaStyle: { opacity: '1', transform: 'none' },
  },
];

const radius = (value) => ({
  borderBottomLeftRadius: value,
  borderBottomRightRadius: value,
  borderTopLeftRadius: value,
  borderTopRightRadius: value,
});

const richTextStyle = {
  '--framer-link-text-color': 'rgb(0, 153, 255)',
  '--framer-link-text-decoration': 'underline',
  transform: 'none',
};

const softBackground = 'var(--token-c06ac48a-21a8-4582-b3d6-9f37581073a1, rgb(247, 247, 247))';

function Tag({ containerClassName, label }) {
  return (
    <div className={containerClassName}>
      <div
        className="framer-2T7Tu framer-kZscH framer-r7dCw framer-bfiwa4 framer-v-bfiwa4"
        data-framer-name="Large"
        style={{
          '--1p5bjhd': '6px 12px 6px 12px',
          backgroundColor: 'var(--token-880999e0-fa5d-4c65-a75a-ae1653ed7391, rgb(255, 255, 255))',
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
            className="framer-text framer-styles-preset-myvcqd"
            data-styles-preset="vnfdw_xAY"
            dir="auto"
            style={{ '--framer-text-color': 'var(--extracted-r6o4lv, var(--variable-reference-tcohuOKFO-ICt5de5ug))' }}
          >
            {label}
          </p>
        </div>
      </div>
    </div>
  );
}

function CtaButton({ containerClassName, style }) {
  return (
    <div className={containerClassName} style={style}>
      <Link
        className="framer-IYN0L framer-ZROfX framer-l5zbuo framer-v-l5zbuo framer-11131nd"
        data-framer-name="Primary"
        href={ctaHref}
        style={{
          '--border-bottom-width': '0px',
          '--border-color': 'rgba(0, 0, 0, 0)',
          '--border-left-width': '0px',
          '--border-right-width': '0px',
          '--border-style': 'solid',
          '--border-top-width': '0px',
          backgroundColor: 'var(--token-b57a4573-ef01-446f-89ba-6fc5461bb54f, rgb(189, 238, 99))',
          height: '100%',
          ...radius('100px'),
        }}
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
            {ctaLabel}
          </p>
        </div>
      </Link>
    </div>
  );
}

function ServiceCard({ service, slot, variant }) {
  const imageFrameProps = slot.imageFrameBordered
    ? {
        'data-border': 'true',
        style: {
          '--border-bottom-width': '1px',
          '--border-color': 'var(--token-8ac823af-7d80-4133-952a-528a09c81339, rgb(237, 237, 237))',
          '--border-left-width': '1px',
          '--border-right-width': '1px',
          '--border-style': 'solid',
          '--border-top-width': '1px',
          borderTopLeftRadius: '20px',
          borderTopRightRadius: '20px',
        },
      }
    : { style: { borderTopLeftRadius: '20px', borderTopRightRadius: '20px' } };

  return (
    <div
      className={slot.card}
      data-framer-name="Featured Template"
      data-highlight={variant.highlight ? 'true' : undefined}
      style={{ opacity: '1' }}
    >
      <div className={slot.content} data-framer-name="Content" style={{ backgroundColor: softBackground, ...radius(variant.cardRadius) }}>
        <div
          className={slot.visual}
          data-framer-name="Visual"
          style={{
            backgroundColor: softBackground,
            mask: 'linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 30.000000000000004%) add',
            WebkitMask: 'linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 30.000000000000004%) add',
          }}
        >
          <div className={slot.imageFrame} {...imageFrameProps}>
            <div
              style={{ position: 'absolute', borderRadius: 'inherit', cornerShape: 'inherit', top: '0', right: '0', bottom: '0', left: '0' }}
              data-framer-background-image-wrapper="true"
            >
              <img
                decoding="async"
                width="3200"
                height="2400"
                src={service.image.src}
                alt={service.image.alt}
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
          </div>
        </div>
        <div className={slot.body} data-framer-name="Content">
          <div className={slot.bodyWrapper} data-framer-name="Content Wrapper">
            <div className={slot.textWrapper} data-framer-name="Text Wrapper">
              <div className={slot.title} data-framer-component-type="RichTextContainer" style={richTextStyle}>
                <p className="framer-text framer-styles-preset-gpf141" data-styles-preset="TOwZA3g8K" dir="auto">
                  {service.name}
                </p>
              </div>
              <div className={slot.description} data-framer-component-type="RichTextContainer" style={richTextStyle}>
                <p className="framer-text framer-styles-preset-myvcqd" data-styles-preset="vnfdw_xAY" dir="auto" style={{ '--framer-text-alignment': 'left' }}>
                  {service.description}
                </p>
              </div>
            </div>
            <div className={slot.tags} data-framer-name="Tags">
              {service.tags.map((tag, index) => (
                <Tag key={tag} containerClassName={slot.tagContainers[index] ?? slot.tagContainers[0]} label={tag} />
              ))}
              {moreLabel && <Tag containerClassName={slot.moreContainer} label={moreLabel} />}
            </div>
          </div>
        </div>
      </div>
      <CtaButton containerClassName={slot.cta} style={variant.ctaStyle} />
    </div>
  );
}

function ServicesVariant({ variant }) {
  return (
    <div className={variant.wrapperClassName}>
      <div className="framer-rlvfkh-container">
        <section
          className={`framer-mvmDB framer-HmoXg framer-kZscH framer-maPQ6 framer-1fl0ekb ${variant.variantClassName}`}
          data-framer-name={variant.name}
          style={{ width: '100%' }}
        >
          <div className="framer-1yv6wpn" data-framer-name="Container">
            <div className="framer-15wi7qe" data-framer-name="Headline">
              <div className="framer-riabxo" data-framer-component-type="RichTextContainer" style={richTextStyle}>
                <h2 className="framer-text framer-styles-preset-utpv99" data-styles-preset="RQbY5xsNc" dir="auto" style={{ '--framer-text-alignment': 'center' }}>
                  {heading}
                </h2>
              </div>
              <div className="framer-1x7jj79" data-framer-component-type="RichTextContainer" style={richTextStyle}>
                <p className="framer-text framer-styles-preset-myvcqd" data-styles-preset="vnfdw_xAY" dir="auto" style={{ '--framer-text-alignment': 'center' }}>
                  {description}
                </p>
              </div>
            </div>
            <div className="framer-1ev7gqr" data-framer-name="Card Wrapper">
              {items.slice(0, SERVICE_SLOTS.length).map((service, index) => (
                <ServiceCard key={service.name} service={service} slot={SERVICE_SLOTS[index]} variant={variant} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <div className="services-cta-wrapper">
      {VARIANTS.map((variant) => (
        <ServicesVariant key={variant.key} variant={variant} />
      ))}
    </div>
  );
}
