"use client"

import type React from "react"

import { Plane, MapPin, Compass, Globe, Luggage } from "lucide-react"

export function TravelLoading({ message = "Loading your adventure..." }: { message?: string }) {
  return (
    <div className="fixed inset-0 bg-vintage-cream bg-opacity-95 flex items-center justify-center z-50">
      <div className="text-center">
        {/* Animated Travel Icons */}
        <div className="relative mb-8">
          {/* Main plane animation */}
          <div className="relative w-32 h-32 mx-auto">
            <Plane className="h-12 w-12 text-vintage-orange absolute top-8 left-8 animate-bounce" />

            {/* Rotating compass */}
            <Compass className="h-16 w-16 text-vintage-teal absolute top-6 left-6 animate-spin" />

            {/* Pulsing globe */}
            <Globe className="h-8 w-8 text-vintage-red absolute top-12 left-12 animate-pulse" />

            {/* Moving luggage */}
            <Luggage
              className="h-6 w-6 text-orange-600 absolute top-16 left-4 animate-bounce"
              style={{ animationDelay: "0.5s" }}
            />

            {/* Map pins */}
            <MapPin className="h-4 w-4 text-vintage-orange absolute top-4 left-16 animate-ping" />
            <MapPin
              className="h-4 w-4 text-vintage-teal absolute top-20 left-20 animate-ping"
              style={{ animationDelay: "1s" }}
            />
          </div>
        </div>

        {/* Loading Text */}
        <h2 className="font-cinzel text-3xl font-bold text-vintage-orange mb-4">{message}</h2>

        {/* Animated dots */}
        <div className="flex justify-center space-x-2">
          <div className="w-3 h-3 bg-vintage-orange rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-vintage-teal rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
          <div className="w-3 h-3 bg-vintage-red rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
        </div>

        {/* Travel quote */}
        <p className="font-garamond text-lg text-orange-800 mt-6 italic max-w-md mx-auto">
          "The world is a book and those who do not travel read only one page."
        </p>
      </div>
    </div>
  )
}

export function PageTransition({ children }: { children: React.ReactNode }) {
  return <div className="animate-fadeIn">{children}</div>
}
