/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: "/pofology", // change to your GitHub repo name
};

module.exports = nextConfig;

