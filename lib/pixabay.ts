export const fetchPixabayImage = async (query: string) => {
  const res = await fetch(
    `https://pixabay.com/api/?key=${process.env.NEXT_PUBLIC_PIXABAY_KEY}&q=${encodeURIComponent(query)}&image_type=photo&per_page=3`
  );
  const data = await res.json();
  return data.hits?.[0]?.largeImageURL || null;
};
