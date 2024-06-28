import { api } from '@/services/api'
import { User } from '@/types/user'

const mockData = {
  id: 777,
  numero: 12,
  valorPremio: 373.8,
  segurado: {
    nome: 'Maria Luz',
    email: 'maria.luz@gmail.com',
    cpfCnpj: 'dmaksdmkzx',
  },
  coberturas: [
    {
      nome: 'Incêndio',
      valor: 511.76,
    },
  ],
}

export async function updateItem(id: string) {
  try {
    const res: Promise<User> = await api(`/apolices/${id}`, {
      method: 'PUT',
      body: JSON.stringify(mockData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })

    console.log(res)

    return res
  } catch (error) {
    console.log('o erro é:', error)
  }
}
