/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**'
      }
    ],
    unoptimized: false
  },
  swcMinify: true,
  poweredByHeader: false,
  experimental: {
    optimizeCss: true
  }
};

export default nextConfig;
