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
  reactStrictMode: false,
  env: {
    NEXT_PUBLIC_KAKAO_MAP_REST_API_KEY: process.env.NEXT_PUBLIC_KAKAO_MAP_REST_API_KEY,
    NEXT_PUBLIC_KAKAO_MAP_JAVASCRIPT_KEY: process.env.NEXT_PUBLIC_KAKAO_MAP_JAVASCRIPT_KEY,
  },
};

module.exports = nextConfig;
