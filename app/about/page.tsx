"use client"

import { motion } from "framer-motion"
import { Users, Target, Award, Clock, ArrowRight, Heart, Lightbulb, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  const stats = [
    { icon: Users, label: "Happy Clients", value: "200+", color: "from-blue-500 to-purple-600" },
    { icon: Target, label: "Projects Completed", value: "350+", color: "from-purple-500 to-pink-600" },
    { icon: Award, label: "Awards Won", value: "25+", color: "from-pink-500 to-red-600" },
    { icon: Clock, label: "Years Experience", value: "8+", color: "from-red-500 to-orange-600" },
  ]

  const values = [
    {
      icon: Heart,
      title: "Passion-Driven",
      description:
        "We're passionate about creating exceptional digital experiences that make a real difference for our clients and their customers.",
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description:
        "We stay ahead of the curve by embracing new technologies and creative approaches to solve complex challenges.",
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description:
        "We maintain the highest standards in everything we do, ensuring every project meets our rigorous quality criteria.",
    },
    {
      icon: Users,
      title: "Client-Focused",
      description:
        "Our clients' success is our success. We work closely with you to understand your goals and exceed your expectations.",
    },
  ]

  const team = [
    {
      name: "Alex Johnson",
      position: "Founder & CEO",
      image: "/placeholder.svg?height=400&width=400&text=Alex+Johnson",
      bio: "With over 10 years of experience in digital strategy and business development, Alex leads our team with vision and expertise.",
      skills: ["Strategy", "Leadership", "Business Development"],
    },
    {
      name: "Sarah Chen",
      position: "Creative Director",
      image: "/placeholder.svg?height=400&width=400&text=Sarah+Chen",
      bio: "Sarah brings creativity and innovation to every project, ensuring our designs are both beautiful and functional.",
      skills: ["Design", "Branding", "Creative Strategy"],
    },
    {
      name: "Mike Rodriguez",
      position: "Lead Developer",
      image: "/placeholder.svg?height=400&width=400&text=Mike+Rodriguez",
      bio: "Mike is our technical expert, specializing in modern web technologies and scalable application development.",
      skills: ["React", "Node.js", "System Architecture"],
    },
    {
      name: "Emily Davis",
      position: "UX/UI Designer",
      image: "/placeholder.svg?height=400&width=400&text=Emily+Davis",
      bio: "Emily focuses on creating intuitive user experiences that delight users and drive business results.",
      skills: ["UX Design", "UI Design", "User Research"],
    },
  ]

  const timeline = [
    {
      year: "2016",
      title: "Company Founded",
      description: "Started as a small team with big dreams to transform digital experiences.",
    },
    {
      year: "2018",
      title: "First Major Client",
      description: "Landed our first enterprise client and delivered a game-changing e-commerce platform.",
    },
    {
      year: "2020",
      title: "Team Expansion",
      description: "Grew our team to 15+ talented professionals across design and development.",
    },
    {
      year: "2022",
      title: "Award Recognition",
      description: "Received multiple industry awards for excellence in web design and development.",
    },
    {
      year: "2024",
      title: "Global Reach",
      description: "Expanded our services globally, serving clients across 5 continents.",
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
              About{" "}
              <span className="bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
                Zycore Solution
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We're a passionate team of designers, developers, and digital strategists dedicated to creating
              exceptional digital experiences that drive real business results.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`mb-4 p-4 bg-gradient-to-br ${stat.color} rounded-2xl w-fit mx-auto shadow-lg`}>
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300">
                <p>
                  Founded in 2016, Zycore Solution began as a small team with a big vision: to bridge the gap between
                  creativity and technology. We believed that exceptional digital experiences could transform businesses
                  and create meaningful connections with customers.
                </p>
                <p>
                  Over the years, we've grown from a startup to a trusted partner for businesses of all sizes. Our
                  journey has been marked by continuous learning, innovation, and an unwavering commitment to
                  excellence. We've had the privilege of working with amazing clients who have challenged us to push
                  boundaries and deliver solutions that exceed expectations.
                </p>
                <p>
                  Today, we're proud to be a team of passionate professionals who combine technical expertise with
                  creative vision to deliver digital solutions that drive real business results. Our success is measured
                  not just by the projects we complete, but by the lasting relationships we build and the impact we
                  create.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Image
                src="/placeholder.svg?height=600&width=800&text=Our+Story"
                alt="Our Story"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Our Values</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-500/50 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl w-fit mx-auto">
                      <value.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{value.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Our Journey</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Key milestones in our company's growth</p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-purple-200 dark:bg-purple-800"></div>

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                    <div className="text-purple-600 dark:text-purple-400 font-bold text-lg mb-2">{item.year}</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                  </div>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full border-4 border-white dark:border-gray-900"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Meet Our Team</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The talented individuals behind our success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-500/50 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden">
                  <div className="relative overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{member.name}</h3>
                    <p className="text-purple-600 dark:text-purple-400 mb-4">{member.position}</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{member.bio}</p>

                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="text-xs bg-purple-100 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 px-2 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
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
              Ready to Work Together?
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
                  Get In Touch
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
