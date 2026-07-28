"use client"

import Image from "next/image"
import { useSmoothScroll } from "@/lib/useSmoothScroll"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CtaButton } from "./CtaButton"
import Link from "next/link"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import TelegramNegative from "@/public/images/company/telegram-negative.png"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { ThemeSwitch } from "./theme-provider"
import { Logo } from "./Logo"
import { useSyncExternalStore } from "react"

const subscribe = () => () => {}
const getClientSnaphost = () => true
const getServerSnaphost = () => false
const links = [
  { link: "/", text: "Главная" },
  { link: "/careers", text: "Вакансии" },
  { link: "/contacts", text: "Контакты" },
  { link: "/blog", text: "Блог" },
]

export function Navbar() {
  const scrollTo = useSmoothScroll()

  const isMounted = useSyncExternalStore(
    subscribe,
    getClientSnaphost,
    getServerSnaphost
  )

  if (!isMounted) {
    return null
  }

  return (
    <header className="sticky top-0 z-10 w-full backdrop-blur-sm">
      <div className="relative container mx-auto flex h-16 items-center justify-between px-4">
        <div className="absolute top-0 left-0 -z-10 h-16 w-full bg-top-blur blur-2xl"></div>

        {/* Logo */}
        <Logo />

        {/* Desktop Menu */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex items-center gap-8">
            {links.map((l, i) => (
              <NavigationMenuItem key={i}>
                <Link href={l.link} className="nav-animation-underline">
                  {l.text}
                </Link>
              </NavigationMenuItem>
            ))}
            <NavigationMenuItem>
              <ThemeSwitch />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop CTA */}
        <div className="hidden md:flex">
          <p className="text-sm font-medium">+1 (951) 224-4109</p>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="md:hidden">
              <Menu className="h-6! w-6!" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px]">
            <SheetHeader>
              <SheetTitle className="sr-only">Меню</SheetTitle>
            </SheetHeader>
            <nav className="mt-6 flex flex-col gap-6 text-xl font-semibold">
              <button
                onClick={() => scrollTo("#home")}
                className="nav-animation-underline text-left"
              >
                Главная
              </button>
              <button
                onClick={() => scrollTo("#about")}
                className="nav-animation-underline text-left"
              >
                О нас
              </button>
              <button
                onClick={() => scrollTo("#benefits")}
                className="nav-animation-underline text-left"
              >
                Преимущества
              </button>
              <button
                onClick={() => scrollTo("#contacts")}
                className="nav-animation-underline text-left"
              >
                Контакты
              </button>
              <Link href="/blog" className="nav-animation-underline text-left">
                Блог
              </Link>
              <div className="mt-4 flex w-full items-center justify-start gap-4 border-t pt-4">
                <span className="text-sm text-muted-foreground">Тема:</span>
                <ThemeSwitch />
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
