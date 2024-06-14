'use client'

import { Menu } from 'lucide-react'

import { LogoTrajetonSidebar } from '@/assets/logo-trajeton-sidebar'

import { Button } from '../ui/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../ui/collapsible'
import { MainNavigation } from './MainNavigation'

export default function Sidebar() {
  return (
    <Collapsible className="fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white p-3 data-[state=open]:bottom-0 lg:right-auto lg:items-center lg:border-r lg:data-[state=closed]:bottom-0">
      <div className="flex items-center justify-between">
        <LogoTrajetonSidebar />
        <CollapsibleTrigger asChild className="lg:hidden">
          <Button variant="ghost">
            <Menu className="h-6 w-6" />
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent
        forceMount
        className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
        <MainNavigation />
      </CollapsibleContent>
    </Collapsible>
  )
}
