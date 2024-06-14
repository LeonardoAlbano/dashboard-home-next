import { PictureInPicture } from 'lucide-react'

import { Button } from './ui/button'
import { DialogContent, DialogHeader, DialogTitle } from './ui/dialog'
import { Input } from './ui/input'
import { Label } from './ui/label'

export default function ActionUpdateSchoolCard() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Editar escola</DialogTitle>
      </DialogHeader>

      <form action="">
        <div>
          <Label htmlFor="newNameSchool" className="ml-0.5 space-y-1">
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
              <span className="text-orange-600">Clique para adicionar</span>
            </div>
            <Input type="file" className="sr-only" id="photo" />
          </Label>

          <span className="ml-1 text-xs">
            Faça o upload da imagem com no máximo 5MB
          </span>
        </div>

        <div className="ml-auto flex gap-3">
          <Button
            type="button"
            variant="ghost"
            className="font-semibold text-orange-500 transition-all hover:bg-orange-200 hover:text-orange-500"
          >
            Cancelar
          </Button>

          <Button type="submit">Cadastrar</Button>
        </div>
      </form>
    </DialogContent>
  )
}
