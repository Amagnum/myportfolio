// Projects shown on the home page, /work, and each case study at /work/<slug>.
// Order here is the display order. Add a project by appending an object.
//
// Case-study `sections` render in order; each can have an eyebrow, heading,
// paragraphs and up to two images. Facts come from the master career doc —
// only publish verified metrics and never name confidential clients.

export const projects = [
  {
    slug: 'ai-films',
    name: 'RSENL AI Films',
    category: 'Agentic AI Video Production',
    summary:
      'RSENL’s AI-native film studio — agentic pipelines for large-volume video production, powered by in-house tools like Storyboarder and Moji.',
    url: 'https://aifilms.rsenl.com',
    urlLabel: 'Visit RSENL AI Films',
    // Short facts shown on the home page card.
    highlights: [
      'Agentic pipelines for large-volume video production',
      'Storyboarder desktop app used on 60+ minute films',
      'In-house tools: Storyboarder + Moji',
    ],
    stack: ['Next.js', 'Tauri', 'Vertex AI', 'GCP'],
    image: { src: '/images/aifilms.webp', alt: 'Cinema camera on an AI Films virtual production set' },
    meta: [
      { label: 'Category', value: 'Agentic AI Video Production' },
      { label: 'Organization', value: 'RSENL AI Labs' },
      { label: 'Stack', value: 'Next.js, Tauri, GCP, Vertex AI' },
    ],
    seo: {
      title: 'RSENL AI Films & Storyboarder — Agentic AI Video Production',
      description:
        'Case study: RSENL AI Films and Storyboarder, an agentic AI desktop app (Next.js + Tauri + Vertex AI) used to produce 60+ minute AI-native films.',
    },
    sections: [
      {
        eyebrow: 'Background',
        heading: 'Film production that scales beyond manual ops',
        paragraphs: [
          'RSENL AI Films produces video at a volume that manual filmmaking workflows can’t keep up with. The goal was to move the repetitive parts of pre-production and generation into agentic pipelines, so the team spends its time on creative decisions.',
          'I helped launch the studio’s platform and built the pipelines that span its content and video production workflows.',
        ],
        images: [{ src: '/images/aifilmsweb.png', alt: 'RSENL AI Films website: AI-powered film production studio in India' }],
      },
      {
        eyebrow: 'Storyboarder',
        heading: 'One AI-native app from story to final video',
        paragraphs: [
          'Storyboarder is an agentic production app that handles the whole workflow in one place: story extraction, shot refinement, cinematic storyboards, and final video generation.',
          'It’s a cross-platform desktop app built with Tauri and a Next.js frontend, running its AI workflows on GCP and Vertex AI. RSENL uses it in production for long-form films with runtimes of 60+ minutes.',
        ],
      },
      {
        eyebrow: 'Result',
        heading: 'In-house tools that cut prompt-engineering time',
        paragraphs: [
          'Together, Storyboarder and Moji reduce the prompt-engineering work for the studio’s staff and let developers render video and film assets directly — turning one-off generation into a repeatable pipeline.',
        ],
      },
    ],
  },
  {
    slug: 'moji',
    name: 'Moji',
    category: 'AI Motion Graphics',
    summary:
      'An AI-assisted motion-graphics workspace: describe an animation, generate the code with your preferred AI, then preview, customize, and export it in Moji.',
    url: 'https://moji.rsenl.com',
    urlLabel: 'Visit Moji',
    highlights: [
      'Paste AI-generated code → preview, customize, export',
      'Used across RSENL AI Films production',
      'Motion graphics featured in a Netflix-series pitch',
    ],
    stack: ['React', 'AI codegen', 'Motion graphics'],
    image: { src: '/images/moji.webp', alt: 'Moji AI motion graphics workspace' },
    meta: [
      { label: 'Category', value: 'AI Motion Graphics' },
      { label: 'Role', value: 'Heading development' },
      { label: 'Stack', value: 'React' },
    ],
    seo: {
      title: 'Moji — AI-Assisted Motion Graphics Platform',
      description:
        'Case study: Moji, a React platform where AI-generated animation code becomes polished, editable motion graphics — used across RSENL AI Films production.',
    },
    sections: [
      {
        eyebrow: 'Background',
        heading: 'AI can write animation code — it needs somewhere to live',
        paragraphs: [
          'Language models are good at generating animation code, but that code still needs a place to render, iterate, and export. Moji is that workspace.',
          'Users describe an animation, ask their AI of choice to generate the code, then paste it into Moji to preview, customize, and export the finished motion graphic. I head development of the platform.',
        ],
      },
      {
        eyebrow: 'Result',
        heading: 'Motion graphics for real production work',
        paragraphs: [
          'RSENL AI Films uses Moji extensively for product demos, explainers, animated text, and social content.',
          'Motion graphics made with Moji were also part of a pitch for a Netflix series directed by Vibhu Kashyap.',
        ],
      },
    ],
  },
  {
    slug: 'banana-shake',
    name: 'Banana Shake',
    category: 'Chrome Extension & Landing Page',
    summary:
      'A Chrome extension that automates Gemini image generation from Google Sheets — queue prompts, generate in bulk, and save full-resolution images to Google Drive.',
    url: 'https://bananashake.rsenl.com',
    urlLabel: 'Visit Banana Shake',
    highlights: [
      'Bulk Gemini image generation from a Google Sheet',
      'Full-resolution outputs saved to Google Drive',
      'Chrome extension + conversion-focused landing page',
    ],
    stack: ['Next.js', 'Chrome MV3', 'Gemini API'],
    image: { src: '/images/banana.webp', alt: 'Banana Shake Chrome extension for bulk Gemini image generation' },
    meta: [
      { label: 'Category', value: 'Chrome Extension & Landing Page' },
      { label: 'Integrations', value: 'Google Sheets, Gemini, Google Drive' },
      { label: 'Stack', value: 'Next.js, Chrome Extension (Manifest V3)' },
    ],
    seo: {
      title: 'Banana Shake — Automate Gemini Image Generation from Google Sheets',
      description:
        'Case study: Banana Shake, a Chrome extension and Next.js landing page that automates bulk Gemini image generation from Google Sheets to Google Drive.',
    },
    sections: [
      {
        eyebrow: 'Background',
        heading: 'Bulk image generation without copy-paste',
        paragraphs: [
          'Generating hundreds of images with Gemini by pasting prompts one at a time is slow and error-prone. Banana Shake automates the whole loop from a Google Sheet.',
          'Fill a sheet with prompts, click Start, and the extension generates every image and saves the full-resolution output to Google Drive.',
        ],
        images: [{ src: '/images/bananaweb.png', alt: 'Banana Shake landing page: Automate Gemini image generation from Google Sheets' }],
      },
      {
        eyebrow: 'Result',
        heading: 'An extension and landing page that work together',
        paragraphs: [
          'The Chrome extension runs prompt queues automatically, while the Next.js landing page walks visitors through features, pricing, and setup in a few focused sections.',
        ],
      },
    ],
  },
  {
    slug: 'sprout',
    name: 'Sprout',
    category: 'AI Content Agents',
    summary:
      'An AI-agent platform for social media communications, posting, and end-to-end content strategy with automated execution.',
    url: null,
    highlights: [
      'Multi-agent content strategy and post generation',
      'Automated social publishing and comms loops',
      'Tellotale, reinitiated and rebuilt at RSENL',
    ],
    stack: ['AI agents', 'LLMs', 'Automation'],
    image: { src: '/images/sprout.webp', alt: 'Sprout AI content-strategy agent platform' },
    meta: [
      { label: 'Category', value: 'AI Content Agents' },
      { label: 'Organization', value: 'RSENL AI Labs' },
      { label: 'Role', value: 'Product & systems design' },
    ],
    seo: {
      title: 'Sprout — AI Agents for Content Strategy & Social Media',
      description:
        'Case study: Sprout, a multi-agent platform at RSENL that plans content strategy, generates posts, and automates social publishing.',
    },
    sections: [
      {
        eyebrow: 'Background',
        heading: 'From Tellotale to Sprout',
        paragraphs: [
          'Sprout started as Tellotale, an earlier AI storytelling and marketing-automation idea I founded. At RSENL it was reinitiated as Sprout, with a much bigger scope: social media communications, posting, and complete content strategy.',
        ],
      },
      {
        eyebrow: 'Approach',
        heading: 'Multi-agent workflows with automated execution',
        paragraphs: [
          'Sprout uses multi-agent workflows to plan content strategy, generate and adapt posts, and run social publishing and communication loops with less manual work.',
          'I own the product and systems design: agent orchestration, content pipelines, and the automated execution paths across social channels.',
        ],
      },
    ],
  },
];

export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}

export function getOtherProjects(slug, count = 2) {
  const index = projects.findIndex((project) => project.slug === slug);
  const ordered = [...projects.slice(index + 1), ...projects.slice(0, index)];
  return ordered.slice(0, count);
}
