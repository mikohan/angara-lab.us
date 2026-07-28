import PageAnimate from "@/components/PageAnimation"

export default function ContactPage() {
  const telegramUsername =
    process.env.NEXT_PUBLIC_TELEGRAM || "@vladusabusiness"
  const telegramLink =
    process.env.NEXT_PUBLIC_TELEGRAM_LINK || "vladusabusiness"
  const email = "hello@example.com" // замените на свой email

  return (
    <PageAnimate>
      <div className="min-h-screen bg-background text-foreground">
        {/* Hero */}
        <section className="relative overflow-hidden pt-16 pb-20">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute top-10 -left-32 h-96 w-96 rounded-full bg-blur-bg-2/30 blur-3xl" />
            <div className="absolute top-32 -right-32 h-80 w-80 rounded-full bg-blur-bg-1/25 blur-3xl" />
            <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-blur-bg-3/20 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <p className="mb-4 text-sm font-semibold tracking-widest text-btn-color uppercase">
              Связь
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Давайте обсудим
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Напишите в Telegram или на почту — отвечаем быстро и по делу.
            </p>
          </div>
        </section>

        {/* Contact cards */}
        <div className="relative z-10 mx-auto -mt-6 max-w-4xl px-4 pb-24 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            {/* Telegram */}
            <a
              href={`https://t.me/${telegramLink}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center overflow-hidden rounded-3xl border border-border bg-card p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#2AABEE]/40 hover:shadow-lg sm:p-10"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#2AABEE]/15 transition-transform duration-300 group-hover:scale-110">
                <svg
                  className="h-8 w-8 text-[#2AABEE]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </div>

              <h2 className="mb-2 text-xl font-bold">Telegram</h2>
              <p className="mb-6 text-sm text-muted-foreground">
                Самый быстрый способ связаться
              </p>

              <span className="inline-flex items-center gap-2 rounded-full bg-[#2AABEE] px-6 py-2.5 text-sm font-semibold text-white transition group-hover:opacity-90">
                {telegramUsername}
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </span>
            </a>

            {/* Email */}
            <a
              href={`mailto:${email}`}
              className="group relative flex flex-col items-center overflow-hidden rounded-3xl border border-border bg-card p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-btn-color/40 hover:shadow-lg sm:p-10"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-btn-color/15 transition-transform duration-300 group-hover:scale-110">
                <svg
                  className="h-8 w-8 text-btn-color"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>

              <h2 className="mb-2 text-xl font-bold">Email</h2>
              <p className="mb-6 text-sm text-muted-foreground">
                Для подробных предложений и документов
              </p>

              <span className="inline-flex items-center gap-2 rounded-full bg-btn-color px-6 py-2.5 text-sm font-semibold text-primary-foreground transition group-hover:opacity-90">
                {email}
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>
            </a>
          </div>

          {/* Small note */}
          <div className="mt-14 text-center">
            <p className="text-sm text-muted-foreground">
              Обычно отвечаем в течение нескольких часов в рабочее время.
            </p>
          </div>

          {/* Optional extra info */}
          <div className="mt-16 grid gap-6 rounded-3xl border border-border bg-card p-8 sm:grid-cols-3 sm:p-10">
            <div className="text-center">
              <div className="mb-3 text-2xl font-bold text-btn-color">1</div>
              <h3 className="mb-1 font-semibold">Напишите</h3>
              <p className="text-sm text-muted-foreground">
                Telegram или email — как вам удобнее
              </p>
            </div>
            <div className="text-center">
              <div className="mb-3 text-2xl font-bold text-btn-color">2</div>
              <h3 className="mb-1 font-semibold">Обсудим задачу</h3>
              <p className="text-sm text-muted-foreground">
                Коротко расскажите, что нужно
              </p>
            </div>
            <div className="text-center">
              <div className="mb-3 text-2xl font-bold text-btn-color">3</div>
              <h3 className="mb-1 font-semibold">Начнём работу</h3>
              <p className="text-sm text-muted-foreground">
                Предложим решение и следующие шаги
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageAnimate>
  )
}
