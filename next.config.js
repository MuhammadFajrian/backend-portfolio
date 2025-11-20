/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['notion.so', 's3.us-west-2.amazonaws.com'],
  },
  env: {
    CONTENT_SOURCE: process.env.CONTENT_SOURCE || 'markdown',
  },
};

module.exports = nextConfig;
