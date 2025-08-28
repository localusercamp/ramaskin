import { defineRouter, procedure } from "../../trpc.ts";
import { z } from "zod";

export const router = defineRouter({
    parametrized: procedure
        .input(z.object({
            param1: z.string(),
            param2: z.number(),
        }))
        .query(async (options) => {
            const {
                param1,
                param2,
            } = options.input;

            return {
                message: param2 + " " + param1,
            };
        }),
});
