import { EllipsisVertical } from 'lucide-react'
import Link from 'next/link' // Importe o Link do Next.js

import { Card, CardContent, CardHeader } from '../ui/card'

export function RegisterSchoolCard() {
  return (
    <Link href="/school/card">
      <Card className="max-w-[740px] rounded-xl border-none bg-blue-100 shadow-sm md:max-w-[550px]">
        <CardHeader className="flex flex-row items-center justify-between pb-20">
          <span>Imagem escola</span>
          <EllipsisVertical size={20} className="text-slate-800" />
        </CardHeader>
        <CardContent className="flex flex-col gap-1">
          <h1 className="text-xl font-semibold text-slate-800">
            Nome da escola
          </h1>
          <span className="text-md text-slate-900">Salvador - BA</span>
        </CardContent>
      </Card>
    </Link>
  )
}
