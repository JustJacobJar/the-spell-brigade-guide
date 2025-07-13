import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL(
        "https://raw.githubusercontent.com/JustJacobJar/the-spell-brigade-sprites/master/sprites/**",
      ),
    ],
    formats: ["image/webp"],
    minimumCacheTTL: 2678400,
  },
  output: "standalone",
};

export default nextConfig;
