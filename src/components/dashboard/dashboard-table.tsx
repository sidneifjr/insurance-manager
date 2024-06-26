'use client'

import {
  CaseLower,
  FilePenLine,
  Hash,
  Hospital,
  Mail,
  ShieldAlert,
  Trash2,
  Trophy,
} from 'lucide-react'
import { MouseEvent, useState } from 'react'

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
    icon: <Hash width={20} height={20} />,
  },
  {
    name: 'Valor Prêmio',
    icon: <Trophy width={20} height={20} />,
  },
  {
    name: 'Nome',
    icon: <CaseLower width={20} height={20} />,
  },
  {
    name: 'Email',
    icon: <Mail width={20} height={20} />,
  },
  {
    name: 'CPF/CNPJ',
    icon: <ShieldAlert width={20} height={20} />,
  },
  {
    name: 'Coberturas',
    icon: <Hospital width={20} height={20} />,
  },
]

export function DashboardTable({ data }: DashboardTableTypes) {
  const [apiData, setApiData] = useState(data)
  const pagination = usePagination(apiData)

  async function handleDelete(
    e: MouseEvent<HTMLButtonElement>,
    userId: string,
  ) {
    e.preventDefault()

    await deleteItem(userId)

    const removeDeletedItemFromArray = apiData.filter(
      (item) => item.id !== userId,
    )

    setApiData(removeDeletedItemFromArray)
  }

  return (
    <div className="relative flex flex-col gap-8">
      <Table className="flex-1">
        <TableHeader>
          <TableRow>
            {tableCategories.map((category) => {
              return (
                <TableHead key={crypto.randomUUID()}>
                  <span className="flex items-center gap-2 tracking-tight">
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
                <TableCell className="font-medium tracking-tight">
                  #{item.numero}
                </TableCell>

                <TableCell className="tracking-tight">
                  {formatCurrency(item.valorPremio)}
                </TableCell>

                <TableCell className="tracking-tight">
                  {item.segurado.nome}
                </TableCell>

                <TableCell className="tracking-tight">
                  {item.segurado.email}
                </TableCell>

                <TableCell className="tracking-tight">
                  {item.segurado.cpfCnpj}
                </TableCell>

                {item.coberturas.map((cobertura) => {
                  return (
                    <TableCell
                      className="tracking-tight"
                      key={crypto.randomUUID()}
                    >
                      {cobertura.nome}, {formatCurrency(cobertura.valor)}
                    </TableCell>
                  )
                })}

                <TableCell>
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      onClick={(e) => handleDelete(e, item.id)}
                    >
                      <FilePenLine width={16} height={16} />
                    </Button>

                    <Button
                      variant="destructive"
                      onClick={(e) => handleDelete(e, item.id)}
                    >
                      <Trash2 width={16} height={16} />
                    </Button>
                  </div>
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
