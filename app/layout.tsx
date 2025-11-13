import type React from "react"
import type { Metadata } from "next"
import { Inter, Cinzel, EB_Garamond } from "next/font/google"
import "./globals.css";
import { AuthProvider } from "@/components/auth-provider"
import { Toaster } from "@/components/ui/toaster"
import AOSInitializer from "@/components/AOSInitializer"
import GlobalLoading from "@/components/GlobalLoading"
import ChatBot from "@/components/ChatBot"
import I18nProvider from "@/components/I18nProvider" 

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" })
const ebGaramond = EB_Garamond({ subsets: ["latin"], variable: "--font-eb-garamond" })

export const metadata: Metadata = {
  title: "HAMSAFAR - The Travel Buddy | Discover India & Beyond",
  description:
    "Your trusted travel companion for exploring India's incredible destinations and international adventures. Book authentic travel experiences with vintage charm.",
  generator: "Devesh",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${cinzel.variable} ${ebGaramond.variable} font-sans 
          bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300`}
      >
        <AuthProvider>
          <I18nProvider> {/* ✅ ensures i18n loads only on client */}
            <AOSInitializer />
            <GlobalLoading /> 
            {children}
            <Toaster />
            <ChatBot />
          </I18nProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
