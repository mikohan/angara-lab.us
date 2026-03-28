"use client"
import Image from "next/image"
import MyPhotoLight from "@/public/images/company/me-light.jpg"
import MyPhotoDark from "@/public/images/company/me-dark.jpg"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { BriefcaseBusiness, Handshake } from "lucide-react"

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
      <h2 className="heading-h2 text-center">Кто нужен.</h2>
      <p className="mt-4 w-full max-w-[80%] text-center font-bold text-subheader">
        Я ищу профессионалов, понмающих, что результат - это следствие процесса,
        а не подвига.
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
            CRM, полная автоматизация пути клиента. Сложные воронки. Считать
            показатели: Вы должны знать стоимость лида, конверсию каждого этапа
            и четко видеть, где мы теряем деньги. Управлять эффективностью:
            Самостоятельно находить узкие места, предлагать решения и внедрять
            их.
          </p>
          <h3 className="heading-h3">
            Я ищу людей в долгую, поэтому к отбору подхожу осознанно. Мне важна
            совместимость подходов и ценностей.
          </h3>
          <p>
            Я ищy не просто исполнителя, а профессионала, который готов усилить
            бизнес и развиваться внутри него. Если вам интересно строить
            серьезную системную архитектуру — давайте пообщаемся.
          </p>
          <h3 className="heading-h3">Процесс выглядит так:</h3>
          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-4">
              <Handshake className="shrink-0 text-blur-bg-3" />
              Знакомство. Короткий созвон, чтобы синхронизироваться по видению и
              целям.
            </li>
            <li className="flex items-start gap-4">
              <BriefcaseBusiness className="shrink-0 text-blur-bg-3" />
              Технический разбор. Глубокое интервью, где мы обсудим логику
              построения систем и работу.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
