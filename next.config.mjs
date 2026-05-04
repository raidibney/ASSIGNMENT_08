/** @type {import('next').NextConfig} */
const nextconfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co.com', // Added this variation
      }
    ],
  },
};

export default nextconfig;