import { procedure } from "../../../trpc";

export const pong = procedure
    .query(async () => {
        return "pong!" as const;
    });
