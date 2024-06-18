'use client'

/* eslint-disable jsx-a11y/alt-text */
import { Check, ChevronLeft, Image, Search } from 'lucide-react'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

import { StockProductTableRow } from '@/components/table-product/stock-product-table-row'
import { Pagination } from '@/components/TableOrders/pagination'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
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
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Textarea } from '@/components/ui/textarea'

const registerStockForm = z.object({
  productname: z.string(),
  description: z.string(),
  unitprice: z.string(),
  category: z.string(),
  subcategory: z.string(),
  barcode: z.string(),
  measure: z.string(),
  firstphoto: z.string(),
  secondphoto: z.string(),
  thirdphoto: z.string(),
  fourthphoto: z.string(),
})

type RegisterStockForm = z.infer<typeof registerStockForm>

export default function StockDashboard() {
  const {
    register,
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm<RegisterStockForm>()

  async function handleRegisterStock(data: RegisterStockForm) {
    console.log(data)
    await new Promise((resolve) => setTimeout(resolve, 500))
  }

  return (
    <div className="px-6 py-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <ChevronLeft className="text-slate-800" size={32} />
          <h1 className="text-2xl font-bold text-slate-800">
            Cadastro de produtos
          </h1>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>+ Novo produto</Button>
          </DialogTrigger>
          <DialogContent className="max-w-[700px] space-y-6">
            <DialogHeader className="mt-5">
              <DialogTitle>Cadastrar produto</DialogTitle>
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
              <form
                action=""
                className="space-y-6"
                onSubmit={handleSubmit(handleRegisterStock)}
              >
                <div className="space-y-2">
                  <Label htmlFor="productname" className="ml-1">
                    Nome do produto<span className="text-red-500">*</span>
                  </Label>
                  <Input
                    placeholder="Digite o nome do produto"
                    type="text"
                    id="productname"
                    {...register('productname')}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" className="ml-1">
                    Descrição<span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    placeholder="Descrição do produto"
                    id="description"
                    {...register('description')}
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
                    {...register('unitprice')}
                  />
                </div>

                <div className="flex gap-10">
                  <div className="w-1/2 space-y-2">
                    <Controller
                      name="category"
                      control={control}
                      render={({
                        field: { name, onChange, value, disabled },
                      }) => (
                        <>
                          <label
                            htmlFor="category"
                            className="ml-0.5 text-sm font-medium text-slate-800"
                          >
                            Categoria<span className="text-red-500">*</span>
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
                      render={({
                        field: { name, onChange, value, disabled },
                      }) => (
                        <>
                          <label
                            htmlFor="subcategory"
                            className="ml-0.5 text-sm font-medium text-slate-800"
                          >
                            Categoria<span className="text-red-500">*</span>
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
                </div>

                <div className="flex gap-10">
                  <div className="w-1/2 space-y-2">
                    <label
                      htmlFor="barcode"
                      className="ml-0.5 text-sm font-medium text-slate-800"
                    >
                      Código de barras<span className="text-red-500">*</span>
                    </label>
                    <Input
                      placeholder="Digite o código de barras"
                      className="h-8"
                      {...register('barcode')}
                    />
                  </div>
                  <div className="w-1/2 space-y-2">
                    <Controller
                      name="measure"
                      control={control}
                      render={({
                        field: { name, onChange, value, disabled },
                      }) => (
                        <>
                          <label
                            htmlFor="measure"
                            className="ml-0.5 text-sm font-medium text-slate-800"
                          >
                            Categoria<span className="text-red-500">*</span>
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
                </div>

                <div className="flex justify-end gap-3">
                  <Button variant="ghost" className="text-orange-500">
                    Cancelar
                  </Button>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>Próximo</Button>
                    </DialogTrigger>

                    <DialogContent className="max-w-[700px] space-y-6">
                      <DialogHeader>
                        <DialogTitle>Cadastrar produtor</DialogTitle>
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
                          <Label
                            htmlFor="firstphoto"
                            className="ml-0.5 space-y-1"
                          >
                            <div className="flex h-60 cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-dotted border-orange-500 bg-orange-200">
                              <Image className="text-orange-600" size={22} />
                              <span className="text-orange-600">
                                Clique para adicionar
                              </span>
                            </div>
                            <Input
                              type="file"
                              className="sr-only"
                              id="firstphoto"
                              {...register('firstphoto')}
                            />
                          </Label>
                        </div>

                        <div className="text-lg">
                          <Label
                            htmlFor="secondphoto"
                            className="ml-0.5 space-y-1"
                          >
                            <div className="flex h-60 cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-dotted border-orange-500 bg-orange-200">
                              <Image className="text-orange-600" size={22} />
                              <span className="text-orange-600">
                                Clique para adicionar
                              </span>
                            </div>
                            <Input
                              type="file"
                              className="sr-only"
                              id="secondphoto"
                              {...register('secondphoto')}
                            />
                          </Label>
                        </div>

                        <div className="text-lg">
                          <Label
                            htmlFor="thirdphoto"
                            className="ml-0.5 space-y-1"
                          >
                            <div className="flex h-60 cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-dotted border-orange-500 bg-orange-200">
                              <Image className="text-orange-600" size={22} />
                              <span className="text-orange-600">
                                Clique para adicionar
                              </span>
                            </div>
                            <Input
                              type="file"
                              className="sr-only"
                              id="thirdphoto"
                              {...register('thirdphoto')}
                            />
                          </Label>
                        </div>

                        <div className="text-lg">
                          <Label
                            htmlFor="fourthphoto"
                            className="ml-0.5 space-y-1"
                          >
                            <div className="flex h-60 cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-dotted border-orange-500 bg-orange-200">
                              <Image className="text-orange-600" size={22} />
                              <span className="text-orange-600">
                                Clique para adicionar
                              </span>
                            </div>
                            <Input
                              type="file"
                              className="sr-only"
                              id="fourthphoto"
                              {...register('fourthphoto')}
                            />
                          </Label>
                        </div>
                      </div>

                      <div className="flex justify-end gap-3">
                        <Button
                          variant="ghost"
                          className="text-md font-medium text-orange-500"
                        >
                          Cancelar
                        </Button>

                        <Dialog>
                          <DialogTrigger asChild>
                            <Button>Revisar produto</Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-[500px] space-y-6">
                            <DialogHeader>
                              <DialogTitle>Cadastrar produtor</DialogTitle>
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

                            <div className="flex flex-col">
                              <Button>Cadastrar produto</Button>
                              <Button
                                variant="ghost"
                                className="text-orange-500"
                                type="submit"
                                disabled={isSubmitting}
                              >
                                Cancelar
                              </Button>
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
      </div>

      <div className="mt-8 px-2">
        <h1 className="mb-4 text-lg font-bold text-slate-800">
          Lista de produtos
        </h1>
        <div className="flex w-full items-center gap-2 rounded-2xl border border-zinc-300 bg-white px-4 py-2 shadow-sm">
          <Input
            className="h-5 w-5 flex-1 border-0 bg-transparent p-0 text-slate-900 placeholder-black"
            placeholder="Pesquise aqui"
          />
          <Search className="h-5 w-5 text-blue-400" />
        </div>

        <Table className="mt-8 bg-white">
          <TableHeader>
            <TableRow className="bg-slate-100">
              <TableHead className="text-center font-bold text-slate-800">
                Nome do produto
              </TableHead>
              <TableHead className="text-center font-bold text-slate-800">
                Categoria
              </TableHead>
              <TableHead className="text-center font-bold text-slate-800">
                Subcategoria
              </TableHead>
              <TableHead className="text-center font-bold text-slate-800">
                Ações
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="">
            {Array.from({ length: 6 }).map((_, i) => {
              return <StockProductTableRow key={i} />
            })}
          </TableBody>
        </Table>

        <div className="mt-5">
          <Pagination pageIndex={0} totalCount={105} perPage={10} />
        </div>
      </div>
    </div>
  )
}
