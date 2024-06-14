'use client'

import { Trash2Icon } from 'lucide-react'

import { Dialog, DialogTrigger } from '../ui/dialog'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import { TableCell, TableRow } from '../ui/table'
import { OrderConfirmDelete } from './order-confirm-delete'

export function OrderTableRow() {
  return (
    <TableRow className="border-b border-slate-400">
      <TableCell className="text-center text-sm font-semibold text-blue-500 md:text-base">
        123456
      </TableCell>
      <TableCell className="text-center text-sm font-semibold text-slate-800 md:text-base">
        R$200,00
      </TableCell>
      <TableCell className="text-center text-sm font-semibold text-slate-800 md:text-base">
        22/04/2024
      </TableCell>
      <TableCell className="text-center text-sm font-semibold text-slate-800 md:text-base">
        Dinheiro
      </TableCell>
      <TableCell className="w-[150px] text-center font-semibold text-slate-800 md:w-[200px]">
        <Select>
          <SelectTrigger className="flex h-7 items-center justify-center gap-2 rounded-full border-none">
            <SelectValue />
          </SelectTrigger>

          <SelectContent>
            <div className="space-y-3">
              <SelectItem
                value="processing"
                className="rounded-full bg-blue-200 font-normal text-blue-500"
              >
                Em preparação
              </SelectItem>
              <SelectItem
                value="delivering"
                className="rounded-full bg-orange-200 font-normal text-orange-500"
              >
                Em entrega
              </SelectItem>
              <SelectItem
                value="delivered"
                className="rounded-full bg-green-200 font-normal text-green-500"
              >
                Entregue
              </SelectItem>
            </div>
          </SelectContent>
        </Select>
      </TableCell>
      <TableCell className="text-center">
        <Dialog>
          <DialogTrigger asChild>
            <button>
              <Trash2Icon size={20} />
            </button>
          </DialogTrigger>

          <OrderConfirmDelete />
        </Dialog>
      </TableCell>
    </TableRow>
  )
}
