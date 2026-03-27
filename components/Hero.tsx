'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface HeroProps {
  visible: boolean
}

const EASE_OUT = [0.16, 1, 0.3, 1] as const

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: EASE_OUT, delay },
  }
}

export default function Hero({ visible }: HeroProps) {
  return (
    <section className="relative h-dvh overflow-hidden flex items-center justify-center">
      {/* Background layer */}
      <div className="absolute inset-0 bg-[var(--bg)]" />

      {/* Subtle Grain Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/></filter><rect width=%22200%22 height=%22200%22 filter=%22url(%23n)%22/></svg>')] shadow-inner" />

      {/* Ambient warm glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] rounded-full bg-[radial-gradient(circle,rgba(232,93,63,0.03)_0%,transparent_70%)] blur-[100px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[30vw] h-[30vw] rounded-full bg-[radial-gradient(circle,rgba(139,90,60,0.02)_0%,transparent_70%)] blur-[80px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Japanese subtitle — top */}
        <motion.div
          className="text-[var(--text-secondary)] font-jp mb-6 block uppercase"
          style={{ fontSize: '10px', letterSpacing: '0.3em' }}
          initial={{ opacity: 0, y: 15 }}
          animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.8, ease: EASE_OUT, delay: 0.2 }}
        >
          自己紹介 / PROFILE
        </motion.div>

        {/* Main name */}
        <div className="mb-4">
          <h1
            className="text-[var(--text-primary)] font-display font-bold whitespace-nowrap tracking-[-0.03em] leading-[0.85]"
            style={{ fontSize: 'clamp(8rem,20vw,17rem)' }}
          >
            {['S', 'U', 'M', 'I', 'T'].map((letter, index) => (
              <span key={index} className="inline-block overflow-hidden align-bottom">
                <motion.span
                  className="inline-block"
                  initial={{ y: '100%' }}
                  animate={visible ? { y: '0%' } : { y: '100%' }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 + index * 0.08 }}
                >
                  {letter}
                </motion.span>
              </span>
            ))}
          </h1>
        </div>

        {/* Japanese name — bottom */}
        <motion.div
          className="text-[var(--text-secondary)] font-mono mb-10"
          style={{ fontSize: '12px', letterSpacing: '0.4em' }}
          initial={{ opacity: 0 }}
          animate={visible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, ease: EASE_OUT, delay: 1 }}
        >
          スミット
        </motion.div>

        {/* Identity Pills */}
        <motion.div
          className="flex items-center gap-3 mb-8"
          initial={{ opacity: 0, y: 15 }}
          animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.8, ease: EASE_OUT, delay: 1.1 }}
        >
          <div className="flex items-center gap-2 px-3.5 py-1.5 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-full font-mono text-[0.68rem] text-[#6a6058] tracking-wider uppercase">
            <span className="text-[10px]">{'</>'}</span> Developer
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 bg-[rgba(255,255,255,0.03)] border border-[rgba(192,57,43,0.25)] rounded-full font-mono text-[0.68rem] text-[#c0392b] tracking-wider uppercase">
            <span className="text-[10px]">✦</span> AI Artist
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.div
          className="max-w-xl font-body mb-12 tracking-[0.04em] font-normal"
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: EASE_OUT, delay: 1.2 }}
        >
          <p className="text-[var(--text-secondary)] text-[clamp(0.9rem,2vw,0.95rem)] leading-relaxed mb-1">
            Web Dev · Android Dev · Content Creator
          </p>
          <p className="text-[#c0392b] text-[clamp(0.85rem,1.8vw,0.9rem)] font-medium">
            AI Artist · Image & Video Generation
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: EASE_OUT, delay: 1.4 }}
        >
          <Link
            href="#work"
            className="group relative bg-[var(--accent)] text-[#000] px-8 py-4 font-bold tracking-wider hover:brightness-110 transition-all duration-300 overflow-hidden"
            style={{ fontSize: '12px', borderRadius: '8px' }}
          >
            <span className="relative z-10">VIEW SELECTED WORKS →</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
          </Link>
          <Link
            href="#contact"
            className="group border border-[rgba(255,255,255,0.1)] text-[var(--text-primary)] px-8 py-4 font-medium tracking-wider hover:border-[rgba(255,255,255,0.3)] transition-all duration-300"
            style={{ fontSize: '12px', borderRadius: '8px' }}
          >
            GET IN TOUCH
          </Link>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4"
          initial={{ opacity: 0 }}
          animate={visible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
        >
          <div className="w-[1px] h-12 bg-[var(--accent)] relative overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 w-full h-full bg-white"
              animate={{
                y: ['-100%', '100%']
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>

  )
}