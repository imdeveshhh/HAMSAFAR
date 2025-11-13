"use client"


import type React from "react"
// import Spline3D from "@/components/spline3D";
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Star, MapPin, Calendar, Users, ChevronLeft, ChevronRight, Mail, Plane, Camera, Globe } from "lucide-react"
import { receiveMessageOnPort } from "worker_threads"

// This is the manual sliding destination code in the home page 
const featuredDestinations = [
  {
    id: 1,
    name: "Goa, India",
    image: "/images/destinations/goa.jpg",
    rating: 4.8,
    description: "Golden beaches and Portuguese heritage",
  },
  {
    id: 2,
    name: "Kerala, India",
    image: "/images/destinations/kerala.jpg",
    rating: 4.9,
    description: "God's Own Country with backwaters and spices",
  },
  {
    id: 3,
    name: "Rajasthan, India",
    image: "/images/destinations/rajasthan.jpg",
    rating: 4.7,

    description: "Royal palaces and desert adventures",
  },
  {
    id: 4,
    name: "Kashmir, India",
    image: "/images/destinations/kashmir.jpg",
    rating: 4.9,
    description: "Paradise on Earth with stunning valleys",
  },
  {
    id: 5,
    name: "Machu Picchu, Peru",
    image: "/images/destinations/south-america/machu-picchu-peru.jpg",
    rating: 4.9,
    description: "Lost city of the Incas high in the Andes",
  },
  {
    id: 6,
    name: "Queenstown, New Zealand",
    image: "/images/destinations/oceania/queenstown-new-zealand.jpg",
    rating: 4.9,
    description: "Adventure capital surrounded by lakes and mountains",
  },
  {
    id: 7,
    name: "Great Barrier Reef, Australia",
    image: "/images/destinations/oceania/great-barrier-reef.jpg",
    rating: 5.0,
    description: "World’s largest coral reef system and marine paradise",
  },
  {
    id: 8,
    name: "Galápagos Islands, Ecuador",
    image: "/images/destinations/south-america/galapagos-ecuador.jpg",
    rating: 4.9,
    description: "Wildlife haven with volcanoes and clear waters",
  },
  {
    id: 9,
    name: "Cape Town, South Africa",
    image: "/images/destinations/africa/cape-town-south-africa.jpg",
    rating: 4.8,
    description: "City of Table Mountain and penguin beaches",
  },
  {
  id: 10,
  name: "Ninh Bình, Vietnam",
  image: "/images/destinations/asia/ninh-binh-vietnam.jpg",
  rating: 4.7,
  description: "A hidden gem with limestone karsts, river caves, and rural charm",
},

  {
    id: 11,
    name: "Bora Bora, French Polynesia",
    image: "/images/destinations/oceania/bora-bora.jpg",
    rating: 4.9,
    description: "Overwater bungalows and turquoise lagoons",
  },
  {
    id: 12,
    name: "Amazon Rainforest, Brazil",
    image: "/images/destinations/south-america/amazon-brazil.jpg",
    rating: 4.9,
    description: "Lush jungle with river cruises and exotic wildlife",
  },
  {
    id: 13,
    name: "Tulum, Mexico",
    image: "/images/destinations/north-america/tulum-mexico.jpg",
    rating: 4.7,
    description: "Bohemian beach town with Mayan ruins and eco-resorts",
  },
  {
    id: 14,
    name: "Masai Mara, Kenya",
    image: "/images/destinations/africa/masai-mara-kenya.jpg",
    rating: 4.9,
    description: "Wildlife safaris and the spectacular Great Migration",
  },
  {
    id: 15,
    name: "Niagara Falls, Canada/USA",
    image: "/images/destinations/north-america/niagara-falls.jpg",
    rating: 4.8,
    description: "Iconic natural wonder with thrilling boat rides",
  },
  {
    id: 16,
    name: "Bariloche, Argentina",
    image: "/images/destinations/south-america/bariloche-argentina.jpg",
    rating: 4.7,
    description: "Lakeside town with chocolate shops and Swiss charm",
  },
  {
    id: 17,
    name: "Mount Kilimanjaro, Tanzania",
    image: "/images/destinations/africa/mount-kilimanjaro.jpg",
    rating: 4.9,
    description: "Africa’s highest peak and top trekking destination",
  },
  {
    id: 18,
    name: "Zanzibar, Tanzania",
    image: "/images/destinations/africa/zanzibar.jpg",
    rating: 4.7,
    description: "Tropical island with spice farms and beaches",
  },
  {
    id: 19,
    name: "Sydney, Australia",
    image: "/images/destinations/oceania/sydney-australia.jpg",
    rating: 4.8,
    description: "Harbor city with Opera House and Bondi Beach",
  },
  {
    id: 20,
    name: "Cartagena, Colombia",
    image: "/images/destinations/south-america/cartagena-colombia.jpg",
    rating: 4.7,
    description: "Colonial charm on the Caribbean coast",
  },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "New York, USA",
    text: "Wanderlust Vintage gave us the most authentic travel experience. The attention to detail and vintage charm made our honeymoon unforgettable!",
    rating: 5,
  },
  {
    name: "Marco Rodriguez",
    location: "Barcelona, Spain",
    text: "The classic travel packages are incredible. It felt like stepping back in time while enjoying modern comfort.",
    rating: 5,
  },
  {
    name: "Emily Chen",
    location: "Toronto, Canada",
    text: "From booking to the actual trip, everything was perfectly organized. The vintage aesthetic is not just marketing - it's real!",
    rating: 5,
  },
]

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [email, setEmail] = useState("")
   const [message, setMessage] = useState("");
 useEffect(() => {
    const fetchBackend = async () => {
      try {
        const res = await fetch("http://localhost:3001/api/test");
        const data = await res.json();
        setMessage(data.message);
        console.log("✅ Backend Response:", data);
      } catch (err) {
        console.error("❌ Backend not connected:", err);
        setMessage("❌ Failed to connect to backend");
      }
    };

    fetchBackend();
  }, []);

// This commented part is the auto-image-slider in the page
// useEffect(() => {
//   const timer = setInterval(() => {
//     setCurrentSlide((prev) => (prev + 1) % featuredDestinations.length)
//   }, 5000)
//   return () => clearInterval(timer)
// }, [])

const nextSlide = () => {
  setCurrentSlide((prev) => (prev + 1) % featuredDestinations.length)
}

const prevSlide = () => {
  setCurrentSlide((prev) => (prev - 1 + featuredDestinations.length) % featuredDestinations.length)
}

const handleNewsletterSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  // Handle newsletter subscription
  console.log("Newsletter subscription:", email)
  setEmail("")
  alert("Thank you for subscribing to our vintage travel newsletter!")
}

return (
  <div className="min-h-screen bg-vintage-pattern dark:bg-gray-950 text-orange-900 dark:text-gray-100 transition-colors duration-300">
    <Navbar />

    {/* Hero Section */}
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-vintage-cream via-vintage-beige to-vintage-cream dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 opacity-90"></div>

{/* 🌍 Floating Travel Images with Perfect Pluffy Ovals */}
<div className="absolute top-10 left-10 w-48 h-56 rounded-[45%] overflow-hidden shadow-md animate-float group hover:z-30 group-hover:overflow-visible transition-all duration-500">
  <img
    src="/images/destinations/asia/taj-mahal.jpg"
    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-125"
  />
</div>

<div className="absolute top-[1rem] right-10 w-44 h-48 rounded-[48%] overflow-hidden shadow-md animate-float delay-200 group hover:z-30 group-hover:overflow-visible transition-all duration-500">
  <img
    src="/images/destinations/north-america/havana-cuba.jpg"
    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-125"
  />
</div>

<div className="absolute bottom-[2rem] left-[6.75rem] w-44 h-48 rounded-[48%] overflow-hidden shadow-md animate-float delay-300 group hover:z-30 group-hover:overflow-visible transition-all duration-500">
  <img
    src="/images/destinations/europe/santorini-greece.jpg"
    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-125"
  />
</div>

<div className="absolute bottom-[2rem] right-[5.40rem] w-48 h-56 rounded-[45%] overflow-hidden shadow-md animate-float delay-500 group hover:z-30 group-hover:overflow-visible transition-all duration-500">
  <img
    src="/images/destinations/africa/mount-kilimanjaro.jpg"
    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-125"
  />
</div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="font-cinzel text-6xl md:text-8xl font-bold text-vintage-orange mb-6 slide-in-left">
          HAMSAFAR
        </h1>
        <p className="font-garamond text-2xl md:text-3xl text-orange-800 dark:text-vintage-orange mb-8 slide-in-right">
          The Travel Buddy - Discover India & Beyond
        </p>
        <p className="font-garamond text-lg md:text-xl text-orange-700 dark:text-vintage-orange mb-12 max-w-2xl mx-auto fade-in">
          Embark on a journey through India's rich heritage and explore international destinations with your trusted
          travel companion. Experience authentic adventures with classic charm.
        </p>
      </div>

      {/* Decorative vintage elements */}
    <div className="absolute top-10 left-[10.25rem] w-20 h-20 border-4 border-vintage-orange rounded-full opacity-20 animate-pulse"></div>
    <div className="absolute bottom-10 right-[4rem] w-16 h-16 border-4 border-vintage-teal rounded-full opacity-20 animate-pulse"></div>
    <div className="absolute top-1/2 left-9 w-12 h-12 border-4 border-vintage-red rounded-full opacity-20 animate-pulse"></div>
    <div className="absolute top-[11rem] right-[9rem] w-20 h-20 border-4 border-vintage-orange rounded-full opacity-20 animate-pulse"></div>
  
    </section>

{/* HAMSAFAR Logo */}
<div className="absolute bottom-[-9.5rem] left-1/2 -translate-x-1/2 transform z-10">
  <div className="w-64 h-64 rounded-full overflow-hidden bg-transparent dark:bg-white/10 dark:ring-2 dark:ring-orange-500 transition-all duration-500 flex items-center justify-center">
    <img
      src="/images/destinations/HAMSAFAR_Logo.png"
      className="w-full h-full object-contain dark:invert-0"
      alt="Hamsafar Logo"
    />
  </div>
</div>

    
 {/* Personalised Private Travel section */}
<section className="relative py-32 bg-[#f9f6ef] dark:bg-gray-900 overflow-hidden transition-colors duration-300">
  {/* Text Section */}
  <div className="max-w-5xl mx-auto text-center px-4 z-10 relative">
    <h2
      className="text-5xl font-cinzel font-bold text-orange-500 dark:text-vintage-orange mb-6"
      data-aos="fade-down"
    >
      Personalised Private Travel
    </h2>
    <p
      className="text-lg text-gray-700 dark:text-gray-300 font-garamond leading-relaxed max-w-3xl mx-auto"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      Step into our world of tailored escapes where every journey is crafted with your desires in mind. Discover an immersive world of travel with hand-selected experiences, meaningful connections, and unique destinations – all brought to life through insider knowledge from our exclusive collection of wanderlust secrets.
    </p>
  </div>

  {/* Floating Image Flow - 12 Images */}
 <section className="relative z-10">
  <div className="max-w-7xl mx-auto mt-14 flex flex-wrap justify-center gap-10 px-4">
    {Array.from({ length: 12 }, (_, i) => (
      <div
        key={i}
        className={`w-40 h-52 perspective rounded-full mt-${(i % 4) * 2 + 2}`}
        data-aos={i % 3 === 0 ? "zoom-in-up" : i % 3 === 1 ? "fade-up" : "fade-up-right"}
        data-aos-delay={`${50 + i * 50}`}
        data-aos-once="false"
      >
        <div
          className={`relative w-full h-full card-3d shadow-2xl transform ${
            i % 2 === 0 ? "rotate-3" : "-rotate-3"
          } shadow-orange-200 dark:shadow-orange-800 rounded-full overflow-hidden`}
        >
          {/* Front Image */}
          <div className="card-front">
            <img
              src={`/images/destinations/t1 (${i + 1}).jpg`}
              alt={`Travel ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Back Side (Optional: Add overlay info or decorative image) */}
          <div className="card-back bg-vintage-orange flex items-center justify-center text-white text-lg font-semibold font-cinzel">
            Destination {i + 1}
          </div>
        </div>
      </div>
    ))}

      {/* Scroll Icon (Location Pin) */}
      <div className="mt-[-1rem] flex justify-center">
        <a
          className="animate-[bounce_10s_infinite] text-vintage-orange hover:text-vintage-teal transition duration-300"
          aria-label="Scroll Down"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-16"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C8.1 2 5 5.1 5 9c0 5.3 7 13 7 13s7-7.7 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z" />
          </svg>
        </a>
      </div>

      {/* Explore Button */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center w-full mt-2 -mb-4">
        <Link href="/destinations">
          <Button className="retro-button text-xl px-8 py-4 -mt-12">
            Explore Destinations
          </Button>
        </Link>
      </div>

      {/* Marquee Text */}
      <div className="overflow-hidden whitespace-nowrap w-full bg-transparent py-2 mt-6 border-t border-orange-300 dark:border-orange-600">
        <div className="flex w-[200%]">
          <p className="text-lg text-gray-700 dark:text-gray-300 font-garamond px-4 whitespace-nowrap">
            {/* HOTELS & RESORTS | CELEBRATIONS | ADVENTURES | WILDLIFE SAFARIS | PRIVATE VILLAS | JEEPS & CARS | PRIVATE GUIDES | YACHTS & CRUISES  */}
          </p>
        </div>
      </div>
    </div>
  </section>
 {/* Sponsor Logos Section */}
<section className="pt-0 pb-0 px-4 overflow-hidden">
  <div 
    className="max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-16"
    data-aos="fade-up"
    data-aos-delay="200"
    data-aos-once="true"
  >
    {[
      "Sponser logo 1.png",
      "Sponser logo 2.png",
      "Sponser logo 3.png",
      "Sponser logo 4.png",
      "Sponser logo 5.png",
    ].map((filename, i) => (
      <div key={i} className="w-40 h-24 bg-transparent dark:bg-black/10 rounded-x5 flex items-center justify-center transition-transform duration-300 hover:scale-105">
        <img
          src={`/images/destinations/${filename}`}
          alt={`Sponsor ${i + 1}`}
          className="w-full h-full object-contain"
        />
      </div>
    ))}
  </div>
  {/* Marquee Text */}
      <div className="overflow-hidden whitespace-nowrap w-full bg-transparent py-2 mt-6 border-t border-orange-300 dark:border-orange-600">
        <div className="flex w-[200%]">
          <p className="text-lg text-gray-700 dark:text-gray-300 font-garamond px-4 whitespace-nowrap">
            HOTELS & RESORTS | CELEBRATIONS | ADVENTURES | WILDLIFE SAFARIS | PRIVATE VILLAS | JEEPS & CARS | PRIVATE GUIDES | YACHTS & CRUISES 
          </p>
        </div>
      </div>
      
</section>
</section>

{/* Featured Destinations Slider */}
<section className="pt-1 pb-16 bg-gradient-to-b from-vintage-cream to-vintage-beige dark:from-gray-800 dark:to-gray-900 transition-colors">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="max-w-5xl mx-auto text-center px-4 z-10 relative">
    <h2
      className="text-5xl font-cinzel font-bold text-orange-500 dark:text-vintage-orange mb-6"
      data-aos="fade-down"
    >
      Featured Destinations
    </h2>
    <p
      className="text-lg text-gray-700 dark:text-gray-300 font-garamond leading-relaxed max-w-3xl mx-auto"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      Explore our handpicked selection of vintage-inspired travel destinations that blend classic charm with modern comfort. Each destination offers a unique experience, from serene beaches to majestic mountains, all curated for the discerning traveler.
    </p>
  </div>
        <div className="relative">
          <div className="overflow-hidden  shadow-2xl mt-8">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {featuredDestinations.map((destination) => (
                <div key={destination.id} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-2 gap-0 min-h-[400px]">
                    <div className="relative">
                      <Image
                        src={destination.image || "/placeholder.svg"}
                        alt={destination.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="retro-card p-12 flex flex-col justify-center bg-white dark:bg-gray-800 text-orange-900 dark:text-gray-100 transition-colors">
                      <h3 className="font-cinzel text-4xl font-bold text-vintage-orange mb-4">{destination.name}</h3>
                      <p className="font-garamond text-xl text-orange-800 dark:text-vintage-orange mb-6">{destination.description}</p>
                      <div className="flex items-center mb-6">
                        <div className="flex items-center mr-4">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 ${
                                i < Math.floor(destination.rating) ? "text-yellow-400 fill-current" : "text-gray-300 dark:text-gray-700"
                              }`}
                            />
                          ))}
                          <span className="ml-2 font-garamond text-lg text-orange-800 dark:text-vintage-orange">{destination.rating}</span>
                        </div>
                        {/* <span className="font-cinzel text-2xl font-bold text-vintage-orange">{destination.price}</span> */}
                      </div>
                      <Link href={`/destinations/${destination.id}`}>
                        <Button className="retro-button w-full">Explore This Destination</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slider Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-vintage-orange text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-vintage-orange text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Slider Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {featuredDestinations.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-vintage-orange" : "bg-orange-300 dark:bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Find Your Fit Section */}
<section className="bg-[#0b1a3d] dark:bg-gray-950 text-white py-20 px-6 md:px-16 relative overflow-hidden transition-colors duration-500">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">

    {/* Left Text Content */}
    <div className="flex-1">
      <h2 className="text-5xl font-bold font-cinzel mb-6 text-white dark:text-vintage-orange">
        Find your fit
      </h2>
      <p className="text-lg font-garamond leading-relaxed mb-10 max-w-xl text-gray-200 dark:text-gray-400">
        At Global Travel Moments, we’re for the dreamers, the romantics, and the adventure seekers who want it all.
        For those who value authenticity, elegance, meaningful moments, and wholehearted inclusivity with a personal touch,
        our bespoke approach and expertise ensure your travels are seamless and unforgettable.
      </p>
      <p className="text-lg font-garamond leading-relaxed mb-10 max-w-xl text-gray-200 dark:text-gray-400">
        We’ll be your compass and guide you through a world of unimaginable discoveries.
        Ready to explore the extraordinary?
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/contact">
          <button className="border border-white hover:bg-white hover:text-[#0b1a3d] dark:hover:bg-vintage-orange dark:hover:text-white text-white px-8 py-3 rounded-full font-semibold transition">
            CONTACT US
          </button>
        </Link>
      </div>
    </div>
    

    {/* Right Image Collage */}
    <div className="flex-1 relative flex justify-center items-center -mt-16 -ml-16 group">
      {/* Large Circle Image */}
      <div className="w-96 h-96 rounded-full overflow-hidden relative z-10 transition-all duration-500 ease-in-out 
                      hover:scale-125 hover:z-30 hover:shadow-2xl group-hover:[&:not(:hover)]:blur-sm">
        <img
          src="/images/destinations/t1 (1).jpg"
          alt="Paddle Board"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Small Overlapping Circle Image */}
      <div className="w-60 h-60 rounded-full overflow-hidden absolute right-[-30px] bottom-[-60px] bg-white 
                      transition-all duration-500 ease-in-out z-20 
                      hover:scale-125 hover:z-30 hover:shadow-2xl group-hover:[&:not(:hover)]:blur-sm">
        <img
          src="/images/destinations/t1 (3).jpg"
          alt="Couple"
          className="w-full h-full object-cover"
        />
      </div>
    </div>

  </div>
</section>
<section className="bg-[#f4f1e8] dark:bg-gray-950 py-20 px-6 md:px-16 transition-colors duration-500">
   {/* Text Section */}
  <div className="max-w-5xl mx-auto text-center px-4 z-10 relative">
    <h2
      className="text-5xl font-cinzel font-bold text-orange-500 dark:text-vintage-orange mb-6"
      data-aos="fade-down"
    >
      Tales from our Journal
    </h2>
    <p
      className="text-lg text-gray-700 dark:text-gray-300 font-garamond leading-relaxed max-w-3xl mx-auto mb-10"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      Explore handpicked destinations, insider insights, expert advice, and wanderlust-worthy inspiration to spark your next unforgettable journey.
    </p>
  </div>
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 group">
      {/* Card 1 */}
      <div className="relative overflow-hidden group-hover:grayscale hover:!grayscale-0 cursor-pointer shadow-md hover:shadow-2xl transition transform hover:scale-110 duration-500">
        <img
          src="/images/destinations/himachal.jpg"
          alt="Blog 1"
          className="w-full h-96 object-cover transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
          <span className="bg-purple-300 dark:bg-purple-600 text-xs font-semibold px-3 py-1 rounded-full">MOUNTAINS</span>
          <span className="bg-green-200 dark:bg-green-700 text-xs font-semibold px-3 py-1 rounded-full">INSIDER TIPS & GUIDE</span>
          <span className="bg-blue-200 dark:bg-blue-600 text-xs font-semibold px-3 py-1 rounded-full">RIVER & OCEANS</span>
        </div>
        <div className="absolute bottom-0 p-6 text-white font-cinzel text-2xl z-10 bg-gradient-to-t from-black/70 to-transparent w-full">
          Unwind in the Himalayas: Week-Long Escapes to the Heart of Himachal
        </div>
      </div>

      {/* Card 2 */}
      <div className="relative overflow-hidden group-hover:grayscale hover:!grayscale-0 cursor-pointer shadow-md hover:shadow-2xl transition transform hover:scale-110 duration-500">
        <img
          src="/images/destinations/Food.jpg"
          alt="Blog 2"
          className="w-full h-96 object-cover transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
          <span className="bg-orange-300 dark:bg-orange-600 text-xs font-semibold px-3 py-1 rounded-full">FOOD FLAVOR & VARAITY</span>
          <span className="bg-green-200 dark:bg-green-700 text-xs font-semibold px-3 py-1 rounded-full">FLAVOR & VARAITY</span>
          <span className="bg-purple-300 dark:bg-purple-600 text-xs font-semibold px-3 py-1 rounded-full">FOODIES HOME</span>
        </div>
        <div className="absolute bottom-0 p-6 text-white font-cinzel text-2xl z-10 bg-gradient-to-t from-black/70 to-transparent w-full">
          Taste That Travels: Exploring India's Kitchens and Culture
        </div>
      </div>

      {/* Card 3 */}
      <div className="relative overflow-hidden group-hover:grayscale hover:!grayscale-0 cursor-pointer shadow-md hover:shadow-2xl transition transform hover:scale-110 duration-500">
        <img
          src="/images/destinations/asia/kyoto-temple.jpg"
          alt="Blog 3"
          className="w-full h-96 object-cover transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
          <span className="bg-purple-300 dark:bg-purple-600 text-xs font-semibold px-3 py-1 rounded-full">WANDER-LUST</span>
          <span className="bg-orange-300 dark:bg-orange-600 text-xs font-semibold px-3 py-1 rounded-full">EPICUREAN, ARTS & CULTURE</span>
          <span className="bg-red-300 dark:bg-red-600 text-xs font-semibold px-3 py-1 rounded-full">HOTELS & RESORTS</span>
        </div>
        <div className="absolute bottom-0 p-6 text-white font-cinzel text-2xl z-10 bg-gradient-to-t from-black/70 to-transparent w-full">
          Wander the World: Unforgettable Week-Long International Escapes
        </div>
      </div>

    </div>
  </div>
</section>

{/* Fullscreen Travel Video Hero */}
<section className="relative w-full h-screen overflow-hidden">
  {/* Video Background */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover z-0"
  >
    <source src="/videos/travelclip.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Dark Overlay for Text Readability */}
  <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

  {/* Text Content Overlay */}
  <div className="relative z-20 flex flex-col justify-center items-center text-center h-full px-4">
    <h1 className="text-5xl md:text-6xl font-cinzel font-bold text-white drop-shadow-lg mb-6">
      Explore the World with Hamsafar
    </h1>
    <p className="text-lg md:text-xl font-garamond text-gray-100 max-w-2xl mb-8">
      Unforgettable journeys, curated experiences, and breathtaking destinations await you.
    </p>
    <a
      href="/destinations"
      className="bg-white text-[#0b1a3d] hover:bg-orange-400 hover:text-white font-semibold px-8 py-3 rounded-full transition duration-300"
    >
      Discover Destinations
    </a>
  </div>
</section>

     {/* Why Choose Us */}
    <section className="py-20 bg-vintage-cream dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-5xl font-bold text-vintage-orange mb-4">Why Choose HAMSAFAR as your Buddy?</h2>
          <p className="font-garamond text-xl text-orange-800 dark:text-vintage-orange max-w-2xl mx-auto">
            Experience the golden age of travel with modern comfort and convenience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
  {/* Card 1 */}
  <Card className="retro-card border-vintage-orange dark:border-orange-500 bg-white dark:bg-gray-800 text-orange-900 dark:text-gray-100 transition-colors duration-500">
    <CardContent className="p-8 text-center">
      <MapPin className="h-16 w-16 text-vintage-orange mx-auto mb-6 transition duration-300 transform hover:scale-110 cursor-pointer" />
      <h3 className="font-cinzel text-2xl font-bold text-vintage-orange dark:text-orange-400 mb-4">Authentic Experiences</h3>
      <p className="font-garamond text-lg text-orange-800 dark:text-vintage-orange">
        Discover hidden gems and local secrets that only vintage travelers know about.
      </p>
    </CardContent>
  </Card>

  {/* Card 2 */}
  <Card className="retro-card border-vintage-orange dark:border-orange-500 bg-white dark:bg-gray-800 text-orange-900 dark:text-gray-100 transition-colors duration-500">
    <CardContent className="p-8 text-center">
      <Calendar className="h-16 w-16 text-vintage-teal mx-auto mb-6 transition duration-300 transform hover:scale-110 cursor-pointer" />
      <h3 className="font-cinzel text-2xl font-bold text-vintage-teal dark:text-teal-400 mb-4">Timeless Itineraries</h3>
      <p className="font-garamond text-lg text-orange-800 dark:text-vintage-orange">
        Carefully crafted journeys that blend classic destinations with modern comfort.
      </p>
    </CardContent>
  </Card>

  {/* Card 3 */}
  <Card className="retro-card border-vintage-orange dark:border-orange-500 bg-white dark:bg-gray-800 text-orange-900 dark:text-gray-100 transition-colors duration-500">
    <CardContent className="p-8 text-center">
      <Users className="h-16 w-16 text-vintage-red mx-auto mb-6 transition duration-300 transform hover:scale-110 cursor-pointer" />
      <h3 className="font-cinzel text-2xl font-bold text-vintage-red dark:text-red-400 mb-4">Personal Service</h3>
      <p className="font-garamond text-lg text-orange-800 dark:text-vintage-orange">
        Old-school hospitality meets modern efficiency for unforgettable service.
      </p>
    </CardContent>
  </Card>

  {/* Card 4 */}
  <Card className="retro-card border-vintage-orange dark:border-orange-500 bg-white dark:bg-gray-800 text-orange-900 dark:text-gray-100 transition-colors duration-500">
    <CardContent className="p-8 text-center">
      <Plane className="h-16 w-16 text-vintage-orange mx-auto mb-6 transition duration-300 transform hover:scale-110 cursor-pointer" />
      <h3 className="font-cinzel text-2xl font-bold text-vintage-orange dark:text-orange-400 mb-4">Seamless Travel</h3>
      <p className="font-garamond text-lg text-orange-800 dark:text-vintage-orange">
        From takeoff to touchdown, we handle every detail so you can enjoy the ride.
      </p>
    </CardContent>
  </Card>

  {/* Card 5 */}
  <Card className="retro-card border-vintage-orange dark:border-orange-500 bg-white dark:bg-gray-800 text-orange-900 dark:text-gray-100 transition-colors duration-500">
    <CardContent className="p-8 text-center">
      <Camera className="h-16 w-16 text-vintage-teal mx-auto mb-6 transition duration-300 transform hover:scale-110 cursor-pointer" />
      <h3 className="font-cinzel text-2xl font-bold text-vintage-teal dark:text-teal-400 mb-4">Picture-Perfect Memories</h3>
      <p className="font-garamond text-lg text-orange-800 dark:text-vintage-orange">
        Capture breathtaking moments and timeless stories across every journey.
      </p>
    </CardContent>
  </Card>

  {/* Card 6 */}
  <Card className="retro-card border-vintage-orange dark:border-orange-500 bg-white dark:bg-gray-800 text-orange-900 dark:text-gray-100 transition-colors duration-500">
    <CardContent className="p-8 text-center">
      <Globe className="h-16 w-16 text-vintage-red mx-auto mb-6 transition duration-300 transform hover:scale-110 cursor-pointer" />
      <h3 className="font-cinzel text-2xl font-bold text-vintage-red dark:text-red-400 mb-4">Global Reach</h3>
      <p className="font-garamond text-lg text-orange-800 dark:text-vintage-orange">
        Whether it’s India or Iceland, our network opens doors around the world.
      </p>
    </CardContent>
  </Card>
</div>
      </div>
    </section>
    

    {/* Testimonials */}
    <section className="py-20 bg-gradient-to-r from-vintage-beige to-vintage-cream dark:from-gray-800 dark:to-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-5xl font-bold text-vintage-orange mb-4">Traveler Stories</h2>
          <p className="font-garamond text-xl text-orange-800 dark:text-vintage-orange">Hear from fellow vintage travel enthusiasts</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="postcard-border bg-white dark:bg-gray-800 text-orange-900 dark:text-gray-100">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="font-garamond text-lg text-orange-800 dark:text-vintage-orange mb-6 italic">"{testimonial.text}"</p>
                <div className="border-t border-vintage-orange pt-4">
                  <p className="font-cinzel font-bold text-vintage-orange">{testimonial.name}</p>
                  <p className="font-garamond text-orange-700 dark:text-orange-400">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
      </div>
    </section>

{/* Newsletter Signup */}
<section className="py-20 bg-gradient-to-r from-orange-900 via-red-900 to-orange-900 dark:from-black dark:via-red-950 dark:to-black">
  <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <div className="group w-fit mx-auto mb-6">
  <Mail className="h-16 w-16 text-vintage-orange transform transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12" />
</div>

     <h2 className="font-cinzel text-4xl font-bold text-vintage-cream dark:text-vintage-orange mb-4">
      Stay Inspired
    </h2>
    <h2 className="font-cinzel text-4xl font-bold text-vintage-cream dark:text-vintage-orange mb-4">
      Join HAMSAFAR Travel Club
    </h2>
    <p className="font-garamond text-lg text-vintage-cream dark:text-vintage-orange mb-8">
      Subscribe to receive travel updates, exclusive deals, and wanderlust-filled inspiration.
    </p>

    <form className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
      <input
        type="text"
        placeholder="First Name"
        className="px-4 py-3 rounded-md bg-white dark:bg-zinc-900 text-black dark:text-white"
        required
      />
      <input
        type="text"
        placeholder="Last Name"
        className="px-4 py-3 rounded-md bg-white dark:bg-zinc-900 text-black dark:text-white"
        required
      />
      <input
        type="email"
        placeholder="Email Address"
        className="px-4 py-3 rounded-md bg-white dark:bg-zinc-900 text-black dark:text-white md:col-span-2"
        required
      />
      <input
        type="tel"
        placeholder="Phone Number (optional)"
        className="px-4 py-3 rounded-md bg-white dark:bg-zinc-900 text-black dark:text-white md:col-span-2"
      />
      <button
        type="submit"
        className="md:col-span-2 mt-4 bg-vintage-orange text-white px-8 py-3 rounded-full font-bold hover:bg-orange-600 transition"
      >
        Subscribe
      </button>
    </form>
  
      </div>
    </section>

    <Footer />
      
    
  </div>
)
}
