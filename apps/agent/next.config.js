/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    '@sahil/lib',
    'ui',
    '@sahil/configs',
    '@sahil/features',
    '@sahil/tsconfig',
    'eslint-config-custom',
    '@sahil/constants'
  ],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
      },
    ],
  },
  output: "standalone"
};

module.exports = nextConfig;
