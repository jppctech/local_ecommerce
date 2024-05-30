/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'local-theme-light-demo.myshopify.com'
            }
        ]
    }
};

export default nextConfig;
