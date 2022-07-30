/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  /* config options here */
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  images: {
    // TODO: domain 변경 필요
    domains: ['images.unsplash.com'],
  },
};

module.exports = nextConfig;
