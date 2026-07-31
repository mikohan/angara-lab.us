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
        Какие задачи перед собой ставим
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
          <p className="leading-relaxed">
            Angara Lab развивает сервисные проекты в Лос‑Анджелесе — Angara
            Steamers и Playa Cleaning. Мы работаем в сегменте локальных услуг,
            где спрос стабилен, а рост зависит от качества процессов, маркетинга
            и скорости внедрения решений. Средний чек в наших направлениях —
            $250–$300, что создаёт понятную экономику и даёт возможность
            масштабировать модель без сложных продуктовых изменений.
          </p>
          <p className="leading-relaxed">
            Наша цель — выстроить операционную систему, которая позволяет
            масштабировать бизнес до $10M в год. План роста основан на трёх
            направлениях: маркетинг с предсказуемым потоком лидов,
            стандартизированные процессы выполнения услуг и расширение покрытия
            за счёт новых команд и локаций.
          </p>
          <p className="leading-relaxed last:mb-0">
            Рост опирается на реальные цифры. При среднем чеке $250–$300 и
            загрузке 3–4 команд, текущий потенциал — около $30–45K в месяц.
            Масштабирование до 15–20 команд выводит выручку в диапазон $110–180K
            в месяц. Добавление второй и третьей локации с такой же моделью даёт
            $350–500K в месяц, что формирует годовой объём около $10M. Это
            достижимый результат за счёт системного маркетинга, стабильного
            выполнения и управляемой операционной структуры.
          </p>
          <p>
            Мы строим компанию, где каждый процесс понятен, каждый результат
            измерим, а каждый участник команды влияет на движение вперёд. Если
            тебе близка работа в среде, где решения принимаются быстро, задачи
            формулируются чётко, а рост зависит от качества системы — смотри
            открытые роли.
          </p>
        </div>
      </div>
    </div>
  )
}
