/** @type {import('next').NextConfig} */
const nextConfig = {
  //For testing purposes
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "ir.ebaystatic.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
      { protocol: "https", hostname: "fyawsjdhinbdsevfswgw.supabase.co"}
    ],
  },
};

export default nextConfig;
