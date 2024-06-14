import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from './ui/button'
import { DialogContent, DialogHeader, DialogTitle } from './ui/dialog'
import { Input } from './ui/input'
import { Label } from './ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'
import { Separator } from './ui/separator'

const registerMaterialForm = z.object({
  id: z.string(),
  quantity: z.number(),
  category: z.enum(['book', 'pen']),
  subcategory: z.enum(['subjects', 'blue']),
})

type RegisterMaterialForm = z.infer<typeof registerMaterialForm>

export function RegisterMaterial() {
  const {
    register,
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm<RegisterMaterialForm>()

  async function handleRegisterMaterial(data: RegisterMaterialForm) {
    console.log(data)
    await new Promise((resolve) => setTimeout(resolve, 1000))
  }
  return (
    <DialogContent>
      <DialogHeader className="-mb-2">
        <DialogTitle className="text-md font-semibold text-slate-800">
          Adicionar material à lista
        </DialogTitle>
      </DialogHeader>

      <Separator orientation="horizontal" />

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
              render={({ field: { name, onChange, value, disabled } }) => (
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
                        <SelectItem value="subjects">10 matérias</SelectItem>
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
  )
}
