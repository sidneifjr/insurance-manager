'use client'

import {
  CaseLower,
  Hash,
  Hospital,
  Mail,
  ShieldAlert,
  Trophy,
} from 'lucide-react'
import { MouseEvent, useState } from 'react'

import { deleteItem } from '@/api/deleteItem'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
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
  const {
    currentPage,
    totalPages,
    currentItems,
    handleNextPage,
    handlePreviousPage,
  } = usePagination(data)

  function handleDelete(e: MouseEvent<HTMLButtonElement>, userId: string) {
    e.preventDefault()

    deleteItem(userId)
  }

  return (
    <>
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
          {currentItems.map((item) => {
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

      <Pagination>
        <PaginationContent className="flex gap-2">
          <PaginationItem>
            <PaginationPrevious
              className={
                currentPage - 1 > 0
                  ? 'cursor-pointer'
                  : 'pointer-events-none cursor-not-allowed text-gray-400'
              }
              onClick={(e) => handlePreviousPage(e)}
            />
          </PaginationItem>

          <PaginationItem>
            {currentPage} out of {totalPages}
          </PaginationItem>

          <PaginationItem>
            <PaginationNext
              className={
                currentPage < totalPages
                  ? 'cursor-pointer'
                  : 'pointer-events-none cursor-not-allowed text-gray-400'
              }
              onClick={(e) => handleNextPage(e)}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  )
}
