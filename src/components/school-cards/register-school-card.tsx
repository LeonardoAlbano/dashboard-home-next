'use client'

import { EllipsisVertical } from 'lucide-react'
import Link from 'next/link'

import ActionSchoolCard from '../action-school-card'
import { Button } from '../ui/button'
import { Card, CardContent, CardHeader } from '../ui/card'
import { Dialog, DialogTrigger } from '../ui/dialog'

interface School {
  SchoolName: string
  photo: string
  city: string
  state: string
}

interface RegisterSchoolCardProps {
  school: School
}

export function RegisterSchoolCard({ school }: RegisterSchoolCardProps) {
  return (
    <Card className="max-w-[740px] rounded-xl border-none bg-blue-100 shadow-sm md:max-w-[550px]">
      <CardHeader className="flex flex-row items-center justify-between pb-20">
        <span>Imagem escola</span>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="ghost" className='hover:bg-orange-100 group '>
              <EllipsisVertical size={20} className="text-slate-800 group-hover:text-orange-500 " />
            </Button>
          </DialogTrigger>

          <ActionSchoolCard />
        </Dialog>
      </CardHeader>
      <Link href="school/card">
        <CardContent className="flex flex-col gap-1">
          <h1 className="text-xl font-semibold text-slate-800">
            {school.SchoolName}
          </h1>
          <span className="text-md text-slate-900">{`${school.city} - ${school.state}`}</span>
        </CardContent>
      </Link>
    </Card>
  )
}
