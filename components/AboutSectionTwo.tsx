// components/AboutSectionTwo.tsx

type AboutSectionTwoProps = {
  className?: string
}

const buildPoints = [
  "Маркетинговые системы",
  "Контент‑архитектуру",
  "Процессы лидогенерации",
  "Операционные стандарты",
  "Аналитику и контроль качества",
]

const growthPoints = [
  "Маркетинг с предсказуемым потоком лидов",
  "Контент‑системы, которые создают спрос",
  "Стандартизированные процессы выполнения",
  "Расширение покрытия через масштабирование маркетинга",
]

const numbers = [
  {
    label: "Текущий потенциал",
    value: "$30–45K",
    note: "в месяц при 3–4 командах",
  },
  {
    label: "15–20 команд",
    value: "$110–180K",
    note: "в месяц",
  },
  {
    label: "2–3 локации",
    value: "$350–500K",
    note: "в месяц",
  },
  {
    label: "Целевой объём",
    value: "$10M",
    note: "в год",
  },
]

export function AboutSectionTwo({ className = "" }: AboutSectionTwoProps) {
  return (
    <section id="about" className={`relative py-20 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold tracking-widest text-btn-color uppercase">
            03 — About Company
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            О компании
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Angara Lab — маркетинговое агентство, которое развивает и
            масштабирует сервисные проекты Angara Steamers и Playa Cleaning.
          </p>
        </div>

        {/* Intro */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            Мы не оказываем услуги руками. Мы строим системы, которые позволяют
            проектам расти предсказуемо.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Проекты работают как продукт: есть спрос → есть выполнение → есть
            масштабирование → есть система.
          </p>
        </div>

        {/* What we build + How we grow */}
        <div className="mx-auto mb-12 grid max-w-5xl gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <h3 className="mb-5 text-lg font-bold text-foreground">
              Мы строим
            </h3>
            <ul className="space-y-3">
              {buildPoints.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-btn-color" />
                  <span className="leading-relaxed text-muted-foreground">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <h3 className="mb-5 text-lg font-bold text-foreground">
              Как мы растём
            </h3>
            <ul className="space-y-3">
              {growthPoints.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-btn-color" />
                  <span className="leading-relaxed text-muted-foreground">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Numbers */}
        <div className="mx-auto max-w-5xl">
          <h3 className="mb-6 text-center text-lg font-bold text-foreground">
            Цифры
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {numbers.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-border bg-card p-5 text-center sm:p-6"
              >
                <p className="text-sm text-muted-foreground">{item.label}</p>
                <p className="mt-2 text-2xl font-bold tracking-tight text-foreground">
                  {item.value}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.note}
                </p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground sm:text-base">
            Эти цифры — результат маркетинговых систем, контента и управляемых
            процессов, а не ручного хаоса.
          </p>
        </div>
      </div>
    </section>
  )
}
