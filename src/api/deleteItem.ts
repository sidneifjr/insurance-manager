import { api } from '@/services/api'
import { User } from '@/types/user'

export async function deleteItem(id: string) {
  try {
    const test: Promise<User> = await api(`/content/${id}`, {
      method: 'DELETE',
    })

    return test
  } catch (error) {
    console.log(error)
  }
}
