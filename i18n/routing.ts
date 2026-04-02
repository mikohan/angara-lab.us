import { defineRouting } from "next-intl/routing"
import { createNavigation } from "next-intl/navigation"

export const routing = defineRouting({
  // Changed locales to 'en' and 'ru'
  locales: ["en", "ru", "es"],
  defaultLocale: "en",
})

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing)
