"use client"

import { Compass } from "lucide-react"

export function CreativeLogo({ size = "normal" }: { size?: "small" | "normal" | "large" }) {
  const sizeClasses = {
    small: "h-6 w-6",
    normal: "h-8 w-8",
    large: "h-12 w-12",
  }

  const textSizeClasses = {
    small: "text-lg",
    normal: "text-2xl",
    large: "text-4xl",
  }

  const subTextSizeClasses = {
    small: "text-xs",
    normal: "text-sm",
    large: "text-lg",
  }

  return (
    <div className="flex items-center space-x-3">
      {/* Simple Compass Logo */}
      <div className="relative">
        <Compass className={`${sizeClasses[size]} text-vintage-orange animate-spin-slow`} />
      </div>

      {/* Text Logo */}
      <div className="flex flex-col">
        <span className={`font-cinzel ${textSizeClasses[size]} font-bold text-vintage-orange tracking-wider`}>
          HAMSAFAR
        </span>
        <span className={`font-garamond ${subTextSizeClasses[size]} text-orange-700 -mt-1 tracking-wide`}>
          The Travel Buddy
        </span>
      </div>
    </div>
  )
}
