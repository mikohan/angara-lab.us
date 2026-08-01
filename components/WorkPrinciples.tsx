// components/WorkPrinciples.tsx

type WorkPrinciplesProps = {
  className?: string
}

const principles = [
  {
    title: "Структура",
    description:
      "Каждая роль имеет чёткие задачи, недельные deliverables и измеримые результаты.",
  },
  {
    title: "Прозрачность",
    description: "Все процессы описаны, стандарты выполнения зафиксированы.",
  },
  {
    title: "Ритм",
    description:
      "Работа строится вокруг недельного плана и месячных показателей.",
  },
  {
    title: "Влияние",
    description:
      "Результаты видны в цифрах — лиды, конверсии, качество выполнения, скорость процессов.",
  },
  {
    title: "Коммуникация",
    description: "Прямое взаимодействие, без лишних слоёв и бюрократии.",
  },
]

export function WorkPrinciples({ className = "" }: WorkPrinciplesProps) {
  return (
    <section className={`relative py-20 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold tracking-widest text-btn-color uppercase">
            04 — Work Principles
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Принципы работы
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Как мы организуем работу внутри команды.
          </p>
        </div>

        {/* Principles */}
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((item, index) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-card p-6 sm:p-8"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-btn-color/15 text-sm font-semibold text-btn-color">
                  {index + 1}
                </span>
                <h3 className="text-lg font-bold text-foreground">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
