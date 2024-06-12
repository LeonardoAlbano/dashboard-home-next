'use client'

import { Table, TableBody, TableHead, TableHeader, TableRow } from '../ui/table'
import { OrderTableRow } from './orders-table-row'

export function OrdersTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow className="bg-zinc-100">
          <TableHead className="text-center font-bold text-zinc-950">
            Núm. Pedido
          </TableHead>
          <TableHead className="text-center font-bold text-zinc-950">
            Valor
          </TableHead>
          <TableHead className="text-center font-bold text-zinc-950">
            Data
          </TableHead>
          <TableHead className="text-center font-bold text-zinc-950">
            Forma de pagamento
          </TableHead>
          <TableHead className="text-center font-bold text-zinc-950">
            Status
          </TableHead>
          <TableHead className="text-center font-bold text-zinc-950">
            Ação
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Array.from({ length: 10 }).map((_, i) => {
          return <OrderTableRow key={i} />
        })}
      </TableBody>
    </Table>
  )
}
