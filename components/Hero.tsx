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
    <section className="relative h-dvh overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#0c0b09]" />

      {/* Hero top gradient for nav readability */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[rgba(0,0,0,0.4)] to-transparent pointer-events-none" />

      {/* Ink wash */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-transparent via-[rgba(0,0,0,0.3)] to-[rgba(0,0,0,0.5)] rounded-full blur-3xl" />
      </div>

      {/* Ambient warm glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(192,57,43,0.05)_0%,transparent_70%)] blur-[80px] animate-ambientPulse" />
      </div>

      {/* Spotlight */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            'radial-gradient(500px circle at var(--cx, 50%) var(--cy, 50%), rgba(192,57,43,0.06) 0%, transparent 70%)',
          transition: '--cx 0.3s ease, --cy 0.3s ease',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">

        {/* Japanese subtitle — top */}
        <motion.div
          className="text-[#4a4540] font-jp mb-8 block"
          style={{ fontSize: '0.65rem', letterSpacing: '0.2em' }}
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.1 }}
        >
          自己紹介
        </motion.div>

        {/* Main name — letter reveal */}
        <div className="mb-4">
          <h1 className="text-[#e8e0d4] font-display font-bold text-[clamp(7rem,16vw,14rem)] whitespace-nowrap -tracking-[0.02em] leading-[0.9]">
            {['S', 'U', 'M', 'I', 'T'].map((letter, index) => (
              <span
                key={index}
                className="inline-block overflow-hidden align-bottom"
              >
                <motion.span
                  className="inline-block"
                  initial={{ y: '110%' }}
                  animate={visible ? { y: '0%' } : { y: '110%' }}
                  transition={{
                    duration: 0.9,
                    ease: EASE_OUT,
                    delay: 0.05 + index * 0.07,
                  }}
                >
                  {letter}
                </motion.span>
              </span>
            ))}
          </h1>
        </div>

        {/* Japanese name — bottom */}
        <motion.div
          className="text-[#4a4540] font-mono mb-8"
          style={{ fontSize: '1.1rem', letterSpacing: '0.25em' }}
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.5 }}
        >
          スミット
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="text-[#8a8078] font-body mb-12"
          style={{ fontSize: '0.9rem', letterSpacing: '0.06em' }}
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.65 }}
        >
          CS Student · Web Developer · Android Dev · Content Creator
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex space-x-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.8 }}
        >
          <Link
            href="#work"
            className="bg-[#c0392b] text-[#e8e0d4] px-7 py-3 border-none font-medium tracking-[0.08em] hover:bg-[#a93226] transition-all duration-200 hover:-translate-y-0.5"
            style={{ fontSize: '0.85rem', borderRadius: '0.5rem' }}
          >
            View Work →
          </Link>
          <Link
            href="#contact"
            className="bg-transparent border border-[rgba(232,224,212,0.2)] text-[#8a8078] px-7 py-3 font-medium tracking-[0.08em] hover:border-[rgba(232,224,212,0.5)] hover:text-[#e8e0d4] transition-all duration-200"
            style={{ fontSize: '0.85rem', borderRadius: '0.5rem' }}
          >
            Get in Touch
          </Link>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
          initial={{ opacity: 0 }}
          animate={visible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
        >
          <p
            className="text-[#4a4540] font-mono uppercase mb-2"
            style={{ fontSize: '0.65rem', letterSpacing: '0.15em' }}
          >
            Scroll to explore
          </p>
          <div className="w-pxh-4 bg-[#4a4540] mx-auto animate-bounce" />
        </motion.div>
      </div>
    </section>
  )
}