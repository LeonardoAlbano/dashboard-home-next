/* eslint-disable jsx-a11y/alt-text */
'use client'

import { Button } from '../ui/button'
import {
  Dialog,
  DialogClose,
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
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { TableCell, TableRow } from '../ui/table'
import { Textarea } from '../ui/textarea'

export function PostAllTableRow() {
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
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="text-blue-500">
              Publicar produto
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel> Ação </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup className="flex flex-col items-start gap-3">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="ghost">Registrar entrada</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="text-slate-800">
                      Registrar entrada
                    </DialogTitle>
                  </DialogHeader>

                  <div>
                    <form action="" className="space-y-7">
                      <div className="space-y-2">
                        <Label className="ml-0.5 text-slate-800">
                          Nome do produto
                        </Label>
                        <Input placeholder="Digite o nome do produto" />
                      </div>

                      <div className="flex gap-5">
                        <div className="w-1/2 space-y-2">
                          <Label className="ml-0.5 text-slate-800">
                            Data <span className="text-red-500">*</span>
                          </Label>
                          <Input type="date" />
                        </div>

                        <div className="w-1/2 space-y-2">
                          <Label className="ml-0.5 text-slate-800">
                            Quantidade <span className="text-red-500">*</span>
                          </Label>
                          <Input type="text" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label className="ml-0.5 text-slate-800">
                          Lote<span className="text-red-500">*</span>
                        </Label>
                        <Input type="data" />
                      </div>

                      <div className="flex justify-end gap-3">
                        <DialogClose>
                          <Button variant="ghost" className="text-orange-500">
                            Cancelar
                          </Button>
                        </DialogClose>
                        <Button> Registrar </Button>
                      </div>
                    </form>
                  </div>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="ghost"
                    className="flex w-full items-start justify-start"
                  >
                    Registrar Saida
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="text-slate-800">
                      Saída manual
                    </DialogTitle>
                  </DialogHeader>

                  <div>
                    <form action="" className="space-y-7">
                      <div className="space-y-2">
                        <Label className="ml-0.5 text-slate-800">
                          Nome do produto
                        </Label>
                        <Input placeholder="Digite o nome do produto" />
                      </div>

                      <div className="flex gap-5">
                        <div className="w-1/2 space-y-2">
                          <Label className="ml-0.5 text-slate-800">
                            Data <span className="text-red-500">*</span>
                          </Label>
                          <Input type="date" />
                        </div>

                        <div className="w-1/2 space-y-2">
                          <Label className="ml-0.5 text-slate-800">
                            Quantidade <span className="text-red-500">*</span>
                          </Label>
                          <Input type="text" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label className="ml-0.5 text-slate-800">
                          Motivo da saída<span className="text-red-500">*</span>
                        </Label>
                        <Textarea />
                      </div>

                      <div className="flex justify-end gap-3">
                        <DialogClose>
                          <Button variant="ghost" className="text-orange-500">
                            Cancelar
                          </Button>
                        </DialogClose>
                        <Button> Registrar </Button>
                      </div>
                    </form>
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
