"use client"

import { useState, useMemo } from "react"
import { skills } from "@/lib/data"
import { getSkillIcon } from "@/lib/icon-map"
import { defaultIcon } from "@/lib/icon-map"

// Define category display names
const categoryDisplayNames: Record<string, string> = {
  "ML/AI": "Machine Learning & AI",
  // "Data Engineering": "Data Engineering & Tools",
  Backend: "Backend Development",
  Frontend: "Frontend Development",
  Cloud: "Cloud Services",
  DevOps: "DevOps & Infrastructure",
  Database: "Database Systems",
}

// Define category order
const categoryOrder = ["ML/AI", /*"Data Engineering"*/, "Backend", "Frontend", "Cloud", "DevOps", "Database"]

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("All")

  // Get all unique categories from skills data
  const allCategories = useMemo(() => {
    return Array.from(new Set(skills.map((skill) => skill.category))).sort((a, b) => {
      const indexA = categoryOrder.indexOf(a)
      const indexB = categoryOrder.indexOf(b)
      return indexA - indexB
    })
  }, [])

  // Get filtered skills and categories to display
  const { filteredSkills, categoriesToDisplay, groupedSkills } = useMemo(() => {
    // Filter skills based on active category
    const filtered = activeCategory === "All" ? skills : skills.filter((skill) => skill.category === activeCategory)

    // Determine which categories to display
    const categories = activeCategory === "All" ? allCategories : [activeCategory]

    // Group skills by category
    const grouped: Record<string, typeof skills> = {}
    allCategories.forEach((category) => {
      grouped[category] = skills.filter((skill) => skill.category === category)
    })

    return { filteredSkills: filtered, categoriesToDisplay: categories, groupedSkills: grouped }
  }, [activeCategory, allCategories])

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title mb-16">Skills</h2>

          {/* Category filter tabs */}
          <div className="flex justify-center mb-10 overflow-x-auto pb-2">
            <div className="inline-flex flex-wrap justify-center gap-2 p-1 bg-secondary rounded-lg">
              <button
                onClick={() => setActiveCategory("All")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${activeCategory === "All"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                All
              </button>

              {allCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${activeCategory === category
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Skills by category */}
          <div className="space-y-8">
            {categoriesToDisplay.map((category) => {
              const categorySkills = groupedSkills[category] || []

              if (categorySkills.length === 0) return null

              return (
                <div key={category} className="bg-secondary/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">
                    {categoryDisplayNames[category] || category}
                  </h3>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {categorySkills.map((skill) => (
                      <div
                        key={skill.name}
                        className="bg-background border border-border rounded-md p-3 flex items-center gap-3 hover:border-primary/30 transition-colors"
                      >
                        <div className="w-6 h-6 flex-shrink-0">
                          {getSkillIcon(skill.name) === defaultIcon ? (
                            <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                              <span className="text-xs font-bold">{skill.name.charAt(0)}</span>
                            </div>
                          ) : (
                            <img
                              src={getSkillIcon(skill.name) || "/placeholder.svg"}
                              alt={skill.name}
                              className="w-full h-full object-contain"
                              style={{ maxWidth: "100%", maxHeight: "100%" }}
                              onError={(e) => {
                                // Fallback if image fails to load
                                const target = e.target as HTMLImageElement
                                target.onerror = null
                                target.src = defaultIcon
                              }}
                            />
                          )}
                        </div>
                        <span className="text-sm font-medium truncate">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Empty state */}
          {filteredSkills.length === 0 && (
            <div className="text-center py-10">
              <p className="text-muted-foreground">No skills found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
