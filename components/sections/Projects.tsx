"use client"

import { useState, useMemo } from "react"
import { projects } from "@/lib/data"
import { ProjectCard } from "@/components/molecules/ProjectCard"
import { Button } from "@/components/ui/button"

export function Projects() {
  // Define all possible categories
  const allCategories = [
    "All",
    "Academic",
    "Data Science",
    "AI/ML",
    "Full Stack",
    "Web",
    "Backend",
    "Database",
    "DevOps",
    "Data Engineering",
  ]

  const [activeCategory, setActiveCategory] = useState("All")
  const [showAllProjects, setShowAllProjects] = useState(false)

  // Filter projects based on category and visibility settings
  const displayedProjects = useMemo(() => {
    // Filter out hidden projects
    const visibleProjects = projects.filter((project) => project.hidden !== true)

    // Filter by category if not "All"
    const categoryFiltered =
      activeCategory === "All"
        ? visibleProjects
        : visibleProjects.filter((project) => project.category.includes(activeCategory))

    // If on "All" category and not showing all, only show featured projects (max 3)
    if (activeCategory === "All" && !showAllProjects) {
      return categoryFiltered.filter((project) => project.featured).slice(0, 3)
    }

    return categoryFiltered
  }, [activeCategory, showAllProjects])

  // Handle category change
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    // Reset to showing only featured projects when switching to "All"
    if (category === "All") {
      setShowAllProjects(false)
    } else {
      // Always show all projects in a specific category
      setShowAllProjects(true)
    }
  }

  // Check if we need to show the "View All" button
  const shouldShowViewAllButton =
    activeCategory === "All" && !showAllProjects && projects.filter((p) => !p.hidden).length > displayedProjects.length

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title mb-16">Projects</h2>

          {/* Category filter tabs */}
          <div className="mb-10">
            <div className="flex flex-wrap justify-center gap-2 bg-secondary p-2 rounded-lg">
              {allCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    activeCategory === category
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {displayedProjects.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayedProjects.map((project) => (
                  <div key={project.id} className="reveal">
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>

              {shouldShowViewAllButton && (
                <div className="mt-12 text-center reveal">
                  <Button onClick={() => setShowAllProjects(true)} variant="outline" className="rounded-md px-8">
                    View All Projects
                  </Button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
