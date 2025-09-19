import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {

    domains: ["ik.imagekit.io", "github.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "5wt23w8lat.ufs.sh",
      },
    ],
  },
};

export default nextConfig;
