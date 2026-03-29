// components/LenisProvider.tsx
"use client"

import { ReactLenis } from "lenis/react"
import { ReactNode } from "react"
interface LayoutProps {
  children: ReactNode
}

function LenisProvider({ children }: LayoutProps) {
  return (
    <ReactLenis
      root
      options={{ lerp: 0.1, duration: 1.5, smoothWheel: true, syncTouch: true }}
    >
      {children}
    </ReactLenis>
  )
}

export default LenisProvider
