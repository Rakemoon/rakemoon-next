import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
      }
    ]
  },
  i18n: {
    locales: ["en-US", "id-ID"],
    defaultLocale: "en-US"
  }
};

export default nextConfig;
