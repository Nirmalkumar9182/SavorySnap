import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"
import styleX from "vite-plugin-stylex"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), styleX()],
  server: {
    open: true,
  },
  build: {
    outDir: "build",
    sourcemap: true,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "src/setupTests",
    mockReset: true,
  },
})
