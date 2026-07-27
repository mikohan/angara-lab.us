import PageAnimate from "@/components/PageAnimation"
import Image from "next/image"
import Link from "next/link"

const posts = [
  {
    slug: "russian-economy-2026",
    title:
      "Состояние российской экономики: глубокий анализ и прогноз до конца 2026",
    excerpt:
      "Военный перегрев, рекордный дефицит бюджета, топливный кризис и риски гиперинфляции. Честный экспертный разбор на основе данных ЦБ, Минфина и стрима с Игорем Липсицем.",
    category: "Экономика",
    date: "27 июля 2026",
    readTime: "18 мин",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop",
    featured: true,
  },
  {
    slug: "fuel-crisis-russia",
    title: "Топливный кризис в России: почему бензин становится роскошью",
    excerpt:
      "Удары по НПЗ, очереди на заправках и цепная реакция в логистике. Как дефицит топлива бьёт по всей экономике и что ждёт регионы осенью.",
    category: "Энергетика",
    date: "24 июля 2026",
    readTime: "9 мин",
    image:
      "https://images.unsplash.com/photo-1549924231-f129b911e442?q=80&w=2070&auto=format&fit=crop",
    featured: false,
  },
  {
    slug: "wildberries-strikes",
    title: "Удары по складам Wildberries: что будет с малым бизнесом",
    excerpt:
      "Уничтоженные товары, кризис неплатежей и угроза банкротства одного из крупнейших маркетплейсов. Разбираем последствия для продавцов и банков.",
    category: "Бизнес",
    date: "22 июля 2026",
    readTime: "7 мин",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop",
    featured: false,
  },
  {
    slug: "central-bank-rate",
    title: "Ключевая ставка 14 %: почему ЦБ сдался под давлением",
    excerpt:
      "Минимальное снижение на 0,25 п.п. на фоне рекордных инфляционных ожиданий. Что стоит за решением Набиуллиной и к чему это приведёт.",
    category: "Финансы",
    date: "19 июля 2026",
    readTime: "6 мин",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200&auto=format&fit=crop",
    featured: false,
  },
  {
    slug: "budget-deficit-2026",
    title: "Бюджетный дефицит 8,5 трлн: куда деваются деньги",
    excerpt:
      "ФНБ почти пуст, рынок отказывается покупать ОФЗ, Минфин засекречивает остатки. Полный разбор фискального тупика.",
    category: "Бюджет",
    date: "15 июля 2026",
    readTime: "11 мин",
    image:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=2070&auto=format&fit=crop",
    featured: false,
  },
  {
    slug: "inflation-expectations",
    title: "Инфляционные ожидания 14,7 %: народ уже не верит статистике",
    excerpt:
      "Официальная инфляция и реальность расходятся всё сильнее. Почему россияне голосуют рублём и наличными.",
    category: "Инфляция",
    date: "12 июля 2026",
    readTime: "8 мин",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2070&auto=format&fit=crop",
    featured: false,
  },
]

export default function BlogPage() {
  const featuredPost = posts.find((p) => p.featured)
  const otherPosts = posts.filter((p) => !p.featured)

  return (
    <PageAnimate>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
        {/* Hero */}
        <section className="relative overflow-hidden bg-slate-900 pt-16 pb-20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rose-900/40 via-slate-900 to-slate-900" />
          <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-rose-600/20 blur-3xl" />
          <div className="absolute top-40 -left-20 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="mb-4 text-sm font-semibold tracking-widest text-rose-400 uppercase">
                Аналитика и разборы
              </p>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Блог
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-slate-300 sm:text-xl">
                Глубокие материалы об экономике, финансах и том, что происходит
                с Россией прямо сейчас. Без цензуры и розовых очков.
              </p>
            </div>
          </div>
        </section>

        <div className="relative mx-auto -mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Featured Post */}
          {featuredPost && (
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group relative mb-16 block overflow-hidden rounded-3xl bg-white shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-rose-500/10 dark:bg-slate-900"
            >
              <div className="grid lg:grid-cols-2">
                <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[420px]">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent lg:hidden" />
                </div>

                <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-700 dark:bg-rose-900/50 dark:text-rose-300">
                      {featuredPost.category}
                    </span>
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      {featuredPost.date} · {featuredPost.readTime}
                    </span>
                  </div>

                  <h2 className="mb-4 text-2xl leading-tight font-bold text-slate-900 transition-colors group-hover:text-rose-600 sm:text-3xl dark:text-white dark:group-hover:text-rose-400">
                    {featuredPost.title}
                  </h2>

                  <p className="mb-6 line-clamp-3 text-base leading-relaxed text-slate-600 dark:text-slate-300">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-sm font-semibold text-rose-600 dark:text-rose-400">
                    Читать полностью
                    <svg
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
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
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Section title */}
          <div className="mb-10 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Все материалы
              </h2>
              <p className="mt-1 text-slate-500 dark:text-slate-400">
                {otherPosts.length} статей
              </p>
            </div>
          </div>

          {/* Posts Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {otherPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-slate-900 dark:shadow-none dark:ring-1 dark:ring-slate-800"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-slate-800 backdrop-blur-sm dark:bg-slate-900/90 dark:text-white">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <time>{post.date}</time>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="mb-3 text-lg leading-snug font-bold text-slate-900 transition-colors group-hover:text-rose-600 dark:text-white dark:group-hover:text-rose-400">
                    {post.title}
                  </h3>

                  <p className="mb-5 line-clamp-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-1.5 text-sm font-medium text-rose-600 dark:text-rose-400">
                    Читать
                    <svg
                      className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
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
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 mb-8 overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-rose-950 p-10 text-center shadow-2xl sm:p-14">
            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              Хотите получать новые разборы первыми?
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-slate-300">
              Подписывайтесь — мы публикуем только честную аналитику без
              пропаганды и воды.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Ваш email"
                className="w-full max-w-xs rounded-full border-0 bg-white/10 px-5 py-3 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-rose-500 focus:outline-none"
              />
              <button className="rounded-full bg-rose-600 px-8 py-3 font-semibold text-white transition hover:bg-rose-500">
                Подписаться
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageAnimate>
  )
}
