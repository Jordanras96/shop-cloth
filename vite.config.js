import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "@svgr/rollup";
import path from "path";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  optimizeDeps:{
    include: ['src/**/*.ts']
  },
  resolve: {
    alias: {
      "@": path.resolve(new URL('.', import.meta.url).pathname, "src/")
    },
  },
});
