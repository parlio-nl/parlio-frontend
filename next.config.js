const relay = require("./relay.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    concurrentFeatures: false,
    // serverComponents: true,
    relay,
  },
};

module.exports = nextConfig;
