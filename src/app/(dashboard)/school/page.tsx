'use client'
import React, { useState } from 'react'

import { RegisterSchool } from '@/components/register-school'
import { RegisterSchoolCard } from '@/components/school-cards/register-school-card'
import { Pagination } from '@/components/TableOrders/pagination'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'

interface School {
  SchoolName: string
  photo: string
  city: string
  state: string
}

const SchoolDashboard: React.FC = () => {
  const [schools, setSchools] = useState<School[]>([])

  const addSchool = (newSchool: School) => {
    setSchools((prevSchools) => [...prevSchools, newSchool])
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-grow space-y-8 bg-sky-100 px-5 pt-10 lg:p-7">
        <section className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-slate-800">Escolas</h1>
          <Dialog>
            <DialogTrigger asChild>
              <Button>+ Cadastrar escola</Button>
            </DialogTrigger>
            <RegisterSchool onAddSchool={addSchool} />
          </Dialog>
        </section>
        <Separator orientation="horizontal" className="text-slate-900" />
        <section>
          {schools.length === 0 ? (
            <p className="text-slate-600">
              Você não possui escolas cadastradas, basta clicar no botão no
              canto superior direito.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {schools.map((school, i) => (
                <RegisterSchoolCard key={i} school={school} />
              ))}
            </div>
          )}
        </section>
      </main>
      <footer className="px-5 py-5">
        <Pagination pageIndex={0} totalCount={105} perPage={10} />
      </footer>
    </div>
  )
}

export default SchoolDashboard
