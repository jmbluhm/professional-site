interface SectionHeaderProps {
  title: string
  className?: string
}

export function SectionHeader({ title, className = '' }: SectionHeaderProps) {
  return (
    <h2
      className={`text-xl font-medium text-zinc-900 dark:text-zinc-100 mb-6 ${className}`}
    >
      {title}
    </h2>
  )
}
