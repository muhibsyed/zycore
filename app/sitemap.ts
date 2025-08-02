import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://zycoresolution.com"

  // Static pages
  const staticPages = [
    "",
    "/services",
    "/services/web-development",
    "/services/graphic-design",
    "/services/branding",
    "/portfolio",
    "/about",
    "/blog",
    "/contact",
    "/privacy",
    "/terms",
  ]

  // Portfolio projects
  const portfolioProjects = [
    "/portfolio/ecommerce-platform",
    "/portfolio/brand-identity",
    "/portfolio/mobile-app-ui",
    "/portfolio/corporate-website",
    "/portfolio/marketing-campaign",
    "/portfolio/saas-dashboard",
  ]

  // Blog posts
  const blogPosts = [
    "/blog/web-development-trends-2025",
    "/blog/brand-identity-guide",
    "/blog/ui-ux-design-principles",
    "/blog/ecommerce-optimization",
    "/blog/motion-design-digital",
    "/blog/seo-strategies-2025",
  ]

  const allPages = [...staticPages, ...portfolioProjects, ...blogPosts]

  return allPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === "" ? "daily" : page.startsWith("/blog") ? "weekly" : "monthly",
    priority: page === "" ? 1 : page.startsWith("/blog") ? 0.8 : 0.9,
  }))
}
