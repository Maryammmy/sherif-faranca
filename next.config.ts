import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "images.pexels.com",
      "cdn-icons-png.flaticon.com",
      "encrypted-tbn0.gstatic.com",
      "i.postimg.cc",
    ],
    // add other domains if needed
  },
};

export default nextConfig;
