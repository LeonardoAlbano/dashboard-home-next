'use client'

import { ReactNode } from 'react'

import Header from '@/components/header'
import Sidebar from '@/components/Sidebar'

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="bg-sky-100 px-4 pt-24">{children}</main>
      </div>
    </div>
  )
}
