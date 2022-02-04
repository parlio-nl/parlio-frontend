const relay = require("./relay.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    outputStandalone: true,
    // serverComponents: true,
    concurrentFeatures: false,
    relay,
  },
};

module.exports = nextConfig;
