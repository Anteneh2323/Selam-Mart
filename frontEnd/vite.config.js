import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.png", "**/*.jpg", "**/*.jpeg", "**/*.webp", "**/*.PNG"], // Include image formats as assets
  server: {
    hmr: {
      overlay: false, // Optional: disable the error overlay in the browser
    },
  },
});
