import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],

    base: "/",

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "."),
        framer: path.resolve(__dirname, "node_modules/unframer"),
      },
    },

    optimizeDeps: {
      include: ["react/jsx-runtime"],
    },

    server: {
      allowedHosts: ["janine-ornamented-surrenderingly.ngrok-free.dev"],

      hmr: process.env.DISABLE_HMR !== "true",

      watch:
        process.env.DISABLE_HMR === "true"
          ? null
          : {
              ignored: [
                "**/dist/**",
                "**/build/**",
                "**/coverage/**",
                "**/.refact/**",
                "**/server.js",
                "**/*.map",
              ],
            },
    },
  };
});