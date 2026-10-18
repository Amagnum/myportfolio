import Link from 'next/link';
import ScrollIntro from '../ScrollIntro';
import { pages } from '../../content/site';

const { tools, cta } = pages.home.aboutBrief;

export default function AboutBriefSection() {
  return (
    <section className="about-orbit-section" aria-labelledby="about-brief-title">
      <div className="about-orbit-section__inner">
        <div className="about-orbit" aria-label="Frontend tools and technologies">
          <div className="about-orbit__ring">
            {tools.map(({ name, icon }, index) => (
              <div
                className="about-orbit__node"
                key={name}
                style={{ '--orbit-angle': `${(360 / tools.length) * index}deg` }}
              >
                <div className="about-orbit__card">
                  <img src={icon} alt={name} />
                </div>
              </div>
            ))}
          </div>

          <div className="about-orbit__content">
            <ScrollIntro />
            <Link className="about-orbit__cta" href={cta.href}>{cta.label}</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
