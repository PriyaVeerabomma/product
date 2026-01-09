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
  metadataBase: new URL("https://www.priyaveerabomma.me"),
  title: "Priya Veerabomma | Software Engineer",
  description:
    " Sai Priya Veerabomma is a Software Engineer with experience building production-grade AI and backend systems. Specialized in Java, Python, RAG, ReRAG, prompt engineering,React, Next.js, FastAPI, LangGraph,Langchain, Gen-AI, AWS, GCP, Cloud native, data structures algorithms, leetcode and scalable cloud-native architectures, with experience delivering low-latency, reliable systems in academic and industry settings.",
  keywords: [
    "Sai Priya Veerabomma",
    "Priya Veerabomma",
    "Sai Priya",
    "priyaveerabomma",
    "priya shetty",
    "priya shetty northeastern university",
    "Sai Priya software engineer",
    "Software Engineer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Portfolio",
    "AI Engineer",
    "Backend Developer",
    "Cloud Engineer",
    "AWS Developer",
    "GCP Developer",
    "FastAPI Developer",
    "Langchain Developer",
    "RAG Specialist",
    "ReRAG Specialist",
    "Prompt Engineering",
    "Scalable Applications",
    "Portfolio",
    "Web Developer",
    "Software Developer",
    "AI-powered Applications",
    "Data Structures and Algorithms",
    "LeetCode Enthusiast"
  ],
  authors: [{ name: "Sai Priya Veerabomma" }],
  creator: "Sai Priya Veerabomma",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://saipriya.vercel.app/",
    title: "Sai Priya Veerabomma | Software Engineer",
    description:
      "Portfolio of Sai Priya Veerabomma, Software Engineer building scalable web and AI-powered applications.",
    siteName: "Sai Priya Veerabomma Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Sai Priya Veerabomma Portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Sai Priya Veerabomma | Software Engineer",
    description:
      "Portfolio of Sai Priya Veerabomma – Software Engineer specializing in full stack and AI systems."
  },
  robots: {
    index: true,
    follow: true
  },
  generator: "v0.dev"
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Sai Priya Veerabomma",
              jobTitle: "Software Engineer",
              url: "https://saipriya.vercel.app/",
              sameAs: [
                "https://github.com/PriyaVeerabomma",
                "https://www.linkedin.com/in/priya-veerabomma/"
              ]
            })
          }}
        />

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="portfolio-theme"
        >
          <Header />
          <main className="flex-grow">{children}</main>
          {/* <Footer /> */}
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'