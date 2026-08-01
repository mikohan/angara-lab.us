// components/OpenRoles.tsx

import Link from "next/link"
import { vacancies } from "@/data/vacancies"

type OpenRolesProps = {
  className?: string
}

const roleIncludes = [
  "Зону ответственности",
  "Недельные обязательные deliverables",
  "Месячные KPI",
  "Фиксированную компенсацию",
  "Гибкую часть за выполнение плана",
]

export function OpenRoles({ className = "" }: OpenRolesProps) {
  const roles = vacancies.slice(0, 6) // можно показать все или ограничить

  return (
    <section className={`relative py-20 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold tracking-widest text-btn-color uppercase">
            05 — Roles
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Открытые роли
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Каждая роль включает понятную зону ответственности и измеримый
            результат.
          </p>
        </div>

        {/* What each role includes */}
        <div className="mx-auto mb-12 max-w-3xl">
          <p className="mb-4 text-center text-sm font-medium text-foreground">
            Каждая роль включает:
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {roleIncludes.map((item) => (
              <span
                key={item}
                className="rounded-full border border-border bg-card px-3 py-1.5 text-sm text-muted-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Roles grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {roles.map((job) => (
            <Link
              key={job.slug}
              href={`/careers/${job.slug}`}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-btn-color/40 hover:shadow-md"
            >
              <div className="mb-4 flex items-start justify-between gap-3">
                <span className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
                  {job.department}
                </span>
                <span className="text-xs text-muted-foreground">
                  {job.posted}
                </span>
              </div>

              <h3 className="mb-2 text-lg leading-snug font-bold transition-colors group-hover:text-btn-color">
                {job.title}
              </h3>

              <p className="mb-5 line-clamp-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {job.description}
              </p>

              <div className="mb-5 flex flex-wrap gap-1.5">
                {job.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex items-center justify-between border-t border-border pt-4 text-sm">
                <span className="text-muted-foreground">{job.location}</span>
                <span className="flex items-center gap-1 font-medium text-btn-color opacity-0 transition-all group-hover:opacity-100">
                  Смотреть
                  <svg
                    className="h-3.5 w-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom link */}
        <div className="mt-12 text-center">
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 text-sm font-semibold text-btn-color transition hover:opacity-80"
          >
            Все открытые роли
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
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
