/* eslint-disable jsx-a11y/alt-text */
import { ChevronLeft, Image } from 'lucide-react'

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

export default function SchoolDashboard() {
  return (
    <section className="pt-8">
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
                          />
                        </div>

                        <div>
                          <Button className="text-md w-full rounded-xl">
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
                            htmlFor="title"
                            className="ml-0.5 text-slate-800"
                          >
                            Título subcategoria
                            <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="title"
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
        <div>
          <h1>IMG - nome da categoria</h1>
        </div>
      </div>
    </section>
  )
}
