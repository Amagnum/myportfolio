'use client';

import { useLayoutEffect } from 'react';

export default function AboutEnhancements() {
  useLayoutEffect(() => {
    window.__aboutCopyReady = false;

    const notifyCopyReady = () => {
      window.__aboutCopyReady = true;
      window.dispatchEvent(new Event('about-copy-ready'));
    };
    const progress = [...document.querySelectorAll('[data-framer-name="No"]')].find(
      (element) => element.getBoundingClientRect().width > 0,
    );
    const progressFrame = progress?.querySelector('[data-framer-name="01"]');
    const contentSections = [
      document.getElementById('1'),
      document.getElementById('2'),
      document.querySelector('[data-framer-name="3"]'),
    ].filter(Boolean);

    if (!progress || !progressFrame || contentSections.length !== 3) {
      notifyCopyReady();
      return () => {
        window.__aboutCopyReady = false;
      };
    }

    progress.classList.add('about-scroll-progress');
    progressFrame.classList.add('about-scroll-progress__frame');
    [...progressFrame.children].forEach((child) => {
      child.setAttribute('aria-hidden', 'true');
    });

    let current = progressFrame.querySelector('[data-about-current-step]');
    if (!current) {
      current = document.createElement('span');
      current.dataset.aboutCurrentStep = 'true';
      current.setAttribute('aria-live', 'polite');
      progressFrame.appendChild(current);
    }

    const updateProgress = () => {
      const focusLine = window.scrollY + window.innerHeight * 0.38;
      let activeIndex = 0;
      contentSections.forEach((section, index) => {
        if (section.getBoundingClientRect().top + window.scrollY <= focusLine) activeIndex = index;
      });
      current.textContent = `0${activeIndex + 1}`;
    };

    updateProgress();
    notifyCopyReady();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);

    return () => {
      window.__aboutCopyReady = false;
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  return null;
}
