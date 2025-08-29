import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";

const { DB_URL } = process.env;

if (!DB_URL) {
    throw new Error("Database url is not set in .env");
}

export const db = drizzle({
    connection: DB_URL,
});
