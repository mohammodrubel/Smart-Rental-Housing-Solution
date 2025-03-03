import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // This allows images from any hostname over HTTPS
      },
    ],
  },
};

export default nextConfig;
