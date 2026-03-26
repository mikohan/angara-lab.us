"use client"
import Image from "next/image"
import MyPhotoLight from "@/public/images/company/me-light.jpg"
import MyPhotoDark from "@/public/images/company/me-dark.jpg"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function AboutSection() {
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
      <h2 className="text-center text-2xl font-bold md:max-w-[60%]">
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
            Я с 2001 года в Москве занимался поставками запчастей, маркетингом и
            разработкой софта. В 2022 году, известные обстоятельства вынудили
            меня переехать в Лос Анжелес. Здесь я основал клининговый бизнес.
          </p>
          <p>
            Сейчас мы находимся на этапе перехода от стартапа к бизнесу. Уже
            зарабатываем деньги на высококонкурентном рынке. Сейчас выручка
            $200K, нужно вырасти до $10M.
          </p>
          <p>Здесь есть самое важное - будущее!</p>
          <p>
            Я вижу гигантские перспективы для личного роста и развития бизнеса.
          </p>
          <p>
            Если ты смотришь вперед и готов строить стабильное и безопасное
            будущее для себя - присоединяйся.
          </p>
          <p>
            Я ищу единомышленников и профессионалов, замотивированных на рост и
            развитие.
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
