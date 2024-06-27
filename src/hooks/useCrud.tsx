import { useRouter } from 'next/navigation'
import { MouseEvent, useState } from 'react'
import { toast } from 'sonner'

import { createItem } from '@/api/createItem'
import { deleteItem } from '@/api/deleteItem'
import { updateItem } from '@/api/updateItem'
import { User } from '@/types/user'

type useCrudTypes = {
  data: User[]
}

export function useCrud(data?: useCrudTypes[]) {
  const [apiData, setApiData] = useState(data)
  const router = useRouter()

  async function handleCreate(value: {
    numero: string
    valorPremio: string
    nome: string
    email: string
    cpfCNPJ: string
    coberturas: string
  }) {
    await createItem(value)

    router.refresh()

    toast.success('Item has been successfully added to the database!')
  }

  async function handleDelete(
    e: MouseEvent<HTMLButtonElement>,
    userId: string,
  ) {
    e.preventDefault()

    const removeDeletedItemFromArray = apiData?.filter(
      (item) => item.id !== userId,
    )

    await deleteItem(userId)
    setApiData(removeDeletedItemFromArray)
    toast.error('Item has been deleted from database.')
  }

  async function handleUpdate(
    e: MouseEvent<HTMLButtonElement>,
    userId: string,
  ) {
    e.preventDefault()

    await updateItem(userId)
    router.refresh()
    toast.info('Item has been updated in the database.')
  }

  return { apiData, handleCreate, handleDelete, handleUpdate }
}
