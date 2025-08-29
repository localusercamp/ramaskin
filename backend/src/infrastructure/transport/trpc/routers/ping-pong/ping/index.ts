import { procedure } from "../../../trpc";

export const ping = procedure
    .query(async () => {
        return "ping!" as const;
    });
