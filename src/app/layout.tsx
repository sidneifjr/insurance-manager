import './globals.css'

import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'
import { ReactNode } from 'react'

import { Header } from '@/components/header'
import { Toaster } from '@/components/ui/sonner'

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

        <main className="grid flex-1 grid-cols-12 p-8">
          <section className="col-span-12">{children}</section>

          <Toaster richColors />
        </main>
      </body>
    </html>
  )
}
