"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface RotatingTextProps {
  texts: string[]
  interval?: number
}

export function RotatingText({ texts, interval = 3000 }: RotatingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (texts.length <= 1) return

    const fadeOutTimeout = setTimeout(() => {
      setIsVisible(false)
    }, interval - 500) // Start fade out 500ms before changing text

    const changeTextTimeout = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length)
      setIsVisible(true)
    }, interval)

    return () => {
      clearTimeout(fadeOutTimeout)
      clearTimeout(changeTextTimeout)
    }
  }, [currentIndex, interval, texts.length])

  if (texts.length === 0) return null

  return (
    <div className="h-[1.5em] overflow-hidden relative">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute left-0 right-0"
        >
          {texts[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}
