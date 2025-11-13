import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, Clock, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "10 Hidden Gems in Rajasthan You Must Visit",
    excerpt:
      "Discover the lesser-known treasures of the Land of Kings, from secret lakes to ancient stepwells that showcase Rajasthan's rich heritage.",
    image: "/images/destinations/rajasthan.jpg",
    author: "Arjun Sharma",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Destinations",
    featured: true,
  },
  {
    id: 2,
    title: "Kerala Backwaters: A Complete Travel Guide",
    excerpt:
      "Everything you need to know about exploring Kerala's serene backwaters, from houseboat stays to local cuisine and cultural experiences.",
    image: "/images/destinations/kerala.jpg",
    author: "Priya Patel",
    date: "March 12, 2024",
    readTime: "12 min read",
    category: "Travel Guide",
    featured: true,
  },
  {
    id: 3,
    title: "Best Time to Visit Kashmir: A Seasonal Guide",
    excerpt:
      "Plan your Kashmir trip perfectly with our comprehensive guide to the best seasons, weather conditions, and activities throughout the year.",
    image: "/images/destinations/kashmir.jpg",
    author: "Rahul Kumar",
    date: "March 10, 2024",
    readTime: "6 min read",
    category: "Travel Tips",
    featured: false,
  },
  {
    id: 4,
    title: "Goa Beyond Beaches: Cultural Experiences",
    excerpt:
      "Explore Goa's rich Portuguese heritage, spice plantations, and local traditions that go far beyond its famous beaches.",
    image: "/images/destinations/goa.jpg",
    author: "Priya Patel",
    date: "March 8, 2024",
    readTime: "10 min read",
    category: "Culture",
    featured: false,
  },
  {
    id: 5,
    title: "Himalayan Adventure: Trekking in Himachal Pradesh",
    excerpt:
      "A comprehensive guide to the best trekking routes in Himachal Pradesh, from beginner-friendly trails to challenging high-altitude adventures.",
    image: "/images/destinations/himachal.jpg",
    author: "Rahul Kumar",
    date: "March 5, 2024",
    readTime: "15 min read",
    category: "Adventure",
    featured: false,
  },
  {
    id: 6,
    title: "Spiritual Journey: Rishikesh and Haridwar Guide",
    excerpt:
      "Discover the spiritual heart of India with our guide to yoga, meditation, and sacred experiences in these holy cities.",
    image: "/images/destinations/rishikesh.jpg",
    author: "Arjun Sharma",
    date: "March 3, 2024",
    readTime: "9 min read",
    category: "Spiritual",
    featured: false,
  },
]

const categories = ["All", "Destinations", "Travel Guide", "Travel Tips", "Culture", "Adventure", "Spiritual"]

export default function BlogPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
  <div className="min-h-screen bg-vintage-pattern dark:bg-gray-900 dark:text-vintage-orange transition-colors">
    <Navbar />

    {/* Hero Section */}
    <section className="py-20 bg-gradient-to-r from-vintage-cream via-vintage-beige to-vintage-cream dark:from-orange-950 dark:via-orange-900 dark:to-orange-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-cinzel text-6xl font-bold text-vintage-orange mb-6">HAMSAFAR Travel Blog</h1>
        <p className="font-garamond text-2xl text-orange-800 dark:text-vintage-orange max-w-3xl mx-auto">
          Stories, guides, and tips from your trusted travel buddy
        </p>
      </div>
    </section>

    {/* Featured Posts */}
    <section className="py-16 bg-vintage-beige dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-cinzel text-4xl font-bold text-vintage-orange mb-4">Featured Stories</h2>
          <p className="font-garamond text-xl text-orange-800 dark:text-vintage-orange">
            Our most popular travel guides and destination insights
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {featuredPosts.map((post) => (
            <Card key={post.id} className="retro-card border-vintage-orange hover:shadow-xl transition-shadow dark:border-vintage-orange">
              <div className="relative h-64 overflow-hidden rounded-t-lg">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-vintage-orange text-white">Featured</Badge>
                </div>
              </div>
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <Badge variant="outline" className="border-vintage-teal text-vintage-teal">
                    {post.category}
                  </Badge>
                  <div className="flex items-center text-sm text-orange-700 dark:text-vintage-orange font-garamond">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                </div>
                <h3 className="font-cinzel text-2xl font-bold text-vintage-orange mb-3">{post.title}</h3>
                <p className="font-garamond text-orange-800 dark:text-vintage-orange mb-6">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-orange-700 dark:text-vintage-orange font-garamond">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <Link href={`/blog/${post.id}`}>
                    <div className="flex items-center text-vintage-orange hover:text-orange-600 font-garamond font-bold">
                      Read More <ArrowRight className="h-4 w-4 ml-1" />
                    </div>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* Categories */}
    <section className="py-8 bg-vintage-cream dark:bg-gray-900 border-b-4 border-vintage-orange">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <Badge
              key={category}
              variant="outline"
              className="cursor-pointer border-vintage-orange text-vintage-orange hover:bg-vintage-orange hover:text-white px-4 py-2 font-garamond"
            >
              {category}
            </Badge>
          ))}
        </div>
      </div>
    </section>

    {/* All Posts */}
    <section className="py-20 bg-vintage-cream dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-cinzel text-4xl font-bold text-vintage-orange mb-4">Latest Articles</h2>
          <p className="font-garamond text-xl text-orange-800 dark:text-vintage-orange">
            Discover more travel insights and destination guides
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <Card key={post.id} className="postcard-border hover:shadow-xl transition-shadow dark:border-vintage-orange">
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="outline" className="border-vintage-teal text-vintage-teal text-xs">
                    {post.category}
                  </Badge>
                  <div className="flex items-center text-xs text-orange-700 dark:text-vintage-orange font-garamond">
                    <Clock className="h-3 w-3 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <h3 className="font-cinzel text-xl font-bold text-vintage-orange mb-3">{post.title}</h3>
                <p className="font-garamond text-orange-800 dark:text-vintage-orange text-sm mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs text-orange-700 dark:text-vintage-orange font-garamond">
                    <User className="h-3 w-3 mr-1" />
                    {post.author}
                  </div>
                  <Link href={`/blog/${post.id}`}>
                    <div className="flex items-center text-vintage-orange hover:text-orange-600 font-garamond font-bold text-sm">
                      Read <ArrowRight className="h-3 w-3 ml-1" />
                    </div>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* Newsletter Signup */}
    <section className="py-20 bg-gradient-to-r from-orange-900 via-red-900 to-orange-900 dark:from-black dark:via-red-950 dark:to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-cinzel text-4xl font-bold text-vintage-cream dark:text-vintage-orange mb-4">Stay Updated</h2>
        <p className="font-garamond text-xl text-vintage-cream dark:text-vintage-orange mb-8">
          Subscribe to get the latest travel stories and destination guides from HAMSAFAR
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg bg-vintage-cream border-vintage-orange text-orange-800 dark:bg-gray-800 dark:text-vintage-orange placeholder-orange-600 dark:placeholder-vintage-orange"
          />
          <button className="retro-button whitespace-nowrap px-6 py-3">Subscribe</button>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);
}