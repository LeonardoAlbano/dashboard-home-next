import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from '../ui/card'

export default function OrdersTableMobile() {
  return (
    <Card className="block border-0 lg:hidden">
      <CardContent className="flex flex-row items-center justify-between pt-5">
        <div className="space-y-3">
          <CardTitle className="text-lg text-slate-800">
            Núm. <br /> Pedido
          </CardTitle>
          <CardDescription className="font-medium text-blue-500">
            123456
          </CardDescription>
        </div>
        <div className="space-y-3">
          <CardTitle className="text-lg text-slate-800">Valor</CardTitle>
          <CardDescription className="font-medium text-slate-800">
            R$ 200,00
          </CardDescription>
        </div>
        <div className="space-y-3">
          <CardTitle className="text-lg text-slate-800">Data</CardTitle>
          <CardDescription className="font-medium text-slate-800">
            22/04/2024
          </CardDescription>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-center">
        <div className="w-full rounded-2xl bg-green-100 py-1 text-center">
          <span className="text-green-500">Entregue</span>
        </div>
      </CardFooter>
    </Card>
  )
}
