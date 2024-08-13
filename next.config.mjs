/** @type {import('next').NextConfig} */
import nextI18NextConfig from './next-i18next.config.mjs';

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'variety.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  i18n: nextI18NextConfig.i18n,
};

export default nextConfig;
