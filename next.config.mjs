/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  trailingSlash: true,
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
  images: {
    loader: 'custom',
    loaderFile: './src/lib/images/loader.ts',
  },
};
export default nextConfig;
