'use client'

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function TotalMinimumStock() {
  return (
    <Card className="border-none shadow-sm">
      <CardHeader className="justify-center gap-y-2">
        <CardDescription className="text-lg font-medium text-zinc-800">
          Total
        </CardDescription>
        <CardTitle className="text-4xl font-bold text-red-600">2</CardTitle>
        <CardDescription className="text-md font-medium text-zinc-800">
          Estoque mínimo
        </CardDescription>
      </CardHeader>
    </Card>
  )
}
