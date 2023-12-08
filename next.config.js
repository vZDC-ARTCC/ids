const { version } = require('./package.json');

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
    publicRuntimeConfig: {
        version,
    },
}

module.exports = nextConfig
