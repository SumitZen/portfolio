'use client'

import { motion } from 'framer-motion'

const LETTERS = ['S', 'U', 'M', 'I', 'T']
const EASE = [0.22, 1, 0.36, 1] as const

export default function Loader() {
  return (
    <motion.div
      key="loader"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
      className="fixed inset-0 z-[99999] bg-[var(--bg)] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Noise grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22300%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/></filter><rect width=%22300%22 height=%22300%22 filter=%22url(%23n)%22/></svg>')]"
      />

      {/* Radial glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
        className="absolute w-[600px] h-[300px] rounded-full bg-[radial-gradient(ellipse,rgba(232,93,63,0.1)_0%,transparent_70%)] blur-[60px] pointer-events-none"
      />

      <div className="relative flex flex-col items-center">
        {/* Top Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="w-12 h-[1px] bg-[var(--accent)] mb-12 origin-center"
        />

        {/* Letters container */}
        <div className="flex gap-2">
          {LETTERS.map((letter, i) => (
            <div key={i} className="overflow-hidden">
              <motion.span
                initial={{ y: "110%", opacity: 0, rotateX: -30 }}
                animate={{ y: "0%", opacity: 1, rotateX: 0 }}
                transition={{
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.4 + i * 0.1,
                }}
                className="inline-block font-display font-bold text-[clamp(3rem,8vw,6rem)] text-[var(--text-primary)] leading-none tracking-tighter"
              >
                {letter}
              </motion.span>
            </div>
          ))}
        </div>

        {/* Japanese text reveal */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 font-jp text-[var(--accent)] text-[10px] tracking-[0.5em] uppercase opacity-60"
        >
          創造的構築 / CREATING
        </motion.div>
      </div>
    </motion.div>
  )
}