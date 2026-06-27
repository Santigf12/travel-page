/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
  images: {
    unoptimized: true,
  },
  generateBuildId: async () => "build",
  // disable prefetch txt files
  pageExtensions: ["tsx", "ts", "jsx", "js"],
};
export default nextConfig;
