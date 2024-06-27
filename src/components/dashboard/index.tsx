'use client'

import {
  CaseLower,
  FilePenLine,
  Hospital,
  Mail,
  ShieldAlert,
  Trash2,
  Trophy,
} from 'lucide-react'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useCrud } from '@/hooks/useCrud'
import { usePagination } from '@/hooks/usePagination'
import { formatCurrency } from '@/modules/formatCurrency'
import { User } from '@/types/user'

import { Paragraph } from '../typography/paragraph'
import { Button } from '../ui/button'
import { DashboardPagination } from './dashboard-pagination'

type DashboardTypes = {
  data: User[]
}

export function Dashboard({ data }: DashboardTypes) {
  const { apiData, handleDelete, handleUpdate } = useCrud(data)
  const pagination = usePagination(apiData)

  return (
    <div className="flex flex-col gap-12">
      <div className="relative grid grid-cols-4 gap-6">
        {pagination.currentItems.map((item) => {
          return (
            <Card key={item.id}>
              <CardHeader className="flex flex-col">
                <CardTitle className="flex items-center gap-1">
                  <CaseLower width={24} height={24} />
                  {item.segurado.nome}
                </CardTitle>

                <CardDescription className="!mt-0 tracking-tight">
                  #{item.numero}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex flex-col gap-2">
                <Paragraph className="flex items-center gap-2">
                  <Trophy width={20} height={20} />
                  {formatCurrency(item.valorPremio)}
                </Paragraph>

                <Paragraph className="flex items-center gap-2">
                  <Mail width={20} height={20} />
                  {item.segurado.email}
                </Paragraph>

                <Paragraph className="flex items-center gap-2">
                  <ShieldAlert width={20} height={20} />
                  {item.segurado.cpfCnpj}
                </Paragraph>

                <Paragraph className="flex items-center gap-2">
                  <Hospital width={20} height={20} />: {item.coberturas[0].nome}
                  , {formatCurrency(item.coberturas[0].valor)}
                </Paragraph>
              </CardContent>

              <CardFooter className="flex gap-2 border-t pt-6">
                <Button
                  variant="outline"
                  onClick={(e) => handleUpdate(e, item.id)}
                >
                  <FilePenLine width={16} height={16} />
                </Button>

                <Button
                  variant="destructive"
                  onClick={(e) => handleDelete(e, item.id)}
                >
                  <Trash2 width={16} height={16} />
                </Button>
              </CardFooter>
            </Card>
          )
        })}
      </div>

      <DashboardPagination {...pagination} />
    </div>
  )
}
