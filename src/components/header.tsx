'use client'

import Image from 'next/image'
import Link from 'next/link'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'

const menuItens = [
  {
    name: 'Carrinho',
    url: '/cart',
    image: '/cart.svg',
    alt: 'Carrinho',
  },
  {
    name: 'Entrar',
    url: '/login',
    image: '/customer.svg',
    alt: 'Entrar',
  },
]

export function Header() {
  return (
    <header
      className="border-b-[1px] border-b-[#f3f4f6] px-5 py-5"
      data-testid="header"
    >
      <div className="mx-auto flex max-w-[1232px] items-center justify-between">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Flow Lab Tech"
            width={147}
            height={24}
            quality={100}
            priority={true}
            className="w-24 xs:w-auto"
          />
        </Link>

        <NavigationMenu>
          <NavigationMenuList className="gap-2 lg:gap-9">
            {menuItens.map(({ name, url, image, alt }) => {
              return (
                <NavigationMenuItem key={crypto.randomUUID()}>
                  {' '}
                  <Link href={url} className="flex cursor-pointer gap-3">
                    <span className="relative flex cursor-pointer gap-1 text-sm leading-6 text-gray-500 xs:gap-3">
                      <Image
                        src={image}
                        alt={alt}
                        width={13}
                        height={11}
                        className="h-auto w-auto"
                      />

                      {name}
                    </span>
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
