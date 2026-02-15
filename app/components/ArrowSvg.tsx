'use client'

import { motion } from 'framer-motion'

type Direction = 'toRight' | 'toLeft' | 'toTop' | 'toBottom'

type AnimatedArrowProps = {
  direction?: Direction
  duration?: number
  size?: number
  strokeWidth?: number
  className?: string
}

export default function AnimatedArrowAvg({
  direction = 'toRight',
  duration = 1,
  size = 120,
  strokeWidth = 2,
  className = 'w-full h-full',
}: AnimatedArrowProps) {
  const rotationMap = {
    toRight: 0,
    toBottom: 90,
    toLeft: 180,
    toTop: -90,
  }

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      initial={{ rotate: 0 }}
      animate={{ rotate: rotationMap[direction] }}
      transition={{ duration: 0.3 }}
      preserveAspectRatio="none"
    >
      <motion.path
        d="M10 50 L80 50 M80 50 L65 35 M80 50 L65 65"
        fill="transparent"
        stroke="white"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration,
          ease: 'easeOut',
        }}
      />
    </motion.svg>
  )
}
