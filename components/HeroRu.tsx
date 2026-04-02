"use client"
import Image from "next/image"
import MarketShareIcon from "@/public/images/company/market-share.svg"
import { HeroButton } from "./HeroButton"
import { ButtonVideo } from "./ButtonVideo"
import HeroImageDark from "@/public/images/company/hero-dark.png"
import HeroImageLight from "@/public/images/company/hero-light.png"
import { useTranslations } from "next-intl"

export default function HeroRu() {
  const t = useTranslations("HomePage")
  const show_video = process.env.NEXT_PUBLIC_VIDEO_ENABLED === "true"
  return (
    <section className="w-full">
      {/* Box for left side and image */}
      <div className="w-full md:flex md:items-start">
        {/* Container for all left text and buttons */}
        <div className="flex flex-col md:w-[60%] md:justify-center md:pr-16">
          {/* box for market size */}
          <div className="mt-4 inline-flex items-center gap-2 md:mt-0">
            <div>
              <Image
                width={32}
                height={32}
                src={MarketShareIcon}
                alt="Market Share"
              />
            </div>
            <p className="font-base">{t("market")}</p>
          </div>
          {/* header and subheader box */}
          <div className="mt-4 flex flex-col gap-8">
            {/* box for h1 circler function */}
            <div>
              {/* <HeaderCircler id={data.headline.id} data={headlines} /> */}
            </div>
            <div className="min-h-30 leading-normal md:min-h-40">
              <h1 className="text-3xl leading-normal font-bold tracking-normal text-foreground md:text-5xl">
                {t("h1")}
              </h1>
            </div>
            <p className="tracking-tight">{t("sub")}</p>
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
        <div className="relative mt-16 aspect-4/5 w-full md:mt-20 md:w-[40%]">
          <Image
            className="hidden rounded-2xl object-cover dark:block"
            src={HeroImageDark}
            fill
            alt="Hero image"
            priority
            placeholder="blur"
          />
          <Image
            className="block rounded-2xl object-cover dark:hidden"
            src={HeroImageLight}
            fill
            alt="Hero image"
            priority
            placeholder="blur"
          />
        </div>
      </div>
    </section>
  )
}
