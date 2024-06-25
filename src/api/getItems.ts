import { api } from '@/services/api'

export async function getItems() {
  const content = await api('/content')

  return content
}
