'use client'

import { ShieldPlus } from 'lucide-react'
import Link from 'next/link'

import { H1 } from './typography/h1'

export function Header() {
  return (
    <header
      className="flex h-20 items-center border-b border-b-gray-400 bg-gray-700 px-8"
      data-testid="header"
    >
      <div className="flex w-full items-center justify-between gap-12">
        <Link
          href="/"
          className="flex w-full items-center gap-2 tracking-tight text-white"
        >
          <ShieldPlus width={32} height={32} />

          <H1>Sebastian</H1>
        </Link>
      </div>
    </header>
  )
}
