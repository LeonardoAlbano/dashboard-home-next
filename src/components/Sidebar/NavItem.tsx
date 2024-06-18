import Link from 'next/link'
import { ElementType } from 'react'

export interface NavItemProps {
  title: string
  icon: ElementType
  path: string
}

export function NavItem({ title, icon: Icon, path }: NavItemProps) {
  return (
    <Link
      href={path}
      className="group flex items-center gap-3 rounded-md p-2 transition-all hover:bg-slate-50"
    >
      <Icon className="h-5 w-5 text-slate-400 group-hover:text-primary" />
      <span className="font-medium text-white group-hover:text-primary lg:hidden lg:text-slate-700">
        {title}
      </span>
    </Link>
  )
}
