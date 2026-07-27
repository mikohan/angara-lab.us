"use client"

import Image from "next/image"
import MyPhotoLight from "@/public/images/company/me-light.jpg"
import MyPhotoDark from "@/public/images/company/me-dark.jpg"
import { useTheme } from "next-themes"

export function WhoINeed() {
  const { resolvedTheme } = useTheme()

  const MyPhoto = resolvedTheme === "light" ? MyPhotoLight : MyPhotoDark

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="heading-h2 text-center">Кто мне нужен</h2>
      <p className="mt-4 w-full max-w-[80%] text-center font-bold text-subheader">
        Ищем сильных специалистов, готовых строить маркетинг-систему на
        результат
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
          <h3 className="heading-h3">Что предстоит делать</h3>
          <p>
            Разрабатывать архитектуру маркетинговых кампаний, настраивать
            сквозную аналитику и запускать эффективные каналы привлечения
            клиентов.
          </p>

          <h3 className="heading-h3">Долгосрочное сотрудничество</h3>
          <p>
            Мы ищем людей в команду на долгий срок с возможностью роста до
            ключевых позиций и управления направлениями.
          </p>

          <h3 className="heading-h3">Процесс взаимодействия</h3>
          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-4">
              <span className="font-semibold">•</span>
              Первая ознакомительная встреча для обсуждения вашего опыта и наших
              задач.
            </li>
            <li className="flex items-start gap-4">
              <span className="font-semibold">•</span>
              Детальный разбор кейсов и условий совместной работы.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
