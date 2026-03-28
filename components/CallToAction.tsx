"use client"
import Image from "next/image"
import SamLight from "@/public/images/company/sam-light.jpg"
import SamDark from "@/public/images/company/sam-dark.jpg"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { CtaButton } from "./CtaButton"

export function CallToAction() {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])
  if (!mounted) return null
  const MyPhoto = resolvedTheme == "light" ? SamLight : SamDark
  return (
    <div className="justfy-center flex flex-col items-center">
      <h2 className="heading-h2 text-center">
        Готовы строить систему, а не просто «закрывать задачи»?
      </h2>
      <p className="mt-4 w-full max-w-[80%] text-center font-bold text-subheader">
        Я ищу одного-двух человек, которые станут фундаментом Angara Lab. Если
        вы понимаете, что за небольшим стартом в реальном бизнесе в США стоит
        огромный потенциал роста в твердой валюте — нам по пути.
      </p>
      <div className="mt-16 md:flex md:gap-8">
        <div className="mt-12 flex flex-col gap-4 font-light md:mt-0 md:max-w-[60%] md:gap-8 md:px-16">
          <h3 className="heading-h3">Что делать сейчас:</h3>
          <p>
            Если интересно — пишите: @manheeusa. Коротко: что умеете делать
            руками и какой минимальный фикс вам нужен сейчас, чтобы нормально
            жить и работать.
          </p>
          <CtaButton />
        </div>
        <div className="relative w-full">
          <Image
            className="rounded-2xl object-cover"
            src={MyPhoto}
            alt="Photo of founder"
          />
        </div>
      </div>
    </div>
  )
}
