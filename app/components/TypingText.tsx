'use client'

import { useEffect, useState } from 'react'

type Props = {
  text: string
  speed?: number
  className?: string
}

export default function TypingText({
  text,
  speed = 100,
  className = '',
}: Props) {
  const [displayed, setDisplayed] = useState('')
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + text.charAt(index))
        setIndex(index + 1)
      }, speed)

      return () => clearTimeout(timeout)
    }
  }, [index, text, speed])

  return (
    <div className={`relative font-mono whitespace-pre-line ${className}`}>
      {displayed}
      <span className="animate-pulse ml-0.5">|</span>
    </div>
  )
}
