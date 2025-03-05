import { defineConfig } from "vite";

export default defineConfig({
    build: {
        lib: {
            entry: "src/index.js",
            name: "join_text_uw",
            fileName: (format) => `join_text_uw.${format}.js`,
            formats: ["es", "cjs"],
        },
        rollupOptions: {
            external: [],
        },
        minify: true,
    },
});
