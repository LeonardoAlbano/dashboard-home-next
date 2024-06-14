'use client'

import { ArrowLeft, ArrowRight } from 'lucide-react'

import { Button } from '../ui/button'

export interface PaginationProps {
  pageIndex: number
  totalCount: number
  perPage: number
}

export function Pagination({
  pageIndex,
  perPage,
  totalCount,
}: PaginationProps) {
  const pages = Math.ceil(totalCount / perPage) || 1

  return (
    <div className="flex items-center justify-between rounded-lg bg-white py-1">
      <div className="">
        <Button
          variant="outline"
          className="bg-trasnparent border-none hover:bg-orange-100"
        >
          <ArrowLeft size={18} className="mr-2 text-orange-500" />
          <span className="font-medium text-orange-500">Anterior</span>
        </Button>
      </div>

      <div className="flex items-center gap-6 py-4 lg:gap-8">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="h-8 w-8 border-none bg-transparent p-0 hover:bg-orange-200 hover:text-orange-500"
          >
            <span>{pageIndex + 1}</span>
          </Button>

          <Button
            variant="outline"
            className="h-8 w-8 border-none bg-transparent p-0 hover:bg-orange-200 hover:text-orange-500"
          >
            <span>{pageIndex + 2}</span>
          </Button>

          <Button
            variant="outline"
            className="h-8 w-8 border-none bg-transparent p-0 hover:bg-orange-200 hover:text-orange-500"
          >
            <span>...</span>
          </Button>

          <Button
            variant="outline"
            className="h-8 w-8 border-none bg-transparent p-0 hover:bg-orange-200 hover:text-orange-500"
          >
            <span>{pageIndex + 9}</span>
          </Button>

          <Button
            variant="outline"
            className="h-8 w-8 border-none bg-transparent p-0 hover:bg-orange-200 hover:text-orange-500"
          >
            <span>{pageIndex + 10} </span>
          </Button>

          <Button
            variant="outline"
            className="h-8 w-8 border-none bg-transparent p-0 hover:bg-orange-200 hover:text-orange-500"
          >
            <span>{pages}</span>
          </Button>
        </div>
      </div>

      <div className="">
        <Button
          variant="outline"
          className="bg-trasnparent border-none hover:bg-orange-100"
        >
          <span className="font-medium text-orange-500">Próximo</span>
          <ArrowRight size={18} className="ml-2 text-orange-500" />
        </Button>
      </div>
    </div>
  )
}
