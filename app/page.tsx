import { AboutSectionTwo } from "@/components/AboutSectionTwo"
import { BenefitsSection } from "@/components/BenefitsSection"
import { CTA } from "@/components/CallToAction"
import HeroRu from "@/components/HeroRu"
import { PerksBar } from "@/components/PerksBar"
import { Compensation } from "@/components/Compensation"
import PageAnimate from "@/components/PageAnimation"
import { MarketContext } from "@/components/MarketContext"
import { WorkPrinciples } from "@/components/WorkPrinciples"
import { OpenRoles } from "@/components/OpenRoles"
import { HiringProcess } from "@/components/HiringProcess"
import { CareerCTA } from "@/components/CareerCTA"

export default function Page() {
  return (
    <PageAnimate>
      <div id="home" className="container mx-auto mb-32 max-w-7xl px-8">
        <div className="mt-2 md:mt-8">
          <HeroRu />
        </div>
        <div className="mt-16">
          <PerksBar />
        </div>
        {/* Section about-start */}
        <div>
          <MarketContext />
        </div>
        <div id="about">
          <AboutSectionTwo />
        </div>
        <div>
          <WorkPrinciples />
        </div>
        <div>
          <OpenRoles />
        </div>
        <div id="vacancies">
          <Compensation />
        </div>
        <div>
          <HiringProcess />
        </div>
        <div>
          <CareerCTA />
        </div>
      </div>
    </PageAnimate>
  )
}
