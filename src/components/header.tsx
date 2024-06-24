'use client'

import { ShieldPlus } from 'lucide-react'
import Link from 'next/link'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'

const menuItens = [
  {
    name: 'Item 1',
    url: '/cart',
    image: '/cart.svg',
    alt: 'Carrinho',
  },
  {
    name: 'Item 2',
    url: '/login',
    image: '/customer.svg',
    alt: 'Entrar',
  },
]

export function Header() {
  return (
    <header
      className="flex h-16 items-center border-b border-b-gray-400 px-6"
      data-testid="header"
    >
      <div className="flex w-full items-center justify-between gap-12">
        <Link href="/" className="flex gap-2 tracking-tight">
          <ShieldPlus />
          Sebastian
        </Link>

        <NavigationMenu className="flex items-center justify-between">
          <NavigationMenuList className="gap-2 lg:gap-9">
            {menuItens.map(({ name, url, image, alt }) => {
              return (
                <NavigationMenuItem key={crypto.randomUUID()}>
                  {' '}
                  <Link
                    href={url}
                    className="flex cursor-pointer gap-2 text-sm tracking-tight"
                  >
                    <span className="">{name}</span>
                  </Link>
                </NavigationMenuItem>
              )
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  )
}
