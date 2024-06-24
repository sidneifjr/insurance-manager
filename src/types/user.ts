interface Coberturas {
  nome: string
  valor: number
}

interface Segurado {
  nome: string
  email: string
  cpfCnpj: string
}

export type User = {
  id: number
  numero: number
  valorPremio: number
  segurado: Segurado
  coberturas: Coberturas[]
}
