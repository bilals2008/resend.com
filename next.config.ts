// File: next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
      {
        protocol: "https",
        hostname: "logo.clearbit.com",
      },
      {
        protocol: "https",
        hostname: "stickpng.com",
      },
      {
        protocol: "https",
        hostname: "cleanpng.com",
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
