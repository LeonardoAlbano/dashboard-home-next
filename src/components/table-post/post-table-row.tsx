/* eslint-disable jsx-a11y/alt-text */
'use client'

import { Button } from '../ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { TableCell, TableRow } from '../ui/table'

export function PostTableRow() {
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
              <Button className="rounded-2xl">Publicar produto</Button>
            </div>
          </DialogContent>
        </Dialog>
      </TableCell>
    </TableRow>
  )
}
