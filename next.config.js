/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  async redirects() {
    return [
      {
        source: '/code-of-conduct',
        destination: '/AMFI_Code-of-Conduct.pdf',
        permanent: true,
      },
    ];
  }
};

module.exports = nextConfig;
