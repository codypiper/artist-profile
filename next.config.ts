import { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/shop",
        destination: "https://shop.codypipermedia.com",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
