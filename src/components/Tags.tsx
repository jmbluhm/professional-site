interface TagsProps {
  items: string[]
  className?: string
}

export function Tags({ items, className = '' }: TagsProps) {
  return (
    <p className={`text-sm text-zinc-600 dark:text-zinc-400 ${className}`}>
      {items.join(' · ')}
    </p>
  )
}
