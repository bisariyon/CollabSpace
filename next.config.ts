import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
    ],
  },
  typescript:{
    ignoreBuildErrors: true
  }
  /* config options here */
};

export default nextConfig;
