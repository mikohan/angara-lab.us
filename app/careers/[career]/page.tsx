import PageAnimate from "@/components/PageAnimation"
import { vacancies } from "@/data/vacancies"
import Link from "next/link"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return vacancies.map((v) => ({ career: v.slug }))
}

export default async function VacancyPage({
  params,
}: {
  params: Promise<{ career: string }>
}) {
  const { career } = await params
  const vacancy = vacancies.find((v) => v.slug === career)
  const button = vacancy ? vacancy.formUrl : "Отправить отклик"

  if (!vacancy) {
    notFound()
  }

  return (
    <PageAnimate>
      <div className="min-h-screen bg-background text-foreground">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border pt-14 pb-16">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute top-10 -left-32 h-96 w-96 rounded-full bg-blur-bg-2/25 blur-3xl" />
            <div className="absolute top-20 -right-20 h-72 w-72 rounded-full bg-blur-bg-1/20 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Link
              href="/careers"
              className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Все вакансии
            </Link>

            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-btn-color/15 px-3 py-1 text-xs font-semibold text-btn-color">
                {vacancy.department}
              </span>
              <span className="text-sm text-muted-foreground">
                {vacancy.posted}
              </span>
            </div>

            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {vacancy.title}
            </h1>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {vacancy.location}
              </span>
              <span>{vacancy.type}</span>
              <span>{vacancy.experience}</span>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {vacancy.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Content */}
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
            {/* Main */}
            <div className="space-y-12">
              {/* About */}
              <section>
                <h2 className="mb-4 text-xl font-bold">О роли</h2>
                <p className="leading-relaxed text-muted-foreground">
                  {vacancy.fullDescription}
                </p>
              </section>

              {/* Responsibilities */}
              <section>
                <h2 className="mb-4 text-xl font-bold">
                  Чем предстоит заниматься
                </h2>
                <ul className="space-y-3">
                  {vacancy.responsibilities.map((item) => (
                    <li key={item} className="flex gap-3 text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-btn-color" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Requirements */}
              <section>
                <h2 className="mb-4 text-xl font-bold">Требования</h2>
                <ul className="space-y-3">
                  {vacancy.requirements.map((item) => (
                    <li key={item} className="flex gap-3 text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-btn-color" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Nice to have */}
              {vacancy.niceToHave.length > 0 && (
                <section>
                  <h2 className="mb-4 text-xl font-bold">Будет плюсом</h2>
                  <ul className="space-y-3">
                    {vacancy.niceToHave.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-muted-foreground"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/50" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Benefits */}
              <section>
                <h2 className="mb-4 text-xl font-bold">Что предлагаем</h2>
                <ul className="space-y-3">
                  {vacancy.benefits.map((item) => (
                    <li key={item} className="flex gap-3 text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="mb-4 font-semibold">Откликнуться</h3>
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                  Пришлите резюме и несколько слов о себе. Мы ответим в течение
                  нескольких дней.
                </p>
                {button ? (
                  <a
                    href={button}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-btn-color px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                  >
                    Заполните форму
                    <svg
                      className="h-4 w-4"
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
                  </a>
                ) : (
                  <a
                    href={`mailto:${process.env.NEXT_PUBLIC_COMPANY_EMAIL}?subject=Отклик на вакансию: ${vacancy.title}`}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-btn-color px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                  >
                    Отправить резюме
                    <svg
                      className="h-4 w-4"
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
                  </a>
                )}

                <div className="mt-6 space-y-3 border-t border-border pt-6 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Формат</span>
                    <span className="font-medium">{vacancy.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Опыт</span>
                    <span className="font-medium">{vacancy.experience}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Локация</span>
                    <span className="text-right font-medium">
                      {vacancy.location}
                    </span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </PageAnimate>
  )
}
