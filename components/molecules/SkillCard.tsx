import type { Skill } from "@/lib/data"
import { getSkillIcon } from "@/lib/icon-map"
import { defaultIcon } from "@/lib/icon-map"

interface SkillCardProps {
  skill: Skill
}

export function SkillCard({ skill }: SkillCardProps) {
  const iconSrc = getSkillIcon(skill.name)

  return (
    <div className="bg-card p-4 rounded-lg shadow-sm border border-border transition-all hover:shadow-md hover:border-primary/30 h-full">
      <div className="flex flex-col items-center text-center">
        <div className="mb-3 text-primary">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-secondary relative">
            {/* Use a fallback for the icon */}
            {iconSrc === defaultIcon ? (
              <div className="text-xl font-bold">{skill.name.charAt(0)}</div>
            ) : (
              <div className="w-6 h-6 relative">
                <img src={iconSrc || "/placeholder.svg"} alt={skill.name} className="w-full h-full object-contain" />
              </div>
            )}
          </div>
        </div>
        <h3 className="font-medium mb-1 text-sm">{skill.name}</h3>
        <div className="w-full bg-secondary rounded-full h-1.5 mt-2">
          <div
            className="bg-primary h-1.5 rounded-full transition-all duration-500"
            style={{ width: `${skill.proficiency}%` }}
          ></div>
        </div>
      </div>
    </div>
  )
}
