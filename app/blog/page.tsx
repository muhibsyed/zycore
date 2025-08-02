"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, Clock, ArrowRight, BookOpen, Search } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", "Development", "Design", "Branding", "Marketing", "Technology"]

  const blogPosts = [
    {
      id: "web-development-trends-2025",
      title: "The Future of Web Development: Trends to Watch in 2025",
      excerpt:
        "Explore the latest trends shaping the web development landscape, from AI integration to advanced frameworks and emerging technologies.",
      content:
        "The web development landscape is constantly evolving, and 2025 promises to bring exciting new trends and technologies...",
      image: "/placeholder.svg?height=400&width=600&text=Web+Development+Trends",
      author: "Alex Johnson",
      authorImage: "/placeholder.svg?height=100&width=100&text=Alex+J",
      date: "Jan 15, 2025",
      readTime: "8 min read",
      category: "Development",
      tags: ["Web Development", "Trends", "Technology", "Future"],
      featured: true,
    },
    {
      id: "brand-identity-guide",
      title: "Creating Brand Identity That Resonates",
      excerpt:
        "Learn how to develop a brand identity that connects with your audience and drives business growth through strategic design.",
      content:
        "Brand identity is more than just a logo – it's the complete visual and emotional representation of your business...",
      image: "/placeholder.svg?height=400&width=600&text=Brand+Identity",
      author: "Sarah Chen",
      authorImage: "/placeholder.svg?height=100&width=100&text=Sarah+C",
      date: "Jan 12, 2025",
      readTime: "6 min read",
      category: "Branding",
      tags: ["Branding", "Identity", "Design", "Strategy"],
      featured: false,
    },
    {
      id: "ui-ux-design-principles",
      title: "UI/UX Design Principles for Modern Applications",
      excerpt:
        "Discover the essential design principles that create exceptional user experiences in today's digital world.",
      content:
        "Great user experience design is the foundation of successful digital products. In this comprehensive guide...",
      image: "/placeholder.svg?height=400&width=600&text=UI+UX+Design",
      author: "Mike Rodriguez",
      authorImage: "/placeholder.svg?height=100&width=100&text=Mike+R",
      date: "Jan 10, 2025",
      readTime: "10 min read",
      category: "Design",
      tags: ["UI/UX", "Design", "User Experience", "Principles"],
      featured: true,
    },
    {
      id: "ecommerce-optimization",
      title: "E-commerce Optimization: Converting Visitors to Customers",
      excerpt:
        "Proven strategies to optimize your e-commerce website for higher conversion rates and better user experience.",
      content:
        "E-commerce optimization is crucial for turning website visitors into paying customers. Here are the strategies...",
      image: "/placeholder.svg?height=400&width=600&text=E-commerce+Optimization",
      author: "Emily Davis",
      authorImage: "/placeholder.svg?height=100&width=100&text=Emily+D",
      date: "Jan 8, 2025",
      readTime: "7 min read",
      category: "Marketing",
      tags: ["E-commerce", "Optimization", "Conversion", "Marketing"],
      featured: false,
    },
    {
      id: "motion-design-digital",
      title: "The Power of Motion Design in Digital Experiences",
      excerpt:
        "How thoughtful animations and micro-interactions can elevate your digital products and engage users effectively.",
      content:
        "Motion design has become an integral part of modern digital experiences. When done right, animations can...",
      image: "/placeholder.svg?height=400&width=600&text=Motion+Design",
      author: "David Kim",
      authorImage: "/placeholder.svg?height=100&width=100&text=David+K",
      date: "Jan 5, 2025",
      readTime: "5 min read",
      category: "Design",
      tags: ["Motion Design", "Animation", "UX", "Digital"],
      featured: false,
    },
    {
      id: "seo-strategies-2025",
      title: "SEO Strategies That Actually Work in 2025",
      excerpt:
        "Cut through the noise with proven SEO techniques that drive organic traffic and improve search rankings.",
      content:
        "Search engine optimization continues to evolve, and staying ahead requires understanding the latest strategies...",
      image: "/placeholder.svg?height=400&width=600&text=SEO+Strategies",
      author: "Lisa Thompson",
      authorImage: "/placeholder.svg?height=100&width=100&text=Lisa+T",
      date: "Jan 3, 2025",
      readTime: "9 min read",
      category: "Marketing",
      tags: ["SEO", "Marketing", "Search", "Strategy"],
      featured: true,
    },
  ]

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredPosts = blogPosts.filter((post) => post.featured)

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
              <span className="bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Stay updated with the latest trends, insights, and best practices in web development, design, and digital
              marketing
            </p>

            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto">
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full"
                />
              </div>

              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? "bg-purple-600 text-white"
                        : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-500/10 border border-gray-300 dark:border-gray-600"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Featured Articles</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {featuredPosts.slice(0, 2).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group h-full overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-500/50 transition-all duration-500 shadow-lg hover:shadow-xl">
                  <div className="relative overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center space-x-2">
                        <Image
                          src={post.authorImage || "/placeholder.svg"}
                          alt={post.author}
                          width={32}
                          height={32}
                          className="rounded-full"
                        />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <div className="mb-3">
                      <span className="text-xs text-purple-600 dark:text-purple-400 font-medium uppercase tracking-wide bg-purple-100 dark:bg-purple-500/10 px-2 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">{post.excerpt}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700/50 px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link href={`/blog/${post.id}`}>
                      <Button
                        variant="outline"
                        className="border-purple-500/50 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-500/10 group/btn bg-transparent"
                      >
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">All Articles</h2>
            <p className="text-gray-600 dark:text-gray-300">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""} found
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group h-full overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-500/50 transition-all duration-500 shadow-lg hover:shadow-xl">
                  <div className="relative overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {post.featured && (
                      <div className="absolute top-3 left-3">
                        <span className="bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-3 text-xs text-gray-500 dark:text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Image
                          src={post.authorImage || "/placeholder.svg"}
                          alt={post.author}
                          width={24}
                          height={24}
                          className="rounded-full"
                        />
                        <span>{post.author}</span>
                      </div>
                      <span>•</span>
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <div className="mb-3">
                      <span className="text-xs text-purple-600 dark:text-purple-400 font-medium uppercase tracking-wide bg-purple-100 dark:bg-purple-500/10 px-2 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">{post.excerpt}</p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700/50 px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link href={`/blog/${post.id}`}>
                      <Button
                        variant="ghost"
                        className="text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-500/10 p-0 h-auto group/btn"
                      >
                        Read More
                        <ArrowRight className="ml-1 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No articles found</h3>
              <p className="text-gray-600 dark:text-gray-300">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Stay Updated</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Subscribe to our newsletter for the latest insights and updates
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input type="email" placeholder="Enter your email" className="flex-1" />
              <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
