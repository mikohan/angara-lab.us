import Image from "next/image"
import Link from "next/link"
import { Logo } from "./Logo"
import TelegramNegative from "@/public/images/company/telegram-negative.png"
import WhatsAppNegative from "@/public/images/company/whatsapp-negative.png"
import AtNegativeIcon from "@/public/images/company/at-negative.svg"

export function Footer() {
  return (
    <footer className="relative bg-footer py-16 text-lg text-footer-text">
      <div className="absolute -top-1 left-0 -z-10 h-8 w-full bg-blur-bg-3/60 blur-3xl"></div>
      <div className="mx-auto flex flex-col items-center justify-center gap-6 px-4 md:flex-row md:justify-between md:px-32">
        <Logo />
        <nav className="flex flex-col gap-8 text-footer-text md:flex-row md:items-center md:justify-center">
          <Link
            scroll={false}
            target="_blank"
            className="flex items-center gap-2"
            href="mailto:manheeusa@gmail.com"
          >
            <Image
              height={32}
              width={32}
              src={AtNegativeIcon}
              alt="Social icon Email"
            />
            manheeusa@gmail.com
          </Link>
          <Link
            scroll={false}
            href="https://t.me/mishabelkin1"
            target="_blank"
            className="flex items-center gap-2"
          >
            <Image
              height={32}
              width={32}
              src={TelegramNegative}
              alt="Social icon telegram"
            />
            {process.env.NEXT_PUBLIC_TELEGRAM}
          </Link>
          <Link
            scroll={false}
            href="https://wa.me/19512244109"
            target="_blank"
            className="flex items-center gap-2"
          >
            <Image
              height={32}
              width={32}
              src={WhatsAppNegative}
              alt="Social icon WA"
            />
            +1 (951) 224 4109
          </Link>
        </nav>
      </div>
    </footer>
  )
}
