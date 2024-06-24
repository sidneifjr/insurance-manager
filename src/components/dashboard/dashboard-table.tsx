import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { User } from '@/types/user'

export function DashboardTable({ data }: { data: User[] }) {
  return (
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
              <TableCell>{item.segurado.nome}</TableCell>
              <TableCell>{item.segurado.email}</TableCell>
              <TableCell>{item.segurado.cpfCnpj}</TableCell>
              <TableCell>{item.valorPremio}</TableCell>

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
  )
}
