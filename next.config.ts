import { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 100],
  },
  reactCompiler: true,
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
