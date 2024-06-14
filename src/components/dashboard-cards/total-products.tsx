'use client'

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function TotalProducts() {
  return (
    <Card className="border-none shadow-sm">
      <CardHeader className="justify-center gap-y-2">
        <CardDescription className="text-lg font-medium text-zinc-800">
          Total
        </CardDescription>
        <CardTitle className="text-4xl font-bold text-zinc-800">100</CardTitle>
        <CardDescription className="text-sm font-medium text-zinc-800">
          Produtos
        </CardDescription>
      </CardHeader>
    </Card>
  )
}
