"use client"
import { useLenis } from "lenis/react"

export function useSmoothScroll() {
  const lenis = useLenis()

  const scrollTo = (target: string) => {
    if (!lenis) return

    lenis.scrollTo(target, {
      offset: -80, // adjust for sticky navbar height
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 3),
    })
  }

  return scrollTo
}
