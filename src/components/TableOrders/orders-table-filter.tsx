'use client'

import { CalendarDays, FilterIcon, Search } from 'lucide-react'

import { Button } from '../ui/button'
import { Dialog, DialogTrigger } from '../ui/dialog'
import { Input } from '../ui/input'
import { OrderDetailsFilters } from './orders-details-filters'

export function OrderTableFilters() {
  return (
    <div className="">
      <form action="" className="flex items-center justify-center gap-5 pb-6">
        <div className="flex w-full items-center gap-2 rounded-2xl border border-zinc-300 bg-white px-4 py-2 shadow-sm">
          <Input
            className="h-5 w-5 flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-black"
            placeholder="Pesquise aqui"
          />
          <Search className="h-5 w-5 text-blue-400" />
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="h-9 lg:w-[180px]">
              <FilterIcon size={20} className="mr-2 hidden lg:block" />
              <CalendarDays size={20} className="block lg:hidden" />
              <span className="mr-2 hidden lg:block">Filtrar</span>
            </Button>
          </DialogTrigger>

          <OrderDetailsFilters />
        </Dialog>
      </form>
    </div>
  )
}
