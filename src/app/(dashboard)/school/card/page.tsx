'use client'

import { ChevronLeft, EllipsisVertical, Trash2Icon } from 'lucide-react'
import Link from 'next/link'
import { FormEvent, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'

export default function MaterialDashboard() {
  const [series, setSeries] = useState<string[]>([])
  const [hasSeries, setHasSeries] = useState(false)

  const handleAddSeries = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const target = event.target as typeof event.target & {
      name: { value: string }
    }

    const newSeries = target.name.value.trim()

    if (newSeries) {
      setSeries([...series, newSeries])
      setHasSeries(true)
      target.name.value = ''
    }
  }

  return (
    <main className="min-h-screen·space-y-6·bg-fund px-5 pt-10 lg:p-7">
      <section className="flex items-center justify-between">
        <Link href="/school">
          <ChevronLeft size={40} className="text-slate-800" />
        </Link>
      </section>

      <section className="pb-8">
        <Card className="w-full rounded-xl border-none bg-blue-100 p-5 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between px-0 pb-12">
            <span className="ml-7">Imagem escola</span>
            <EllipsisVertical size={20} className="text-slate-800" />
          </CardHeader>
          <CardContent className="flex flex-col gap-1 pb-6">
            <h1 className="text-xl font-semibold text-slate-800">
              Nome da escola
            </h1>
            <span className="text-md text-slate-900">Salvador - BA</span>
          </CardContent>
          <div className="flex items-center justify-end">
            <Button className="flex gap-1" type="submit">
              <Trash2Icon />
              Excluir escola
            </Button>
          </div>
        </Card>
      </section>

      <section className="flex flex-row justify-between">
        <h1 className="text-3xl font-bold text-slate-900">Séries</h1>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="h-9 w-[180px] rounded-xl">
              + Cadastrar série
            </Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader className="-mb-2">
              <DialogTitle className="text-md">Cadastrar série</DialogTitle>
            </DialogHeader>

            <Separator />

            <form className="mt-2" onSubmit={handleAddSeries}>
              <div className="space-y-2">
                <Label htmlFor="name" className="ml-0.5">
                  Nome da série<span className="text-red-500">*</span>
                </Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Digite aqui"
                />
              </div>

              <div className="mt-6 flex justify-end gap-3">
                <DialogClose>
                  <Button
                    type="button"
                    variant="ghost"
                    className="font-semibold text-orange-500 transition-all hover:bg-orange-200 hover:text-orange-500"
                  >
                    Cancelar
                  </Button>
                </DialogClose>

                <Button type="submit">Cadastrar</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </section>

      <section className="space-y-5">
        {!hasSeries && (
          <div className="border-none bg-transparent">
            <p className="font-semibold text-slate-800">
              Você não possui séries cadastradas.
            </p>
          </div>
        )}

        {series.map((serie, index) => (
          <Link
            href={`/school/card/material`}
            key={index}
            className="flex flex-col"
          >
            <div className="border-l-1 rounded-lg border border-orange-100 border-l-orange-500 bg-white p-4">
              <p className="font-medium text-orange-500">{serie}</p>
            </div>
          </Link>
        ))}
      </section>
    </main>
  )
}
