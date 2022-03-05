const relay = require("./relay.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  relay,
  swcMinify: true,
  experimental: {
    outputStandalone: true,
    // serverComponents: true,
    concurrentFeatures: false,
  },
};

module.exports = nextConfig;
