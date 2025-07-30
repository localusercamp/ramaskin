import { getNuxtAppBaseConfig } from "@packages/nuxt-build-tools";

export default defineNuxtConfig({
    ...getNuxtAppBaseConfig(),

    devtools: {
        enabled: true,
    },

    compatibilityDate: "2025-07-19",

    typescript: {
        strict: true,
        typeCheck: true,
    },
});
