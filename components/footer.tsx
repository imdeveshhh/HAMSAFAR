import Link from "next/link"
import { Plane, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-orange-900 via-red-900 to-orange-900 text-vintage-cream dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 dark:text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Plane className="h-8 w-8 text-vintage-orange dark:text-yellow-400" />
              <div className="flex flex-col">
                <span className="font-cinzel text-2xl font-bold text-vintage-orange dark:text-yellow-400">HAMSAFAR</span>
                <span className="font-garamond text-sm text-vintage-cream dark:text-gray-300 -mt-1">The Travel Buddy</span>
              </div>
            </div>
            <p className="font-garamond text-lg mb-4 dark:text-gray-300">
              Your trusted companion for discovering India's incredible heritage and exploring the world with authentic
              travel experiences that blend tradition with adventure.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-vintage-orange hover:text-vintage-cream dark:text-yellow-400 dark:hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-vintage-orange hover:text-vintage-cream dark:text-yellow-400 dark:hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-vintage-orange hover:text-vintage-cream dark:text-yellow-400 dark:hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-cinzel text-xl font-bold text-vintage-orange dark:text-yellow-400 mb-4">Quick Links</h3>
            <ul className="space-y-2 font-garamond">
              <li>
                <Link href="/destinations" className="hover:text-vintage-orange dark:hover:text-yellow-400 transition-colors">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-vintage-orange dark:hover:text-yellow-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-vintage-orange dark:hover:text-yellow-400 transition-colors">
                  Travel Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-vintage-orange dark:hover:text-yellow-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-cinzel text-xl font-bold text-vintage-orange dark:text-yellow-400 mb-4">Contact</h3>
            <div className="space-y-3 font-garamond">
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-vintage-orange dark:text-yellow-400" />
                <span>hello@wanderlustvintage.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-vintage-orange dark:text-yellow-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-vintage-orange dark:text-yellow-400" />
                <span>123 Vintage Ave, Travel City</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-vintage-orange dark:border-yellow-500 mt-8 pt-8 text-center font-garamond">
          <p className="dark:text-gray-400">
            &copy; 2024 HAMSAFAR - The Travel Buddy. All rights reserved. Made with ❤️ for travelers.
          </p>
        </div>
      </div>
    </footer>
  )
}
