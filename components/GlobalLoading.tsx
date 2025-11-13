// components/GlobalLoading.tsx
"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import Lottie from "lottie-react"
import loadingAnimation from "@/public/lotties/loading.json"

export default function GlobalLoading() {
  const pathname = usePathname()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const timeout = setTimeout(() => setLoading(false), 1200) // delay to mimic load

    return () => clearTimeout(timeout)
  }, [pathname])

  if (!loading) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center h-screen bg-vintage-beige dark:bg-gray-900 transition-colors duration-300">
      <div className="flex flex-col items-center text-center space-y-6">
        {/* Lottie Animation */}
        <div className="w-60 h-60">
          <Lottie animationData={loadingAnimation} loop={true} />
        </div>

        {/* Loading Text */}
        <h2 className="text-2xl md:text-3xl font-cinzel font-bold text-vintage-orange dark:text-yellow-300 animate-pulse">
          Smile please, your travel story is on its way!
        </h2>
       
      </div>
    </div>
  )
}
