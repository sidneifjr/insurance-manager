import './globals.css'

import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'
import { ReactNode } from 'react'

import { Header } from '@/components/header'
import { SideMenu } from '@/components/side-menu'

export const metadata: Metadata = {
  title: {
    template: '%s | Sebastian',
    default: 'Dashboard | Sebastian',
  },

  description: 'Sebastian, tudo que você precisa.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`flex min-h-screen flex-col ${GeistSans.className}`}>
        <Header />

        <main className="grid flex-1 grid-cols-12">
          <SideMenu />

          <section className="col-span-10 p-4">{children}</section>
        </main>
      </body>
    </html>
  )
}
