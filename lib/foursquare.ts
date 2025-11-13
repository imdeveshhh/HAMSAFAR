// lib/foursquare.ts
import axios from "axios";

export const fetchFoursquarePlaces = async (
  lat: number,
  lon: number,
  category: string
) => {
  const res = await axios.get("https://api.foursquare.com/v3/places/search", {
    headers: {
      Authorization: process.env.NEXT_PUBLIC_FSQ_API_KEY || "",
    },
    params: {
      ll: `${lat},${lon}`,
      query: category,
      radius: 5000,
      limit: 10,
    },
  });

  return res.data.results;
};
