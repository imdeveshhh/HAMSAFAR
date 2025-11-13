"use client"

import type React from "react"
import Link from "next/link"

import { useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
  Star,
  MapPin,
  CalendarIcon,
  Users,
  Camera,
  Sun,
  Cloud,
  CloudRain,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
} from "lucide-react"
import { format } from "date-fns"


// Complete destination data for all destinations
const destinationData = {
  // Indian Destinations
  1: {
    name: "Goa, India",
    country: "India",
    continent: "Asia",
    images: ["/images/destinations/goa.jpg", 
             "/images/destinations/goa.jpg", 
             "/images/destinations/goa.jpg"],
    rating: 4.8,
    price: 15999,
    description: "Golden beaches, Portuguese architecture, and vibrant nightlife in India's beach paradise.",
    longDescription:
      "Experience Goa like never before with our carefully curated tours that take you through pristine beaches, spice plantations, and historic churches. Enjoy water sports, explore local markets, and savor authentic Goan cuisine. Our experiences blend the state's rich Portuguese heritage with its vibrant Indian culture.",
    activities: [
      "Beach Hopping & Water Sports",
      "Spice Plantation Tour",
      "Old Goa Heritage Walk",
      "Goan Cooking Class",
      "Sunset Cruise on Mandovi River",
      "Flea Market Shopping",
    ],
    weather: {
      current: { temp: 28, condition: "Sunny", icon: Sun },
      forecast: [
        { day: "Today", temp: 28, condition: "Sunny", icon: Sun },
        { day: "Tomorrow", temp: 30, condition: "Sunny", icon: Sun },
        { day: "Wed", temp: 26, condition: "Light Rain", icon: CloudRain },
        { day: "Thu", temp: 29, condition: "Partly Cloudy", icon: Cloud },
        { day: "Fri", temp: 31, condition: "Sunny", icon: Sun },
      ],
    },
    reviews: [
      {
        id: 1,
        name: "Priya Sharma",
        rating: 5,
        date: "2024-01-15",
        comment:
          "HAMSAFAR made our Goa trip absolutely perfect! The beach resorts were amazing and the local experiences were authentic.",
      },
      {
        id: 2,
        name: "Rajesh Kumar",
        rating: 5,
        date: "2024-01-10",
        comment: "Great organization and wonderful local guides. The spice plantation tour was a highlight.",
      },
    ],
  },
  2: {
    name: "Kerala, India",
    country: "India",
    continent: "Asia",
    images: ["/images/destinations/kerala.jpg", 
             "/images/destinations/kerala.jpg", 
             "/images/destinations/kerala.jpg"],
    rating: 4.9,
    price: 18999,
    description: "Backwaters, spice plantations, and Ayurvedic wellness in God's Own Country.",
    longDescription:
      "Discover Kerala's enchanting backwaters on traditional houseboats, explore aromatic spice plantations in Munnar, and rejuvenate with authentic Ayurvedic treatments. Experience the rich cultural heritage through Kathakali performances and temple festivals.",
    activities: [
      "Houseboat Stay",
      "Ayurvedic Spa",
      "Tea Plantations",
      "Kathakali Dance",
      "Backwater Cruise",
      "Spice Garden Tour",
    ],
    weather: {
      current: { temp: 26, condition: "Partly Cloudy", icon: Cloud },
      forecast: [
        { day: "Today", temp: 26, condition: "Partly Cloudy", icon: Cloud },
        { day: "Tomorrow", temp: 28, condition: "Sunny", icon: Sun },
        { day: "Wed", temp: 24, condition: "Light Rain", icon: CloudRain },
        { day: "Thu", temp: 27, condition: "Sunny", icon: Sun },
        { day: "Fri", temp: 25, condition: "Cloudy", icon: Cloud },
      ],
    },
    reviews: [
      {
        id: 1,
        name: "Sarah Wilson",
        rating: 5,
        date: "2024-02-01",
        comment: "The houseboat experience was magical! Kerala's natural beauty is breathtaking.",
      },
      {
        id: 2,
        name: "Michael Brown",
        rating: 4,
        date: "2024-01-28",
        comment: "Excellent Ayurvedic treatments and the tea plantation tour was very informative.",
      },
    ],
  },
  3: {
    name: "Rajasthan, India",
    country: "India",
    continent: "Asia",
    images: [
      "/images/destinations/rajasthan.jpg",
      "/images/destinations/rajasthan.jpg",
      "/images/destinations/rajasthan.jpg",
    ],
    rating: 4.7,
    price: 22999,
    description: "Royal palaces, desert safaris, and rich cultural heritage of the Land of Kings.",
    longDescription:
      "Step into the royal world of Rajasthan with visits to magnificent palaces, desert camps under starlit skies, and vibrant local markets. Experience camel safaris, folk performances, and the warm hospitality of the desert people.",
    activities: [
      "Palace Tours",
      "Camel Safari",
      "Desert Camping",
      "Folk Performances",
      "Heritage Hotels",
      "Local Markets",
    ],
    weather: {
      current: { temp: 32, condition: "Sunny", icon: Sun },
      forecast: [
        { day: "Today", temp: 32, condition: "Sunny", icon: Sun },
        { day: "Tomorrow", temp: 35, condition: "Sunny", icon: Sun },
        { day: "Wed", temp: 30, condition: "Partly Cloudy", icon: Cloud },
        { day: "Thu", temp: 33, condition: "Sunny", icon: Sun },
        { day: "Fri", temp: 31, condition: "Sunny", icon: Sun },
      ],
    },
    reviews: [
      {
        id: 1,
        name: "Emma Davis",
        rating: 5,
        date: "2024-01-20",
        comment: "The palace tours were incredible! Rajasthan's royal heritage is truly magnificent.",
      },
      {
        id: 2,
        name: "David Johnson",
        rating: 4,
        date: "2024-01-18",
        comment: "Desert camping was an unforgettable experience. The folk performances were amazing.",
      },
    ],
  },
  4: {
    name: "Kashmir, India",
    country: "India",
    continent: "Asia",
    images: [
      "/images/destinations/kashmir.jpg",
      "/images/destinations/kashmir.jpg",
      "/images/destinations/kashmir.jpg",
    ],
    rating: 4.9,
    price: 25999,
    description: "Paradise on Earth with stunning valleys, houseboats, and snow-capped mountains.",
    longDescription:
      "Experience the breathtaking beauty of Kashmir with stays on traditional houseboats, Shikara rides on Dal Lake, and visits to Mughal gardens. Enjoy skiing in Gulmarg and explore saffron fields in Pampore.",
    activities: [
      "Houseboat Stay",
      "Shikara Rides",
      "Gulmarg Skiing",
      "Saffron Gardens",
      "Mughal Gardens",
      "Valley Tours",
    ],
    weather: {
      current: { temp: 15, condition: "Partly Cloudy", icon: Cloud },
      forecast: [
        { day: "Today", temp: 15, condition: "Partly Cloudy", icon: Cloud },
        { day: "Tomorrow", temp: 18, condition: "Sunny", icon: Sun },
        { day: "Wed", temp: 12, condition: "Light Rain", icon: CloudRain },
        { day: "Thu", temp: 16, condition: "Sunny", icon: Sun },
        { day: "Fri", temp: 14, condition: "Cloudy", icon: Cloud },
      ],
    },
    reviews: [
      {
        id: 1,
        name: "Lisa Anderson",
        rating: 5,
        date: "2024-02-05",
        comment: "Kashmir is truly paradise on earth! The houseboat experience was magical.",
      },
      {
        id: 2,
        name: "Robert Taylor",
        rating: 5,
        date: "2024-02-02",
        comment: "Stunning landscapes and warm hospitality. The Shikara rides were peaceful and beautiful.",
      },
    ],
  },
  5: {
    name: "Himachal Pradesh, India",
    country: "India",
    continent: "Asia",
    images: [
      "/images/destinations/himachal.jpg",
      "/images/destinations/himachal.jpg",
      "/images/destinations/himachal.jpg",
    ],
    rating: 4.6,
    price: 16999,
    description: "Hill stations, adventure sports, and serene mountain landscapes.",
    longDescription:
      "Explore the scenic hill stations of Himachal Pradesh with trekking adventures, paragliding experiences, and visits to ancient temples. Enjoy the cool mountain air and stunning Himalayan views.",
    activities: ["Trekking", "Paragliding", "Temple Visits", "Apple Orchards", "Mountain Railways", "Adventure Sports"],
    weather: {
      current: { temp: 20, condition: "Sunny", icon: Sun },
      forecast: [
        { day: "Today", temp: 20, condition: "Sunny", icon: Sun },
        { day: "Tomorrow", temp: 22, condition: "Sunny", icon: Sun },
        { day: "Wed", temp: 18, condition: "Partly Cloudy", icon: Cloud },
        { day: "Thu", temp: 21, condition: "Sunny", icon: Sun },
        { day: "Fri", temp: 19, condition: "Light Rain", icon: CloudRain },
      ],
    },
    reviews: [
      {
        id: 1,
        name: "Jennifer Lee",
        rating: 4,
        date: "2024-01-25",
        comment: "Great trekking experiences and beautiful mountain views. The paragliding was thrilling!",
      },
      {
        id: 2,
        name: "Mark Wilson",
        rating: 5,
        date: "2024-01-22",
        comment: "Perfect hill station getaway. The apple orchards and temples were highlights.",
      },
    ],
  },

  // Asian Destinations
  101: {
    name: "Tokyo, Japan",
    country: "Japan",
    continent: "Asia",
    images: [
      "/images/destinations/asia/tokyo-japan.jpg",
      "/images/destinations/asia/tokyo-japan.jpg",
      "/images/destinations/asia/tokyo-japan.jpg",
    ],
    rating: 4.9,
    price: 125999,
    description: "Modern metropolis blending tradition with cutting-edge technology and culture.",
    longDescription:
      "Discover Tokyo's incredible diversity with expert-guided tours through iconic districts like Shibuya, traditional neighborhoods like Asakusa, and cutting-edge areas like Harajuku. Experience authentic sushi, witness cherry blossoms, and immerse yourself in Japanese culture.",
    activities: [
      "Shibuya Crossing",
      "Sushi Markets",
      "Temple Visits",
      "Cherry Blossoms",
      "Harajuku Fashion",
      "Tokyo Skytree",
    ],
    weather: {
      current: { temp: 22, condition: "Partly Cloudy", icon: Cloud },
      forecast: [
        { day: "Today", temp: 22, condition: "Partly Cloudy", icon: Cloud },
        { day: "Tomorrow", temp: 25, condition: "Sunny", icon: Sun },
        { day: "Wed", temp: 20, condition: "Light Rain", icon: CloudRain },
        { day: "Thu", temp: 24, condition: "Sunny", icon: Sun },
        { day: "Fri", temp: 23, condition: "Partly Cloudy", icon: Cloud },
      ],
    },
    reviews: [
      {
        id: 1,
        name: "Michael Chen",
        rating: 5,
        date: "2024-02-10",
        comment: "Tokyo exceeded all expectations! The blend of modern and traditional is incredible.",
      },
      {
        id: 2,
        name: "Emma Wilson",
        rating: 5,
        date: "2024-02-05",
        comment: "Perfect cherry blossom season visit. The sushi experiences were unforgettable!",
      },
    ],
  },

  // European Destinations
  201: {
    name: "Paris, France",
    country: "France",
    continent: "Europe",
    images: [
      "/images/destinations/europe/eiffel-tower-paris.jpg",
      "/images/destinations/europe/eiffel-tower-paris.jpg",
      "/images/destinations/europe/eiffel-tower-paris.jpg",
    ],
    rating: 4.8,
    price: 89999,
    description: "City of Light with iconic landmarks, art, and romantic atmosphere.",
    longDescription:
      "Experience Paris like never before with vintage-inspired tours through the city's most beloved neighborhoods. Stroll along the Seine, visit world-class museums, and dine at classic bistros that have been serving locals for generations.",
    activities: ["Eiffel Tower", "Louvre Museum", "Seine Cruises", "Café Culture", "Montmartre Walk", "Notre Dame"],
    weather: {
      current: { temp: 18, condition: "Partly Cloudy", icon: Cloud },
      forecast: [
        { day: "Today", temp: 18, condition: "Partly Cloudy", icon: Cloud },
        { day: "Tomorrow", temp: 22, condition: "Sunny", icon: Sun },
        { day: "Wed", temp: 16, condition: "Light Rain", icon: CloudRain },
        { day: "Thu", temp: 20, condition: "Sunny", icon: Sun },
        { day: "Fri", temp: 19, condition: "Partly Cloudy", icon: Cloud },
      ],
    },
    reviews: [
      {
        id: 1,
        name: "Sarah Johnson",
        rating: 5,
        date: "2024-01-15",
        comment: "Absolutely magical experience! Paris truly is the city of love and light.",
      },
      {
        id: 2,
        name: "James Miller",
        rating: 4,
        date: "2024-01-12",
        comment: "The Louvre and Eiffel Tower were breathtaking. Great food recommendations too!",
      },
    ],
  },

  // Add more destinations with similar structure...
  // For brevity, I'll add a few more key ones and create a fallback for others

  301: {
    name: "New York City, USA",
    country: "USA",
    continent: "North America",
    images: [
      "/images/destinations/north-america/new-york-usa.jpg",
      "/images/destinations/north-america/new-york-usa.jpg",
      "/images/destinations/north-america/new-york-usa.jpg",
    ],
    rating: 4.8,
    price: 95999,
    description: "The city that never sleeps with iconic skyline and cultural diversity.",
    longDescription:
      "Experience the energy of NYC with visits to iconic landmarks, Broadway shows, world-class museums, and diverse neighborhoods. From Central Park to Times Square, discover what makes this city truly special.",
    activities: ["Times Square", "Central Park", "Broadway Shows", "Museums", "Statue of Liberty", "Brooklyn Bridge"],
    weather: {
      current: { temp: 24, condition: "Sunny", icon: Sun },
      forecast: [
        { day: "Today", temp: 24, condition: "Sunny", icon: Sun },
        { day: "Tomorrow", temp: 26, condition: "Partly Cloudy", icon: Cloud },
        { day: "Wed", temp: 22, condition: "Light Rain", icon: CloudRain },
        { day: "Thu", temp: 25, condition: "Sunny", icon: Sun },
        { day: "Fri", temp: 23, condition: "Cloudy", icon: Cloud },
      ],
    },
    reviews: [
      {
        id: 1,
        name: "Alex Rodriguez",
        rating: 5,
        date: "2024-02-08",
        comment: "NYC is incredible! So much to see and do. The Broadway show was amazing.",
      },
      {
        id: 2,
        name: "Maria Garcia",
        rating: 4,
        date: "2024-02-05",
        comment: "Great city tour and excellent food recommendations. Central Park was beautiful.",
      },
    ],
  },

  501: {
    name: "Cape Town, South Africa",
    country: "South Africa",
    continent: "Africa",
    images: [
      "/images/destinations/africa/cape-town-south-africa.jpg",
      "/images/destinations/africa/cape-town-south-africa.jpg",
      "/images/destinations/africa/cape-town-south-africa.jpg",
    ],
    rating: 4.8,
    price: 65999,
    description: "Mother City with Table Mountain, wine lands, and diverse culture.",
    longDescription:
      "Discover Cape Town's stunning natural beauty with Table Mountain cable car rides, wine tours in Stellenbosch, penguin colonies at Boulders Beach, and rich cultural experiences in the townships.",
    activities: ["Table Mountain", "Wine Tours", "Penguin Colonies", "Cultural Townships", "Cape Point", "Waterfront"],
    weather: {
      current: { temp: 21, condition: "Sunny", icon: Sun },
      forecast: [
        { day: "Today", temp: 21, condition: "Sunny", icon: Sun },
        { day: "Tomorrow", temp: 23, condition: "Sunny", icon: Sun },
        { day: "Wed", temp: 19, condition: "Partly Cloudy", icon: Cloud },
        { day: "Thu", temp: 22, condition: "Sunny", icon: Sun },
        { day: "Fri", temp: 20, condition: "Light Rain", icon: CloudRain },
      ],
    },
    reviews: [
      {
        id: 1,
        name: "Sophie Turner",
        rating: 5,
        date: "2024-01-30",
        comment: "Cape Town is breathtaking! Table Mountain views and wine tours were incredible.",
      },
      {
        id: 2,
        name: "Tom Harris",
        rating: 4,
        date: "2024-01-28",
        comment: "Amazing wildlife and cultural experiences. The penguins were adorable!",
      },
    ],
  },
}

// Fallback function for destinations not in detailed data
const createFallbackDestination = (id: string) => {
  const destinationMap: { [key: string]: any } = {
    // Add basic info for other destinations
    "6": {
      name: "Agra, India",
      country: "India",
      price: 12999,
      description: "Home to the iconic Taj Mahal and Mughal architectural wonders.",
    },
    "7": {
      name: "Ladakh, India",
      country: "India",
      price: 28999,
      description: "High-altitude desert with Buddhist monasteries and breathtaking landscapes.",
    },
    "8": {
      name: "Udaipur, India",
      country: "India",
      price: 19999,
      description: "City of Lakes with magnificent palaces and romantic settings.",
    },
    "9": {
      name: "Rishikesh, India",
      country: "India",
      price: 11999,
      description: "Yoga capital of the world with spiritual experiences and adventure sports.",
    },
    "10": {
      name: "Darjeeling, India",
      country: "India",
      price: 14999,
      description: "Queen of Hills famous for tea gardens and Himalayan views.",
    },
    "102": {
      name: "Kyoto, Japan",
      country: "Japan",
      price: 115999,
      description: "Ancient temples, traditional culture, and serene bamboo forests.",
    },
    "103": {
      name: "Bangkok, Thailand",
      country: "Thailand",
      price: 45999,
      description: "Vibrant street life, ornate temples, and incredible street food scene.",
    },
    "104": {
      name: "Bali, Indonesia",
      country: "Indonesia",
      price: 55999,
      description: "Tropical paradise with ancient temples, rice terraces, and spiritual vibes.",
    },
    "202": {
      name: "Rome, Italy",
      country: "Italy",
      price: 79999,
      description: "Eternal City with ancient ruins, Vatican treasures, and incredible cuisine.",
    },
    "203": {
      name: "Barcelona, Spain",
      country: "Spain",
      price: 69999,
      description: "Gaudí's architectural masterpieces, beaches, and vibrant nightlife.",
    },
    "302": {
      name: "Banff, Canada",
      country: "Canada",
      price: 85999,
      description: "Canadian Rockies with pristine lakes, mountains, and wildlife.",
    },
    "401": {
      name: "Rio de Janeiro, Brazil",
      country: "Brazil",
      price: 72999,
      description: "Marvelous city with Christ the Redeemer, beaches, and carnival spirit.",
    },
    "402": {
      name: "Machu Picchu, Peru",
      country: "Peru",
      price: 68999,
      description: "Lost city of the Incas perched high in the Andes mountains.",
    },
    "502": {
      name: "Marrakech, Morocco",
      country: "Morocco",
      price: 48999,
      description: "Imperial city with souks, palaces, and gateway to the Sahara.",
    },
    "601": {
      name: "Sydney, Australia",
      country: "Australia",
      price: 105999,
      description: "Harbor city with iconic Opera House, beaches, and laid-back culture.",
    },
    "701": {
      name: "Antarctica Expedition",
      country: "Antarctica",
      price: 285999,
      description: "Ultimate expedition to the frozen continent with penguins and icebergs.",
    },
  }

  const basic = destinationMap[id]
  if (!basic) return null

  return {
    ...basic,
    continent: "Various",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    rating: 4.5,
    longDescription: `Discover the wonders of ${basic.name} with our expertly crafted travel experiences. This destination offers unique cultural insights, breathtaking landscapes, and unforgettable memories that will last a lifetime.`,
    activities: ["Guided Tours", "Cultural Experiences", "Local Cuisine", "Photography", "Shopping", "Sightseeing"],
    weather: {
      current: { temp: 25, condition: "Pleasant", icon: Sun },
      forecast: [
        { day: "Today", temp: 25, condition: "Pleasant", icon: Sun },
        { day: "Tomorrow", temp: 27, condition: "Sunny", icon: Sun },
        { day: "Wed", temp: 23, condition: "Partly Cloudy", icon: Cloud },
        { day: "Thu", temp: 26, condition: "Sunny", icon: Sun },
        { day: "Fri", temp: 24, condition: "Pleasant", icon: Sun },
      ],
    },
    reviews: [
      {
        id: 1,
        name: "Travel Enthusiast",
        rating: 5,
        date: "2024-01-15",
        comment: `${basic.name} exceeded our expectations! HAMSAFAR provided excellent service and authentic experiences.`,
      },
      {
        id: 2,
        name: "Adventure Seeker",
        rating: 4,
        date: "2024-01-10",
        comment: "Great destination with wonderful local guides and memorable experiences.",
      },
    ],
  }
}

export default function DestinationDetailPage() {
  const params = useParams()
  const destinationId = params.id as string
  const destination =
    destinationData[Number(destinationId) as keyof typeof destinationData] || createFallbackDestination(destinationId)

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [checkInDate, setCheckInDate] = useState<Date>()
  const [checkOutDate, setCheckOutDate] = useState<Date>()
  const [travelers, setTravelers] = useState("2")
  const [newReview, setNewReview] = useState({ rating: 5, comment: "" })

  if (!destination) {
    return (
      <div className="min-h-screen bg-vintage-pattern">
        <Navbar />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="font-cinzel text-4xl font-bold text-vintage-orange mb-4">Destination Not Found</h1>
            <p className="font-garamond text-xl text-orange-800 mb-6">
              The destination you're looking for doesn't exist.
            </p>
            <Link href="/destinations">
              <Button className="retro-button">Browse All Destinations</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % destination.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + destination.images.length) % destination.images.length)
  }

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Booking request submitted! We'll contact you soon to confirm your HAMSAFAR travel experience.")
  }

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you for your review! It helps other HAMSAFAR travelers.")
    setNewReview({ rating: 5, comment: "" })
  }

  return (
    <div className="min-h-screen bg-vintage-pattern">
      <Navbar />

      {/* Back Button */}
      <section className="py-4 bg-vintage-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/destinations">
            <Button
              variant="outline"
              className="border-vintage-orange text-vintage-orange hover:bg-vintage-orange hover:text-white bg-transparent"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Destinations
            </Button>
          </Link>
        </div>
      </section>

      {/* Hero Section with Image Gallery */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="font-cinzel text-5xl font-bold text-vintage-orange mb-4">{destination.name}</h1>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-vintage-teal mr-2" />
                <span className="font-garamond text-lg text-orange-800">{destination.country}</span>
              </div>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(destination.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="ml-2 font-garamond text-lg text-orange-800">
                  {destination.rating} ({destination.reviews.length} reviews)
                </span>
              </div>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="relative mb-12">
            <div className="relative h-96 md:h-[500px] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src={destination.images[currentImageIndex] || "/placeholder.svg"}
                alt={`${destination.name} - Image ${currentImageIndex + 1}`}
                fill
                className="object-cover"
              />
              {destination.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </>
              )}
            </div>

            {/* Image Thumbnails */}
            {destination.images.length > 1 && (
              <div className="flex justify-center mt-4 space-x-2">
                {destination.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-16 h-16 rounded-lg overflow-hidden border-2 ${
                      index === currentImageIndex ? "border-vintage-orange" : "border-gray-300"
                    }`}
                  >
                    <Image
                      src={destination.images[index] || "/placeholder.svg"}
                      alt={`Thumbnail ${index + 1}`}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Description and Details */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <Card className="retro-card border-vintage-orange">
                <CardContent className="p-8">
                  <h2 className="font-cinzel text-3xl font-bold text-vintage-orange mb-6">About This Destination</h2>
                  <p className="font-garamond text-lg text-orange-800 mb-6">{destination.description}</p>
                  <p className="font-garamond text-lg text-orange-800">{destination.longDescription}</p>
                </CardContent>
              </Card>

              {/* Activities */}
              <Card className="retro-card border-vintage-teal">
                <CardContent className="p-8">
                  <h2 className="font-cinzel text-3xl font-bold text-vintage-teal mb-6">Experiences & Activities</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {destination.activities.map((activity, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-vintage-cream rounded-lg">
                        <Camera className="h-5 w-5 text-vintage-teal" />
                        <span className="font-garamond text-orange-800">{activity}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Weather */}
              <Card className="retro-card border-vintage-red">
                <CardContent className="p-8">
                  <h2 className="font-cinzel text-3xl font-bold text-vintage-red mb-6">Weather Forecast</h2>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {destination.weather.forecast.map((day, index) => {
                      const IconComponent = day.icon
                      return (
                        <div key={index} className="text-center p-4 bg-vintage-cream rounded-lg">
                          <p className="font-garamond font-bold text-orange-800 mb-2">{day.day}</p>
                          <IconComponent className="h-8 w-8 text-vintage-orange mx-auto mb-2" />
                          <p className="font-garamond text-2xl font-bold text-vintage-red">{day.temp}°C</p>
                          <p className="font-garamond text-sm text-orange-700">{day.condition}</p>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              {/* Reviews */}
              <Card className="retro-card border-vintage-teal">
                <CardContent className="p-8">
                  <h2 className="font-cinzel text-3xl font-bold text-vintage-teal mb-6">Traveler Reviews</h2>
                  <div className="space-y-6">
                    {destination.reviews.map((review) => (
                      <div key={review.id} className="border-b border-vintage-teal pb-6 last:border-b-0">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-cinzel font-bold text-vintage-orange">{review.name}</h4>
                          <div className="flex items-center">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                            ))}
                            <span className="ml-2 font-garamond text-sm text-orange-700">{review.date}</span>
                          </div>
                        </div>
                        <p className="font-garamond text-orange-800">{review.comment}</p>
                      </div>
                    ))}
                  </div>

                  {/* Add Review Form */}
                  <div className="mt-8 pt-8 border-t border-vintage-teal">
                    <h3 className="font-cinzel text-xl font-bold text-vintage-teal mb-4">Share Your Experience</h3>
                    <form onSubmit={handleReviewSubmit} className="space-y-4">
                      <div>
                        <label className="block font-garamond text-orange-800 mb-2">Rating</label>
                        <Select
                          value={newReview.rating.toString()}
                          onValueChange={(value) => setNewReview({ ...newReview, rating: Number.parseInt(value) })}
                        >
                          <SelectTrigger className="bg-white border-vintage-teal">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {[5, 4, 3, 2, 1].map((rating) => (
                              <SelectItem key={rating} value={rating.toString()}>
                                {rating} Star{rating !== 1 ? "s" : ""}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block font-garamond text-orange-800 mb-2">Your Review</label>
                        <Textarea
                          value={newReview.comment}
                          onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                          placeholder="Share your travel experience..."
                          className="bg-white border-vintage-teal"
                          rows={4}
                        />
                      </div>
                      <Button type="submit" className="retro-button">
                        Submit Review
                      </Button>
                    </form>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Booking Card */}
            <div className="lg:col-span-1">
              <Card className="retro-card border-vintage-orange sticky top-8">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="font-cinzel text-3xl font-bold text-vintage-orange mb-2">Book Your Journey</h3>
                    <p className="font-cinzel text-2xl font-bold text-vintage-red">
                      From ₹{destination.price.toLocaleString()}
                    </p>
                    <p className="font-garamond text-sm text-orange-700">per person</p>
                  </div>

                  <form onSubmit={handleBookingSubmit} className="space-y-6">
                    {/* Check-in Date */}
                    <div>
                      <label className="block font-garamond font-bold text-orange-800 mb-2">Check-in Date</label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal bg-white border-vintage-orange"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {checkInDate ? format(checkInDate, "PPP") : "Select date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar mode="single" selected={checkInDate} onSelect={setCheckInDate} initialFocus />
                        </PopoverContent>
                      </Popover>
                    </div>

                    {/* Check-out Date */}
                    <div>
                      <label className="block font-garamond font-bold text-orange-800 mb-2">Check-out Date</label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal bg-white border-vintage-orange"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {checkOutDate ? format(checkOutDate, "PPP") : "Select date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar mode="single" selected={checkOutDate} onSelect={setCheckOutDate} initialFocus />
                        </PopoverContent>
                      </Popover>
                    </div>

                    {/* Number of Travelers */}
                    <div>
                      <label className="block font-garamond font-bold text-orange-800 mb-2">Number of Travelers</label>
                      <Select value={travelers} onValueChange={setTravelers}>
                        <SelectTrigger className="bg-white border-vintage-orange">
                          <Users className="mr-2 h-4 w-4" />
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                            <SelectItem key={num} value={num.toString()}>
                              {num} {num === 1 ? "Traveler" : "Travelers"}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Price Breakdown */}
                    <div className="border-t border-vintage-orange pt-4 space-y-2">
                      <div className="flex justify-between font-garamond">
                        <span>Base price × {travelers}</span>
                        <span>₹{(destination.price * Number.parseInt(travelers)).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between font-garamond">
                        <span>Service fee</span>
                        <span>
                          ₹{Math.round(destination.price * Number.parseInt(travelers) * 0.1).toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between font-cinzel font-bold text-lg border-t border-vintage-orange pt-2">
                        <span>Total</span>
                        <span>
                          ₹{Math.round(destination.price * Number.parseInt(travelers) * 1.1).toLocaleString()}
                        </span>
                      </div>
                    </div>

                    <Button type="submit" className="retro-button w-full text-lg py-4">
                      Book Your Adventure
                    </Button>
                  </form>

                  <p className="text-center font-garamond text-sm text-orange-700 mt-4">
                    Free cancellation up to 48 hours before departure
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
