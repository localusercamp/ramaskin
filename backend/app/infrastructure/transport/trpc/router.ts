import { mergeRouters } from "./trpc";

import { router as pingPongRouter } from "./routers/ping-pong";

export const router = mergeRouters(pingPongRouter);

export type Router = typeof router;
