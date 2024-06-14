'use client'

/* eslint-disable jsx-a11y/alt-text */
import { Image } from 'lucide-react'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

import {
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

const registerSchoolForm = z.object({
  SchoolName: z.string(),
  photo: z.string(),
  city: z.enum(['processing', 'delivery']),
  state: z.enum(['processing', 'delivery']),
})

type RegisterSchoolForm = z.infer<typeof registerSchoolForm>

export function RegisterSchool() {
  const {
    register,
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm<RegisterSchoolForm>()

  async function handleRegisterPassword(data: RegisterSchoolForm) {
    console.log(data)
    await new Promise((resolve) => setTimeout(resolve, 1000))
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
        onSubmit={handleSubmit(handleRegisterPassword)}
      >
        <div className="text-lg">
          <Label htmlFor="SchoolName" className="ml-0.5">
            Nome da escola<span className="text-red-500">*</span>
          </Label>
          <Input
            id="SchoolName"
            type="text"
            placeholder="Digite o nome da escola"
            {...register('SchoolName')}
          />
        </div>

        <div className="text-lg">
          <Label htmlFor="photo" className="ml-0.5 space-y-1">
            Foto (máximo 5MB)<span className="text-red-500">*</span>
            <div className="flex h-36 cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-dotted border-orange-500 bg-orange-200">
              <Image className="text-orange-600" size={22} />
              <span className="text-orange-600">Clique para adiconar</span>
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
                        <SelectItem value="processing">
                          Em preparação
                        </SelectItem>
                        <SelectItem value="delivery">Entregue</SelectItem>
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
                        <SelectItem value="processing">
                          Em preparação
                        </SelectItem>
                        <SelectItem value="delivery">Entregue</SelectItem>
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