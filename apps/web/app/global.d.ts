import { auth } from '@/api/auth'
import { plans } from '@/api/src/lib/types'
import { FormApi, ReactFormApi } from '@tanstack/react-form'
import { ZodValidator } from '@tanstack/zod-form-adapter'
import { Media as MediaType } from '../../../packages/database/schema/media'

declare global {
  type User = typeof auth.$Infer.Session.user
  type Session = typeof auth.$Infer.Session.session
  type Media = MediaType
  type Plan = (typeof plans)[number]
  type TanstackForm<T> = FormApi<T, ZodValidator> &
    ReactFormApi<T, ZodValidator>
}
