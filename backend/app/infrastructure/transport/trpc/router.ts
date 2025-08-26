import { mergeRouters } from "./trpc";

import { router as pingPongRouter } from "./routers/ping-pong";
import { router as parametrizedRouter } from "./routers/parametrized";

export const router = mergeRouters(pingPongRouter, parametrizedRouter);

export type Router = typeof router;
