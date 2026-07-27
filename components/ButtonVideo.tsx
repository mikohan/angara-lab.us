import Image from "next/image"
import VideoIcon from "@/public/images/company/video.svg"

export function ButtonVideo() {
  return (
    <div className="btn-animation inline-flex cursor-pointer items-center gap-2">
      <button
        className="flex h-12 w-12 items-center justify-center rounded-full shadow-lg outline outline-btn-color"
        title="Смотреть видео"
      >
        <Image
          src={VideoIcon}
          alt="Иконка воспроизведения видео"
          width={12}
          height={12}
          className="block text-white"
        />
      </button>
      <p className="text-sm font-medium md:text-base">Смотреть видео</p>
    </div>
  )
}
