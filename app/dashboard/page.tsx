"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { useAuth } from "@/components/auth-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { User, MapPin, Calendar, Star, Plane, Heart, Clock, CheckCircle, AlertCircle } from "lucide-react"

const mockBookings = [
  {
    id: 1,
    destination: "Goa, India",
    image: "/images/destinations/goa.jpg",
    dates: "March 15-22, 2024",
    status: "confirmed",
    price: "₹15,999",
    travelers: 2,
  },
  {
    id: 2,
    destination: "Kerala, India",
    image: "/images/destinations/kerala.jpg",
    dates: "June 10-17, 2024",
    status: "pending",
    price: "₹18,999",
    travelers: 2,
  },
]

const mockSavedDestinations = [
  {
    id: 3,
    name: "Rajasthan, India",
    image: "/images/destinations/rajasthan.jpg",
    rating: 4.7,
    price: "₹22,999",
  },
  {
    id: 4,
    name: "Kashmir, India",
    image: "/images/destinations/kashmir.jpg",
    rating: 4.9,
    price: "₹25,999",
  },
  {
    id: 5,
    name: "Himachal Pradesh, India",
    image: "/images/destinations/himachal.jpg",
    rating: 4.6,
    price: "₹16,999",
  },
]

export default function DashboardPage() {
  const { user, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login")
    }
  }, [user, isLoading, router])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-vintage-pattern">
        <Navbar />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <Plane className="h-16 w-16 text-vintage-orange mx-auto mb-4 animate-pulse" />
            <p className="font-garamond text-xl text-orange-800">Loading your HAMSAFAR travel dashboard...</p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-vintage-pattern">
      <Navbar />

      {/* Welcome Section */}
      <section className="py-12 bg-gradient-to-r from-vintage-cream via-vintage-beige to-vintage-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-cinzel text-5xl font-bold text-vintage-orange mb-4">Welcome Back, {user.name}!</h1>
            <p className="font-garamond text-xl text-orange-800 max-w-2xl mx-auto">
              Your HAMSAFAR travel adventures await. Manage your bookings, explore India's incredible destinations, and
              continue your journey with your trusted travel buddy.
            </p>
          </div>
        </div>
      </section>

      {/* Dashboard Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Profile Sidebar */}
            <div className="lg:col-span-1">
              <Card className="retro-card border-vintage-orange">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-vintage-orange rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="font-cinzel text-2xl text-vintage-orange">{user.name}</CardTitle>
                  <p className="font-garamond text-orange-800">{user.email}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <Badge className="bg-vintage-teal text-white">Vintage Explorer</Badge>
                  </div>
                  <div className="space-y-2 text-sm font-garamond">
                    <div className="flex items-center justify-between">
                      <span className="text-orange-800">Trips Completed:</span>
                      <span className="font-bold text-vintage-orange">3</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-orange-800">Countries Visited:</span>
                      <span className="font-bold text-vintage-orange">8</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-orange-800">Member Since:</span>
                      <span className="font-bold text-vintage-orange">2024</span>
                    </div>
                  </div>
                  <Button
                    className="w-full border-vintage-orange text-vintage-orange hover:bg-vintage-orange hover:text-white bg-transparent"
                    variant="outline"
                  >
                    Edit Profile
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-8">
              {/* Current Bookings */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-cinzel text-3xl font-bold text-vintage-orange">Your Bookings</h2>
                  <Link href="/destinations">
                    <Button className="retro-button">Book New Trip</Button>
                  </Link>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {mockBookings.map((booking) => (
                    <Card key={booking.id} className="retro-card border-vintage-teal">
                      <div className="relative h-48 overflow-hidden rounded-t-lg">
                        <Image
                          src={booking.image || "/placeholder.svg"}
                          alt={booking.destination}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-4 right-4">
                          <Badge
                            className={
                              booking.status === "confirmed" ? "bg-green-500 text-white" : "bg-yellow-500 text-white"
                            }
                          >
                            {booking.status === "confirmed" ? (
                              <>
                                <CheckCircle className="h-3 w-3 mr-1" /> Confirmed
                              </>
                            ) : (
                              <>
                                <AlertCircle className="h-3 w-3 mr-1" /> Pending
                              </>
                            )}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="font-cinzel text-xl font-bold text-vintage-teal mb-2">{booking.destination}</h3>
                        <div className="space-y-2 font-garamond text-orange-800">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2 text-vintage-orange" />
                            {booking.dates}
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="flex items-center">
                              <User className="h-4 w-4 mr-2 text-vintage-orange" />
                              {booking.travelers} travelers
                            </span>
                            <span className="font-cinzel font-bold text-vintage-red">{booking.price}</span>
                          </div>
                        </div>
                        <div className="mt-4 flex space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1 border-vintage-teal text-vintage-teal hover:bg-vintage-teal hover:text-white bg-transparent"
                          >
                            View Details
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1 border-vintage-orange text-vintage-orange hover:bg-vintage-orange hover:text-white bg-transparent"
                          >
                            Modify
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {mockBookings.length === 0 && (
                  <Card className="retro-card border-vintage-orange">
                    <CardContent className="text-center py-12">
                      <Plane className="h-16 w-16 text-vintage-orange mx-auto mb-4" />
                      <h3 className="font-cinzel text-2xl font-bold text-vintage-orange mb-2">No Bookings Yet</h3>
                      <p className="font-garamond text-lg text-orange-800 mb-6">
                        Start your HAMSAFAR adventure today! Explore India's incredible destinations.
                      </p>
                      <Link href="/destinations">
                        <Button className="retro-button">Explore Destinations</Button>
                      </Link>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Saved Destinations */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-cinzel text-3xl font-bold text-vintage-orange">Saved Destinations</h2>
                  <Heart className="h-6 w-6 text-vintage-red" />
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {mockSavedDestinations.map((destination) => (
                    <Card
                      key={destination.id}
                      className="retro-card border-vintage-red hover:shadow-xl transition-shadow"
                    >
                      <div className="relative h-40 overflow-hidden rounded-t-lg">
                        <Image
                          src={destination.image || "/placeholder.svg"}
                          alt={destination.name}
                          fill
                          className="object-cover"
                        />
                        <button className="absolute top-3 right-3 bg-white bg-opacity-80 p-2 rounded-full hover:bg-opacity-100 transition-all">
                          <Heart className="h-4 w-4 text-vintage-red fill-current" />
                        </button>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-cinzel text-lg font-bold text-vintage-red mb-2">{destination.name}</h3>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                            <span className="font-garamond text-sm text-orange-800">{destination.rating}</span>
                          </div>
                          <span className="font-cinzel font-bold text-vintage-orange">{destination.price}</span>
                        </div>
                        <Link href={`/destinations/${destination.id}`}>
                          <Button
                            className="w-full mt-3 border-vintage-red text-vintage-red hover:bg-vintage-red hover:text-white bg-transparent"
                            variant="outline"
                          >
                            View Details
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div>
                <h2 className="font-cinzel text-3xl font-bold text-vintage-orange mb-6">Quick Actions</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="retro-card border-vintage-teal hover:shadow-xl transition-shadow cursor-pointer">
                    <CardContent className="text-center p-8">
                      <MapPin className="h-12 w-12 text-vintage-teal mx-auto mb-4" />
                      <h3 className="font-cinzel text-xl font-bold text-vintage-teal mb-2">Explore Destinations</h3>
                      <p className="font-garamond text-orange-800">Discover new vintage travel experiences</p>
                    </CardContent>
                  </Card>

                  <Card className="retro-card border-vintage-orange hover:shadow-xl transition-shadow cursor-pointer">
                    <CardContent className="text-center p-8">
                      <Clock className="h-12 w-12 text-vintage-orange mx-auto mb-4" />
                      <h3 className="font-cinzel text-xl font-bold text-vintage-orange mb-2">Travel History</h3>
                      <p className="font-garamond text-orange-800">Review your past adventures</p>
                    </CardContent>
                  </Card>

                  <Card className="retro-card border-vintage-red hover:shadow-xl transition-shadow cursor-pointer">
                    <CardContent className="text-center p-8">
                      <Star className="h-12 w-12 text-vintage-red mx-auto mb-4" />
                      <h3 className="font-cinzel text-xl font-bold text-vintage-red mb-2">Leave Reviews</h3>
                      <p className="font-garamond text-orange-800">Share your travel experiences</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
