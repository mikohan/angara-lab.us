"use client"
import Link from "next/link"
import { motion } from "framer-motion"
export function Logo() {
  return (
    <div>
      <Link href="/" className="text-xl font-semibold">
        {/* <span className="bg-linear-to-r from-blue-900 to-blue-400 bg-clip-text font-bold text-transparent"> */}
        <motion.span
          animate={{
            backgroundPositionX: "-100%",
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
          className="animate-gradient-flow bg-[linear-gradient(to_right,var(--gradient-blue-stop),var(--blur-bg-4),var(--blur-bg-2),var(--blur-bg-1),var(--blur-bg-4),var(--gradient-blue-stop))] bg-size-[200%] bg-clip-text font-bold text-transparent"
        >
          [AL] Angara Lab
        </motion.span>
      </Link>
    </div>
  )
}
