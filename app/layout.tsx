import { Metadata } from "next"
import LenisProvider from "@/lib/LenisProvider"
import { blauerNue, geist, inter, roboto } from "./fonts"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import ScrollToTop from "@/components/ScrollToTop"
import { Footer } from "@/components/Footer"
import { Navbar } from "@/components/Navbar"

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
        url: `${process.env.NEXT_PUBLIC_WEBSITE}/og-image.jpg`,
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
    images: [`${process.env.NEXT_PUBLIC_WEBSITE}/og-image.jpg`],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
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
          <ThemeProvider>
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
          <ScrollToTop />
        </LenisProvider>
      </body>
    </html>
  )
}
