import React from "react"
import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { socials } from "@/lib/data"

interface SocialLinksProps {
  size?: "sm" | "md" | "lg"
}

const iconMap: Record<string, React.ReactNode> = {
  github: <Github />,
  linkedin: <Linkedin />,
  mail: <Mail />,
}

export function SocialLinks({ size = "md" }: SocialLinksProps) {
  const iconSize = size === "sm" ? "h-4 w-4" : size === "lg" ? "h-6 w-6" : "h-5 w-5"

  return (
    <div className="flex gap-2">
      {socials.map((social) => (
        <Button
          key={social.name}
          variant="ghost"
          size="icon"
          className="rounded-full hover:bg-secondary hover:text-primary"
          asChild
        >
          <a href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
            {React.cloneElement(iconMap[social.icon.toLowerCase()] as React.ReactElement, { className: iconSize })}
          </a>
        </Button>
      ))}
    </div>
  )
}
