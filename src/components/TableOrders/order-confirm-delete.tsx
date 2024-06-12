'use client'

import { Button } from '../ui/button'
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog'

export function OrderConfirmDelete() {
  return (
    <DialogContent className="w-[400px]">
      <DialogHeader className="space-y-4">
        <DialogTitle>Excluir pedido</DialogTitle>
        <DialogDescription className="text-md font-normal text-zinc-900">
          Você realmente deseja excluir o pedido? Essa ação não poderá ser
          desfeita
        </DialogDescription>
      </DialogHeader>

      <Button className="text-md rounded-xl font-semibold">Sim, excluir</Button>
      <Button
        variant="ghost"
        className="text-md -mt-2 rounded-xl font-semibold text-orange-500 hover:bg-orange-200 hover:text-orange-500"
      >
        Não excluir
      </Button>
    </DialogContent>
  )
}
