import { pgTable, text, timestamp } from 'drizzle-orm/pg-core'
import { users } from './users'
import { sql } from 'drizzle-orm'

export const connects = pgTable('connects', {
  id: text('id')
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  userId: text('userId')
    .notNull()
    .references(() => users.id),
  providerId: text('providerId').notNull(),
  accessToken: text('accessToken').notNull(),
  refreshToken: text('refreshToken'),
  expiresAt: timestamp('expiresAt'),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt').notNull().defaultNow(),
})
