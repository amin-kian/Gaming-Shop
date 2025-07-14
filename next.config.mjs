/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'loremflickr.com',
                port: '',
                pathname: '/**', // به تمام مسیرها در این دامنه اجازه می‌دهد
            },
            {
                protocol: 'https',
                hostname: 'picsum.photos',
                port: '',
                pathname: '/**', // به تمام مسیرها در این دامنه اجازه می‌دهد
            },
        ],
    },
};

export default nextConfig;