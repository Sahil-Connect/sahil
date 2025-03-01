/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    "ui",
    "@sahil/configs",
    "@sahil/constants"
  ],
  output: "standalone"
}

module.exports = nextConfig
