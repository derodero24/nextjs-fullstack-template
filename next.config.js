/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
});

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  output: 'standalone',
  i18n: {
    locales: ['en', 'ja'],
    defaultLocale: 'en',
  },
};

module.exports = withPWA(nextConfig);
