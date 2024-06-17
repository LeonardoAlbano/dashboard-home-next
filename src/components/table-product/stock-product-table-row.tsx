/* eslint-disable jsx-a11y/alt-text */
'use client'

import { Check, Image, PencilIcon, Trash2Icon } from 'lucide-react'

import { Button } from '../ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import { Separator } from '../ui/separator'
import { TableCell, TableRow } from '../ui/table'
import { Textarea } from '../ui/textarea'

export function StockProductTableRow() {
  return (
    <TableRow className="border-b border-slate-300">
      <TableCell className="text-start text-sm font-medium text-slate-800 md:text-base">
        IMG - Nome do produto
      </TableCell>
      <TableCell className="text-center text-sm font-medium text-slate-800 md:text-base">
        Caderno
      </TableCell>
      <TableCell className="text-center text-sm font-medium text-slate-800 md:text-base">
        10 matérias
      </TableCell>
      <TableCell className="space-x-5 text-center">
        <Dialog>
          <DialogTrigger asChild>
            <button>
              <PencilIcon size={20} />
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-[700px] space-y-6">
            <DialogHeader className="mt-5">
              <DialogTitle>Editar produto</DialogTitle>
            </DialogHeader>
            <div className="flex items-center justify-start gap-8">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-400 text-sm font-medium text-white">
                    1
                  </span>
                  <Separator className="h-1 w-32 rounded-full bg-slate-400" />
                </div>
                <p className="text-sm font-semibold text-slate-900">
                  Informações básicas
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-300 text-sm font-medium">
                    2
                  </span>
                  <Separator className="h-1 w-32 rounded-full bg-slate-400" />
                </div>
                <p className="text-sm font-semibold text-slate-900">Imagens</p>
              </div>
            </div>

            <div>
              <form action="" className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="productname" className="ml-1">
                    Nome do produto<span className="text-red-500">*</span>
                  </Label>
                  <Input
                    placeholder="Digite o nome do produto"
                    type="text"
                    id="productname"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" className="ml-1">
                    Descrição<span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    placeholder="Descrição do produto"
                    id="description"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="unitprice" className="ml-1">
                    Preço unitário da venda
                    <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    placeholder="Preço unitário"
                    type="text"
                    id="unitprice"
                  />
                </div>

                <div className="flex gap-10">
                  <div className="w-1/2 space-y-2">
                    <label
                      htmlFor="category"
                      className="ml-0.5 text-sm font-medium text-slate-800"
                    >
                      Categoria<span className="text-red-500">*</span>
                    </label>
                    <Select>
                      <SelectTrigger className="h-8">
                        <SelectValue />
                      </SelectTrigger>

                      <SelectContent>
                        <SelectItem value="caderno">Caderno</SelectItem>
                        <SelectItem value="caneta">Caneta</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="w-1/2 space-y-2">
                    <label
                      htmlFor="subcategory"
                      className="ml-0.5 text-sm font-medium text-slate-800"
                    >
                      Subcategoria<span className="text-red-500">*</span>
                    </label>
                    <Select>
                      <SelectTrigger className="h-8">
                        <SelectValue />
                      </SelectTrigger>

                      <SelectContent>
                        <SelectItem value="caderno">Caderno</SelectItem>
                        <SelectItem value="caneta">Caneta</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex gap-10">
                  <div className="w-1/2 space-y-2">
                    <label
                      htmlFor="category"
                      className="ml-0.5 text-sm font-medium text-slate-800"
                    >
                      Código de barras<span className="text-red-500">*</span>
                    </label>
                    <Input
                      placeholder="Digite o código de barras"
                      className="h-8"
                    />
                  </div>
                  <div className="w-1/2 space-y-2">
                    <label
                      htmlFor="subcategory"
                      className="ml-0.5 text-sm font-medium text-slate-800"
                    >
                      Unidade de medida<span className="text-red-500">*</span>
                    </label>
                    <Select>
                      <SelectTrigger className="h-8">
                        <SelectValue />
                      </SelectTrigger>

                      <SelectContent>
                        <SelectItem value="caderno">Caderno</SelectItem>
                        <SelectItem value="caneta">Caneta</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex justify-end gap-3">
                  <DialogClose asChild>
                    <Button variant="ghost" className="text-orange-500">
                      Cancelar
                    </Button>
                  </DialogClose>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>Próximo</Button>
                    </DialogTrigger>

                    <DialogContent className="max-w-[700px] space-y-6">
                      <DialogHeader className="mt-5">
                        <DialogTitle className="text-slate-800">
                          Editar produto
                        </DialogTitle>
                      </DialogHeader>

                      <div className="flex items-center justify-start gap-8">
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 text-sm font-medium text-white">
                              <Check />
                            </span>
                            <Separator className="h-1 w-32 rounded-full bg-orange-500" />
                          </div>
                          <p className="text-sm font-semibold text-slate-900">
                            Informações básicas
                          </p>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-300 text-sm font-medium">
                              2
                            </span>
                            <Separator className="h-1 w-32 rounded-full bg-slate-400" />
                          </div>
                          <p className="text-sm font-semibold text-slate-900">
                            Imagens
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-lg">
                          <Label htmlFor="photo" className="ml-0.5 space-y-1">
                            <div className="flex h-60 cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-dotted border-orange-500 bg-orange-200">
                              <Image className="text-orange-600" size={22} />
                              <span className="text-orange-600">
                                Clique para adicionar
                              </span>
                            </div>
                            <Input type="file" className="sr-only" />
                          </Label>
                        </div>

                        <div className="text-lg">
                          <Label htmlFor="photo" className="ml-0.5 space-y-1">
                            <div className="flex h-60 cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-dotted border-orange-500 bg-orange-200">
                              <Image className="text-orange-600" size={22} />
                              <span className="text-orange-600">
                                Clique para adicionar
                              </span>
                            </div>
                            <Input type="file" className="sr-only" />
                          </Label>
                        </div>

                        <div className="text-lg">
                          <Label htmlFor="photo" className="ml-0.5 space-y-1">
                            <div className="flex h-60 cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-dotted border-orange-500 bg-orange-200">
                              <Image className="text-orange-600" size={22} />
                              <span className="text-orange-600">
                                Clique para adicionar
                              </span>
                            </div>
                            <Input type="file" className="sr-only" />
                          </Label>
                        </div>

                        <div className="text-lg">
                          <Label htmlFor="photo" className="ml-0.5 space-y-1">
                            <div className="flex h-60 cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-dotted border-orange-500 bg-orange-200">
                              <Image className="text-orange-600" size={22} />
                              <span className="text-orange-600">
                                Clique para adicionar
                              </span>
                            </div>
                            <Input type="file" className="sr-only" />
                          </Label>
                        </div>
                      </div>

                      <div className="flex justify-end gap-3">
                        <DialogClose asChild>
                          <Button variant="ghost" className="text-orange-500">
                            Cancelar
                          </Button>
                        </DialogClose>

                        <Dialog>
                          <DialogTrigger asChild>
                            <Button>Revisar produto</Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-[500px] space-y-6">
                            <DialogHeader className="mt-5">
                              <DialogTitle className="text-slate-800">
                                Editar produtor
                              </DialogTitle>
                            </DialogHeader>
                            <div className="space-y-5">
                              <span>imagem</span>

                              <h1>
                                Caneta pincel brush pen faber castell tons
                                pastel C/6 cores
                              </h1>

                              <p className="font-bold text-slate-800">
                                R$ 48,60
                              </p>

                              <p>
                                No entanto, não podemos esquecer que a contínua
                                expansão de nossa atividade é uma das
                                consequências das diversas correntes de
                                pensamento.
                              </p>

                              <p>
                                <strong className="text-slate-800">
                                  Categoria:{' '}
                                </strong>
                                Canetas
                              </p>
                              <p>
                                <strong className="text-slate-800">
                                  Subcategoria:{' '}
                                </strong>
                                Canetas pincel
                              </p>
                              <p>
                                <strong className="text-slate-800">
                                  Unidade de medida:{' '}
                                </strong>
                                Unidades
                              </p>
                              <p>
                                <strong className="text-slate-800">
                                  Código:{' '}
                                </strong>
                                1234567898671
                              </p>
                            </div>

                            <div className="flex flex-col gap-4">
                              <Button>Salvar produto</Button>
                              <DialogClose asChild>
                                <Button
                                  variant="ghost"
                                  className="text-orange-500"
                                >
                                  Cancelar
                                </Button>
                              </DialogClose>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </form>
            </div>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger asChild>
            <button>
              <Trash2Icon size={20} />
            </button>
          </DialogTrigger>
        </Dialog>
      </TableCell>
    </TableRow>
  )
}
