"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { useAuth } from "@/components/auth-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { CreativeLogo } from "@/components/creative-logo"
import { Mail, Lock, Eye, EyeOff } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const backgroundImages = [
  "/images/destinations/goa.jpg",
  "/images/destinations/kerala.jpg",
  "/images/destinations/rajasthan.jpg",
  "/images/destinations/kashmir.jpg",
  "/images/destinations/himachal.jpg",
  "/images/destinations/europe/eiffel-tower-paris.jpg",
  "/images/destinations/asia/tokyo-japan.jpg",
  "/images/destinations/africa/cape-town-south-africa.jpg",
]

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [currentBgIndex, setCurrentBgIndex] = useState(0)
  const { login } = useAuth()
  const router = useRouter()
  const { toast } = useToast()

  // Change background every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % backgroundImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const success = await login(email, password)
      if (success) {
        toast({
          title: "Welcome back!",
          description: "You've successfully logged in to your vintage travel account.",
        })
        router.push("/dashboard")
      } else {
        toast({
          title: "Login failed",
          description: "Please check your email and password and try again.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleSocialLogin = (provider: string) => {
    toast({
      title: `${provider} Login`,
      description: `${provider} authentication would be implemented here.`,
    })
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Changing Background Images */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentBgIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt="Travel destination"
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />

        <section className="py-20 flex items-center justify-center min-h-[80vh]">
          <div className="max-w-md w-full mx-4">
            <Card className="retro-card border-vintage-orange shadow-2xl bg-white bg-opacity-95 backdrop-blur-sm">
              <CardHeader className="text-center pb-8">
                <div className="flex justify-center mb-4">
                  <CreativeLogo size="large" />
                </div>
                <CardTitle className="font-cinzel text-3xl font-bold text-vintage-orange">Welcome Back</CardTitle>
                <p className="font-garamond text-lg text-orange-800 mt-2">Sign in to your HAMSAFAR account</p>
              </CardHeader>

              <CardContent className="px-8 pb-8">
                {/* Social Login Buttons */}
                <div className="space-y-3 mb-6">
                  <Button
                    onClick={() => handleSocialLogin("Google")}
                    variant="outline"
                    className="w-full border-vintage-orange text-orange-800 hover:bg-vintage-orange hover:text-white bg-white"
                  >
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="currentColor"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    Continue with Google
                  </Button>

                  <Button
                    onClick={() => handleSocialLogin("Facebook")}
                    variant="outline"
                    className="w-full border-vintage-teal text-orange-800 hover:bg-vintage-teal hover:text-white bg-white"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    Continue with Facebook
                  </Button>
                </div>

                <div className="relative mb-6">
                  <Separator className="bg-vintage-orange" />
                  <div className="absolute inset-0 flex justify-center">
                    <span className="bg-white px-4 text-orange-800 font-garamond">or</span>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block font-garamond font-bold text-orange-800 mb-2">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-600 h-5 w-5" />
                      <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="pl-10 bg-white border-vintage-orange text-orange-800 placeholder-orange-600"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-garamond font-bold text-orange-800 mb-2">Password</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-600 h-5 w-5" />
                      <Input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="pl-10 pr-10 bg-white border-vintage-orange text-orange-800 placeholder-orange-600"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-orange-600"
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="remember"
                        checked={rememberMe}
                        onCheckedChange={(checked) => setRememberMe(checked === true)}
                        className="border-vintage-orange"
                      />
                      <label htmlFor="remember" className="font-garamond text-sm text-orange-800">
                        Remember me
                      </label>
                    </div>
                    <Link
                      href="/forgot-password"
                      className="font-garamond text-vintage-orange hover:text-orange-600 transition-colors text-sm"
                    >
                      Forgot password?
                    </Link>
                  </div>

                  <Button type="submit" className="retro-button w-full text-lg py-3" disabled={isLoading}>
                    {isLoading ? "Signing In..." : "Sign In"}
                  </Button>
                </form>

                <div className="mt-8 text-center">
                  <p className="font-garamond text-orange-800">
                    Don't have an account?{" "}
                    <Link
                      href="/signup"
                      className="font-bold text-vintage-orange hover:text-orange-600 transition-colors"
                    >
                      Sign up for free
                    </Link>
                  </p>
                </div>

                {/* Terms and Privacy */}
                <div className="mt-6 text-center">
                  <p className="font-garamond text-xs text-orange-700">
                    By signing in, you agree to our{" "}
                    <Link href="/terms" className="text-vintage-orange hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-vintage-orange hover:underline">
                      Privacy Policy
                    </Link>
                  </p>
                </div>

                {/* Decorative vintage border */}
                <div className="mt-8 pt-8 border-t-2 border-vintage-orange border-dashed">
                  <p className="text-center font-garamond text-sm text-orange-700 italic">
                    "Your journey begins with HAMSAFAR"
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  )
}
