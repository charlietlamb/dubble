'use server'

import client from '@ff/design-system/lib/client'
import { headersWithCookies } from '@ff/design-system/lib/header-with-cookies'

export async function storeMedia(
  file: File,
  fileId: string,
  extension: string,
  duration: number
) {
  const response = await client.media.store.$post(
    {
      json: {
        path: fileId,
        name: file.name,
        size: file.size,
        mimeType: file.type,
        extension,
        duration:
          Math.ceil(duration) === duration ? duration : Math.ceil(duration),
        source: 'user',
      },
    },
    await headersWithCookies()
  )
  const json = await response.json()
  return 'id' in json ? json.id : null
}
