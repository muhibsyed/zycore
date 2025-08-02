"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, ArrowRight, BookOpen, User } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Blog() {
  const blogPosts = [
    {
      title: "The Future of Web Development: Trends to Watch in 2025",
      excerpt:
        "Explore the latest trends shaping the web development landscape, from AI integration to advanced frameworks.",
      image: "/placeholder.svg?height=300&width=500&text=Web+Development+Trends",
      author: "Alex Johnson",
      date: "Jan 15, 2025",
      readTime: "8 min read",
      category: "Development",
      featured: true,
    },
    {
      title: "Creating Brand Identity That Resonates",
      excerpt: "Learn how to develop a brand identity that connects with your audience and drives business growth.",
      image: "/placeholder.svg?height=300&width=500&text=Brand+Identity",
      author: "Sarah Chen",
      date: "Jan 12, 2025",
      readTime: "6 min read",
      category: "Branding",
      featured: false,
    },
    {
      title: "UI/UX Design Principles for Modern Applications",
      excerpt:
        "Discover the essential design principles that create exceptional user experiences in today's digital world.",
      image: "/placeholder.svg?height=300&width=500&text=UI+UX+Design",
      author: "Mike Rodriguez",
      date: "Jan 10, 2025",
      readTime: "10 min read",
      category: "Design",
      featured: false,
    },
    {
      title: "E-commerce Optimization: Converting Visitors to Customers",
      excerpt:
        "Proven strategies to optimize your e-commerce website for higher conversion rates and better user experience.",
      image: "/placeholder.svg?height=300&width=500&text=E-commerce+Optimization",
      author: "Emma Wilson",
      date: "Jan 8, 2025",
      readTime: "7 min read",
      category: "E-commerce",
      featured: false,
    },
    {
      title: "The Power of Motion Design in Digital Experiences",
      excerpt: "How thoughtful animations and micro-interactions can elevate your digital products and engage users.",
      image: "/placeholder.svg?height=300&width=500&text=Motion+Design",
      author: "David Kim",
      date: "Jan 5, 2025",
      readTime: "5 min read",
      category: "Design",
      featured: false,
    },
    {
      title: "SEO Strategies That Actually Work in 2025",
      excerpt:
        "Cut through the noise with proven SEO techniques that drive organic traffic and improve search rankings.",
      image: "/placeholder.svg?height=300&width=500&text=SEO+Strategies",
      author: "Lisa Thompson",
      date: "Jan 3, 2025",
      readTime: "9 min read",
      category: "Marketing",
      featured: false,
    },
  ]

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="blog" className="py-32 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
          }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
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
            className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6"
          >
            <BookOpen className="w-4 h-4 text-purple-500 mr-2" />
            <span className="text-purple-600 dark:text-purple-300 text-sm font-medium">Latest Insights</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            Our{" "}
            <span className="bg-gradient-to-r from-purple-600 to-purple-700 dark:from-purple-400 dark:to-purple-600 bg-clip-text text-transparent">
              Blog
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest trends, insights, and best practices in web development, design, and digital
            marketing.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Featured Post */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <motion.div
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="h-full"
            >
              <Card className="group relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border-0 overflow-hidden shadow-2xl hover:shadow-purple-500/25 transition-all duration-700 h-full">
                {/* Premium background overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-purple-50/30 dark:from-gray-800/50 dark:via-transparent dark:to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative overflow-hidden">
                  <Image
                    src={blogPosts[0].image || "/placeholder.svg"}
                    alt={blogPosts[0].title}
                    width={500}
                    height={300}
                    className="w-full h-64 lg:h-80 object-cover transition-all duration-700 group-hover:scale-110"
                  />

                  {/* Premium overlay effects */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="absolute top-6 left-6">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      ✨ Featured
                    </span>
                  </div>
                </div>

                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{blogPosts[0].author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{blogPosts[0].date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                    {blogPosts[0].title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                    {blogPosts[0].excerpt}
                  </p>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="outline"
                      className="border-purple-500/50 text-purple-600 dark:text-purple-400 hover:bg-purple-500/10 hover:border-purple-400 group/btn bg-transparent"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Recent Posts */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Recent Posts</h3>
            {blogPosts.slice(1, 4).map((post, index) => (
              <motion.div
                key={index}
                whileHover={{
                  x: 5,
                  transition: { duration: 0.3 },
                }}
              >
                <Card className="bg-white dark:bg-gray-800/50 border-gray-200 dark:border-gray-700/50 overflow-hidden group hover:border-purple-300 dark:hover:border-purple-500/50 transition-all duration-300 shadow-md hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex space-x-4">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        width={100}
                        height={80}
                        className="w-20 h-16 object-cover rounded-lg flex-shrink-0"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2 text-xs text-gray-500 dark:text-gray-400">
                          <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 px-2 py-1 rounded-full">
                            {post.category}
                          </span>
                          <span>{post.date}</span>
                        </div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300 line-clamp-2">
                          {post.title}
                        </h4>
                        <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 group"
            >
              View All Posts
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
