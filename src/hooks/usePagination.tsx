import { MouseEvent, useState } from 'react'

import { User } from '@/types/user'

type PaginationTypes = User[]

export function usePagination(data: PaginationTypes) {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)

  const totalPages = Math.ceil(data.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentItems = data.slice(startIndex, endIndex)

  function handlePreviousPage(e: MouseEvent<HTMLAnchorElement>) {
    e.preventDefault()

    if (currentPage - 1 > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  function handleNextPage(e: MouseEvent<HTMLAnchorElement>) {
    e.preventDefault()

    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  return {
    currentPage,
    itemsPerPage,
    setItemsPerPage,
    totalPages,
    startIndex,
    endIndex,
    currentItems,
    handlePreviousPage,
    handleNextPage,
  }
}
