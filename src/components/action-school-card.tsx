import { PictureInPicture } from 'lucide-react'
import { useState } from 'react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'

import { Button } from './ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'
import { Input } from './ui/input'
import { Label } from './ui/label'

interface ActionSchoolCardProps {
  onDelete: () => void
}

export default function ActionSchoolCard({ onDelete }: ActionSchoolCardProps) {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)

  const handleDelete = () => {
    onDelete()
    setIsDeleteDialogOpen(false)
  }

  return (
    <DropdownMenuContent>
      <DropdownMenuLabel>Ação</DropdownMenuLabel>
      <DropdownMenuSeparator />

      <DropdownMenuGroup>
        <Dialog>
          <DialogTrigger
            asChild
            className="px-2 py-4 hover:bg-orange-100 hover:text-orange-600"
          >
            <Button
              variant="ghost"
              className="flex h-5 w-full justify-start text-slate-800"
            >
              Editar
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Editar escola</DialogTitle>
            </DialogHeader>

            <form action="" className="space-y-5">
              <div className="space-y-1">
                <Label htmlFor="newNameSchool" className="ml-0.5">
                  Nome da escola<span className="text-red-500">*</span>
                </Label>
                <Input
                  id="newNameSchool"
                  type="text"
                  placeholder="Digite o nome da escola"
                />
              </div>

              <div className="text-lg">
                <Label htmlFor="photo" className="ml-0.5 space-y-1">
                  Foto (máximo 5MB)<span className="text-red-500">*</span>
                  <div className="flex h-36 cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-dotted border-orange-500 bg-orange-200">
                    <PictureInPicture className="text-orange-600" size={22} />
                    <span className="text-orange-600">
                      Clique para adicionar
                    </span>
                  </div>
                  <Input type="file" className="sr-only" id="photo" />
                </Label>

                <span className="ml-1 text-xs">
                  Faça o upload da imagem com no máximo 5MB
                </span>
              </div>

              <div className="ml-auto flex justify-end gap-3">
                <DialogClose asChild>
                  <Button
                    type="button"
                    variant="ghost"
                    className="font-semibold text-orange-500 transition-all hover:bg-orange-200 hover:text-orange-500"
                  >
                    Cancelar
                  </Button>
                </DialogClose>

                <Button type="submit">Salvar</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </DropdownMenuGroup>

      <DropdownMenu>
        <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
          <DialogTrigger
            asChild
            className="mt-1 px-2 py-4 hover:bg-orange-100 hover:text-orange-600"
          >
            <Button
              variant="ghost"
              className="flex h-5 w-full justify-start text-slate-800"
              onClick={() => setIsDeleteDialogOpen(true)}
            >
              Excluir
            </Button>
          </DialogTrigger>
          <DialogContent className="w-[360px] px-6">
            <DialogHeader className="space-y-5">
              <DialogTitle className="text-md font-semibold text-slate-800">
                Excluir escola
              </DialogTitle>

              <DialogDescription className="text-normal text-slate-800">
                Você realmente deseja remover este item? Essa ação não pode ser
                desfeita
              </DialogDescription>

              <div className="grid-row mt-4 grid gap-2">
                <Button
                  type="button"
                  onClick={handleDelete}
                  className="h-8 rounded-xl"
                >
                  Sim, excluir
                </Button>

                <DialogClose asChild>
                  <Button
                    type="reset"
                    variant="ghost"
                    className="h-8 rounded-xl font-semibold text-orange-500 transition-all hover:bg-orange-200 hover:text-orange-500"
                  >
                    Não excluir
                  </Button>
                </DialogClose>
              </div>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </DropdownMenu>
    </DropdownMenuContent>
  )
}
