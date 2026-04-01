/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/melonpixels-clinic-demo",
  output: 'export',
  basePath: '/melonpixels-clinic-demo',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
