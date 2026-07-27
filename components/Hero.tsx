import Image from "next/image"
import MarketShareIcon from "@/public/images/company/market-share.svg"
import VideoIcon from "@/public/images/company/video.svg"
import { HeroButton } from "./HeroButton"

export default function Hero() {
  return (
    <section className="w-full">
      {/* Container for all left text and buttons */}
      <div className="flex flex-col">
        {/* Box for market size */}
        <div className="mt-20 inline-flex items-center gap-4">
          <div>
            <Image
              width={32}
              height={32}
              src={MarketShareIcon}
              alt="Доля рынка"
            />
          </div>
          <p className="text-xl font-semibold">Рынок в $842 Миллиарда</p>
        </div>

        {/* Header and subheader box */}
        <div className="mt-8 flex flex-col gap-8">
          <h1 className="max-w-4xl text-5xl leading-tight font-bold">
            Масштабирование бизнеса в США: от $200K до 10M.
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Мы предлагаем: прогрессивную систему оплаты, оклад в долларах США
            (USD), возможность релокации для лучших сотрудников, стабильное
            будущее и финансовую безопасность.
          </p>
        </div>

        {/* Buttons box */}
        <div className="mt-24 flex flex-row items-center gap-8">
          {/* Main action button */}
          <HeroButton />

          {/* Video button with text box */}
          <div className="group inline-flex cursor-pointer items-center gap-2">
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full shadow-lg outline outline-blue-500 transition-transform group-hover:scale-105"
              title="Смотреть видео"
            >
              <Image
                src={VideoIcon}
                alt="Иконка воспроизведения видео"
                height={12}
                width={12}
              />
            </button>
            <p className="text-base font-medium">Смотреть видео</p>
          </div>
        </div>
      </div>
    </section>
  )
}
