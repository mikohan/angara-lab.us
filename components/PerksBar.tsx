"use client"
import Image from "next/image"
import MarketImage1 from "@/public/images/company/market01.png"
import MarketImage2 from "@/public/images/company/market02.png"
import MarketImage3 from "@/public/images/company/market03.png"
import { motion } from "framer-motion"

export function PerksBar() {
  return (
    <div className="h-32 md:h-36">
      <div className="relative">
        <div className="absolute flex overflow-hidden mask-[linear-gradient(to_right,transparent,black,transparent)]">
          <div className="absolute top-1/3 left-0 -z-10 h-16 w-full bg-top-blur blur-xl"></div>
          <motion.div
            className="flex flex-none items-center justify-center gap-8 py-8 pr-8"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 19,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image
              src={MarketImage1}
              alt="Market share image"
              className="perks-ticker-image"
            />
            <Image
              src={MarketImage2}
              alt="Market share image2"
              className="perks-ticker-image"
            />
            <Image
              src={MarketImage3}
              alt="Market share image3"
              className="perks-ticker-image"
            />
            <Image
              src={MarketImage1}
              alt="Market share image"
              className="perks-ticker-image"
            />
            <Image
              src={MarketImage2}
              alt="Market share image2"
              className="perks-ticker-image"
            />
            <Image
              src={MarketImage3}
              alt="Market share image3"
              className="perks-ticker-image"
            />
            {/* second set of logos */}
            <Image
              src={MarketImage1}
              alt="Market share image"
              className="perks-ticker-image"
            />
            <Image
              src={MarketImage2}
              alt="Market share image2"
              className="perks-ticker-image"
            />
            <Image
              src={MarketImage3}
              alt="Market share image3"
              className="perks-ticker-image"
            />
            <Image
              src={MarketImage1}
              alt="Market share image"
              className="perks-ticker-image"
            />
            <Image
              src={MarketImage2}
              alt="Market share image2"
              className="perks-ticker-image"
            />
            <Image
              src={MarketImage3}
              alt="Market share image3"
              className="perks-ticker-image"
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
