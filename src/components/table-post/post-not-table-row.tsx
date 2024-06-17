'use client'

import { Button } from '../ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'
import { TableCell, TableRow } from '../ui/table'

export function PostNotTableRow() {
  return (
    <TableRow className="border-b border-slate-300">
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
                Você realmente deseja retirar a publicação do produto?{' '}
              </DialogDescription>
              <DialogDescription className="text-sm text-slate-800">
                Com esta ação, o produto não estará mais disponível para venda.
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col gap-5">
              <Button className="rounded-2xl">Sim, retirar publicação</Button>

              <DialogClose className="text-orange-500">Não retirar</DialogClose>
            </div>
          </DialogContent>
        </Dialog>
      </TableCell>
    </TableRow>
  )
}
