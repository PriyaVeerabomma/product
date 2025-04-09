"use client"

import { useState } from "react"
import { experiences, education } from "@/lib/data"
import { TimelineItem } from "@/components/molecules/TimelineItem"

export function Experience() {
  const [activeTab, setActiveTab] = useState("experience")

  return (
    <section id="experience" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title mb-16">Experience</h2>

          {/* Custom tabs implementation instead of using shadcn Tabs */}
          <div className="mb-10">
            <div className="grid w-full grid-cols-2 bg-background/50 rounded-lg p-1">
              <button
                onClick={() => setActiveTab("experience")}
                className={`py-3 px-4 rounded-md font-medium transition-all ${
                  activeTab === "experience"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Work Experience
              </button>
              <button
                onClick={() => setActiveTab("education")}
                className={`py-3 px-4 rounded-md font-medium transition-all ${
                  activeTab === "education"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Education
              </button>
            </div>
          </div>

          {/* Experience content */}
          <div className="mt-8">
            {activeTab === "experience" && (
              <div className="space-y-8">
                {experiences &&
                  experiences.length > 0 &&
                  experiences.map((exp, index) => (
                    <TimelineItem
                      key={`exp-${index}`}
                      title={exp.position}
                      subtitle={exp.company}
                      period={`${exp.startDate} - ${exp.endDate}`}
                      location={exp.location}
                      items={exp.achievements}
                      isLast={index === experiences.length - 1}
                    />
                  ))}
              </div>
            )}

            {activeTab === "education" && (
              <div className="space-y-8">
                {education &&
                  education.length > 0 &&
                  education.map((edu, index) => (
                    <TimelineItem
                      key={`edu-${index}`}
                      title={edu.degree}
                      subtitle={edu.institution}
                      period={`${edu.startDate} - ${edu.endDate}`}
                      location={edu.location}
                      items={edu.courses || []}
                      isLast={index === education.length - 1}
                    />
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
