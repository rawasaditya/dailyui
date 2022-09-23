/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['uidesigndaily.fra1.digitaloceanspaces.com'],
  },
}

module.exports = nextConfig
