import stylistic from "@stylistic/eslint-plugin";
import vue from "eslint-plugin-vue";
import {
    defineConfigWithVueTs,
    vueTsConfigs,
} from "@vue/eslint-config-typescript";

import { globalIgnores } from "eslint/config";

export default defineConfigWithVueTs(
    vue.configs["flat/recommended"],
    vueTsConfigs.strict,
    {
        plugins: {
            "@stylistic": stylistic,
        },

        rules: {
            "@stylistic/semi": ["error", "always"],
            "@stylistic/comma-dangle": ["error", "always-multiline"],
            "@stylistic/quotes": ["error", "double"],
            "@stylistic/indent": ["error", 4],
            "@stylistic/no-multiple-empty-lines": ["warn", { max: 3 }],
            "@stylistic/eol-last": ["warn", "always"],
            "@stylistic/no-trailing-spaces": ["warn"],

            "vue/multi-word-component-names": "off",
            "vue/html-indent": ["error", 4],
        },
    },

    globalIgnores([
        "**/.nitro/",
        "**/.nuxt/",
    ]),
    //     {
    //     files: [
    //         "**/*.js",
    //         "**/*.ts",
    //         "**/*.vue",
    //     ],

    //     extends: [
    //         stylistic.configs.recommended,
    //         typescript.configs.strict,
    //         vue.configs["flat/recommended"],
    //     ],

    //     plugins: {
    //         "@stylistic": stylistic,
    //         "@typescript-eslint": typescript.plugin,
    //     },

    //     rules: {
    //         "@stylistic/semi": ["error", "always"],
    //         "@stylistic/comma-dangle": ["error", "always-multiline"],
    //         "@stylistic/quotes": ["error", "double"],
    //         "@stylistic/indent": ["error", 4],
    //         "@stylistic/no-multiple-empty-lines": ["warn", { max: 3 }],
    //         "@stylistic/eol-last": ["warn", "always"],

    //         "vue/multi-word-component-names": "off",
    //         "vue/html-indent": ["error", 4],
    //     },
    // },
);
