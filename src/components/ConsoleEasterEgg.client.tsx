'use client'

import { useEffect } from 'react'

export function ConsoleEasterEgg() {
  useEffect(() => {
    console.log(
      'You found the console. The resume data is canonical. Everything else is a view.'
    )
  }, [])

  return null
}
