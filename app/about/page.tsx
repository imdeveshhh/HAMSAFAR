import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Award, Globe, Plane, MapPin, Mail } from "lucide-react"
import { Instagram, Linkedin, Github} from "lucide-react";



export default function AboutPage() {
  return (
    <div className="min-h-screen bg-vintage-pattern dark:bg-gray-900 dark:text-vintage-orange transition-colors">
      <Navbar />

      {/* Hero Section */}
    <section className="py-20 bg-gradient-to-r from-vintage-cream via-vintage-beige to-vintage-cream dark:from-orange-950 dark:via-orange-900 dark:to-orange-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-cinzel text-6xl font-bold text-vintage-orange mb-6">About HAMSAFAR</h1>
        <p className="font-garamond text-2xl text-orange-800 dark:text-vintage-orange max-w-3xl mx-auto">
          Your Trusted Travel Buddy for Discovering India's Incredible Heritage and Beyond
        </p>
      </div>
    </section>

         {/* Our Story */}
    <section className="py-20 bg-vintage-beige dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-cinzel text-4xl font-bold text-vintage-orange mb-6">Our Story</h2>
            <div className="space-y-6 font-garamond text-lg text-orange-800 dark:text-vintage-orange">
              <p>
                HAMSAFAR, meaning "travel companion" in Hindi and Urdu, was born from a passion for showcasing India's
                incredible diversity and connecting travelers with authentic experiences. Founded in 2025, we began as
                a small team of travel enthusiasts who believed that every journey should be more than just a trip—it
                should be a transformative experience.
              </p>
              <p>
                Our founders, having traveled extensively across India and internationally, noticed a gap in the
                market for authentic, culturally immersive travel experiences that honor local traditions while
                providing modern comfort. Thus, HAMSAFAR was created to be your trusted travel buddy, guiding you
                through India's rich tapestry of cultures, landscapes, and experiences.With a focus on sustainable
                tourism, we aim to empower local communities and promote responsible travel practices. Our mission is
                to create journeys that not only delight the senses but also foster a deeper understanding of the places
                we visit.
              </p>
              <p>
                Today, we specialize in curating unique travel experiences across India's diverse states—from the
                backwaters of Kerala to the deserts of Rajasthan, from the mountains of Kashmir to the beaches of Goa.
                We also offer carefully selected international destinations that complement our philosophy of
                authentic, meaningful travel.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="retro-card p-8 border-vintage-orange dark:border-vintage-orange">
              <Image
                src="/images/hero-bg.png"
                alt="HAMSAFAR Team"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <div className="mt-6 text-center">
                <p className="font-garamond text-orange-800 dark:text-vintage-orange italic">
                  "Travel is not just about seeing new places, it's about discovering new perspectives"
                </p>
                <p className="font-cinzel font-bold text-vintage-orange mt-2">- HAMSAFAR Team</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
       {/* Our Values */}
    <section className="py-20 bg-vintage-cream dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-4xl font-bold text-vintage-orange mb-4">Our Values</h2>
          <p className="font-garamond text-xl text-orange-800 dark:text-vintage-orange max-w-2xl mx-auto">
            The principles that guide every HAMSAFAR journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="retro-card border-vintage-orange hover:shadow-xl transition-shadow dark:border-vintage-orange">
            <CardContent className="p-8 text-center">
              <Heart className="h-16 w-16 text-vintage-orange mx-auto mb-6" />
              <h3 className="font-cinzel text-xl font-bold text-vintage-orange mb-4">Authentic Experiences</h3>
              <p className="font-garamond text-orange-800 dark:text-vintage-orange">
                We believe in genuine cultural immersion and authentic local experiences that create lasting memories.
              </p>
            </CardContent>
          </Card>

          <Card className="retro-card border-vintage-teal hover:shadow-xl transition-shadow dark:border-vintage-teal">
            <CardContent className="p-8 text-center">
              <Users className="h-16 w-16 text-vintage-teal mx-auto mb-6" />
              <h3 className="font-cinzel text-xl font-bold text-vintage-teal mb-4">Community Focus</h3>
              <p className="font-garamond text-orange-800 dark:text-vintage-orange">
                Supporting local communities and promoting sustainable tourism that benefits everyone.
              </p>
            </CardContent>
          </Card>

          <Card className="retro-card border-vintage-red hover:shadow-xl transition-shadow dark:border-vintage-red">
            <CardContent className="p-8 text-center">
              <Award className="h-16 w-16 text-vintage-red mx-auto mb-6" />
              <h3 className="font-cinzel text-xl font-bold text-vintage-red mb-4">Excellence</h3>
              <p className="font-garamond text-orange-800 dark:text-vintage-orange">
                Commitment to providing exceptional service and unforgettable travel experiences.
              </p>
            </CardContent>
          </Card>

          <Card className="retro-card border-vintage-orange hover:shadow-xl transition-shadow dark:border-vintage-orange">
            <CardContent className="p-8 text-center">
              <Globe className="h-16 w-16 text-vintage-orange mx-auto mb-6" />
              <h3 className="font-cinzel text-xl font-bold text-vintage-orange mb-4">Cultural Bridge</h3>
              <p className="font-garamond text-orange-800 dark:text-vintage-orange">
                Connecting travelers with diverse cultures and fostering understanding through travel.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

     {/* Team Section */}
    <section className="py-20 bg-gradient-to-r from-vintage-beige to-vintage-cream dark:from-orange-950 dark:to-orange-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-4xl font-bold text-vintage-orange mb-4">Meet Our Team</h2>
          <p className="font-garamond text-xl text-orange-800 dark:text-vintage-orange">
            Passionate travel experts dedicated to creating your perfect journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="postcard-border hover:shadow-2xl transition duration-300 hover:scale-[1.02]">
  <CardContent className="p-8 text-center">
    {/* Profile Image */}
    <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 border-4 border-vintage-orange shadow-lg">
      <Image
        src="/images/ankit.png" // Replace with actual image path
        alt="Ankit Mishra"
        width={96}
        height={96}
        className="object-cover w-full h-full"
      />
    </div>

    {/* Name and Title */}
    <h3 className="font-cinzel text-xl font-bold text-vintage-orange mb-1">Ankit Mishra</h3>
    <p className="font-garamond text-vintage-teal mb-4">Travel Event Manager</p>

    {/* Description */}
    <p className="font-garamond text-orange-800 dark:text-vintage-orange mb-6">
      Ankit turns destinations into unforgettable celebrations. From curated group adventures to immersive local
      events, his expertise ensures every journey is filled with excitement, rhythm, and seamless logistics.
    </p>

    {/* Social Icons */}
    <div className="flex justify-center gap-6">
      <a
        href="https://www.instagram.com/a_to_z_mishra/?__pwa=1" // Replace with real username
        target="_blank"
        rel="noopener noreferrer"
        className="text-vintage-orange hover:text-orange-600 transition"
      >
        <Instagram className="h-6 w-6" />
      </a>
      <a
        href="https://linkedin.com/in/ankitmishra" // Replace with real username
        target="_blank"
        rel="noopener noreferrer"
        className="text-vintage-orange hover:text-orange-600 transition"
      >
        <Linkedin className="h-6 w-6" />
      </a>
      {/* GitHub */}
      <a
        href="https://github.com/yourusername" // 🔁 Replace with your GitHub link
        target="_blank"
        rel="noopener noreferrer"
        className="text-vintage-orange hover:text-orange-600 transition"
      >
        <Github className="h-6 w-6" />
      </a>
    </div>
  </CardContent>
</Card>


          <Card className="postcard-border hover:shadow-2xl transition duration-300 hover:scale-[1.02]">
  <CardContent className="p-8 text-center">
    {/* Profile Image */}
    <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 border-4 border-vintage-orange shadow-lg">
      <Image
        src="/images/devesh.png" // 👉 Replace with your actual uploaded image path
        alt="Devesh Dubale"
        width={96}
        height={96}
        className="object-cover w-full h-full"
      />
    </div>

    {/* Name and Title */}
    <h3 className="font-cinzel text-xl font-bold text-vintage-orange mb-1">Devesh Dubale</h3>
    <p className="font-garamond text-vintage-teal mb-4">Founder & CEO, HAMSAFAR</p>

    {/* Description */}
    <p className="font-garamond text-orange-800 dark:text-vintage-orange mb-6">
      Creator of the HAMSAFAR travel platform, Devesh is passionate about building immersive, tech-driven journeys
      that celebrate culture, discovery, and modern exploration across India and beyond.
       With 15+ years in travel industry, his passion for India's heritage drives HAMSAFAR's authentic experiences.
    </p>

    {/* Social Icons */}
    <div className="flex justify-center gap-6">
      {/* Instagram */}
      <a
        href="https://www.instagram.com/im_deveshhh/?__pwa=1" // 🔁 Replace with your real link
        target="_blank"
        rel="noopener noreferrer"
        className="text-vintage-orange hover:text-orange-600 transition"
      >
        <Instagram className="h-6 w-6" />
      </a>

      {/* LinkedIn */}
      <a
        href="https://linkedin.com/in/yourusername" // 🔁 Replace with your real link
        target="_blank"
        rel="noopener noreferrer"
        className="text-vintage-orange hover:text-orange-600 transition"
      >
        <Linkedin className="h-6 w-6" />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/yourusername" // 🔁 Replace with your GitHub link
        target="_blank"
        rel="noopener noreferrer"
        className="text-vintage-orange hover:text-orange-600 transition"
      >
        <Github className="h-6 w-6" />
      </a>
    </div>
  </CardContent>
</Card>


          <Card className="postcard-border hover:shadow-2xl transition duration-300 hover:scale-[1.02]">
  <CardContent className="p-8 text-center">
    {/* Profile Image */}
    <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 border-4 border-vintage-orange shadow-lg">
      <Image
        src="/images/atul.png" // Replace with actual image path
        alt="Atul Singh"
        width={96}
        height={96}
        className="object-cover w-full h-full"
      />
    </div>

    {/* Name and Title */}
    <h3 className="font-cinzel text-xl font-bold text-vintage-orange mb-1">Atul Singh</h3>
    <p className="font-garamond text-vintage-teal mb-4">Travel Expert</p>

    {/* Description */}
    <p className="font-garamond text-orange-800 dark:text-vintage-orange mb-6">
      With deep knowledge of India’s hidden gems and cultural routes, Atul crafts personalized travel experiences
      that blend heritage with comfort. From the Himalayas to Kerala, his insights make every trip unforgettable..
    </p>

    {/* Social Icons */}
    <div className="flex justify-center gap-6">
      <a
        href="https://instagram.com/atulsingh" // Replace with real username
        target="_blank"
        rel="noopener noreferrer"
        className="text-vintage-orange hover:text-orange-600 transition"
      >
        <Instagram className="h-6 w-6" />
      </a>
      <a
        href="https://linkedin.com/in/atulsingh" // Replace with real username
        target="_blank"
        rel="noopener noreferrer"
        className="text-vintage-orange hover:text-orange-600 transition"
      >
        <Linkedin className="h-6 w-6" />
      </a>
      {/* GitHub */}
      <a
        href="https://github.com/yourusername" // 🔁 Replace with your GitHub link
        target="_blank"
        rel="noopener noreferrer"
        className="text-vintage-orange hover:text-orange-600 transition"
      >
        <Github className="h-6 w-6" />
      </a>
    </div>
  </CardContent>
</Card>

        </div>
      </div>
    </section>

    {/* Statistics */}
    <section className="py-20 bg-gradient-to-r from-orange-900 via-red-900 to-orange-900 dark:from-black dark:via-red-950 dark:to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-4xl font-bold text-vintage-cream dark:text-vintage-orange mb-4">Our Journey So Far</h2>
          <p className="font-garamond text-xl text-vintage-cream dark:text-vintage-orange">
            Numbers that tell our story of creating memorable experiences
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="font-cinzel text-5xl font-bold text-vintage-orange dark:text-vintage-orange mb-2">5000+</div>
            <p className="font-garamond text-xl text-vintage-cream dark:text-vintage-orange">Happy Travelers</p>
          </div>
          <div>
            <div className="font-cinzel text-5xl font-bold text-vintage-orange dark:text-vintage-orange mb-2">28</div>
            <p className="font-garamond text-xl text-vintage-cream dark:text-vintage-orange">Indian States Covered</p>
          </div>
          <div>
            <div className="font-cinzel text-5xl font-bold text-vintage-orange dark:text-vintage-orange mb-2">15</div>
            <p className="font-garamond text-xl text-vintage-cream dark:text-vintage-orange">International Destinations</p>
          </div>
          <div>
            <div className="font-cinzel text-5xl font-bold text-vintage-orange dark:text-vintage-orange mb-2">4.9</div>
            <p className="font-garamond text-xl text-vintage-cream dark:text-vintage-orange">Average Rating</p>
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
