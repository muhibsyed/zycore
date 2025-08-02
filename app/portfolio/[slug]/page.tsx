"use client"

import { motion } from "framer-motion"
import { ArrowLeft, ExternalLink, Github, Calendar, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"
import { useParams } from "next/navigation"
import Image from "next/image"

export default function ProjectDetailPage() {
  const params = useParams()
  const slug = params.slug as string

  const projectDetails = {
    "ecommerce-platform": {
      title: "E-Commerce Platform",
      category: "E-commerce",
      client: "TechStore Inc.",
      year: "2024",
      duration: "3 months",
      team: "4 developers, 2 designers",
      heroImage: "/placeholder.svg?height=600&width=1200&text=E-Commerce+Platform+Hero",
      images: [
        "/placeholder.svg?height=400&width=600&text=Homepage+Design",
        "/placeholder.svg?height=400&width=600&text=Product+Page",
        "/placeholder.svg?height=400&width=600&text=Checkout+Process",
        "/placeholder.svg?height=400&width=600&text=Admin+Dashboard",
      ],
      description:
        "A comprehensive e-commerce platform built with modern technologies, featuring seamless user experience, advanced product filtering, and secure payment processing.",
      challenge:
        "The client needed a scalable e-commerce solution that could handle high traffic volumes while providing an intuitive shopping experience. The main challenges were implementing real-time inventory management, creating a flexible product catalog system, and ensuring secure payment processing.",
      solution:
        "We developed a full-stack e-commerce platform using Next.js for the frontend and Node.js for the backend. The solution includes advanced search and filtering capabilities, real-time inventory tracking, integrated payment processing with Stripe, and a comprehensive admin dashboard for order and inventory management.",
      results: [
        "300% increase in online sales",
        "50% reduction in cart abandonment",
        "99.9% uptime since launch",
        "40% improvement in page load speed",
      ],
      technologies: ["Next.js", "React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS", "TypeScript", "AWS"],
      features: [
        "Responsive design across all devices",
        "Advanced product search and filtering",
        "Secure payment processing with Stripe",
        "Real-time inventory management",
        "Order tracking and management",
        "Customer account dashboard",
        "Admin panel for store management",
        "SEO optimization",
      ],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      testimonial: {
        text: "Zycore Solution delivered an exceptional e-commerce platform that exceeded our expectations. The attention to detail and technical expertise resulted in a 300% increase in our online sales.",
        author: "John Smith",
        position: "CEO, TechStore Inc.",
      },
    },
    "brand-identity": {
      title: "Brand Identity Design",
      category: "Branding",
      client: "StartupXYZ",
      year: "2024",
      duration: "6 weeks",
      team: "2 designers, 1 strategist",
      heroImage: "/placeholder.svg?height=600&width=1200&text=Brand+Identity+Hero",
      images: [
        "/placeholder.svg?height=400&width=600&text=Logo+Design",
        "/placeholder.svg?height=400&width=600&text=Color+Palette",
        "/placeholder.svg?height=400&width=600&text=Typography",
        "/placeholder.svg?height=400&width=600&text=Brand+Applications",
      ],
      description:
        "A complete brand identity system for an innovative tech startup, including logo design, color palette, typography, and comprehensive brand guidelines.",
      challenge:
        "StartupXYZ needed a strong brand identity that would help them stand out in the competitive tech industry. They required a modern, professional look that would appeal to both investors and customers while reflecting their innovative approach to technology.",
      solution:
        "We developed a comprehensive brand identity system starting with extensive market research and competitor analysis. The final design features a modern, minimalist logo that represents innovation and growth, complemented by a carefully selected color palette and typography that conveys professionalism and trustworthiness.",
      results: [
        "200% increase in brand recognition",
        "150% improvement in investor interest",
        "300% growth in social media engagement",
        "Successfully secured Series A funding",
      ],
      technologies: ["Adobe Illustrator", "Adobe Photoshop", "Figma", "Adobe InDesign", "Brand Strategy Tools"],
      features: [
        "Modern logo design with multiple variations",
        "Comprehensive color palette",
        "Typography system",
        "Brand guidelines document",
        "Business card and letterhead design",
        "Social media templates",
        "Website style guide",
        "Brand application examples",
      ],
      liveUrl: "https://example.com",
      testimonial: {
        text: "The brand identity Zycore created for us perfectly captures our vision and has been instrumental in our success. We've seen tremendous growth since the rebrand.",
        author: "Sarah Johnson",
        position: "Founder, StartupXYZ",
      },
    },
    "mobile-app-ui": {
      title: "Mobile App UI/UX Design",
      category: "Designs",
      client: "MobileApp Co.",
      year: "2024",
      duration: "8 weeks",
      team: "3 designers, 1 UX researcher",
      heroImage: "/placeholder.svg?height=600&width=1200&text=Mobile+App+UI+Hero",
      images: [
        "/placeholder.svg?height=400&width=600&text=App+Screens",
        "/placeholder.svg?height=400&width=600&text=User+Flow",
        "/placeholder.svg?height=400&width=600&text=Wireframes",
        "/placeholder.svg?height=400&width=600&text=Prototypes",
      ],
      description:
        "A comprehensive mobile app design featuring intuitive navigation, modern UI components, and seamless user experience across iOS and Android platforms.",
      challenge:
        "The client needed a mobile app design that would provide an exceptional user experience while handling complex functionality. The main challenges were simplifying the user interface without sacrificing functionality and ensuring consistency across different platforms.",
      solution:
        "We conducted extensive user research and created detailed user personas to guide our design decisions. The final design features a clean, intuitive interface with carefully crafted micro-interactions and a consistent design system that works seamlessly across both iOS and Android platforms.",
      results: [
        "4.8/5 app store rating",
        "60% increase in user engagement",
        "40% reduction in user onboarding time",
        "25% increase in user retention",
      ],
      technologies: ["Figma", "Adobe XD", "Principle", "InVision", "Sketch", "Zeplin"],
      features: [
        "Intuitive user interface design",
        "Seamless navigation system",
        "Custom icon set",
        "Interactive prototypes",
        "Design system documentation",
        "Platform-specific adaptations",
        "Accessibility considerations",
        "Micro-interactions and animations",
      ],
      liveUrl: "https://example.com",
      testimonial: {
        text: "The UI/UX design Zycore created for our mobile app is outstanding. Our users love the intuitive interface and we've seen significant improvements in engagement metrics.",
        author: "Mike Chen",
        position: "Product Manager, MobileApp Co.",
      },
    },
  }

  const project = projectDetails[slug as keyof typeof projectDetails]

  if (!project) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Project Not Found</h1>
          <Link href="/portfolio">
            <Button>Back to Portfolio</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Link href="/portfolio" className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Portfolio
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm text-purple-600 dark:text-purple-400 font-medium uppercase tracking-wide bg-purple-100 dark:bg-purple-500/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{project.year}</span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">{project.title}</h1>

                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">{project.description}</p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                      <User className="h-4 w-4 mr-2" />
                      <span className="text-sm">Client</span>
                    </div>
                    <p className="font-semibold text-gray-900 dark:text-white">{project.client}</p>
                  </div>
                  <div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">Duration</span>
                    </div>
                    <p className="font-semibold text-gray-900 dark:text-white">{project.duration}</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Live Site
                      </Button>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-purple-500 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-500/10 bg-transparent"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        View Code
                      </Button>
                    </a>
                  )}
                </div>
              </div>

              <div className="relative">
                <Image
                  src={project.heroImage || "/placeholder.svg"}
                  alt={project.title}
                  width={1200}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Images */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${project.title} - Image ${index + 1}`}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {/* Challenge Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">The Challenge</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">{project.challenge}</p>
              </motion.div>

              {/* Solution Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Solution</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">{project.solution}</p>
              </motion.div>

              {/* Results Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Results</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.results.map((result, index) => (
                    <div key={index} className="flex items-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-4"></div>
                      <span className="text-gray-900 dark:text-white font-medium">{result}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Testimonial Section */}
              {project.testimonial && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border-purple-200 dark:border-purple-500/20">
                    <CardContent className="p-8">
                      <blockquote className="text-xl text-gray-700 dark:text-gray-300 italic mb-6">
                        "{project.testimonial.text}"
                      </blockquote>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">{project.testimonial.author}</p>
                        <p className="text-purple-600 dark:text-purple-400">{project.testimonial.position}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Project Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Project Info</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Client</p>
                        <p className="font-semibold text-gray-900 dark:text-white">{project.client}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Year</p>
                        <p className="font-semibold text-gray-900 dark:text-white">{project.year}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Duration</p>
                        <p className="font-semibold text-gray-900 dark:text-white">{project.duration}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Team</p>
                        <p className="font-semibold text-gray-900 dark:text-white">{project.team}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Technologies */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="text-sm bg-purple-100 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Key Features</h3>
                    <ul className="space-y-3">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-gray-600 dark:text-gray-300 text-sm">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">More Projects</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Explore our other work</p>
          </motion.div>

          <div className="text-center">
            <Link href="/portfolio">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4"
              >
                View All Projects
              </Button>
            </Link>
          </div>
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
              Have a Similar Project in Mind?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Let's discuss how we can help bring your vision to life
            </p>
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
                  View Our Services
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
