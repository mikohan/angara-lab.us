"use client"

import Image from "next/image"
import BenefitsImageLight from "@/public/images/company/benefits-light.jpg"
import BenefitsImageDark from "@/public/images/company/benefits-dark.jpg"
import {
  BadgeDollarSign,
  BarChart3,
  Plane,
  Handshake,
  Home,
  Globe,
  FileBarChart,
} from "lucide-react"

export function BenefitsSection() {
  return (
    <div id="benefits" className="flex flex-col items-center justify-center">
      <div className="relative flex w-full flex-col items-center">
        <h2 className="heading-h2 relative text-center">
          Преимущества работы с нами
        </h2>
        <p className="mt-4 w-full text-center font-bold text-subheader">
          Что мы предлагаем каждому участнику нашей команды
        </p>
        <div className="absolute top-0 left-0 -z-20 h-20 w-full bg-top-blur blur-2xl"></div>
      </div>

      <div className="mt-8 w-full items-center md:mt-32 md:flex md:justify-between md:gap-8">
        <ul className="mt-4 flex list-none flex-col gap-8 font-light md:mt-0 md:w-1/2 md:px-16">
          <li className="flex items-center gap-4">
            <div className="text-primary">
              <BadgeDollarSign />
            </div>
            <div>Стабильный доход в долларах США</div>
          </li>
          <li className="flex items-center gap-4">
            <div className="text-primary">
              <BarChart3 />
            </div>
            <div>Прогрессивная система бонусов за результат</div>
          </li>
          <li className="flex items-center gap-4">
            <div className="text-primary">
              <Plane />
            </div>
            <div>Помощь с релокацией для ключевых сотрудников</div>
          </li>
          <li className="flex items-center gap-4">
            <div className="text-primary">
              <Handshake />
            </div>
            <div>Долгосрочное партнерство и прозрачные условия</div>
          </li>
          <li className="flex items-center gap-4">
            <div className="text-primary">
              <Home />
            </div>
            <div>Полностью удаленный формат работы</div>
          </li>
          <li className="flex items-center gap-4">
            <div className="text-primary">
              <Globe />
            </div>
            <div>Опыт работы на развитом американском рынке</div>
          </li>
          <li className="flex items-center gap-4">
            <div className="text-primary">
              <FileBarChart />
            </div>
            <div>Сильные международные кейсы в ваше портфолио</div>
          </li>
        </ul>

        <div className="relative mt-16 w-full md:mt-0 md:w-1/2 md:max-w-[45%]">
          {/* Native Dark Mode Optimization: Renders instantly on server side without useEffect flash */}
          <Image
            className="block rounded-2xl object-cover dark:hidden"
            src={BenefitsImageLight}
            alt="Преимущества компании"
            priority
          />
          <Image
            className="hidden rounded-2xl object-cover dark:block"
            src={BenefitsImageDark}
            alt="Преимущества компании"
            priority
          />
        </div>
      </div>
    </div>
  )
}
