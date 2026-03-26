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
      exit={{ opacity: 0, y: -50, transition: { duration: 0.6, ease: 'easeInOut' } }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        backgroundColor: '#0a0a0a',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'all',
        overflow: 'hidden',
      }}
    >
      {/* Noise grain overlay */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.04,
          backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/></filter><rect width='300' height='300' filter='url(%23n)'/></svg>")`,
          pointerEvents: 'none',
        }}
      />

      {/* Radial glow behind text */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.8, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          width: '600px',
          height: '260px',
          borderRadius: '50%',
          background:
            'radial-gradient(ellipse, rgba(192,57,43,0.2) 0%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
        }}
      />

      {/* Phase 1: Horizontal line draw */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.55, ease: EASE, delay: 0.1 }}
        style={{
          width: '140px',
          height: '1px',
          backgroundColor: 'rgba(232, 224, 212, 0.2)',
          transformOrigin: 'left center',
          marginBottom: '28px',
          boxShadow: '0 0 8px rgba(192, 57, 43, 0.3)',
        }}
      />

      {/* Phase 2: Letters — blur-in stagger */}
      <div style={{ display: 'flex', gap: '0.05em' }}>
        {LETTERS.map((letter, i) => (
          <div key={i} style={{ overflow: 'hidden', lineHeight: 1 }}>
            <motion.span
              initial={{ y: '80%', opacity: 0, filter: 'blur(10px)' }}
              animate={{ y: '0%', opacity: 1, filter: 'blur(0px)' }}
              exit={{
                y: '-80%',
                opacity: 0,
                filter: 'blur(6px)',
                skewX: '6deg',
                transition: {
                  duration: 0.35,
                  ease: 'easeIn',
                  delay: i * 0.04,
                },
              }}
              transition={{
                duration: 0.65,
                ease: EASE,
                delay: 0.45 + i * 0.09,
                filter: { duration: 0.5, delay: 0.55 + i * 0.09 },
              }}
              style={{
                display: 'inline-block',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 'clamp(4.5rem, 11vw, 8rem)',
                color: '#e8e0d4',
                letterSpacing: '-0.02em',
                lineHeight: 1,
              }}
            >
              {letter}
            </motion.span>
          </div>
        ))}
      </div>

      {/* Phase 3: Pulse scale + bottom line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.4, ease: EASE, delay: 1.1 }}
        style={{
          width: '40px',
          height: '1px',
          backgroundColor: 'rgba(232, 224, 212, 0.12)',
          transformOrigin: 'left center',
          marginTop: '24px',
        }}
      />
    </motion.div>
  )
}