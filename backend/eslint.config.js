import config from "@packages/eslint-config";

import { defineConfig } from "eslint/config";

export default defineConfig([
    {
        extends: [config],
    },
]);
