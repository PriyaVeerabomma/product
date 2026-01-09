"use client"

import { useEffect, useState } from "react"

interface RotatingTextProps {
  texts: string[]
  interval?: number
}

export function RotatingText({ texts, interval = 3500 }: RotatingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (!texts || texts.length === 0) return

    // Fade out
    const fadeOutTimer = setTimeout(() => {
      setIsVisible(false)
    }, interval - 500) // Start fading 500ms before changing

    // Change text
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
      }}
    >
      {texts[currentIndex]}
    </span>
  )
}








// "use client"

// import { useState, useEffect } from "react"
// import { motion, AnimatePresence } from "framer-motion"

// interface RotatingTextProps {
//   texts: string[]
//   interval?: number
// }

// export function RotatingText({ texts, interval = 3000 }: RotatingTextProps) {
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [isVisible, setIsVisible] = useState(true)

//   useEffect(() => {
//     if (texts.length <= 1) return

//     const fadeOutTimeout = setTimeout(() => {
//       setIsVisible(false)
//     }, interval - 500) // Start fade out 500ms before changing text

//     const changeTextTimeout = setTimeout(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length)
//       setIsVisible(true)
//     }, interval)

//     return () => {
//       clearTimeout(fadeOutTimeout)
//       clearTimeout(changeTextTimeout)
//     }
//   }, [currentIndex, interval, texts.length])

//   if (texts.length === 0) return null

//   return (
//     <div className="h-[1.5em] overflow-hidden relative">
//       <AnimatePresence mode="wait">
//         <motion.span
//           key={currentIndex}
//           initial={{ y: 20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           exit={{ y: -20, opacity: 0 }}
//           transition={{ duration: 0.5, ease: "easeInOut" }}
//           className="absolute left-0 right-0"
//         >
//           {texts[currentIndex]}
//         </motion.span>
//       </AnimatePresence>
//     </div>
//   )
// }
