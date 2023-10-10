/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

module.exports = {
  eslint: {
    dirs: ["components", "modules"],
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};
