/** @type {{images: {remotePatterns: [{protocol: string, hostname: string}]}, reactStrictMode: boolean, swcMinify: boolean}} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "**",
        hostname: "**",
        port: ''
      },
      {
        protocol: "https",
        hostname: "www.google.kz",
        port: ''
      },
      {
        protocol: "https",
        hostname: "leonardo.osnova.io",
        port: ''
      },
      {
        protocol: "https",
        hostname: "pic.rutubelist.ru",
        port: ''
      }
    ]
  }
}

module.exports = nextConfig
