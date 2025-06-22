
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      }
    ],
  },
  allowedDevOrigins: ['https://9000-firebase-studio-1748526180630.cluster-w5vd22whf5gmav2vgkomwtc4go.cloudworkstations.dev'],
};

export default nextConfig;
