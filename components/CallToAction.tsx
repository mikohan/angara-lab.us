"use client"

import Image from "next/image"
import SamLight from "@/public/images/company/sam-light.jpg"
import SamDark from "@/public/images/company/sam-dark.jpg"
import TelegramIcon from "@/public/images/company/telegram-negative.png"

export function CallToAction() {
  const telegram = process.env.NEXT_PUBLIC_TELEGRAM ?? "@mishabelkin1"
  const telegramLink = process.env.NEXT_PUBLIC_TELEGRAM_LINK ?? "mishabelkin1"

  return (
    <div id="contacts" className="flex flex-col items-center justify-center">
      <h2 className="heading-h2 text-center">
        Готовы работать в системе, которая растёт?
      </h2>
      <p className="mt-4 w-full max-w-[80%] text-center font-bold text-subheader">
        Если вы хотите расти вместе с нами и строить сильные международные
        проекты — свяжитесь со мной напрямую
      </p>

      <div className="mt-16 w-full items-center md:flex md:gap-8">
        <div className="mt-12 flex flex-col gap-4 font-light md:mt-0 md:w-1/2 md:gap-8 md:px-16">
          <p>
            Angara Lab строит операционную модель, способную масштабироваться до
            нескольких локаций и выйти на выручку $10M в год. Мы двигаемся
            быстро, работаем по понятным стандартам и создаём среду, где
            результат зависит от качества решений, а не от хаоса.
          </p>

          <p>
            Если тебе близок структурный подход, ясные задачи и работа, которая
            напрямую влияет на развитие проектов — посмотри открытые роли и
            выбери ту, где твои навыки дадут максимальный эффект.
          </p>
          <p>
            Отправь резюме в Telegram. Если профиль подойдёт под текущие задачи
            — я свяжусь. Если нет, добавлю в базу и вернусь к тебе, когда
            появится подходящая роль.
          </p>

          <div className="my-16 flex w-full justify-center">
            <a
              href={`https://t.me/${telegramLink}`}
              className="btn-animation flex w-60 cursor-pointer items-center justify-center gap-4 rounded-full bg-btn-color px-8 py-2 font-medium text-white"
            >
              <Image
                src={TelegramIcon}
                alt="Иконка Telegram"
                height={32}
                width={32}
              />
              Написать мне
            </a>
          </div>
        </div>

        <div className="relative w-full md:w-1/2 md:max-w-[45%]">
          {/* Native Dark Mode Optimization: Prevents layout flashing on initial client mount */}
          <Image
            className="block rounded-2xl object-cover dark:hidden"
            src={SamLight}
            alt="Фото основателя Сэма"
            priority
          />
          <Image
            className="hidden rounded-2xl object-cover dark:block"
            src={SamDark}
            alt="Фото основателя Сэма"
            priority
          />
        </div>
      </div>
    </div>
  )
}
