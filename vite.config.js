import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sitemap from "vite-plugin-sitemap";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: "https://starsnstripesautomotive.com", // Your website's URL
      outDir: 'dist',  // Where to generate sitemap.xml
      dynamicRoutes: [
        "/",
        "/about",
        "/contact",
        "/faq",
        "/gallery",
        "/services",
        "/single-service", // If applicable
        "/privacy-policy",
        "/terms-and-conditions",
        "/accessibility-statement",
      ],
    }),
  ],
  build: {
    sourcemap: true,  // Optional for debugging
  },
});