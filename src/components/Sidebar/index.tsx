/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
'use client'

import {
  ArrowRight,
  Box,
  ChevronDown,
  ChevronUp,
  Dot,
  GraduationCap,
  Home,
  Menu,
  PackageOpen,
  Shapes,
  UsersRound,
} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

import { LogoTrajetonSidebar } from '@/assets/logo-trajeton-sidebar'

import { Button } from '../ui/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../ui/collapsible'

export default function Sidebar() {
  const [open, setOpen] = useState(false)
  const [showSubMenu, setShowSubMenu] = useState(false)

  const NavItems = [
    { title: 'Home', icon: Home, path: '/home' },
    {
      title: 'Estoque',
      icon: Box,
      path: '#',
      subItems: [
        { title: 'Cadastro de produto', path: '/stock' },
        { title: 'Gerenciamento de estoque', path: '/stock/management' },
        { title: 'Publicações', path: '/stock/post' },
      ],
    },
    { title: 'Categorias', icon: Shapes, path: '/category' },
    { title: 'Escolas', icon: GraduationCap, path: '/school' },
    { title: 'Gestão de pedidos', icon: PackageOpen, path: '/orders' },
    { title: 'Usuários', icon: UsersRound, path: '/users' },
  ]

  return (
    <Collapsible className="fixed left-0 right-0 top-0 z-20 bg-blue-800 data-[state=open]:bottom-0 lg:relative lg:right-auto lg:bg-white lg:px-4 lg:data-[state=closed]:bottom-0">
      <div
        className={` ${open ? 'w-68' : 'w-20'} bg-dark-purple relative h-screen p-5 pt-8 duration-300`}
      >
        <div className="flex gap-x-4">
          <div
            className={`-ml-2 hidden cursor-pointer duration-500 lg:block ${open && 'rotate-[360deg]'}`}
            onClick={() => setOpen(!open)}
          >
            <LogoTrajetonSidebar />
          </div>

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
          <ul className="space-y-4 pt-6">
            {NavItems.map((item, index) => (
              <div key={index}>
                <li
                  className={`hover:bg-light-white flex cursor-pointer items-center justify-between gap-x-4 rounded-md p-2 text-sm text-slate-400 hover:text-orange-500 ${index === 0 && 'bg-light-white'}`}
                  onClick={() => {
                    if (item.title === 'Estoque') {
                      setShowSubMenu(!showSubMenu)
                    }
                  }}
                >
                  <Link href={item.path} className="flex items-center gap-x-4">
                    <item.icon className="h-5 w-5" />
                    <span
                      className={`${!open && 'block lg:hidden'} origin-left whitespace-nowrap duration-200`}
                    >
                      {item.title}
                    </span>
                  </Link>
                  {item.subItems && (
                    <span>
                      {showSubMenu && open ? (
                        <ChevronUp className={`h-4 w-4 ${!open && 'hidden'}`} />
                      ) : (
                        <ChevronDown
                          className={`h-4 w-4 ${!open && 'hidden'}`}
                        />
                      )}
                    </span>
                  )}
                </li>
                {item.subItems && showSubMenu && open && (
                  <ul className="ml-8 space-y-2">
                    {item.subItems.map((subItem, subIndex) => (
                      <li
                        key={subIndex}
                        className="hover:bg-light-white flex cursor-pointer items-center gap-x-4 rounded-md p-2 text-sm text-slate-400 hover:text-orange-500"
                      >
                        <Link
                          href={subItem.path}
                          className="flex items-center lg:-ml-6"
                        >
                          <Dot className="text-orange-500" />
                          <span
                            className={`${!open && 'hidden'} origin-left duration-200`}
                          >
                            {subItem.title}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            <div
              className="group ml-1 flex cursor-pointer items-center gap-3"
              onClick={() => setOpen(!open)}
            >
              <ArrowRight
                className={`border-dark-purple w-7 text-slate-400 group-hover:text-orange-500 ${!open && 'rotate-180'}`}
              />
              <span
                className={`mb-0.5 text-slate-400 group-hover:text-orange-500 ${!open && 'hidden'} `}
              >
                recolher
              </span>
            </div>
          </ul>
        </CollapsibleContent>
      </div>
    </Collapsible>
  )
}
