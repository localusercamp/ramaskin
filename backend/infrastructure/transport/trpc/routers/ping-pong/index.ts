import { defineRouter } from "../../trpc.ts";

import { ping } from "./ping/index.ts";
import { pong } from "./pong/index.ts";

export const router = defineRouter({
    ping,
    pong,
});
