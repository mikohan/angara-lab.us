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

export function Navbar() {
  return (
    <header className="sticky top-0 z-10 w-full backdrop-blur-sm">
      <div className="relative container mx-auto flex h-16 items-center justify-between px-4">
        <div className="absolute top-0 left-0 -z-10 h-16 w-full bg-top-blur blur-2xl"></div>
        {/* Logo */}
        <Logo />
        {/* <Link href="/" className="text-xl font-semibold">
          <span className="bg-linear-to-r from-blue-900 to-blue-400 bg-clip-text font-bold text-transparent">
            [AL] Angara Lab
          </span>
        </Link> */}

        {/* Desktop Menu */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex gap-5">
            <NavigationMenuItem>
              <Link
                href="/about"
                className="text-sm font-medium hover:text-primary"
              >
                About
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="/services"
                className="text-sm font-medium hover:text-primary"
              >
                Services
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="/pricing"
                className="text-sm font-medium hover:text-primary"
              >
                Pricing
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="/contact"
                className="text-sm font-medium hover:text-primary"
              >
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
              <Menu className="h-8 w-8" />
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
