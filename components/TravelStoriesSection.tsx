import { useState } from "react";
import { motion } from "framer-motion"

const travelStories = [
 {
    id: 1,
    slug: "maldives-bliss",
    image: "/images/Stories/story4.jpg",
    tags: ["DESTINATIONS", "ISLAND LIFE"],
    title: "Maldives Bliss: Overwater Bungalows & Crystal Lagoons",
    url: "/stories/maldives-bliss",
  },
  {
    id: 2,
    slug: "northern-japan",
    image: "/images/Stories/story5.jpg",
    tags: ["DESTINATIONS", "CULTURE"],
    title: "Northern Japan – A Journey Through Serenity & Tradition",
    url: "/stories/northern-japan",
  },
  {
    id: 3,
    slug: "santorini-sunsets",
    image: "/images/Stories/story15.jpg",
    tags: ["DESTINATIONS", "ROMANTIC GETAWAYS"],
    title: "Sunsets in Santorini – Greece’s Most Romantic Island",
    url: "/stories/santorini-sunsets",
  },
  {
    id: 4,
    slug: "swiss-alps",
    image: "/images/Stories/story10.jpg",
    tags: ["MOUNTAIN ESCAPES"],
    title: "Swiss Alps Getaway – The Call of Snowy Peaks",
    url: "/stories/swiss-alps",
  },
  {
    id: 5,
    slug: "southeast-asia",
    image: "/images/Stories/story1.jpg",
    tags: ["DESTINATIONS"],
    title: "Southeast Asia & Beyond: Vietnam, Cambodia and Laos",
    url: "/stories/southeast-asia",
  },
  {
    id: 6,
    slug: "kenya-safari",
    image: "/images/Stories/story19.jpg",
    tags: ["WILDLIFE"],
    title: "Into the Wild – Safari Adventures in Kenya",
    url: "/stories/kenya-safari",
  },
  {
    id: 7,
    slug: "rome-history",
    image: "/images/Stories/story16.jpg",
    tags: ["CULTURE"],
    title: "Timeless Rome: A Walk Through Empires",
    url: "/stories/rome-history",
  },
  {
    id: 8,
    slug: "kyoto-food",
    image: "/images/Stories/story13.jpg",
    tags: ["EPICUREAN", "ARTS"],
    title: "Sip & Savour: A Culinary Journey Through Kyoto",
    url: "/stories/kyoto-food",
  },
  {
    id: 9,
    slug: "east-coast-getaways",
    image: "/images/Stories/story2.jpg",
    tags: ["NATURE", "INSIDER TIPS"],
    title: "Week-Long Getaways from the East Coast of the USA",
    url: "/stories/east-coast-getaways",
  },
  {
    id: 10,
    slug: "patagonia-expedition",
    image: "/images/Stories/story9.jpg",
    tags: ["ADVENTURE", "DESTINATIONS"],
    title: "Patagonia’s Remote Beauty – Edge of the World Exploration",
    url: "/stories/patagonia-expedition",
  },
  {
    id: 11,
    slug: "bali-temples",
    image: "/images/Stories/story18.jpg",
    tags: ["SPIRITUAL", "ISLAND LIFE"],
    title: "Spiritual Awakening in Bali’s Ancient Temples",
    url: "/stories/bali-temples",
  },
  {
    id: 12,
    slug: "machu-picchu-trails",
    image: "/images/Stories/story11.jpg",
    tags: ["DESTINATIONS", "HERITAGE"],
    title: "Trekking the Andes: Mystical Routes to Machu Picchu",
    url: "/stories/machu-picchu-trails",
  },
  {
    id: 13,
    slug: "norway-fjords",
    image: "/images/Stories/story12.jpg",
    tags: ["RIVER & OCEAN CRUISES"],
    title: "Sailing Through Norway’s Magical Fjords",
    url: "/stories/norway-fjords",
  },
  {
    id: 14,
    slug: "dubai-skyline",
    image: "/images/Stories/story17.jpg",
    tags: ["CITY ESCAPES"],
    title: "Skyscraper Dreams: Exploring Dubai’s Future Skyline",
    url: "/stories/dubai-skyline",
  },
  {
    id: 15,
    slug: "new-zealand",
    image: "/images/Stories/story8.jpg",
    tags: ["NATURE", "ADVENTURE"],
    title: "Nature’s Playground – New Zealand’s Breathtaking Trails",
    url: "/stories/new-zealand",
  },
  {
    id: 16,
    slug: "osaka-street-food",
    image: "/images/Stories/story6.jpg",
    tags: ["FOOD", "STREET LIFE"],
    title: "The Nation’s Kitchen – Osaka’s Vibrant Food Scene",
    url: "/stories/osaka-street-food",
  },
  {
    id: 17,
    slug: "croatia-coastline",
    image: "/images/Stories/story14.jpg",
    tags: ["DESTINATIONS", "COASTAL"],
    title: "Sailing Croatia’s Stunning Adriatic Coastline",
    url: "/stories/croatia-coastline",
  },
  {
    id: 18,
    slug: "iceland-adventure",
    image: "/images/Stories/story3.jpg",
    tags: ["NATURE", "ICE & FIRE"],
    title: "Iceland’s Ice & Fire – Natural Wonders Unleashed",
    url: "/stories/iceland-adventure",
  }
];


type TravelStory = {
  image: string;
  tags: string[];
  title: string;
  url: string;
  slug: string;
};

const TravelStoriesSection = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedStory, setSelectedStory] = useState<TravelStory | null>(null);
  const [selectedTag, setSelectedTag] = useState("ALL");

  const uniqueTags = ["ALL", ...new Set(travelStories.flatMap((s) => s.tags))];

  const filteredStories =
    selectedTag === "ALL"
      ? travelStories
      : travelStories.filter((story) => story.tags.includes(selectedTag));

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    
    <section className="bg-[#f9f6ef] dark:bg-gray-900 py-16 px-4 md:px-10 relative transition-colors duration-300">
  <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-center text-vintage-orange mb-4">
    Inspiring Travel Stories from Around the Globe
  </h2>
  <p className="text-center text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-10 text-lg font-garamond">
    Dive into personal tales, scenic escapes, and unforgettable adventures penned by real travelers. Let each story spark your next journey.
  </p>

  {/* Tag Filters */}
  <div className="flex flex-wrap gap-3 justify-center mb-8">
    {uniqueTags.map((tag) => (
      <button
        key={tag}
        onClick={() => {
          setSelectedTag(tag);
          setVisibleCount(6);
        }}
        className={`px-4 py-2 text-sm font-semibold rounded-full border transition-all duration-300 ${
          selectedTag === tag
            ? "bg-vintage-orange text-white"
            : "bg-white text-vintage-orange dark:bg-gray-800 dark:text-orange-300 border-orange-500"
        }`}
      >
        {tag}
      </button>
    ))}
  </div>

  {/* Story Cards */}
  <div className="grid md:grid-cols-3">
    {filteredStories.slice(0, visibleCount).map((story, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="relative h-[450px] overflow-hidden shadow-lg group cursor-pointer  bg-white dark:bg-zinc-800"
        onClick={() => setSelectedStory(story)}
      >
        <img
          src={story.image}
          alt={story.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
          {story.tags.map((tag, i) => (
            <span
              key={i}
              className="bg-vintage-orange/90 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm shadow"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6">
          <h3 className="text-white text-xl font-semibold font-garamond leading-snug">
            {story.title}
          </h3>
        </div>
      </motion.div>
    ))}
  </div>

  {/* Load More */}
  {visibleCount < filteredStories.length && (
    <div className="text-center mt-12">
      <button
        onClick={handleLoadMore}
        className="bg-orange-400 hover:bg-orange-500 text-white font-bold px-8 py-3 rounded-full shadow transition"
      >
        LOAD MORE
      </button>
    </div>
  )}

  {/* Modal Preview */}
  {selectedStory && (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
      onClick={() => setSelectedStory(null)}
    >
      <div
        className="bg-white dark:bg-gray-800 max-w-xl overflow-hidden shadow-xl relative rounded-md"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={selectedStory.image}
          alt={selectedStory.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h2 className="text-2xl font-cinzel font-bold text-vintage-orange dark:text-orange-300 mb-4">
            {selectedStory.title}
          </h2>
          <a
            href={selectedStory.url}
            className="text-white bg-vintage-orange hover:bg-orange-500 font-semibold px-5 py-2 rounded-full inline-block"
          >
            Read Full Story →
          </a>
        </div>
      </div>
    </div>
  )}
</section>

  );
};

export default TravelStoriesSection;