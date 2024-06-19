'use client'

import { ChevronLeft, Search } from 'lucide-react'
import React, { useState } from 'react'

import { ManagementAllProductTableRow } from '@/components/table-product/management-all-product-table-row'
import { ManagementTransferProductTableRow } from '@/components/table-product/management-transfer-product-table-row'
import { Pagination } from '@/components/TableOrders/pagination'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export default function ManagementDashboard() {
  const [showAllTable, setShowAllTable] = useState(true) // Estado para controlar a exibição da tabela "todos"

  return (
    <div className="px-6 py-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <ChevronLeft className="text-slate-800" size={32} />
          <h1 className="text-2xl font-bold text-slate-800">
            Gerenciamento de estoque
          </h1>
        </div>
      </div>

      <div className="mt-8 px-2">
        <h1 className="mb-4 text-lg font-bold text-slate-800">
          Entrada e saídas
        </h1>
        <div className="mb-6 flex gap-6">
          <h1
            className={`w-36 cursor-pointer border-b pb-4 ${
              showAllTable
                ? 'border-orange-500 text-center font-medium text-orange-600'
                : 'text-center'
            }`}
            onClick={() => setShowAllTable(true)}
          >
            todos
          </h1>{' '}
          <h1
            className={`w-36 cursor-pointer border-b pb-4 ${
              showAllTable
                ? 'text-center'
                : 'border-orange-500 text-center font-medium text-orange-600'
            }`}
            onClick={() => setShowAllTable(false)}
          >
            Movimentação
          </h1>
        </div>
        <div className="flex w-full items-center gap-2 rounded-2xl border border-zinc-300 bg-white px-4 py-2 shadow-sm">
          <Input
            className="h-5 w-5 flex-1 border-0 bg-transparent p-0 text-slate-900 placeholder-black"
            placeholder="Pesquise aqui"
          />
          <Search className="h-5 w-5 text-blue-400" />
        </div>

        {showAllTable ? (
          <Table className="mt-8 bg-white">
            <TableHeader>
              <TableRow className="bg-tableHeader">
                <TableHead className="pl-8 text-start font-bold text-slate-800">
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
                return <ManagementAllProductTableRow key={i} />
              })}
            </TableBody>
          </Table>
        ) : (
          <Table className="mt-8 bg-white">
            <TableHeader>
              <TableRow className="bg-tableHeader">
                <TableHead className="pl-8 text-start font-bold text-slate-800">
                  Nome do produto
                </TableHead>
                <TableHead className="text-center font-bold text-slate-800">
                  Quantidade
                </TableHead>
                <TableHead className="text-center font-bold text-slate-800">
                  Movimentação
                </TableHead>
                <TableHead className="text-center font-bold text-slate-800">
                  Data
                </TableHead>
                <TableHead className="text-center font-bold text-slate-800">
                  Ações
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="">
              {Array.from({ length: 6 }).map((_, i) => {
                return <ManagementTransferProductTableRow key={i} />
              })}
            </TableBody>
          </Table>
        )}

        <div className="mt-5">
          <Pagination pageIndex={0} totalCount={105} perPage={10} />
        </div>
      </div>
    </div>
  )
}
