import Image from "next/image"
import ButtonStarIcon from "@/public/images/company/ButtonStar.svg"

export function HeroButton() {
  const telegramLink = process.env.NEXT_PUBLIC_TELEGRAM_LINK ?? "mishabelkin1"

  return (
    <a
      href={`https://t.me{telegramLink}`}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-animation flex h-12 cursor-pointer items-center gap-2 rounded-full bg-btn-color px-4 py-2 text-sm font-medium text-white shadow-lg outline outline-btn-color md:text-base"
      title="Подать заявку на позицию"
    >
      <Image src={ButtonStarIcon} alt="Иконка звезды" height={16} width={16} />
      Присоединиться к команде
    </a>
  )
}
