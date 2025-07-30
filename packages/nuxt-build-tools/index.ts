import type { NuxtConfig } from "nuxt/config";

function getNuxtAppBaseConfig(): NuxtConfig {
    return {
        dir: {
            pages: "routes",
        },
    };
};

function getNuxtLayerBaseConfig(): NuxtConfig {
    return {
        components: false,
    
        imports: {
            scan: false,
        },
    
        dir: {
            pages: "routes",
        },
    };
};

export {
    getNuxtAppBaseConfig,
    getNuxtLayerBaseConfig,
};