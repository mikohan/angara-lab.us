import Image from "next/image"
import Link from "next/link"
import { Logo } from "./Logo"
import TelegramNegative from "@/public/images/company/telegram-negative.png"
import WhatsAppNegative from "@/public/images/company/whatsapp-negative.png"
export function Footer() {
  return (
    <footer className="footer-text relative bg-footer py-8">
      <div className="absolute -top-1 left-0 -z-10 h-8 w-full bg-blur-bg-3/60 blur-3xl"></div>
      <div className="mx-auto flex flex-col items-center justify-center gap-6 px-4 md:flex-row md:justify-between md:px-32">
        <Logo />
        <nav className="flex flex-col gap-8 text-footer-text md:flex-row">
          <Link
            className="flex items-center gap-2"
            href="mailto:manheeusa@gmail.com"
          >
            Email: manheeusa@gmail.com
          </Link>
          <Link
            href="https://t.me/manheeusa"
            target="_blank"
            className="flex items-center gap-2"
          >
            <Image
              height={24}
              width={24}
              src={TelegramNegative}
              alt="Social icon telegram"
            />
            @manheeusa
          </Link>
          <Link
            href="https://wa.me/19512244109"
            target="_blank"
            className="flex items-center gap-2"
          >
            <Image
              height={24}
              width={24}
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
