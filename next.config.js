// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'impecclean.pt',
        port: '',
        pathname: '/',
      },
      {
        protocol: 'http',
        hostname: 'localhost:4200',
        port: '',
        pathname: '/',
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
}

module.exports = nextConfig
