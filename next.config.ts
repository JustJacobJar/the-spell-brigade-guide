// @ts-expect-error No declaration file
import { PrismaPlugin } from "@prisma/nextjs-monorepo-workaround-plugin";
import type { NextConfig } from "next";

import WithBundleAnalyzer from "@next/bundle-analyzer";

const thing = WithBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})({});

const nextConfig: NextConfig = {
  devIndicators: false,

  webpack: (config, { isServer }) => {
    if (isServer) {
      config.plugins = [...config.plugins, new PrismaPlugin()];
    }
    return config;
  },
  /* config options here */
  experimental: {
    nodeMiddleware: true,
  },
  images: {
    remotePatterns: [
      new URL(
        "https://raw.githubusercontent.com/JustJacobJar/the-spell-brigade-sprites/master/sprites/**",
      ),
    ],
    formats: ["image/webp"],
    minimumCacheTTL: 2678400,
  },
  ...thing,
};

export default nextConfig;
