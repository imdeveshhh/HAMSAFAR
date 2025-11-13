"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function SearchWithPreview() {
  const [query, setQuery] = useState("");
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await axios.get("https://maps.googleapis.com/maps/api/place/textsearch/json", {
      params: {
        query,
        key: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
      },
    });

    setPlaces(res.data.results || []);
    setLoading(false);
  };

  const handleClick = (placeId: string) => {
    router.push(`/place/${placeId}`);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-zinc-900 rounded-lg shadow">
      <form onSubmit={handleSearch} className="flex gap-4 mb-6">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search places, destinations, or landmarks..."
          className="w-full border border-gray-300 p-3 rounded-md text-black dark:text-white dark:bg-gray-800"
        />
        <button
          type="submit"
          className="bg-vintage-orange text-white px-6 py-3 rounded-md hover:bg-orange-600"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-orange-500">Loading...</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {places.map((place: any, idx) => (
          <div
            key={idx}
            onClick={() => handleClick(place.place_id)}
            className="cursor-pointer p-4 bg-orange-100 dark:bg-zinc-800 rounded-md shadow hover:ring-2 hover:ring-orange-500"
          >
            <h3 className="text-xl font-semibold text-orange-700 dark:text-orange-300">{place.name}</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              {place.formatted_address}
            </p>

            {place.photos ? (
              <img
                src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${place.photos[0].photo_reference}&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`}
                alt={place.name}
                className="rounded-lg object-cover w-full h-48"
              />
            ) : (
              <div className="w-full h-48 bg-gray-300 dark:bg-zinc-700 flex items-center justify-center text-gray-600">
                No Image
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
