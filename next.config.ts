import type { NextConfig } from "next";
import { withNextVideo } from 'next-video/process';


const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: 'i.ibb.co.com',
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: 'placehold.co',
        pathname: "**",
      },
    ],
  },
};

module.exports = withNextVideo(nextConfig);

export default nextConfig;
