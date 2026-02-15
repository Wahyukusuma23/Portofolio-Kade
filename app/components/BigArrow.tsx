'use client'

import { motion } from 'framer-motion'

const directionMap = {
  toRight: {
    size: 'h-px w-full',
    origin: 'origin-left',
    position: 'right-2',
    rotate: ['rotate-45', 'rotate-135'],
    initial: { scaleX: 0 },
    animate: { scaleX: 1 },
  },
  toLeft: {
    size: 'h-px w-full',
    origin: 'origin-right',
    position: 'left-2',
    rotate: ['rotate-315', 'rotate-225'],
    initial: { scaleX: 0 },
    animate: { scaleX: 1 },
  },
  toBottom: {
    size: 'w-px h-full',
    origin: 'origin-top',
    position: 'bottom-2',
    rotate: ['rotate-225', 'rotate-315'],
    initial: { scaleY: 0 },
    animate: { scaleY: 1 },
  },
  toTop: {
    size: 'w-px h-full',
    origin: 'origin-bottom',
    position: 'top',
    rotate: ['', ''],
    initial: { scaleY: 0 },
    animate: { scaleY: 1 },
  },
} as const

type Direction = keyof typeof directionMap
type AnimatedLineProps = {
  direction: Direction
  duration: number[]
  delay?: number
}

const item_link = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}
export default function AnimatedArrow({
  direction = 'toRight',
  duration = [0.5, 0.2],
  delay = 0,
}: AnimatedLineProps) {
  const config = directionMap[direction]
  var line_in = delay + duration[0]
  var line2_in = line_in + duration[1]
  return (
    <>
      <motion.div
        className="w-full h-full flex items-center justify-center relative overflow-hidden min-h-20"
        variants={item_link}
      >
        <motion.div
          className={`absolute ${config.position} w-10 h-10 ${config.rotate[0]}`}
        >
          <motion.hr
            className={`${config.size} ${config.origin} bg-white`}
            initial={config.initial}
            animate={config.animate}
            transition={{
              delay: line_in,
              duration: duration[1],
              ease: 'easeOut',
            }}
          />
        </motion.div>
        <motion.hr
          className={`${config.size} ${config.origin} bg-white`}
          initial={config.initial}
          animate={config.animate}
          transition={{ delay: delay, duration: duration[0], ease: 'easeOut' }}
        />
        <motion.div
          className={`absolute ${config.position} w-10 h-10 ${config.rotate[1]}`}
        >
          <motion.hr
            className={`${config.size} ${config.origin} bg-white`}
            initial={config.initial}
            animate={config.animate}
            transition={{
              delay: line2_in,
              duration: duration[1],
              ease: 'easeOut',
            }}
          />
        </motion.div>
      </motion.div>
    </>
  )
}
