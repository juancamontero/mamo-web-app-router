/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'raw.githubusercontent.com',
            port: '',
            pathname: '/juancamontero/mamo-content/main/images/**',
          },
        ],
      },
}

module.exports = nextConfig
