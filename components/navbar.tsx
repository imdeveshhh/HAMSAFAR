"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useAuth } from "@/components/auth-provider"
import { Button } from "@/components/ui/button"
import { Menu, X, User, LogOut, Moon, Sun } from "lucide-react"
import {DropdownMenu,DropdownMenuContent,DropdownMenuItem,DropdownMenuTrigger,}from "@/components/ui/dropdown-menu"
import { CreativeLogo } from "@/components/creative-logo"
import useTheme from "@/hooks/useTheme"
import { usePathname } from "next/navigation"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { user, logout } = useAuth()
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Destinations", href: "/destinations" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 
        bg-gradient-to-r from-vintage-cream via-vintage-beige to-vintage-cream 
        dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
        border-b-4 border-vintage-orange dark:border-yellow-500
        rounded-b-3xl shadow-lg
        ${isScrolled ? "bg-opacity-80 backdrop-blur-md" : "bg-opacity-100"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <CreativeLogo size="normal" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
  key={item.name}
  href={item.href}
  className={`font-garamond text-lg px-1 transition-colors duration-200 relative
    ${pathname === item.href
      ? "text-vintage-orange dark:text-yellow-300 after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-vintage-orange dark:after:bg-yellow-300"
      : "text-orange-800 hover:text-vintage-orange dark:text-yellow-300 dark:hover:text-yellow-100"
    }`}
>
  {item.name}
</Link>

            ))}

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
               className="p-2 rounded-full bg-vintage-yellow-200 dark:bg-vintage-yellow-700 transition-colors border-vintage-yellow shadow-[0_0_10px_rgba(252,211,77,0.7)] hover:shadow-[0_0_20px_rgba(252,211,77,1)]"
              aria-label="Toggle Theme"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5 text-vintage-yellow" />
              ) : (
                <Sun className="h-5 w-5 text-yellow-300" />
              )}
            </button>

            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="retro-card border-vintage-orange bg-transparent dark:border-yellow-500 dark:text-yellow-300"
                  >
                    <User className="h-4 w-4 mr-2" />
                    {user.name}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="dark:bg-gray-800 dark:text-yellow-300">
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard">Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={logout}>
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex space-x-4">
                <Link href="/login">
                  <Button
                    variant="outline"
                    className=" rounded-none border-vintage-orange text-vintage-orange hover:bg-vintage-orange hover:text-white bg-transparent dark:border-yellow-500 dark:text-yellow-300 dark:hover:bg-yellow-600"
                  >
                    Login
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button className=" rounded-none retro-button dark:bg-gray-800 dark:text-yellow-300 dark:hover:bg-gray-700">
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-vintage-orange hover:text-orange-600 dark:text-yellow-300 dark:hover:text-yellow-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-vintage-beige dark:bg-gray-800 rounded-lg mt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-orange-800 hover:text-vintage-orange dark:text-yellow-300 dark:hover:text-yellow-100 font-garamond"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Theme Toggle for Mobile */}
              <button
                onClick={() => {
                  toggleTheme()
                  setIsOpen(false)
                }}
                className="block w-full text-left px-3 py-2 text-orange-800 hover:text-vintage-orange dark:text-yellow-300 dark:hover:text-yellow-100 font-garamond"
              >
                {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
              </button>

              {user ? (
                <div className="border-t border-vintage-orange dark:border-yellow-500 pt-2">
                  <Link
                    href="/dashboard"
                    className="block px-3 py-2 text-orange-800 hover:text-vintage-orange dark:text-yellow-300 dark:hover:text-yellow-100 font-garamond"
                    onClick={() => setIsOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      logout()
                      setIsOpen(false)
                    }}
                    className="block w-full text-left px-3 py-2 text-orange-800 hover:text-vintage-orange dark:text-yellow-300 dark:hover:text-yellow-100 font-garamond"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="border-t border-vintage-orange dark:border-yellow-500 pt-2 space-y-2">
                  <Link
                    href="/login"
                    className="block px-3 py-2 text-orange-800 hover:text-vintage-orange dark:text-yellow-300 dark:hover:text-yellow-100 font-garamond"
                    onClick={() => setIsOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    href="/signup"
                    className="block px-3 py-2 text-orange-800 hover:text-vintage-orange dark:text-yellow-300 dark:hover:text-yellow-100 font-garamond"
                    onClick={() => setIsOpen(false)}
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
