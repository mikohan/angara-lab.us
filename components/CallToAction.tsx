"use client"
import Image from "next/image"
import SamLight from "@/public/images/company/sam-light.jpg"
import SamDark from "@/public/images/company/sam-dark.jpg"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { CtaButton } from "./CtaButton"
import TelegramIcon from "@/public/images/company/telegram-negative.png"

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
        Вы готовы строить архитектуру бизнеса, а не просто «закрывать задачи»?
      </h2>
      <p className="mt-4 w-full max-w-[80%] text-center font-bold text-subheader">
        Мы начинаем с конкретных задач в реальном секторе бизнеса США, но цель —
        создание масштабной, автономной системы с кратным ростом.
      </p>
      <div className="mt-16 md:flex md:gap-8">
        <div className="mt-12 flex flex-col gap-4 font-light md:mt-0 md:max-w-[60%] md:gap-8 md:px-16">
          <h3 className="heading-h3">Что делать сейчас:</h3>
          <p>
            Если интересно — пишите: {process.env.NEXT_PUBLIC_TELEGRAM}.
            Коротко: что умеете делать руками и какой минимальный фикс вам нужен
            сейчас, чтобы нормально жить и работать.
          </p>
          <h3 className="heading-h3">Что дальше:</h3>
          <p>
            Если вы видите потенциал в долгосрочном партнерстве — пишите в
            телеграм {process.env.NEXT_PUBLIC_TELEGRAM}.
          </p>
          <p>
            Кратко: ваш опыт, ключевые компетенции «руками» и комфортный для вас
            стартовый фикс, который позволит полностью сфокусироваться на
            проекте. Отправляйте резюме и портфолио.
          </p>
          <div className="my-16 flex w-full justify-center">
            <a
              href="https://t.me/mishabelkin1"
              className="btn-animation flex w-60 cursor-pointer items-center justify-center gap-4 rounded-full bg-btn-color px-8 py-2"
            >
              <Image
                src={TelegramIcon}
                alt="Call me icon"
                height={32}
                width={32}
              />
              Contact Me
            </a>
          </div>
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
