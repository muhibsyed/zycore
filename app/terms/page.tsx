"use client"

import { motion } from "framer-motion"
import { FileText, Mail, Phone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function TermsPage() {
  const sections = [
    {
      title: "Acceptance of Terms",
      content: `
        <p>By accessing and using the Zycore Solution website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
      `,
    },
    {
      title: "Services Description",
      content: `
        <p>Zycore Solution provides web development, graphic design, branding, and digital marketing services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.</p>
      `,
    },
    {
      title: "Client Responsibilities",
      content: `
        <p>As a client, you agree to:</p>
        <ul>
          <li>Provide accurate and complete information</li>
          <li>Respond to requests for information in a timely manner</li>
          <li>Provide necessary content, images, and materials</li>
          <li>Make payments according to agreed terms</li>
          <li>Respect intellectual property rights</li>
        </ul>
      `,
    },
    {
      title: "Payment Terms",
      content: `
        <p>Payment terms are specified in individual project agreements. Generally:</p>
        <ul>
          <li>A deposit is required before work begins</li>
          <li>Final payment is due upon project completion</li>
          <li>Late payments may incur additional fees</li>
          <li>Refunds are subject to our refund policy</li>
        </ul>
      `,
    },
    {
      title: "Intellectual Property",
      content: `
        <p>Upon full payment:</p>
        <ul>
          <li>Clients own the final deliverables created specifically for them</li>
          <li>Zycore Solution retains rights to general methodologies and techniques</li>
          <li>Third-party assets remain property of their respective owners</li>
          <li>We reserve the right to showcase work in our portfolio</li>
        </ul>
      `,
    },
    {
      title: "Limitation of Liability",
      content: `
        <p>Zycore Solution's liability is limited to the amount paid for services. We are not liable for:</p>
        <ul>
          <li>Indirect, incidental, or consequential damages</li>
          <li>Loss of profits or business opportunities</li>
          <li>Third-party actions or content</li>
          <li>Technical issues beyond our control</li>
        </ul>
      `,
    },
    {
      title: "Termination",
      content: `
        <p>Either party may terminate services with written notice. Upon termination:</p>
        <ul>
          <li>Payment is due for work completed</li>
          <li>Deliverables will be provided for paid work</li>
          <li>Confidential information must be returned</li>
        </ul>
      `,
    },
    {
      title: "Governing Law",
      content: `
        <p>These terms are governed by the laws of the jurisdiction where Zycore Solution is incorporated. Any disputes will be resolved through binding arbitration.</p>
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
              <FileText className="w-4 h-4 text-purple-600 dark:text-purple-400 mr-2" />
              <span className="text-purple-700 dark:text-purple-300 text-sm font-medium">Terms of Service</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Terms of{" "}
              <span className="bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
                Service
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
              Please read these terms carefully before using our services.
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
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Questions About These Terms?</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  If you have any questions about these Terms of Service, please contact us.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="mailto:legal@zycoresolution.com"
                    className="flex items-center space-x-2 text-purple-600 dark:text-purple-400 hover:underline"
                  >
                    <Mail className="h-4 w-4" />
                    <span>legal@zycoresolution.com</span>
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
