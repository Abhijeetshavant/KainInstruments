import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/",
  build: {
    outDir: "dist",
    sourcemap: false,
    rollupOptions: {
      output: {
        // Change from object to function format
        manualChunks(id) {
          // Vendor chunks
          if (id.includes("node_modules")) {
            // React core libraries
            if (
              id.includes("react") ||
              id.includes("react-dom") ||
              id.includes("react-router-dom")
            ) {
              return "vendor-react";
            }
            // UI libraries
            if (
              id.includes("framer-motion") ||
              id.includes("lucide-react") ||
              id.includes("react-icons")
            ) {
              return "vendor-ui";
            }
            // Other libraries
            if (
              id.includes("axios") ||
              id.includes("zod") ||
              id.includes("react-hook-form")
            ) {
              return "vendor-utils";
            }
            // Everything else in node_modules
            return "vendor";
          }
        },
        assetFileNames: "assets/[name]-[hash][extname]",
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
      },
    },
  },
  server: {
    port: 5173,
    host: true,
  },
  preview: {
    port: 5173,
    host: true,
  },
  publicDir: "public",
});
