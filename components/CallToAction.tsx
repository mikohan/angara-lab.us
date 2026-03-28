"use client"
import Image from "next/image"
import MyPhotoLight from "@/public/images/company/me-light.jpg"
import MyPhotoDark from "@/public/images/company/me-dark.jpg"
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
  const MyPhoto = resolvedTheme == "light" ? MyPhotoLight : MyPhotoDark
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
            Напишите мне в Telegram: @manheeusa В первом сообщении не присылайте
            стандартное резюме на 5 страниц. Коротко ответьте на 3 вопроса:
            Какую самую сложную систему маркетинга или аналитики вы собрали
            руками? Какие конкретные цифры (ROI, стоимость лида, конверсия) вы
            контролировали? Какой минимальный фикс в месяц вам необходим на
            старте, чтобы вы могли полностью сфокусироваться на проекте?
          </p>
          <h3 className="heading-h3">
            Предупреждаю сразу: я отвечу не всем. Если ваш опыт и подход
            совпадут с моим видением — назначим первый короткий
            созвон-знакомство.
          </h3>
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
