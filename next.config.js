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
    locales: ['ja', 'en'],
    defaultLocale: 'ja',
  },
};

module.exports = withPWA(nextConfig);
