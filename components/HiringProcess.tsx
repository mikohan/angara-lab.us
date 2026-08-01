// components/HiringProcess.tsx
"use client"

import { motion, type Variants } from "framer-motion"

type HiringProcessProps = {
  className?: string
}

const stages = [
  {
    stage: "Stage 1",
    title: "Screening",
    description: "Короткое знакомство и проверка соответствия роли.",
  },
  {
    stage: "Stage 2",
    title: "Technical Interview",
    description: "Обсуждение опыта, подходов и примеров решений.",
  },
  {
    stage: "Stage 3",
    title: "System Design Test",
    description: "Задача на проектирование процесса или маркетинговой системы.",
  },
  {
    stage: "Stage 4",
    title: "Paid Trial",
    description: "Небольшой оплачиваемый тестовый период.",
  },
  {
    stage: "Stage 5",
    title: "Offer",
    description: "Фиксация роли, задач и компенсации.",
  },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
}

export function HiringProcess({ className = "" }: HiringProcessProps) {
  return (
    <section className={`relative py-20 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold tracking-widest text-btn-color uppercase">
            07 — Hiring Process
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Процесс отбора
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Прозрачный путь от первого контакта до оффера.
          </p>
        </div>

        {/* Steps */}
        <motion.ul
          className="mx-auto max-w-2xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {stages.map((item, index) => (
            <motion.li
              key={item.stage}
              variants={itemVariants}
              className="relative flex gap-5 pb-10 last:pb-0"
            >
              {/* Line */}
              {index !== stages.length - 1 && (
                <div className="absolute top-10 left-[19px] h-[calc(100%-24px)] w-px bg-border" />
              )}

              {/* Number */}
              <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-card text-sm font-semibold text-btn-color">
                {index + 1}
              </div>

              {/* Content */}
              <div className="pt-1.5">
                <p className="text-xs font-semibold tracking-wider text-btn-color uppercase">
                  {item.stage}
                </p>
                <h3 className="mt-1 text-lg font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {item.description}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
