// RegisterMaterialItems.tsx
'use client'

import { Controller, useForm } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
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
  id: z.string(),
  quantity: z.number(),
  category: z.enum(['caderno', 'caneta']),
  subcategory: z.enum(['10 materias', 'azul']),
})

type RegisterMaterialForm = z.infer<typeof registerMaterialForm>

interface RegisterMaterialItemsProps {
  onAddItem: (item: RegisterMaterialForm) => void
}

export default function RegisterMaterialItems({
  onAddItem,
}: RegisterMaterialItemsProps) {
  const {
    register,
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm<RegisterMaterialForm>()

  async function handleRegisterMaterial(data: RegisterMaterialForm) {
    await new Promise((resolve) => setTimeout(resolve, 200))
    const newItem = { ...data, id: uuidv4() }
    onAddItem(newItem)
  }

  return (
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
              render={({ field: { name, onChange, value, disabled } }) => (
                <>
                  <label
                    htmlFor="category"
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
                      <SelectItem value="caderno">Caderno</SelectItem>
                      <SelectItem value="caneta">Caneta</SelectItem>
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
              render={({ field: { name, onChange, value, disabled } }) => (
                <>
                  <label
                    htmlFor="subcategory"
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
                      <SelectItem value="10 materias">10 matérias</SelectItem>
                      <SelectItem value="azul">Azul</SelectItem>
                    </SelectContent>
                  </Select>
                </>
              )}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="quantity" className="font-medium text-slate-800">
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
          <DialogClose asChild>
            <Button
              type="button"
              variant="ghost"
              className="font-semibold text-orange-500 transition-all hover:bg-orange-200 hover:text-orange-500"
            >
              Cancelar
            </Button>
          </DialogClose>

          <Button type="submit" disabled={isSubmitting}>
            Cadastrar
          </Button>
        </div>
      </form>
    </DialogContent>
  )
}
