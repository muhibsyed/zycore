"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      company: "TechStart Inc.",
      image: "/placeholder.svg?height=100&width=100&text=Sarah+J",
      content:
        "Zycore Solution transformed our online presence completely. Their attention to detail and creative approach exceeded our expectations. The website they built for us has significantly increased our conversion rates and customer engagement.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      position: "Marketing Director",
      company: "GrowthCo",
      image: "/placeholder.svg?height=100&width=100&text=Michael+C",
      content:
        "Working with Zycore was a game-changer for our brand. They didn't just design a logo; they created a complete brand identity that resonates with our target audience. The results speak for themselves - our brand recognition has increased by 300%.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      position: "Founder",
      company: "Creative Studio",
      image: "/placeholder.svg?height=100&width=100&text=Emily+R",
      content:
        "The team at Zycore Solution is incredibly talented and professional. They delivered our project on time and within budget, while maintaining the highest quality standards throughout the process. I couldn't be happier with the results.",
      rating: 5,
    },
    {
      name: "David Thompson",
      position: "CTO",
      company: "InnovateLab",
      image: "/placeholder.svg?height=100&width=100&text=David+T",
      content:
        "Exceptional work! Zycore Solution built us a robust e-commerce platform that handles our growing business needs perfectly. Their technical expertise and ongoing support have been invaluable to our success.",
      rating: 5,
    },
    {
      name: "Lisa Wang",
      position: "Brand Manager",
      company: "StyleCorp",
      image: "/placeholder.svg?height=100&width=100&text=Lisa+W",
      content:
        "The branding package Zycore created for us was beyond our wildest dreams. Every element was thoughtfully designed and perfectly aligned with our vision. Our customers love the new look and feel of our brand.",
      rating: 5,
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-white dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
          }}
          className="absolute top-1/3 left-1/3 w-96 h-96 bg-purple-200/20 dark:bg-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 mb-6"
          >
            <Quote className="w-4 h-4 text-purple-600 dark:text-purple-400 mr-2" />
            <span className="text-purple-700 dark:text-purple-300 text-sm font-medium">Testimonials</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            What Our{" "}
            <span className="bg-gradient-to-r from-purple-600 to-purple-700 dark:from-purple-400 dark:to-purple-600 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it - hear from our satisfied clients who have experienced the Zycore
            difference.
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -100, scale: 0.9 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <Card className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/50 backdrop-blur-sm relative overflow-hidden shadow-xl">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 dark:from-purple-500/5 to-transparent" />

                <CardContent className="p-12 text-center relative z-10">
                  {/* Quote Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-8"
                  >
                    <Quote className="h-12 w-12 text-purple-300 dark:text-purple-400/50 mx-auto" />
                  </motion.div>

                  {/* Avatar */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mb-8"
                  >
                    <div className="relative w-24 h-24 mx-auto mb-6">
                      <Image
                        src={testimonials[currentIndex].image || "/placeholder.svg"}
                        alt={testimonials[currentIndex].name}
                        width={96}
                        height={96}
                        className="rounded-full border-4 border-purple-200 dark:border-purple-500/20 shadow-2xl"
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-200/20 dark:from-purple-400/20 to-transparent" />
                    </div>

                    {/* Rating */}
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                        >
                          <Star className="h-6 w-6 text-yellow-400 fill-current mx-1" />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Content */}
                  <motion.blockquote
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 italic leading-relaxed max-w-4xl mx-auto"
                  >
                    "{testimonials[currentIndex].content}"
                  </motion.blockquote>

                  {/* Author Info */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-purple-600 dark:text-purple-400 text-lg">
                      {testimonials[currentIndex].position}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">{testimonials[currentIndex].company}</p>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-12 space-x-6">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="outline"
                size="sm"
                onClick={prevTestimonial}
                className="border-purple-300 dark:border-purple-500/50 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-500/10 hover:border-purple-400 bg-transparent backdrop-blur-sm p-3"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
            </motion.div>

            {/* Dots */}
            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-purple-600 dark:bg-purple-400 shadow-lg shadow-purple-400/50"
                      : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonial}
                className="border-purple-300 dark:border-purple-500/50 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-500/10 hover:border-purple-400 bg-transparent backdrop-blur-sm p-3"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </motion.div>
          </div>

          {/* Auto-play indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="text-center mt-6"
          >
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`text-sm px-4 py-2 rounded-full transition-all duration-300 ${
                isAutoPlaying
                  ? "text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-500/10"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              }`}
            >
              {isAutoPlaying ? "Auto-playing" : "Paused"}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
