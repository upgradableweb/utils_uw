import { defineConfig } from "vite";
import dts from 'vite-plugin-dts'

export default defineConfig({
    build: {
        lib: {
            entry: {
                index: "src/index.ts",
                // required: "src/required.ts",
                // string: "src/string.ts",
                // number: "src/number.ts",
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
