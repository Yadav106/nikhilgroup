/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['localhost', 'res.cloudinary.com', 'images.unsplash.com', 'lh3.googleusercontent.com'],
        remotePatterns: [
            {
              protocol: "https",
              hostname: "**",
            },
        ],

          },
    }

module.exports = nextConfig
