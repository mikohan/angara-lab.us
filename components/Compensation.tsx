// components/Compensation.tsx
import Image from "next/image"

type CompensationProps = {
  className?: string
}

export function Compensation({ className = "" }: CompensationProps) {
  return (
    <section className={`relative py-20 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold tracking-widest text-btn-color uppercase">
            06 — Compensation
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Компенсация
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Прозрачная модель: фиксированная часть + гибкий бонус.
          </p>
        </div>

        {/* Image + text */}
        <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl border border-border lg:max-w-none">
            <Image
              src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop"
              alt="Compensation and growth"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Single text block */}
          <div className="space-y-6 text-muted-foreground">
            <p className="leading-relaxed">
              Компенсация состоит из двух элементов: фиксированной части и
              гибкой части.
            </p>

            <p className="leading-relaxed">
              <span className="font-medium text-foreground">
                Фиксированная часть
              </span>{" "}
              — оплата за выполнение недельного плана. У каждой роли есть
              понятный набор обязательных результатов. При полном выполнении
              плана человек получает ставку. Это стабильная основа, которая
              создаёт предсказуемость.
            </p>

            <p className="leading-relaxed">
              <span className="font-medium text-foreground">Гибкая часть</span>{" "}
              — бонус за выполнение месячного плана. Он заранее определён и
              привязан к ключевым показателям роли. Если показатели удержаны на
              нужном уровне, бонус включается автоматически.
            </p>

            <p className="leading-relaxed text-foreground">
              Рост компенсации происходит тогда, когда зона ответственности
              расширяется. Если специалист берёт на себя новую функцию, которая
              делает процессы устойчивее и улучшает работу команды,
              фиксированная часть корректируется.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
