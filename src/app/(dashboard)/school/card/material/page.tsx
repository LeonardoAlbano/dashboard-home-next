'use client'

import { ChevronLeft } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'

export default function MaterialSchool() {
  return (
    <main className="min-h-screen space-y-10 bg-sky-50 px-5 pt-10 lg:p-7">
      <section className="flex items-center gap-5">
        <ChevronLeft size={40} className="text-slate-800" />

        <p className="text-2xl font-semibold text-slate-800">
          Escola Professora Maria da Paz - <span>Fundamental</span>
        </p>
      </section>

      <section className="flex flex-row justify-between px-4">
        <h1 className="text-xl font-semibold text-slate-900">
          Lista de material escolar - fundamental I
        </h1>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="h-9 w-[180px] rounded-xl">
              + Adicionar items
            </Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader className="-mb-2">
              <DialogTitle className="text-md">
                Adicionar material à lista
              </DialogTitle>
            </DialogHeader>

            <Separator />

            <form className="mt-3">
              <div className="space-y-2">
                <Label htmlFor="name" className="ml-1 font-semibold">
                  Categoria<span className="text-red-500">*</span>
                </Label>
                <Input type="text" placeholder="Digite aqui" />
              </div>

              <div className="mt-6 flex justify-end gap-3">
                <Button
                  type="button"
                  variant="ghost"
                  className="font-semibold text-orange-500 transition-all hover:bg-orange-200 hover:text-orange-500"
                >
                  Cancelar
                </Button>

                <Button type="submit">Cadastrar</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </section>

      <section className="space-y-5">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            className="border-l-1 rounded-lg border border-orange-100 border-l-orange-500 bg-white p-4"
            key={i}
          >
            <p className="font-medium text-orange-500">Fundamental</p>
          </div>
        ))}
      </section>
    </main>
  )
}
