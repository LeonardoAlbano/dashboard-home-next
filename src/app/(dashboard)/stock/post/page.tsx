'use client'

import { ChevronLeft, Search } from 'lucide-react'
import { SetStateAction, useState } from 'react'

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
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export default function PostDashboard() {
  const [filtro, setFiltro] = useState('todos')

  const handleFiltro = (filtroSelecionado: SetStateAction<string>) => {
    setFiltro(filtroSelecionado)
  }

  return (
    <div className="px-6 py-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <ChevronLeft className="text-slate-800" size={32} />
          <h1 className="text-2xl font-bold text-slate-800">
            Publicação de produtos
          </h1>
        </div>
      </div>

      <div className="mt-8 px-2">
        <h1 className="mb-4 text-lg font-bold text-slate-800">Produtos</h1>
        <div className="flex w-full items-center gap-2 rounded-2xl border border-zinc-300 bg-white px-4 py-2 shadow-sm">
          <Input
            className="h-5 w-5 flex-1 border-0 bg-transparent p-0 text-slate-900 placeholder-black"
            placeholder="Pesquise aqui"
          />
          <Search className="h-5 w-5 text-blue-400" />
        </div>
        <div className="mt-6 flex gap-6">
          <h1
            className={`w-64 border-b pb-5 ${
              filtro === 'todos' ? 'border-orange-500 text-orange-500' : ''
            } cursor-pointer text-center font-medium`}
            onClick={() => handleFiltro('todos')}
          >
            Todos
          </h1>
          <div className="flex w-64 items-center justify-center gap-2 border-b pb-5">
            <h1
              className={`cursor-pointer text-center ${
                filtro === 'publicados'
                  ? 'border-orange-500 text-orange-500'
                  : ''
              }`}
              onClick={() => handleFiltro('publicados')}
            >
              Publicados
              <span
                className={`ml-1 mt-1 inline-block h-5 w-9 rounded-full text-center text-sm font-extralight ${
                  filtro === 'publicados'
                    ? 'border-orange-500 bg-orange-500 text-white'
                    : ''
                }`}
              >
                343
              </span>
            </h1>
          </div>
          <div className="flex w-64 items-center justify-center gap-2 border-b pb-5">
            <h1
              className={`cursor-pointer text-center ${
                filtro === 'nao-publicados' ? 'text-orange-500' : ''
              }`}
              onClick={() => handleFiltro('nao-publicados')}
            >
              Não publicados
              <span
                className={`ml-1 mt-1.5 inline-block h-5 w-9 rounded-full text-center text-sm font-extralight ${
                  filtro === 'nao-publicados' ? 'bg-orange-500 text-white' : ''
                }`}
              >
                343
              </span>
            </h1>
          </div>
        </div>

        <Table className="mt-8 bg-white">
          <TableHeader>
            <TableRow className="bg-tableHeader">
              <TableHead className="pl-10 text-start font-bold text-slate-800">
                Nome do produto
              </TableHead>
              <TableHead className="text-center font-bold text-slate-800">
                Quantidade atual
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
              if (
                (filtro === 'publicados' && i % 2 === 0) ||
                (filtro === 'nao-publicados' && i % 2 !== 0) ||
                filtro === 'todos'
              ) {
                return (
                  <TableRow key={i} className="border-b border-slate-300">
                    <TableCell className="text-start text-sm font-medium text-slate-800 md:text-base">
                      IMG - Nome do produto
                    </TableCell>
                    <TableCell className="text-center text-sm font-medium text-slate-800 md:text-base">
                      45
                    </TableCell>
                    <TableCell className="text-center text-sm font-medium text-slate-800 md:text-base">
                      Caderno
                    </TableCell>
                    <TableCell className="text-center text-sm font-medium text-slate-800 md:text-base">
                      10 matérias
                    </TableCell>
                    <TableCell className="space-x-5 text-center">
                      {filtro === 'publicados' ? (
                        <Dialog>
                          <DialogTrigger>
                            <Button variant="ghost" className="text-orange-500">
                              Retirar publicação
                            </Button>
                          </DialogTrigger>

                          <DialogContent className="max-w-[350px]">
                            <DialogHeader className="space-y-5">
                              <DialogTitle className="text-slate-800">
                                Retirar publicação
                              </DialogTitle>

                              <DialogDescription className="text-sm text-slate-800">
                                Você realmente deseja retirar a publicação do
                                produto?{' '}
                              </DialogDescription>
                              <DialogDescription className="text-sm text-slate-800">
                                Com esta ação, o produto não estará mais
                                disponível para venda.
                              </DialogDescription>
                            </DialogHeader>
                            <div className="flex flex-col gap-5">
                              <Button className="rounded-2xl">
                                Sim, retirar publicação
                              </Button>
                              <DialogClose className="text-orange-500">
                                Não retirar
                              </DialogClose>
                            </div>
                          </DialogContent>
                        </Dialog>
                      ) : (
                        <Dialog>
                          <DialogTrigger>
                            <Button variant="ghost" className="text-blue-500">
                              Publicar produto
                            </Button>
                          </DialogTrigger>

                          <DialogContent className="max-w-[300px]">
                            <DialogHeader className="space-y-5">
                              <DialogTitle className="text-slate-800">
                                Publicar produto
                              </DialogTitle>
                            </DialogHeader>
                            <form action="" className="space-y-5">
                              <div className="space-y-2">
                                <Label className="ml-0.5 text-slate-800">
                                  Quantidade em estoque
                                </Label>
                                <Input placeholder="100" disabled />
                              </div>
                              <div className="space-y-2">
                                <Label className="ml-0.5 text-slate-800">
                                  Quantidade mínima em estoque
                                  <span className="text-red-500">*</span>{' '}
                                </Label>
                                <Input placeholder="10" />
                              </div>
                            </form>
                            <div className="flex flex-col gap-5">
                              <Button className="rounded-2xl">
                                Publicar produto
                              </Button>
                            </div>
                          </DialogContent>
                        </Dialog>
                      )}
                    </TableCell>
                  </TableRow>
                )
              } else {
                return null
              }
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
