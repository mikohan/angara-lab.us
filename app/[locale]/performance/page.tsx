import { HeroRuTwo } from "@/components/HeroRuTwo"
import { PerksBar } from "@/components/PerksBar"
import PageAnimate from "@/components/PageAnimation"

export default function About() {
  return (
    <PageAnimate>
      <div className="container mx-auto mb-32 max-w-7xl px-8">
        <div className="mt-2 min-h-240 w-full md:mt-8">
          <HeroRuTwo />
        </div>
        <div className="mt-16">
          <PerksBar />
        </div>
      </div>
    </PageAnimate>
  )
}
