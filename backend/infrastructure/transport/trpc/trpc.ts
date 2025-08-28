import { initTRPC } from "@trpc/server";
import type { Context } from "./context.ts";
// import { transformer } from "~/utils/transformer";



const trpc = initTRPC.context<Context>().create({
    // transformer,
    // errorFormatter({ shape }) {
    //     return shape;
    // },
});

/**
 * Create a router.
 */
export const defineRouter = trpc.router;

/**
 * Merge multiple routers together.
 */
export const mergeRouters = trpc.mergeRouters;

/**
 * Create an unprotected procedure.
 **/
export const procedure = trpc.procedure;

// /**
//  * Create a server-side caller
//  */
// export const createCallerFactory = trpc.createCallerFactory;
