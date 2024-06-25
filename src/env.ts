import { z } from 'zod'

const envSchema = z.object({
  PUBLIC_API_BASE_URL: z.string().url(),
})

const parsedEnv = envSchema.safeParse(process.env)

if (!parsedEnv.success) {
  console.log(
    'Invalid environment variables',
    parsedEnv.error.flatten().fieldErrors,
  )

  throw new Error(
    'Invalid environment variables. Have you forgotten to create your .env file?',
  )
}

export const env = parsedEnv.data
