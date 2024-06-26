interface Cobertura {
  nome: string
  valor: number
}

interface Segurado {
  nome: string
  email: string
  cpfCnpj: string
}

export type User = {
  id: string
  numero: number
  valorPremio: number
  segurado: Segurado
  coberturas: Cobertura[]
}
