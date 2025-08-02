"use client"

import { motion } from "framer-motion"
import { Code, Palette, Zap, ArrowRight, Check } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      id: "web-development",
      icon: Code,
      title: "Website Development",
      description:
        "Custom web applications built with modern technologies for optimal performance and user experience.",
      longDescription:
        "We create stunning, responsive websites that not only look great but perform exceptionally. Our development process focuses on user experience, performance optimization, and scalability.",
      features: [
        "Responsive Design",
        "SEO Optimized",
        "Fast Loading",
        "Mobile First",
        "Custom CMS",
        "E-commerce Integration",
      ],
      technologies: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS", "MongoDB"],
      startingPrice: "$2,999",
      deliveryTime: "2-4 weeks",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      id: "graphic-design",
      icon: Palette,
      title: "Graphic Design",
      description: "Creative visual solutions that capture your brand essence through stunning designs.",
      longDescription:
        "Our creative team brings your vision to life through compelling visual designs that communicate your brand message effectively and leave lasting impressions.",
      features: [
        "Brand Identity",
        "Print Design",
        "Digital Graphics",
        "UI/UX Design",
        "Social Media Graphics",
        "Marketing Materials",
      ],
      technologies: ["Adobe Creative Suite", "Figma", "Sketch", "Canva Pro", "After Effects", "Illustrator"],
      startingPrice: "$999",
      deliveryTime: "1-2 weeks",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      id: "branding",
      icon: Zap,
      title: "Branding & Strategy",
      description: "Complete brand strategy and identity development to establish a strong market presence.",
      longDescription:
        "We help businesses build powerful brands that resonate with their target audience through strategic planning, visual identity, and consistent brand messaging.",
      features: [
        "Brand Strategy",
        "Logo Design",
        "Brand Guidelines",
        "Market Research",
        "Brand Positioning",
        "Brand Voice",
      ],
      technologies: ["Brand Research Tools", "Adobe Creative Suite", "Figma", "Miro", "Survey Tools", "Analytics"],
      startingPrice: "$1,999",
      deliveryTime: "3-5 weeks",
      gradient: "from-pink-500 to-red-600",
    },
  ]

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description:
        "We start by understanding your business goals, target audience, and project requirements through detailed consultation.",
    },
    {
      step: "02",
      title: "Design & Strategy",
      description:
        "Our team creates wireframes, mockups, and strategic plans tailored to your specific needs and brand identity.",
    },
    {
      step: "03",
      title: "Development & Creation",
      description:
        "We bring designs to life using cutting-edge technologies and best practices for optimal performance.",
    },
    {
      step: "04",
      title: "Testing & Launch",
      description:
        "Rigorous testing ensures everything works perfectly before we launch your project and provide ongoing support.",
    },
  ]

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
                Services
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive digital solutions to help your business thrive in the modern world
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-500/50 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <CardHeader className="text-center pb-6">
                    <div
                      className={`mx-auto mb-6 p-4 bg-gradient-to-br ${service.gradient} rounded-2xl w-fit shadow-lg`}
                    >
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {service.title}
                    </CardTitle>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">{service.longDescription}</p>

                    <div className="flex items-center justify-between mb-4">
                      <div className="text-left">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Starting at</p>
                        <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                          {service.startingPrice}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Delivery</p>
                        <p className="text-lg font-semibold text-gray-900 dark:text-white">{service.deliveryTime}</p>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">What's Included:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
                            <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link href={`/services/${service.id}`}>
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
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
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Our{" "}
              <span className="bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
                Process
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery every time
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto">
                    {step.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-purple-300 to-transparent"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
              </motion.div>
            ))}
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
              Ready to Start Your Project?
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
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-500 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-500/10 px-8 py-4 bg-transparent"
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
