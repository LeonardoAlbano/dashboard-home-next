'use client'

/* eslint-disable jsx-a11y/alt-text */
import { ChevronLeft, Image, Pencil, Trash2 } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const registerCategoryForm = z.object({
  photo: z.string(),
  title: z.string(),
})

type RegisterCategoryForm = z.infer<typeof registerCategoryForm>

interface Category {
  photo: string
  title: string
}

export default function SchoolDashboard() {
  const [categories, setCategories] = useState<Category[]>([])

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<RegisterCategoryForm>()

  async function handleRegisterCategory(data: RegisterCategoryForm) {
    console.log(data)
    await new Promise((resolve) => setTimeout(resolve, 500))
    setCategories((prevCategories) => [...prevCategories, data])
  }

  return (
    <section className="space-y-6 pt-8">
      <div className="flex justify-between">
        <div className="flex items-center">
          <ChevronLeft className="text-slate-800" />
          <h1 className="text-2xl font-semibold text-slate-800">Categorias</h1>
        </div>

        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="h-8 w-32 rounded-xl font-normal">
                + Nova
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40 space-y-2">
              <DropdownMenuLabel className="text-md text-slate-800">
                Nova
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <Dialog>
                  <DialogTrigger asChild className="w-full hover:bg-slate-200">
                    <Button
                      variant="ghost"
                      className="flex justify-start text-slate-800"
                    >
                      Categoria
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="w-[400px]">
                    <DialogHeader>
                      <DialogTitle className="pb-2 text-slate-800">
                        Cadastrar categoria
                      </DialogTitle>
                    </DialogHeader>
                    <div>
                      <form
                        action=""
                        className="space-y-7"
                        onSubmit={handleSubmit(handleRegisterCategory)}
                      >
                        <div className="text-lg">
                          <Label
                            htmlFor="photo"
                            className="ml-0.5 space-y-1 text-slate-800"
                          >
                            Foto (máximo 5MB)
                            <span className="text-red-500">*</span>
                            <div className="flex h-48 cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-dotted border-orange-500 bg-orange-200">
                              <Image className="text-orange-600" size={22} />
                              <span className="text-orange-600">
                                Clique para adicionar
                              </span>
                            </div>
                            <Input
                              type="file"
                              className="sr-only"
                              id="photo"
                              {...register('photo')}
                            />
                          </Label>
                        </div>

                        <div>
                          <Label
                            htmlFor="title"
                            className="ml-0.5 text-slate-800"
                          >
                            Título<span className="text-red-500">*</span>{' '}
                          </Label>
                          <Input
                            id="title"
                            placeholder="Digite o título aqui"
                            {...register('title')}
                          />
                        </div>

                        <div>
                          <Button
                            className="text-md w-full rounded-xl"
                            type="submit"
                            disabled={isSubmitting}
                          >
                            Cadastrar
                          </Button>
                        </div>
                      </form>
                    </div>
                  </DialogContent>
                </Dialog>
              </DropdownMenuGroup>

              <DropdownMenuGroup>
                <Dialog>
                  <DialogTrigger asChild className="w-full hover:bg-slate-200">
                    <Button
                      variant="ghost"
                      className="flex justify-start text-slate-800"
                    >
                      Subcategoria
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="w-[400px]">
                    <DialogHeader>
                      <DialogTitle className="pb-2 text-slate-800">
                        Cadastrar subcategoria
                      </DialogTitle>
                    </DialogHeader>
                    <div>
                      <form action="" className="space-y-7">
                        <div className="text-lg">
                          <Label
                            htmlFor="photo"
                            className="ml-0.5 space-y-1 text-slate-800"
                          >
                            Foto (máximo 5MB)
                            <span className="text-red-500">*</span>
                            <div className="flex h-48 cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-dotted border-orange-500 bg-orange-200">
                              <Image className="text-orange-600" size={22} />
                              <span className="text-orange-600">
                                Clique para adicionar
                              </span>
                            </div>
                            <Input type="file" className="sr-only" id="photo" />
                          </Label>
                        </div>

                        <div className="space-y-2">
                          <Label
                            htmlFor="subtitle"
                            className="ml-0.5 text-slate-800"
                          >
                            Título subcategoria
                            <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="subtitle"
                            placeholder="Digite o título aqui"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label
                            htmlFor="title"
                            className="ml-0.5 text-slate-800"
                          >
                            Categoria relacionada
                            <span className="text-red-500">*</span>
                          </Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione uma opção" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="light">Light</SelectItem>
                              <SelectItem value="dark">Dark</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Button className="text-md w-full rounded-xl">
                            Cadastrar subcategoria
                          </Button>
                        </div>
                      </form>
                    </div>
                  </DialogContent>
                </Dialog>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div>
        <div className="space-y-5">
          <Accordion type="single" collapsible className="space-y-5">
            {categories.map((category, index) => (
              <AccordionItem
                value={`item-${index}`}
                key={index}
                className="space-y-3"
              >
                <AccordionTrigger className="h-20 rounded-xl border-none bg-slate-100 px-4">
                  <div className="flex w-full items-center justify-between">
                    <div>
                      <h1>
                        {category.photo} - {category.title}
                      </h1>
                    </div>

                    <div className="mr-5 flex items-center space-x-5">
                      <Pencil size={20} className="text-slate-800" />
                      <Trash2 size={20} className="text-slate-800" />
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="rounded-xl border-none bg-slate-200">
                  <div className="flex items-center justify-between">
                    <h1>{category.title}</h1>
                    <div className="mr-5 flex items-center space-x-5">
                      <Pencil size={20} className="text-slate-800" />
                      <Trash2 size={20} className="text-slate-800" />
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
