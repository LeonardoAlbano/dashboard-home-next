import { Button } from '../ui/button'
import { Checkbox } from '../ui/checkbox'
import { DialogContent, DialogHeader, DialogTitle } from '../ui/dialog'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import { Separator } from '../ui/separator'

export function OrderDetailsFilters() {
  return (
    <DialogContent className="w-[450px]">
      <DialogHeader>
        <DialogTitle>Filtro</DialogTitle>
      </DialogHeader>

      <Separator orientation="horizontal" />

      <h1 className="text-xl font-semibold">Por data</h1>
      <form className="space-y-7">
        <div className="flex items-center gap-3 text-lg">
          <Checkbox id="filterSearchAll" className="h-5 w-5 rounded-full" />
          <label htmlFor="filterSearchAll">Todos</label>
        </div>

        <div className="flex items-center gap-3 text-lg">
          <Checkbox id="filterSearchSeven" className="h-5 w-5 rounded-full" />
          <label htmlFor="filterSearchSeven">até 7 dias</label>
        </div>

        <div className="flex items-center gap-3 text-lg">
          <Checkbox id="filterSearchFifteen" className="h-5 w-5 rounded-full" />
          <label htmlFor="filterSearchFifteen">até 15 dias</label>
        </div>

        <div className="flex items-center gap-3 text-lg">
          <Checkbox id="filterSearchThirty" className="h-5 w-5 rounded-full" />
          <label htmlFor="filterSearchThirty">até 30 dias</label>
        </div>

        <div className="flex items-center gap-3 text-lg">
          <Checkbox
            id="filterSearchMoreThirty"
            className="h-5 w-5 rounded-full"
          />
          <label htmlFor="filterSearchMoreThirty">Mais de 30 dias</label>
        </div>

        <div className="flex flex-col gap-3 text-lg">
          <div className="flex items-center gap-3">
            <Checkbox
              id="filterSearchCustom"
              className="h-5 w-5 rounded-full"
            />
            <label htmlFor="filterSearchCustom">Personalizado</label>
          </div>
          <div className="flex items-center space-x-3">
            <span>de</span>
            <input type="date" className="rounded border p-1" />
            <span>à</span>
            <input type="date" className="rounded border p-1" />
          </div>
        </div>
        <Separator orientation="horizontal" />

        <h1 className="text-xl font-semibold">Por Status</h1>

        <Select>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>

          <SelectContent>
            <div className="space-y-3">
              <SelectItem
                value="processing"
                className="rounded-full bg-blue-200 text-center font-normal text-blue-500"
              >
                Em preparação
              </SelectItem>
              <SelectItem
                value="delivering"
                className="rounded-full bg-orange-200 font-normal text-orange-500"
              >
                Em entrega
              </SelectItem>
              <SelectItem
                value="delivered"
                className="rounded-full bg-green-200 font-normal text-green-500"
              >
                Entregue
              </SelectItem>
            </div>
          </SelectContent>
        </Select>

        <Separator />

        <div className="flex justify-between">
          <Button type="button" variant="ghost">
            Limpar seleção
          </Button>

          <Button type="submit">Filtrar</Button>
        </div>
      </form>
    </DialogContent>
  )
}
