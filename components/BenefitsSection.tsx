"use client"
import Image from "next/image"
import BenefitsImageLight from "@/public/images/company/benefits-light.jpg"
import BenefitsImageDark from "@/public/images/company/benefits-dark.jpg"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import {
  BadgeDollarSign,
  BarChart3,
  Plane,
  Handshake,
  Home,
  Globe,
  FileBarChart,
} from "lucide-react"
;<BadgeDollarSign className="text-blue-500" strokeWidth={1.5} />

export function BenefitsSection() {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])
  if (!mounted) return null
  const MyPhoto =
    resolvedTheme == "light" ? BenefitsImageLight : BenefitsImageDark
  return (
    <div className="justfy-center flex flex-col items-center">
      <div className="relative flex w-full flex-col items-center">
        <h2 className="heading-h2 relative text-center">Бенефиты.</h2>
        <p className="mt-4 w-full text-center font-bold text-subheader">
          Несколько бенефитов, которые Вы можете получить при успешном
          сотрудничестве.
        </p>
        <div className="absolute top-0 left-0 -z-20 h-20 w-full bg-top-blur blur-2xl"></div>
      </div>
      <div className="mt-8 md:mt-32 md:flex md:justify-between md:gap-8">
        <ul className="mt-4 flex list-none flex-col gap-8 font-light md:mt-0 md:px-16">
          <li className="flex items-center gap-4">
            <div>
              <BadgeDollarSign />
            </div>
            <div>Доход в долларах</div>
          </li>
          <li className="flex items-center gap-4">
            <div>
              <BarChart3 />
            </div>
            <div>Прогрессивная система оплаты</div>
          </li>
          <li className="flex items-center gap-4">
            <div>
              <Plane />
            </div>
            <div>Помощь с релокацией</div>
          </li>
          <li className="flex items-center gap-4">
            <div>
              <Handshake />
            </div>
            <div>Долгосрочное сотрудничество</div>
          </li>
          <li className="flex items-center gap-4">
            <div>
              <Home />
            </div>
            <div>Удалённый формат работы</div>
          </li>
          <li className="flex items-center gap-4">
            <div>
              <Globe />
            </div>
            <div>Работа с американским рынком</div>
          </li>
          <li className="flex items-center gap-4">
            <div>
              <FileBarChart />
            </div>
            <div>Американские кейсы в портфолио</div>
          </li>
        </ul>
        <div className="relative mt-16 w-full md:mt-0 md:max-w-[40%]">
          <Image
            className="rounded-2xl object-cover"
            src={MyPhoto}
            alt="Photo of founder"
          />
        </div>
      </div>
    </div>
  )
}
