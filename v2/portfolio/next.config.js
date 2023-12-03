/** @type {import('next').NextConfig} */
const path = require('path')


const isProd = process.env.NODE_ENV == 'production'

console.log("this is prod", isProd);

const nextConfig = {
  basePath: isProd ? "/portfolio" : "",
  output:"export",
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
      basePath: isProd ? "/portfolio" : "",
    },
    distDir: 'build',
    images: {
      unoptimized: true
    }
}

module.exports = nextConfig
