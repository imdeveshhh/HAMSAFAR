
"use client";
// This file contains dynamic story rendering based on slug.
import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Story {
  slug: string;
  title: string;
  description: string;
  image: string;
  content: React.ReactNode;
  author?: string;
}

export default function StoryPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const story: Story | undefined = getStoryContent(slug);
  const router = useRouter();

  if (!story) return notFound();

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <div className="rounded-xl overflow-hidden mb-6">
        <Image
          src={story.image}
          alt={story.title}
          width={1200}
          height={600}
          className="w-full h-auto object-cover"
        />
      </div>

      <h1 className="text-4xl font-cinzel text-orange-600 mb-4">
        {story.title}
      </h1>

      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
        {story.description}
      </p>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        {story.content}
      </div>

      {story.author && (
        <div className="mt-8 pt-6 border-t border-gray-300 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-400">
          Written by <strong>{story.author}</strong>
        </div>
      )}
      <div className="mt-10 text-center">
  <button
    onClick={() => router.back()}
    className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-full shadow-md transition duration-300"
  >
    ← Back to Previous Page
  </button>
</div>
    </div>
    
  );
}


function getStoryContent(slug: string): Story | undefined {
  switch (slug) {
    case "maldives-bliss":
  return {
    slug,
    title: "Maldives Bliss: Overwater Bungalows & Crystal Lagoons",
    description:
      "Explore the serene beauty of Maldives with its luxurious overwater villas and turquoise waters.",
    image:
      "/images/Stories/story4.jpg",
    author: "Duncan Greenfield-Turk",
    content: (
      <>
        <p>
          The Maldives is synonymous with barefoot luxury. Imagine waking up in
          a private overwater bungalow, waves lapping below, and sunlight
          pouring over a glass floor. Crystal-clear lagoons invite you to
          snorkel among vibrant marine life or simply float in still serenity.
        </p>

        <div className="flex justify-center my-6 gap-12">
          <Image
            src="https://images.unsplash.com/photo-1581873372796-635b67a1c490?auto=format&fit=crop&w=800&q=80"
            alt="Snorkeling Maldives"
            width={300}
            height={300}
            className=" rounded-xl border-4 border-orange-300 shadow-md"
          />
          <Image
            src="https://images.unsplash.com/photo-1581873372796-635b67a1c490?auto=format&fit=crop&w=800&q=80"
            alt="Snorkeling Maldives"
            width={300}
            height={300}
            className=" rounded-xl border-4 border-orange-300 shadow-md"
          />
        </div>

        <p>
          Indulge in sunset cruises, spa rituals, and dining under the stars.
          Each island resort in the Maldives offers a unique vibe—from
          honeymoon havens to family-friendly escapes.
        </p>

        <Image
          src="https://images.unsplash.com/photo-1562160434-1894705d6985?auto=format&fit=crop&w=1400&q=80"
          alt="Maldives Sunset"
          width={1200}
          height={600}
          className="my-8 rounded-xl"
        />
        

        <p>
          Whether you seek adventure in coral gardens, peace on a secluded deck,
          or indulgence at a world-class spa, the Maldives delivers serenity at
          every tide. It’s not just a destination—it’s a dream made real.
        </p>
      </>
    ),
  };
    case "northern-japan":
      return {
        slug,
        title: "Northern Japan – A Journey Through Serenity & Tradition",
        description:
          "Wander through misty mountains, heritage ryokans, and onsen villages in Japan’s tranquil north.",
        image:
          "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1400&q=80",
        author: "Naoko Tanaka",
        content: (
          <>
            <p>
              Northern Japan is a poetic blend of natural serenity and cultural grace. Tohoku, the region’s hidden gem, remains untouched by mass tourism and offers a soul-soothing escape.
            </p>
            <div className="flex justify-center my-6">
              <Image
                src="https://images.unsplash.com/photo-1586937421031-ea324dac173f?auto=format&fit=crop&w=800&q=80"
                alt="Tohoku Scenery"
                width={300}
                height={300}
                className="rounded-full border-4 border-orange-300 shadow-md"
              />
            </div>
            <p>
              Begin your journey in Nyuto Onsen, where steam rises from cedar-lined baths and ryokans overlook tranquil valleys. Local kaiseki dinners are an art form—each course reflecting the season’s offerings.
            </p>

            <Image
              src="https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&w=1400&q=80"
              alt="Japanese Ryokan"
              width={1200}
              height={600}
              className="my-8 rounded-xl"
            />

            <h2>Hiking Dewa Sanzan</h2>
            <p>
              The sacred Dewa Sanzan mountains offer a spiritual hike connecting three shrines representing birth, death, and rebirth. Walking the stone paths beneath towering cedars is a deeply meditative experience.
            </p>

            <div className="flex justify-center my-6">
              <Image
                src="https://images.unsplash.com/photo-1508614999368-bdb728fa1f7b?auto=format&fit=crop&w=800&q=80"
                alt="Dewa Sanzan Hike"
                width={300}
                height={300}
                className="rounded-full border-4 border-orange-300 shadow-md"
              />
            </div>

            <p>
              End your journey in Hirosaki during cherry blossom season or in Aomori’s snow-covered temples during winter—each moment feels like a postcard.
            </p>
          </>
        ),
      };

      case "santorini-sunsets":
  return {
    slug,
    title: "Sunsets in Santorini – Greece’s Most Romantic Island",
    description:
      "Witness breathtaking sunsets, white-washed architecture, and Aegean views in magical Santorini.",
    image:
      "https://images.unsplash.com/photo-1606813901421-d49bb95c4a2b?auto=format&fit=crop&w=1400&q=80",
    author: "Eleni Papadakis",
    content: (
      <>
        <p>
          Santorini is romance incarnate. From its cliffside villages draped in white to the sapphire domes of Oia, this Greek island casts a spell on every traveler.
        </p>

        <div className="flex justify-center my-6">
          <Image
            src="https://images.unsplash.com/photo-1543342386-2a5f3d18a3b9?auto=format&fit=crop&w=800&q=80"
            alt="Santorini Streets"
            width={300}
            height={300}
            className="rounded-full border-4 border-orange-300 shadow-md"
          />
        </div>

        <p>
          Begin your day with a caldera-view breakfast, then explore the charming alleys of Fira and Pyrgos. The volcanic beaches—red, white, and black—each offer a different slice of paradise.
        </p>

        <Image
          src="https://images.unsplash.com/photo-1602781098409-14c46e3d6d90?auto=format&fit=crop&w=1400&q=80"
          alt="Santorini Sunset"
          width={1200}
          height={600}
          className="my-8 rounded-xl"
        />

        <h2>Oia at Dusk</h2>
        <p>
          As the sun begins its descent, make your way to Oia. The world-renowned Santorini sunset paints the sky in hues of fire—best enjoyed from a rooftop terrace with local wine.
        </p>

        <div className="flex justify-center my-6">
          <Image
            src="https://images.unsplash.com/photo-1602781197689-d2b458327b82?auto=format&fit=crop&w=800&q=80"
            alt="Oia at Night"
            width={300}
            height={300}
            className="rounded-full border-4 border-orange-300 shadow-md"
          />
        </div>

        <p>
          End your day dining al fresco on freshly caught seafood and creamy fava. In Santorini, every meal, every corner, and every sunset is a moment to treasure.
        </p>
      </>
    ),
  };

  case "swiss-alps":
  return {
    slug,
    title: "Swiss Alps Getaway – The Call of Snowy Peaks",
    description:
      "From alpine villages to world-class ski slopes, the Swiss Alps offer timeless mountain beauty.",
    image:
      "https://images.unsplash.com/photo-1563890190292-33ae17f8fd12?auto=format&fit=crop&w=1400&q=80",
    author: "Hans Meier",
    content: (
      <>
        <p>
          The Swiss Alps are more than a mountain range—they're a fairytale waiting to be explored. Snow-dusted chalets, glacial lakes, and thrilling hikes welcome you all year round.
        </p>

        <div className="flex justify-center my-6">
          <Image
            src="https://images.unsplash.com/photo-1579430456318-d0f61a98f8e6?auto=format&fit=crop&w=800&q=80"
            alt="Alpine Chalet"
            width={300}
            height={300}
            className="rounded-full border-4 border-orange-300 shadow-md"
          />
        </div>

        <p>
          In Zermatt, catch a glimpse of the iconic Matterhorn or ride the Gornergrat railway for sweeping views. Interlaken, meanwhile, is your basecamp for paragliding and canyoning adventures.
        </p>

        <Image
          src="https://images.unsplash.com/photo-1565182999561-18d8efb9a5a4?auto=format&fit=crop&w=1400&q=80"
          alt="Swiss Mountains"
          width={1200}
          height={600}
          className="my-8 rounded-xl"
        />

        <h2>Winter Magic & Summer Thrills</h2>
        <p>
          Whether skiing in Verbier or hiking the Eiger Trail, each season unveils a new layer of beauty. Don’t miss the panoramic train rides aboard the Glacier Express.
        </p>

        <div className="flex justify-center my-6">
          <Image
            src="https://images.unsplash.com/photo-1618410244163-7fcd7e15aa6e?auto=format&fit=crop&w=800&q=80"
            alt="Swiss Glacier Express"
            width={300}
            height={300}
            className="rounded-full border-4 border-orange-300 shadow-md"
          />
        </div>

        <p>
          With every breath of crisp alpine air, the Swiss Alps renew your spirit. This is nature in its most majestic form.
        </p>
      </>
    ),
  };

  case "southeast-asia":
  return {
    slug,
    title: "Southeast Asia & Beyond: Vietnam, Cambodia and Laos",
    description:
      "A vibrant journey through Southeast Asia’s temples, street food, and timeless traditions.",
    image:
      "https://images.unsplash.com/photo-1526481280691-702fede18430?auto=format&fit=crop&w=1400&q=80",
    author: "Linh Nguyen",
    content: (
      <>
        <p>
          Southeast Asia pulses with life—from the motorbike-filled streets of Hanoi to the tranquil Mekong River delta. Every corner reveals a new flavor, temple, or story.
        </p>

        <div className="flex justify-center my-6">
          <Image
            src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d3?auto=format&fit=crop&w=800&q=80"
            alt="Vietnam Street Life"
            width={300}
            height={300}
            className="rounded-full border-4 border-orange-300 shadow-md"
          />
        </div>

        <p>
          Marvel at the sunrise over Angkor Wat in Cambodia, cruise through Ha Long Bay’s emerald waters, or explore the Buddhist stupas of Luang Prabang in Laos.
        </p>

        <Image
          src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=1400&q=80"
          alt="Angkor Wat Sunrise"
          width={1200}
          height={600}
          className="my-8 rounded-xl"
        />

        <h2>Culture, Cuisine & Calm</h2>
        <p>
          Let the tastes of pho, amok curry, and sticky rice guide your culinary exploration. Join a cooking class or simply wander through a bustling night market.
        </p>

        <div className="flex justify-center my-6">
          <Image
            src="https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=800&q=80"
            alt="Southeast Asian Cuisine"
            width={300}
            height={300}
            className="rounded-full border-4 border-orange-300 shadow-md"
          />
        </div>

        <p>
          With its harmony of tradition and modernity, Southeast Asia invites you to pause, reflect, and be endlessly inspired.
        </p>
      </>
    ),
  };

  case "kenya-safari":
  return {
    slug,
    title: "Into the Wild – Safari Adventures in Kenya",
    description:
      "Track the Big Five across Kenya’s golden savannahs and experience the raw pulse of the wild.",
    image:
      "https://images.unsplash.com/photo-1590490360183-cdba0e391b80?auto=format&fit=crop&w=1400&q=80",
    author: "Amara Njeri",
    content: (
      <>
        <p>
          Kenya’s sweeping plains and vibrant wildlife make it a top destination for safari lovers. The Masai Mara comes alive each year with the Great Migration—millions of wildebeest and zebra stampeding across the land.
        </p>

        <div className="flex justify-center my-6">
          <Image
            src="https://images.unsplash.com/photo-1612305796793-84cf6a5a349d?auto=format&fit=crop&w=800&q=80"
            alt="Masai Mara Safari"
            width={300}
            height={300}
            className="rounded-full border-4 border-orange-300 shadow-md"
          />
        </div>

        <p>
          Your days start with golden sunrises over acacia trees, game drives tracking elephants and lions, and evenings under starry skies at eco-lodges blending luxury and tradition.
        </p>

        <Image
          src="https://images.unsplash.com/photo-1601205476357-4edac066857f?auto=format&fit=crop&w=1400&q=80"
          alt="Kenya Wildlife"
          width={1200}
          height={600}
          className="my-8 rounded-xl"
        />

        <h2>Meet the Maasai</h2>
        <p>
          Visit a local Maasai village to understand their ancient customs, colorful attire, and warrior spirit. Their connection to the land adds depth to your safari beyond the animals.
        </p>

        <div className="flex justify-center my-6">
          <Image
            src="https://images.unsplash.com/photo-1579566346927-2db1c7b59791?auto=format&fit=crop&w=800&q=80"
            alt="Maasai Tribe"
            width={300}
            height={300}
            className="rounded-full border-4 border-orange-300 shadow-md"
          />
        </div>

        <p>
          A Kenyan safari isn’t just a trip—it’s a raw, breathtaking immersion into the rhythms of the wild.
        </p>
      </>
    ),
  };
case "rome-history":
  return {
    slug,
    title: "Timeless Rome: A Walk Through Empires",
    description:
      "Wander the cobbled streets of Rome where every stone tells the story of emperors, artists, and revolutions.",
    image:
      "https://images.unsplash.com/photo-1557682264-9671d7d46fc4?auto=format&fit=crop&w=1400&q=80",
    author: "Luca Romano",
    content: (
      <>
        <p>
          Rome is a city where past and present exist side by side. Start your day at the Colosseum, where gladiators once battled for glory. The Forum nearby whispers stories of Roman senators and ancient rituals.
        </p>

        <div className="flex justify-center my-6">
          <Image
            src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=80"
            alt="Roman Forum"
            width={300}
            height={300}
            className="rounded-full border-4 border-orange-300 shadow-md"
          />
        </div>

        <p>
          Toss a coin into the Trevi Fountain, then climb the Spanish Steps for views across terracotta rooftops. Enjoy espresso at a local piazza café where artists and lovers gather.
        </p>

        <Image
          src="https://images.unsplash.com/photo-1588167106543-876b11eaa0a8?auto=format&fit=crop&w=1400&q=80"
          alt="Trevi Fountain"
          width={1200}
          height={600}
          className="my-8 rounded-xl"
        />

        <h2>The Vatican & Renaissance Splendor</h2>
        <p>
          Visit the Vatican Museums to stand beneath Michelangelo’s Sistine Chapel, and step into St. Peter’s Basilica—one of the world’s most sacred masterpieces of architecture.
        </p>

        <div className="flex justify-center my-6">
          <Image
            src="https://images.unsplash.com/photo-1587732875024-d102ac0710f7?auto=format&fit=crop&w=800&q=80"
            alt="St. Peter's Basilica"
            width={300}
            height={300}
            className="rounded-full border-4 border-orange-300 shadow-md"
          />
        </div>

        <p>
          As night falls, dine al fresco in Trastevere, where cobblestone lanes lead to candlelit trattorias serving fresh pasta and Roman charm.
        </p>
      </>
    ),
  };

  case "kyoto-food":
  return {
    slug,
    title: "Sip & Savour: A Culinary Journey Through Kyoto",
    description:
      "Discover the flavors of Kyoto—from matcha ceremonies to Michelin-starred kaiseki in bamboo groves.",
    image:
      "https://images.unsplash.com/photo-1576014132886-f8e5edcbd86e?auto=format&fit=crop&w=1400&q=80",
    author: "Haruki Nakamura",
    content: (
      <>
        <p>
          Kyoto's cuisine is a reflection of its spiritual roots—refined, seasonal, and deeply cultural. Begin your journey in Gion, where geisha culture still thrives, and tea houses offer delicate wagashi sweets with ceremonial-grade matcha.
        </p>

        <div className="flex justify-center my-6">
          <Image
            src="https://images.unsplash.com/photo-1608534508237-7c389dd52e5b?auto=format&fit=crop&w=800&q=80"
            alt="Kyoto Matcha Ceremony"
            width={300}
            height={300}
            className="rounded-full border-4 border-orange-300 shadow-md"
          />
        </div>

        <p>
          At Nishiki Market, Kyoto's kitchen alley, you'll sample everything from charcoal-grilled eel skewers to yuba (tofu skin) and pickled vegetables crafted with precision.
        </p>

        <Image
          src="https://images.unsplash.com/photo-1562760931-47bc2dfd3d71?auto=format&fit=crop&w=1400&q=80"
          alt="Nishiki Market"
          width={1200}
          height={600}
          className="my-8 rounded-xl"
        />

        <h2>Kaiseki: The Art of Seasonal Dining</h2>
        <p>
          Book a reservation at Kikunoi or Gion Sasaki to experience multi-course kaiseki, where every dish—from the appetizer to dessert—is plated like a painting and tells the story of the season.
        </p>

        <div className="flex justify-center my-6">
          <Image
            src="https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=800&q=80"
            alt="Kaiseki Course"
            width={300}
            height={300}
            className="rounded-full border-4 border-orange-300 shadow-md"
          />
        </div>

        <p>
          End your day at Pontocho Alley, where hidden izakayas serve local sake and yakitori under the glow of paper lanterns. Kyoto is where food becomes poetry.
        </p>
      </>
    ),
  };

  case "east-coast-getaways":
  return {
    slug,
    title: "Week-Long Getaways from the East Coast of the USA",
    description:
      "Escape the hustle with scenic retreats and hidden gems from New England to the Carolinas.",
    image:
      "https://images.unsplash.com/photo-1576402187878-4f18a2cfb527?auto=format&fit=crop&w=1400&q=80",
    author: "Jessica Monroe",
    content: (
      <>
        <p>
          Whether you're craving coastal charm, mountain air, or cultural depth, the East Coast offers diverse escapes perfect for a week-long adventure. From lighthouses in Maine to the marshes of South Carolina, there’s something for every traveler.
        </p>

        <div className="flex justify-center my-6">
          <Image
            src="https://images.unsplash.com/photo-1522706604294-ffcc0f0b990d?auto=format&fit=crop&w=800&q=80"
            alt="Maine Coastline"
            width={300}
            height={300}
            className="rounded-full border-4 border-orange-300 shadow-md"
          />
        </div>

        <p>
          In Cape Cod, cycle the Rail Trail before watching the sun dip over sandy dunes. Drive inland to the Berkshires for mountain hikes and local theater under starry skies.
        </p>

        <Image
          src="https://images.unsplash.com/photo-1620087447029-6d08b41c8f7a?auto=format&fit=crop&w=1400&q=80"
          alt="Cape Cod Sunset"
          width={1200}
          height={600}
          className="my-8 rounded-xl"
        />

        <h2>Southern Charm</h2>
        <p>
          Explore Charleston’s pastel-colored streets and Savannah’s moss-draped squares. Kayak through Lowcountry waterways or indulge in seafood boils on screened porches.
        </p>

        <div className="flex justify-center my-6">
          <Image
            src="https://images.unsplash.com/photo-1586880244403-dc264a1bd9ba?auto=format&fit=crop&w=800&q=80"
            alt="Savannah Riverwalk"
            width={300}
            height={300}
            className="rounded-full border-4 border-orange-300 shadow-md"
          />
        </div>

        <p>
          From cozy coastal inns to historic estates, the East Coast is filled with timeless escapes perfect for refreshing your spirit.
        </p>
      </>
    ),
  };
case "patagonia-expedition":
  return {
    slug,
    title: "Patagonia’s Remote Beauty – Edge of the World Exploration",
    description:
      "Vast, rugged, and breathtaking—Patagonia offers an untamed escape into nature’s extremes.",
    image:
      "https://images.unsplash.com/photo-1558981403-c5f9891a3a9c?auto=format&fit=crop&w=1400&q=80",
    author: "Miguel Torres",
    content: (
      <>
        <p>
          Patagonia, at the southern edge of South America, is where jagged peaks, icy glaciers, and windswept plains collide to form one of the world’s most surreal landscapes.
        </p>

        <div className="flex justify-center my-6">
          <Image
            src="https://images.unsplash.com/photo-1603702710974-ec8d5f70c60a?auto=format&fit=crop&w=800&q=80"
            alt="Patagonian Glacier"
            width={300}
            height={300}
            className="rounded-full border-4 border-orange-300 shadow-md"
          />
        </div>

        <p>
          Start your adventure in El Chaltén, Argentina’s trekking capital. Hike to Mount Fitz Roy through lenga forests and turquoise glacial lakes. Watch condors soar above the cliffs as snow-capped peaks pierce the sky.
        </p>

        <Image
          src="https://images.unsplash.com/photo-1610563166155-5394e19f96f0?auto=format&fit=crop&w=1400&q=80"
          alt="Mount Fitz Roy"
          width={1200}
          height={600}
          className="my-8 rounded-xl"
        />

        <h2>Torres del Paine: The Crown Jewel</h2>
        <p>
          On the Chilean side, Torres del Paine National Park stuns with its iconic granite towers, azure lakes, and herds of guanacos. Embark on the famed W Trek or take a scenic boat ride to Grey Glacier.
        </p>

        <div className="flex justify-center my-6">
          <Image
            src="https://images.unsplash.com/photo-1503437313881-503a91226402?auto=format&fit=crop&w=800&q=80"
            alt="Torres del Paine"
            width={300}
            height={300}
            className="rounded-full border-4 border-orange-300 shadow-md"
          />
        </div>

        <p>
          Patagonia feels like the edge of the world—raw, vast, and unforgettable. Whether you're an experienced hiker or a nature lover, this is one destination that stirs the soul.
        </p>
      </>
    ),
  };

  case "bali-temples":
  return {
    slug,
    title: "Spiritual Awakening in Bali’s Ancient Temples",
    description:
      "Discover Bali’s sacred side—from cliffside temples to jungle sanctuaries steeped in legend and tranquility.",
    image:
      "https://images.unsplash.com/photo-1585647341598-306c928b80f8?auto=format&fit=crop&w=1400&q=80",
    author: "Indira Wulandari",
    content: (
      <>
        <p>
          Bali is more than just beaches—it's a spiritual sanctuary filled with centuries-old temples where daily offerings and ceremonies preserve harmony with nature.
        </p>

        <div className="flex justify-center my-6">
          <Image
            src="https://images.unsplash.com/photo-1592791428911-c25d6d21f02b?auto=format&fit=crop&w=800&q=80"
            alt="Temple Offering"
            width={300}
            height={300}
            className="rounded-full border-4 border-orange-300 shadow-md"
          />
        </div>

        <p>
          Begin your journey at Uluwatu Temple, dramatically perched atop ocean cliffs. As the sun sets, catch the iconic Kecak fire dance echoing the rhythm of Balinese folklore.
        </p>

        <Image
          src="https://images.unsplash.com/photo-1601534260070-695ae9cba979?auto=format&fit=crop&w=1400&q=80"
          alt="Uluwatu Temple"
          width={1200}
          height={600}
          className="my-8 rounded-xl"
        />

        <h2>Tirta Empul: The Holy Spring</h2>
        <p>
          Visit Tirta Empul near Ubud, where locals and visitors bathe in holy waters said to cleanse body and soul. The temple complex bustles with tradition, incense, and the sound of flowing spring water.
        </p>

        <div className="flex justify-center my-6">
          <Image
            src="https://images.unsplash.com/photo-1602931831353-825d785ff169?auto=format&fit=crop&w=800&q=80"
            alt="Tirta Empul"
            width={300}
            height={300}
            className="rounded-full border-4 border-orange-300 shadow-md"
          />
        </div>

        <p>
          Wrap up your spiritual path at Besakih Temple, Bali’s ‘Mother Temple’ on the slopes of Mount Agung. Mystical, meditative, and mesmerizing—Bali’s sacred spaces awaken a deeper sense of connection.
        </p>
      </>
    ),
  };

  case "machu-picchu-trails":
  return {
    slug,
    title: "Trekking the Andes: Mystical Routes to Machu Picchu",
    description:
      "Journey through ancient paths and majestic peaks on your way to the Incan marvel of Machu Picchu.",
    image:
      "https://images.unsplash.com/photo-1586907835000-79f032f5b313?auto=format&fit=crop&w=1400&q=80",
    author: "Luis Andrade",
    content: (
      <>
        <p>
          High in the Peruvian Andes, the trails to Machu Picchu promise more than breathtaking scenery—they offer a transformative journey through history, culture, and raw natural beauty.
        </p>

        <div className="flex justify-center my-6">
          <Image
            src="https://images.unsplash.com/photo-1572890535520-5702baf83b74?auto=format&fit=crop&w=800&q=80"
            alt="Inca Trail Hike"
            width={300}
            height={300}
            className="rounded-full border-4 border-orange-300 shadow-md"
          />
        </div>

        <p>
          The Inca Trail is the most famous route, winding through cloud forests, alpine tundras, and ancient ruins. Each step reveals centuries-old stonework and panoramic vistas.
        </p>

        <Image
          src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1400&q=80"
          alt="Machu Picchu View"
          width={1200}
          height={600}
          className="my-8 rounded-xl"
        />

        <h2>Alternative Paths to Wonder</h2>
        <p>
          Prefer less-traveled routes? Try the Salkantay or Lares Treks. They’re just as scenic and lead to Machu Picchu while offering more solitude and encounters with traditional Andean life.
        </p>

        <div className="flex justify-center my-6">
          <Image
            src="https://images.unsplash.com/photo-1600508773530-4e1b7630c7c3?auto=format&fit=crop&w=800&q=80"
            alt="Salkantay Trek"
            width={300}
            height={300}
            className="rounded-full border-4 border-orange-300 shadow-md"
          />
        </div>

        <p>
          As you pass through high passes and ancient settlements, you’re walking in the footsteps of an empire—and your reward is the awe-inspiring sunrise over Machu Picchu’s citadel.
        </p>
      </>
    ),
  };
case "norway-fjords":
  return {
    slug,
    title: "Sailing Through Norway’s Magical Fjords",
    description:
      "Witness the power and peace of nature while cruising through Norway’s majestic fjords.",
    image:
      "https://images.unsplash.com/photo-1517821099602-3caceff84df2?auto=format&fit=crop&w=1400&q=80",
    author: "Ingrid Solberg",
    content: (
      <>
        <p>
          Norway’s fjords are nature’s grand masterpiece—dramatic cliffs plunge into deep, shimmering waters while waterfalls cascade down mossy slopes. Cruising these fjords is a surreal experience of tranquility and awe.
        </p>

        <div className="flex justify-center my-6">
          <Image
            src="https://images.unsplash.com/photo-1601913789026-7bc8a19d9701?auto=format&fit=crop&w=800&q=80"
            alt="Fjord Cruise"
            width={300}
            height={300}
            className="rounded-full border-4 border-orange-300 shadow-md"
          />
        </div>

        <p>
          Begin in Bergen and head toward the iconic Geirangerfjord or Nærøyfjord, both UNESCO World Heritage Sites. You’ll pass charming villages, towering mountains, and valleys carved by glaciers over millennia.
        </p>

        <Image
          src="https://images.unsplash.com/photo-1518081461904-a1d4ed6e1f78?auto=format&fit=crop&w=1400&q=80"
          alt="Geirangerfjord"
          width={1200}
          height={600}
          className="my-8 rounded-xl"
        />

        <h2>Embrace Slow Travel</h2>
        <p>
          The joy of fjord cruising lies in its slowness. Watch mist rise from still waters at dawn, hike up to panoramic viewpoints by day, and soak in Nordic saunas with views of the northern sky.
        </p>

        <div className="flex justify-center my-6">
          <Image
            src="https://images.unsplash.com/photo-1612817157310-c353c8bafe56?auto=format&fit=crop&w=800&q=80"
            alt="Fjord Sauna"
            width={300}
            height={300}
            className="rounded-full border-4 border-orange-300 shadow-md"
          />
        </div>

        <p>
          Whether it’s summer’s midnight sun or winter’s icy beauty, Norway’s fjords are an eternal escape into wonder.
        </p>
      </>
    ),
  };

  case "dubai-skyline":
  return {
    slug,
    title: "Skyscraper Dreams: Exploring Dubai’s Future Skyline",
    description:
      "Marvel at the futuristic architecture, luxury, and ambition of Dubai's ever-evolving skyline.",
    image:
      "https://images.unsplash.com/photo-1616421982317-4a671a73058d?auto=format&fit=crop&w=1400&q=80",
    author: "Zahra Al-Mansoori",
    content: (
      <>
        <p>
          Dubai is a living vision of the future—where sand meets steel and tradition dances with innovation. Its skyline is a statement of ambition, rising boldly from the Arabian desert.
        </p>

        <div className="flex justify-center my-6">
          <Image
            src="https://images.unsplash.com/photo-1594674184769-60fa2ebc0aa8?auto=format&fit=crop&w=800&q=80"
            alt="Dubai Skyscrapers"
            width={300}
            height={300}
            className="rounded-full border-4 border-orange-300 shadow-md"
          />
        </div>

        <p>
          Begin at the Burj Khalifa, the world’s tallest building. Gaze over the glittering cityscape from the 148th floor or dine at Atmosphere for a meal in the clouds. Then head to Dubai Marina, where waterfront living meets nightlife and superyachts.
        </p>

        <Image
          src="https://images.unsplash.com/photo-1597294551073-cd196636a7c2?auto=format&fit=crop&w=1400&q=80"
          alt="Dubai Marina"
          width={1200}
          height={600}
          className="my-8 rounded-xl"
        />

        <h2>Innovation Meets Experience</h2>
        <p>
          Visit the Museum of the Future, an architectural marvel that explores technology and design. Stroll through the Frame for a visual contrast of old and new Dubai, and shop in air-conditioned souks and luxury malls.
        </p>

        <div className="flex justify-center my-6">
          <Image
            src="https://images.unsplash.com/photo-1611056326365-8d20e1be9bc0?auto=format&fit=crop&w=800&q=80"
            alt="Museum of the Future"
            width={300}
            height={300}
            className="rounded-full border-4 border-orange-300 shadow-md"
          />
        </div>

        <p>
          As dusk falls, take a desert safari outside the city—a reminder that before the towers, there were dunes and stars. Dubai is a city of contrast, imagination, and endless ambition.
        </p>
      </>
    ),
  };
case "new-zealand":
  return {
    slug,
    title: "Nature’s Playground – New Zealand’s Breathtaking Trails",
    description:
      "Explore the raw beauty of New Zealand, from soaring peaks and lush valleys to pristine beaches and Maori culture.",
    image:
      "https://images.unsplash.com/photo-1591160690552-5bff1edb85df?auto=format&fit=crop&w=1400&q=80",
    author: "Liam Thompson",
    content: (
      <>
        <p>
          New Zealand is an adventurer’s dream. With towering mountains, geothermal wonders, and quiet coasts, it offers diverse terrain and unforgettable experiences. Every corner feels like a scene from a fantasy film.
        </p>

        <div className="flex justify-center my-6">
          <Image
            src="https://images.unsplash.com/photo-1562887084-b1b58103e1cc?auto=format&fit=crop&w=800&q=80"
            alt="Mount Cook, NZ"
            width={300}
            height={300}
            className="rounded-full border-4 border-orange-300 shadow-md"
          />
        </div>

        <p>
          Trek the Milford Track for jaw-dropping alpine vistas and cascading waterfalls. Cruise through Doubtful Sound, a misty fjord echoing with birdsong and serenity. Or explore glowworm caves in Waitomo for an otherworldly underground adventure.
        </p>

        <Image
          src="https://images.unsplash.com/photo-1573511862327-29f8717d595c?auto=format&fit=crop&w=1400&q=80"
          alt="Milford Sound"
          width={1200}
          height={600}
          className="my-8 rounded-xl"
        />

        <h2>Culture & Coasts</h2>
        <p>
          In Rotorua, geothermal activity meets Māori tradition—enjoy a hāngī feast and haka performance. On the North Island, golden beaches of the Coromandel invite surfers and dreamers, while Hobbiton thrills film fans.
        </p>

        <div className="flex justify-center my-6">
          <Image
            src="https://images.unsplash.com/photo-1558511261-bc3b8e92a2b7?auto=format&fit=crop&w=800&q=80"
            alt="Hobbiton Village"
            width={300}
            height={300}
            className="rounded-full border-4 border-orange-300 shadow-md"
          />
        </div>

        <p>
          Whether you seek adrenaline or peace, New Zealand is the ultimate nature escape—a country that speaks in mountains, lakes, and stars.
        </p>
      </>
    ),
  };
case "osaka-street-food":
  return {
    slug,
    title: "The Nation’s Kitchen – Osaka’s Vibrant Food Scene",
    description:
      "Dive into the culinary capital of Japan where every street corner bursts with flavors and food stories.",
    image:
      "https://images.unsplash.com/photo-1602511510798-7b5c7a75a0b3?auto=format&fit=crop&w=1400&q=80",
    author: "Yuki Nakamura",
    content: (
      <>
        <p>
          Osaka is Japan’s food haven—a city where taste leads every adventure. From neon-lit streets of Dotonbori to bustling Kuromon Market, the smells, sights, and sounds are irresistibly mouthwatering.
        </p>

        <div className="flex justify-center my-6">
          <Image
            src="https://images.unsplash.com/photo-1553979459-d2229f9d907f?auto=format&fit=crop&w=800&q=80"
            alt="Dotonbori Food Stalls"
            width={300}
            height={300}
            className="rounded-full border-4 border-orange-300 shadow-md"
          />
        </div>

        <p>
          Start with takoyaki—crispy octopus balls drizzled with sauce and mayo—or okonomiyaki, the savory pancake loaded with toppings. Every bite is an explosion of umami. Street vendors and izakayas alike serve up soul-satisfying eats.
        </p>

        <Image
          src="https://images.unsplash.com/photo-1613014275661-d21a0870ae2e?auto=format&fit=crop&w=1400&q=80"
          alt="Takoyaki Stand"
          width={1200}
          height={600}
          className="my-8 rounded-xl"
        />

        <h2>Hidden Gems & Food Culture</h2>
        <p>
          Beyond street food, Osaka hides culinary gems—Michelin-starred tempura spots, ramen basements, and sushi counters where chefs craft each piece like art. Don’t miss kushikatsu—deep-fried skewers dipped in shared sauce, a beloved Osaka tradition.
        </p>

        <div className="flex justify-center my-6">
          <Image
            src="https://images.unsplash.com/photo-1600891963951-53f97e56484d?auto=format&fit=crop&w=800&q=80"
            alt="Kushikatsu Osaka"
            width={300}
            height={300}
            className="rounded-full border-4 border-orange-300 shadow-md"
          />
        </div>

        <p>
          Whether you're grabbing bites from a market stall or savoring a multi-course kaiseki, Osaka serves up bold flavors and warm hospitality, earning its title as the Nation’s Kitchen.
        </p>
      </>
    ),
  };
case "croatia-coastline":
  return {
    slug,
    title: "Sailing Croatia’s Stunning Adriatic Coastline",
    description:
      "Experience the dazzling Dalmatian coast—where historic towns, crystal waters, and Mediterranean charm meet.",
    image:
      "https://images.unsplash.com/photo-1601134467661-69aa76cf96a3?auto=format&fit=crop&w=1400&q=80",
    author: "Ana Maric",
    content: (
      <>
        <p>
          Croatia’s coastline is a sailing dream—over 1,000 islands dotting the turquoise Adriatic, medieval towns perched on cliffs, and coves where time seems to pause.
        </p>

        <div className="flex justify-center my-6">
          <Image
            src="https://images.unsplash.com/photo-1562790351-d273a961d9c1?auto=format&fit=crop&w=800&q=80"
            alt="Croatian Islands"
            width={300}
            height={300}
            className="rounded-full border-4 border-orange-300 shadow-md"
          />
        </div>

        <p>
          Begin in Dubrovnik—its ancient walls and red rooftops cascading into the sea. Sail north through Hvar’s vibrant harbor and into the peaceful, pine-fringed bays of Korčula and Vis.
        </p>

        <Image
          src="https://images.unsplash.com/photo-1554390305-73548f38b11d?auto=format&fit=crop&w=1400&q=80"
          alt="Hvar Town Sunset"
          width={1200}
          height={600}
          className="my-8 rounded-xl"
        />

        <h2>Island-Hopping Magic</h2>
        <p>
          Each island tells a story—Hvar’s lavender hills, Brač’s famous Zlatni Rat beach, and Mljet’s saltwater lakes nestled in a national park. Feast on fresh seafood at seaside konobas and sip local wines under starlit skies.
        </p>

        <div className="flex justify-center my-6">
          <Image
            src="https://images.unsplash.com/photo-1620560137286-3c58f3143052?auto=format&fit=crop&w=800&q=80"
            alt="Zlatni Rat Beach"
            width={300}
            height={300}
            className="rounded-full border-4 border-orange-300 shadow-md"
          />
        </div>

        <p>
          Whether you're on a luxury yacht or a modest sailboat, Croatia’s coastline delivers a rhythm of beauty, simplicity, and unforgettable adventure.
        </p>
      </>
    ),
  };
case "iceland-adventure":
  return {
    slug,
    title: "Iceland’s Ice & Fire – Natural Wonders Unleashed",
    description:
      "Traverse the land of volcanoes and glaciers—where geysers erupt, waterfalls thunder, and the northern lights dance.",
    image:
      "https://images.unsplash.com/photo-1582188451845-e5f6e395f913?auto=format&fit=crop&w=1400&q=80",
    author: "Magnús Þórsson",
    content: (
      <>
        <p>
          Iceland is a land of contrasts—where fire meets ice in a symphony of elemental power. Begin your journey with the famed Golden Circle, where Þingvellir’s rift valley, Geysir’s bursts, and Gullfoss’s roaring cascades await.
        </p>

        <div className="flex justify-center my-6">
          <Image
            src="https://images.unsplash.com/photo-1551907234-b5f54c66a05d?auto=format&fit=crop&w=800&q=80"
            alt="Geysir Iceland"
            width={300}
            height={300}
            className="rounded-full border-4 border-orange-300 shadow-md"
          />
        </div>

        <p>
          Head south to Skógafoss and Seljalandsfoss—iconic waterfalls where rainbows often appear. Walk on the Solheimajökull glacier or bask in the warm glow of the Blue Lagoon’s mineral-rich waters.
        </p>

        <Image
          src="https://images.unsplash.com/photo-1528123098051-bc5a5d03e5cc?auto=format&fit=crop&w=1400&q=80"
          alt="Iceland Glacier"
          width={1200}
          height={600}
          className="my-8 rounded-xl"
        />

        <h2>The Land of Northern Lights</h2>
        <p>
          Travel in winter and chase the aurora borealis—vivid green and violet waves that dance across dark skies. In summer, the midnight sun bathes volcanic highlands and mossy lava fields in ethereal light.
        </p>

        <div className="flex justify-center my-6">
          <Image
            src="https://images.unsplash.com/photo-1549887534-2c688e08d61e?auto=format&fit=crop&w=800&q=80"
            alt="Aurora Borealis"
            width={300}
            height={300}
            className="rounded-full border-4 border-orange-300 shadow-md"
          />
        </div>

        <p>
          Whether soaking in a hidden hot spring, exploring an ice cave, or hiking past volcanic craters—Iceland promises a raw, unforgettable connection to nature.
        </p>
      </>
    ),
  };


    default:
      return undefined;
  }
}
