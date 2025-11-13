"use client"

import type React from "react"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    travelType: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting HAMSAFAR. We'll get back to you within 24 hours.",
    })

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      travelType: "",
    })
    setIsSubmitting(false)
  }

  return (
  <div className="min-h-screen bg-vintage-pattern dark:bg-gray-950 text-orange-900 dark:text-gray-100 transition-colors duration-300">
    <Navbar />

    {/* Hero Section */}
    <section className="py-20 bg-gradient-to-r from-vintage-cream via-vintage-beige to-vintage-cream dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-cinzel text-6xl font-bold text-vintage-orange mb-6">Contact HAMSAFAR</h1>
        <p className="font-garamond text-2xl text-orange-800 dark:text-vintage-orange max-w-3xl mx-auto">
          Ready to start your next adventure? Get in touch with your travel buddy
        </p>
      </div>
    </section>

    {/* Contact Content */}
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <Card className="retro-card border-vintage-orange dark:border-orange-500 bg-white dark:bg-gray-800 text-orange-900 dark:text-gray-100">
              <CardHeader>
                <CardTitle className="font-cinzel text-2xl text-vintage-orange flex items-center">
                  <MessageCircle className="h-6 w-6 mr-2" />
                  Get In Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-vintage-orange mt-1" />
                  <div>
                    <h3 className="font-garamond font-bold text-orange-800 dark:text-vintage-orange">Email Us</h3>
                    <p className="font-garamond text-orange-700 dark:text-orange-300">hello@hamsafar.com</p>
                    <p className="font-garamond text-orange-700 dark:text-orange-300">bookings@hamsafar.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-vintage-teal mt-1" />
                  <div>
                    <h3 className="font-garamond font-bold text-orange-800 dark:text-vintage-orange">Call Us</h3>
                    <p className="font-garamond text-orange-700 dark:text-orange-300">+91 98765 43210</p>
                    <p className="font-garamond text-orange-700 dark:text-orange-300">+91 87654 32109</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-vintage-red mt-1" />
                  <div>
                    <h3 className="font-garamond font-bold text-orange-800 dark:text-vintage-orange">Visit Us</h3>
                    <p className="font-garamond text-orange-700 dark:text-orange-300">
                      123 Travel Street
                      <br />
                      New Delhi, India 110001
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-vintage-orange mt-1" />
                  <div>
                    <h3 className="font-garamond font-bold text-orange-800 dark:text-vintage-orange">Office Hours</h3>
                    <p className="font-garamond text-orange-700 dark:text-orange-300">
                      Mon - Fri: 9:00 AM - 7:00 PM
                      <br />
                      Sat: 10:00 AM - 5:00 PM
                      <br />
                      Sun: Closed
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="retro-card border-vintage-red dark:border-red-500 bg-white dark:bg-gray-800 text-orange-900 dark:text-gray-100">
              <CardContent className="p-6">
                <h3 className="font-cinzel text-xl font-bold text-vintage-red mb-4">24/7 Travel Support</h3>
                <p className="font-garamond text-orange-800 dark:text-vintage-orange mb-4">
                  Need immediate assistance during your trip? Our emergency support team is always available.
                </p>
                <div className="space-y-2">
                  <p className="font-garamond font-bold text-vintage-red">Emergency Hotline:</p>
                  <p className="font-garamond text-orange-800 dark:text-orange-300">+91 99999 88888</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="retro-card border-vintage-teal dark:border-teal-500 bg-white dark:bg-gray-800 text-orange-900 dark:text-gray-100">
              <CardHeader>
                <CardTitle className="font-cinzel text-3xl text-vintage-teal">Send Us a Message</CardTitle>
                <p className="font-garamond text-lg text-orange-800 dark:text-vintage-orange">
                  Tell us about your dream destination and we'll help make it happen
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-garamond font-bold text-orange-800 dark:text-vintage-orange mb-2">Full Name *</label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className="bg-white dark:bg-gray-700 border-vintage-teal dark:border-teal-500 text-orange-800 dark:text-white placeholder-orange-600 dark:placeholder-gray-400"
                        required
                      />
                    </div>
                    <div>
                      <label className="block font-garamond font-bold text-orange-800 dark:text-vintage-orange mb-2">Email Address *</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        className="bg-white dark:bg-gray-700 border-vintage-teal dark:border-teal-500 text-orange-800 dark:text-white placeholder-orange-600 dark:placeholder-gray-400"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-garamond font-bold text-orange-800 dark:text-vintage-orange mb-2">Phone Number</label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                        className="bg-white dark:bg-gray-700 border-vintage-teal dark:border-teal-500 text-orange-800 dark:text-white placeholder-orange-600 dark:placeholder-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block font-garamond font-bold text-orange-800 dark:text-vintage-orange mb-2">Travel Interest</label>
                      <Select
                        value={formData.travelType}
                        onValueChange={(value) => setFormData({ ...formData, travelType: value })}
                      >
                        <SelectTrigger className="bg-white dark:bg-gray-700 border-vintage-teal dark:border-teal-500 text-orange-800 dark:text-white">
                          <SelectValue placeholder="Select travel type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="domestic">Domestic India Tours</SelectItem>
                          <SelectItem value="international">International Tours</SelectItem>
                          <SelectItem value="adventure">Adventure Travel</SelectItem>
                          <SelectItem value="cultural">Cultural Experiences</SelectItem>
                          <SelectItem value="luxury">Luxury Travel</SelectItem>
                          <SelectItem value="budget">Budget Travel</SelectItem>
                          <SelectItem value="group">Group Tours</SelectItem>
                          <SelectItem value="custom">Custom Itinerary</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-garamond font-bold text-orange-800 dark:text-vintage-orange mb-2">Subject *</label>
                    <Input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      className="bg-white dark:bg-gray-700 border-vintage-teal dark:border-teal-500 text-orange-800 dark:text-white placeholder-orange-600 dark:placeholder-gray-400"
                      required
                    />
                  </div>

                  <div>
                    <label className="block font-garamond font-bold text-orange-800 dark:text-vintage-orange mb-2">Message *</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your travel plans, preferences, budget, or any questions you have..."
                      className="bg-white dark:bg-gray-700 border-vintage-teal dark:border-teal-500 text-orange-800 dark:text-white placeholder-orange-600 dark:placeholder-gray-400 min-h-[120px]"
                      required
                    />
                  </div>

                  <Button type="submit" className="retro-button w-full text-lg py-4" disabled={isSubmitting}>
                    {isSubmitting ? (
                      "Sending Message..."
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>

       {/* Map Section */}
    <section className="py-20 bg-vintage-beige dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-cinzel text-4xl font-bold text-vintage-orange mb-4">Find Us</h2>
          <p className="font-garamond text-xl text-orange-800 dark:text-orange-300">Visit our office in the heart of New Delhi</p>
        </div>

        <Card className="retro-card border-vintage-orange dark:border-orange-500 bg-white dark:bg-gray-800 text-orange-900 dark:text-gray-100">
          <CardContent className="p-8">
            <div className="h-96 bg-vintage-cream dark:bg-gray-700 rounded-lg flex items-center justify-center border-2 border-vintage-orange dark:border-orange-500">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-vintage-orange dark:text-orange-400 mx-auto mb-4" />
                <p className="font-garamond text-lg text-orange-800 dark:text-orange-300">Interactive map would be displayed here</p>
                <p className="font-garamond text-sm text-orange-700 dark:text-orange-400 mt-2">
                  123 Travel Street, New Delhi, India 110001
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
      <Footer />
    </div>
  )
}
