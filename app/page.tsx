import { AboutSection } from "@/components/AboutSection"
import { BenefitsSection } from "@/components/BenefitsSection"
import { Footer } from "@/components/Footer"
import HeroRu from "@/components/HeroRu"
import { Navbar } from "@/components/Navbar"
import { PerksBar } from "@/components/PerksBar"

export default function Page() {
  return (
    <div className="">
      <Navbar />
      <div className="container mx-auto mb-32 max-w-7xl px-8">
        <div className="mt-2 md:mt-8">
          <HeroRu />
        </div>
        <div className="mt-16">
          <PerksBar />
        </div>
        {/* Section about-start */}
        <div className="mt-16 md:mt-32">
          <AboutSection />
        </div>
        <div className="mt-16 md:mt-32">
          <BenefitsSection />
        </div>
      </div>
      <Footer />
    </div>
  )
}
