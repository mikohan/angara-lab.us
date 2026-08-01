// components/CareersCTA.tsx
"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, type Variants } from "framer-motion"

type CareersCTAProps = {
  className?: string
}

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export function CareerCTA({ className = "" }: CareersCTAProps) {
  const telegramLink =
    process.env.NEXT_PUBLIC_TELEGRAM_LINK || "vladusabusiness"

  return (
    <section className={`relative overflow-hidden py-20 sm:py-28 ${className}`}>
      {/* Background ambient glow effect */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-btn-color/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative grid items-stretch overflow-hidden rounded-3xl border border-border/60 bg-card/40 shadow-2xl backdrop-blur-xl lg:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Image Side */}
          <motion.div
            variants={itemVariants}
            className="relative min-h-[320px] w-full overflow-hidden sm:min-h-[400px] lg:min-h-full"
          >
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1400&auto=format&fit=crop"
              alt="Team collaboration architecture"
              fill
              className="transform object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            {/* Smooth gradient scrim overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-card/40 lg:to-card" />
          </motion.div>

          {/* Content Side */}
          <div className="relative flex flex-col justify-center px-6 py-10 sm:px-12 sm:py-16 lg:px-16">
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-btn-color/20 bg-btn-color/10 px-3.5 py-1 text-xs font-bold tracking-widest text-btn-color uppercase">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-btn-color" />
                08 — Призыв к действию
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-3xl leading-[1.15] font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-[2.5rem]"
            >
              Готов работать в системе, которая растёт?
            </motion.h2>

            <motion.div
              variants={itemVariants}
              className="mt-5 space-y-4 text-base leading-relaxed font-normal text-muted-foreground"
            >
              <p>
                Если тебе близок структурный подход, ясные задачи и работа,
                которая напрямую влияет на развитие проектов — посмотри открытые
                роли и выбери ту, где твои навыки дадут максимальный эффект.
              </p>
              <p className="font-medium text-foreground/90">
                Отправь резюме в Telegram. Если профиль подойдёт под текущие
                задачи — я свяжусь. Если нет — добавлю в базу и вернусь, когда
                появится подходящая роль.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col items-stretch gap-3.5 sm:flex-row sm:items-center"
            >
              <a
                href={`https://t.me/${telegramLink}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-btn-color px-8 py-4 text-sm font-semibold text-primary-foreground shadow-lg shadow-btn-color/20 transition-all duration-300 hover:-translate-y-0.5 hover:opacity-95 hover:shadow-xl hover:shadow-btn-color/30 active:translate-y-0"
              >
                <span>Написать в Telegram</span>
                <svg
                  className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </a>

              <Link
                href="/careers"
                className="inline-flex items-center justify-center rounded-full border border-border/80 bg-background/50 px-7 py-4 text-sm font-semibold text-foreground backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-border hover:bg-muted active:translate-y-0"
              >
                Смотреть роли
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
