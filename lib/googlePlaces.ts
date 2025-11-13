// lib/googlePlaces.ts
import axios from "axios";

export const fetchPlacesByText = async (query: string) => {
  const res = await axios.get(
    `https://maps.googleapis.com/maps/api/place/textsearch/json`,
    {
      params: {
        query,
        key: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
      },
    }
  );
  return res.data.results;
};
