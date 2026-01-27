interface TimelineItemProps {
  company: string
  title: string
  startDate: string
  endDate: string
  bullets: string[]
  expandedBullets?: string[]
}

export function TimelineItem({
  company,
  title,
  startDate,
  endDate,
  bullets,
  expandedBullets,
}: TimelineItemProps) {
  return (
    <div className="mb-10 last:mb-0">
      <div className="mb-3">
        <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
          {company}
        </h3>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          {title} · {startDate} – {endDate}
        </p>
      </div>
      <ul className="space-y-1.5">
        {bullets.map((bullet, index) => (
          <li key={index} className="text-sm text-zinc-700 dark:text-zinc-300">
            {bullet}
          </li>
        ))}
      </ul>
      {expandedBullets && expandedBullets.length > 0 && (
        <details className="mt-3">
          <summary className="text-sm text-zinc-500 dark:text-zinc-400 cursor-pointer hover:text-zinc-700 dark:hover:text-zinc-300">
            More
          </summary>
          <ul className="mt-2 space-y-1.5">
            {expandedBullets.map((bullet, index) => (
              <li key={index} className="text-sm text-zinc-600 dark:text-zinc-400">
                {bullet}
              </li>
            ))}
          </ul>
        </details>
      )}
    </div>
  )
}
