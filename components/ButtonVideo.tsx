import Image from "next/image"
import VideoIcon from "@/public/images/company/video.svg"

export function ButtonVideo() {
  return (
    <div className="btn-animation inline-flex cursor-pointer items-center gap-2">
      <button
        className="item-center btn-animation flex h-10 w-10 cursor-pointer justify-center rounded-full shadow-lg outline outline-btn-color md:h-12 md:w-12"
        title="Watch video button"
      >
        <Image
          className="text-white"
          src={VideoIcon}
          alt="Button to play video"
          height={12}
          width={12}
        />
      </button>
      <p className="text-sm md:text-base">Watch Video</p>
    </div>
  )
}
