// app/loading.tsx
import { HeroSkeleton } from "@/components/HeroSkeleton"

export default function Loading() {
  return (
    <main className="min-h-screen flex-1">
      <HeroSkeleton />
      {/* Add more skeletons to fill the page height */}
    </main>
  )
}
