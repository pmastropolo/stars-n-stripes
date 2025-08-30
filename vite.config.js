import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sitemap from "vite-plugin-sitemap";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const serviceDetails = JSON.parse(
  readFileSync(resolve(__dirname, "src/dataJson/serviceDetails.json"), "utf-8"),
);

const serviceRoutes = serviceDetails.map(({ id }) => `/service-single/${id}`);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: "https://starsnstripesautomotive.com", // Your website's URL
      outDir: "dist", // Where to generate sitemap.xml
      dynamicRoutes: [
        "/about",
        "/service",
        "/faq",
        "/gallery",
        "/contact",
        "/terms-and-conditions",
        "/privacy-policy",
        "/accessibility-statement",
        ...serviceRoutes,
      ],
    }),
  ],
  build: {
    sourcemap: true,  // Optional for debugging
  },
});
