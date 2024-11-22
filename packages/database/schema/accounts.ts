import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core'
import { users } from '@dubble/database/schema/users'

export const accounts = pgTable('accounts', {
  id: uuid('id').primaryKey(),
  accountId: uuid('accountId').notNull(),
  providerId: text('providerId').notNull(),
  userId: uuid('userId')
    .notNull()
    .references(() => users.id),
  accessToken: text('accessToken'),
  refreshToken: text('refreshToken'),
  idToken: text('idToken'),
  expiresAt: timestamp('expiresAt'),
  password: text('password'),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt').notNull().defaultNow(),
})