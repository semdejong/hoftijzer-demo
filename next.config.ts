import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
  async redirects() {
    return [
      { source: "/onze-diensten", destination: "/diensten", permanent: false },
      { source: "/onze-diensten/", destination: "/diensten", permanent: false },
      { source: "/schilderwerken-binnen-buiten", destination: "/schilderwerk", permanent: false },
      { source: "/schilderwerken-binnen-buiten/", destination: "/schilderwerk", permanent: false },
    ];
  },
  // Demo's: nooit indexeren, op elke route.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;
