/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@sahil/lib', 'ui', '@sahil/configs'],
}

module.exports = nextConfig
