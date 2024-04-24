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
        include: [
            "resources/js/spa_vue/**/*.spec.ts",
            "resources/js/spa_vue/**/*.test.ts",
        ],
        globals: true,
        environment: "happy-dom",
    },
});
