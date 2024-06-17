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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { TableCell, TableRow } from '../ui/table'

export function ManagementTransferProductTableRow() {
  return (
    <TableRow className="border-b border-slate-300">
      <TableCell className="text-start text-sm font-medium text-slate-800 md:text-base">
        IMG - Nome do produto
      </TableCell>
      <TableCell className="text-center text-sm font-medium text-slate-800 md:text-base">
        2
      </TableCell>
      <TableCell className="text-center text-sm font-medium text-slate-800 md:text-base">
        Entrada
      </TableCell>
      <TableCell className="text-center text-sm font-medium text-slate-800 md:text-base">
        22/05/2024
      </TableCell>
      <TableCell className="space-x-5 text-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="text-orange-500">
              Ver detalhes
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel> Ação </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup className="flex flex-col items-start gap-3">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="ghost">Detalhes entrada</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="mb-5 text-slate-800">
                      Detalhes da entrada
                    </DialogTitle>
                  </DialogHeader>

                  <div className="space-y-8">
                    <div className="space-y-2">
                      <h1>Produto</h1>
                      <p>Nome do produto</p>
                    </div>
                    <div className="flex">
                      <div className="w-1/2 space-y-2">
                        <h1>Data</h1>
                        <p>22/05/2024</p>
                      </div>

                      <div className="w-1/2 space-y-2">
                        <h1>Quantidade</h1>
                        <p>145</p>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="ghost">Detalhes saída</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="mb-5 text-slate-800">
                      Detalhes da saída
                    </DialogTitle>
                  </DialogHeader>

                  <div className="space-y-8">
                    <div className="space-y-2">
                      <h1>Produto</h1>
                      <p>Nome do produto</p>
                    </div>
                    <div className="flex">
                      <div className="w-1/2 space-y-2">
                        <h1>Data</h1>
                        <p>22/05/2024</p>
                      </div>

                      <div className="w-1/2 space-y-2">
                        <h1>Quantidade</h1>
                        <p>145</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h1>Motivo da saída</h1>
                      <p>Avaria</p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  )
}
