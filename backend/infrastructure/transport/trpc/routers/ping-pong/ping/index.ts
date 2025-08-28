import { procedure } from "../../../trpc.ts";

export const ping = procedure
    .query(async () => {
        return "ping!" as const;
    });
