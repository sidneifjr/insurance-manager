import { api } from '@/services/api'

type ModalFormInputs = {
  numero: string
  valorPremio: string
  nome: string
  email: string
  cpfCNPJ: string
  coberturas: string
}

// todo: verificar se o item já existe, antes de adicioná-lo.
export async function createItem(data: ModalFormInputs) {
  try {
    const test = await api('/content', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },

      body: JSON.stringify({
        id: crypto.randomUUID(),
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
    })

    return test
  } catch (error) {
    console.log(error)
  }
}
