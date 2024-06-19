// MaterialSchool.tsx
'use client'

import { ChevronLeft, PictureInPicture, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { z } from 'zod'

import RegisterMaterialItems from '@/components/register-material-items'
import { Pagination } from '@/components/TableOrders/pagination'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

const registerMaterialForm = z.object({
  id: z.string(),
  quantity: z.number(),
  category: z.enum(['caderno', 'caneta']),
  subcategory: z.enum(['10 materias', 'azul']),
})

type RegisterMaterialForm = z.infer<typeof registerMaterialForm>

export default function MaterialSchool() {
  const [items, setItems] = useState<RegisterMaterialForm[]>([])
  const [, setConfirmDeleteItem] = useState<RegisterMaterialForm | null>(null)
  const [firstItemAdded, setFirstItemAdded] = useState(false)

  function handleAddItem(item: RegisterMaterialForm) {
    setItems((prevItems) => [...prevItems, item])
    setFirstItemAdded(true)
  }

  function confirmRemoveItem(item: RegisterMaterialForm) {
    setItems((prevItems) => prevItems.filter((i) => i.id !== item.id))
    setConfirmDeleteItem(null)
  }

  return (
    <div className="bg-fund">
      <main className="min-h-screen space-y-10 px-5 pt-10 lg:p-7">
        <section className="flex items-center gap-5 pb-8">
          <Link href="/school/card">
            <ChevronLeft size={40} className="text-slate-800" />
          </Link>
          <p className="text-2xl font-semibold text-slate-800">
            Escola Professora Maria da Paz - <span>Fundamental</span>
          </p>
        </section>

        <section className="flex flex-row items-center justify-between px-1">
          <h1 className="text-xl font-bold text-slate-900">
            Lista de material escolar - fundamental I
          </h1>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="h-9 w-[180px] rounded-xl">
                + Adicionar itens
              </Button>
            </DialogTrigger>

            <RegisterMaterialItems onAddItem={handleAddItem} />
          </Dialog>
        </section>

        <section className="space-y-5">
          {items.length === 0 && !firstItemAdded && (
            <div className="font-semibold text-slate-800">
              Você não possui itens cadastrados. Para cadastrar 1 item, clique
              no botão do canto superior direito.
            </div>
          )}

          {items.map((item) => (
            <div
              className="border-l-1 flex items-center justify-between rounded-lg border border-sky-100 bg-sky-100 p-4"
              key={item.id}
            >
              <div className="flex gap-2">
                <PictureInPicture />
                <p className="text-slate-800">{`${item.category} ${item.subcategory}`}</p>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="ghost"
                    className="group rounded-full hover:bg-orange-100"
                  >
                    <X
                      size={16}
                      className="text-slate-800 group-hover:text-orange-600"
                    />
                  </Button>
                </DialogTrigger>

                <DialogContent className="w-[380px]">
                  <DialogHeader className="space-y-6">
                    <DialogTitle className="text-md font-semibold text-slate-800">
                      Remover item
                    </DialogTitle>
                    <DialogDescription className="text-normal pb-2 text-slate-800">
                      Você realmente deseja remover este item? Esta ação não
                      pode ser desfeita.
                    </DialogDescription>
                    <div className="grid grid-cols-2 gap-2">
                      <Button
                        type="button"
                        onClick={() => confirmRemoveItem(item)}
                        className="col-span-2 h-8 rounded-xl"
                      >
                        Sim, remover
                      </Button>
                      <DialogClose asChild>
                        <Button
                          type="button"
                          variant="ghost"
                          className="col-span-2 h-8 rounded-xl font-semibold text-orange-500 transition-all hover:bg-orange-200 hover:text-orange-500"
                        >
                          Não remover
                        </Button>
                      </DialogClose>
                    </div>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          ))}
        </section>
      </main>
      <footer className="p-5">
        <Pagination pageIndex={0} totalCount={105} perPage={10} />
      </footer>
    </div>
  )
}
