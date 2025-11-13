"use client";

import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import Select from "react-select";
import { fetchPlacesByText } from "@/lib/googlePlaces";
import { fetchFoursquarePlaces } from "@/lib/foursquare";
import { fetchPexelsImage } from "@/lib/pexels";
import { fetchPixabayImage } from "@/lib/pixabay";

const getImageForCategory = (categories: string[] = []) => {
  if (categories.includes("entertainment.museum")) return "/images/categories/museum.jpg";
  if (categories.includes("tourism.sights")) return "/images/categories/sights.jpg";
  if (categories.includes("leisure.park")) return "/images/categories/park.jpg";
  if (categories.includes("catering.restaurant")) return "/images/categories/restaurant.jpg";
  if (categories.includes("shopping.mall")) return "/images/categories/mall.jpg";
  return "/fallback.jpg";
};

const groupedCategories = [
  {
    label: "🏛️Travel Options",
    options: [
      { label: "Tourist Attractions", value: "tourism.sights" },
      { label: "Nature & Parks", value: "natural" },
      { label: "Parks & Gardens", value: "leisure.park" },
      { label: "Beaches", value: "leisure.beach_resort" },
      { label: "Museums", value: "entertainment.museum" },
      { label: "Zoos", value: "entertainment.zoo" },
      { label: "Aquariums", value: "entertainment.aquarium" },
      { label: "Theme Parks", value: "leisure.theme_park" },
      { label: "Water Parks", value: "leisure.water_park" },
    ],
  },
  {
    label: "🍽️ Food & Drinks",
    options: [
      { label: "Restaurants", value: "catering.restaurant" },
      { label: "Cafes", value: "catering.cafe" },
      { label: "Fast Food", value: "catering.fast_food" },
    ],
  },
  {
    label: "🎭 Entertainment & Nightlife",
    options: [
      { label: "Nightlife", value: "entertainment.nightclub" },
      { label: "Cinemas", value: "entertainment.cinema" },
      { label: "Theatres", value: "entertainment.theatre" },
    ],
  },
  {
    label: "🛏️ Accommodations",
    options: [
      { label: "Hotels", value: "accommodation.hotel" },
      { label: "Hostels", value: "accommodation.hostel" },
      { label: "Guest Houses", value: "accommodation.guest_house" },
    ],
  },
  {
    label: "🛍️ Shopping",
    options: [
      { label: "Shopping Malls", value: "shopping.mall" },
      { label: "Local Markets", value: "shopping.marketplace" },
    ],
  },
  {
    label: "🚉 Transport",
    options: [
      { label: "Airports", value: "transport.airport" },
      { label: "Train Stations", value: "transport.train_station" },
      { label: "Bus Stations", value: "transport.bus_station" },
    ],
  },
];

export default function SearchNearbyPlaces() {
  const [city, setCity] = useState("");
  const [category, setCategory] = useState("tourism.sights");
  const [places, setPlaces] = useState<any[]>([]);
  const [coords, setCoords] = useState<{ lat: number; lon: number } | null>(null);
  const [selectedPlace, setSelectedPlace] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);

  const getCityCoordinates = async (cityName: string) => {
  try {
    const res = await fetch(
      `https://api.geoapify.com/v1/geocode/search?text=${cityName}&apiKey=${process.env.NEXT_PUBLIC_GEOAPIFY_KEY}`
    );
    const data = await res.json();

    if (Array.isArray(data.features) && data.features.length > 0) {
      const { lat, lon } = data.features[0].properties;
      setCoords({ lat, lon });
    } else {
      alert("City not found.");
    }
  } catch (err) {
    console.error("Error fetching city coordinates:", err);
    alert("Something went wrong while fetching coordinates.");
  }
};

  useEffect(() => {
    if (coords) fetchPlaces();
  }, [coords, category]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    getCityCoordinates(city);
  };
  
const fetchGooglePlaces = async (query: string, lat: number, lng: number) => {
  const res = await fetch(
    `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&location=${lat},${lng}&radius=5000&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`
  );
  const data = await res.json();
  return data.results || [];
};


const fetchFoursquarePlaces = async (lat: number, lon: number, category: string) => {
  const res = await fetch(
    `https://api.foursquare.com/v3/places/search?ll=${lat},${lon}&categories=${category}&radius=5000&limit=15`,
    {
      headers: {
        Authorization: process.env.NEXT_PUBLIC_FOURSQUARE_KEY!,
      },
    }
  );
  const data = await res.json();
  return data.results || [];
};

const fetchPlaces = async () => {
  if (!coords) return;
  setLoading(true);
  try {
    const res = await fetch(
      `https://api.geoapify.com/v2/places?categories=${category}&filter=circle:${coords.lon},${coords.lat},5000&limit=90&bias=proximity:${coords.lon},${coords.lat}&lang=en&apiKey=${process.env.NEXT_PUBLIC_GEOAPIFY_KEY}`
    );
    const data = await res.json();

    const enrichedPlaces = await Promise.all(
  data.features.map(async (p: any) => {
    const image =
      (await fetchPexelsImage(p.properties.name)) ||
      (await fetchPixabayImage(p.properties.name));

    return {
      name: p.properties.name,
      address:
        p.properties.address_line1 +
        (p.properties.address_line2 ? `, ${p.properties.address_line2}` : ""),
      categories: p.properties.categories || [],
      website: p.properties.website || "",
      source: "Geoapify",
      image,
    };
  })
);

    setPlaces(enrichedPlaces);
  } catch (err) {
    console.error("Error fetching places:", err);
  } finally {
    setLoading(false);
  }
};


  return (
  <section className="py-2 dark:bg-gray-800 transition-colors">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Search Form */}
      <form onSubmit={handleSearch} className="mb-6">
  <div className="flex flex-col lg:flex-row gap-4 items-stretch backdrop-blur-md bg-white/10 dark:bg-gray-900/10 border border-vintage-orange rounded-none p-2 shadow-md">
    
    {/* City Input */}
    <div className="relative flex-1">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-600 h-5 w-5" />
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Search cities (e.g. Paris)"
        className="pl-10 pr-10 bg-transparent text-orange-800 dark:text-white placeholder-orange-400 dark:placeholder-gray-400 border-none outline-none h-full w-full"
      />
      {city && (
        <button
          type="button"
          onClick={() => {
            setCity("");
            setPlaces([]);
          }}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-orange-600 hover:text-red-500"
        >
          ✖
        </button>
      )}
    </div>

    {/* Category Dropdown */}
<div className="flex-1 relative z-50">
  <Select
    options={groupedCategories}
    onChange={(selected: any) => {
      if (selected && !Array.isArray(selected) && "value" in selected) {
        setCategory(selected.value as string);
      }
    }}
    placeholder="Choose a category..."
    className="text-white"
    isSearchable={false}
    menuPortalTarget={typeof window !== "undefined" ? document.body : null}
    styles={{
      control: (base) => ({
        ...base,
        backgroundColor: "transparent",
        backdropFilter: "blur(4px)",
        borderColor: "#ea580c",
        borderRadius: 0,
        padding: "6px 8px",
        minHeight: "48px",
        boxShadow: "none",
      }),
      singleValue: (base) => ({
        ...base,
        color: "#ea580c",
        fontWeight: "bold",
      }),
      placeholder: (base) => ({
        ...base,
        color: "#ea580c",
        fontStyle: "italic",
      }),
      menuPortal: (base) => ({
        ...base,
        zIndex: 9999, // 💥 Makes sure dropdown comes in front
      }),
      menu: (base) => ({
        ...base,
        backgroundColor: "#fff",
        color: "#000",
      }),
      option: (base, state) => ({
        ...base,
        backgroundColor: state.isFocused ? "#fde68a" : "#fff",
        color: "#ea580c",
        fontWeight: state.isSelected ? "bold" : "normal",
      }),
      groupHeading: (base) => ({
        ...base,
        color: "#ea580c",
        fontWeight: "bold",
      }),
    }}
    theme={(theme) => ({
      ...theme,
      borderRadius: 0,
      colors: {
        ...theme.colors,
        primary25: "#fde68a",
        primary: "#ea580c",
        neutral0: "#fff",       // light mode bg
        neutral80: "#ea580c",
        neutral20: "#ea580c",
        neutral30: "#ea580c",
      },
    })}
  />
</div>


    {/* Search Button */}
    <div className="flex-none">
      <button
        type="submit"
        className="h-full w-full bg-white/10 backdrop-blur-md border border-vintage-orange text-vintage-orange dark:text-white py-3 px-6 hover:bg-white/20 hover:text-orange-600 transition duration-300 font-semibold rounded-none shadow-md"
      >
        Search
      </button>
    </div>
  </div>
      </form>

      {/* Results Section */}
      <div className="mt-6">
        {loading ? (
          <div className="flex justify-center items-center h-72">
            <div className="flex flex-col items-center space-y-4">
              <img src="/globe-loader.gif" alt="Loading..." className="h-24 w-24" />
              <p className="text-orange-600 dark:text-orange-300 font-semibold text-lg">
                Exploring destinations...
              </p>
            </div>
          </div>
        ) : (
          <>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 group">
              {places.map((place: any, idx: number) => {
                const name = place.name || place.properties?.name || "Unnamed Place";
                const address =
                  place.address ||
                  place.properties?.address_line1 ||
                  place.properties?.formatted ||
                  "";
                const categories =
                  place.categories || place.properties?.categories || [];
                const website = place.website || place.properties?.website;
                const imageSrc =
                  !name || name.toLowerCase().includes("unnamed")
                    ? "/fallback.jpg"
                    : place.image || "/fallback.jpg";

                return (
                  <li
                    key={idx}
                    onClick={() => setSelectedPlace(place)}
                    className="cursor-pointer bg-orange-100 dark:bg-zinc-800 p-4 shadow-md border border-vintage-orange dark:border-yellow-600 transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="w-full h-48 mb-3 relative overflow-hidden rounded">
                      <img
                        src={imageSrc}
                        alt={name}
                        className="object-cover w-full h-full"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "/fallback.jpg";
                        }}
                      />
                    </div>
                    <h3 className="text-xl font-cinzel font-semibold text-vintage-orange mb-1">
                      {name}
                    </h3>
                    {address && (
                      <p className="text-sm text-orange-900 dark:text-gray-300 mb-1">
                        {address}
                      </p>
                    )}
                    {categories.length > 0 && (
                      <p className="text-xs italic text-orange-700 dark:text-yellow-400 mb-2">
                        {categories.join(", ")}
                      </p>
                    )}
                    {website && (
                      <a
                        href={website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 dark:text-blue-400 underline mb-1 block"
                      >
                        Visit Website
                      </a>
                    )}
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      Source: <span className="font-semibold">{place.source || "Geoapify"}</span>
                    </p>
                  </li>
                );
              })}
            </ul>

            {/* Expandable Modal */}
{selectedPlace && (
  <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
    <div className="bg-white dark:bg-gray-900 rounded-md p-6 max-w-lg w-full relative">
      <button
        onClick={() => setSelectedPlace(null)}
        className="absolute top-2 right-2 text-red-500 text-xl"
      >
        ✖
      </button>

      <h2 className="text-2xl font-bold text-vintage-orange mb-2">
        {selectedPlace.name || selectedPlace.properties?.name || "Unnamed Place"}
      </h2>

      <img
        src={selectedPlace.image || "/fallback.jpg"}
        alt="Place"
        className="object-cover w-full h-48 mb-4 rounded"
        onError={(e) => {
          (e.target as HTMLImageElement).src = "/fallback.jpg";
        }}
      />

      {(selectedPlace.address || selectedPlace.properties?.address_line1) && (
        <p className="text-orange-700 dark:text-orange-300 mb-2">
          {selectedPlace.address || selectedPlace.properties?.address_line1}
        </p>
      )}

      {(selectedPlace.categories?.length > 0 || selectedPlace.properties?.categories?.length > 0) && (
        <p className="text-xs italic text-orange-600 mb-2">
          {(selectedPlace.categories || selectedPlace.properties?.categories || []).join(", ")}
        </p>
      )}

      {(selectedPlace.website || selectedPlace.properties?.website) && (
        <a
          href={selectedPlace.website || selectedPlace.properties?.website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 underline mb-2 block"
        >
          Visit Website
        </a>
      )}

      {(selectedPlace.lat && selectedPlace.lon) ||
      (selectedPlace.properties?.lat && selectedPlace.properties?.lon) ? (
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${
            selectedPlace.lat || selectedPlace.properties?.lat
          },${selectedPlace.lon || selectedPlace.properties?.lon}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-green-700 dark:text-green-400 underline"
        >
          View on Google Maps
        </a>
      ) : null}
    </div>
  </div>
)}

         </>
        )}
      </div>
    </div>
  </section>
);
}