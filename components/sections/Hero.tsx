"use client"

import { useEffect, useState, useRef } from "react"
import { useTheme } from "next-themes"
import { personal } from "@/lib/data"
import { ArrowDown } from "lucide-react"
import { motion } from "framer-motion"

const roles = [
  "Backend Engineer",
  "GenAI Developer",
  "Full Stack Engineer",
  "Software Developer",
  "Problem Solver",
]

function RotatingTextInline({ texts, interval = 3500 }: { texts: string[]; interval?: number }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (!texts || texts.length === 0) return

    // Start fade out transition
    const fadeOutTimer = setTimeout(() => {
      setIsVisible(false)
    }, interval - 500)

    // Change to next text
    const changeTimer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length)
      setIsVisible(true)
    }, interval)

    return () => {
      clearTimeout(fadeOutTimer)
      clearTimeout(changeTimer)
    }
  }, [currentIndex, texts, interval])

  if (!texts || texts.length === 0) {
    return <span>Software Developer</span>
  }

  return (
    <span
      style={{
        transition: "opacity 500ms ease-in-out",
        opacity: isVisible ? 1 : 0,
        display: "inline-block",
        minWidth: "200px",
      }}
    >
      {texts[currentIndex]}
    </span>
  )
}

export function Hero() {
  const [mounted, setMounted] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  // Smooth scroll handler
  const handleScrollClick = (e: React.MouseEvent) => {
    e.preventDefault()
    const nextSection = document.querySelector("#projects") || document.querySelector("section:nth-of-type(2)")

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (!mounted) return null

  const isLight = theme !== "dark"

  // Authentic 1984 Mac color palette
  const colors = {
    light: {
      shell: "#f5f5f0",
      bezelOuter: "#ebe5d9",
      bezelInner: "#dcd4c4",
      screenCavity: "#1a1a1a",
      crtGlass: "#f8f4ee",
      crtGlassEnd: "#eae4d8",
      text: "#2a2420",
      textSecondary: "#6b5d52",
      accent: "#8b7355",
      accentLight: "#a68365",
      detailDark: "#3a3530",
      detailMedium: "#6b5d52",
    },
    dark: {
      shell: "#1f1f1f",
      bezelOuter: "#171717",
      bezelInner: "#0f0f0f",
      screenCavity: "#000000",
      crtGlass: "#0a0a0a",
      crtGlassEnd: "#050505",
      text: "#2ecc71",
      textSecondary: "#27ae60",
      accent: "#1abc9c",
      accentLight: "#16a085",
      detailDark: "#ffffff",
      detailMedium: "#cccccc",
    },
  }

  const palette = isLight ? colors.light : colors.dark

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-16 relative overflow-hidden transition-colors duration-700"
      style={{
        backgroundColor: isLight ? "#ffffff" : "#0a0a0a",
      }}
      ref={heroRef}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap');

        * {
          font-family: 'IBM Plex Mono', monospace;
        }

        html {
          scroll-behavior: smooth;
        }

        /* ================================================================
           MAC CONTAINER - The outer box
           ================================================================ */
        .mac-container {
          position: relative;
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
        }

        /* ================================================================
           LAYER 1: MAC-SHELL (THE COMPUTER BODY)
           ================================================================ */
        .mac-shell {
          position: relative;
          width: 100%;
          border-radius: 44px;
          padding: 56px;
          background-color: var(--shell-color);

          box-shadow:
            inset 0 6px 8px rgba(255, 255, 255, 0.7),
            inset 0 -12px 24px rgba(0, 0, 0, 0.22),
            inset 8px 0 8px rgba(255, 255, 255, 0.4),
            inset -8px 0 8px rgba(0, 0, 0, 0.08),
            0 40px 80px rgba(0, 0, 0, 0.15),
            0 20px 40px rgba(0, 0, 0, 0.1);

          transition: all 700ms cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* ================================================================
           LAYER 2: MAC-BEZEL-OUTER
           ================================================================ */
        .mac-bezel-outer {
          position: relative;
          width: 100%;
          border-radius: 36px;
          padding: 32px;
          background-color: var(--bezel-outer-color);

          box-shadow:
            inset 0 8px 12px rgba(255, 255, 255, 0.6),
            inset 0 -16px 28px rgba(0, 0, 0, 0.4);

          transition: all 700ms cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* ================================================================
           LAYER 3: MAC-BEZEL-INNER
           ================================================================ */
        .mac-bezel-inner {
          position: relative;
          width: 100%;
          border-radius: 28px;
          padding: 24px;
          background-color: var(--bezel-inner-color);

          box-shadow:
            inset 0 12px 20px rgba(0, 0, 0, 0.5);

          transition: all 700ms cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* ================================================================
           LAYER 4: MAC-SCREEN-CAVITY
           ================================================================ */
        .mac-screen-cavity {
          position: relative;
          width: 100%;
          border-radius: 18px;
          padding: 28px;
          background-color: var(--screen-cavity-color);

          box-shadow:
            inset 0 20px 40px rgba(0, 0, 0, 0.9),
            inset 0 -4px 12px rgba(0, 0, 0, 0.7);

          transition: all 700ms cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* ================================================================
           LAYER 5: MAC-CRT-GLASS
           ================================================================ */
        .mac-crt-glass {
          position: relative;
          width: 100%;
          border-radius: 12px;
          padding: 68px 60px;

          background: radial-gradient(
            ellipse at 50% 45%,
            var(--crt-glass-color) 0%,
            var(--crt-glass-end) 65%
          );

          box-shadow:
            inset 0 -6px 12px rgba(0, 0, 0, 0.2),
            inset 0 2px 4px rgba(255, 255, 255, 0.3),
            0 0 32px rgba(255, 255, 255, 0.15),
            0 0 64px rgba(0, 0, 0, 0.2);

          transition: all 700ms cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* ================================================================
           CONTENT INSIDE GLASS
           ================================================================ */
        .content-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 28px;
        }

        .screen-title {
          font-size: 8px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          font-weight: 700;
          color: var(--text-secondary);
          margin: 0;
          padding-bottom: 16px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.12);
          opacity: 0.8;
          transition: all 700ms cubic-bezier(0.4, 0, 0.2, 1);
          min-height: 20px;
        }

        .hero-heading {
          font-size: clamp(2.2rem, 8vw, 4rem);
          font-weight: 700;
          letter-spacing: -0.02em;
          line-height: 1.1;
          color: var(--text-primary);
          margin: 0;
          transition: color 700ms cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hero-accent {
          background: linear-gradient(135deg, var(--accent-color), var(--accent-light));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: var(--accent-color);
        }

        .hero-subtitle {
          font-size: clamp(0.95rem, 3.5vw, 1.5rem);
          font-weight: 600;
          letter-spacing: 0.08em;
          color: var(--text-secondary);
          min-height: 68px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0;
          transition: color 700ms cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hero-description {
          font-size: 0.93rem;
          line-height: 1.7;
          letter-spacing: 0.008em;
          color: var(--text-secondary);
          max-width: 620px;
          margin: 0;
          transition: color 700ms cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hero-buttons {
          display: flex;
          flex-direction: row;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 20px;
        }

        .hero-btn {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 13px 30px;
          border-radius: 6px;
          border: 2px solid;
          background: transparent;
          cursor: pointer;
          transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          user-select: none;
          -webkit-tap-highlight-color: transparent;
        }

        .hero-btn-primary {
          color: white;
          border-color: var(--accent-color);
          background: linear-gradient(135deg, var(--accent-color), var(--accent-light));
          box-shadow: 0 6px 14px rgba(139, 115, 85, 0.25);
        }

        .hero-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(139, 115, 85, 0.35);
        }

        .hero-btn-primary:active {
          transform: translateY(0);
        }

        .hero-btn-primary.dark {
          color: #0a0a0a;
          box-shadow: 0 6px 14px rgba(26, 188, 156, 0.3);
        }

        .hero-btn-primary.dark:hover {
          box-shadow: 0 10px 24px rgba(26, 188, 156, 0.4);
        }

        .hero-btn-secondary {
          color: var(--accent-color);
          border-color: var(--accent-color);
          background: transparent;
        }

        .hero-btn-secondary:hover {
          background: rgba(139, 115, 85, 0.07);
          transform: translateY(-2px);
        }

        .hero-btn-secondary.dark:hover {
          background: rgba(26, 188, 156, 0.08);
        }

        .hero-btn:focus-visible {
          outline: 2px solid var(--accent-color);
          outline-offset: 2px;
        }

        /* ================================================================
           MAC PHYSICAL DETAILS
           ================================================================ */

        .mac-speaker-grille {
          display: flex;
          flex-direction: column;
          gap: 2px;
          width: 120px;
          margin-top: 28px;
          padding: 0 20px;
        }

        .grille-line {
          height: 2px;
          background-color: var(--detail-medium);
          border-radius: 1px;
          opacity: 0.4;
        }

        .mac-disk-drive {
          width: 100%;
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 24px;
        }

        .drive-button {
          width: 60px;
          height: 4px;
          background-color: var(--detail-dark);
          border-radius: 2px;
          opacity: 0.3;
          transition: opacity 200ms ease;
        }

        .drive-button:hover {
          opacity: 0.5;
        }

        /* ================================================================
           SCROLL INDICATOR
           ================================================================ */
        .hero-scroll {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          font-size: 0.7rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--text-secondary);
          text-decoration: none;
          cursor: pointer;
          transition: all 300ms ease;
          padding: 12px;
          border-radius: 8px;
          opacity: 0.7;
          user-select: none;
          -webkit-tap-highlight-color: transparent;
          border: none;
          background: transparent;
        }

        .hero-scroll:hover {
          color: var(--accent-color);
          opacity: 1;
          transform: translateX(-50%) translateY(5px);
        }

        .hero-scroll:focus-visible {
          outline: 2px solid var(--accent-color);
          outline-offset: 4px;
        }

        .scroll-arrow {
          display: inline-block;
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(8px);
          }
        }

        /* ================================================================
           RESPONSIVE DESIGN
           ================================================================ */

        @media (max-width: 768px) {
          .mac-shell {
            padding: 44px;
            border-radius: 40px;
          }

          .mac-bezel-outer {
            padding: 24px;
            border-radius: 32px;
          }

          .mac-bezel-inner {
            padding: 18px;
            border-radius: 24px;
          }

          .mac-screen-cavity {
            padding: 20px;
            border-radius: 16px;
          }

          .mac-crt-glass {
            padding: 52px 44px;
            border-radius: 10px;
          }

          .screen-title {
            font-size: 7px;
            margin-bottom: 10px;
            padding-bottom: 12px;
          }

          .hero-heading {
            margin-bottom: 8px;
          }

          .hero-subtitle {
            min-height: 60px;
          }

          .hero-buttons {
            gap: 14px;
            margin-top: 16px;
          }

          .hero-btn {
            padding: 11px 24px;
            font-size: 0.75rem;
          }

          .mac-speaker-grille {
            width: 100px;
            margin-top: 20px;
          }

          .mac-disk-drive {
            margin-top: 16px;
          }
        }

        @media (max-width: 640px) {
          .mac-shell {
            padding: 32px;
            border-radius: 36px;
          }

          .mac-bezel-outer {
            padding: 18px;
            border-radius: 28px;
          }

          .mac-bezel-inner {
            padding: 14px;
            border-radius: 20px;
          }

          .mac-screen-cavity {
            padding: 16px;
            border-radius: 14px;
          }

          .mac-crt-glass {
            padding: 40px 32px;
            border-radius: 8px;
          }

          .hero-heading {
            font-size: clamp(1.6rem, 6vw, 2.6rem);
          }

          .hero-subtitle {
            font-size: clamp(0.9rem, 2.5vw, 1.2rem);
            min-height: 54px;
          }

          .hero-description {
            font-size: 0.87rem;
            line-height: 1.65;
          }

          .hero-buttons {
            flex-direction: column;
            gap: 10px;
          }

          .hero-btn {
            width: 100%;
            padding: 11px 20px;
            font-size: 0.7rem;
          }

          .hero-scroll {
            display: none;
          }

          .mac-speaker-grille {
            width: 80px;
            gap: 1.5px;
            margin-top: 16px;
          }

          .grille-line {
            height: 1.5px;
          }

          .mac-disk-drive {
            margin-top: 12px;
            gap: 6px;
          }

          .drive-button {
            width: 45px;
            height: 3px;
          }
        }

        @media (max-width: 480px) {
          .mac-shell {
            padding: 24px;
            border-radius: 32px;
          }

          .mac-bezel-outer {
            padding: 14px;
            border-radius: 24px;
          }

          .mac-bezel-inner {
            padding: 10px;
            border-radius: 18px;
          }

          .mac-screen-cavity {
            padding: 12px;
            border-radius: 12px;
          }

          .mac-crt-glass {
            padding: 32px 24px;
            border-radius: 6px;
          }

          .content-wrapper {
            gap: 20px;
          }

          .screen-title {
            font-size: 6px;
            padding-bottom: 10px;
          }

          .hero-heading {
            font-size: clamp(1.4rem, 5.5vw, 2.2rem);
          }

          .hero-subtitle {
            font-size: clamp(0.85rem, 2.2vw, 1.05rem);
            min-height: 48px;
          }

          .hero-description {
            font-size: 0.85rem;
          }

          .hero-btn {
            padding: 10px 18px;
            font-size: 0.65rem;
          }

          .mac-speaker-grille {
            width: 60px;
            gap: 1px;
            margin-top: 12px;
          }

          .grille-line {
            height: 1px;
          }
        }

        /* ================================================================
           ACCESSIBILITY & MOTION
           ================================================================ */

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }

          .scroll-arrow {
            animation: none;
          }
        }

        @media (prefers-contrast: more) {
          .hero-heading {
            font-weight: 900;
          }

          .hero-btn {
            border-width: 3px;
          }
        }

        @media (prefers-color-scheme: dark) {
          :root { color-scheme: dark; }
        }

        @media (prefers-color-scheme: light) {
          :root { color-scheme: light; }
        }
      `}</style>

      {/* CSS Variables */}
      <div
        style={{
          "--shell-color": palette.shell,
          "--bezel-outer-color": palette.bezelOuter,
          "--bezel-inner-color": palette.bezelInner,
          "--screen-cavity-color": palette.screenCavity,
          "--crt-glass-color": palette.crtGlass,
          "--crt-glass-end": palette.crtGlassEnd,
          "--text-primary": palette.text,
          "--text-secondary": palette.textSecondary,
          "--accent-color": palette.accent,
          "--accent-light": palette.accentLight,
          "--detail-dark": palette.detailDark,
          "--detail-medium": palette.detailMedium,
        } as React.CSSProperties}
      >
        {/* MAC CONTAINER */}
        <div className="mac-container">
          {/* LAYER 1: SHELL */}
          <motion.div
            className="mac-shell"
            initial={{ opacity: 0, y: 50, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
              delay: 0.05,
            }}
          >
            {/* LAYER 2: BEZEL OUTER */}
            <div className="mac-bezel-outer">
              {/* LAYER 3: BEZEL INNER */}
              <div className="mac-bezel-inner">
                {/* LAYER 4: SCREEN CAVITY */}
                <div className="mac-screen-cavity">
                  {/* LAYER 5: CRT GLASS */}
                  <div className="mac-crt-glass">
                    {/* CONTENT */}
                    <div className="content-wrapper">
                      <motion.div
                        className="screen-title"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                      </motion.div>

                      <motion.h1
                        className="hero-heading"
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.65, delay: 0.25 }}
                      >
                        Hello, I'm{" "}
                        <span className="hero-accent">Priya</span>
                      </motion.h1>

                      {/* ===== ROTATING TEXT - NOW WORKING ===== */}
                      <motion.div
                        className="hero-subtitle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.32 }}
                      >
                        <RotatingTextInline texts={roles} interval={3500} />
                      </motion.div>

                      <motion.div
                        className="hero-buttons"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        {/* Add your buttons here if needed */}
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* MAC PHYSICAL DETAILS */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              {/* Speaker Grille */}
              <div className="mac-speaker-grille">
                {[...Array(6)].map((_, i) => (
                  <div key={`grille-${i}`} className="grille-line" />
                ))}
              </div>

              {/* Disk Drive Slot */}
              <div className="mac-disk-drive">
                <div className="drive-button" />
                <div className="drive-button" style={{ opacity: 0.5 }} />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      {/* <motion.button
        onClick={handleScrollClick}
        className="hero-scroll"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        aria-label="Scroll to next section"
        type="button"
      >
        <span>Scroll to explore</span>
        <span className="scroll-arrow">
          <ArrowDown size={16} strokeWidth={2} />
        </span>
      </motion.button> */}
    </section>
  )
}

export default Hero





























// "use client"

// import { useEffect, useState, useRef } from "react"
// import { useTheme } from "next-themes"
// import { personal } from "@/lib/data"
// import { ArrowDown } from "lucide-react"
// import { RotatingText } from "@/components/atoms/RotatingText"
// import { motion } from "framer-motion"

// const roles = [
//   "Backend Engineer",
//   "GenAI Developer",
//   "Full Stack Engineer",
//   "Software Developer",
//   "Problem Solver",
// ]

// export function Hero() {
//   const [mounted, setMounted] = useState(false)
//   const heroRef = useRef<HTMLDivElement>(null)
//   const { theme } = useTheme()

//   useEffect(() => {
//     setMounted(true)
//   }, [])

//   // Smooth scroll handler
//   const handleScrollClick = (e: React.MouseEvent) => {
//     e.preventDefault()
//     const nextSection = document.querySelector("#projects") || document.querySelector("section:nth-of-type(2)")
    
//     if (nextSection) {
//       nextSection.scrollIntoView({ behavior: "smooth" })
//     }
//   }

//   if (!mounted) return null

//   const isLight = theme !== "dark"

//   // Authentic 1984 Mac color palette
//   const colors = {
//     light: {
//       shell: "#f5f5f0",
//       bezelOuter: "#ebe5d9",
//       bezelInner: "#dcd4c4",
//       screenCavity: "#1a1a1a",
//       crtGlass: "#f8f4ee",
//       crtGlassEnd: "#eae4d8",
//       text: "#2a2420",
//       textSecondary: "#6b5d52",
//       accent: "#8b7355",
//       accentLight: "#a68365",
//       detailDark: "#3a3530",
//       detailMedium: "#6b5d52",
//     },
//     dark: {
//       shell: "#1f1f1f",
//       bezelOuter: "#171717",
//       bezelInner: "#0f0f0f",
//       screenCavity: "#000000",
//       crtGlass: "#0a0a0a",
//       crtGlassEnd: "#050505",
//       text: "#2ecc71",
//       textSecondary: "#27ae60",
//       accent: "#1abc9c",
//       accentLight: "#16a085",
//       detailDark: "#ffffff",
//       detailMedium: "#cccccc",
//     },
//   }

//   const palette = isLight ? colors.light : colors.dark

//   return (
//     <section
//       id="home"
//       className="min-h-screen flex items-center justify-center pt-20 pb-16 relative overflow-hidden transition-colors duration-700"
//       style={{
//         backgroundColor: isLight ? "#faf9f7" : "#0a0a0a",
//       }}
//       ref={heroRef}
//     >
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap');

//         * {
//           font-family: 'IBM Plex Mono', monospace;
//         }

//         html {
//           scroll-behavior: smooth;
//         }

//         /* ================================================================
//            MAC CONTAINER - The outer box
//            ================================================================ */
//         .mac-container {
//           position: relative;
//           width: 100%;
//           max-width: 1100px;
//           margin: 0 auto;
//           padding: 0 20px;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           gap: 0;
//         }

//         /* ================================================================
//            LAYER 1: MAC-SHELL (THE COMPUTER BODY)
//            ================================================================ */
//         .mac-shell {
//           position: relative;
//           width: 100%;
//           border-radius: 44px;
//           padding: 56px;
//           background-color: var(--shell-color);

//           box-shadow:
//             inset 0 6px 8px rgba(255, 255, 255, 0.7),
//             inset 0 -12px 24px rgba(0, 0, 0, 0.22),
//             inset 8px 0 8px rgba(255, 255, 255, 0.4),
//             inset -8px 0 8px rgba(0, 0, 0, 0.08),
//             0 40px 80px rgba(0, 0, 0, 0.15),
//             0 20px 40px rgba(0, 0, 0, 0.1);

//           transition: all 700ms cubic-bezier(0.4, 0, 0.2, 1);
//         }

//         /* ================================================================
//            LAYER 2: MAC-BEZEL-OUTER
//            ================================================================ */
//         .mac-bezel-outer {
//           position: relative;
//           width: 100%;
//           border-radius: 36px;
//           padding: 32px;
//           background-color: var(--bezel-outer-color);

//           box-shadow:
//             inset 0 8px 12px rgba(255, 255, 255, 0.6),
//             inset 0 -16px 28px rgba(0, 0, 0, 0.4);

//           transition: all 700ms cubic-bezier(0.4, 0, 0.2, 1);
//         }

//         /* ================================================================
//            LAYER 3: MAC-BEZEL-INNER
//            ================================================================ */
//         .mac-bezel-inner {
//           position: relative;
//           width: 100%;
//           border-radius: 28px;
//           padding: 24px;
//           background-color: var(--bezel-inner-color);

//           box-shadow:
//             inset 0 12px 20px rgba(0, 0, 0, 0.5);

//           transition: all 700ms cubic-bezier(0.4, 0, 0.2, 1);
//         }

//         /* ================================================================
//            LAYER 4: MAC-SCREEN-CAVITY
//            ================================================================ */
//         .mac-screen-cavity {
//           position: relative;
//           width: 100%;
//           border-radius: 18px;
//           padding: 28px;
//           background-color: var(--screen-cavity-color);

//           box-shadow:
//             inset 0 20px 40px rgba(0, 0, 0, 0.9),
//             inset 0 -4px 12px rgba(0, 0, 0, 0.7);

//           transition: all 700ms cubic-bezier(0.4, 0, 0.2, 1);
//         }

//         /* ================================================================
//            LAYER 5: MAC-CRT-GLASS
//            ================================================================ */
//         .mac-crt-glass {
//           position: relative;
//           width: 100%;
//           border-radius: 12px;
//           padding: 68px 60px;

//           background: radial-gradient(
//             ellipse at 50% 45%,
//             var(--crt-glass-color) 0%,
//             var(--crt-glass-end) 65%
//           );

//           box-shadow:
//             inset 0 -6px 12px rgba(0, 0, 0, 0.2),
//             inset 0 2px 4px rgba(255, 255, 255, 0.3),
//             0 0 32px rgba(255, 255, 255, 0.15),
//             0 0 64px rgba(0, 0, 0, 0.2);

//           transition: all 700ms cubic-bezier(0.4, 0, 0.2, 1);
//         }

//         /* ================================================================
//            CONTENT INSIDE GLASS
//            ================================================================ */
//         .content-wrapper {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           text-align: center;
//           gap: 28px;
//         }

//         .screen-title {
//           font-size: 8px;
//           letter-spacing: 0.25em;
//           text-transform: uppercase;
//           font-weight: 700;
//           color: var(--text-secondary);
//           margin: 0;
//           padding-bottom: 16px;
//           border-bottom: 1px solid rgba(0, 0, 0, 0.12);
//           opacity: 0.8;
//           transition: all 700ms cubic-bezier(0.4, 0, 0.2, 1);
//           min-height: 20px;
//         }

//         .hero-heading {
//           font-size: clamp(2.2rem, 8vw, 4rem);
//           font-weight: 700;
//           letter-spacing: -0.02em;
//           line-height: 1.1;
//           color: var(--text-primary);
//           margin: 0;
//           transition: color 700ms cubic-bezier(0.4, 0, 0.2, 1);
//         }

//         .hero-accent {
//           background: linear-gradient(135deg, var(--accent-color), var(--accent-light));
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//           color: var(--accent-color);
//         }

//         .hero-subtitle {
//           font-size: clamp(0.95rem, 3.5vw, 1.5rem);
//           font-weight: 600;
//           letter-spacing: 0.08em;
//           color: var(--text-secondary);
//           min-height: 68px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           margin: 0;
//           transition: color 700ms cubic-bezier(0.4, 0, 0.2, 1);
//         }

//         .hero-description {
//           font-size: 0.93rem;
//           line-height: 1.7;
//           letter-spacing: 0.008em;
//           color: var(--text-secondary);
//           max-width: 620px;
//           margin: 0;
//           transition: color 700ms cubic-bezier(0.4, 0, 0.2, 1);
//         }

//         .hero-buttons {
//           display: flex;
//           flex-direction: row;
//           gap: 20px;
//           justify-content: center;
//           flex-wrap: wrap;
//           margin-top: 20px;
//         }

//         .hero-btn {
//           font-family: 'IBM Plex Mono', monospace;
//           font-size: 0.8rem;
//           font-weight: 700;
//           letter-spacing: 0.12em;
//           text-transform: uppercase;
//           padding: 13px 30px;
//           border-radius: 6px;
//           border: 2px solid;
//           background: transparent;
//           cursor: pointer;
//           transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
//           text-decoration: none;
//           display: inline-flex;
//           align-items: center;
//           justify-content: center;
//           user-select: none;
//           -webkit-tap-highlight-color: transparent;
//         }

//         .hero-btn-primary {
//           color: white;
//           border-color: var(--accent-color);
//           background: linear-gradient(135deg, var(--accent-color), var(--accent-light));
//           box-shadow: 0 6px 14px rgba(139, 115, 85, 0.25);
//         }

//         .hero-btn-primary:hover {
//           transform: translateY(-2px);
//           box-shadow: 0 10px 24px rgba(139, 115, 85, 0.35);
//         }

//         .hero-btn-primary:active {
//           transform: translateY(0);
//         }

//         .hero-btn-primary.dark {
//           color: #0a0a0a;
//           box-shadow: 0 6px 14px rgba(26, 188, 156, 0.3);
//         }

//         .hero-btn-primary.dark:hover {
//           box-shadow: 0 10px 24px rgba(26, 188, 156, 0.4);
//         }

//         .hero-btn-secondary {
//           color: var(--accent-color);
//           border-color: var(--accent-color);
//           background: transparent;
//         }

//         .hero-btn-secondary:hover {
//           background: rgba(139, 115, 85, 0.07);
//           transform: translateY(-2px);
//         }

//         .hero-btn-secondary.dark:hover {
//           background: rgba(26, 188, 156, 0.08);
//         }

//         .hero-btn:focus-visible {
//           outline: 2px solid var(--accent-color);
//           outline-offset: 2px;
//         }

//         /* ================================================================
//            MAC PHYSICAL DETAILS
//            ================================================================ */

//         .mac-speaker-grille {
//           display: flex;
//           flex-direction: column;
//           gap: 2px;
//           width: 120px;
//           margin-top: 28px;
//           padding: 0 20px;
//         }

//         .grille-line {
//           height: 2px;
//           background-color: var(--detail-medium);
//           border-radius: 1px;
//           opacity: 0.4;
//         }

//         .mac-disk-drive {
//           width: 100%;
//           display: flex;
//           justify-content: center;
//           gap: 8px;
//           margin-top: 24px;
//         }

//         .drive-button {
//           width: 60px;
//           height: 4px;
//           background-color: var(--detail-dark);
//           border-radius: 2px;
//           opacity: 0.3;
//           transition: opacity 200ms ease;
//         }

//         .drive-button:hover {
//           opacity: 0.5;
//         }

//         /* ================================================================
//            SCROLL INDICATOR
//            ================================================================ */
//         .hero-scroll {
//           position: absolute;
//           bottom: 40px;
//           left: 50%;
//           transform: translateX(-50%);
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           gap: 10px;
//           font-size: 0.7rem;
//           letter-spacing: 0.14em;
//           text-transform: uppercase;
//           color: var(--text-secondary);
//           text-decoration: none;
//           cursor: pointer;
//           transition: all 300ms ease;
//           padding: 12px;
//           border-radius: 8px;
//           opacity: 0.7;
//           user-select: none;
//           -webkit-tap-highlight-color: transparent;
//         }

//         .hero-scroll:hover {
//           color: var(--accent-color);
//           opacity: 1;
//           transform: translateX(-50%) translateY(5px);
//         }

//         .hero-scroll:focus-visible {
//           outline: 2px solid var(--accent-color);
//           outline-offset: 4px;
//         }

//         .scroll-arrow {
//           display: inline-block;
//           animation: bounce 2s infinite;
//         }

//         @keyframes bounce {
//           0%, 100% {
//             transform: translateY(0);
//           }
//           50% {
//             transform: translateY(8px);
//           }
//         }

//         /* ================================================================
//            RESPONSIVE DESIGN
//            ================================================================ */

//         @media (max-width: 768px) {
//           .mac-shell {
//             padding: 44px;
//             border-radius: 40px;
//           }

//           .mac-bezel-outer {
//             padding: 24px;
//             border-radius: 32px;
//           }

//           .mac-bezel-inner {
//             padding: 18px;
//             border-radius: 24px;
//           }

//           .mac-screen-cavity {
//             padding: 20px;
//             border-radius: 16px;
//           }

//           .mac-crt-glass {
//             padding: 52px 44px;
//             border-radius: 10px;
//           }

//           .screen-title {
//             font-size: 7px;
//             margin-bottom: 10px;
//             padding-bottom: 12px;
//           }

//           .hero-heading {
//             margin-bottom: 8px;
//           }

//           .hero-subtitle {
//             min-height: 60px;
//           }

//           .hero-buttons {
//             gap: 14px;
//             margin-top: 16px;
//           }

//           .hero-btn {
//             padding: 11px 24px;
//             font-size: 0.75rem;
//           }

//           .mac-speaker-grille {
//             width: 100px;
//             margin-top: 20px;
//           }

//           .mac-disk-drive {
//             margin-top: 16px;
//           }
//         }

//         @media (max-width: 640px) {
//           .mac-shell {
//             padding: 32px;
//             border-radius: 36px;
//           }

//           .mac-bezel-outer {
//             padding: 18px;
//             border-radius: 28px;
//           }

//           .mac-bezel-inner {
//             padding: 14px;
//             border-radius: 20px;
//           }

//           .mac-screen-cavity {
//             padding: 16px;
//             border-radius: 14px;
//           }

//           .mac-crt-glass {
//             padding: 40px 32px;
//             border-radius: 8px;
//           }

//           .hero-heading {
//             font-size: clamp(1.6rem, 6vw, 2.6rem);
//           }

//           .hero-subtitle {
//             font-size: clamp(0.9rem, 2.5vw, 1.2rem);
//             min-height: 54px;
//           }

//           .hero-description {
//             font-size: 0.87rem;
//             line-height: 1.65;
//           }

//           .hero-buttons {
//             flex-direction: column;
//             gap: 10px;
//           }

//           .hero-btn {
//             width: 100%;
//             padding: 11px 20px;
//             font-size: 0.7rem;
//           }

//           .hero-scroll {
//             display: none;
//           }

//           .mac-speaker-grille {
//             width: 80px;
//             gap: 1.5px;
//             margin-top: 16px;
//           }

//           .grille-line {
//             height: 1.5px;
//           }

//           .mac-disk-drive {
//             margin-top: 12px;
//             gap: 6px;
//           }

//           .drive-button {
//             width: 45px;
//             height: 3px;
//           }
//         }

//         @media (max-width: 480px) {
//           .mac-shell {
//             padding: 24px;
//             border-radius: 32px;
//           }

//           .mac-bezel-outer {
//             padding: 14px;
//             border-radius: 24px;
//           }

//           .mac-bezel-inner {
//             padding: 10px;
//             border-radius: 18px;
//           }

//           .mac-screen-cavity {
//             padding: 12px;
//             border-radius: 12px;
//           }

//           .mac-crt-glass {
//             padding: 32px 24px;
//             border-radius: 6px;
//           }

//           .content-wrapper {
//             gap: 20px;
//           }

//           .screen-title {
//             font-size: 6px;
//             padding-bottom: 10px;
//           }

//           .hero-heading {
//             font-size: clamp(1.4rem, 5.5vw, 2.2rem);
//           }

//           .hero-subtitle {
//             font-size: clamp(0.85rem, 2.2vw, 1.05rem);
//             min-height: 48px;
//           }

//           .hero-description {
//             font-size: 0.85rem;
//           }

//           .hero-btn {
//             padding: 10px 18px;
//             font-size: 0.65rem;
//           }

//           .mac-speaker-grille {
//             width: 60px;
//             gap: 1px;
//             margin-top: 12px;
//           }

//           .grille-line {
//             height: 1px;
//           }
//         }

//         /* ================================================================
//            ACCESSIBILITY & MOTION
//            ================================================================ */

//         @media (prefers-reduced-motion: reduce) {
//           * {
//             animation-duration: 0.01ms !important;
//             animation-iteration-count: 1 !important;
//             transition-duration: 0.01ms !important;
//           }

//           .scroll-arrow {
//             animation: none;
//           }
//         }

//         @media (prefers-contrast: more) {
//           .hero-heading {
//             font-weight: 900;
//           }

//           .hero-btn {
//             border-width: 3px;
//           }
//         }

//         @media (prefers-color-scheme: dark) {
//           :root { color-scheme: dark; }
//         }

//         @media (prefers-color-scheme: light) {
//           :root { color-scheme: light; }
//         }
//       `}</style>

//       {/* CSS Variables */}
//       <div
//         style={{
//           "--shell-color": palette.shell,
//           "--bezel-outer-color": palette.bezelOuter,
//           "--bezel-inner-color": palette.bezelInner,
//           "--screen-cavity-color": palette.screenCavity,
//           "--crt-glass-color": palette.crtGlass,
//           "--crt-glass-end": palette.crtGlassEnd,
//           "--text-primary": palette.text,
//           "--text-secondary": palette.textSecondary,
//           "--accent-color": palette.accent,
//           "--accent-light": palette.accentLight,
//           "--detail-dark": palette.detailDark,
//           "--detail-medium": palette.detailMedium,
//         } as React.CSSProperties}
//       >
//         {/* MAC CONTAINER */}
//         <div className="mac-container">
//           {/* LAYER 1: SHELL */}
//           <motion.div
//             className="mac-shell"
//             initial={{ opacity: 0, y: 50, scale: 0.92 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             transition={{
//               duration: 0.9,
//               ease: "easeOut",
//               delay: 0.05,
//             }}
//           >
//             {/* LAYER 2: BEZEL OUTER */}
//             <div className="mac-bezel-outer">
//               {/* LAYER 3: BEZEL INNER */}
//               <div className="mac-bezel-inner">
//                 {/* LAYER 4: SCREEN CAVITY */}
//                 <div className="mac-screen-cavity">
//                   {/* LAYER 5: CRT GLASS */}
//                   <div className="mac-crt-glass">
//                     {/* CONTENT */}
//                     <div className="content-wrapper">
//                       <motion.div
//                         className="screen-title"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ duration: 0.5, delay: 0.2 }}
//                       >
//                         Welcome
//                       </motion.div>

//                       <motion.h1
//                         className="hero-heading"
//                         initial={{ opacity: 0, y: 25 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.65, delay: 0.25 }}
//                       >
//                         Hello, I'm{" "}
//                         <span className="hero-accent">Sai Priya</span>
//                       </motion.h1>

//                       <motion.div
//                         className="hero-subtitle"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ duration: 0.6, delay: 0.32 }}
//                       >
//                         <RotatingText texts={roles} interval={3500} />
//                       </motion.div>

//                       <motion.div
//                         className="hero-buttons"
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6, delay: 0.4 }}
//                       >
//                         {/* Add your buttons here if needed */}
//                       </motion.div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* MAC PHYSICAL DETAILS */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.7, delay: 0.5 }}
//             >
//               {/* Speaker Grille */}
//               <div className="mac-speaker-grille">
//                 {[...Array(6)].map((_, i) => (
//                   <div key={`grille-${i}`} className="grille-line" />
//                 ))}
//               </div>

//               {/* Disk Drive Slot */}
//               <div className="mac-disk-drive">
//                 <div className="drive-button" />
//                 <div className="drive-button" style={{ opacity: 0.5 }} />
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>

//       {/* ===================================================
//           SCROLL INDICATOR - FIXED!
//           =================================================== */}
//       <motion.button
//         onClick={handleScrollClick}
//         className="hero-scroll"
//         initial={{ opacity: 0, y: -10 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, delay: 0.6 }}
//         aria-label="Scroll to next section"
//         type="button"
//       >
//         <span>Scroll to explore</span>
//         <span className="scroll-arrow">
//           <ArrowDown size={16} strokeWidth={2} />
//         </span>
//       </motion.button>
//     </section>
//   )
// }

// export default Hero





















