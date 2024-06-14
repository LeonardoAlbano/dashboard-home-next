'use client'

import { ListChecks } from 'lucide-react'

import { Card, CardHeader, CardTitle } from '@/components/ui/card'

export function SchoolListCard() {
  return (
    <Card className="border-none py-3 shadow-sm">
      <CardHeader className="space-y-7">
        <ListChecks size={60} className="text-yellow-500" />
        <CardTitle className="text-3xl text-zinc-800">
          Lista escolares
        </CardTitle>
      </CardHeader>
    </Card>
  )
}
