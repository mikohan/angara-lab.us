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
      <h2 className="heading-h2 text-center">Вы готовы присоединиться?</h2>
      <p className="mt-4 w-full max-w-[80%] text-center font-bold text-subheader">
        Если вы хотите расти вместе с нами и строить сильные международные
        проекты — свяжитесь со мной напрямую
      </p>

      <div className="mt-16 w-full items-center md:flex md:gap-8">
        <div className="mt-12 flex flex-col gap-4 font-light md:mt-0 md:w-1/2 md:gap-8 md:px-16">
          <h3 className="heading-h3">Что делать прямо сейчас</h3>
          <p>
            Напишите мне в Telegram на аккаунт{" "}
            <span className="font-semibold text-primary">{telegram}</span>.
            Расскажите кратко о своем опыте, отправьте ссылку на портфолио или
            резюме.
          </p>

          <h3 className="heading-h3">Что будет дальше</h3>
          <p>
            Я изучу ваши кейсы, и мы запланируем короткий 15-минутный созвон для
            знакомства и обсуждения деталей нашего формата взаимодействия.
          </p>
          <p>
            Нам важны ваши реальные навыки, проактивность, самостоятельность и
            готовность брать на себя ответственность за конечный
            бизнес-результат.
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
