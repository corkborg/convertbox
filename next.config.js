const environment = process.env.NODE_ENV || development

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
}

if(environment === 'production') {
  nextConfig['basePath'] = '/convert-tools'
}

module.exports = nextConfig
