"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"
import { useParams } from "next/navigation"

export default function ServiceDetailPage() {
  const params = useParams()
  const slug = params.slug as string

  const serviceDetails = {
    "web-development": {
      title: "Website Development",
      subtitle: "Custom Web Applications & Websites",
      description:
        "Transform your digital presence with cutting-edge web development solutions that drive results and engage your audience.",
      heroImage: "/placeholder.svg?height=400&width=800&text=Web+Development",
      features: [
        "Responsive Design",
        "SEO Optimization",
        "Performance Optimization",
        "Custom CMS Integration",
        "E-commerce Solutions",
        "API Development",
        "Database Design",
        "Security Implementation",
      ],
      packages: [
        {
          name: "Starter Website",
          price: "$2,999",
          description: "Perfect for small businesses and startups",
          features: [
            "5-page responsive website",
            "Basic SEO setup",
            "Contact form",
            "Mobile optimization",
            "1 month support",
          ],
        },
        {
          name: "Business Website",
          price: "$5,999",
          description: "Ideal for growing businesses",
          features: [
            "10-page responsive website",
            "Advanced SEO",
            "CMS integration",
            "E-commerce ready",
            "3 months support",
            "Analytics setup",
          ],
        },
        {
          name: "Enterprise Solution",
          price: "$12,999",
          description: "Comprehensive solution for large businesses",
          features: [
            "Unlimited pages",
            "Custom functionality",
            "Advanced integrations",
            "Performance optimization",
            "6 months support",
            "Training included",
          ],
        },
      ],
      technologies: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS", "MongoDB", "PostgreSQL", "AWS"],
      process: [
        "Requirements gathering and analysis",
        "Wireframing and prototyping",
        "UI/UX design creation",
        "Frontend development",
        "Backend development",
        "Testing and quality assurance",
        "Deployment and launch",
        "Ongoing support and maintenance",
      ],
    },
    "graphic-design": {
      title: "Graphic Design",
      subtitle: "Creative Visual Solutions",
      description:
        "Bring your brand to life with stunning visual designs that communicate your message effectively and leave lasting impressions.",
      heroImage: "/placeholder.svg?height=400&width=800&text=Graphic+Design",
      features: [
        "Brand Identity Design",
        "Logo Creation",
        "Print Design",
        "Digital Graphics",
        "Social Media Graphics",
        "Marketing Materials",
        "Packaging Design",
        "Illustration Services",
      ],
      packages: [
        {
          name: "Logo Package",
          price: "$999",
          description: "Professional logo design for your brand",
          features: ["3 logo concepts", "Unlimited revisions", "Vector files", "Brand guidelines", "Social media kit"],
        },
        {
          name: "Brand Identity",
          price: "$2,999",
          description: "Complete brand identity package",
          features: [
            "Logo design",
            "Color palette",
            "Typography",
            "Brand guidelines",
            "Business card design",
            "Letterhead design",
          ],
        },
        {
          name: "Complete Package",
          price: "$5,999",
          description: "Everything you need for your brand",
          features: [
            "Full brand identity",
            "Marketing materials",
            "Social media templates",
            "Packaging design",
            "Website graphics",
            "Print materials",
          ],
        },
      ],
      technologies: [
        "Adobe Creative Suite",
        "Figma",
        "Sketch",
        "Canva Pro",
        "After Effects",
        "Illustrator",
        "Photoshop",
        "InDesign",
      ],
      process: [
        "Brand discovery and research",
        "Concept development",
        "Initial design creation",
        "Client feedback and revisions",
        "Final design refinement",
        "File preparation and delivery",
        "Brand guidelines creation",
        "Ongoing design support",
      ],
    },
    branding: {
      title: "Branding & Strategy",
      subtitle: "Build a Powerful Brand Identity",
      description:
        "Develop a comprehensive brand strategy that resonates with your target audience and establishes a strong market presence.",
      heroImage: "/placeholder.svg?height=400&width=800&text=Branding+Strategy",
      features: [
        "Brand Strategy Development",
        "Market Research",
        "Competitor Analysis",
        "Brand Positioning",
        "Brand Voice & Messaging",
        "Visual Identity Creation",
        "Brand Guidelines",
        "Implementation Support",
      ],
      packages: [
        {
          name: "Brand Foundation",
          price: "$1,999",
          description: "Essential branding elements",
          features: ["Brand strategy", "Logo design", "Color palette", "Typography", "Basic guidelines"],
        },
        {
          name: "Brand Development",
          price: "$4,999",
          description: "Comprehensive brand development",
          features: [
            "Market research",
            "Brand strategy",
            "Visual identity",
            "Brand guidelines",
            "Marketing materials",
            "Implementation plan",
          ],
        },
        {
          name: "Brand Transformation",
          price: "$9,999",
          description: "Complete brand overhaul",
          features: [
            "Comprehensive research",
            "Strategic planning",
            "Complete visual identity",
            "Brand guidelines",
            "Marketing strategy",
            "Launch support",
            "Training sessions",
          ],
        },
      ],
      technologies: [
        "Brand Research Tools",
        "Adobe Creative Suite",
        "Figma",
        "Miro",
        "Survey Tools",
        "Analytics",
        "Presentation Tools",
        "Strategy Frameworks",
      ],
      process: [
        "Brand audit and analysis",
        "Market and competitor research",
        "Brand strategy development",
        "Visual identity creation",
        "Brand guidelines development",
        "Implementation planning",
        "Launch and rollout",
        "Performance monitoring",
      ],
    },
  }

  const service = serviceDetails[slug as keyof typeof serviceDetails]

  if (!service) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Service Not Found</h1>
          <Link href="/services">
            <Button>Back to Services</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Link href="/services" className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Services
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">{service.title}</h1>
                <p className="text-xl text-purple-600 dark:text-purple-400 mb-6">{service.subtitle}</p>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">{service.description}</p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white"
                    >
                      Get Started
                    </Button>
                  </Link>
                  <Link href="/portfolio">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-purple-500 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-500/10 bg-transparent"
                    >
                      View Examples
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="relative">
                <img
                  src={service.heroImage || "/placeholder.svg"}
                  alt={service.title}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">What's Included</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
              >
                <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-900 dark:text-white">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Choose Your Package</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Select the perfect package for your needs and budget
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  className={`h-full ${index === 1 ? "border-purple-500 shadow-xl scale-105" : "border-gray-200 dark:border-gray-700"} bg-white dark:bg-gray-800`}
                >
                  {index === 1 && (
                    <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white text-center py-2 text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{pkg.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">{pkg.description}</p>
                    <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-6">{pkg.price}</div>

                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                          <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link href="/contact">
                      <Button
                        className={`w-full ${index === 1 ? "bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white" : "border-purple-500 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-500/10"}`}
                        variant={index === 1 ? "default" : "outline"}
                      >
                        Get Started
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Our Process</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">How we deliver exceptional results</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 flex-shrink-0">
                  {index + 1}
                </div>
                <span className="text-gray-900 dark:text-white">{step}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Get Started?</h2>
            <p className="text-xl text-purple-100 mb-8">Let's discuss your project and bring your vision to life</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4">
                  Start Your Project
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-8 py-4 bg-transparent"
                >
                  View Our Work
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
