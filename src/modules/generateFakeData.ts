import { faker } from '@faker-js/faker'

import { User } from '@/types/user'

export async function generateFakeData() {
  const data: { content: User[] } = {
    content: [],
  }

  for (let i = 1; i <= 50; i++) {
    const id = i
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
