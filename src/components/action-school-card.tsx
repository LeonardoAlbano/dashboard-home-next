import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'

import ActionDeleteSchoolCard from './action-delete-school-card'
import ActionUpdateSchoolCard from './action-update-school-card'
import { Button } from './ui/button'
import { Dialog, DialogTrigger } from './ui/dialog'

export default function ActionSchoolCard() {
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
          <ActionUpdateSchoolCard />
        </Dialog>
      </DropdownMenuGroup>

      <DropdownMenu>
        <Dialog>
          <DialogTrigger
            asChild
            className="mt-1 px-2 py-4 hover:bg-orange-100 hover:text-orange-600"
          >
            <Button
              variant="ghost"
              className="flex h-5 w-full justify-start text-slate-800"
            >
              Excluir
            </Button>
          </DialogTrigger>
          <ActionDeleteSchoolCard />
        </Dialog>
      </DropdownMenu>
    </DropdownMenuContent>
  )
}
