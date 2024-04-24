/// <reference types="vitest" />

import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/css/app.css", "resources/js/app.ts"],
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
    resolve: {
        alias: {
            "@/*": "resources/js/spa_vue/*",
        },
    },
    test: {
        include: ["resources/js/**/*.spec.ts", "resources/js/**/*.test.ts"],
        exclude: ["node_modules", "public", "resources/js/vendor", ],
    },
});
