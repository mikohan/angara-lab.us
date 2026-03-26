"use client"
import Image from "next/image"
import MarketShareIcon from "@/public/images/company/market-share.svg"
import { HeroButton } from "./HeroButton"
import { ButtonVideo } from "./ButtonVideo"
import HeroImageDark from "@/public/images/company/hero-dark.png"
import HeroImageLight from "@/public/images/company/hero-light.png"
import { useTheme } from "next-themes"
import { useEffect, useState, useMemo } from "react"
import { headlines } from "@/app/data/hero-text"
import { HeaderCircler } from "@/components/HeaderCircler"
type currentHeadlineType = {
  id: number
  text: string
  target: string
}

export default function HeroRu() {
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
                width={20}
                height={20}
                src={MarketShareIcon}
                alt="Market Share"
              />
            </div>
            <p className="font-base text-sm">$842 Billion Market in USA</p>
          </div>
          {/* header and subheader box */}
          <div className="mt-4 flex flex-col gap-4">
            {/* box for h1 circler function */}
            <div>
              <HeaderCircler id={data.headline.id} data={headlines} />
            </div>
            <p className="font-roboto tracking-tight">
              Ищу профессионалов в <b>команду</b> маркетинга для
              массштабирования бизнеса в <b>США</b> с $200k до $10M.
            </p>
          </div>
          {/* Buttons box */}
          <div className="mt-8 flex flex-row items-center gap-8 md:mt-44">
            {/* button itself */}
            <HeroButton />
            {/* video button with text box */}
            {show_video && <ButtonVideo />}
          </div>
        </div>
        {/* Image left and bottom on mobile */}
        <div className="relative mt-8 flex h-75 justify-end md:mt-20 md:h-125 md:w-[40%]">
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
