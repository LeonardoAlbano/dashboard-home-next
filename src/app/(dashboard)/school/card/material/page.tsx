'use client'

import { ChevronLeft, PictureInPicture, X as XIcon } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid' // Importa a biblioteca para gerar IDs únicos
import { z } from 'zod'

import { Pagination } from '@/components/TableOrders/pagination'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'

const registerMaterialForm = z.object({
  id: z.string(), // Campo ID único
  quantity: z.number(),
  category: z.enum(['book', 'pen']),
  subcategory: z.enum(['subjects', 'blue']),
})

type RegisterMaterialForm = z.infer<typeof registerMaterialForm>

export default function MaterialSchool() {
  const [items, setItems] = useState<RegisterMaterialForm[]>([])
  const [confirmDeleteItem, setConfirmDeleteItem] =
    useState<RegisterMaterialForm | null>(null)
  const [firstItemAdded, setFirstItemAdded] = useState(false)

  const {
    register,
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm<RegisterMaterialForm>()

  async function handleRegisterMaterial(data: RegisterMaterialForm) {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    const newItem = { ...data, id: uuidv4() } // Adiciona um ID único ao item
    setItems((prevItems) => [...prevItems, newItem])
    setFirstItemAdded(true)
  }

  function handleRemoveItem(item: RegisterMaterialForm) {
    setConfirmDeleteItem(item)
  }

  function confirmRemoveItem() {
    if (confirmDeleteItem) {
      setItems((prevItems) =>
        prevItems.filter((i) => i.id !== confirmDeleteItem.id),
      )
      setConfirmDeleteItem(null)
    }
  }

  return (
    <main className="min-h-screen space-y-10 bg-sky-50 px-5 pt-10 lg:p-7">
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
              + Adicionar items
            </Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader className="-mb-2">
              <DialogTitle className="text-md font-semibold text-slate-800">
                Adicionar material à lista
              </DialogTitle>
            </DialogHeader>

            <Separator />

            <form
              className="mt-3 space-y-4"
              onSubmit={handleSubmit(handleRegisterMaterial)}
            >
              <div className="flex w-full gap-6">
                <div className="w-1/2 space-y-2">
                  <Controller
                    name="category"
                    control={control}
                    render={({
                      field: { name, onChange, value, disabled },
                    }) => (
                      <>
                        <label
                          htmlFor="state"
                          className="ml-0.5 text-sm font-medium text-slate-800"
                        >
                          Categoria <span className="text-red-500">*</span>
                        </label>
                        <Select
                          name={name}
                          onValueChange={onChange}
                          value={value}
                          disabled={disabled}
                        >
                          <SelectTrigger className="h-8">
                            <SelectValue />
                          </SelectTrigger>

                          <SelectContent>
                            <div className="">
                              <SelectItem value="book">Caderno</SelectItem>
                              <SelectItem value="pen">Caneta</SelectItem>
                            </div>
                          </SelectContent>
                        </Select>
                      </>
                    )}
                  />
                </div>

                <div className="w-1/2 space-y-2">
                  <Controller
                    name="subcategory"
                    control={control}
                    render={({
                      field: { name, onChange, value, disabled },
                    }) => (
                      <>
                        <label
                          htmlFor="state"
                          className="ml-0.5 text-sm font-medium text-slate-800"
                        >
                          Subcategoria <span className="text-red-500">*</span>
                        </label>
                        <Select
                          name={name}
                          onValueChange={onChange}
                          value={value}
                          disabled={disabled}
                        >
                          <SelectTrigger className="h-8">
                            <SelectValue />
                          </SelectTrigger>

                          <SelectContent>
                            <div className="">
                              <SelectItem value="subjects">
                                10 matérias
                              </SelectItem>
                              <SelectItem value="blue">Azul</SelectItem>
                            </div>
                          </SelectContent>
                        </Select>
                      </>
                    )}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="quantity"
                  className="font-medium text-slate-800"
                >
                  Quantidade <span className="text-red-500">*</span>
                </Label>
                <Input
                  type="number"
                  id="quantity"
                  placeholder="Digite aqui"
                  {...register('quantity')}
                  className="h-9"
                />
              </div>

              <div className="mt-6 flex justify-end gap-3">
                <Button
                  type="button"
                  variant="ghost"
                  className="font-semibold text-orange-500 transition-all hover:bg-orange-200 hover:text-orange-500"
                >
                  Cancelar
                </Button>

                <Button type="submit" disabled={isSubmitting}>
                  Cadastrar
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </section>

      <section className="space-y-5">
        {items.length === 0 && !firstItemAdded && (
          <div className="font-semibold text-slate-800">
            Você não possui itens cadastrados. Para cadastrar 1 item, clique no
            botão do canto superior direito.
          </div>
        )}

        {items.map((item) => (
          <div
            className="border-l-1 flex items-center justify-between rounded-lg border border-sky-100 bg-sky-100 p-4"
            key={item.id} // Use o ID único como chave
          >
            <div className="flex gap-2">
              <PictureInPicture />
              <p className="text-slate-800">
                {`Caderno ${item.subcategory} | Livros e cadernos - Universitários`}
              </p>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="ghost"
                  className="group rounded-full hover:bg-orange-100"
                >
                  <XIcon
                    size={16}
                    className="text-slate-800 group-hover:text-orange-600"
                    onClick={() => handleRemoveItem(item)}
                  />
                </Button>
              </DialogTrigger>

              <DialogContent className="w-[360px] px-6">
                <DialogHeader className="space-y-5">
                  <DialogTitle className="text-md font-semibold text-slate-800">
                    Remover item
                  </DialogTitle>

                  <DialogDescription className="text-normal text-slate-800">
                    Você realmente deseja remover este item? Essa ação não pode
                    ser desfeita
                  </DialogDescription>

                  <div className="grid-row mt-4 grid gap-3">
                    <Button
                      type="button"
                      onClick={confirmRemoveItem}
                      disabled={isSubmitting}
                      className="h-8 rounded-xl"
                    >
                      Sim, remover
                    </Button>

                    <Button
                      type="button"
                      onClick={() => setConfirmDeleteItem(null)}
                      variant="ghost"
                      className="h-8 rounded-xl font-semibold text-orange-500 transition-all hover:bg-orange-200 hover:text-orange-500"
                    >
                      Não remover
                    </Button>
                  </div>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        ))}
      </section>

      <section>
        <Pagination pageIndex={0} totalCount={105} perPage={10} />
      </section>
    </main>
  )
}
