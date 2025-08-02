"use client"

import { motion } from "framer-motion"
import { Check, Star, Zap, Crown, Rocket } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Pricing() {
  const pricingPlans = [
    {
      name: "Starter",
      icon: Zap,
      price: "$999",
      period: "per project",
      description: "Perfect for small businesses and startups looking to establish their online presence.",
      features: [
        "5-page responsive website",
        "Mobile-first design",
        "Basic SEO optimization",
        "Contact form integration",
        "Social media integration",
        "1 month support",
        "Google Analytics setup",
        "SSL certificate",
      ],
      popular: false,
      gradient: "from-blue-500 to-purple-600",
      buttonText: "Get Started",
    },
    {
      name: "Professional",
      icon: Star,
      price: "$2,499",
      period: "per project",
      description: "Ideal for growing businesses that need advanced features and custom functionality.",
      features: [
        "10-page responsive website",
        "Custom design & branding",
        "Advanced SEO optimization",
        "E-commerce integration",
        "CMS integration",
        "3 months support",
        "Performance optimization",
        "Email marketing setup",
        "Blog functionality",
        "Advanced analytics",
      ],
      popular: true,
      gradient: "from-purple-500 to-pink-600",
      buttonText: "Most Popular",
    },
    {
      name: "Enterprise",
      icon: Crown,
      price: "$4,999",
      period: "per project",
      description: "Comprehensive solution for large businesses requiring premium features and ongoing support.",
      features: [
        "Unlimited pages",
        "Premium custom design",
        "Enterprise SEO strategy",
        "Advanced e-commerce",
        "Custom integrations",
        "6 months support",
        "Performance monitoring",
        "Security hardening",
        "Multi-language support",
        "Priority support",
        "Training sessions",
        "Maintenance plan",
      ],
      popular: false,
      gradient: "from-pink-500 to-red-600",
      buttonText: "Contact Sales",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="pricing" className="py-32 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
          }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6"
          >
            <Rocket className="w-4 h-4 text-purple-500 mr-2" />
            <span className="text-purple-600 dark:text-purple-300 text-sm font-medium">Pricing Plans</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-purple-600 to-purple-700 dark:from-purple-400 dark:to-purple-600 bg-clip-text text-transparent">
              Perfect Plan
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Transparent pricing with no hidden fees. Choose the plan that best fits your business needs and budget.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {pricingPlans.map((plan, index) => (
            <motion.div key={index} variants={itemVariants}>
              <motion.div
                whileHover={{
                  y: -10,
                  scale: plan.popular ? 1.02 : 1.05,
                  transition: { duration: 0.3 },
                }}
                className="h-full"
              >
                <Card
                  className={`group relative overflow-hidden h-full transition-all duration-700 transform hover:scale-105 ${
                    plan.popular
                      ? "bg-gradient-to-br from-purple-600 to-pink-600 text-white shadow-2xl shadow-purple-500/40 scale-110 border-0"
                      : "bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20"
                  }`}
                >
                  {/* Premium background effects */}
                  {!plan.popular && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-purple-50/30 dark:from-gray-800/50 dark:via-transparent dark:to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                    </>
                  )}

                  {plan.popular && (
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/90 via-pink-600/90 to-purple-700/90" />
                  )}

                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur"></div>
                        <div className="relative bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-3 rounded-full text-sm font-black shadow-2xl">
                          ⭐ MOST POPULAR ⭐
                        </div>
                      </div>
                    </div>
                  )}

                  <CardHeader className="text-center pb-8 pt-12 relative z-10">
                    <motion.div
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.3 },
                      }}
                      className={`mx-auto mb-6 p-4 bg-gradient-to-br ${plan.gradient} rounded-2xl w-fit shadow-2xl`}
                    >
                      <plan.icon className="h-8 w-8 text-white" />
                    </motion.div>

                    <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</CardTitle>

                    <div className="mb-4">
                      <span className="text-4xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                      <span className="text-gray-500 dark:text-gray-400 ml-2">{plan.period}</span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{plan.description}</p>
                  </CardHeader>

                  <CardContent className="px-8 pb-8 relative z-10">
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center text-gray-700 dark:text-gray-300"
                        >
                          <div
                            className={`w-5 h-5 bg-gradient-to-br ${plan.gradient} rounded-full flex items-center justify-center mr-3 flex-shrink-0`}
                          >
                            <Check className="h-3 w-3 text-white" />
                          </div>
                          <span className="text-sm">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        className={`w-full py-4 text-lg font-semibold rounded-full transition-all duration-300 ${
                          plan.popular
                            ? "bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-2xl hover:shadow-purple-500/25"
                            : "border-2 border-purple-500/50 text-purple-600 dark:text-purple-400 hover:bg-purple-500/10 hover:border-purple-400 bg-transparent"
                        }`}
                        variant={plan.popular ? "default" : "outline"}
                      >
                        {plan.buttonText}
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-200 dark:border-gray-700/50">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Need a Custom Solution?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Every business is unique. If our standard plans don't fit your specific needs, we'd love to create a
              custom solution tailored just for you.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className="border-purple-500/50 text-purple-600 dark:text-purple-400 hover:bg-purple-500/10 hover:border-purple-400 bg-transparent px-8 py-4 text-lg font-semibold rounded-full"
              >
                Contact Us for Custom Quote
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
