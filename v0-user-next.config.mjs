/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'v0.blob.com',
      },
    ],
  },
  // Enable static exports for hosting on platforms that don't support Next.js natively
  output: 'standalone',
};

export default nextConfig;
