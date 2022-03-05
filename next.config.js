const relay = require("./relay.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  relay,
  experimental: {
    outputStandalone: true,
    // serverComponents: true,
    concurrentFeatures: false,
  },
};

module.exports = nextConfig;
