import Image from "next/image"
import MarketShareIcon from "@/public/images/company/market-share.svg"
import VideoIcon from "@/public/images/company/video.svg"
import { HeroButton } from "./HeroButton"
import { useTranslations } from "next-intl"

export default function Hero() {
  const t = useTranslations("HomePage")
  return (
    <section>
      {/* Container for all left text and buttons */}
      <div className="flex flex-col">
        {/* box for market size */}
        <div className="mt-20 inline-flex items-center gap-4">
          <div>
            <Image
              className=""
              width={32}
              height={32}
              src={MarketShareIcon}
              alt="Market Share"
            />
          </div>
          <p className="text-xl font-semibold">$842 Billion Market</p>
        </div>
        {/* header and subheader box */}
        <div className="mt-8 flex flex-col gap-8">
          <h1 className="text-5xl font-bold">
            Scaling Business in USA: $200K to 10M.
          </h1>
          <p>
            I offer: a progressive compensation. Salary in USD. Relocation
            Possibility. Stable Future and Financial Security.
          </p>
        </div>
        {/* Buttons box */}
        <div className="mt-24 flex flex-row items-center gap-8">
          {/* button itself */}
          <HeroButton />
          {/* video button with text box */}
          <div className="inline-flex items-center gap-2">
            <button className="item-center flex h-10 w-10 justify-center rounded-full shadow-lg outline outline-blue-500">
              <Image
                src={VideoIcon}
                alt="Button to play video"
                height={12}
                width={12}
              />
            </button>
            <p className="text-base">Watch Video</p>
          </div>
        </div>
      </div>
    </section>
  )
}
