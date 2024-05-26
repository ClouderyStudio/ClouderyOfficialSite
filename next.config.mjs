/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'q1.qlogo.cn',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'api.cloudery.cn',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
