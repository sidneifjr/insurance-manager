import { api } from '@/services/api'
import { User } from '@/types/user'

export async function getItems() {
  const content: Promise<User[]> = await api('/apolices', { cache: 'no-store' })

  return content
}
