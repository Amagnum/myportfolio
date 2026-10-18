import Link from 'next/link';
import OptimizedImage from '../OptimizedImage';

const imageWrapperStyle = { position: 'absolute', borderRadius: 'inherit', cornerShape: 'inherit', top: '0', right: '0', bottom: '0', left: '0' };
const mutedLabelStyle = { '--framer-text-color': 'var(--token-773240fd-3518-4816-8026-d74555f02613, rgb(108, 113, 121))' };
const strongValueStyle = { '--framer-text-color': 'var(--token-fcdd5164-bf55-48ca-a517-fc569e2d93cc, rgb(17, 17, 17))' };
const gallerySizes =
  '(min-width: 1200px) min(max(100vw - 80px, 1px), 1360px), (min-width: 810px) and (max-width: 1199.98px) min(max(100vw - 80px, 1px), 1360px), (max-width: 809.98px) min(100vw - 40px, 1360px)';

// Framer class pairs for each content block: [section, header, eyebrow, eyebrow text, wrapper, text, images, image 1, image 2]
const sectionClasses = [
  ['framer-9440lm', 'framer-sdib83', 'framer-se2bdx', 'framer-3a174g', 'framer-17k0tfo', 'framer-sgs3i7', 'framer-1xv509c', 'framer-1whug9i', 'framer-nkqkoi'],
  ['framer-4dqsvr', 'framer-1l31oqp', 'framer-14tc4kp', 'framer-1y79aid', 'framer-1sueum9', 'framer-row92p', 'framer-6bgkwe', 'framer-18eg4gw', 'framer-7we5xm'],
];

const metaClasses = [
  ['framer-zec07o', 'framer-ibnlkn', 'framer-108g35x'],
  ['framer-vij8lk', 'framer-g57wea', 'framer-avrb5g'],
  ['framer-x86dvo', 'framer-75lt8t', 'framer-1t7hvei'],
];

const cardVariants = [
  { name: 'Desktop', ssrClass: 'hidden-4vmumi hidden-1qy05d9', variantClass: 'framer-v-9vtu91', radius: '40px' },
  { name: 'Tablet', ssrClass: 'hidden-33yovy hidden-1qy05d9', variantClass: 'framer-v-kt95wo', radius: '40px' },
  { name: 'Phone', ssrClass: 'hidden-4vmumi hidden-33yovy', variantClass: 'framer-v-huh18u', radius: '24px' },
];

function CaseStudySection({ section, classes }) {
  const [sectionClass, headerClass, eyebrowClass, eyebrowTextClass, wrapperClass, textClass, imagesClass, ...imageClasses] =
    classes;
  const images = (section.images || []).slice(0, 2);

  return (
    <div className={sectionClass} data-framer-name={section.eyebrow}>
      <div className={headerClass} data-framer-name="Header">
        {section.eyebrow && (
          <div className={eyebrowClass} data-framer-name="Eyebrow">
            <div className={eyebrowTextClass} data-framer-component-type="RichTextContainer" style={{ transform: 'none' }}>
              <p className="framer-text framer-styles-preset-myvcqd" data-styles-preset="vnfdw_xAY" dir="auto">
                {section.eyebrow}
              </p>
            </div>
          </div>
        )}
        <div className={wrapperClass} data-framer-name="Text Wrapper">
          <div className={textClass} data-framer-component-type="RichTextContainer" style={{ transform: 'none' }}>
            <h2 dir="auto" className="framer-text framer-styles-preset-utpv99">
              {section.heading}
            </h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} dir="auto" className="framer-text framer-styles-preset-myvcqd">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
      {images.length > 0 && (
        <div className={imagesClass} data-framer-name="Images">
          {images.map((image, imageIndex) => (
            <div className="ssr-variant" key={image.src}>
              <div className={imageClasses[imageIndex]}>
                <div style={imageWrapperStyle} data-framer-background-image-wrapper="true">
                  <OptimizedImage src={image.src} alt={image.alt} sizes={gallerySizes} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function ProjectCard({ project, variant }) {
  const radius = variant.radius;
  return (
    <div className={`ssr-variant ${variant.ssrClass}`}>
      <div className="framer-1a8tpgc-container">
        <Link
          className={`framer-A9KC2 framer-maPQ6 framer-9vtu91 ${variant.variantClass} framer-p865wr`}
          data-framer-name={variant.name}
          href={`/work/${project.slug}`}
          style={{ width: '100%' }}
        >
          <div
            className="framer-2ctex3"
            data-framer-name="Image Container"
            style={{ borderBottomLeftRadius: radius, borderBottomRightRadius: radius, borderTopLeftRadius: radius, borderTopRightRadius: radius }}
          >
            <div className="framer-qapzcu" style={{ filter: 'blur(0px)', WebkitFilter: 'blur(0px)' }}>
              <div style={imageWrapperStyle} data-framer-background-image-wrapper="true">
                <OptimizedImage src={project.image.src} alt={project.image.alt} sizes="(max-width: 809px) 100vw, 50vw" />
              </div>
            </div>
          </div>
          <div className="framer-g3znh5" data-framer-name="Text Wrapper">
            <div
              className="framer-bnbp1d"
              data-framer-component-type="RichTextContainer"
              style={{ '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none' }}
            >
              <p className="framer-text framer-styles-preset-gpf141" data-styles-preset="TOwZA3g8K" dir="auto">
                {project.name}
              </p>
            </div>
            <div className="framer-18tel2b-container">
              <div
                className="framer-2T7Tu framer-kZscH framer-r7dCw framer-bfiwa4 framer-v-bfiwa4"
                data-framer-name="Large"
                style={{
                  '--1p5bjhd': '6px 12px 6px 12px',
                  backgroundColor: 'var(--token-c06ac48a-21a8-4582-b3d6-9f37581073a1, rgb(247, 247, 247))',
                  borderBottomLeftRadius: '100px',
                  borderBottomRightRadius: '100px',
                  borderTopLeftRadius: '100px',
                  borderTopRightRadius: '100px',
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
                    {project.category}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default function CaseStudyContent({ project, otherProjects, moreHeading = 'Read more.' }) {
  return (
    <div
      data-framer-root=""
      className="framer-PzliJ framer-xIMGr framer-kZscH framer-r7dCw framer-ZROfX framer-HmoXg framer-9DwZu framer-33yovy"
      style={{ minHeight: '100vh', width: 'auto', display: 'contents' }}
    >
      <main className="framer-dqky2c" data-framer-name="Main">
        <article className="framer-kbkch8" data-framer-name="Container">
          <header className="framer-nr9c7w" data-framer-name="Header">
            <div className="framer-qedsml" data-framer-name="Text Wrapper">
              <div className="framer-py504u" data-framer-name="Headline & Desc">
                <div className="framer-9g0dg7" data-framer-component-type="RichTextContainer" style={{ transform: 'none' }}>
                  <h1 className="framer-text framer-styles-preset-1iszveu" data-styles-preset="BxrGaJblF" dir="auto">
                    {project.name}
                  </h1>
                </div>
                <div className="framer-uvnvcm" data-framer-component-type="RichTextContainer" style={{ transform: 'none' }}>
                  <p className="framer-text framer-styles-preset-myvcqd" data-styles-preset="vnfdw_xAY" dir="auto">
                    {project.summary}
                  </p>
                </div>
                {project.url && (
                  <a className="case-study-link" href={project.url} target="_blank" rel="noopener noreferrer">
                    {project.urlLabel || 'Visit project'} <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
              <dl className="framer-18k0tqp" data-framer-name="Meta" style={{ margin: 0 }}>
                {project.meta.slice(0, 3).map((item, index) => (
                  <div className={metaClasses[index][0]} data-framer-name={item.label} key={item.label}>
                    <dt className={metaClasses[index][1]} data-framer-component-type="RichTextContainer" style={{ transform: 'none' }}>
                      <p className="framer-text framer-styles-preset-1e0m3iw" data-styles-preset="wD8LD2XOT" dir="auto" style={mutedLabelStyle}>
                        {item.label}
                      </p>
                    </dt>
                    <dd className={metaClasses[index][2]} data-framer-component-type="RichTextContainer" style={{ transform: 'none', margin: 0 }}>
                      <p className="framer-text framer-styles-preset-1t46aaw" data-styles-preset="YNEdw0Tqm" dir="auto" style={strongValueStyle}>
                        {item.value}
                      </p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="ssr-variant">
              <div className="framer-ictoeq" data-framer-name="Thumbnail">
                <div style={imageWrapperStyle} data-framer-background-image-wrapper="true">
                  <OptimizedImage src={project.image.src} alt={project.image.alt} sizes="(max-width: 809px) 100vw, 50vw" priority />
                </div>
              </div>
            </div>
          </header>
          <div className="framer-r7aw7d" data-framer-name="Content">
            {project.sections.map((section, index) => (
              <CaseStudySection key={section.heading} section={section} classes={sectionClasses[index % sectionClasses.length]} />
            ))}
          </div>
        </article>
      </main>
      {otherProjects.length > 0 && (
        <section className="framer-1t0vjvf" data-framer-name="More">
          <div className="framer-l0opfb" data-framer-name="Container">
            <div className="framer-1i6dtuv" data-framer-component-type="RichTextContainer" style={{ transform: 'none' }}>
              <h2 className="framer-text framer-styles-preset-utpv99" data-styles-preset="RQbY5xsNc" dir="auto">
                {moreHeading}
              </h2>
            </div>
            <div className="framer-14fjyk4">
              {otherProjects.map((other) =>
                cardVariants.map((variant) => <ProjectCard key={`${other.slug}-${variant.name}`} project={other} variant={variant} />),
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
