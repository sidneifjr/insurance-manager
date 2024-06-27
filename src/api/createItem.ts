import { api } from '@/services/api'
import { User } from '@/types/user'

type ModalFormInputs = {
  numero: string
  valorPremio: string
  nome: string
  email: string
  cpfCNPJ: string
  coberturas: string
}

export async function createItem(data: ModalFormInputs) {
  try {
    const test: Promise<User> = (await api('/content', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },

      body: JSON.stringify({
        id: String(Math.round(Math.random() * 10000)),
        numero: data.numero,
        valorPremio: data.valorPremio,
        segurado: {
          nome: data.nome,
          email: data.email,
          cpfCnpj: data.cpfCNPJ,
        },
        coberturas: [
          {
            nome: 'Incêndio',
            valor: 511.76,
          },
        ],
      }),
    })) as Promise<User>

    return test
  } catch (error) {
    console.log(error)
  }
}
