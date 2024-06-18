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
  PackageOpen,
  Shapes,
  UsersRound,
} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

import { LogoTrajetonSidebar } from '@/assets/logo-trajeton-sidebar'

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
    <div
      className={` ${open ? 'w-72' : 'w-20'} bg-dark-purple relative h-screen p-5 pt-8 duration-300`}
    >
      <div className="flex gap-x-4">
        <div
          className={`-ml-2 cursor-pointer duration-500 ${open && 'rotate-[360deg]'}`}
          onClick={() => setOpen(!open)}
        >
          <LogoTrajetonSidebar />
        </div>
        <h1
          className={`origin-left text-xl font-medium text-white duration-200 ${!open && 'scale-0'}`}
        ></h1>
      </div>
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
                  className={`${!open && 'hidden'} origin-left duration-200`}
                >
                  {item.title}
                </span>
              </Link>
              {item.subItems && (
                <span>
                  {showSubMenu && open ? (
                    <ChevronUp className={`h-4 w-4 ${!open && 'hidden'}`} />
                  ) : (
                    <ChevronDown className={`h-4 w-4 ${!open && 'hidden'}`} />
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
                      className="flex items-center gap-x-2"
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

        <div className="ml-1 flex items-center gap-3">
          <ArrowRight
            className={`border-dark-purple w-7 cursor-pointer text-slate-400 ${!open && 'rotate-180'}`}
            onClick={() => setOpen(!open)}
          />
          <span className={`mb-0.5 text-slate-400 ${!open && 'hidden'} `}>
            recolher
          </span>
        </div>
      </ul>
    </div>
  )
}
