import { getContent } from '@/actions/getContent'
import { H2 } from '@/components/typography/h2'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { writeDataToDatabase } from '@/modules/writeDataToDatabase'

interface Coberturas {
  nome: string
  valor: number
}

interface Segurado {
  nome: string
  email: string
  cpfCnpj: string
}

interface User {
  id: number
  numero: number
  valorPremio: number
  segurado: Segurado
  coberturas: Coberturas[]
}

export default async function Home() {
  const data = (await getContent()) as User[]
  console.log(data)

  await writeDataToDatabase()

  return (
    <>
      <H2>Visão Geral</H2>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Número</TableHead>
            <TableHead>Valor Prêmio</TableHead>
            <TableHead>Nome</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>CPF/CNPJ</TableHead>
            <TableHead>Coberturas Nome</TableHead>
            <TableHead>Coberturas Valor</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((item) => {
            return (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.numero}</TableCell>
                <TableCell>{item.valorPremio}</TableCell>
                <TableCell>{item.segurado.nome}</TableCell>
                <TableCell>{item.segurado.email}</TableCell>
                <TableCell>{item.segurado.cpfCnpj}</TableCell>

                {item.coberturas.map((cobertura) => {
                  return (
                    <>
                      <TableCell>{cobertura.nome}</TableCell>
                      <TableCell>{cobertura.valor}</TableCell>
                    </>
                  )
                })}
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </>
  )
}
