'use client'

export function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
    >
      Print
    </button>
  )
}
