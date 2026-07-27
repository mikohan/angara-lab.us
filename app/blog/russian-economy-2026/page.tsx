import { HeroRuTwo } from "@/components/HeroRuTwo"
import { PerksBar } from "@/components/PerksBar"
import PageAnimate from "@/components/PageAnimation"
import Image from "next/image"

export default function RussianEconomyReport() {
  return (
    <PageAnimate>
      <div className="container mx-auto mb-32 max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Article */}
        <article className="prose prose-lg prose-slate dark:prose-invert mt-20 max-w-none">
          {/* Title */}
          <header className="mb-16 text-center">
            <p className="mb-3 text-sm font-semibold tracking-widest text-rose-600 uppercase">
              Экспертный отчёт · Июль 2026
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
              Состояние российской экономики
            </h1>
            <p className="mt-4 text-xl text-slate-600 dark:text-slate-300">
              Глубокий анализ и честный прогноз до конца 2026 года
            </p>
            <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-rose-600" />
          </header>

          {/* Intro Image */}
          <div className="relative mb-16 aspect-[21/9] w-full overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop"
              alt="Экономика и финансы"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute right-6 bottom-6 left-6 text-white">
              <p className="text-sm font-medium opacity-90">
                Военная экономика, бюджетный стресс и топливный кризис
              </p>
            </div>
          </div>

          {/* Section 1 */}
          <section className="mb-16">
            <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-600 text-sm text-white">
                1
              </span>
              Введение и контекст видео
            </h2>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800/50">
              <p className="leading-relaxed text-slate-700 dark:text-slate-300">
                Видео (YouTube, канал Владислава Жуковского, стрим с профессором
                Игорем Липсицем) посвящено критическому разбору текущей
                макроэкономической ситуации. Название и описание прямо отражают
                ключевые тезисы: «Осенью голод и дефолт? Путин выбрал
                гиперинфляцию! Минфину не дают в долг. Крах Wildberries».
              </p>
            </div>

            <h3 className="mt-8 mb-4 text-xl font-semibold text-slate-800 dark:text-slate-200">
              Основные темы стрима
            </h3>
            <ul className="space-y-3">
              {[
                "Снижение ключевой ставки ЦБ на 0,25 п.п. до 14 % под давлением Путина при инфляционных ожиданиях 14,7 %",
                "Признание Набиуллиной «развала бюджета» и прогноз дефицита свыше 8,5 трлн руб. в 2026 году",
                "Проблемы финансирования: отказ рынка покупать ОФЗ, отмена аукционов, засекречивание остатков Казначейства",
                "Удары БПЛА по складам Wildberries → риски массовых банкротств МСБ и кризиса неплатежей",
                "Топливный кризис → угроза продовольственных перебоев осенью и региональной напряжённости",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-rose-500" />
                  <span className="text-slate-700 dark:text-slate-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 2 */}
          <section className="mb-16">
            <h2 className="mb-8 flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-600 text-sm text-white">
                2
              </span>
              Текущее макроэкономическое состояние
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              {/* GDP Card */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
                <div className="mb-3 flex items-center gap-2">
                  <div className="rounded-lg bg-blue-100 p-2 dark:bg-blue-900/40">
                    <svg
                      className="h-5 w-5 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    ВВП и рост
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  Экономика на грани рецессии. В I квартале 2026 ВВП сократился
                  (–0,2 % … –0,5 %). ЦБ понизил прогноз на 2026 до 0,0–1,0 %.
                  Военный сектор поддерживает статистику, гражданский — в
                  рецессии.
                </p>
              </div>

              {/* Inflation Card */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
                <div className="mb-3 flex items-center gap-2">
                  <div className="rounded-lg bg-amber-100 p-2 dark:bg-amber-900/40">
                    <svg
                      className="h-5 w-5 text-amber-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    Инфляция
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  Официальная — около 5,5 %+ с тенденцией к росту. Наблюдаемая
                  населением — 14–15 %. Ожидания достигли 14,7 %. Топливный
                  кризис ускоряет рост цен.
                </p>
              </div>

              {/* Budget Card */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
                <div className="mb-3 flex items-center gap-2">
                  <div className="rounded-lg bg-rose-100 p-2 dark:bg-rose-900/40">
                    <svg
                      className="h-5 w-5 text-rose-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    Бюджет
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  Дефицит за январь–июнь ≈ 6 трлн руб. Прогноз Набиуллиной —
                  более 8,5 трлн. ФНБ истощён. Минфин отменяет аукционы ОФЗ и
                  засекречивает остатки.
                </p>
              </div>

              {/* Fuel Card */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
                <div className="mb-3 flex items-center gap-2">
                  <div className="rounded-lg bg-orange-100 p-2 dark:bg-orange-900/40">
                    <svg
                      className="h-5 w-5 text-orange-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    Топливный кризис
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  Атаки на НПЗ сократили мощности (до ~30 %). Дефицит бензина и
                  дизеля, очереди, рост цен. Удары по складам Wildberries
                  парализуют логистику МСБ.
                </p>
              </div>
            </div>

            {/* Banking & Social */}
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl bg-slate-900 p-6 text-white dark:bg-slate-950">
                <h3 className="mb-3 font-semibold">Банковская система</h3>
                <p className="text-sm leading-relaxed text-slate-300">
                  Отток наличных ~13 млрд руб./день (пятый месяц подряд). В июне
                  прирост наличных почти 450 млрд. Корпоративная задолженность и
                  просрочки растут. Кризис неплатежей усиливается.
                </p>
              </div>
              <div className="rounded-2xl bg-slate-900 p-6 text-white dark:bg-slate-950">
                <h3 className="mb-3 font-semibold">Социальная картина</h3>
                <p className="text-sm leading-relaxed text-slate-300">
                  Реальные доходы под давлением. Бедность на высоком уровне.
                  Регионы сталкиваются с топливным дефицитом и рисками
                  продовольственных перебоев осенью.
                </p>
              </div>
            </div>
          </section>

          {/* Image break */}
          <div className="relative my-16 aspect-[16/7] w-full overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop"
              alt="Финансовые рынки"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="max-w-xl px-6 text-center text-lg font-medium text-white">
                «Экономика адаптировалась к войне, но адаптация имеет высокую
                цену и конечный ресурс»
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <section className="mb-16">
            <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-600 text-sm text-white">
                3
              </span>
              Ключевые риски
            </h2>

            <div className="space-y-6">
              <div className="rounded-xl border-l-4 border-rose-500 bg-rose-50 p-5 dark:bg-rose-950/30">
                <h3 className="mb-2 font-semibold text-rose-800 dark:text-rose-300">
                  Бюджетный тупик и «выбор гиперинфляции»
                </h3>
                <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  Давление на снижение ставки при росте военных расходов создаёт
                  конфликт ДКП и фискальной политики. Переход к финансированию
                  через госбанки и возможную эмиссию ускорит инфляцию.
                </p>
              </div>

              <div className="rounded-xl border-l-4 border-amber-500 bg-amber-50 p-5 dark:bg-amber-950/30">
                <h3 className="mb-2 font-semibold text-amber-800 dark:text-amber-300">
                  Топливно-логистический шок
                </h3>
                <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  Удары по НПЗ и складам Wildberries — системный фактор. Осенью
                  возможны локальные дефициты продуктов и резкий рост цен.
                  Полномасштабный голод маловероятен, но региональные кризисы —
                  реалистичны.
                </p>
              </div>

              <div className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-5 dark:bg-blue-950/30">
                <h3 className="mb-2 font-semibold text-blue-800 dark:text-blue-300">
                  Кризис неплатежей и доверие
                </h3>
                <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  Высокие ставки + падение спроса + логистические шоки = волна
                  банкротств. Отток наличных и засекречивание бюджетных данных —
                  признаки падения доверия.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 - Forecast */}
          <section className="mb-16">
            <h2 className="mb-8 flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-600 text-sm text-white">
                4
              </span>
              Прогноз до конца 2026 года
            </h2>

            <div className="grid gap-6 lg:grid-cols-3">
              {/* Base */}
              <div className="relative overflow-hidden rounded-2xl border-2 border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-800 dark:bg-emerald-950/40">
                <div className="absolute top-4 right-4 rounded-full bg-emerald-600 px-3 py-1 text-xs font-bold text-white">
                  ~55–60 %
                </div>
                <h3 className="mb-3 text-lg font-bold text-emerald-800 dark:text-emerald-300">
                  Базовый сценарий
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  <li>• ВВП: 0…+0,8 %</li>
                  <li>• Инфляция: офиц. 8–12 %, наблюдаемая 15–20 %+</li>
                  <li>• Ставка: 12–13 % или пауза</li>
                  <li>• Дефицит: 7–10+ трлн руб.</li>
                  <li>• Рубль: 90–110 за доллар</li>
                  <li>• Локальные дефициты, без системного коллапса</li>
                </ul>
              </div>

              {/* Negative */}
              <div className="relative overflow-hidden rounded-2xl border-2 border-rose-200 bg-rose-50 p-6 dark:border-rose-800 dark:bg-rose-950/40">
                <div className="absolute top-4 right-4 rounded-full bg-rose-600 px-3 py-1 text-xs font-bold text-white">
                  ~30–35 %
                </div>
                <h3 className="mb-3 text-lg font-bold text-rose-800 dark:text-rose-300">
                  Негативный сценарий
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  <li>• Усиление ударов + падение нефти</li>
                  <li>• Инфляция 20 %+ (наблюдаемая)</li>
                  <li>• Резкая девальвация</li>
                  <li>• Ускорение банкротств</li>
                  <li>• Продовольственные перебои в регионах</li>
                  <li>• Рост социальной напряжённости</li>
                </ul>
              </div>

              {/* Positive */}
              <div className="relative overflow-hidden rounded-2xl border-2 border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800/50">
                <div className="absolute top-4 right-4 rounded-full bg-slate-500 px-3 py-1 text-xs font-bold text-white">
                  ~10 %
                </div>
                <h3 className="mb-3 text-lg font-bold text-slate-800 dark:text-slate-200">
                  Позитивный сценарий
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  <li>• Снижение интенсивности войны</li>
                  <li>• Высокие цены на нефть</li>
                  <li>• Восстановление НПЗ</li>
                  <li>• Инфляция 6–8 %</li>
                  <li>• Рост ВВП ≈ 1,5 %</li>
                  <li>• Маловероятен при текущей политике</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Conclusions */}
          <section className="mb-12">
            <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-600 text-sm text-white">
                5
              </span>
              Выводы
            </h2>

            <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white shadow-xl">
              <p className="mb-4 leading-relaxed text-slate-200">
                Российская экономика в середине 2026 года находится в состоянии
                структурного перегрева военного сектора при стагнации
                гражданского, с рекордным бюджетным дефицитом, истощающимися
                резервами и нарастающим инфляционным давлением.
              </p>
              <p className="mb-4 leading-relaxed text-slate-200">
                До конца 2026 года наиболее вероятен сценарий «управляемой
                деградации»: медленный рост или стагнация, повышенная инфляция,
                усиление административного контроля, локальные кризисы — но без
                мгновенного коллапса.
              </p>
              <p className="leading-relaxed text-slate-200">
                Гиперинфляция в классическом смысле маловероятна в ближайшие
                месяцы, однако риск перехода к устойчиво высокой инфляции и
                дальнейшего ухудшения качества жизни остаётся реальным.
                Долгосрочные последствия — технологическое отставание,
                демографические потери и разрушение институтов доверия — ещё
                тяжелее.
              </p>
            </div>
          </section>

          {/* Footer note */}
          <footer className="mt-12 border-t border-slate-200 pt-8 text-center text-sm text-slate-500 dark:border-slate-700 dark:text-slate-400">
            <p>
              Отчёт основан на открытых данных ЦБ, Минфина, независимых оценках
              и публичных заявлениях (включая тезисы стрима с Игорем Липсицем).
            </p>
            <p className="mt-2">
              Акцент сделан на перекрёстных индикаторах: наблюдаемая инфляция,
              отток наличных, проблемы размещения долга, физические шоки
              инфраструктуры.
            </p>
          </footer>
        </article>
      </div>
    </PageAnimate>
  )
}
