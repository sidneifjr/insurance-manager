import { faker } from '@faker-js/faker'

export async function generateFakeData() {
  const data = {
    content: [],
  }

  for (let i = 1; i <= 50; i++) {
    const id = i
    const numero = faker.number.int({ min: 100000, max: 999999 })
    const valorPremio = faker.finance.amount(50, 500, 2)
    const nome = faker.person.fullName()
    const email = faker.internet.email()
    const cpfCnpj = faker.string.alphanumeric(11)

    const cobertura = {
      nome: 'Incêndio',
      valor: faker.finance.amount(10, 50, 2),
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
