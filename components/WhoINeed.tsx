"use client"
import Image from "next/image"
import MyPhotoLight from "@/public/images/company/me-light.jpg"
import MyPhotoDark from "@/public/images/company/me-dark.jpg"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { BriefcaseBusiness, Handshake } from "lucide-react"
import { useTranslations } from "next-intl"

export function WhoINeed() {
  const t = useTranslations("HomePage")
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])
  if (!mounted) return null
  const MyPhoto = resolvedTheme == "light" ? MyPhotoLight : MyPhotoDark
  return (
    <div className="justfy-center flex flex-col items-center">
      <h2 className="heading-h2 text-center">{t("who_i_need")}</h2>
      <p className="mt-4 w-full max-w-[80%] text-center font-bold text-subheader">
        {t("who_i_need_sub")}
      </p>
      <div className="mt-16 md:flex md:gap-8">
        <div className="relative w-full">
          <Image
            className="rounded-2xl object-cover"
            src={MyPhoto}
            alt="Photo of founder"
          />
        </div>
        <div className="mt-12 flex flex-col gap-4 font-light md:mt-0 md:max-w-[60%] md:gap-8 md:px-16">
          <h3 className="heading-h3">{t("what_to_do")}</h3>
          <p>{t("architecture")}</p>
          <h3 className="heading-h3">{t("long_term")}</h3>
          <p>{t("looking_for")}</p>
          <h3 className="heading-h3">{t("process")}</h3>
          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-4">{t("meeting")}</li>
            <li className="flex items-start gap-4">{t("detailed")}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
