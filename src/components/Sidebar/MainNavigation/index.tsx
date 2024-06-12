import {
  ArrowRight,
  Box,
  ChevronDown,
  GraduationCap,
  Home,
  PackageOpen,
  Shapes,
  UsersRound,
} from 'lucide-react'

import { CollapsibleTrigger } from '@/components/ui/collapsible'

import { NavItem } from './NavItem'

export function MainNavigation() {
  return (
    <nav className="space-y-4 lg:flex lg:flex-col lg:items-center">
      <NavItem title="Home" icon={Home} />
      <NavItem title="Estoque" icon={Box} />
      <NavItem title="Categorias" icon={Shapes} />
      <NavItem title="Escolas" icon={GraduationCap} />

      <div className="group flex cursor-pointer items-center pr-2 hover:bg-zinc-50">
        <NavItem title="Gestão de pedidos" icon={PackageOpen} />
        <ChevronDown className="ml-auto h-5 w-5 text-zinc-400 group-hover:text-primary md:hidden" />
      </div>

      <div className="group flex cursor-pointer items-center pr-2 hover:bg-zinc-50">
        <NavItem title="Usuários" icon={UsersRound} />
        <ChevronDown className="ml-auto h-5 w-5 text-zinc-400 group-hover:text-primary md:hidden" />
      </div>
      <CollapsibleTrigger className="lg:hidden">
        <NavItem title="Recolher" icon={ArrowRight} />
      </CollapsibleTrigger>
    </nav>
  )
}
