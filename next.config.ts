// @ts-expect-error No declaration file
import { PrismaPlugin } from "@prisma/nextjs-monorepo-workaround-plugin";
import type { NextConfig } from "next";

import WithBundleAnalyzer from "@next/bundle-analyzer";

const thing = WithBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})({});

const nextConfig: NextConfig = {
  devIndicators: false,
  /* config options here */
  experimental: {
    authInterrupts: true,
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
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.plugins = [...config.plugins, new PrismaPlugin()];
    }
    return config;
  },
  ...thing,
};

export default nextConfig;
