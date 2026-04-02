"use client"

import { usePathname, useRouter } from "@/i18n/routing"
import { useParams } from "next/navigation"
import { ChangeEvent } from "react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function LocaleSelect() {
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()

  function handleLanguageChange(nextLocale: string) {
    // const nextLocale = event.target.value
    // @ts-expect-error params
    router.replace({ pathname, params }, { locale: nextLocale })
  }

  return (
    <>
      <span className="sr-only">Choose Language</span>
      <Select
        defaultValue={params.locale as string}
        onValueChange={handleLanguageChange}
      >
        <SelectTrigger className="h-12! w-40 rounded-lg border-white/10 bg-white/5 p-2 text-2xl backdrop-blur-sm transition-all hover:bg-white/10 focus:ring-1 focus:ring-blue-500/50 md:h-8! md:w-20 md:text-base">
          <SelectValue placeholder="Language" />
        </SelectTrigger>
        <SelectContent className="max-h-75 text-xl">
          <SelectGroup>
            <SelectItem
              className="py-4 text-xl md:py-2 md:text-base"
              value="en"
            >
              Eng
            </SelectItem>
            <SelectItem
              className="py-4 text-xl md:py-2 md:text-base"
              value="ru"
            >
              Рус
            </SelectItem>
            <SelectItem
              className="py-4 text-xl md:py-2 md:text-base"
              value="es"
            >
              Es
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  )
}
