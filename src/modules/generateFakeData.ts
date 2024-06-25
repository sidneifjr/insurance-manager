import { faker } from '@faker-js/faker'

import { User } from '@/types/user'

/**
 * A cada execução do script 'dev', um novo db é gerado.
 * 'seed' garante que tais valores se manterão durante aquela execução da aplicação.
 */
export async function generateFakeData() {
  faker.seed(123)

  const data: { content: User[] } = {
    content: [],
  }

  for (let i = 0; i <= 50; i++) {
    const id = String(i)
    const numero = faker.number.int({ min: 100000, max: 999999 })
    const valorPremio = Number(faker.finance.amount())
    const nome = faker.person.fullName()
    const email = faker.internet.email()
    const cpfCnpj = faker.string.alphanumeric(11)

    const cobertura = {
      nome: 'Incêndio',
      valor: Number(faker.finance.amount()),
    }

    const item = {
      id,
      numero,
      valorPremio,
      segurado: {
        nome,
        email,
        cpfCnpj,
      },
      coberturas: [cobertura],
    }

    data.content.push(item)
  }

  return data
}
