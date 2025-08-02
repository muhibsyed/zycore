"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Eye } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filters = ["All", "Websites", "Designs", "Branding", "E-commerce"]

  const projects = [
    {
      id: "ecommerce-platform",
      title: "E-Commerce Platform",
      category: "E-commerce",
      image: "/placeholder.svg?height=400&width=600&text=E-Commerce+Platform",
      description: "Modern e-commerce solution with payment integration and admin dashboard",
      longDescription:
        "A comprehensive e-commerce platform built with Next.js and Stripe integration, featuring a modern design, advanced filtering, and seamless checkout experience.",
      tags: ["React", "Next.js", "Stripe", "MongoDB"],
      client: "TechStore Inc.",
      year: "2024",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: true,
    },
    {
      id: "brand-identity",
      title: "Brand Identity Design",
      category: "Branding",
      image: "/placeholder.svg?height=400&width=600&text=Brand+Identity",
      description: "Complete brand identity package for tech startup including logo and guidelines",
      longDescription:
        "A complete brand identity system including logo design, color palette, typography, and brand guidelines for a innovative tech startup.",
      tags: ["Branding", "Logo", "Guidelines", "Adobe Creative Suite"],
      client: "StartupXYZ",
      year: "2024",
      liveUrl: "https://example.com",
      featured: false,
    },
    {
      id: "mobile-app-ui",
      title: "Mobile App UI/UX",
      category: "Designs",
      image: "/placeholder.svg?height=400&width=600&text=Mobile+App+UI",
      description: "Intuitive mobile app interface design with smooth user experience",
      longDescription:
        "A comprehensive mobile app design featuring intuitive navigation, modern UI components, and seamless user experience across iOS and Android platforms.",
      tags: ["UI/UX", "Mobile", "Figma", "Prototyping"],
      client: "MobileApp Co.",
      year: "2024",
      liveUrl: "https://example.com",
      featured: true,
    },
    {
      id: "corporate-website",
      title: "Corporate Website",
      category: "Websites",
      image: "/placeholder.svg?height=400&width=600&text=Corporate+Website",
      description: "Professional corporate website with CMS and SEO optimization",
      longDescription:
        "A professional corporate website featuring custom CMS integration, advanced SEO optimization, and responsive design for optimal performance.",
      tags: ["Next.js", "CMS", "SEO", "Corporate"],
      client: "Business Corp",
      year: "2024",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: false,
    },
    {
      id: "marketing-campaign",
      title: "Marketing Campaign",
      category: "Designs",
      image: "/placeholder.svg?height=400&width=600&text=Marketing+Campaign",
      description: "Creative marketing materials and social media campaign designs",
      longDescription:
        "A comprehensive marketing campaign including social media graphics, print materials, and digital advertisements with consistent brand messaging.",
      tags: ["Graphics", "Social Media", "Print", "Campaign"],
      client: "Marketing Agency",
      year: "2024",
      liveUrl: "https://example.com",
      featured: false,
    },
    {
      id: "saas-dashboard",
      title: "SaaS Dashboard",
      category: "Websites",
      image: "/placeholder.svg?height=400&width=600&text=SaaS+Dashboard",
      description: "Analytics dashboard for SaaS platform with real-time data visualization",
      longDescription:
        "A sophisticated SaaS dashboard featuring real-time analytics, data visualization, user management, and comprehensive reporting tools.",
      tags: ["Dashboard", "Analytics", "React", "D3.js"],
      client: "SaaS Startup",
      year: "2024",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: true,
    },
  ]

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)
  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              Our{" "}
              <span className="bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore our recent projects and see how we've helped businesses achieve their digital goals
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Featured Projects</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {featuredProjects.slice(0, 2).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-500/50 transition-all duration-500 shadow-lg hover:shadow-xl">
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
                        <Link href={`/portfolio/${project.id}`}>
                          <Button
                            size="sm"
                            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border-white/20"
                          >
                            <Eye className="h-4 w-4 mr-2" />
                            View Details
                          </Button>
                        </Link>
                        {project.liveUrl && (
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <Button
                              size="sm"
                              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border-white/20"
                            >
                              <ExternalLink className="h-4 w-4" />
                            </Button>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-purple-600 dark:text-purple-400 font-medium uppercase tracking-wide bg-purple-100 dark:bg-purple-500/10 px-2 py-1 rounded-full">
                        {project.category}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{project.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700/50 px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Client: {project.client}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                    : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600"
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="group h-full overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-500/50 transition-all duration-500 shadow-lg hover:shadow-xl">
                    <div className="relative overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute inset-0 bg-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <Link href={`/portfolio/${project.id}`}>
                          <Button
                            size="sm"
                            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border-white/20"
                          >
                            <Eye className="h-4 w-4 mr-2" />
                            View Details
                          </Button>
                        </Link>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs text-purple-600 dark:text-purple-400 font-medium uppercase tracking-wide bg-purple-100 dark:bg-purple-500/10 px-2 py-1 rounded-full">
                          {project.category}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{project.year}</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700/50 px-2 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Client: {project.client}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">Let's create something amazing together</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4"
                >
                  Start Your Project
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-500 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-500/10 px-8 py-4 bg-transparent"
                >
                  View Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
