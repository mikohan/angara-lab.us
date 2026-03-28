"use client"
import Image from "next/image"
import MarketShareIcon from "@/public/images/company/market-share.svg"
import { HeroButton } from "./HeroButton"
import { ButtonVideo } from "./ButtonVideo"
import HeroImageDark from "@/public/images/company/hero-dark.png"
import HeroImageLight from "@/public/images/company/hero-light.png"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { headlines } from "@/app/data/hero-text"
import { RoughNotation, RoughNotationGroup } from "react-rough-notation"
type currentHeadlineType = {
  id: number
  text: string
  target: string
}

export function HeroRuTwo() {
  const { theme, resolvedTheme } = useTheme()
  // const [mounted, setMounted] = useState(false)
  // const [headline, setHeadline] = useState<string>("")
  const [data, setData] = useState<{
    mounted: boolean
    headline: currentHeadlineType | null
    index: number | string
  }>({
    mounted: false,
    headline: null,
    index: 0,
  })

  useEffect(() => {
    const savedIndex = localStorage.getItem("headline_index")
    const currentIndex = savedIndex ? parseInt(savedIndex, 10) : 0
    const currentHeadline = headlines[currentIndex]
    const nextIndex = (currentIndex + 1) % headlines.length
    localStorage.setItem("headline_index", nextIndex.toString())

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setData({
      mounted: true,
      headline: currentHeadline,
      index: currentIndex,
    })
  }, [])

  // if (!mounted) return null // Prevent hydration mismatch
  if (!data.mounted || !data.headline) return null
  const HeroImage = resolvedTheme == "light" ? HeroImageLight : HeroImageDark

  const show_video = process.env.NEXT_PUBLIC_VIDEO_ENABLED === "true"
  return (
    <section className="w-full">
      {/* Box for left side and image */}
      <div className="w-full md:flex">
        {/* Container for all left text and buttons */}
        <div className="flex flex-col md:w-[60%] md:justify-center md:pr-16">
          {/* box for market size */}
          <div className="mt-4 inline-flex items-center gap-2 md:mt-0">
            <div>
              <Image
                className=""
                width={32}
                height={32}
                src={MarketShareIcon}
                alt="Market Share"
              />
            </div>
            <p className="font-base">$842 Billion Market in USA</p>
          </div>
          {/* header and subheader box */}
          <div className="mt-4 flex flex-col gap-8">
            {/* box for h1 circler function */}
            <div>
              <RoughNotationGroup show={true}>
                <h1 className="text-3xl leading-normal font-bold tracking-normal text-foreground md:text-5xl">
                  Нужен системный
                  <RoughNotation
                    type="highlight"
                    color="var(--notation)" // Your teal brand color
                    strokeWidth={1}
                    // padding={6}
                    iterations={1}
                    animationDuration={600}
                  >
                    <span> Performance</span>{" "}
                  </RoughNotation>
                  Маркетолог для рынка США.
                </h1>
              </RoughNotationGroup>
            </div>
            <p className="tracking-tight">
              В чем суть: У меня работающий бизнес в Лос-Анджелесе —
              профессиональная химчистка мебели и уборка. Это не «стартап» на
              бумаге в поисках инвесторов. Это реальные машины, профессиональное
              оборудование (ProTeam, экстракторы) и живые клиенты в Калифорнии.
            </p>
            <h2 className="heading-h2">
              Оффер (честно о деньгах и перспективах):
            </h2>
            <p>
              Оплата в USD: Я всё понимаю про курс рубля и инфляцию. Плачу в
              твердой валюте, чтобы ваши деньги не превращались в тыкву на
              следующее утро. Модель «Растем вместе»: Скажу прямо — у меня нет
              бюджета платить $5,000 в месяц с первого дня. Мы начинаем с
              комфортного фикса, но привязываем твой доход к росту выручки. Если
              твои связки в Meta или воронки приносят лидов и мы идем к цели в
              $10M — твой чек растет автоматически. Доступ к рынку США: Ты
              будешь работать с топовым стеком: GoHighLevel, ManyChat, Meta
              CAPI. Это не просто «настройка таргета», это создание системы,
              которая реально работает на самом конкурентном рынке мира.
            </p>
          </div>
          {/* Buttons box */}
          <div className="mt-16 flex flex-row items-center gap-8 md:mt-44">
            {/* button itself */}
            <HeroButton />
            {/* video button with text box */}
            {show_video && <ButtonVideo />}
          </div>
        </div>
        {/* Image left and bottom on mobile */}
        <div className="relative mt-16 flex h-75 justify-end md:mt-20 md:h-125 md:w-[40%]">
          {/* <div className="anim-pulse absolute top-0 left-0 -z-10 h-full w-full rounded-full bg-[radial-gradient(circle_at_center,var(--blur-bg-1),var(--blur-bg-2),var(--blur-bg-4))] opacity-60 blur-[120px]"></div> */}
          <Image
            className="rounded-2xl object-cover object-right"
            src={HeroImage}
            fill
            alt="Hero image"
          />
        </div>
      </div>
    </section>
  )
}
