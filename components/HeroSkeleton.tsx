import { Skeleton } from "@/components/ui/skeleton"

export function HeroSkeleton() {
  return (
    <section className="container flex flex-col gap-8 py-20">
      {/* Reserve space for the Image (e.g., Aspect Video) */}
      <Skeleton className="relative aspect-video w-full rounded-3xl" />

      <div className="space-y-4">
        {/* Title Line */}
        <Skeleton className="h-12 w-[60%] md:w-[40%]" />
        {/* Description Line */}
        <Skeleton className="h-6 w-full max-w-150" />
      </div>
    </section>
  )
}
