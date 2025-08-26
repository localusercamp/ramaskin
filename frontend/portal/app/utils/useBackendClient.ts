import { createTRPCClient, httpLink } from "@trpc/client";
import type { Router } from "backend";

const client = createTRPCClient<Router>({
    links: [
        httpLink({ url: "http://localhost:3030/rpc" }),
    ],
});

export function useBackendClient(): Readonly<typeof client> {
    return client;
}
