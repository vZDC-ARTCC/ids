/** @type {import('next').NextConfig} */
const nextConfig = {
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
