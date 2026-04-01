/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/melonpixels-clinic-demo',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
