'use client'

import { Search, User2Icon } from 'lucide-react'

import { OrdersCard } from '@/components/dashboard-cards/cards/orders-card'
import { OrdersForDelivery } from '@/components/dashboard-cards/cards/orders-for-delivery'
import { SchoolListCard } from '@/components/dashboard-cards/cards/school-list-card'
import { StockCard } from '@/components/dashboard-cards/cards/stock-card'
import { TotalMinimumStock } from '@/components/dashboard-cards/cards/total-minimum-stock'
import { TotalNewClients } from '@/components/dashboard-cards/cards/total-new-clients'
import { TotalProducts } from '@/components/dashboard-cards/cards/total-products'
import { OrdersTable } from '@/components/TableOrders/orders-table'
import { OrderTableFilters } from '@/components/TableOrders/orders-table-filter'
import { Pagination } from '@/components/TableOrders/pagination'
import { Input } from '@/components/ui/input'

export default function Home() {
  return (
    <main className="bg-sky-50 pb-12 pt-20 lg:col-start-2 lg:ml-20 lg:pt-0">
      <div className="grid grid-cols-[1fr_200px] gap-3 bg-blue-900 p-6 shadow-md md:flex-row">
        <div className="flex w-full items-center gap-2 rounded-2xl border border-zinc-300 bg-white px-4 py-2 shadow-sm">
          <Input
            className="h-5 w-5 flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-black"
            placeholder="Pesquise aqui"
          />
          <Search className="h-5 w-5 text-blue-400" />
        </div>
        <div className="flex items-center gap-3 whitespace-nowrap px-6">
          <User2Icon className="text-white" size={34} />

          <span className="text-center text-lg font-medium text-white">
            Usuário ADM
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-4 p-4 lg:p-7">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-3">
          <OrdersCard />
          <StockCard />
          <SchoolListCard />
        </div>
      </div>

      <div className="flex flex-col gap-4 p-4 lg:p-7">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-2">
          <OrdersForDelivery />
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
              <TotalProducts />
              <TotalMinimumStock />
            </div>
            <TotalNewClients />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 p-4 lg:px-7">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight lg:text-3xl">
            Lista de pedidos
          </h1>
        </div>

        <div>
          <OrderTableFilters />
          <div className="border-b-4 border-zinc-400 bg-white">
            <OrdersTable />
          </div>

          <Pagination pageIndex={0} totalCount={105} perPage={10} />
        </div>
      </div>
    </main>
  )
}
