"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Calendar, Clock, Share2, Facebook, Twitter, Linkedin, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"
import { useParams } from "next/navigation"
import Image from "next/image"

export default function BlogPostPage() {
  const params = useParams()
  const slug = params.slug as string

  const blogPosts = {
    "web-development-trends-2025": {
      title: "The Future of Web Development: Trends to Watch in 2025",
      excerpt:
        "Explore the latest trends shaping the web development landscape, from AI integration to advanced frameworks and emerging technologies.",
      content: `
        <p>The web development landscape is constantly evolving, and 2025 promises to bring exciting new trends and technologies that will reshape how we build and interact with web applications. As we move forward, developers need to stay ahead of the curve to create exceptional digital experiences.</p>

        <h2>1. AI-Powered Development Tools</h2>
        <p>Artificial Intelligence is revolutionizing the development process. From code generation to automated testing, AI tools are becoming indispensable for modern developers. GitHub Copilot, ChatGPT, and other AI assistants are helping developers write code faster and more efficiently.</p>

        <h2>2. WebAssembly (WASM) Adoption</h2>
        <p>WebAssembly is gaining traction as a way to run high-performance applications in the browser. Languages like Rust, C++, and Go can now be compiled to WASM, opening up new possibilities for web applications that require intensive computation.</p>

        <h2>3. Edge Computing and CDNs</h2>
        <p>Edge computing is bringing computation closer to users, reducing latency and improving performance. Modern CDNs are evolving into edge computing platforms, enabling developers to run code at the edge for faster, more responsive applications.</p>

        <h2>4. Progressive Web Apps (PWAs) Evolution</h2>
        <p>PWAs continue to evolve with new capabilities that blur the line between web and native applications. Features like background sync, push notifications, and offline functionality are becoming more sophisticated.</p>

        <h2>5. Serverless Architecture</h2>
        <p>Serverless computing is becoming mainstream, allowing developers to focus on code rather than infrastructure. Functions-as-a-Service (FaaS) platforms are making it easier to build scalable applications without managing servers.</p>

        <h2>Conclusion</h2>
        <p>The future of web development is exciting and full of possibilities. By staying informed about these trends and continuously learning new technologies, developers can create innovative solutions that meet the evolving needs of users and businesses.</p>
      `,
      image: "/placeholder.svg?height=600&width=1200&text=Web+Development+Trends",
      author: "Alex Johnson",
      authorImage: "/placeholder.svg?height=100&width=100&text=Alex+J",
      authorBio:
        "Alex is a senior full-stack developer with over 10 years of experience in web development and emerging technologies.",
      date: "Jan 15, 2025",
      readTime: "8 min read",
      category: "Development",
      tags: ["Web Development", "Trends", "Technology", "Future", "AI", "WebAssembly"],
    },
    "brand-identity-guide": {
      title: "Creating Brand Identity That Resonates",
      excerpt:
        "Learn how to develop a brand identity that connects with your audience and drives business growth through strategic design.",
      content: `
        <p>Brand identity is more than just a logo – it's the complete visual and emotional representation of your business. A strong brand identity helps you stand out in a crowded marketplace and creates lasting connections with your audience.</p>

        <h2>Understanding Brand Identity</h2>
        <p>Brand identity encompasses all the visual elements that represent your brand, including your logo, color palette, typography, imagery, and overall design aesthetic. It's how your brand looks, feels, and communicates with the world.</p>

        <h2>Key Components of Brand Identity</h2>
        <h3>1. Logo Design</h3>
        <p>Your logo is often the first thing people notice about your brand. It should be memorable, scalable, and reflect your brand's personality and values.</p>

        <h3>2. Color Palette</h3>
        <p>Colors evoke emotions and associations. Choose a color palette that aligns with your brand's personality and resonates with your target audience.</p>

        <h3>3. Typography</h3>
        <p>The fonts you choose communicate your brand's tone and personality. Whether modern and clean or traditional and elegant, typography plays a crucial role in brand perception.</p>

        <h3>4. Visual Style</h3>
        <p>This includes your photography style, illustration approach, and overall visual aesthetic that appears across all brand touchpoints.</p>

        <h2>The Brand Identity Process</h2>
        <p>Creating a successful brand identity requires a systematic approach that starts with understanding your business, audience, and goals.</p>

        <h3>Research and Discovery</h3>
        <p>Begin by researching your target audience, competitors, and market positioning. This foundation will inform all design decisions.</p>

        <h3>Concept Development</h3>
        <p>Develop multiple concepts that explore different directions for your brand identity. Consider how each approach aligns with your brand strategy.</p>

        <h3>Design Refinement</h3>
        <p>Refine your chosen concept, ensuring it works across all applications and touchpoints where your brand will appear.</p>

        <h2>Implementation and Guidelines</h2>
        <p>Once your brand identity is finalized, create comprehensive brand guidelines that ensure consistent application across all channels and materials.</p>

        <h2>Measuring Success</h2>
        <p>Track the impact of your new brand identity through metrics like brand recognition, customer engagement, and business growth.</p>
      `,
      image: "/placeholder.svg?height=600&width=1200&text=Brand+Identity+Guide",
      author: "Sarah Chen",
      authorImage: "/placeholder.svg?height=100&width=100&text=Sarah+C",
      authorBio:
        "Sarah is a creative director specializing in brand identity and visual design with over 8 years of experience.",
      date: "Jan 12, 2025",
      readTime: "6 min read",
      category: "Branding",
      tags: ["Branding", "Identity", "Design", "Strategy", "Logo", "Visual Design"],
    },
    "ui-ux-design-principles": {
      title: "UI/UX Design Principles for Modern Applications",
      excerpt:
        "Discover the essential design principles that create exceptional user experiences in today's digital world.",
      content: `
        <p>Great user experience design is the foundation of successful digital products. In this comprehensive guide, we'll explore the fundamental principles that every designer should understand to create intuitive, engaging, and effective user interfaces.</p>

        <h2>Core UX Principles</h2>
        
        <h3>1. User-Centered Design</h3>
        <p>Always put the user at the center of your design process. Understand their needs, goals, and pain points through research and testing.</p>

        <h3>2. Consistency</h3>
        <p>Maintain consistency in visual elements, interactions, and terminology throughout your application. This reduces cognitive load and improves usability.</p>

        <h3>3. Simplicity</h3>
        <p>Keep interfaces simple and focused. Remove unnecessary elements and prioritize the most important features and content.</p>

        <h2>Essential UI Principles</h2>

        <h3>Visual Hierarchy</h3>
        <p>Use size, color, contrast, and spacing to guide users' attention and create a clear information hierarchy.</p>

        <h3>Accessibility</h3>
        <p>Design for all users, including those with disabilities. Follow WCAG guidelines and ensure your designs are inclusive.</p>

        <h3>Responsive Design</h3>
        <p>Create designs that work seamlessly across all devices and screen sizes. Mobile-first design is often the best approach.</p>

        <h2>Interaction Design</h2>
        <p>Design meaningful interactions that provide feedback and guide users through their journey. Consider micro-interactions that delight and inform.</p>

        <h2>Testing and Iteration</h2>
        <p>Continuously test your designs with real users and iterate based on feedback. Design is an iterative process that improves over time.</p>

        <h2>Tools and Resources</h2>
        <p>Leverage modern design tools like Figma, Sketch, and Adobe XD to create and prototype your designs efficiently.</p>
      `,
      image: "/placeholder.svg?height=600&width=1200&text=UI+UX+Design+Principles",
      author: "Mike Rodriguez",
      authorImage: "/placeholder.svg?height=100&width=100&text=Mike+R",
      authorBio: "Mike is a UX/UI designer and developer with expertise in creating user-centered digital experiences.",
      date: "Jan 10, 2025",
      readTime: "10 min read",
      category: "Design",
      tags: ["UI/UX", "Design", "User Experience", "Principles", "Accessibility"],
    },
  }

  const post = blogPosts[slug as keyof typeof blogPosts]

  if (!post) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Post Not Found</h1>
          <Link href="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
      </div>
    )
  }

  const shareUrl = typeof window !== "undefined" ? window.location.href : ""

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Link href="/blog" className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>

            <div className="mb-6">
              <span className="text-sm text-purple-600 dark:text-purple-400 font-medium uppercase tracking-wide bg-purple-100 dark:bg-purple-500/10 px-3 py-1 rounded-full">
                {post.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">{post.excerpt}</p>

            <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-4">
                <Image
                  src={post.authorImage || "/placeholder.svg"}
                  alt={post.author}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">{post.author}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Share2 className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                <a
                  href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${post` />
                <a
                  href={\`https://twitter.com/intent/tweet?url=${shareUrl}&text=${post.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-500 dark:text-gray-400 hover:text-blue-500 transition-colors"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a
                  href={\`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 transition-colors"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-500 dark:text-gray-400 hover:text-blue-700 transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              width={1200}
              height={600}
              className="w-full rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="prose prose-lg dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center space-x-2 mb-4">
                  <Tag className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Tags:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-sm bg-purple-100 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Author Bio */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mt-12"
              >
                <Card className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Image
                        src={post.authorImage || "/placeholder.svg"}
                        alt={post.author}
                        width={64}
                        height={64}
                        className="rounded-full"
                      />
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">About {post.author}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{post.authorBio}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="sticky top-24 space-y-8"
              >
                {/* Table of Contents */}
                <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Table of Contents</h3>
                    <nav className="space-y-2">
                      <a href="#" className="block text-sm text-purple-600 dark:text-purple-400 hover:underline">
                        Introduction
                      </a>
                      <a
                        href="#"
                        className="block text-sm text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                      >
                        Key Concepts
                      </a>
                      <a
                        href="#"
                        className="block text-sm text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                      >
                        Best Practices
                      </a>
                      <a
                        href="#"
                        className="block text-sm text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                      >
                        Implementation
                      </a>
                      <a
                        href="#"
                        className="block text-sm text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                      >
                        Conclusion
                      </a>
                    </nav>
                  </CardContent>
                </Card>

                {/* Share */}
                <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Share This Article</h3>
                    <div className="space-y-3">
                      <a
                        href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${post.title}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                      >
                        <Twitter className="h-4 w-4" />
                        <span className="text-sm font-medium">Share on Twitter</span>
                      </a>
                      <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                      >
                        <Facebook className="h-4 w-4" />
                        <span className="text-sm font-medium">Share on Facebook</span>
                      </a>
                      <a
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                      >
                        <Linkedin className="h-4 w-4" />
                        <span className="text-sm font-medium">Share on LinkedIn</span>
                      </a>
                    </div>
                  </CardContent>
                </Card>

                {/* Newsletter */}
                <Card className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border border-purple-200 dark:border-purple-500/20">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Stay Updated</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                      Get the latest articles and insights delivered to your inbox.
                    </p>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white">
                      Subscribe Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Related Articles</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Continue reading with these related posts</p>
          </motion.div>

          <div className="text-center">
            <Link href="/blog">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4"
              >
                View All Articles
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
