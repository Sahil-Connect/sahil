/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@sahil/lib', 'ui', '@sahil/configs', "@sahil/features", "tsconfig", "eslint-config-custom"],
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
