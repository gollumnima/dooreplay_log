/* eslint-disable no-param-reassign */
/**
@type {import('next').NextConfig}
*/

// const { config } = require('process');

const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react/jsx-runtime.js': require.resolve('react/jsx-runtime'),
    };

    config.resolve = {
      ...config.resolve,
      fallback: {
        ...config.resolve.fallback,
        child_process: false,
        fs: false,
        // 'builtin-modules': false,
        // worker_threads: false,
      },
    };

    return config;
  },
};

module.exports = nextConfig;
