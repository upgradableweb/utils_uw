import { defineConfig } from "vite";
import dts from "vite-plugin-dts";


export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      name: "fetch_it_uw",
      fileName: (format) => `fetch_it_uw.${format}.js`,
      formats: ["cjs", "es"]
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {},
      },
    },
  },
  plugins: [dts({ include: ["src"] })],
});
