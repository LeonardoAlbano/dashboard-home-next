'use client'

import { ReactNode } from 'react'

import Header from '@/components/header'
import Sidebar from '@/components/Sidebar'

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex h-screen flex-1 flex-col">
        <Header />
        <main className="flex-1·overflow-auto·bg-fund px-4">{children}</main>
      </div>
    </div>
  )
}
