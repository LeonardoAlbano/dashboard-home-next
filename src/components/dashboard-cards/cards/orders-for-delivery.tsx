'use client'

import { LogoStockMen } from '@/assets/logo-stock-men'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function OrdersForDelivery() {
  return (
    <Card className="item-center flex border-none p-4 shadow-sm">
      <CardContent className="flex">
        <LogoStockMen />
      </CardContent>
      <CardHeader className="flex flex-col justify-center gap-y-4">
        <CardDescription className="text-md font-medium text-zinc-800">
          Hoje
        </CardDescription>
        <CardTitle className="text-5xl font-bold text-zinc-800">100</CardTitle>
        <CardDescription className="text-sm font-medium text-zinc-800">
          Pedidos para entregas
        </CardDescription>
      </CardHeader>
    </Card>
  )
}
