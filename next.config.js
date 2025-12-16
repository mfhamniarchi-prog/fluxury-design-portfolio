/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // تم إضافة Google Storage للسماح بالصور المحملة من هناك
    domains: ["storage.googleapis.com"],
  },
}

module.exports = nextConfig