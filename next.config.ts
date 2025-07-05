import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL(
        "https://raw.githubusercontent.com/JustJacobJar/the-spell-brigade-sprites/master/sprites/**",
      ),
    ],
    formats: ["image/webp"],
    minimumCacheTTL: 2678400,
  },
  
};

export default nextConfig;

// import WithBundleAnalyzer from "@next/bundle-analyzer";

// export default WithBundleAnalyzer({
//   enabled: process.env.ANALYZE === "true"
// })({});