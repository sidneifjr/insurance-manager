'use client'

import {
  CaseLower,
  Hash,
  Hospital,
  Mail,
  ShieldAlert,
  Trophy,
} from 'lucide-react'
import { MouseEvent } from 'react'

import { deleteItem } from '@/api/deleteItem'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { usePagination } from '@/hooks/usePagination'
import { formatCurrency } from '@/modules/formatCurrency'
import { User } from '@/types/user'

import { Button } from '../ui/button'
import { DashboardTablePagination } from './dashboard-table-pagination'

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
  const pagination = usePagination(data)

  function handleDelete(e: MouseEvent<HTMLButtonElement>, userId: string) {
    e.preventDefault()

    deleteItem(userId)
  }

  return (
    <div className="relative flex flex-col gap-8">
      <Table className="flex-1">
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
          {pagination.currentItems.map((item) => {
            return (
              <TableRow key={item.id}>
                <TableCell className="font-medium">#{item.numero}</TableCell>
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

                <TableCell>
                  <Button
                    variant="destructive"
                    onClick={(e) => handleDelete(e, item.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>

      <DashboardTablePagination {...pagination} />
    </div>
  )
}
