import { pgTable, serial, text, varchar } from 'drizzle-orm/pg-core';
export const todo = pgTable('todo', {
  id: serial('id').primaryKey(),
  title: varchar('title').notNull(),
});