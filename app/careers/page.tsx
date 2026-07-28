import PageAnimate from "@/components/PageAnimation"
import Link from "next/link"
import { vacancies } from "@/data/vacancies"

export default function CareersPage() {
  const featured = vacancies.find((v) => v.featured)
  const others = vacancies.filter((v) => !v.featured)
  const salary = "По результатам собеседования"

  return (
    <PageAnimate>
      <div className="min-h-screen bg-background text-foreground">
        {/* Hero */}
        <section className="relative overflow-hidden pt-16 pb-24">
          {/* Background blurs */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute top-10 -left-32 h-96 w-96 rounded-full bg-blur-bg-2/30 blur-3xl" />
            <div className="absolute top-40 -right-32 h-80 w-80 rounded-full bg-blur-bg-1/25 blur-3xl" />
            <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-blur-bg-3/20 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="mb-4 text-sm font-semibold tracking-widest text-btn-color uppercase">
                We are hiring
              </p>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Open Positions
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Join a small, ambitious team building products that matter.
                Fully remote, strong ownership, and real impact.
              </p>

              <div className="mt-8 flex flex-wrap gap-3 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  {vacancies.length} open roles
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1">
                  Remote-first
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1">
                  Flexible hours
                </span>
              </div>
            </div>
          </div>
        </section>

        <div className="relative z-10 mx-auto -mt-10 max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          {/* Featured job */}
          {featured && (
            <Link
              href={`/careers/${featured.slug}`}
              className="group mb-14 block overflow-hidden rounded-3xl border border-border bg-card shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="grid lg:grid-cols-[1fr_320px]">
                <div className="p-8 sm:p-10">
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-btn-color/15 px-3 py-1 text-xs font-semibold text-btn-color">
                      Featured
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {featured.department} · {featured.posted}
                    </span>
                  </div>

                  <h2 className="mb-3 text-2xl font-bold tracking-tight transition-colors group-hover:text-btn-color sm:text-3xl">
                    {featured.title}
                  </h2>

                  <p className="mb-6 max-w-2xl leading-relaxed text-muted-foreground">
                    {featured.description}
                  </p>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {featured.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-border bg-background px-2.5 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
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
                      {featured.location}
                    </span>
                    <span>{featured.type}</span>
                    <span className="font-medium text-foreground">
                      {salary}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-center border-t border-border bg-muted/40 p-8 lg:border-t-0 lg:border-l dark:bg-muted/20">
                  <div className="text-center">
                    <p className="mb-1 text-sm text-muted-foreground">
                      Experience
                    </p>
                    <p className="mb-6 text-lg font-semibold">
                      {featured.experience}
                    </p>
                    <span className="inline-flex items-center gap-2 rounded-full bg-btn-color px-6 py-2.5 text-sm font-semibold text-primary-foreground transition group-hover:opacity-90">
                      View role
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
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Section header */}
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold">All open roles</h2>
              <p className="mt-1 text-muted-foreground">
                {others.length} position{others.length !== 1 ? "s" : ""}{" "}
                available
              </p>
            </div>
          </div>

          {/* Jobs grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((job) => (
              <Link
                key={job.slug}
                href={`/careers/${job.slug}`}
                className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-btn-color/40 hover:shadow-md"
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
                  <div className="flex flex-col gap-0.5">
                    <span className="text-muted-foreground">
                      {job.location}
                    </span>
                    <span className="font-medium">{salary}</span>
                  </div>
                  <span className="flex items-center gap-1 font-medium text-btn-color opacity-0 transition-all group-hover:opacity-100">
                    Apply
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

          {/* Bottom CTA */}
          <div className="mt-20 overflow-hidden rounded-3xl border border-border bg-card p-10 text-center sm:p-14">
            <h3 className="text-2xl font-bold sm:text-3xl">
              Don’t see the right role?
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              We are always interested in talented people. Send us your CV and
              tell us how you can help.
            </p>
            <div className="mt-8">
              <Link
                href="mailto:careers@example.com"
                className="inline-flex items-center gap-2 rounded-full bg-btn-color px-8 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
              >
                Send open application
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
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageAnimate>
  )
}
