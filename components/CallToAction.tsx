"use client"
import Image from "next/image"
import SamLight from "@/public/images/company/sam-light.jpg"
import SamDark from "@/public/images/company/sam-dark.jpg"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import TelegramIcon from "@/public/images/company/telegram-negative.png"
import { useTranslations } from "next-intl"

export function CallToAction() {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const t = useTranslations("HomePage")
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])
  if (!mounted) return null
  const MyPhoto = resolvedTheme == "light" ? SamLight : SamDark
  const telegram = process.env.NEXT_PUBLIC_TELEGRAM ?? "@mishabelkin1"
  return (
    <div id="contacts" className="justfy-center flex flex-col items-center">
      <h2 className="heading-h2 text-center">{t("are_you_ready")}</h2>
      <p className="mt-4 w-full max-w-[80%] text-center font-bold text-subheader">
        {t("are_you_ready_sub")}
      </p>
      <div className="mt-16 md:flex md:gap-8">
        <div className="mt-12 flex flex-col gap-4 font-light md:mt-0 md:max-w-[60%] md:gap-8 md:px-16">
          <h3 className="heading-h3">{t("what_to_do_now")}</h3>
          <p>{t("contact_me", { telegram: telegram })}</p>
          <h3 className="heading-h3">{t("what_next")}</h3>
          <p>{t("what_next2", { telegram: telegram })}</p>
          <p>{t("skills")}</p>
          <div className="my-16 flex w-full justify-center">
            <a
              href={`https://t.me/${process.env.NEXT_PUBLIC_TELEGRAM_LINK}`}
              className="btn-animation flex w-60 cursor-pointer items-center justify-center gap-4 rounded-full bg-btn-color px-8 py-2"
            >
              <Image
                src={TelegramIcon}
                alt="Call me icon"
                height={32}
                width={32}
              />
              {t("contact_me_button")}
            </a>
          </div>
        </div>
        <div className="relative w-full">
          <Image
            className="rounded-2xl object-cover"
            src={MyPhoto}
            alt="Photo of founder"
          />
        </div>
      </div>
    </div>
  )
}
