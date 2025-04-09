interface TimelineItemProps {
  title: string
  subtitle: string
  period: string
  location: string
  items?: string[]
  isLast?: boolean
}

export function TimelineItem({ title, subtitle, period, location, items = [], isLast = false }: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-8">
      {/* Timeline vertical line */}
      {!isLast && <div className="absolute left-2.5 top-6 w-px h-full bg-border"></div>}

      {/* Timeline dot */}
      <div className="absolute left-0 top-6 h-5 w-5 rounded-full border-2 border-primary bg-background"></div>

      <div className="pt-2">
        <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
          <h3 className="text-lg font-semibold">{title}</h3>
          <span className="text-sm text-muted-foreground">{period}</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between mb-4">
          <p className="font-medium">{subtitle}</p>
          <span className="text-sm text-muted-foreground">{location}</span>
        </div>

        {items && items.length > 0 && (
          <ul className="mt-4 space-y-2">
            {items.map((item, index) => (
              <li key={`item-${index}`} className="text-sm text-muted-foreground flex items-start">
                <span className="mr-2 mt-1.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
