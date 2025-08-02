"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, Filter } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filters = ["All", "Websites", "Designs", "Branding"]

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Websites",
      image: "/placeholder.svg?height=400&width=600&text=E-Commerce+Platform",
      description: "Modern e-commerce solution with payment integration and admin dashboard",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Brand Identity Design",
      category: "Branding",
      image: "/placeholder.svg?height=400&width=600&text=Brand+Identity",
      description: "Complete brand identity package for tech startup including logo and guidelines",
      tags: ["Branding", "Logo", "Guidelines"],
    },
    {
      title: "Mobile App UI/UX",
      category: "Designs",
      image: "/placeholder.svg?height=400&width=600&text=Mobile+App+UI",
      description: "Intuitive mobile app interface design with smooth user experience",
      tags: ["UI/UX", "Mobile", "Figma"],
    },
    {
      title: "Corporate Website",
      category: "Websites",
      image: "/placeholder.svg?height=400&width=600&text=Corporate+Website",
      description: "Professional corporate website with CMS and SEO optimization",
      tags: ["Next.js", "CMS", "SEO"],
    },
    {
      title: "Marketing Campaign",
      category: "Designs",
      image: "/placeholder.svg?height=400&width=600&text=Marketing+Campaign",
      description: "Creative marketing materials and social media campaign designs",
      tags: ["Graphics", "Social Media", "Print"],
    },
    {
      title: "SaaS Dashboard",
      category: "Websites",
      image: "/placeholder.svg?height=400&width=600&text=SaaS+Dashboard",
      description: "Analytics dashboard for SaaS platform with real-time data visualization",
      tags: ["Dashboard", "Analytics", "React"],
    },
    {
      title: "Restaurant Branding",
      category: "Branding",
      image: "/placeholder.svg?height=400&width=600&text=Restaurant+Branding",
      description: "Complete branding package for upscale restaurant chain",
      tags: ["Restaurant", "Branding", "Print"],
    },
    {
      title: "Portfolio Website",
      category: "Websites",
      image: "/placeholder.svg?height=400&width=600&text=Portfolio+Website",
      description: "Creative portfolio website for digital artist with gallery features",
      tags: ["Portfolio", "Gallery", "Creative"],
    },
    {
      title: "App Icon Design",
      category: "Designs",
      image: "/placeholder.svg?height=400&width=600&text=App+Icon+Design",
      description: "Modern app icon design with multiple variations and formats",
      tags: ["Icons", "Mobile", "Branding"],
    },
  ]

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="portfolio" className="py-16 sm:py-24 lg:py-32 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
          }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-200/30 dark:bg-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            <Filter className="w-4 h-4 text-purple-600 dark:text-purple-400 mr-2" />
            <span className="text-purple-700 dark:text-purple-300 text-sm font-medium">Our Work</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            Featured{" "}
            <span className="bg-gradient-to-r from-purple-600 to-purple-700 dark:from-purple-400 dark:to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our recent projects and see how we've helped businesses achieve their digital goals with innovative
            solutions.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg shadow-purple-500/25"
                  : "bg-gray-100 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700/50 hover:text-gray-900 dark:hover:text-white border border-gray-200 dark:border-gray-700/50"
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div key={`${activeFilter}-${index}`} variants={itemVariants}>
                <motion.div
                  whileHover={{
                    y: -10,
                    transition: { duration: 0.3 },
                  }}
                  className="h-full"
                >
                  <Card className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/50 overflow-hidden group hover:border-purple-300 dark:hover:border-purple-500/50 transition-all duration-500 h-full backdrop-blur-sm shadow-lg hover:shadow-xl">
                    <div className="relative overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute inset-0 bg-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <div className="flex space-x-4">
                          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <Button
                              size="sm"
                              variant="secondary"
                              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border-white/20"
                            >
                              <ExternalLink className="h-4 w-4" />
                            </Button>
                          </motion.div>
                          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <Button
                              size="sm"
                              variant="secondary"
                              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border-white/20"
                            >
                              <Github className="h-4 w-4" />
                            </Button>
                          </motion.div>
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <div className="mb-3">
                        <span className="text-xs text-purple-600 dark:text-purple-400 font-medium uppercase tracking-wide bg-purple-100 dark:bg-purple-500/10 px-2 py-1 rounded-full">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700/50 px-2 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
