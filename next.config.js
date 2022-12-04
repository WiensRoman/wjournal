/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "**",
        hostname: "**",
      },
    ],
  }
}

module.exports = nextConfig
