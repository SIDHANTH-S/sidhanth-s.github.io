import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,

  devIndicators: false,

  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript: {
    ignoreBuildErrors: false,
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        pathname: '/**',
      },
    ],
  },

  transpilePackages: ['motion'],
};

export default nextConfig;