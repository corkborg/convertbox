const CopyPlugin = require("copy-webpack-plugin");

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

    config.plugins.push(new CopyPlugin({
      patterns: [{
        from: './node_modules/onnxruntime-web/dist/*.wasm',
        to: 'static/chunks/pages/[name][ext]' }]
    }))

    return config;
  },
}

module.exports = nextConfig
