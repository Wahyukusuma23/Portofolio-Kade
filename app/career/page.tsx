'use client'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

import { useState } from 'react'
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.5,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
}
const item_link = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
}

export default function Buttons() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-1 bg-black/40 backdrop-blur-sm flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Modal content */}
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="border-white p-8 rounded-2xl w-100"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <h2 className="text-xl font-bold">What I do</h2>
              <p className="mt-2">Your content here...</p>

              <button
                onClick={() => setOpen(false)}
                className="mt-6 border px-4 py-2"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="space-y-4 w-full grid grid-cols-3 space-x-4 font-mono "
      >
        <motion.div
          variants={item}
          className="border border-dashed border-gray-500 p-10"
        >
          <p className="text-2xl leading-none"> Finance Admin</p>
          <p className="tex-xl font-bold">PT. Star Paper Supply</p>
          <span>2014-2017</span>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <motion.button
              onClick={() => setOpen(true)}
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="group flex hover:cursor-pointer items-center justify-center gap-2 border border-gray-500 px-6 py-2 overflow-hidden"
            >
              <motion.span
                variants={{
                  rest: { x: 6 },
                  hover: { x: -4 },
                }}
                transition={{ duration: 0.2 }}
              >
                What I do
              </motion.span>
              <motion.span
                variants={{
                  rest: { opacity: 0, x: -8 },
                  hover: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </motion.button>
            <motion.button
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="group flex hover:cursor-pointer items-center justify-center gap-2 border border-gray-500 px-6 py-2 overflow-hidden"
            >
              <motion.span
                variants={{
                  rest: { x: 6 },
                  hover: { x: -4 },
                }}
                transition={{ duration: 0.2 }}
              >
                Tools
              </motion.span>
              <motion.span
                variants={{
                  rest: { opacity: 0, x: -8 },
                  hover: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </motion.button>
          </div>
        </motion.div>
        <motion.div variants={item} className="">
          Production Operator
          <p>PT. Surabaya Autocomp Indonesia</p>
          <span>2017-2019</span>
          <div className="flex">
            <a href="#">What I do:</a>
            <a href="">Tools:</a>
          </div>
        </motion.div>

        <motion.div variants={item} className="">
          Web Developer
          <p>PT. Wave Wahana Wisesa</p>
          <span>2014-2017</span>
          <div className="flex">
            <a href="#">What I do:</a>
            <a href="">Tools:</a>
          </div>
        </motion.div>
        <motion.div variants={item} className="">
          Button 4
        </motion.div>
      </motion.div>
    </>
  )
}
