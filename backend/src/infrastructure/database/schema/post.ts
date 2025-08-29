import { pgTable, uuid, varchar, text } from "drizzle-orm/pg-core";

import { users } from "./user";

export const posts = pgTable("posts", {
    id: uuid().primaryKey().notNull(),
    title: varchar({ length: 255 }).notNull(),
    content: text().notNull(),
    createdBy: uuid().references(() => users.id).notNull(),
});
