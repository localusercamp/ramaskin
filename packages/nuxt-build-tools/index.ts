import type { NuxtConfig } from "nuxt/config";

function getNuxtAppBaseConfig(): NuxtConfig {
    return {
        components: true,
    
        imports: {
            scan: true,
        },

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