import { mergeRouters } from "./trpc.ts";

import { router as pingPongRouter } from "./routers/ping-pong/index.ts";
import { router as parametrizedRouter } from "./routers/parametrized/index.ts";

export const router = mergeRouters(pingPongRouter, parametrizedRouter);

export type Router = typeof router;
