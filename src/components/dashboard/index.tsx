'use client'

import {
  FilePenLine,
  Hospital,
  Mail,
  ShieldAlert,
  Trash2,
  Trophy,
  User as UserIcon,
} from 'lucide-react'

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { useCrud } from '@/hooks/useCrud'
import { usePagination } from '@/hooks/usePagination'
import { formatCurrency } from '@/modules/formatCurrency'
import { User } from '@/types/user'

import { H3 } from '../typography/h3'
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
      <div className="relative grid animate-fadeIn grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-6 xl:grid-cols-4">
        {pagination.currentItems.map((item) => {
          return (
            <Card key={item.id} className="flex flex-col">
              <CardHeader className="flex flex-row items-center gap-3 space-y-0 border-b px-6 py-4">
                <span className="rounded-full bg-slate-800 p-3 text-white">
                  <UserIcon width={24} height={24} />
                </span>

                <div className="flex flex-col">
                  <H3 className="flex flex-1 flex-col text-slate-800">
                    <span>{item.segurado.nome}</span>
                  </H3>

                  <Paragraph className="text-slate-600">
                    #{item.numero}
                  </Paragraph>
                </div>
              </CardHeader>

              <CardContent className="flex flex-1 flex-col gap-2 px-6 py-4">
                <Paragraph className="flex items-center gap-2 text-slate-600">
                  <Trophy width={20} height={20} />
                  Prêmio: {formatCurrency(item.valorPremio)}
                </Paragraph>

                <Paragraph className="flex items-center gap-2 text-slate-600">
                  <Mail width={20} height={20} />
                  Email: {item.segurado.email}
                </Paragraph>

                <Paragraph className="flex items-center gap-2 text-slate-600">
                  <ShieldAlert width={20} height={20} />
                  CPF/CNPJ: {item.segurado.cpfCnpj}
                </Paragraph>

                <Paragraph className="flex items-center gap-2 text-slate-600">
                  <Hospital width={20} height={20} /> Coberturas:{' '}
                  {item.coberturas[0].nome} (
                  {formatCurrency(item.coberturas[0].valor)})
                </Paragraph>
              </CardContent>

              <CardFooter className="flex gap-2 border-t px-6 py-4">
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
