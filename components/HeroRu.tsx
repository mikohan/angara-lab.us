import Image from "next/image"
import MarketShareIcon from "@/public/images/company/market-share.svg"
import { HeroButton } from "./HeroButton"
import { ButtonVideo } from "./ButtonVideo"
import HeroImageDark from "@/public/images/company/hero-dark.png"
import HeroImageLight from "@/public/images/company/hero-light.png"

export default function HeroRu() {
  const show_video = process.env.NEXT_PUBLIC_VIDEO_ENABLED === "true"

  return (
    <section className="w-full">
      {/* Box for left side and image */}
      <div className="w-full md:flex md:items-start">
        {/* Container for all left text and buttons */}
        <div className="flex flex-col md:w-[60%] md:justify-center md:pr-16">
          {/* Box for market size */}
          <div className="mt-4 inline-flex items-center gap-2 md:mt-0">
            <div>
              <Image
                width={32}
                height={32}
                src={MarketShareIcon}
                alt="Доля рынка"
              />
            </div>
            <p className="text-lg font-medium">Рынок в $842 Миллиарда</p>
          </div>

          {/* Header and subheader box */}
          <div className="mt-4 flex flex-col gap-8">
            <div className="min-h-[120px] leading-normal md:min-h-[160px]">
              <h1 className="text-3xl leading-normal font-bold tracking-normal text-foreground md:text-5xl">
                Angara Lab — маркетинговое агентство, которое строит системы
                роста для сервисных проектов в США.
              </h1>
            </div>
            <p className="text-lg tracking-tight text-muted-foreground">
              Мы управляем маркетингом, контентом и операционной архитектурой
              Angara Steamers и Playa Cleaning — и масштабируем их как
              продуктовые проекты, а не как локальный сервис. Открытые роли для
              тех, кто умеет строить маркетинговые системы, управлять ростом и
              влиять на ключевые показатели.
            </p>
          </div>

          {/* Buttons box */}
          <div className="mt-16 flex flex-row items-center gap-8 md:mt-44">
            {/* Button itself */}
            <HeroButton />
            {/* Video button with text box */}
            {show_video && <ButtonVideo />}
          </div>
        </div>

        {/* Image right and bottom on mobile */}
        <div className="relative mt-16 aspect-[4/5] w-full md:mt-20 md:w-[40%]">
          {/* Native Dark Mode Rendering Optimization */}
          <Image
            className="hidden rounded-2xl object-cover dark:block"
            src={HeroImageDark}
            fill
            alt="Команда Angara Lab"
            priority
            placeholder="blur"
          />
          <Image
            className="block rounded-2xl object-cover dark:hidden"
            src={HeroImageLight}
            fill
            alt="Команда Angara Lab"
            priority
            placeholder="blur"
          />
        </div>
      </div>
    </section>
  )
}
