"use client"
import Image from "next/image"
import MyPhotoLight from "@/public/images/company/me-light.jpg"
import MyPhotoDark from "@/public/images/company/me-dark.jpg"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function AboutSectionTwo() {
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
        Приветстую, меня зовут Владимир.
      </h2>
      <p className="mt-4 w-full text-center font-bold text-subheader">
        Я собираю сильную комнду для массштабирования бизнеса в США.
      </p>
      <div className="mt-16 md:flex md:gap-8">
        <div className="relative w-full">
          <Image
            className="rounded-2xl object-cover"
            src={MyPhoto}
            alt="Photo of founder"
          />
        </div>
        <div className="mt-12 flex flex-col gap-4 font-light md:mt-0 md:gap-8 md:px-16">
          <p>
            Привет. Я Влад, развиваю в США две компании в сфере
            профессионального клининга (уборка и химчистка мебели). Это
            понятный, приземленный бизнес с реальной базой клиентов в
            Калифорнии.
          </p>
          <p>
            Сейчас мы находимся на этапе перехода от стартапа к бизнесу. Уже
            зарабатываем деньги на высококонкурентном рынке. Сейчас выручка
            $200K, нужно вырасти до $10M.
          </p>
          <p>
            Идея создать маркетинговую команду Angara Lab — научиться, построить
            систему и далее развивать бизнесы разной направленности в США на
            федеральном уровне.
          </p>
          <p>
            Я вижу гигантские перспективы для личного роста и развития бизнеса.
          </p>
          <p>
            В чем проблема: У меня есть заказы и поток клиентов, но мне не
            хватает системности в маркетинге и аналитике. Мне нужны люди,
            которые умеют строить инфраструктуру, а не просто «запускать
            рекламу».
          </p>
          <p>
            Кого я ищу: Мне не нужны «руки», которые ждут ТЗ. Мне нужны
            архитекторы систем. Люди, которые умеют строить инфраструктуру,
            считать юнит-экономику и отвечать за результат, а не за «процесс».
          </p>
          <p>
            Предлагаю присоединиться к команде. Будем вместе зарабатывать в США,
            на рынке где есть деньги и возможность вырасти на весь мир.
          </p>
        </div>
      </div>
    </div>
  )
}
