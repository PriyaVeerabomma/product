import { cn } from "@/lib/utils"
import type { Skill } from "@/lib/data"

interface SkillBadgeProps {
  skill: Skill
  showProficiency?: boolean
  size?: "sm" | "md" | "lg"
}

export function SkillBadge({ skill, showProficiency = false, size = "md" }: SkillBadgeProps) {
  const sizeClasses = {
    sm: "text-xs py-1 px-2",
    md: "text-sm py-1.5 px-3",
    lg: "text-base py-2 px-4",
  }

  return (
    <div className="relative group">
      <div
        className={cn(
          "rounded-full bg-secondary text-secondary-foreground font-medium transition-all hover:bg-primary/10 hover:text-primary",
          sizeClasses[size],
        )}
      >
        {skill.name}
      </div>

      {showProficiency && (
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-background border border-border rounded px-2 py-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity shadow-md z-10 whitespace-nowrap">
          Proficiency: {skill.proficiency}%
        </div>
      )}
    </div>
  )
}
