"use client"
import { useLenis } from "lenis/react"
import { useState, useEffect } from "react"

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  // Access the lenis instance
  const lenis = useLenis(({ scroll }) => {
    // Show button after scrolling down 400px
    setIsVisible(scroll > 400)
  })

  const handleClick = () => {
    // Use the lenis.scrollTo method for the smooth effect
    lenis?.scrollTo(0, { lerp: 0.1 })
  }

  if (!isVisible) return null

  return (
    <button
      className="fixed right-8 bottom-8 z-50 cursor-pointer rounded-full bg-foreground px-8 py-4 text-background"
      onClick={handleClick}
    >
      ↑ Top
    </button>
  )
}
