// components/MarketContext.tsx

type MarketContextProps = {
  className?: string
}

export function MarketContext({ className = "" }: MarketContextProps) {
  return (
    <section className={`relative py-20 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold tracking-widest text-btn-color uppercase">
            02 — Market Context
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Рынок локальных услуг
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Крупный и растущий сегмент с понятной экономикой юнита.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid gap-5 sm:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <p className="mb-3 text-sm font-medium text-muted-foreground">
              Объём рынка (США)
            </p>
            <p className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              $842B
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Локальные услуги
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <p className="mb-3 text-sm font-medium text-muted-foreground">
              Темп роста
            </p>
            <p className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              6–8%
            </p>
            <p className="mt-2 text-sm text-muted-foreground">в год</p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <p className="mb-3 text-sm font-medium text-muted-foreground">
              Средний чек
            </p>
            <p className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              $250–300
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              понятная unit-экономика
            </p>
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-8 rounded-2xl border border-border bg-muted/40 px-6 py-5 dark:bg-muted/20">
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            Средний чек $250–$300 создаёт понятную экономику и позволяет
            масштабировать модель без продуктовых изменений.
          </p>
        </div>
      </div>
    </section>
  )
}
