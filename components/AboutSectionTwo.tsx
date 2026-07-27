"use client"

import Image from "next/image"
import MyPhotoLight from "@/public/images/company/me-light.jpg"
import MyPhotoDark from "@/public/images/company/me-dark.jpg"
import { useTheme } from "next-themes"

export function AboutSectionTwo() {
  const { resolvedTheme } = useTheme()

  const MyPhoto = resolvedTheme === "light" ? MyPhotoLight : MyPhotoDark

  return (
    <div id="about" className="flex flex-col items-center justify-center">
      <h2 className="heading-h2 text-center">О компании</h2>
      <p className="mt-4 w-full text-center font-bold text-subheader">
        Кто мы и какие масштабные задачи перед собой ставим
      </p>

      <div className="mt-16 md:flex md:justify-between md:gap-8">
        <div className="relative w-full">
          <Image
            className="rounded-2xl object-cover"
            src={MyPhoto}
            alt="Фото основателя"
            priority
          />
        </div>

        <div className="mt-12 flex flex-col gap-4 font-light md:mt-0 md:gap-8 md:px-16">
          <p className="mb-6 leading-relaxed">
            Мы строим высокоэффективную команду для масштабирования работающего
            бизнеса на рынке США. Наша цель — создать прозрачную систему
            привлечения клиентов и выйти на стабильный целевой уровень выручки.
          </p>
          <p className="mb-6 leading-relaxed">
            Мы не просто выполняем рутинные задачи, мы ищем людей с
            предпринимательским мышлением, готовых брать на себя ответственность
            за ключевые показатели эффективности.
          </p>
          <p className="mb-6 leading-relaxed last:mb-0">
            Если вы хотите расти вместе с нами, влиять на бизнес-результаты и
            создавать востребованный продукт —{" "}
            <span className="font-semibold whitespace-nowrap text-destructive">
              добро пожаловать в команду.
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}
