import { defineConfig } from "vite";
import dts from 'vite-plugin-dts'

export default defineConfig({
    build: {
        lib: {
            entry: {
                index: "src/index.js"
            },
            formats: ["es", "cjs"],
        },
        rollupOptions: {
            external: [],
        },
        minify: true,
    },
    plugins: [dts({ include: ["src"] })]
});
