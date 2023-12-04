/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'radar.weather.gov',
                port: '',
                pathname: '**',
            },
        ],
    },
}

module.exports = nextConfig
