import { AboutSectionTwo } from "@/components/AboutSectionTwo"
import { BenefitsSection } from "@/components/BenefitsSection"
import { CallToAction } from "@/components/CallToAction"
import HeroRu from "@/components/HeroRu"
import { PerksBar } from "@/components/PerksBar"
import { WhoINeed } from "@/components/WhoINeed"
import PageAnimate from "@/components/PageAnimation"

export default function Page() {
  return (
    // <PageAnimate>
    <div className="container mx-auto mb-32 max-w-7xl px-8">
      <div className="mt-2 md:mt-8">
        <HeroRu />
      </div>
      <div className="mt-16">
        <PerksBar />
      </div>
      {/* Section about-start */}
      <div className="mt-16 md:mt-32">
        <AboutSectionTwo />
      </div>
      <div className="mt-16 md:mt-32">
        <BenefitsSection />
      </div>
      <div className="mt-16 md:mt-32">
        <WhoINeed />
      </div>
      <div className="mt-16 md:mt-32">
        <CallToAction />
      </div>
    </div>
    // </PageAnimate>
  )
}
