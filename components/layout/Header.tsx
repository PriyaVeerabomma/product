"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ModeToggle } from "@/components/atoms/ModeToggle"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)

      // Determine active section
      const sections = document.querySelectorAll("section[id]")
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionHeight = section.clientHeight
        const sectionId = section.getAttribute("id") || ""

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)

    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      })

      setActiveSection(targetId)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-gradient-to-b from-[#f5f3f0] to-[#ebe7dc] dark:from-[#1f1f1f] dark:to-[#1a1a1a] backdrop-blur-sm shadow-lg"
        : "bg-transparent"
        }`}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap');

        /* Header background with subtle bevel when scrolled */
        header {
          font-family: 'IBM Plex Mono', monospace;
        }

        /* Subtle inset shadow for bevel effect when scrolled */
        header.scrolled {
          box-shadow: 
            inset 0 1px 0 rgba(255, 255, 255, 0.5),
            inset 0 -1px 0 rgba(0, 0, 0, 0.05),
            0 4px 12px rgba(0, 0, 0, 0.08);
        }

        header.dark.scrolled {
          box-shadow: 
            inset 0 1px 0 rgba(16, 185, 129, 0.1),
            inset 0 -1px 0 rgba(0, 0, 0, 0.2),
            0 4px 12px rgba(0, 0, 0, 0.3);
        }
      `}</style>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="text-sm font-bold tracking-wider transition-colors"
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                color: isScrolled ? "#3e2723" : "currentColor",
              }}
            >
              <span className="hidden sm:inline">SAIPRIYA</span>
              <span className="sm:hidden">SP</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-xs font-medium transition-all duration-200 tracking-wide uppercase
                  ${activeSection === link.href.replace("#", "")
                    ? "text-[#8b7355] dark:text-[#10b981] font-bold border-b-2 border-[#8b7355] dark:border-[#10b981] pb-1"
                    : "text-[#8b7355] dark:text-[#a7f3d0] hover:text-[#3e2723] dark:hover:text-[#10b981]"
                  }`}
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  letterSpacing: "0.05em",
                }}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <ModeToggle />

            {/* Mobile Navigation */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-[#8b7355] dark:text-[#10b981] hover:bg-[#f5f3f0] dark:hover:bg-[#2a2a2a]"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-[#ebe7dc] dark:bg-[#1f1f1f] border-[#d9d3c4] dark:border-[#2a2a2a]"
              >
                <div className="flex flex-col space-y-6 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={(e) => {
                        handleNavClick(e, link.href)
                      }}
                      className={`text-sm font-medium transition-colors tracking-wide uppercase
                        ${activeSection === link.href.replace("#", "")
                          ? "text-[#8b7355] dark:text-[#10b981] font-bold"
                          : "text-[#8b7355] dark:text-[#a7f3d0] hover:text-[#3e2723] dark:hover:text-[#10b981]"
                        }`}
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

