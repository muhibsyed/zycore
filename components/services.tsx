"use client"

import { motion } from "framer-motion"
import { Code, Palette, Zap, ArrowRight, Check } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Services() {
  const services = [
    {
      icon: Code,
      title: "Website Development",
      description:
        "Custom web applications built with modern technologies like React, Next.js, and Node.js for optimal performance and user experience.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Mobile First"],
      gradient: "from-blue-500 to-purple-600",
    },
    {
      icon: Palette,
      title: "Graphic Designing",
      description:
        "Creative visual solutions that capture your brand essence through logos, brochures, social media graphics, and marketing materials.",
      features: ["Brand Identity", "Print Design", "Digital Graphics", "UI/UX Design"],
      gradient: "from-purple-500 to-pink-600",
    },
    {
      icon: Zap,
      title: "Branding",
      description:
        "Complete brand strategy and identity development to establish a strong market presence and connect with your target audience.",
      features: ["Brand Strategy", "Logo Design", "Brand Guidelines", "Market Research"],
      gradient: "from-pink-500 to-red-600",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="services" className="py-16 sm:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Simplified Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-200/30 dark:bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-200/30 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 mb-4 sm:mb-6"
          >
            <span className="text-purple-700 dark:text-purple-300 text-sm font-medium">Our Services</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white px-4">
            What We{" "}
            <span className="bg-gradient-to-r from-purple-600 to-purple-700 dark:from-purple-400 dark:to-purple-600 bg-clip-text text-transparent">
              Create
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            We offer comprehensive digital solutions to help your business thrive in the modern world with cutting-edge
            technology and creative excellence.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <motion.div
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 },
                }}
                className="h-full"
              >
                <Card className="group relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-500/50 transition-all duration-300 h-full shadow-lg hover:shadow-xl">
                  <CardHeader className="text-center pb-4 sm:pb-6 p-4 sm:p-6">
                    <motion.div
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.2 },
                      }}
                      className={`mx-auto mb-4 sm:mb-6 p-3 sm:p-4 bg-gradient-to-br ${service.gradient} rounded-2xl w-fit shadow-lg`}
                    >
                      <service.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </motion.div>
                    <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="text-center space-y-4 sm:space-y-6 p-4 sm:p-6 pt-0">
                    <CardDescription className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                      {service.description}
                    </CardDescription>

                    <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center text-gray-700 dark:text-gray-300 text-sm sm:text-base"
                        >
                          <div
                            className={`w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-br ${service.gradient} rounded-full flex items-center justify-center mr-3 flex-shrink-0`}
                          >
                            <Check className="h-2 w-2 sm:h-3 sm:w-3 text-white" />
                          </div>
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        variant="outline"
                        className="border-purple-500/50 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-500/10 hover:border-purple-400 group/btn w-full bg-transparent"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
