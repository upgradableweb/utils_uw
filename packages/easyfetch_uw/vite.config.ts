import { defineConfig } from "vite";
import dts from "vite-plugin-dts";


export default defineConfig({
  build: {
    lib: {
      entry: {
        index: "src/index.ts",
        params: "src/params_uw.ts",
      },
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
