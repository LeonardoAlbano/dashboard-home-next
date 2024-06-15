'use client'

import { ReactNode } from 'react'

import Header from '@/components/header'
import Sidebar from '@/components/Sidebar'

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid min-h-screen grid-cols-app antialiased">
      <Sidebar />

      <main className="bg-sky-100 pt-20 lg:col-start-1 lg:ml-20 lg:pl-4 lg:pt-0">
        <Header />
        {children}
      </main>
    </div>
  )
}
