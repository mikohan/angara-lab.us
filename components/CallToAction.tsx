// components/CareersCTA.tsx
import Link from "next/link"

type CareersCTAProps = {
  className?: string
}

export function CTA({ className = "" }: CareersCTAProps) {
  const telegramLink =
    process.env.NEXT_PUBLIC_TELEGRAM_LINK || "vladusabusiness"

  return (
    <section className={`relative py-20 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-14 text-center sm:px-10 sm:py-16">
          {/* soft background glow */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-btn-color/10 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-2xl">
            <p className="mb-3 text-sm font-semibold tracking-widest text-btn-color uppercase">
              08 — CTA
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Готов работать в системе, которая растёт?
            </h2>

            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Если тебе близок структурный подход, ясные задачи и работа,
              которая напрямую влияет на развитие проектов — посмотри открытые
              роли и выбери ту, где твои навыки дадут максимальный эффект.
            </p>

            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Отправь резюме в Telegram. Если профиль подойдёт под текущие
              задачи — я свяжусь. Если нет — добавлю в базу и вернусь, когда
              появится подходящая роль.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={`https://t.me/${telegramLink}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-btn-color px-8 py-3.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
              >
                Написать в Telegram
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </a>

              <Link
                href="/careers"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-8 py-3.5 text-sm font-semibold text-foreground transition hover:bg-muted"
              >
                Смотреть роли
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
