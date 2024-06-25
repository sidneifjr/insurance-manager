import { api } from '@/services/api'

export async function getContent() {
  const content = await api('/content')

  return content
}
