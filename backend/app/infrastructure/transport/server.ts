import { H3, toNodeHandler } from "h3";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { createContext } from "./trpc/context";
import { router } from "./trpc/router";

const app = new H3();

app.options("/rpc/**", async (event) => {
    event.res.headers.set("Access-Control-Allow-Origin", "*");
    event.res.headers.set("Access-Control-Allow-Methods", "*");
    event.res.headers.set("Access-Control-Allow-Headers", "*");
    
    event.res.status = 204;

    return;
});

app.all("/rpc/**", async (event) => {
    event.res.headers.set("Access-Control-Allow-Origin", "*");
    event.res.headers.set("Access-Control-Allow-Methods", "*");
    event.res.headers.set("Access-Control-Allow-Headers", "*");

    return fetchRequestHandler({
        endpoint: "/rpc",
        req: event.req,
        router,
        allowBatching: false,
        createContext,
    });
});

export default toNodeHandler(app);
