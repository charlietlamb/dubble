'use server'

import { Media } from '@ff/database/schema/media'
import client from '@ff/design-system/lib/client'
import { PAGE_SIZE } from '@ff/design-system/data/page-size'
import { headersWithCookies } from '@ff/design-system/lib/header-with-cookies'

export async function fetchMedia(
  source: string,
  page: number
): Promise<Media[]> {
  const response = await client.media.get.$post(
    {
      json: { source, offset: page * PAGE_SIZE, limit: PAGE_SIZE },
    },
    await headersWithCookies()
  )
  if (!response.ok) {
    throw new Error('Failed to fetch media')
  }
  const mediaResults = await response.json()
  return mediaResults.map((media) => ({
    ...media,
    createdAt: new Date(media.createdAt),
    updatedAt: media.updatedAt ? new Date(media.updatedAt) : null,
    deletedAt: media.deletedAt ? new Date(media.deletedAt) : null,
  }))
}
