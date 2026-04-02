import Image from "next/image"
import VideoIcon from "@/public/images/company/video.svg"
import { useTranslations } from "next-intl"

export function ButtonVideo() {
  const t = useTranslations("Buttons")
  return (
    <div className="btn-animation inline-flex cursor-pointer items-center gap-2">
      <button
        className="flex h-12 w-12 items-center justify-center rounded-full shadow-lg outline outline-btn-color"
        title="Watch video button"
      >
        <Image
          src={VideoIcon}
          alt="Button to play video"
          width={12}
          height={12}
          className="block text-white"
        />
      </button>

      <p className="text-sm md:text-base">{t("video")}</p>
    </div>
  )
}
