'use client'

import { EllipsisVertical } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import ActionSchoolCard from '../action-school-card'
import { Button } from '../ui/button'
import { Card, CardContent, CardHeader } from '../ui/card'
import { DropdownMenu, DropdownMenuTrigger } from '../ui/dropdown-menu'

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
    <Card className="flex max-w-[740px] justify-between rounded-xl border-none bg-blue-100 shadow-sm md:max-w-[550px]">
      <Link href="school/card" className="w-full">
        <CardHeader className="flex flex-row items-center justify-between pb-20">
          <div className="relative h-28 w-28">
            <Image
              src={school.photo}
              alt={school.SchoolName}
              className="rounded-2xl object-cover"
            />
          </div>
        </CardHeader>

        <CardContent className="flex flex-col gap-1">
          <h1 className="text-xl font-semibold text-slate-800">
            {school.SchoolName}
          </h1>
          <span className="text-md text-slate-900">{`${school.city} - ${school.state}`}</span>
        </CardContent>
      </Link>

      <div className="mr-5 h-20 border px-0 py-5">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="group h-12 w-12 rounded-full hover:bg-orange-100"
            >
              <EllipsisVertical className="text-slate-800 group-hover:text-orange-500" />
            </Button>
          </DropdownMenuTrigger>

          <ActionSchoolCard />
        </DropdownMenu>
      </div>
    </Card>
  )
}
