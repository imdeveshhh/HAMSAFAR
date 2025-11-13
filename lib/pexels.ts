// utils/pexels.ts
export const fetchPexelsImage = async (query: string) => {
  const res = await fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=1`, {
    headers: {
      Authorization: process.env.NEXT_PUBLIC_PEXELS_KEY!,
    },
  });
  const data = await res.json();
  return data.photos?.[0]?.src?.landscape || null;
};
