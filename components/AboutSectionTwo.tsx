"use client"
import Image from "next/image"
import MyPhotoLight from "@/public/images/company/me-light.jpg"
import MyPhotoDark from "@/public/images/company/me-dark.jpg"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { useTranslations } from "next-intl"

export function AboutSectionTwo() {
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
    <div id="about" className="justfy-center flex flex-col items-center">
      <h2 className="heading-h2 text-center">{t("aboutH2")}</h2>
      <p className="mt-4 w-full text-center font-bold text-subheader">
        {t("subH2")}
      </p>
      <div className="mt-16 md:flex md:justify-between md:gap-8">
        <div className="relative w-full">
          <Image
            className="rounded-2xl object-cover"
            src={MyPhoto}
            alt="Photo of founder"
          />
        </div>
        <div className="mt-12 flex flex-col gap-4 font-light md:mt-0 md:gap-8 md:px-16">
          {t.rich("aboutText", {
            // This handles all the <p> tags automatically
            p: (chunks) => (
              <p className="mb-6 leading-relaxed last:mb-0">{chunks}</p>
            ),

            // This handles the highlighted text at the end
            important: (chunks) => (
              <span className="font-semibold whitespace-nowrap text-destructive">
                {chunks}
              </span>
            ),

            // If you prefer to keep the tag as <span> in your JSON, use this key instead:
            span: (chunks) => (
              <span className="font-semibold text-destructive">{chunks}</span>
            ),
          })}
        </div>
      </div>
    </div>
  )
}
