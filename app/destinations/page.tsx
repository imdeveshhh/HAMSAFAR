"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, MapPin, Search, Globe, Compass, Mail } from "lucide-react"
import axios from "axios";
import SearchWithPreview from "@/components/SearchWithPreview";
import VideoGallery from "@/components/VideoGallery";
import TypeWriter from '@/components/TypeWriter'; // adjust path if needed
import SearchNearbyPlaces from "@/components/SearchNearbyPlaces";
import TipsSection from '@/components/TipsSection';
import TravelStoriesSection from "@/components/TravelStoriesSection";


const destinations = {
  // Indian Destinations
  india: [
    {
      id: 1,
      name: "Goa, India",
      country: "India",
      continent: "Asia",
      image: "/images/destinations/goa.jpg",
      rating: 4.8,
      price: 15999,
      description: "Golden beaches, Portuguese architecture, and vibrant nightlife in India's beach paradise.",
      budget: "mid-range",
      experiences: ["Beach Hopping", "Spice Plantations", "Portuguese Heritage", "Water Sports"],
      keywords: ["beach", "portuguese", "nightlife", "goa", "water sports", "spice", "heritage", "coastal"],
    },
    {
      id: 2,
      name: "Kerala, India",
      country: "India",
      continent: "Asia",
      image: "/images/destinations/kerala.jpg",
      rating: 4.9,
      price: 18999,
      description: "Backwaters, spice plantations, and Ayurvedic wellness in God's Own Country.",
      budget: "mid-range",
      experiences: ["Houseboat Stay", "Ayurvedic Spa", "Tea Plantations", "Kathakali Dance"],
      keywords: [
        "backwaters",
        "ayurveda",
        "houseboat",
        "kerala",
        "spice",
        "tea",
        "wellness",
        "kathakali",
        "god's own country",
      ],
    },
    {
      id: 3,
      name: "Rajasthan, India",
      country: "India",
      continent: "Asia",
      image: "/images/destinations/rajasthan.jpg",
      rating: 4.7,
      price: 22999,
      description: "Royal palaces, desert safaris, and rich cultural heritage of the Land of Kings.",
      budget: "luxury",
      experiences: ["Palace Tours", "Camel Safari", "Desert Camping", "Folk Performances"],
      keywords: ["palace", "desert", "camel", "rajasthan", "royal", "safari", "heritage", "folk", "kings"],
    },
    {
      id: 4,
      name: "Kashmir, India",
      country: "India",
      continent: "Asia",
      image: "/images/destinations/kashmir.jpg",
      rating: 4.9,
      price: 25999,
      description: "Paradise on Earth with stunning valleys, houseboats, and snow-capped mountains.",
      budget: "luxury",
      experiences: ["Houseboat Stay", "Shikara Rides", "Gulmarg Skiing", "Saffron Gardens"],
      keywords: ["kashmir", "paradise", "houseboat", "shikara", "skiing", "saffron", "mountains", "valleys", "snow"],
    },
    {
      id: 5,
      name: "Himachal Pradesh, India",
      country: "India",
      continent: "Asia",
      image: "/images/destinations/himachal.jpg",
      rating: 4.6,
      price: 16999,
      description: "Hill stations, adventure sports, and serene mountain landscapes.",
      budget: "mid-range",
      experiences: ["Trekking", "Paragliding", "Temple Visits", "Apple Orchards"],
      keywords: ["himachal", "hills", "trekking", "paragliding", "adventure", "mountains", "apple", "temples"],
    },
    {
      id: 6,
      name: "Agra, India",
      country: "India",
      continent: "Asia",
      image: "/images/destinations/agra.jpg",
      rating: 4.8,
      price: 12999,
      description: "Home to the iconic Taj Mahal and Mughal architectural wonders.",
      budget: "budget",
      experiences: ["Taj Mahal", "Agra Fort", "Fatehpur Sikri", "Mughal Gardens"],
      keywords: ["taj mahal", "agra", "mughal", "architecture", "fort", "fatehpur sikri", "gardens", "monument"],
    },
    {
      id: 7,
      name: "Ladakh, India",
      country: "India",
      continent: "Asia",
      image: "/images/destinations/ladakh.jpg",
      rating: 4.9,
      price: 28999,
      description: "High-altitude desert with Buddhist monasteries and breathtaking landscapes.",
      budget: "luxury",
      experiences: ["Monastery Tours", "Pangong Lake", "Nubra Valley", "Bike Expeditions"],
      keywords: ["ladakh", "monastery", "buddhist", "pangong", "nubra", "bike", "altitude", "desert", "leh"],
    },
    {
      id: 8,
      name: "Udaipur, India",
      country: "India",
      continent: "Asia",
      image: "/images/destinations/udaipur.jpg",
      rating: 4.8,
      price: 19999,
      description: "City of Lakes with magnificent palaces and romantic settings.",
      budget: "luxury",
      experiences: ["Lake Palace", "City Palace", "Boat Rides", "Heritage Hotels"],
      keywords: ["udaipur", "lakes", "palace", "romantic", "boat", "heritage", "city palace", "lake palace"],
    },
    {
      id: 9,
      name: "Rishikesh, India",
      country: "India",
      continent: "Asia",
      image: "/images/destinations/rishikesh.jpg",
      rating: 4.7,
      price: 11999,
      description: "Yoga capital of the world with spiritual experiences and adventure sports.",
      budget: "budget",
      experiences: ["Yoga Retreats", "River Rafting", "Ganga Aarti", "Beatles Ashram"],
      keywords: ["rishikesh", "yoga", "spiritual", "rafting", "ganga", "aarti", "beatles", "ashram", "meditation"],
    },
    {
      id: 10,
      name: "Darjeeling, India",
      country: "India",
      continent: "Asia",
      image: "/images/destinations/darjeeling.jpg",
      rating: 4.6,
      price: 14999,
      description: "Queen of Hills famous for tea gardens and Himalayan views.",
      budget: "mid-range",
      experiences: ["Tea Garden Tours", "Toy Train Ride", "Tiger Hill Sunrise", "Monasteries"],
      keywords: ["darjeeling", "tea", "toy train", "tiger hill", "sunrise", "himalayan", "monasteries", "hills"],
    },
  ],

  // Asian Destinations
  asia: [
    {
      id: 101,
      name: "Tokyo, Japan",
      country: "Japan",
      continent: "Asia",
      image: "/images/destinations/asia/tokyo-japan.jpg",
      rating: 4.9,
      price: 125999,
      description: "Modern metropolis blending tradition with cutting-edge technology and culture.",
      budget: "luxury",
      experiences: ["Shibuya Crossing", "Sushi Markets", "Temple Visits", "Cherry Blossoms"],
      keywords: ["tokyo", "japan", "shibuya", "sushi", "temple", "cherry blossom", "modern", "technology", "culture"],
    },
    {
      id: 102,
      name: "Kyoto, Japan",
      country: "Japan",
      continent: "Asia",
      image: "/images/destinations/asia/kyoto-temple.jpg",
      rating: 4.9,
      price: 115999,
      description: "Ancient temples, traditional culture, and serene bamboo forests.",
      budget: "luxury",
      experiences: ["Temple Tours", "Geisha Districts", "Bamboo Grove", "Tea Ceremonies"],
      keywords: ["kyoto", "temple", "geisha", "bamboo", "tea ceremony", "traditional", "ancient", "culture"],
    },
    {
      id: 103,
      name: "Bangkok, Thailand",
      country: "Thailand",
      continent: "Asia",
      image: "/images/destinations/asia/bangkok-thailand.jpg",
      rating: 4.7,
      price: 45999,
      description: "Vibrant street life, ornate temples, and incredible street food scene.",
      budget: "mid-range",
      experiences: ["Temple Tours", "Floating Markets", "Street Food", "Tuk-tuk Rides"],
      keywords: ["bangkok", "thailand", "temple", "street food", "floating market", "tuk-tuk", "vibrant", "ornate"],
    },
    {
      id: 104,
      name: "Bali, Indonesia",
      country: "Indonesia",
      continent: "Asia",
      image: "/images/destinations/asia/bali-indonesia.jpg",
      rating: 4.8,
      price: 55999,
      description: "Tropical paradise with ancient temples, rice terraces, and spiritual vibes.",
      budget: "mid-range",
      experiences: ["Rice Terraces", "Temple Tours", "Volcano Treks", "Beach Clubs"],
      keywords: [
        "bali","indonesia","tropical","temple","rice terraces","volcano","beach","spiritual","paradise",
      ],
    },
    {
      id: 105,
      name: "Ha Long Bay, Vietnam",
      country: "Vietnam",
      continent: "Asia",
      image: "/images/destinations/asia/halong-bay-vietnam.jpg",
      rating: 4.8,
      price: 42999,
      description: "Emerald waters and limestone karsts creating a mystical seascape.",
      budget: "mid-range",
      experiences: ["Cruise Tours", "Cave Exploration", "Kayaking", "Floating Villages"],
      keywords: ["halong bay", "vietnam", "cruise", "cave", "kayaking", "limestone", "emerald", "mystical", "seascape"],
    },
    {
  id: 106,
  name: "Mount Everest, Nepal",
  country: "Nepal",
  continent: "Asia",
  image: "/images/destinations/asia/everest-nepal.jpg",
  rating: 4.9,
  price: 99999,
  description: "World’s highest peak, offering trekking adventures and Himalayan views.",
  budget: "luxury",
  experiences: ["Everest Base Camp", "Himalayan Treks", "Sherpa Culture", "Mountain Flights"],
  keywords: ["everest", "nepal", "himalayas", "trekking", "base camp", "mountain", "asia", "adventure"]
},
{
  id: 107,
  name: "Great Wall of China",
  country: "China",
  continent: "Asia",
  image: "/images/destinations/asia/great-wall-china.jpg",
  rating: 4.8,
  price: 75999,
  description: "Historic architectural marvel stretching across China's northern landscape.",
  budget: "mid-range",
  experiences: ["Wall Hiking", "Historical Tours", "Photography", "Cultural Landmarks"],
  keywords: ["great wall", "china", "history", "architecture", "wall hiking", "culture", "asia"]
},
{
  id: 108,
  name: "Kuala Lumpur, Malaysia",
  country: "Malaysia",
  continent: "Asia",
  image: "/images/destinations/asia/kuala-lumpur-malaysia.jpg",
  rating: 4.6,
  price: 39999,
  description: "Cosmopolitan capital with iconic skyscrapers, street markets, and diverse culture.",
  budget: "mid-range",
  experiences: ["Petronas Towers", "Street Food", "Batu Caves", "Shopping"],
  keywords: ["kuala lumpur", "malaysia", "petronas", "batu caves", "city", "markets", "asia"]
},
{
  id: 109,
  name: "Seoul, South Korea",
  country: "South Korea",
  continent: "Asia",
  image: "/images/destinations/asia/seoul-korea.jpg",
  rating: 4.7,
  price: 68999,
  description: "Dynamic mix of futuristic cityscapes and traditional palaces.",
  budget: "mid-range",
  experiences: ["Palace Tours", "K-Pop Culture", "Street Markets", "Han River"],
  keywords: ["seoul", "korea", "palaces", "technology", "k-pop", "city", "markets", "asia"]
},
{
  id: 110,
  name: "Sigiriya, Sri Lanka",
  country: "Sri Lanka",
  continent: "Asia",
  image: "/images/destinations/asia/sigiriya-sri-lanka.jpg",
  rating: 4.7,
  price: 47999,
  description: "Ancient rock fortress surrounded by lush forests and gardens.",
  budget: "mid-range",
  experiences: ["Rock Climbing", "Ancient Ruins", "Panoramic Views", "Frescoes"],
  keywords: ["sigiriya", "sri lanka", "fortress", "rock", "history", "climbing", "asia", "heritage"]
},
{
  id: 111,
  name: "Taj Mahal, India",
  country: "India",
  continent: "Asia",
  image: "/images/destinations/asia/taj-mahal.jpg",
  rating: 5.0,
  price: 49999,
  description: "World wonder of love and Mughal architecture in the heart of Agra.",
  budget: "mid-range",
  experiences: ["Historical Tour", "Photography", "Architecture", "Cultural Experience"],
  keywords: ["taj mahal", "india", "agra", "mughal", "architecture", "wonder", "asia", "heritage"]
},
{
  id: 112,
  name: "Petra, Jordan",
  country: "Jordan",
  continent: "Asia",
  image: "/images/destinations/asia/petra-jordan.jpg",
  rating: 4.9,
  price: 63999,
  description: "Ancient city carved into rose-red rock, one of the New Seven Wonders of the World.",
  budget: "mid-range",
  experiences: ["Treasury Walk", "Desert Trek", "Rock-Cut Architecture", "Cultural Exploration"],
  keywords: ["petra", "jordan", "ancient", "treasury", "desert", "rock city", "wonder", "asia", "archaeology"]
},
{
  id: 113,
  name: "Dubai, UAE",
  country: "United Arab Emirates",
  continent: "Asia",
  image: "/images/destinations/asia/dubai-uae.jpg",
  rating: 4.8,
  price: 109999,
  description: "Luxury desert city known for skyscrapers, shopping, and futuristic innovation.",
  budget: "luxury",
  experiences: ["Burj Khalifa", "Desert Safari", "Malls", "Skyline Views"],
  keywords: ["dubai", "uae", "burj khalifa", "desert", "skyline", "luxury", "middle east", "asia"]
},
{
  id: 114,
  name: "Phuket, Thailand",
  country: "Thailand",
  continent: "Asia",
  image: "/images/destinations/asia/phuket-thailand.jpg",
  rating: 4.7,
  price: 44999,
  description: "Tropical island with vibrant nightlife, beaches, and island-hopping adventures.",
  budget: "mid-range",
  experiences: ["Beaches", "Nightlife", "Island Tours", "Snorkeling"],
  keywords: ["phuket", "thailand", "beaches", "island", "snorkeling", "nightlife", "asia"]
},
{
  id: 115,
  name: "Luang Prabang, Laos",
  country: "Laos",
  continent: "Asia",
  image: "/images/destinations/asia/luang-prabang-laos.jpg",
  rating: 4.6,
  price: 39999,
  description: "UNESCO city with golden temples, French colonial charm, and waterfalls.",
  budget: "budget",
  experiences: ["Temple Visits", "Waterfalls", "Night Markets", "Cultural Tours"],
  keywords: ["luang prabang", "laos", "temples", "culture", "colonial", "waterfalls", "asia"]
},
{
  id: 116,
  name: "Ninh Bình, Vietnam",
  country: "Vietnam",
  continent: "Asia",
  image: "/images/destinations/asia/ninh-binh-vietnam.jpg",
  rating: 4.7,
  price: 40999,
  description: "A hidden gem of Vietnam with limestone karsts, river caves, and rural charm.",
  budget: "mid-range",
  experiences: ["Boat Rides", "Trang An Caves", "Tam Coc Rice Fields", "Ancient Temples"],
  keywords: ["ninh binh", "vietnam", "boat ride", "caves", "limestone", "rice fields", "temple", "asia"]
},
{
  id: 117,
  name: "Jeju Island, South Korea",
  country: "South Korea",
  continent: "Asia",
  image: "/images/destinations/asia/jeju-island-korea.jpg",
  rating: 4.8,
  price: 58999,
  description: "Volcanic island offering waterfalls, lava tubes, and stunning coastal views.",
  budget: "mid-range",
  experiences: ["Volcano Hikes", "Beaches", "Caves", "Nature Walks"],
  keywords: ["jeju", "island", "korea", "volcano", "beaches", "lava", "nature", "asia"]
},
{
  id: 118,
  name: "Siem Reap, Cambodia",
  country: "Cambodia",
  continent: "Asia",
  image: "/images/destinations/asia/siem-reap-cambodia.jpg",
  rating: 4.7,
  price: 41999,
  description: "Gateway to the magnificent Angkor Wat and Khmer heritage.",
  budget: "budget",
  experiences: ["Angkor Wat", "Temple Tours", "Cultural Dances", "Markets"],
  keywords: ["siem reap", "cambodia", "angkor", "temples", "khmer", "heritage", "asia"]
},
{
  id: 119,
  name: "Tbilisi, Georgia",
  country: "Georgia",
  continent: "Asia",
  image: "/images/destinations/asia/tbilisi-georgia.jpg",
  rating: 4.6,
  price: 38999,
  description: "Charming capital with old-world architecture, sulfur baths, and mountains.",
  budget: "budget",
  experiences: ["Old Town", "Cable Cars", "Sulfur Baths", "Mountain Views"],
  keywords: ["tbilisi", "georgia", "architecture", "baths", "caucasus", "old town", "asia"]
},
{
  id: 120,
  name: "Istanbul, Turkey",
  country: "Turkey",
  continent: "Asia",
  image: "/images/destinations/asia/istanbul-turkey.jpg",
  rating: 4.9,
  price: 67999,
  description: "City where East meets West, filled with mosques, bazaars, and Bosphorus views.",
  budget: "mid-range",
  experiences: ["Blue Mosque", "Grand Bazaar", "Boat Cruises", "Palace Visits"],
  keywords: ["istanbul", "turkey", "bosphorus", "mosque", "bazaar", "turkish", "history", "asia"]
},
],

  // European Destinations
  europe: [
    {
      id: 201,
      name: "Paris, France",
      country: "France",
      continent: "Europe",
      image: "/images/destinations/europe/eiffel-tower-paris.jpg",
      rating: 4.8,
      price: 89999,
      description: "City of Light with iconic landmarks, art, and romantic atmosphere.",
      budget: "luxury",
      experiences: ["Eiffel Tower", "Louvre Museum", "Seine Cruises", "Café Culture"],
      keywords: ["paris", "france", "eiffel tower", "louvre", "seine", "cafe", "romantic", "art", "city of light"],
    },
    {
      id: 202,
      name: "Rome, Italy",
      country: "Italy",
      continent: "Europe",
      image: "/images/destinations/europe/rome-italy.jpg",
      rating: 4.9,
      price: 79999,
      description: "Eternal City with ancient ruins, Vatican treasures, and incredible cuisine.",
      budget: "luxury",
      experiences: ["Colosseum", "Vatican City", "Roman Forum", "Italian Cuisine"],
      keywords: ["rome", "italy", "colosseum", "vatican", "roman forum", "cuisine", "eternal city", "ancient", "ruins"],
    },
    {
      id: 203,
      name: "Barcelona, Spain",
      country: "Spain",
      continent: "Europe",
      image: "/images/destinations/europe/barcelona-spain.jpg",
      rating: 4.8,
      price: 69999,
      description: "Gaudí's architectural masterpieces, beaches, and vibrant nightlife.",
      budget: "mid-range",
      experiences: ["Sagrada Familia", "Park Güell", "Gothic Quarter", "Beach Life"],
      keywords: ["barcelona","spain","gaudi","sagrada familia","park guell","gothic","beach","nightlife","architecture"],
    },
    {
  id: 204,
  name: "Amsterdam, Netherlands",
  country: "Netherlands",
  continent: "Europe",
  image: "/images/destinations/europe/amsterdam-netherlands.jpg",
  rating: 4.7,
  price: 72999,
  description: "Charming canals, historic houses, and world-famous museums.",
  budget: "mid-range",
  experiences: ["Canal Cruises", "Van Gogh Museum", "Biking Tours", "Anne Frank House"],
  keywords: ["amsterdam", "netherlands", "canals", "museums", "bikes", "anne frank", "europe", "historic"]
},
{
  id: 205,
  name: "Athens, Greece",
  country: "Greece",
  continent: "Europe",
  image: "/images/destinations/europe/athens-greece.jpg",
  rating: 4.6,
  price: 63999,
  description: "Ancient capital known for Acropolis, mythology, and Mediterranean culture.",
  budget: "mid-range",
  experiences: ["Acropolis", "Temple of Zeus", "Plaka District", "Greek Cuisine"],
  keywords: ["athens", "greece", "acropolis", "temple", "mythology", "mediterranean", "historic", "europe"]
},
{
  id: 206,
  name: "Dubrovnik, Croatia",
  country: "Croatia",
  continent: "Europe",
  image: "/images/destinations/europe/dubrovnik-croatia.jpg",
  rating: 4.7,
  price: 66999,
  description: "Walled city on the Adriatic coast, famed for Game of Thrones and old-town charm.",
  budget: "mid-range",
  experiences: ["City Walls", "Old Town", "Island Hopping", "Sea Kayaking"],
  keywords: ["dubrovnik", "croatia", "adriatic", "old town", "city walls", "islands", "europe", "game of thrones"]
},
{
  id: 207,
  name: "Iceland - Northern Lights",
  country: "Iceland",
  continent: "Europe",
  image: "/images/destinations/europe/iceland-northern-lights.jpg",
  rating: 4.9,
  price: 109999,
  description: "Experience surreal auroras, volcanoes, and icy landscapes in the land of fire and ice.",
  budget: "luxury",
  experiences: ["Northern Lights", "Blue Lagoon", "Glacier Hikes", "Volcano Tours"],
  keywords: ["iceland", "aurora", "northern lights", "glacier", "volcano", "blue lagoon", "europe", "nature"]
},
{
  id: 208,
  name: "Lisbon, Portugal",
  country: "Portugal",
  continent: "Europe",
  image: "/images/destinations/europe/lisbon-portugal.jpg",
  rating: 4.6,
  price: 58999,
  description: "Seaside capital with pastel buildings, historic trams, and vibrant neighborhoods.",
  budget: "mid-range",
  experiences: ["Tram 28 Ride", "Alfama District", "Belem Tower", "Fado Music"],
  keywords: ["lisbon", "portugal", "trams", "alfama", "belem", "fado", "europe", "coastal"]
},
{
  id: 209,
  name: "Swiss Alps, Switzerland",
  country: "Switzerland",
  continent: "Europe",
  image: "/images/destinations/europe/swiss-alps.jpg",
  rating: 4.9,
  price: 129999,
  description: "Snow-capped peaks, scenic trains, and luxury ski resorts in alpine paradise.",
  budget: "luxury",
  experiences: ["Mountain Railways", "Skiing", "Hiking", "Lakeside Views"],
  keywords: ["swiss alps", "switzerland", "alps", "mountains", "ski", "train", "europe", "luxury"]
},
{
  id: 210,
  name: "Vienna, Austria",
  country: "Austria",
  continent: "Europe",
  image: "/images/destinations/europe/vienna-austria.jpg",
  rating: 4.8,
  price: 67999,
  description: "Imperial architecture, classical music, and rich coffeehouse traditions.",
  budget: "mid-range",
  experiences: ["Palace Tours", "Opera House", "Coffeehouses", "Museums"],
  keywords: ["vienna", "austria", "palaces", "opera", "music", "coffee", "imperial", "europe"]
},
{
  id: 211,
  name: "Prague, Czech Republic",
  country: "Czech Republic",
  continent: "Europe",
  image: "/images/destinations/europe/prague-czech-republic.jpg",
  rating: 4.7,
  price: 59999,
  description: "A fairytale city of Gothic architecture, castles, and charming old streets.",
  budget: "mid-range",
  experiences: ["Charles Bridge", "Prague Castle", "Old Town Square", "Astronomical Clock"],
  keywords: ["prague", "czech republic", "castle", "gothic", "charles bridge", "astronomical clock", "europe"]
},
{
  id: 212,
  name: "Santorini, Greece",
  country: "Greece",
  continent: "Europe",
  image: "/images/destinations/europe/santorini-greece.jpg",
  rating: 4.9,
  price: 85999,
  description: "Famous for its white-washed houses, sunsets, and cliffside villages.",
  budget: "luxury",
  experiences: ["Sunset Views", "Caldera Cruises", "Beachside Dining", "Volcanic Islands"],
  keywords: ["santorini", "greece", "white houses", "sunset", "volcano", "caldera", "europe", "luxury"]
},
],

  // North American Destinations
northAmerica: [
  {
    id: 301,
    name: "New York City, USA",
    country: "USA",
    continent: "North America",
    image: "/images/destinations/north-america/new-york-usa.jpg",
    rating: 4.8,
    price: 95999,
    description: "The city that never sleeps with iconic skyline and cultural diversity.",
    budget: "luxury",
    experiences: ["Times Square", "Central Park", "Broadway Shows", "Museums"],
    keywords: ["new york", "nyc", "times square", "central park", "broadway", "museums", "skyline", "never sleeps"]
  },
  {
    id: 302,
    name: "Banff, Canada",
    country: "Canada",
    continent: "North America",
    image: "/images/destinations/north-america/banff-canada.jpg",
    rating: 4.9,
    price: 85999,
    description: "Canadian Rockies with pristine lakes, mountains, and wildlife.",
    budget: "luxury",
    experiences: ["Lake Louise", "Mountain Hiking", "Wildlife Viewing", "Hot Springs"],
    keywords: ["banff", "canada", "rockies", "lake louise", "mountains", "wildlife", "hiking", "hot springs"]
  },
  {
    id: 303,
    name: "Cancún, Mexico",
    country: "Mexico",
    continent: "North America",
    image: "/images/destinations/north-america/cancun-mexico.jpg",
    rating: 4.7,
    price: 63999,
    description: "Beachside paradise with turquoise waters, nightlife, and ancient ruins.",
    budget: "mid-range",
    experiences: ["Beaches", "Mayan Ruins", "Snorkeling", "Nightclubs"],
    keywords: ["cancun", "mexico", "beaches", "ruins", "snorkeling", "nightlife", "caribbean"]
  },
  {
    id: 304,
    name: "Arenal Volcano, Costa Rica",
    country: "Costa Rica",
    continent: "North America",
    image: "/images/destinations/north-america/costa-rica-volcano.jpg",
    rating: 4.8,
    price: 70999,
    description: "Adventure destination with volcanoes, rainforests, and thermal hot springs.",
    budget: "mid-range",
    experiences: ["Volcano Tours", "Rainforest Hikes", "Ziplining", "Hot Springs"],
    keywords: ["arenal", "costa rica", "volcano", "rainforest", "zipline", "adventure", "north america"]
  },
  {
    id: 305,
    name: "Havana, Cuba",
    country: "Cuba",
    continent: "North America",
    image: "/images/destinations/north-america/havana-cuba.jpg",
    rating: 4.6,
    price: 49999,
    description: "Colorful streets, vintage cars, and vibrant Cuban music culture.",
    budget: "budget",
    experiences: ["Old Havana", "Classic Cars", "Cuban Music", "Cigar Tours"],
    keywords: ["havana", "cuba", "vintage", "cars", "cuban music", "cigars", "old city"]
  },
  {
    id: 306,
    name: "Montego Bay, Jamaica",
    country: "Jamaica",
    continent: "North America",
    image: "/images/destinations/north-america/jamaica-beach.jpg",
    rating: 4.7,
    price: 56999,
    description: "Laid-back island with reggae vibes, tropical beaches, and waterfalls.",
    budget: "mid-range",
    experiences: ["Beach Resorts", "Reggae Music", "Dunn’s River Falls", "Snorkeling"],
    keywords: ["jamaica", "montego bay", "beach", "reggae", "falls", "island", "caribbean"]
  },
  {
    id: 307,
    name: "Niagara Falls, Canada/USA",
    country: "Canada/USA",
    continent: "North America",
    image: "/images/destinations/north-america/niagara-falls.jpg",
    rating: 4.8,
    price: 54999,
    description: "Iconic waterfalls straddling two nations — a breathtaking natural wonder.",
    budget: "mid-range",
    experiences: ["Boat Tours", "Observation Decks", "Light Shows", "Photography"],
    keywords: ["niagara", "falls", "canada", "usa", "waterfalls", "boat tour", "natural wonder"]
  },
  {
    id: 308,
    name: "San Francisco, USA",
    country: "USA",
    continent: "North America",
    image: "/images/destinations/north-america/san-francisco-usa.jpg",
    rating: 4.7,
    price: 78999,
    description: "Golden Gate Bridge, cable cars, and scenic coastal neighborhoods.",
    budget: "mid-range",
    experiences: ["Golden Gate Bridge", "Alcatraz", "Cable Cars", "Fisherman's Wharf"],
    keywords: ["san francisco", "golden gate", "california", "alcatraz", "cable cars", "usa"]
  },
  {
    id: 309,
    name: "Tulum, Mexico",
    country: "Mexico",
    continent: "North America",
    image: "/images/destinations/north-america/tulum-mexico.jpg",
    rating: 4.7,
    price: 59999,
    description: "Bohemian beach town known for eco-resorts and clifftop Mayan ruins.",
    budget: "mid-range",
    experiences: ["Beachfront Ruins", "Yoga Retreats", "Cenote Swimming", "Eco Hotels"],
    keywords: ["tulum", "mexico", "cenotes", "mayan ruins", "eco", "boho", "beach"]
  },
  {
    id: 310,
    name: "Panama City, Panama",
    country: "Panama",
    continent: "North America",
    image: "/images/destinations/north-america/panama-city.jpg",
    rating: 4.5,
    price: 52999,
    description: "Skyscrapers meet colonial charm near the world-famous Panama Canal.",
    budget: "budget",
    experiences: ["Panama Canal", "Casco Viejo", "Skyline Views", "Cultural Tours"],
    keywords: ["panama", "canal", "casco viejo", "skyline", "central america", "colonial"]
  },
  {
    id: 311,
    name: "Savannah, Georgia, USA",
    country: "USA",
    continent: "North America",
    image: "/images/destinations/north-america/savannah-usa.jpg",
    rating: 4.6,
    price: 46999,
    description: "Historic southern city with moss-draped oaks, cobblestone streets, and charm.",
    budget: "budget",
    experiences: ["Historic District", "Ghost Tours", "Plantations", "River Walk"],
    keywords: ["savannah", "georgia", "historic", "south", "riverwalk", "ghost tour", "usa"]
  },
  {
    id: 312,
    name: "Belize Barrier Reef, Belize",
    country: "Belize",
    continent: "North America",
    image: "/images/destinations/north-america/belize-reef.jpg",
    rating: 4.9,
    price: 69999,
    description: "Diver’s paradise with vibrant coral reefs, turquoise waters, and marine life.",
    budget: "mid-range",
    experiences: ["Scuba Diving", "Snorkeling", "Sailing", "Blue Hole Tours"],
    keywords: ["belize", "reef", "coral", "snorkeling", "blue hole", "marine", "diving"]
  },
],

  // South American Destinations
  southAmerica: [
  {
    id: 401,
    name: "Rio de Janeiro, Brazil",
    country: "Brazil",
    continent: "South America",
    image: "/images/destinations/south-america/rio-brazil.jpg",
    rating: 4.8,
    price: 72999,
    description: "Marvelous city with Christ the Redeemer, beaches, and carnival spirit.",
    budget: "mid-range",
    experiences: ["Christ the Redeemer", "Copacabana Beach", "Carnival", "Sugarloaf Mountain"],
    keywords: ["rio", "brazil", "christ redeemer", "copacabana", "carnival", "sugarloaf", "marvelous", "beaches"]
  },
  {
    id: 402,
    name: "Machu Picchu, Peru",
    country: "Peru",
    continent: "South America",
    image: "/images/destinations/south-america/machu-picchu-peru.jpg",
    rating: 4.9,
    price: 68999,
    description: "Lost city of the Incas perched high in the Andes mountains.",
    budget: "mid-range",
    experiences: ["Inca Trail", "Sacred Valley", "Cusco", "Andean Culture"],
    keywords: ["machu picchu", "peru", "inca", "andes", "cusco", "sacred valley", "lost city", "mountains"]
  },
  {
    id: 403,
    name: "Atacama Desert, Chile",
    country: "Chile",
    continent: "South America",
    image: "/images/destinations/south-america/atacama-chile.jpg",
    rating: 4.7,
    price: 62999,
    description: "World’s driest desert with surreal landscapes, geysers, and stargazing.",
    budget: "mid-range",
    experiences: ["Moon Valley", "Stargazing", "Salt Flats", "Hot Springs"],
    keywords: ["atacama", "chile", "desert", "geyser", "stars", "salt flats", "landscape"]
  },
  {
    id: 404,
    name: "Buenos Aires, Argentina",
    country: "Argentina",
    continent: "South America",
    image: "/images/destinations/south-america/buenos-aires-argentina.jpg",
    rating: 4.6,
    price: 57999,
    description: "Passionate capital of tango, steak, colorful neighborhoods, and nightlife.",
    budget: "mid-range",
    experiences: ["Tango Shows", "La Boca", "Plaza de Mayo", "Steakhouses"],
    keywords: ["buenos aires", "argentina", "tango", "la boca", "steak", "culture", "nightlife"]
  },
  {
    id: 405,
    name: "Cartagena, Colombia",
    country: "Colombia",
    continent: "South America",
    image: "/images/destinations/south-america/cartagena-colombia.jpg",
    rating: 4.7,
    price: 49999,
    description: "Caribbean coastal city with colonial charm, beaches, and street art.",
    budget: "budget",
    experiences: ["Walled City", "Beach Time", "Historic Forts", "Street Art"],
    keywords: ["cartagena", "colombia", "caribbean", "colonial", "beach", "historic", "fort"]
  },
  {
    id: 406,
    name: "Galápagos Islands, Ecuador",
    country: "Ecuador",
    continent: "South America",
    image: "/images/destinations/south-america/galapagos-ecuador.jpg",
    rating: 4.9,
    price: 139999,
    description: "Wildlife haven with unique species, volcanoes, and crystal-clear waters.",
    budget: "luxury",
    experiences: ["Snorkeling", "Tortoise Tours", "Island Cruises", "Nature Exploration"],
    keywords: ["galapagos", "ecuador", "wildlife", "islands", "snorkeling", "volcano", "tortoise"]
  },
  {
    id: 407,
    name: "Patagonia, Argentina & Chile",
    country: "Argentina/Chile",
    continent: "South America",
    image: "/images/destinations/south-america/patagonia.jpg",
    rating: 4.9,
    price: 94999,
    description: "Jaw-dropping glaciers, mountains, and untouched natural beauty.",
    budget: "luxury",
    experiences: ["Hiking", "Glacier Tours", "Wildlife Watching", "Mountain Treks"],
    keywords: ["patagonia", "argentina", "chile", "glaciers", "trekking", "nature", "mountains"]
  },
  {
    id: 408,
    name: "Salar de Uyuni, Bolivia",
    country: "Bolivia",
    continent: "South America",
    image: "/images/destinations/south-america/salar-de-uyuni.jpg",
    rating: 4.8,
    price: 64999,
    description: "World’s largest salt flat creating surreal mirror-like landscapes.",
    budget: "mid-range",
    experiences: ["Salt Flats", "Photography", "4x4 Tours", "Lagoon Views"],
    keywords: ["uyuni", "bolivia", "salt flat", "mirror", "photography", "surreal"]
  },
  {
    id: 409,
    name: "Quito, Ecuador",
    country: "Ecuador",
    continent: "South America",
    image: "/images/destinations/south-america/quito-ecuador.jpg",
    rating: 4.6,
    price: 52999,
    description: "Historic city near the equator with colonial architecture and Andes backdrop.",
    budget: "budget",
    experiences: ["Equator Line", "Old Town", "Cable Car", "Mountain Views"],
    keywords: ["quito", "ecuador", "equator", "colonial", "andes", "historic", "old town"]
  },
  {
    id: 410,
    name: "Amazon Rainforest, Brazil",
    country: "Brazil",
    continent: "South America",
    image: "/images/destinations/south-america/amazon-brazil.jpg",
    rating: 4.9,
    price: 87999,
    description: "Explore the lungs of the Earth via jungle lodges and river cruises.",
    budget: "mid-range",
    experiences: ["Jungle Hikes", "River Tours", "Wildlife Encounters", "Eco-Lodges"],
    keywords: ["amazon", "brazil", "rainforest", "river", "jungle", "wildlife", "eco"]
  },
  {
    id: 411,
    name: "Lima, Peru",
    country: "Peru",
    continent: "South America",
    image: "/images/destinations/south-america/lima-peru.jpg",
    rating: 4.5,
    price: 47999,
    description: "Coastal capital known for its food scene, colonial buildings, and ocean views.",
    budget: "budget",
    experiences: ["Food Tours", "Historic Center", "Oceanfront Walks", "Museums"],
    keywords: ["lima", "peru", "food", "ocean", "colonial", "museums", "capital"]
  },
  {
    id: 412,
    name: "Bariloche, Argentina",
    country: "Argentina",
    continent: "South America",
    image: "/images/destinations/south-america/bariloche-argentina.jpg",
    rating: 4.7,
    price: 61999,
    description: "Lakeside town with Swiss-like charm, chocolate shops, and mountain vistas.",
    budget: "mid-range",
    experiences: ["Lake Tours", "Chocolate Tasting", "Skiing", "Mountain Views"],
    keywords: ["bariloche", "argentina", "lakes", "chocolate", "skiing", "swiss", "mountains"]
  },
],
  // African Destinations
  africa: [
    {
      id: 501,
      name: "Cape Town, South Africa",
      country: "South Africa",
      continent: "Africa",
      image: "/images/destinations/africa/cape-town-south-africa.jpg",
      rating: 4.8,
      price: 65999,
      description: "Mother City with Table Mountain, wine lands, and diverse culture.",
      budget: "mid-range",
      experiences: ["Table Mountain", "Wine Tours", "Penguin Colonies", "Cultural Townships"],
      keywords: ["cape town", "south africa", "table mountain", "wine", "penguins", "townships", "mother city"],
    },
    {
      id: 502,
      name: "Marrakech, Morocco",
      country: "Morocco",
      continent: "Africa",
      image: "/images/destinations/africa/marrakech-morocco.jpg",
      rating: 4.7,
      price: 48999,
      description: "Imperial city with souks, palaces, and gateway to the Sahara.",
      budget: "mid-range",
      experiences: ["Medina Souks", "Sahara Desert", "Palaces", "Moroccan Cuisine"],
      keywords: ["marrakech", "morocco", "souks", "sahara", "desert", "palaces", "imperial", "medina"],
    },
    {
      id: 503,
      name: "Masai Mara, Kenya",
      country: "Kenya",
      continent: "Africa",
      image: "/images/destinations/africa/masai-mara-kenya.jpg",
      rating: 4.9,
      price: 52999,
      description: "Famous for the Great Migration and incredible African wildlife safaris.",
      budget: "luxury",
      experiences: ["Safari", "Great Migration", "Big Five", "Maasai Culture"],
      keywords: ["masai mara", "kenya", "safari", "wildlife", "great migration", "africa", "maasai"]
   },
   {
  id: 504,
  name: "Lalibela, Ethiopia",
  country: "Ethiopia",
  continent: "Africa",
  image: "/images/destinations/africa/lalibela-ethiopia.jpg",
  rating: 4.6,
  price: 44999,
  description: "Home to rock-hewn churches and a center of Ethiopian Christian pilgrimage.",
  budget: "mid-range",
  experiences: ["Rock-Hewn Churches", "Cultural Heritage", "Pilgrimage Site", "Mountain Views"],
  keywords: ["lalibela", "ethiopia", "churches", "rock-hewn", "pilgrimage", "africa", "heritage"]
},
{
  id: 505,
  name: "Serengeti, Tanzania",
  country: "Tanzania",
  continent: "Africa",
  image: "/images/destinations/africa/serengeti-tanzania.jpg",
  rating: 4.8,
  price: 55999,
  description: "Vast savannah teeming with wildlife, known for the Great Migration.",
  budget: "luxury",
  experiences: ["Safari", "Great Migration", "Big Five", "Scenic Plains"],
  keywords: ["serengeti", "tanzania", "safari", "migration", "wildlife", "plains", "africa"]
},
{
  id: 506,
  name: "Sossusvlei, Namibia",
  country: "Namibia",
  continent: "Africa",
  image: "/images/destinations/africa/sossusvlei-namibia.jpg",
  rating: 4.7,
  price: 49999,
  description: "Iconic red sand dunes and surreal desert landscapes in the Namib Desert.",
  budget: "mid-range",
  experiences: ["Dune Climbing", "Desert Landscapes", "Deadvlei", "Photography"],
  keywords: ["sossusvlei", "namibia", "desert", "dunes", "landscape", "africa", "photography"]
},
{
  id: 507,
  name: "Victoria Falls, Zambia/Zimbabwe",
  country: "Zambia/Zimbabwe",
  continent: "Africa",
  image: "/images/destinations/africa/victoria-falls.jpg",
  rating: 4.9,
  price: 52999,
  description: "One of the world's largest and most spectacular waterfalls on the Zambezi River.",
  budget: "mid-range",
  experiences: ["Waterfalls", "Helicopter Rides", "White-water Rafting", "Nature Walks"],
  keywords: ["victoria falls", "zambia", "zimbabwe", "waterfall", "zambezi", "africa", "adventure"]
},
{
  id: 508,
  name: "Bwindi Impenetrable Forest, Uganda",
  country: "Uganda",
  continent: "Africa",
  image: "/images/destinations/africa/bwindi-impenetrable-forest.jpg",
  rating: 4.8,
  price: 57999,
  description: "Home to endangered mountain gorillas, offering once-in-a-lifetime trekking experiences.",
  budget: "luxury",
  experiences: ["Gorilla Trekking", "Rainforest Exploration", "Bird Watching", "Wildlife Encounters"],
  keywords: ["bwindi", "uganda", "gorilla trekking", "rainforest", "jungle", "wildlife", "africa"]
},
{
  id: 509,
  name: "Mount Kilimanjaro, Tanzania",
  country: "Tanzania",
  continent: "Africa",
  image: "/images/destinations/africa/mount-kilimanjaro.jpg",
  rating: 4.9,
  price: 59999,
  description: "Africa’s highest peak and a bucket-list trekking destination.",
  budget: "luxury",
  experiences: ["Trekking", "Mountain Climbing", "Glaciers", "Adventure Travel"],
  keywords: ["kilimanjaro", "mountain", "tanzania", "trekking", "hiking", "africa", "climb"]
},
{
  id: 510,
  name: "Zanzibar, Tanzania",
  country: "Tanzania",
  continent: "Africa",
  image: "/images/destinations/africa/zanzibar.jpg",
  rating: 4.7,
  price: 44999,
  description: "Tropical island paradise with white-sand beaches and spice farms.",
  budget: "mid-range",
  experiences: ["Beaches", "Snorkeling", "Stone Town", "Spice Tours"],
  keywords: ["zanzibar", "tanzania", "island", "beaches", "snorkeling", "spices", "africa"]
},
{
  id: 511,
  name: "Okavango Delta, Botswana",
  country: "Botswana",
  continent: "Africa",
  image: "/images/destinations/africa/okavango-delta-botswana.jpg",
  rating: 4.8,
  price: 54999,
  description: "UNESCO-listed inland delta famous for unique wildlife and mokoro safaris.",
  budget: "luxury",
  experiences: ["Delta Safari", "Wildlife Watching", "Mokoro Rides", "Wetland Exploration"],
  keywords: ["okavango delta", "botswana", "safari", "delta", "wetlands", "mokoro", "africa"]
},
{
  id: 512,
  name: "Blyde River Canyon, South Africa",
  country: "South Africa",
  continent: "Africa",
  image: "/images/destinations/africa/blyde-river-canyon.jpg",
  rating: 4.6,
  price: 45999,
  description: "One of the largest green canyons in the world, offering breathtaking views and hiking trails.",
  budget: "mid-range",
  experiences: ["Canyon Views", "Hiking", "Panorama Route", "Nature Trails"],
  keywords: ["blyde river", "canyon", "south africa", "panorama route", "hiking", "nature", "africa"]
},
],

  // Oceania Destinations
oceania: [
  {
    id: 601,
    name: "Sydney, Australia",
    country: "Australia",
    continent: "Oceania",
    image: "/images/destinations/oceania/sydney-australia.jpg",
    rating: 4.8,
    price: 105999,
    description: "Harbor city with iconic Opera House, beaches, and laid-back culture.",
    budget: "luxury",
    experiences: ["Opera House", "Harbor Bridge", "Bondi Beach", "Great Barrier Reef"],
    keywords: ["sydney", "australia", "opera house", "harbor bridge", "bondi", "barrier reef", "beaches"],
  },
  {
    id: 602,
    name: "Queenstown, New Zealand",
    country: "New Zealand",
    continent: "Oceania",
    image: "/images/destinations/oceania/queenstown-new-zealand.jpg",
    rating: 4.9,
    price: 98999,
    description: "Adventure capital of New Zealand surrounded by mountains and lakes.",
    budget: "mid-range",
    experiences: ["Bungee Jumping", "Lake Wakatipu", "Skiing", "Hiking"],
    keywords: ["queenstown", "new zealand", "adventure", "ski", "lake wakatipu", "bungee", "oceania"],
  },
  {
    id: 603,
    name: "Bora Bora, French Polynesia",
    country: "French Polynesia",
    continent: "Oceania",
    image: "/images/destinations/oceania/bora-bora.jpg",
    rating: 4.9,
    price: 149999,
    description: "Luxury island paradise known for turquoise lagoons and overwater bungalows.",
    budget: "luxury",
    experiences: ["Overwater Bungalows", "Snorkeling", "Lagoon Tours", "Relaxation"],
    keywords: ["bora bora", "french polynesia", "luxury", "bungalow", "snorkeling", "island", "oceania"],
  },
  {
    id: 604,
    name: "Auckland, New Zealand",
    country: "New Zealand",
    continent: "Oceania",
    image: "/images/destinations/oceania/auckland-new-zealand.jpg",
    rating: 4.6,
    price: 92999,
    description: "Vibrant city of sails with volcanic hills, harbors, and cultural landmarks.",
    budget: "mid-range",
    experiences: ["Sky Tower", "Waiheke Island", "Harbor Cruises", "Volcano Hikes"],
    keywords: ["auckland", "new zealand", "sky tower", "waiheke", "harbor", "city", "oceania"],
  },
  {
    id: 605,
    name: "Fiji Islands",
    country: "Fiji",
    continent: "Oceania",
    image: "/images/destinations/oceania/fiji-islands.jpg",
    rating: 4.8,
    price: 99999,
    description: "Tropical paradise of islands known for coral reefs, clear waters, and friendly locals.",
    budget: "mid-range",
    experiences: ["Island Hopping", "Snorkeling", "Local Villages", "Beach Resorts"],
    keywords: ["fiji", "islands", "coral", "resort", "snorkeling", "oceania", "beach"],
  },
  {
    id: 606,
    name: "Great Barrier Reef, Australia",
    country: "Australia",
    continent: "Oceania",
    image: "/images/destinations/oceania/great-barrier-reef.jpg",
    rating: 5.0,
    price: 115999,
    description: "World’s largest coral reef system offering diving, snorkeling, and marine life wonders.",
    budget: "luxury",
    experiences: ["Scuba Diving", "Snorkeling", "Reef Cruises", "Marine Life Tours"],
    keywords: ["great barrier reef", "australia", "reef", "snorkeling", "diving", "marine", "oceania"],
  },
     {
  id: 607,
  name: "Palau Islands",
  country: "Palau",
  continent: "Oceania",
  image: "/images/destinations/oceania/palau-islands.jpg",
  rating: 4.7,
  price: 109999,
  description: "A hidden gem of the Pacific known for world-class diving and pristine marine life.",
  budget: "luxury",
  experiences: ["Diving", "Jellyfish Lake", "Rock Islands", "Marine Sanctuaries"],
  keywords: ["palau", "islands", "diving", "jellyfish lake", "rock islands", "oceania", "marine"]
    },
],

  // Antarctica
  antarctica: [
    {
      id: 701,
      name: "Antarctica Expedition",
      country: "Antarctica",
      continent: "Antarctica",
      image: "/images/destinations/antarctica/penguin-colony.jpg",
      rating: 4.9,
      price: 285999,
      description: "Ultimate expedition to the frozen continent with penguins and icebergs.",
      budget: "luxury",
      experiences: ["Penguin Colonies", "Iceberg Photography", "Zodiac Cruises", "Research Stations"],
      keywords: ["antarctica", "penguins", "icebergs", "expedition", "frozen", "zodiac", "research", "polar"],
    },

  ],
}

const allDestinations = [
  ...destinations.india,
  ...destinations.asia,
  ...destinations.europe,
  ...destinations.northAmerica,
  ...destinations.southAmerica,
  ...destinations.africa,
  ...destinations.oceania,
  ...destinations.antarctica,
]

// Continent cards for better navigation

const continentCards = [
  {
    id: "india",
    name: "Incredible India",
    description: "Diverse landscapes, rich culture, and spiritual heritage",
    image: "/images/destinations/rajasthan.jpg",
    count: destinations.india.length,
    color: "vintage-orange",
  },
  {
    id: "asia",
    name: "Asia",
    description: "Ancient temples, diverse cuisines, and rich cultural heritage",
    image: "/images/destinations/asia/tokyo-japan.jpg",
    count: destinations.asia.length,
    color: "vintage-teal",
  },
  {
    id: "europe",
    name: "Europe",
    description: "Historic cities, architectural masterpieces, and romance",
    image: "/images/destinations/europe/eiffel-tower-paris.jpg",
    count: destinations.europe.length,
    color: "vintage-red",
  },
  {
    id: "northAmerica",
    name: "North America",
    description: "Vibrant cities, national parks, and Caribbean beaches",
    image: "/images/destinations/north-america/new-york-usa.jpg",
    count: destinations.northAmerica.length,
    color: "vintage-orange",
  },
  {
    id: "southAmerica",
    name: "South America",
    description: "Ancient civilizations, Amazon rainforest, and Andes",
    image: "/images/destinations/south-america/machu-picchu-peru.jpg",
    count: destinations.southAmerica.length,
    color: "vintage-teal",
  },
  {
    id: "africa",
    name: "Africa",
    description: "Epic safaris, ancient civilizations, and diverse cultures",
    image: "/images/destinations/africa/cape-town-south-africa.jpg",
    count: destinations.africa.length,
    color: "vintage-red",
  },
  {
    id: "oceania",
    name: "Oceania & Antarctica",
    description: "Pristine islands, coral reefs, and polar expeditions",
    image: "/images/destinations/oceania/sydney-australia.jpg",
    count: destinations.oceania.length + destinations.antarctica.length,
    color: "vintage-orange",
  },
]

export default function DestinationsPage() {
  const [selectedContinent, setSelectedContinent] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedBudget, setSelectedBudget] = useState("all")
  const [sortBy, setSortBy] = useState("name")
  
  const budgets = ["all", "budget", "mid-range", "luxury"]

  const getDestinationsByContinent = (continentId: string) => {
    if (continentId === "all") return allDestinations
    if (continentId === "oceania") return [...destinations.oceania, ...destinations.antarctica]
    return destinations[continentId as keyof typeof destinations] || []
  }

  const filterDestinations = (destinationList: any[]) => {
    return destinationList
      .filter((dest) => {
        const searchLower = searchTerm.toLowerCase()
        return (
          dest.name.toLowerCase().includes(searchLower) ||
          dest.country.toLowerCase().includes(searchLower) ||
          dest.description.toLowerCase().includes(searchLower) ||
          dest.experiences.some((exp: string) => exp.toLowerCase().includes(searchLower)) ||
          dest.keywords.some((keyword: string) => keyword.toLowerCase().includes(searchLower))
        )
      })
      .filter((dest) => selectedBudget === "all" || dest.budget === selectedBudget)
      .sort((a, b) => {
        switch (sortBy) {
          case "price-low":
            return a.price - b.price
          case "price-high":
            return b.price - a.price
          case "rating":
            return b.rating - a.rating
          default:
            return a.name.localeCompare(b.name)
        }
      })
  }

  const renderDestinationGrid = (destinationList: any[]) => {
    const filteredDestinations = filterDestinations(destinationList)

    if (filteredDestinations.length === 0) {
      return (
        <div className="text-center py-20">
          <Globe className="h-16 w-16 text-vintage-orange mx-auto mb-4" />
          <h3 className="font-cinzel text-2xl font-bold text-vintage-orange mb-4">No destinations found</h3>
          <p className="font-garamond text-lg text-orange-800">Try adjusting your search criteria or filters</p>
        </div>
      )
    }


    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredDestinations.map((destination) => (
          <Card
            key={destination.id}
            className="retro-card border-vintage-orange hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <div className="relative h-48 overflow-hidden rounded-t-lg">
              <Image
                src={destination.image || "/placeholder.svg"}
                alt={destination.name}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 right-4 bg-vintage-orange text-white px-2 py-1 rounded-full font-cinzel font-bold text-sm">
                ₹{destination.price.toLocaleString()}
              </div>
            </div>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-cinzel text-lg font-bold text-vintage-orange">{destination.name}</h3>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="ml-1 font-garamond text-sm text-orange-800">{destination.rating}</span>
                </div>
              </div>

              <div className="flex items-center mb-3">
                <MapPin className="h-4 w-4 text-vintage-teal mr-1" />
                <span className="font-garamond text-sm text-orange-700">{destination.country}</span>
              </div>

              <p className="font-garamond text-orange-800 mb-4 text-sm">{destination.description}</p>

              {destination.experiences && (
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {destination.experiences.slice(0, 2).map((exp: string, index: number) => (
                      <span
                        key={index}
                        className="inline-block bg-vintage-beige text-orange-800 px-2 py-1 rounded-full text-xs font-garamond"
                      >
                        {exp}
                      </span>
                    ))}
                    {destination.experiences.length > 2 && (
                      <span className="inline-block bg-vintage-beige text-orange-800 px-2 py-1 rounded-full text-xs font-garamond">
                        +{destination.experiences.length - 2} more
                      </span>
                    )}
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between">
                <span className="inline-block bg-vintage-teal text-white px-2 py-1 rounded-full text-xs font-garamond">
                  {destination.budget}
                </span>
                <Link href={`/destinations/${destination.id}`}>
                  <Button className="retro-button text-sm px-4 py-2">Explore</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-vintage-pattern dark:bg-gray-900 dark:text-gray-100 transition-colors">
      <Navbar />

{/* Fullscreen Travel Video Hero  i.e Destination HERO's Section*/}
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
    <h1 className="text-5xl md:text-6xl font-cinzel font-bold text-vintage-orange drop-shadow-lg mb-6">
      HAMSAFAR Destinations
    </h1>
    <p className="text-lg md:text-xl font-garamond text-gray-100 max-w-2xl mb-8">
      Explore India's incredible diversity and handpicked destinations across all continents
      </p>
  </div>
</section>

      {/* Continent Selection Cards */}
      <section className="py-14 bg-vintage-beige dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-cinzel text-4xl font-bold text-vintage-orange mb-4" data-aos="fade-down">Choose Your Adventure</h2>
            <p className="font-garamond text-xl dark:text-gray-100" data-aos="fade-up">
             Our most prefered destinations, select a continent to explore destinations from around the world
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {continentCards.map((continent) => (
              <Card
                 key={continent.id}
                 className={`cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  selectedContinent === continent.id
                  ? `border-${continent.color} shadow-lg`
                   : "border-vintage-orange hover:border-vintage-teal"
                     } retro-card bg-white dark:bg-gray-800 text-orange-800 dark:text-gray-100`}
                 onClick={() =>
  setSelectedContinent((prev) => (prev === continent.id ? null : continent.id))
}

                 >

                <div className="relative h-32 overflow-hidden rounded-t-lg">
                  <Image
                    src={continent.image || "/placeholder.svg"}
                    alt={continent.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                  <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-2 py-1 rounded-full">
                    <span className="font-cinzel font-bold text-vintage-orange text-sm">
                      {continent.count} destinations
                    </span>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className={`font-cinzel text-lg font-bold text-${continent.color} dark:text-${continent.color} mb-2`}>{continent.name}</h3>
                  <p className="font-garamond text-orange-800 dark:text-vintage-orange text-sm">{continent.description}</p>

                </CardContent>
              </Card>
            ))}

            {/* All Destinations Card */}
             <Card
                 className={`cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  selectedContinent === "all"
                    ? "border-vintage-orange shadow-lg bg-vintage-orange bg-opacity-10 dark:bg-orange-950"
                    : "border-vintage-orange hover:border-vintage-teal"
                     } retro-card bg-white dark:bg-gray-800 text-orange-800 dark:text-gray-100`}
                     onClick={() =>
  setSelectedContinent((prev) => (prev === "all" ? null : "all"))
}
                     >
                      <div className="relative h-32 overflow-hidden rounded-t-lg bg-gradient-to-br from-vintage-orange to-vintage-red flex items-center justify-center dark:from-orange-800 dark:to-red-800">
                <Compass className="h-16 w-16 text-white animate-spin-slow" />
                </div>
            <CardContent className="p-4">
             <h3 className="font-cinzel text-lg font-bold text-vintage-orange dark:text-orange-300 mb-2">
               All Destinations
             </h3>
            <p className="font-garamond text-orange-800 dark:text-vintage-orange text-sm">
                Explore all {allDestinations.length} destinations worldwide
            </p>
              </CardContent>
</Card>
          </div>
</div>
          {/* Selected Continent Destinations */}
          <div className="space-y-8">
            {selectedContinent && (
   <div className="space-y-8 mt-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <div className="text-center">
      <h3 className="font-cinzel text-3xl font-bold text-vintage-orange mb-4">
        {selectedContinent === "all"
          ? "All Destinations"
          : `${continentCards.find((c) => c.id === selectedContinent)?.name} Destinations`}
      </h3>
      <p className="font-garamond text-lg text-orange-800 dark:text-vintage-orange">
        {selectedContinent === "all"
          ? `Explore all ${allDestinations.length} destinations worldwide.`
          : continentCards.find((c) => c.id === selectedContinent)?.description}
      </p>
    </div>

    {renderDestinationGrid(getDestinationsByContinent(selectedContinent))}
    
  </div>
  
  
)}
          </div>
         <h2 className="font-cinzel text-4xl font-bold text-vintage-orange mb-[-0.8rem] ml-8 mt-10"
          data-aos="slide-left">
           Else search places from Globe to explore...</h2>
          <SearchNearbyPlaces />
        </section>
         <VideoGallery />
           <TipsSection />
             <TravelStoriesSection />

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-r from-orange-900 via-red-900 to-orange-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
         
             <TypeWriter />  {/* The TypeWriter component will be used here */}

            <p className="font-garamond text-xl text-vintage-cream" data-aos="fade-up">Your trusted travel buddy for global adventures</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-cinzel text-5xl font-bold text-vintage-orange mb-2">{allDestinations.length}+</div>
              <p className="font-garamond text-xl text-vintage-cream">Global Destinations</p>
            </div>
            <div>
              <div className="font-cinzel text-5xl font-bold text-vintage-orange mb-2">7</div>
              <p className="font-garamond text-xl text-vintage-cream">Continents Covered</p>
            </div>
            <div>
              <div className="font-cinzel text-5xl font-bold text-vintage-orange mb-2">50+</div>
              <p className="font-garamond text-xl text-vintage-cream">Countries Available</p>
            </div>
            <div>
              <div className="font-cinzel text-5xl font-bold text-vintage-orange mb-2">4.8</div>
              <p className="font-garamond text-xl text-vintage-cream">Average Rating</p>
            </div>
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
