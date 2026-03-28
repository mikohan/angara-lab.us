import { Footer } from "@/components/Footer"
import { HeroRuTwo } from "@/components/HeroRuTwo"
import { PerksBar } from "@/components/PerksBar"
import { Navbar } from "@/components/Navbar"

export default function About() {
  return (
    <div className="">
      <Navbar />
      <div className="container mx-auto mb-32 max-w-7xl px-8">
        <div className="mt-2 md:mt-8">
          <HeroRuTwo />
        </div>
        <div className="mt-16">
          <PerksBar />
        </div>
      </div>
      <Footer />
    </div>
  )
}
