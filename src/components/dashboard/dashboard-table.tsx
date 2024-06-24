import {
  CaseLower,
  Hash,
  Hospital,
  Mail,
  ShieldAlert,
  Trophy,
} from 'lucide-react'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { formatCurrency } from '@/modules/formatCurrency'
import { User } from '@/types/user'

type DashboardTableTypes = {
  data: User[]
}

const tableCategories = [
  {
    name: 'Número',
    icon: <Hash />,
  },
  {
    name: 'Valor Prêmio',
    icon: <Trophy />,
  },
  {
    name: 'Nome',
    icon: <CaseLower />,
  },
  {
    name: 'Email',
    icon: <Mail />,
  },
  {
    name: 'CPF/CNPJ',
    icon: <ShieldAlert />,
  },
  {
    name: 'Coberturas',
    icon: <Hospital />,
  },
]

export function DashboardTable({ data }: DashboardTableTypes) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {tableCategories.map((category) => {
            return (
              <TableHead key={crypto.randomUUID()}>
                <span className="flex items-center gap-2">
                  {category.icon} {category.name}
                </span>
              </TableHead>
            )
          })}
        </TableRow>
      </TableHeader>

      <TableBody>
        {data.map((item) => {
          return (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.numero}</TableCell>
              <TableCell>{formatCurrency(item.valorPremio)}</TableCell>
              <TableCell>{item.segurado.nome}</TableCell>
              <TableCell>{item.segurado.email}</TableCell>
              <TableCell>{item.segurado.cpfCnpj}</TableCell>

              {item.coberturas.map((cobertura) => {
                return (
                  <TableCell key={crypto.randomUUID()}>
                    {cobertura.nome}, {formatCurrency(cobertura.valor)}
                  </TableCell>
                )
              })}
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}
