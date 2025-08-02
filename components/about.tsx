"use client"

import { motion } from "framer-motion"
import { Users, Target, Award, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function About() {
  const stats = [
    { icon: Users, label: "Happy Clients", value: "200+", color: "from-blue-500 to-purple-600" },
    { icon: Target, label: "Projects Completed", value: "350+", color: "from-purple-500 to-pink-600" },
    { icon: Award, label: "Awards Won", value: "25+", color: "from-pink-500 to-red-600" },
    { icon: Clock, label: "Years Experience", value: "8+", color: "from-red-500 to-orange-600" },
  ]

  const teamImages = [
    "/placeholder.svg?height=300&width=250&text=Team+Member+1",
    "/placeholder.svg?height=250&width=250&text=Team+Member+2",
    "/placeholder.svg?height=280&width=250&text=Team+Member+3",
    "/placeholder.svg?height=320&width=250&text=Team+Member+4",
  ]

  return (
    <section
      id="about"
      className="py-16 sm:py-24 lg:py-32 bg-gray-50 dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 60,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-1/3 right-1/3 w-80 h-80 bg-purple-200/20 dark:bg-purple-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 mb-6"
            >
              <span className="text-purple-700 dark:text-purple-300 text-sm font-medium">About Us</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white">
              Meet{" "}
              <span className="bg-gradient-to-r from-purple-600 to-purple-700 dark:from-purple-400 dark:to-purple-600 bg-clip-text text-transparent">
                Zycore Solution
              </span>
            </h2>

            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                We are a passionate team of designers, developers, and digital strategists dedicated to creating
                exceptional digital experiences. Since our founding, we've helped businesses of all sizes establish
                their online presence and achieve their digital goals.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Our mission is to bridge the gap between creativity and technology, delivering solutions that not only
                look stunning but also drive real business results. We believe in the power of good design and clean
                code to transform ideas into digital reality.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 group"
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center group cursor-pointer"
                >
                  <div
                    className={`mb-3 p-4 bg-gradient-to-br ${stat.color} rounded-2xl w-fit mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  >
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Team Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              {teamImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.05,
                    rotate: index % 2 === 0 ? 2 : -2,
                    transition: { duration: 0.3 },
                  }}
                  className={`${index % 2 === 0 ? "" : "mt-8"}`}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`Team Member ${index + 1}`}
                      width={250}
                      height={300}
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Decorative elements */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
              }}
              className="absolute -top-8 -right-8 w-32 h-32 bg-purple-300/20 dark:bg-purple-600/20 rounded-full blur-2xl"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
              }}
              className="absolute -bottom-8 -left-8 w-40 h-40 bg-blue-300/15 dark:bg-blue-500/15 rounded-full blur-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
