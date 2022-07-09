import { t } from 'i18next'
import { z } from 'zod'

export const loginSchema = z.object({
  username: z.string({ required_error: t('auth:validation.username') }),
  password: z.string({ required_error: t('auth:validation.password') }),
})
