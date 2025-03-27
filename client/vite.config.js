import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8000", // Your backend URL
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [react()],
});
