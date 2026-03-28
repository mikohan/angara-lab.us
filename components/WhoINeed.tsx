"use client"
import Image from "next/image"
import MyPhotoLight from "@/public/images/company/me-light.jpg"
import MyPhotoDark from "@/public/images/company/me-dark.jpg"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function WhoINeed() {
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
      <h2 className="heading-h2 text-center">Кого ищу.</h2>
      <p className="mt-4 w-full max-w-[80%] text-center font-bold text-subheader">
        Мне не нужны «руки», которые ждут ТЗ. Мне нужны архитекторы систем.
        Люди, которые умеют строить инфраструктуру, считать юнит-экономику и
        отвечать за результат, а не за «процесс».
      </p>
      <div className="mt-16 md:flex md:gap-8">
        <div className="relative w-full">
          <Image
            className="rounded-2xl object-cover"
            src={MyPhoto}
            alt="Photo of founder"
          />
        </div>
        <div className="mt-12 flex flex-col gap-4 font-light md:mt-0 md:max-w-[60%] md:gap-8 md:px-16">
          <h3 className="heading-h3">Что нужно будет делать:</h3>
          <p>
            Строить архитектуру: Сквозная аналитика, связки между трафиком и
            CRM, полная автоматизация пути клиента. Считать показатели: Вы
            должны знать стоимость лида, конверсию каждого этапа и четко видеть,
            где мы теряем деньги. Управлять эффективностью: Самостоятельно
            находить узкие места, предлагать решения и внедрять их.
          </p>
          <h3 className="heading-h3">
            Как попасть в проект (сразу предупреждаю — будет непросто):
          </h3>
          <p>
            Я ищу людей в долгую, поэтому отбор жесткий. Никаких «платных
            тестов» и быстрых решений. Первый этап: Короткий созвон-знакомство.
            Поймем, на одном ли мы языке говорим. Второй этап: Глубокое
            техническое интервью. Мне нужно увидеть, как вы мыслите, как строите
            логику систем и как работаете с цифрами. Финальное решение: Только
            если я на 100% уверен, что вы профи, который усилит бизнес. Если вы
            ищете «просто работу на пару часов» — проходите мимо. Если готовы
            строить серьезную систему в американском бизнесе и расти вместе с
            ней — пишите. Telegram для связи: @manheeusa. Пишите коротко: какие
            системы строили, какие цифры показывали и какой минимальный фикс вам
            нужен на старте, чтобы войти в проект.
          </p>
        </div>
      </div>
    </div>
  )
}
