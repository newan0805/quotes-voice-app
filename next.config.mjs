// // next.config.mjs
// import withPWA from "next-pwa";

// /** @type {import('next').NextConfig} */
// const nextConfig = withPWA({
//   dest: "public",
//   disable: process.env.NODE_ENV === "development", // Disable PWA in development mode
//   register: true, // Register the service worker
//   skipWaiting: true, // Enable skip waiting for immediate updates
// });

// export default nextConfig;


const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true,
};

export default nextConfig;
