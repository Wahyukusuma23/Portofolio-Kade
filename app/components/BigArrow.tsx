'use client'

import { motion } from 'framer-motion'

export default function AnimatedDivider() {
  return (
    <>
      <motion.div className="w-full h-full flex items-center relative">
        <motion.div className="absolute right-1.5 w-10 h-10 rotate-45">
            <motion.hr
                className="h-px w-full bg-white"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: '100%', opacity: 1 }}
                transition={{ delay:0.5, duration: 0.2, ease: 'easeOut' }}
            />
        </motion.div>
        <motion.hr
          className="h-px w-full bg-white"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: '100%', opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
        <motion.div className="absolute right-1.5 w-10 h-10 rotate-135">
            <motion.hr
                className="h-px w-full bg-white absolute top-0"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: '100%', opacity: 1 }}
                transition={{ delay:0.7, duration: 0.2, ease: 'easeOut' }}
            />
            </motion.div>
      </motion.div>
    </>
  )
}
