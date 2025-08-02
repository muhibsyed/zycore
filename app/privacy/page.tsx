"use client"

import { motion } from "framer-motion"
import { Shield, Mail, Phone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function PrivacyPage() {
  const sections = [
    {
      title: "Information We Collect",
      content: `
        <p>We collect information you provide directly to us, such as when you:</p>
        <ul>
          <li>Fill out our contact forms</li>
          <li>Subscribe to our newsletter</li>
          <li>Request a quote or consultation</li>
          <li>Communicate with us via email or phone</li>
        </ul>
        <p>This may include your name, email address, phone number, company name, and project details.</p>
      `,
    },
    {
      title: "How We Use Your Information",
      content: `
        <p>We use the information we collect to:</p>
        <ul>
          <li>Respond to your inquiries and provide customer service</li>
          <li>Send you updates about our services and company news</li>
          <li>Improve our website and services</li>
          <li>Comply with legal obligations</li>
        </ul>
      `,
    },
    {
      title: "Information Sharing",
      content: `
        <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except:</p>
        <ul>
          <li>To trusted service providers who assist us in operating our website</li>
          <li>When required by law or to protect our rights</li>
          <li>In connection with a business transfer or merger</li>
        </ul>
      `,
    },
    {
      title: "Data Security",
      content: `
        <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.</p>
      `,
    },
    {
      title: "Cookies and Tracking",
      content: `
        <p>Our website uses cookies and similar tracking technologies to:</p>
        <ul>
          <li>Remember your preferences</li>
          <li>Analyze website traffic and usage</li>
          <li>Improve user experience</li>
        </ul>
        <p>You can control cookie settings through your browser preferences.</p>
      `,
    },
    {
      title: "Your Rights",
      content: `
        <p>You have the right to:</p>
        <ul>
          <li>Access the personal information we hold about you</li>
          <li>Request correction of inaccurate information</li>
          <li>Request deletion of your personal information</li>
          <li>Opt-out of marketing communications</li>
        </ul>
      `,
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 mb-6">
              <Shield className="w-4 h-4 text-purple-600 dark:text-purple-400 mr-2" />
              <span className="text-purple-700 dark:text-purple-300 text-sm font-medium">Privacy Policy</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Privacy{" "}
              <span className="bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
                Policy
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Last updated: January 2025</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{section.title}</h2>
                    <div
                      className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300"
                      dangerouslySetInnerHTML={{ __html: section.content }}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <Card className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border border-purple-200 dark:border-purple-500/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Questions About Your Privacy?</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  If you have any questions about this Privacy Policy or how we handle your data, please contact us.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="mailto:privacy@zycoresolution.com"
                    className="flex items-center space-x-2 text-purple-600 dark:text-purple-400 hover:underline"
                  >
                    <Mail className="h-4 w-4" />
                    <span>privacy@zycoresolution.com</span>
                  </a>
                  <a
                    href="tel:+15551234567"
                    className="flex items-center space-x-2 text-purple-600 dark:text-purple-400 hover:underline"
                  >
                    <Phone className="h-4 w-4" />
                    <span>+1 (555) 123-4567</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
