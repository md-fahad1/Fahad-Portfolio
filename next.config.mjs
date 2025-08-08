// next.config.mjs
const nextConfig = {
    // Other Next.js configuration options...
  
    // Disable Image Optimization API for static HTML export
    images: {
      unoptimized: true,
    },
    output: "export",
  };
  
  export default nextConfig;
  