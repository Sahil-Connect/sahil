module.exports = {
  reactStrictMode: true,
  transpilePackages: ['@sahil/lib', 'ui', '@sahil/configs'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
      },
    ],
  },
};
