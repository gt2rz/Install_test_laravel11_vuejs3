import globals from "globals";
import pluginVue from "eslint-plugin-vue";

import path from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import pluginJs from "@eslint/js";

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: pluginJs.configs.recommended,
});

export default [
    { languageOptions: { globals: globals.browser } },
    ...compat.extends("standard-with-typescript"),
    ...pluginVue.configs["flat/essential"],
    {
        rules: {
            "vue/no-multiple-template-root": "off",
            "vue/no-v-for-template-key": "off",
            "vue/no-v-model-argument": "off",
            "vue/no-v-model-multiple-arguments": "off",
            "vue/no-v-model-argument": "off",
        },
    },
];
