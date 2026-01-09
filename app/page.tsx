"use client"

import { useEffect } from "react"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Skills } from "@/components/sections/Skills"
import { MacintoshSkillsMonitor } from "@/components/sections/MacintoshSkillsMonitor"
import { FEATURE_FLAGS } from "@/lib/data"
import { Experience } from "@/components/sections/Experience"
import { Projects } from "@/components/sections/Projects"
import { Contact } from "@/components/sections/Contact"

export default function Home() {
  useEffect(() => {
    // Intersection Observer for reveal animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active")
          }
        })
      },
      { threshold: 0.1 },
    )

    // Observe all elements with reveal class
    document.querySelectorAll(".reveal").forEach((el) => {
      observer.observe(el)
    })

    // Handle hash links for direct navigation
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash && hash.startsWith("#")) {
        // Extract the section ID without the # symbol
        const sectionId = hash.substring(1)

        // Only proceed if it's a valid section ID
        if (sectionId && /^[a-zA-Z0-9_-]+$/.test(sectionId)) {
          setTimeout(() => {
            const element = document.getElementById(sectionId)
            if (element) {
              window.scrollTo({
                top: element.offsetTop - 80,
                behavior: "smooth",
              })
            }
          }, 100)
        }
      }
    }

    // Check for hash on initial load
    if (typeof window !== "undefined") {
      handleHashChange()

      // Listen for hash changes
      window.addEventListener("hashchange", handleHashChange)
    }

    // Update the cleanup function
    return () => {
      document.querySelectorAll(".reveal").forEach((el) => {
        observer.unobserve(el)
      })
      if (typeof window !== "undefined") {
        window.removeEventListener("hashchange", handleHashChange)
      }
    }
  }, [])

  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />

      {/* Skills Section - Feature Flag Conditional */}
      {FEATURE_FLAGS.USE_MONITOR_SKILLS ? (
        <MacintoshSkillsMonitor />
      ) : (
        <Skills />
      )}

      <Contact />
    </>
  )
}











// "use client"

// import { useEffect } from "react"
// import { Hero } from "@/components/sections/Hero"
// import { About } from "@/components/sections/About"
// import { Skills } from "@/components/sections/Skills"
// import { Experience } from "@/components/sections/Experience"
// import { Projects } from "@/components/sections/Projects"
// import { Contact } from "@/components/sections/Contact"

// export default function Home() {
//   useEffect(() => {
//     // Intersection Observer for reveal animations
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("active")
//           }
//         })
//       },
//       { threshold: 0.1 },
//     )

//     // Observe all elements with reveal class
//     document.querySelectorAll(".reveal").forEach((el) => {
//       observer.observe(el)
//     })

//     // Handle hash links for direct navigation
//     const handleHashChange = () => {
//       const hash = window.location.hash
//       if (hash && hash.startsWith("#")) {
//         // Extract the section ID without the # symbol
//         const sectionId = hash.substring(1)

//         // Only proceed if it's a valid section ID
//         if (sectionId && /^[a-zA-Z0-9_-]+$/.test(sectionId)) {
//           setTimeout(() => {
//             const element = document.getElementById(sectionId)
//             if (element) {
//               window.scrollTo({
//                 top: element.offsetTop - 80,
//                 behavior: "smooth",
//               })
//             }
//           }, 100)
//         }
//       }
//     }

//     // Check for hash on initial load
//     if (typeof window !== "undefined") {
//       handleHashChange()

//       // Listen for hash changes
//       window.addEventListener("hashchange", handleHashChange)
//     }

//     // Update the cleanup function
//     return () => {
//       document.querySelectorAll(".reveal").forEach((el) => {
//         observer.unobserve(el)
//       })
//       if (typeof window !== "undefined") {
//         window.removeEventListener("hashchange", handleHashChange)
//       }
//     }
//   }, [])

//   return (
//     <>
//       <Hero />
//       <About />
//       <Experience />
//       <Projects />
//       <Skills />
//       <Contact />
//     </>
//   )
// }
