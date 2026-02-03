'use client'
import { motion } from 'framer-motion'

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.5,
    },
  },
}

const item = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
}

export default function Buttons() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="space-y-4"
    >
      <motion.button variants={item} className="btn">
        Button 1
      </motion.button>

      <motion.button variants={item} className="btn">
        Button 2
      </motion.button>

      <motion.button variants={item} className="btn">
        Button 3
      </motion.button>
      <motion.button variants={item} className="btn">
        Button 4
      </motion.button>
    </motion.div>
  )
}
