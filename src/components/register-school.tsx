/* eslint-disable jsx-a11y/alt-text */
import { Image } from 'lucide-react'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

import {
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

import { Button } from './ui/button'
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

const schoolNameErrorMenssage = 'Máximo de 255 caracteres'

const registerSchoolForm = z.object({
  SchoolName: z
    .string()
    .min(1, 'Nome da escola é obrigatório')
    .max(255, schoolNameErrorMenssage),
  photo: z.string(),
  city: z.enum(['Salvador', 'São Paulo', 'Rio de Janeiro']),
  state: z.enum(['BA', 'SP', 'RJ']),
})

type RegisterSchoolForm = z.infer<typeof registerSchoolForm>

interface RegisterSchoolProps {
  onAddSchool: (school: RegisterSchoolForm) => void
}

export function RegisterSchool({ onAddSchool }: RegisterSchoolProps) {
  const {
    register,
    handleSubmit,
    control,
    formState: { isSubmitting, errors },
  } = useForm<RegisterSchoolForm>()

  async function handleRegisterSchool(data: RegisterSchoolForm) {
    await new Promise((resolve) => setTimeout(resolve, 500))
    onAddSchool(data)
  }

  return (
    <DialogContent className="max-w-[600px]">
      <DialogHeader>
        <DialogTitle className="text-start">Cadastrar escola</DialogTitle>
      </DialogHeader>

      <Separator orientation="horizontal" />

      <form
        action=""
        className="flex w-full flex-col gap-8"
        onSubmit={handleSubmit(handleRegisterSchool)}
      >
        <div className="text-lg">
          <Label htmlFor="SchoolName" className="ml-0.5">
            Nome da escola<span className="text-red-500">*</span>
          </Label>
          <Input
            id="SchoolName"
            type="text"
            placeholder="Digite o nome da escola"
            {...register('SchoolName', {
              required: 'Nome da escola é obrigatório',
            })}
          />
          {errors.SchoolName && (
            <span className="ml-1 mt-2 flex text-sm text-red-500">
              {errors.SchoolName.message}
            </span>
          )}
        </div>

        <div className="text-lg">
          <Label htmlFor="photo" className="ml-0.5 space-y-1">
            Foto (máximo 5MB)<span className="text-red-500">*</span>
            <div className="flex h-36 cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-dotted border-orange-500 bg-orange-200">
              <Image className="text-orange-600" size={22} />
              <span className="text-orange-600">Clique para adicionar</span>
            </div>
            <Input
              type="file"
              className="sr-only"
              id="photo"
              {...register('photo')}
            />
          </Label>

          <span className="ml-1 text-xs">
            Faça o upload da imagem com no máximo 5MB
          </span>
        </div>

        <div className="flex w-full gap-6">
          <div className="w-1/2">
            <Controller
              name="city"
              control={control}
              render={({ field: { name, onChange, value, disabled } }) => (
                <>
                  <label htmlFor="city" className="text-sm font-semibold">
                    Cidade <span className="text-red-500">*</span>
                  </label>
                  <Select
                    name={name}
                    onValueChange={onChange}
                    value={value}
                    disabled={disabled}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>

                    <SelectContent>
                      <div className="">
                        <SelectItem value="Salvador">Salvador</SelectItem>
                        <SelectItem value="São Paulo">São Paulo</SelectItem>
                        <SelectItem value="Rio de Janeiro">
                          Rio de Janeiro
                        </SelectItem>
                      </div>
                    </SelectContent>
                  </Select>
                </>
              )}
            />
          </div>

          <div className="w-1/2">
            <Controller
              name="state"
              control={control}
              render={({ field: { name, onChange, value, disabled } }) => (
                <>
                  <label htmlFor="state" className="text-sm font-semibold">
                    Estado <span className="text-red-500">*</span>
                  </label>
                  <Select
                    name={name}
                    onValueChange={onChange}
                    value={value}
                    disabled={disabled}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>

                    <SelectContent>
                      <div className="">
                        <SelectItem value="BA">Bahia</SelectItem>
                        <SelectItem value="SP">São Paulo</SelectItem>
                        <SelectItem value="RJ">Rio de Janeiro</SelectItem>
                      </div>
                    </SelectContent>
                  </Select>
                </>
              )}
            />
          </div>
        </div>
        <Separator />
        <div className="ml-auto flex gap-3">
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
