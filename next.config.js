const environment = process.env.NODE_ENV || development

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  webpack: (config, { isServer, webpack }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    config.module.rules.push({
      test: /\.wasm$/,
      type: 'asset/resource',
    })
    return config;
  },
}

module.exports = nextConfig
