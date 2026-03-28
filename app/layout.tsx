import LenisProvider from "@/lib/LenisProvider"
import { blauerNue, geist, inter, roboto } from "./fonts"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import ScrollToTop from "@/components/ScrollToTop"
import { Footer } from "@/components/Footer"
import { Navbar } from "@/components/Navbar"

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
