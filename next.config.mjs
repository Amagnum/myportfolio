/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow phone/LAN testing against `next dev` (e.g. http://192.168.x.x:3000).
  allowedDevOrigins: ['192.168.29.18'],

  // Old Framer template case-study URLs → new project slugs (see content/projects.js).
  async redirects() {
    return Object.entries({
      'brightly-studio': 'moji',
      'luma-workspace': 'ai-films',
      'nova-health': 'banana-shake',
      'atlas-finance': 'sprout',
    }).map(([from, to]) => ({
      source: `/work/${from}`,
      destination: `/work/${to}`,
      permanent: true,
    }));
  },
};

export default nextConfig;
