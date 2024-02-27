const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["ui", "@sahil/configs"],
  output: "standalone",
  images: {
    domains: ['storage.googleapis.com']
  }
}

module.exports = nextConfig
