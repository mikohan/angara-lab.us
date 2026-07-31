"use client"

import Image from "next/image"
import MyPhotoLight from "@/public/images/company/me-light.jpg"
import MyPhotoDark from "@/public/images/company/me-dark.jpg"
import { useTheme } from "next-themes"

export function Compensation() {
  const { resolvedTheme } = useTheme()

  const MyPhoto = resolvedTheme === "light" ? MyPhotoLight : MyPhotoDark

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="heading-h2 text-center">Компенсация</h2>
      <p className="mt-4 w-full max-w-[80%] text-center font-medium text-subheader">
        В Angara Lab компенсация состоит из двух элементов:{" "}
        <span className="text-foreground">фиксированной</span> части и{" "}
        <span className="text-foreground">гибкой</span> части.
      </p>

      <div className="mt-16 md:flex md:gap-8">
        <div className="relative w-full">
          <Image
            className="rounded-2xl object-cover"
            src={MyPhoto}
            alt="Фото основателя"
            priority
          />
        </div>

        <div className="mt-12 flex flex-col gap-4 font-light md:mt-0 md:max-w-[60%] md:gap-8 md:px-16">
          <p>
            В Angara Lab компенсация состоит из двух элементов: фиксированной
            части и гибкой части. Фиксированная часть — это оплата за выполнение
            недельного плана работы. У каждой роли есть понятный набор
            обязательных результатов, и при полном выполнении плана человек
            получает свою ставку. Это стабильная основа, которая создаёт
            предсказуемость и прозрачность.
          </p>

          <p>
            Мы ищем людей в команду на долгий срок с возможностью роста до
            ключевых позиций и управления направлениями.
          </p>
          <p>
            Гибкая часть — это бонус за выполнение месячного плана. Он заранее
            определён и привязан к ключевым показателям роли. Если показатели
            удержаны на нужном уровне, бонус автоматически включается в выплату.
            Система простая: есть план, есть результат, есть заранее известная
            сумма
          </p>
          <p>
            Рост компенсации происходит тогда, когда зона ответственности
            расширяется. Если специалист берёт на себя новую функцию, которая
            делает процессы устойчивее и улучшает работу команды, фиксированная
            часть корректируется. Это редкие, но понятные шаги, которые заранее
            согласуются и закрепляются.
          </p>
        </div>
      </div>
    </div>
  )
}
