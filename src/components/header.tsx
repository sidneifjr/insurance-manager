'use client'

import { ShieldPlus } from 'lucide-react'
import Link from 'next/link'

export function Header() {
  return (
    <header
      className="flex h-16 items-center border-b border-b-gray-400 px-8"
      data-testid="header"
    >
      <div className="flex w-full items-center justify-between gap-12">
        <Link href="/" className="flex items-center gap-2 tracking-tight">
          <ShieldPlus />
          Sebastian
        </Link>
      </div>
    </header>
  )
}
