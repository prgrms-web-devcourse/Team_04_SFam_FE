/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  images: {
    // TODO: domains 변경 필요
    domains: ['images.unsplash.com'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader'],
    });

    return config;
  },
};

module.exports = nextConfig;
