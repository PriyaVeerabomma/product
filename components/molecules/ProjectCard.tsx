"use client"

import { useState } from "react"
import Image from "next/image"
import type { Project } from "@/lib/data"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card className="overflow-hidden h-full flex flex-col border border-border hover:shadow-md transition-all">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.thumbnail || "/placeholder.svg?height=400&width=600"}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      <CardContent className="flex-grow p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <Badge key={tech} variant="secondary" className="font-normal">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 3 && !isExpanded && (
            <Badge variant="outline" className="font-normal">
              +{project.technologies.length - 3}
            </Badge>
          )}
        </div>

        {isExpanded && (
          <div className="mt-4 space-y-4 border-t pt-4 border-border">
            <div>
              <h4 className="font-medium mb-2">Objectives</h4>
              <p className="text-sm text-muted-foreground">
                {project.details || "To build a scalable and efficient solution addressing real-world problems."}
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-2">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="font-normal">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Documentation</h4>
              <p className="text-sm text-muted-foreground">
                {project.details
                  ? `This project implements ${project.technologies.slice(0, 3).join(", ")} to create a robust solution. 
                  ${project.details}`
                  : `This project leverages ${project.technologies.slice(0, 3).join(", ")} to create a robust solution 
                  that addresses key challenges in the domain.`}
              </p>
            </div>
          </div>
        )}

        <Button
          variant="ghost"
          size="sm"
          className="mt-4 w-full flex items-center justify-center"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? (
            <>
              <ChevronUp className="h-4 w-4 mr-2" /> Show Less
            </>
          ) : (
            <>
              <ChevronDown className="h-4 w-4 mr-2" /> Show More
            </>
          )}
        </Button>
      </CardContent>

      <CardFooter className="px-6 pb-6 pt-0 gap-3">
        {project.demoUrl && (
          <Button variant="default" size="sm" className="rounded-full" asChild>
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" /> Demo
            </a>
          </Button>
        )}

        {project.codeUrl && (
          <Button variant="outline" size="sm" className="rounded-full" asChild>
            <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" /> Code
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
