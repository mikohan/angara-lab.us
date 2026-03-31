import { Metadata } from "next"
import LenisProvider from "@/lib/LenisProvider"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import { notFound } from "next/navigation"
import { routing } from "@/i18n/routing"
import { blauerNue, geist, inter, roboto } from "../fonts"

import "../globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import ScrollToTop from "@/components/ScrollToTop"
import { Footer } from "@/components/Footer"
import { Navbar } from "@/components/Navbar"

const ogUrl =
  process.env.NEXT_PUBLIC_WEBSITE + "/images/company/hero-dark.png" ||
  "https://angara-lab.us/images/company/hero-dark.png"

export const metadata: Metadata = {
  title: "Join Angara Lab — Build a Marketing System for a $10M Vision",
  description:
    "We’re building a high‑performance marketing team to scale a real business in the US market. If you’re a designer, marketer, copywriter, or manager who wants growth, ownership, and impact — welcome to Angara Lab.",
  openGraph: {
    title: "Join Angara Lab — Build a Marketing System for a $10M Vision",
    description:
      "Angara Lab is assembling a world‑class marketing team. Real business. Real growth. Real impact. If you want to build, not just execute — this is your place.",
    url: process.env.NEXT_PUBLIC_WEBSITE,
    siteName: "Angara Lab Careers",
    images: [
      {
        url: ogUrl,
        width: 1200,
        height: 630,
        alt: "Angara Lab — Marketing Team Hiring",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Join Angara Lab — Build a Marketing System for a $10M Vision",
    description:
      "We’re hiring ambitious marketers, designers, and creators who want to grow with a real US‑based business.",
    images: [ogUrl],
  },
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: "en" | "ru" }>
}>) {
  const { locale } = await params
  // This will now correctly validate against ['en', 'ru']
  if (!routing.locales.includes(locale)) {
    notFound()
  }
  const messages = await getMessages()
  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={cn(
        geist.variable,
        blauerNue.variable,
        inter.variable,
        roboto.variable
      )}
    >
      <body>
        <LenisProvider>
          <NextIntlClientProvider messages={messages}>
            <ThemeProvider>
              <Navbar />
              {children}
              <Footer />
            </ThemeProvider>
          </NextIntlClientProvider>
          <ScrollToTop />
        </LenisProvider>
      </body>
    </html>
  )
}
