/** @type {import('next').NextConfig} */
const nextConfig = {
  // This will ensure assets are served from the root path
  basePath: '',
  images: {
    unoptimized: true,
    remotePatterns: [],
  }
}

module.exports = nextConfig
