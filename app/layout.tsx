import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Sai Priya Veerabomma | Software Engineer & ML Specialist",
  description: "Machine Learning Engineer & Full Stack Developer specialized in AI-powered applications",
  keywords: ["Machine Learning", "Software Engineer", "AI", "Full Stack Developer", "Data Engineer", "Portfolio"],
  authors: [{ name: "Sai Priya Veerabomma" }],
  creator: "Sai Priya Veerabomma",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://saipriya.vercel.app/",
    title: "Sai Priya Veerabomma | Software Engineer & ML Specialist",
    description: "Machine Learning Engineer & Full Stack Developer specialized in AI-powered applications",
    siteName: "Sai Priya Veerabomma Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sai Priya Veerabomma | Software Engineer & ML Specialist",
    description: "Machine Learning Engineer & Full Stack Developer specialized in AI-powered applications",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="portfolio-theme"
        >
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'