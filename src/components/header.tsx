import { Search, User2Icon } from 'lucide-react'

import { Input } from '@/components/ui/input'

export default function Header() {
  return (
    <div className="mt-4 grid grid-cols-[1fr_200px] gap-3 bg-blue-900 p-6 shadow-md md:mt-0 md:pl-8">
      <div className="flex w-full items-center gap-2 rounded-2xl border border-zinc-300 bg-white px-4 py-2 shadow-sm">
        <Input
          className="h-5 w-5 flex-1 border-0 bg-transparent p-0 text-slate-900 placeholder-black"
          placeholder="Pesquise aqui"
        />
        <Search className="h-5 w-5 text-blue-400" />
      </div>
      <div className="flex items-center gap-3 whitespace-nowrap px-6">
        <User2Icon className="text-white" size={34} />

        <span className="text-center text-lg font-medium text-white">
          Usuário ADM
        </span>
      </div>
    </div>
  )
}
