import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  base: "/",  // CORRECT for root GitHub Pages or custom domain

  server: {
    host: "::",
    port: 8080,
  },

  build: {
    sourcemap: false,
    minify: "esbuild",
    chunkSizeWarningLimit: 1000,
  },

  plugins: [
    react(),
    mode === "development" && componentTagger()
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
