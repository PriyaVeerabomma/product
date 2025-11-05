"use client"

import { useEffect, useState, useRef } from "react"
import { personal } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import { RotatingText } from "@/components/atoms/RotatingText"
import { motion } from "framer-motion"

// Array of different roles for the rotating text
const roles = [
  "Backend Developer",
  "Full Stack Developer",
  "AI Enthusiast",
  "Software Engineer",
  "Problem Solver",
]

export function Hero() {
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)

  // Track scroll for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden" ref={heroRef}>
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/5 dark:bg-primary/10"
            initial={{
              x: Math.random() * 100 - 50 + "%",
              y: Math.random() * 100 - 50 + "%",
              scale: Math.random() * 0.5 + 0.5,
              opacity: 0,
            }}
            animate={{
              x: [Math.random() * 100 - 50 + "%", Math.random() * 100 - 50 + "%", Math.random() * 100 - 50 + "%"],
              y: [Math.random() * 100 - 50 + "%", Math.random() * 100 - 50 + "%", Math.random() * 100 - 50 + "%"],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            style={{
              width: Math.random() * 300 + 50 + "px",
              height: Math.random() * 300 + 50 + "px",
            }}
          />
        ))}
      </div>

      {/* Flowing gradient background */}
      <div className="absolute inset-0 z-0 bg-gradient-radial from-transparent via-primary/5 to-transparent animate-pulse-slow opacity-50" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent animate-flow opacity-40" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 relative inline-block">
              Hi, I'm{" "}
              <motion.span
                className="text-primary relative inline-block"
                animate={{
                  textShadow: [
                    "0 0 5px rgba(var(--primary-rgb), 0.3)",
                    "0 0 15px rgba(var(--primary-rgb), 0.5)",
                    "0 0 5px rgba(var(--primary-rgb), 0.3)",
                  ],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              >
                Sai Priya
              </motion.span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-muted-foreground mb-8">
              <RotatingText texts={roles} interval={2000} />
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">{personal.description}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button asChild size="lg" className="rounded-md px-8 relative overflow-hidden group">
              <a href="#contact">
                <span className="relative z-10">Get In Touch</span>
                <span className="absolute inset-0 bg-primary/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </a>
            </Button>

            <Button asChild variant="outline" size="lg" className="rounded-md px-8 relative overflow-hidden group">
              <a
                href="https://drive.google.com/file/d/1cdnflDsMM1flFk3gDA0CJEK_D4CloGxS/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="relative z-10">Download Resume</span>
                <span className="absolute inset-0 bg-primary/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </a>
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <Button variant="ghost" size="icon" asChild className="rounded-full">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              <ArrowDown className="h-6 w-6" />
              <span className="sr-only">Scroll Down</span>
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
