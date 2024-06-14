import { Button } from './ui/button'
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog'

export default function ActionDeleteSchoolCard() {
  return (
    <DialogContent className="w-[360px] px-6">
      <DialogHeader className="space-y-5">
        <DialogTitle className="text-md font-semibold text-slate-800">
          Excluir escola
        </DialogTitle>

        <DialogDescription className="text-normal text-slate-800">
          Você realmente deseja remover este item? Essa ação não pode ser
          desfeita
        </DialogDescription>

        <div className="grid-row mt-4 grid gap-3">
          <Button type="button" className="h-8 rounded-xl">
            Sim, excluir
          </Button>

          <Button
            type="reset"
            variant="ghost"
            className="h-8 rounded-xl font-semibold text-orange-500 transition-all hover:bg-orange-200 hover:text-orange-500"
          >
            Não excluir
          </Button>
        </div>
      </DialogHeader>
    </DialogContent>
  )
}
