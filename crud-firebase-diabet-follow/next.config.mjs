/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
};

export default {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias['@module-name'] = 'module-name/browser';
    }
    return config;
  },
};
