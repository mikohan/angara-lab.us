"use client"
import Image from "next/image"
import { useSmoothScroll } from "@/lib/useSmoothScroll"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CtaButton } from "./CtaButton"
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
import LocaleSelect from "./LocaleSelect"
import { useTranslations } from "next-intl"

const subscribe = () => () => {}
const getClientSnaphost = () => true
const getServerSnaphost = () => false

export function Navbar() {
  const t = useTranslations("Navigation")
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
          <NavigationMenuList className="flex gap-8">
            <NavigationMenuItem>
              <button
                onClick={() => scrollTo("#home")}
                className="nav-animation-underline"
              >
                {t("home")}
              </button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <button
                onClick={() => scrollTo("#about")}
                className="nav-animation-underline"
              >
                {t("about")}
              </button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <button
                onClick={() => scrollTo("#benefits")}
                className="nav-animation-underline"
              >
                {t("why")}
              </button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <button
                onClick={() => scrollTo("#contacts")}
                className="nav-animation-underline"
              >
                {t("contact")}
              </button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <ThemeSwitch />
            </NavigationMenuItem>
            <NavigationMenuItem>
              <LocaleSelect />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop CTA */}
        <div className="hidden md:flex">
          <p>+1 (951) 224-4109</p>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="md:hidden">
              <Menu className="h-6! w-6!" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-35">
            <SheetHeader>
              <SheetTitle className="sr-only">Menu</SheetTitle>
            </SheetHeader>

            <nav className="mt-6 ml-8 flex max-w-[80%] flex-col gap-16 text-2xl font-bold">
              <button
                onClick={() => scrollTo("#about")}
                className="nav-animation-underline"
              >
                {t("about")}
              </button>
              <button
                onClick={() => scrollTo("#benefits")}
                className="nav-animation-underline"
              >
                {t("why")}
              </button>
              <button
                onClick={() => scrollTo("#contacts")}
                className="nav-animation-underline"
              >
                {t("contact")}
              </button>
              <div className="flex w-full justify-center">
                <ThemeSwitch />
              </div>
              <div className="flex w-full justify-center">
                <LocaleSelect />
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
