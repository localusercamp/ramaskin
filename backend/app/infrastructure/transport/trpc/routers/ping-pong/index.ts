import { defineRouter } from "../../trpc";

import { ping } from "./ping";
import { pong } from "./pong";

export const router = defineRouter({
    ping,
    pong,
});
