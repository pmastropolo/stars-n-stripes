import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sitemap from "vite-plugin-sitemap";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load service details to generate individual service routes
const serviceDetails = JSON.parse(
  readFileSync(
    resolve(__dirname, "src/dataJson/serviceDetails.json"),
    "utf-8",
  ),
);
const serviceRoutes = serviceDetails
  .filter(({ slug }) => slug)
  .map(({ slug }) => `/service/${slug}`);

// Load navigation items to ensure top-level pages are included
const navItems = JSON.parse(
  readFileSync(resolve(__dirname, "src/dataJson/navitemlist.json"), "utf-8"),
);

// Recursively collect links from navigation items
const collectLinks = (items) =>
  items.flatMap(({ link, childern = [] }) => [link, ...collectLinks(childern)]);

const navRoutes = collectLinks(navItems).filter((route) => route && route !== "/");

// Additional static pages not present in the nav list
const staticRoutes = [
  "/terms-and-conditions",
  "/privacy-policy",
  "/accessibility-statement",
];

// Combine and deduplicate all routes for the sitemap
const allRoutes = Array.from(
  new Set([...navRoutes, ...staticRoutes, ...serviceRoutes]),
);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: "https://starsnstripesautomotive.com", // Your website's URL
      outDir: "dist", // Where to generate sitemap.xml
      dynamicRoutes: allRoutes,
      exclude: ["/404"],
    }),
  ],
  build: {
    sourcemap: true, // Optional for debugging
  },
});
