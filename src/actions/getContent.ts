import { env } from '@/env'
import { api } from '@/services/api'

export async function getContent() {
  const content = await api(`${env.NEXT_PUBLIC_API_BASE_URL}/content`)

  return content
}
