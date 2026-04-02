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
        <SelectTrigger className="w-20 rounded-lg border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10 focus:ring-1 focus:ring-blue-500/50">
          <SelectValue placeholder="Language" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="en">Eng</SelectItem>
            <SelectItem value="ru">Рус</SelectItem>
            <SelectItem value="es">Es</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  )
}
