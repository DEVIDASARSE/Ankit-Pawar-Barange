/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false, // the motion setup attaches real DOM listeners once
  poweredByHeader: false,
  images: { formats: ['image/avif', 'image/webp'] },
}
