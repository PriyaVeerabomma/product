"use client"

import { useState, useMemo } from "react"
import { skills, FEATURE_FLAGS } from "@/lib/data"
import { useTheme } from "next-themes"
import { Languages } from "lucide-react"

// Define category display names
// const categoryDisplayNames: Record<string, string> = {
//     "ML/AI": "Machine Learning & AI",
//     Backend: "Backend Development",
//     Frontend: "Frontend Development",
//     Cloud: "Cloud Services",
//     DevOps: "DevOps & Infrastructure",
//     Database: "Database Systems",
// }

const categoryDisplayNames: Record<string, string> = {
  "Languages": "Languages",
  "Backend Frameworks": "Backend Frameworks",
  "AI/ML Libraries": "AI/ML Libraries",
  "Databases": "Databases",
  "DevOps & Infrastructure": "DevOps & Infrastructure",
  "APIs & Tools": "APIs & Tools",
  "Frontend": "Frontend",
  "Techniques & Patterns": "Techniques & Patterns",
}
// Define category order
const categoryOrder = [
  "Languages",
  "Backend Frameworks",
  "AI/ML Libraries",
  "Databases",
  "DevOps & Infrastructure",
  "APIs & Tools",
  "Frontend",
  "Techniques & Patterns",
]
// Define category order
// const categoryOrder = ["ML/AI", "Backend", "Frontend", "Cloud", "DevOps", "Database"]

export function MacintoshSkillsMonitor() {
  const [activeCategory, setActiveCategory] = useState<string>("Languages")
  const { theme } = useTheme()

  // Get all unique categories from skills data
  const allCategories = useMemo(() => {
    return Array.from(new Set(skills.map((skill) => skill.category))).sort((a, b) => {
      const indexA = categoryOrder.indexOf(a)
      const indexB = categoryOrder.indexOf(b)
      return indexA - indexB
    })
  }, [])

  // Get filtered skills and grouped by category
  const { groupedSkills } = useMemo(() => {
    // Group skills by category
    const grouped: Record<string, typeof skills> = {}
    allCategories.forEach((category) => {
      grouped[category] = skills.filter((skill) => skill.category === category)
    })

    return { groupedSkills: grouped }
  }, [allCategories])

  // Get skills to display based on active category
  const skillsToDisplay = activeCategory === "Languages" ? ["Languages"] : [activeCategory]

  return (
    <section id="skills" className="py-20 relative">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap');
        
        .mac-monitor-body {
          background: linear-gradient(135deg, #e8e4d8 0%, #d9d3c4 50%, #c9bfb0 100%);
          border-radius: 40px;
          padding: 20px;
          box-shadow: 
            0 60px 120px rgba(0,0,0,0.15),
            inset 0 1px 0 rgba(255,255,255,0.6),
            inset 0 -2px 8px rgba(0,0,0,0.1);
          position: relative;
        }

        .mac-monitor-body.dark {
          background: linear-gradient(135deg, #2a2a2a 0%, #1f1f1f 50%, #1a1a1a 100%);
          box-shadow: 
            0 60px 120px rgba(0,0,0,0.4),
            inset 0 1px 0 rgba(255,255,255,0.1),
            inset 0 -2px 8px rgba(0,0,0,0.3);
        }

        .mac-screen-bezel {
          background: linear-gradient(135deg, #f0ebe0 0%, #e8e4d8 50%, #d9d3c4 100%);
          border-radius: 28px;
          padding: 18px;
          box-shadow: 
            inset 0 2px 6px rgba(255,255,255,0.5),
            inset 0 -4px 10px rgba(0,0,0,0.08);
        }

        .mac-screen-bezel.dark {
          background: linear-gradient(135deg, #3a3a3a 0%, #2a2a2a 50%, #1f1f1f 100%);
          box-shadow: 
            inset 0 2px 6px rgba(255,255,255,0.1),
            inset 0 -4px 10px rgba(0,0,0,0.3);
        }

        .mac-screen {
          background: radial-gradient(ellipse at center, #1a1a1a 0%, #000 100%);
          border-radius: 8px;
          padding: 20px;
          box-shadow: 
            inset 0 0 40px rgba(0,0,0,0.95),
            0 0 60px rgba(0, 255, 100, 0.12),
            0 0 80px rgba(0, 255, 100, 0.06);
          border: 2px solid #2a4a3a;
          position: relative;
          min-height: 400px;
          display: flex;
          flex-direction: column;
        }

        .mac-terminal {
          font-family: 'IBM Plex Mono', monospace;
          color: #00ff64;
          text-shadow: 0 0 10px #00ff64, 0 0 20px rgba(0, 255, 100, 0.3);
          font-size: 12px;
          line-height: 1.9;
          letter-spacing: 0.3px;
          position: relative;
          z-index: 10;
          overflow-y: auto;
          max-height: 350px;
        }

        .mac-terminal::-webkit-scrollbar {
          width: 6px;
        }

        .mac-terminal::-webkit-scrollbar-track {
          background: rgba(0, 255, 100, 0.05);
        }

        .mac-terminal::-webkit-scrollbar-thumb {
          background: rgba(0, 255, 100, 0.3);
          border-radius: 3px;
        }

        .terminal-prompt {
          color: #00ff64;
          font-weight: bold;
        }

        .terminal-category {
          color: #00ff64;
          margin-top: 10px;
          margin-bottom: 5px;
          font-weight: bold;
          letter-spacing: 1px;
        }

        .terminal-skill {
          margin-left: 16px;
          color: #00ff64;
          opacity: 0.9;
        }

        .cursor {
          animation: blink 1s infinite;
          display: inline-block;
        }

        @keyframes blink {
          0%, 49%, 100% { opacity: 1; }
          50%, 99% { opacity: 0; }
        }

        .scanlines {
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            0deg,
            rgba(0, 255, 100, 0.02) 0px,
            rgba(0, 255, 100, 0.02) 2px,
            transparent 2px,
            transparent 4px
          );
          pointer-events: none;
          animation: flicker 0.15s infinite;
          border-radius: 8px;
        }

        @keyframes flicker {
          0% { opacity: 0.97; }
          50% { opacity: 1; }
          100% { opacity: 0.97; }
        }

        .mac-bottom {
          background: linear-gradient(90deg, #d9d3c4 0%, #e8e4d8 50%, #d9d3c4 100%);
          margin-top: 16px;
          padding: 12px 20px;
          border-radius: 0 0 32px 32px;
          box-shadow: 
            inset 0 1px 0 rgba(255,255,255,0.3),
            inset 0 -2px 5px rgba(0,0,0,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
        }

        .mac-bottom.dark {
          background: linear-gradient(90deg, #1f1f1f 0%, #2a2a2a 50%, #1f1f1f 100%);
          box-shadow: 
            inset 0 1px 0 rgba(255,255,255,0.1),
            inset 0 -2px 5px rgba(0,0,0,0.3);
        }

        .mac-logo {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: linear-gradient(135deg, #999 0%, #666 100%);
          box-shadow: inset 0 1px 2px rgba(255,255,255,0.2);
        }

        .mac-logo.dark {
          background: linear-gradient(135deg, #666 0%, #444 100%);
          box-shadow: inset 0 1px 2px rgba(255,255,255,0.1);
        }

        .mac-label {
          font-family: 'Courier New', monospace;
          font-size: 8px;
          font-weight: bold;
          letter-spacing: 1px;
          color: #666;
        }

        .mac-label.dark {
          color: #999;
        }

        .category-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 20px;
          padding: 12px;
          background: rgba(0, 255, 100, 0.05);
          border-radius: 8px;
          border: 1px solid rgba(0, 255, 100, 0.1);
        }

        .category-tab {
          padding: 6px 12px;
          border-radius: 4px;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px;
          cursor: pointer;
          transition: all 0.2s;
          border: 1px solid rgba(0, 255, 100, 0.3);
          background: rgba(0, 255, 100, 0.05);
          color: #00ff64;
          font-weight: bold;
        }

        .category-tab:hover {
          background: rgba(0, 255, 100, 0.15);
          border-color: #00ff64;
        }

        .category-tab.active {
          background: rgba(0, 255, 100, 0.2);
          border-color: #00ff64;
          box-shadow: 0 0 10px rgba(0, 255, 100, 0.3);
        }

        @media (max-width: 768px) {
          .mac-monitor-body {
            padding: 12px;
          }

          .mac-screen {
            padding: 16px;
            min-height: 300px;
          }

          .mac-terminal {
            font-size: 11px;
            line-height: 1.7;
          }

          .terminal-skill {
            margin-left: 12px;
          }

          .category-tabs {
            padding: 8px;
            gap: 6px;
          }

          .category-tab {
            padding: 5px 10px;
            font-size: 10px;
          }
        }

        @media (max-width: 480px) {
          .mac-monitor-body {
            padding: 10px;
          }

          .mac-screen-bezel {
            padding: 12px;
          }

          .mac-screen {
            padding: 12px;
            min-height: 250px;
          }

          .mac-terminal {
            font-size: 10px;
            line-height: 1.6;
            max-height: 300px;
          }

          .terminal-skill {
            margin-left: 10px;
          }

          .category-tab {
            padding: 4px 8px;
            font-size: 9px;
          }
        }
      `}</style>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* <h2 className="section-title mb-12 text-center">Skills</h2> */}

          {/* Macintosh Monitor */}
          <div className={`mac-monitor-body ${theme === "dark" ? "dark" : ""}`}>
            <div className={`mac-screen-bezel ${theme === "dark" ? "dark" : ""}`}>
              <div className="mac-screen">
                {/* Category Tabs */}
                <div className="category-tabs">
                  {/* <button
                                        onClick={() => setActiveCategory("All")}
                                        className={`category-tab ${activeCategory === "All" ? "active" : ""}`}
                                    >
                                        ALL
                                    </button> */}
                  {allCategories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`category-tab ${activeCategory === category ? "active" : ""}`}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                {/* Terminal Output */}
                <div className="mac-terminal">
                  <div className="terminal-prompt">
                    $ load_engineer<span className="cursor">█</span>
                  </div>

                  {skillsToDisplay.map((category) => {
                    const categorySkills = groupedSkills[category] || []
                    if (categorySkills.length === 0) return null

                    return (
                      <div key={category}>
                        <div className="terminal-category">$ {category}</div>
                        {categorySkills.map((skill) => (
                          <div key={skill.name} className="terminal-skill">
                            → {skill.name}
                          </div>
                        ))}
                      </div>
                    )
                  })}

                  <div style={{ marginTop: "14px" }} className="terminal-prompt">
                    $ ./deploy<span className="cursor">█</span>
                  </div>
                </div>

                {/* Scanlines Effect */}
                <div className="scanlines"></div>
              </div>
            </div>

            {/* Mac Bottom Bezel */}
            <div className={`mac-bottom ${theme === "dark" ? "dark" : ""}`}>
              <div className={`mac-logo ${theme === "dark" ? "dark" : ""}`}></div>
              <div className={`mac-label ${theme === "dark" ? "dark" : ""}`}>ENGINEER</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}