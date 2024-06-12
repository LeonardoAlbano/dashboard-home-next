import { ElementType } from 'react'

export interface NavItemProps {
  title: string
  icon: ElementType
}

export function NavItem({ title, icon: Icon }: NavItemProps) {
  return (
    <a
      href=""
      className="group flex items-center gap-3 rounded-md p-2 hover:bg-slate-50 transition-all"
    >
      <Icon className="h-5 w-5 text-zinc-400 group-hover:text-primary" />
      <span className="font-medium text-zinc-700 group-hover:text-primary lg:hidden">
        {title}
      </span>
    </a>
  )
}
