import { Sparkle } from "lucide-react"

export function HeroButton() {
  const telegramLink =
    process.env.NEXT_PUBLIC_TELEGRAM_LINK ?? "valdusabusiness"

  return (
    <a
      href={`https://t.me${telegramLink}`}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-animation flex h-12 cursor-pointer items-center gap-2 rounded-full bg-btn-color px-8 py-2 text-sm font-medium text-white shadow-lg md:text-base"
      title="Подать заявку на позицию"
    >
      <Sparkle size={16} />
      Присоединиться к команде
    </a>
  )
}
