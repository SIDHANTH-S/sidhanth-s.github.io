import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig, Plugin } from "vite";

// Plugin that rewrites bare `react/jsx-runtime` imports in pre-compiled JS files
// (like FramerCharacter.js) that Vite doesn't normally transform
function jsxRuntimeShimPlugin(): Plugin {
  const shim = `
import * as __React__ from "react";
const _jsx = (type, props) => {
  if (!props) return __React__.createElement(type);
  const { children, ...rest } = props;
  return __React__.createElement(type, rest, children);
};
const _jsxs = (type, props) => {
  if (!props) return __React__.createElement(type);
  const { children, ...rest } = props;
  return Array.isArray(children)
    ? __React__.createElement(type, rest, ...children)
    : __React__.createElement(type, rest, children);
};
const _Fragment = __React__.Fragment;
`;

  return {
    name: "jsx-runtime-shim",
    transform(code, id) {
      if (
        (id.endsWith(".js") || id.endsWith(".jsx") || id.endsWith(".tsx") || id.endsWith(".ts")) &&
        code.includes('"react/jsx-runtime"')
      ) {
        const rewritten = code.replace(
          /import\s*\{[^}]*jsx[^}]*\}\s*from\s*["']react\/jsx-runtime["'];?/g,
          shim
        );
        return { code: rewritten, map: null };
      }
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [jsxRuntimeShimPlugin(), react(), tailwindcss()],

    // Because your repo is sidhanth-s.github.io
    base: "/",

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "."),
        // Framer components import from "framer"; redirect to unframer which is installed
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