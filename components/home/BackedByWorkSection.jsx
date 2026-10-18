'use client';

import Image from 'next/image';
import { pages } from '../../content/site';

const { heading, description, summit, github, testimonials } = pages.home.backedByWork;

const activityPattern = [
  0, 1, 0, 2, 1, 0, 0, 1, 2, 1, 0, 1, 3, 2, 1, 0, 1, 2,
  1, 2, 1, 0, 1, 2, 1, 0, 2, 1, 1, 3, 1, 2, 0, 1, 2, 1, 0,
  0, 1, 2, 1, 0, 2, 3, 1, 2, 1, 0, 1, 2, 1, 0, 2, 1, 3,
  1, 0, 1, 2, 1, 2, 0, 1, 3, 1, 0, 2, 1, 2, 1, 0, 1, 2,
  2, 1, 0, 1, 2, 0, 1, 2, 1, 3, 1, 0, 2, 1, 2, 0, 1, 2,
  1, 2, 1, 0, 1, 3, 2, 1, 0, 1, 2, 1, 0, 2, 1, 2, 1, 0,
  0, 1, 2, 1, 3, 1, 0, 2, 1, 0, 1, 2, 1, 2, 0, 1, 2, 1,
];

function SummitGalleryImage({ src, alt = '' }) {
  return (
    <div className="summit-gallery__image">
      <Image src={src} alt={alt} fill sizes="190px" loading="lazy" style={{ objectFit: 'cover' }} />
    </div>
  );
}

function SummitGallery() {
  return (
    <div className="summit-gallery" aria-label="India AI Impact Summit highlights">
      <div className="summit-gallery__track">
        <div className="summit-gallery__sequence">
          {summit.images.map((image, index) => (
            <SummitGalleryImage key={`${image.src}-${index}`} src={image.src} alt={image.alt} />
          ))}
        </div>
        <div className="summit-gallery__sequence" aria-hidden="true">
          {summit.images.map((image, index) => (
            <SummitGalleryImage key={`${image.src}-duplicate-${index}`} src={image.src} />
          ))}
        </div>
      </div>
    </div>
  );
}

function SummitCard() {
  return (
    <article className="backed-card summit-card">
      <div className="backed-card__topline">
        <img src={summit.logo.src} alt={summit.logo.alt} />
      </div>
      <div className="backed-card__copy">
        <h3>{summit.title}</h3>
        <p>{summit.description}</p>
      </div>
      <SummitGallery />
    </article>
  );
}

function GithubActivityCard() {
  return (
    <article className="backed-card github-card">
      <div className="backed-card__topline">
        <img className="github-card__logo" src={github.icon.src} alt={github.icon.alt} />
      </div>
      <div className="backed-card__copy">
        <h3>{github.title}</h3>
        <p>{github.description}</p>
      </div>
      <div className="github-activity" aria-label="GitHub activity summary">
        <div className="github-activity__header">
          <span>{github.activityLabel}</span>
          <span className="github-activity__status"><i />{github.statusLabel}</span>
        </div>
        <div className="github-activity__grid" aria-hidden="true">
          {activityPattern.map((level, index) => (
            <span key={index} className={`github-activity__cell level-${level}`} />
          ))}
        </div>
        <div className="github-activity__footer">
          <span className="github-activity__repos">{github.reposLabel}</span>
          <span className="github-activity__handle">{github.handleLabel}</span>
        </div>
      </div>
    </article>
  );
}

function TestimonialCard() {
  return (
    <article className="backed-card testimonial-card">
      <div className="backed-card__topline">
        <div className="testimonial-card__mark" aria-hidden="true">
          {testimonials.quoted ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#111" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 17l6-6 4 4 8-8" />
              <path d="M14 7h7v7" />
            </svg>
          )}
        </div>
      </div>
      <div className="backed-card__copy">
        <h3>{testimonials.title}</h3>
        <p>{testimonials.description}</p>
      </div>
      {!testimonials.quoted && testimonials.metrics?.length > 0 ? (
        <dl className="impact-metrics">
          {testimonials.metrics.map((metric) => (
            <div key={metric.label} className="impact-metric">
              <dt>{metric.label}</dt>
              <dd>{metric.value}</dd>
            </div>
          ))}
        </dl>
      ) : (
        <div className="testimonial-stack">
          {testimonials.quotes.map((quote, index) => {
            const Bubble = testimonials.quoted ? 'blockquote' : 'div';
            return (
              <Bubble
                key={index}
                className={`testimonial-bubble testimonial-bubble--${index % 2 === 0 ? 'dark' : 'light'}`}
                title={quote}
              >
                <p>{testimonials.quoted ? `“${quote}”` : quote}</p>
              </Bubble>
            );
          })}
        </div>
      )}
    </article>
  );
}

export default function BackedByWorkSection() {
  return (
    <section className="backed-by-work-section" aria-labelledby="backed-by-work-title">
      <div className="backed-by-work-section__inner">
        <div className="backed-by-work-section__headline">
          <h2 id="backed-by-work-title">{heading}</h2>
          <p>{description}</p>
        </div>
        <div className="backed-by-work-grid">
          <SummitCard />
          <GithubActivityCard />
          <TestimonialCard />
        </div>
      </div>
    </section>
  );
}
