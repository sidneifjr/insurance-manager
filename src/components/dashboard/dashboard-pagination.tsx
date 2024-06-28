import { MouseEvent } from 'react'

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

type DashboardPaginationTypes = {
  currentPage: number
  totalPages: number
  handlePreviousPage: (e: MouseEvent<HTMLAnchorElement>) => void
  handleNextPage: (e: MouseEvent<HTMLAnchorElement>) => void
}

export function DashboardPagination({
  currentPage,
  totalPages,
  handlePreviousPage,
  handleNextPage,
}: DashboardPaginationTypes) {
  return (
    <Pagination className="flex-1">
      <PaginationContent className="flex gap-2">
        <PaginationItem className="tracking-tight">
          <PaginationPrevious
            data-testid="pagination-prev"
            className={
              currentPage - 1 > 0
                ? 'cursor-pointer text-slate-600'
                : 'pointer-events-none cursor-not-allowed text-gray-400'
            }
            onClick={(e) => handlePreviousPage(e)}
          />
        </PaginationItem>

        <PaginationItem className="flex gap-1 tracking-tight">
          <span data-testid="pagination-current-page">{currentPage}</span>out of{' '}
          <span data-testid="pagination-total-pages">{totalPages}</span>
        </PaginationItem>

        <PaginationItem className="tracking-tight">
          <PaginationNext
            data-testid="pagination-next"
            className={
              currentPage < totalPages
                ? 'cursor-pointer text-slate-600'
                : 'pointer-events-none cursor-not-allowed text-gray-400'
            }
            onClick={(e) => handleNextPage(e)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
