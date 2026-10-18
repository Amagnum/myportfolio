// Central content + SEO configuration for the whole site.
// Edit text, links and images here — components read from this file.
// Images live in /public (reference them as '/images/...').

export const siteConfig = {
  url: 'https://amagnum.studio',
  name: 'Adarsh Baghel',
  shortName: 'Adarsh Baghel',
  locale: 'en_US',
  // Used for <title> on pages that set their own title: "Blog — Adarsh Baghel"
  titleTemplate: '%s — Adarsh Baghel',
  defaultTitle: 'Adarsh Baghel — AI & Full-Stack Engineer',
  description:
    'Adarsh Baghel is an AI & full-stack engineer (IIT Indore, ISB) with 4.5+ years building agentic AI products, Web3 SDKs, and React / React Native apps from 0 to 1.',
  keywords: [
    'Adarsh Baghel',
    'AI Engineer',
    'Full Stack Engineer',
    'Agentic AI',
    'Agentic RAG',
    'LLM Engineer',
    'React Native Developer',
    'Next.js Developer',
    'FastAPI',
    'Web3 SDK',
    'Frontend Lead',
    'IIT Indore',
    'Software Engineer India',
  ],
  // Fallback social share image (1200x630 recommended). Pages without their
  // own image use the auto-generated card from app/opengraph-image.jsx.
  ogImage: null,
  favicon: '/favicon.png',
  themeColor: '#ffffff',
  twitterHandle: '',
};

export const person = {
  name: 'Adarsh Baghel',
  firstName: 'Adarsh',
  jobTitle: 'AI & Full-Stack Engineer',
  company: 'RSENL AI Labs',
  companyUrl: 'https://rsenl.com',
  location: 'India (Remote-friendly)',
  email: 'bagheladarsh5@gmail.com',
  // Square avatar: navbar, footer, blog byline, share cards, structured data.
  avatar: '/images/adarsh-illustrated.webp',
  portrait: '/images/adarsh-bw.webp',
  alumniOf: ['Indian Institute of Technology Indore', 'Indian School of Business'],
  knowsAbout: [
    'Agentic AI',
    'Retrieval-augmented generation',
    'LLM tool-calling',
    'Full-stack development',
    'React',
    'React Native',
    'Next.js',
    'FastAPI',
    'Node.js',
    'SDK design',
    'Web3',
  ],
};

export const social = {
  github: 'https://github.com/amagnum',
  githubHandle: 'amagnum',
  linkedin: 'https://www.linkedin.com/in/adarsh-baghel/',
  email: `mailto:${person.email}`,
};

export const navigation = {
  links: [
    { label: 'Work', href: '/work' },
    { label: 'About', href: '/about' },
    { label: 'Photography', href: '/photography' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
  cta: { label: 'Email me', href: social.email },
};

export const footer = {
  heading: 'Building an AI product or need a full-stack lead?',
  cta: { label: 'Email me', href: social.email },
  columns: [
    {
      title: 'Pages',
      links: [
        { label: 'Home', href: '/' },
        { label: 'Work', href: '/work' },
        { label: 'About', href: '/about' },
        { label: 'Photography', href: '/photography' },
        { label: 'Blog', href: '/blog' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Connect',
      links: [
        { label: 'LinkedIn', href: social.linkedin },
        { label: 'GitHub', href: social.github },
        { label: 'Mail', href: social.email },
      ],
    },
    {
      title: 'Focus Areas',
      links: [
        { label: 'Agentic AI & RAG', href: '/work' },
        { label: 'Full-Stack & Mobile', href: '/work' },
        { label: 'SDKs & Integrations', href: '/work' },
      ],
    },
  ],
  // {year} is replaced with the current year.
  copyright: '©Adarsh Baghel {year}. All rights reserved.',
};

// Per-page copy and SEO. `seo.title` is combined with siteConfig.titleTemplate.
// Facts and metrics here come from the master career doc — keep client names
// confidential and only publish verified numbers.
export const pages = {
  home: {
    seo: {
      title: null, // null → siteConfig.defaultTitle
      description: siteConfig.description,
    },
    hero: {
      eyebrow: "I'M ADARSH",
      title: 'Building AI products and full-stack systems that ship.',
      description:
        'AI & full-stack engineer from IIT Indore with 4.5+ years taking products from 0 to 1 — from Web3 wallets and SDKs to agentic AI workflows at RSENL.',
      primaryCta: { label: 'View GitHub', href: social.github },
      secondaryCta: { label: 'Email me', href: social.email },
      video: '/images/hero-boomerang.mp4',
      image: { src: '/images/PORTRAIT.png', alt: 'Adarsh Baghel, AI & Full-Stack Engineer' },
      // Highlight card next to the hero. Set `quoted: true` for a real, attributed testimonial.
      testimonial: {
        quoted: false,
        quote:
          'Represented Madhya Pradesh at the India AI Impact Summit 2026 with RSENL — work appreciated by the Hon’ble Chief Minister of MP, Dr. Mohan Yadav.',
        name: 'India AI Impact Summit 2026',
        role: 'Recognition with RSENL AI Labs',
        avatar: '/images/ai-summit-2026-presentation.webp',
      },
    },
    aboutBrief: {
      intro: 'I turn ambiguous ideas into shipped products: mobile apps, developer SDKs, and agentic AI systems.',
      // Each entry is one highlighted line; keep them short (~35 characters).
      highlightedLines: [
        'From Leap Wallet and Aarc to RSENL,',
        'I own the work end to end —',
        'architecture, delivery, and results.',
      ],
      cta: { label: 'About Me', href: '/about' },
      tools: [
        { name: 'React', icon: '/images/tools/react.svg' },
        { name: 'TypeScript', icon: '/images/tools/typescript.svg' },
        { name: 'Next.js', icon: '/images/tools/nextjs.svg' },
        { name: 'JavaScript', icon: '/images/tools/javascript.svg' },
        { name: 'GitHub', icon: '/images/tools/git-github.svg' },
        { name: 'Tailwind CSS', icon: '/images/tools/tailwindcss.svg' },
        { name: 'GSAP', icon: '/images/tools/gsap.svg' },
        { name: 'Framer Motion', icon: '/images/tools/framer-motion.svg' },
        { name: 'HTML5', icon: '/images/tools/html5.svg' },
        { name: 'CSS3', icon: '/images/tools/css3.svg' },
        { name: 'Redux', icon: '/images/tools/redux.svg' },
        { name: 'Zustand', icon: '/images/tools/zustand.svg' },
        { name: 'VS Code', icon: '/images/tools/vscode.svg' },
        { name: 'Cursor', icon: '/images/tools/cursor.svg' },
        { name: 'Windsurf', icon: '/images/tools/windsurf.svg' },
        { name: 'Antigravity', icon: '/images/tools/antigravity.svg' },
      ],
    },
    backedByWork: {
      heading: 'Backed by real work.',
      description: 'Recognition, open source, and measurable results from shipping products.',
      summit: {
        logo: { src: '/images/rsenl transparent logo.svg', alt: 'RSENL AI Labs' },
        title: 'Represented Madhya Pradesh at the India AI Impact Summit 2026.',
        description: 'Showcased RSENL’s AI films and tools at the Madhya Pradesh pavilion in New Delhi — work appreciated by the Hon’ble Chief Minister, Dr. Mohan Yadav.',
        images: [
          { src: '/images/ai-summit-2026-presentation.webp', alt: 'Presenting RSENL AI Films to visiting dignitaries at the Madhya Pradesh pavilion, India AI Impact Summit 2026' },
          { src: '/images/ai-summit-2026-team.webp', alt: 'RSENL AI Labs team at the #aiMPoweredBharat Madhya Pradesh pavilion, India AI Impact Summit 2026 in New Delhi' },
          { src: '/images/ai-summit-2026-demo.webp', alt: 'Walking visitors through an RSENL AI Films demo at the India AI Impact Summit 2026' },
        ],
      },
      github: {
        icon: { src: '/images/tools/git-github.svg', alt: 'GitHub' },
        title: 'Building in public',
        description: 'Public repositories spanning AI experiments, Web3 tooling, graphics algorithms, and product prototypes.',
        activityLabel: 'Activity',
        statusLabel: 'Active',
        reposLabel: '58 PUBLIC REPOS',
        handleLabel: 'GITHUB / AMAGNUM',
      },
      // Set `quoted: true` (and use real, attributed quotes) to show these as testimonials.
      testimonials: {
        quoted: false,
        title: 'Impact, measured',
        description: 'Results from shipping products at Aarc, Leap Wallet, and RSENL.',
        // Shown as a metric grid when `quoted` is false; `quotes` is used when it's true.
        metrics: [
          { value: '7d → 1d', label: 'Partner integration time with Aarc’s embed SDK' },
          { value: '~40%', label: 'Faster time-to-interactive in the Leap Wallet app' },
          { value: 'Days → hrs', label: 'Pharma report verification with agentic RAG' },
          { value: '60+ min', label: 'AI-native films produced with Storyboarder' },
        ],
        quotes: [],
      },
    },
    featured: {
      heading: 'Featured Projects',
      description: 'Products I’ve built or led — AI video tooling, motion graphics, browser automation, and agentic content systems.',
      cta: { label: 'See All Work', href: '/work' },
      projectCtaLabel: 'View Project',
      backgroundImage: {
        src: 'https://framerusercontent.com/images/9nGhbmobLmRO3M9aGXL4XNvYIA.webp?width=1456&height=816',
        alt: '',
      },
    },
    services: {
      heading: 'What I build.',
      description:
        'Agentic AI systems, full-stack web and mobile apps, and developer SDKs — with React, React Native, Next.js, FastAPI, and Node.js.',
      ctaLabel: 'Get Started',
      ctaHref: '/contact',
      moreLabel: '+more',
      items: [
        {
          name: 'Agentic AI Systems',
          description:
            'RAG pipelines, LLM tool-calling, and multi-agent workflows with evaluation suites and audit-ready traceability.',
          image: { src: '/images/aifilmsweb.png', alt: 'RSENL AI Films website, an AI-native film production studio' },
          tags: ['Agentic RAG', 'LLM Evals'],
        },
        {
          name: 'Full-Stack & Mobile Apps',
          description: 'Production web and mobile apps with React, React Native, Next.js, FastAPI, and Node.js — from first commit to app stores.',
          image: { src: '/images/campusiraweb.png', alt: 'Campusira web app showing student placement stories' },
          tags: ['React & React Native', 'FastAPI & Node.js'],
        },
        {
          name: 'SDKs & Extensions',
          description: 'Framework-agnostic embed SDKs, partner integrations, and Chrome extensions that are easy to adopt and fast to ship.',
          image: { src: '/images/bananaweb.png', alt: 'Banana Shake Chrome extension landing page' },
          tags: ['Embed SDKs', 'Chrome Extensions'],
        },
      ],
    },
  },

  about: {
    seo: {
      title: 'About',
      description:
        'About Adarsh Baghel — AI & full-stack engineer, IIT Indore alumnus, and ISB I-Venture participant. Experience at RSENL, Aarc (backed by Binance), and Leap Wallet.',
    },
    hero: {
      title: 'Hi, I’m Adarsh Baghel.',
      description: 'AI & full-stack engineer building agentic AI products, developer SDKs, and mobile apps — 4.5+ years shipping 0 → 1.',
      // `position` sets the crop focus (CSS object-position).
      image: { src: '/images/adarsh-bw.webp', alt: 'Black-and-white photo of Adarsh Baghel holding a Sony camera', position: 'center 30%' },
      cta: { label: 'View GitHub', href: social.github },
    },
    sections: [
      {
        heading: 'Built on IIT Indore and early 0 → 1 projects.',
        body: 'I studied Computer Science at IIT Indore (CPI 8.38), led the Google Developer Student Club, and won medals at the Inter-IIT Tech Meet. As tech lead for VegiGo, a campus produce startup, I shipped Android apps that reached 1k+ downloads. Later, the ISB I-Venture Immersive added structured entrepreneurship to that hands-on founder experience.',
      },
      {
        heading: 'Shipping wallets and SDKs at scale.',
        body: 'At Leap Wallet I shipped Cosmos wallet features across React Native and a browser extension, made the app ~40% faster to interactive, and cut mobile release time ~50% with CI/CD. At Aarc (backed by Binance) I led a 3-person frontend team, architected a framework-agnostic embed SDK with React, Vue, and Angular adapters, and cut partner integration time from ~7 days to ~1 day.',
      },
      {
        heading: 'Now: agentic AI at RSENL.',
        body: 'At RSENL I build agentic AI products end to end: an agentic RAG compliance workflow for a pharma client that cut report verification from days to hours, Storyboarder for AI-native film production, Moji for motion graphics, and Sprout for AI-driven content strategy. In 2026 I represented Madhya Pradesh at the India AI Impact Summit with RSENL.',
        images: [
          { src: '/images/pinterest.webp', alt: 'Laptop and notes on a lawn — a remote working setup' },
          { src: '/images/pinterst.webp', alt: 'Candid outdoor photo in a park, flashing peace signs' },
        ],
      },
    ],
    experience: {
      eyebrow: 'My career journey',
      heading: 'Experience & Education.',
      columns: { role: 'Role', organization: 'Organization', period: 'Period' },
      items: [
        { role: 'AI & Full-Stack Engineer', organization: 'RSENL AI Labs', period: 'Oct 2025 - Present' },
        { role: 'I-Venture Immersive (Entrepreneurship)', organization: 'ISB', period: 'Apr 2025 - Sep 2025' },
        { role: 'Frontend Lead', organization: 'Aarc', period: 'Jun 2024 - Sep 2025' },
        { role: 'Full-Stack Engineer', organization: 'Leap Wallet', period: 'Mar 2022 - Jun 2024' },
        { role: 'Software Engineer Intern', organization: 'DBS Bank', period: 'May 2021 - Aug 2021' },
        { role: 'B.Tech Computer Science (CPI 8.38)', organization: 'IIT Indore', period: '2018 - 2022' },
      ],
    },
  },

  work: {
    seo: {
      title: 'Work',
      description:
        'Selected work by Adarsh Baghel — AI video production tools, motion graphics, Chrome extensions, and agentic AI systems built with Next.js, React, FastAPI, and GCP.',
    },
    heading: 'Recent Works',
  },

  contact: {
    seo: {
      title: 'Contact',
      description:
        'Get in touch with Adarsh Baghel about AI & full-stack engineering roles, agentic AI products, SDKs, and partner integrations.',
    },
    eyebrow: 'Get in touch',
    heading: 'Let’s build AI products that actually ship.',
    asideTitle: 'Ready to connect?',
    asideDescription: 'Reach out about AI & full-stack engineering roles, agentic AI products, or SDK and integration work.',
    // Button shown above the email address in the "Ready to connect?" card.
    cta: { label: 'Email me', href: social.email },
    form: {
      nameLabel: 'Name',
      namePlaceholder: 'Enter your name',
      emailLabel: 'Email',
      emailPlaceholder: 'yourname@gmail.com',
      messageLabel: 'Your message',
      messagePlaceholder: 'Enter your message',
      submitLabel: 'Submit',
      draftReady: 'Your draft is ready. Gmail should open in a new tab — or choose another option:',
      // Subject of the drafted email; {name} is replaced with the sender's name.
      emailSubject: 'Portfolio inquiry from {name}',
      composeLabels: {
        gmail: 'Open in Gmail',
        outlook: 'Open in Outlook',
        mailApp: 'Open in Mail app',
      },
    },
  },

  photography: {
    seo: {
      title: 'Photography',
      description:
        'Photography by Adarsh Baghel — moments, places, and people, each with the story behind the frame.',
    },
    eyebrow: 'Through my lens',
    heading: 'Photography',
    description: 'I build software by day and carry a camera everywhere else. Every frame here has a story — tap a photo to read it.',
    storyLabel: 'The story',
    detailsLabel: 'Details',
    backLabel: 'All photos',
    previousLabel: 'Previous',
    nextLabel: 'Next',
    emptyState: 'Photos coming soon.',
  },

  blog: {
    seo: {
      title: 'Blog',
      description:
        'Writing by Adarsh Baghel on agentic AI, full-stack engineering, SDK design, and shipping products from 0 to 1.',
    },
    heading: 'Blog',
    description: 'Notes on agentic AI, full-stack engineering, and shipping products from 0 to 1.',
    readMoreLabel: 'Read article',
    backLabel: 'All articles',
    emptyState: 'No articles yet — check back soon.',
  },
};
