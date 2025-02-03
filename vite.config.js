import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sitemap from "vite-plugin-sitemap";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: "https://starsnstripesautomotive.com", // Your website's URL
      outDir: 'dist',  // This specifies where to generate the sitemap.xml
    }),
  ],
  build: {
    sourcemap: true,  // optional for better debugging
  },
});