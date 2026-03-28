"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CtaButton } from "./CtaButton"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

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

export function Navbar() {
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
              <Link href="/about" className="nav-animation-underline">
                About
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/services" className="nav-animation-underline">
                Services
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/pricing" className="nav-animation-underline">
                Pricing
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" className="nav-animation-underline">
                Contact
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <ThemeSwitch />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop CTA */}
        <div className="hidden md:flex">
          <CtaButton />
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="md:hidden">
              <Menu className="h-6! w-6!" />
            </Button>
          </SheetTrigger>

          <SheetContent title="This is a menu" side="right" className="w-65">
            <nav className="mt-6 ml-8 flex max-w-[80%] flex-col gap-4">
              <Link href="/about" className="text-lg font-medium">
                About
              </Link>
              <Link href="/services" className="text-lg font-medium">
                Services
              </Link>
              <Link href="/pricing" className="text-lg font-medium">
                Pricing
              </Link>
              <Link href="/contact" className="text-lg font-medium">
                Contact
              </Link>
              <ThemeSwitch />

              <CtaButton />
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
