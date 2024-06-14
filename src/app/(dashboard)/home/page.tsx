'use client'

import { OrdersCard } from '@/components/dashboard-cards/orders-card'
import { OrdersForDelivery } from '@/components/dashboard-cards/orders-for-delivery'
import { SchoolListCard } from '@/components/dashboard-cards/school-list-card'
import { StockCard } from '@/components/dashboard-cards/stock-card'
import { TotalMinimumStock } from '@/components/dashboard-cards/total-minimum-stock'
import { TotalNewClients } from '@/components/dashboard-cards/total-new-clients'
import { TotalProducts } from '@/components/dashboard-cards/total-products'
import { OrdersTable } from '@/components/TableOrders/orders-table'
import { OrderTableFilters } from '@/components/TableOrders/orders-table-filter'
import { Pagination } from '@/components/TableOrders/pagination'

export default function HomeDashboard() {
  return (
    <main className="p-4 lg:p-7">
      <section className="flex flex-col gap-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-3">
          <OrdersCard />
          <StockCard />
          <SchoolListCard />
        </div>
      </section>

      <section className="mt-4 flex flex-col gap-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-2">
          <OrdersForDelivery />
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <TotalProducts />
              <TotalMinimumStock />
            </div>
            <TotalNewClients />
          </div>
        </div>
      </section>

      <section className="mt-4 flex flex-col gap-4 lg:px-7">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight text-slate-800 lg:text-3xl">
            Lista de pedidos
          </h1>
        </div>

        <div>
          <OrderTableFilters />
          <div className="border-b-4 border-slate-400 bg-white">
            <OrdersTable />
          </div>

          <Pagination pageIndex={0} totalCount={105} perPage={10} />
        </div>
      </section>
    </main>
  )
}
