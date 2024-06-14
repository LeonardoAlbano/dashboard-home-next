import { RegisterSchool } from '@/components/register-school'
import { RegisterSchoolCard } from '@/components/school-cards/register-school-card'
import { Pagination } from '@/components/TableOrders/pagination'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'

export default function SchoolDashboard() {
  return (
    <main className="min-h-screen space-y-8 bg-sky-100 px-5 pt-10 lg:p-7">
      <section className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-slate-800">Escolas</h1>

        <Dialog>
          <DialogTrigger asChild>
            <Button>+ Cadastrar escola</Button>
          </DialogTrigger>

          <RegisterSchool />
        </Dialog>
      </section>

      <Separator orientation="horizontal" className="text-slate-900" />

      <section>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 12 }).map((_, i) => {
            return <RegisterSchoolCard key={i} />
          })}
        </div>
      </section>

      <section className="">
        <Pagination pageIndex={0} totalCount={105} perPage={10} />
      </section>
    </main>
  )
}
