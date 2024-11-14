import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ["ts", "tsx", "mdx"],
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

const withMDX = createMDX({
  options: {
    jsx: true,
    remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
  }
});

export default withMDX(nextConfig);
