import Image from "next/image"
import ButtonStarIcon from "@/public/images/company/ButtonStar.svg"
import { useTranslations } from "next-intl"

export function HeroButton() {
  const t = useTranslations("Buttons")
  return (
    <button
      className="btn-animation flex h-12 cursor-pointer items-center gap-2 rounded-full px-4 py-2 text-sm shadow-lg outline outline-btn-color md:text-base"
      title="Button to apply on position"
    >
      <Image
        src={ButtonStarIcon}
        alt="Star on the button"
        height={16}
        width={16}
      />
      {t("hero")}
    </button>
  )
}
