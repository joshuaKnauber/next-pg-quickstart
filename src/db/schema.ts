import { sql } from "drizzle-orm";
import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const stacks = pgTable("stacks", {
  id: uuid("id")
    .primaryKey()
    .notNull()
    .default(sql`gen_random_uuid()`),
  name: varchar("name", { length: 256 }),
});
