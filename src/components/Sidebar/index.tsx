'use client'

import { Menu, User2Icon } from 'lucide-react'

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
    <Collapsible className="fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 bg-blue-900 p-5 data-[state=open]:bottom-0 lg:right-auto lg:items-center lg:border-r lg:bg-white lg:data-[state=closed]:bottom-0">
      <div className="flex items-center justify-between">
        <div className="hidden lg:block">
          <LogoTrajetonSidebar />
        </div>
        <CollapsibleTrigger asChild className="lg:hidden">
          <Button variant="ghost">
            <Menu className="h-6 w-6 text-white" />
          </Button>
        </CollapsibleTrigger>
        <div className="block lg:hidden">
          <User2Icon
            className="rounded-full bg-white p-2 text-orange-500"
            size={50}
          />
        </div>
      </div>
      <CollapsibleContent
        forceMount
        className="flex flex-1 flex-col gap-6 text-white data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
        <MainNavigation />
      </CollapsibleContent>
    </Collapsible>
  )
}
