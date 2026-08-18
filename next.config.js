// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: process.env.NEXT_DIST_DIR || ".next",
  images: {
    domains: ["cdn.sanity.io", "pbs.twimg.com"]
  }
};

module.exports = nextConfig;
