/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
            },
        ]
    },
    // images: {
    //     domains: ['images.unsplash.com', 'res.cloudinary.com']
    // }
};

export default nextConfig;