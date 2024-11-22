import { timestamps } from './columns.helpers'
import { text } from 'drizzle-orm/pg-core'
import { pgTable } from 'drizzle-orm/pg-core'
import { media } from './media'
import { users } from './users'
import { tasks } from './tasks'
import { sql } from 'drizzle-orm'

export const dubs = pgTable('dubs', {
  id: text('id')
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  userId: text('user_id')
    .references(() => users.id)
    .notNull(),
  taskId: text('task_id')
    .references(() => tasks.id)
    .notNull(),
  status: text('status').notNull().default('incomplete'),
  mediaId: text('media_id')
    .references(() => media.id)
    .notNull(),
  language: text('language').notNull(),
  dubbingId: text('dubbing_id').notNull(),
  dubUrl: text('dub_url').notNull(),
  ...timestamps,
})
