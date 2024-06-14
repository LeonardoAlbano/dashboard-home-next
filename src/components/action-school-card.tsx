import ActionUpdateSchoolCard from './action-update-school-card'
import { Button } from './ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'

export default function ActionSchoolCard() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Ação</DialogTitle>
      </DialogHeader>

      <Dialog>
        <DialogTrigger asChild>
          <Button>Editar</Button>
        </DialogTrigger>

        <ActionUpdateSchoolCard />
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Button>Excluir</Button>
        </DialogTrigger>
      </Dialog>
    </DialogContent>
  )
}
