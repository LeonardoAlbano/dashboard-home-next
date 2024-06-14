'use client'

import { Box } from 'lucide-react'

import { Card, CardHeader, CardTitle } from '@/components/ui/card'

export function StockCard() {
  return (
    <Card className="border-none py-3 shadow-sm">
      <CardHeader className="space-y-7">
        <Box size={60} className="text-green-500" />
        <CardTitle className="text-3xl text-zinc-800"> Estoque </CardTitle>
      </CardHeader>
    </Card>
  )
}
