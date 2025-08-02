import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: "Zycore Solution - Premium Digital Agency | Web Development & Design",
  description:
    "Transform your digital presence with cutting-edge web development, creative design solutions, and powerful branding strategies. Premium digital agency serving businesses worldwide.",
  keywords: "web development, graphic design, branding, digital agency, website design, UI/UX, Next.js, React",
  authors: [{ name: "Zycore Solution" }],
  creator: "Zycore Solution",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zycoresolution.com",
    title: "Zycore Solution - Premium Digital Agency",
    description:
      "Transform your digital presence with cutting-edge web development, creative design solutions, and powerful branding strategies.",
    siteName: "Zycore Solution",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zycore Solution - Premium Digital Agency",
    description:
      "Transform your digital presence with cutting-edge web development, creative design solutions, and powerful branding strategies.",
    creator: "@zycoresolution",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange={false}
          storageKey="zycore-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
