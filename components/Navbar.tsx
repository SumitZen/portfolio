'use client'

import { useState, useEffect, useRef } from 'react'
import { useScroll, motion } from 'framer-motion'
import { Disc } from 'lucide-react'
import Link from 'next/link'

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#work' },
  { name: 'Art', href: '#ai-creations' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)
  const [active, setActive] = useState<string>('#about')

  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const toggleMusic = () => {
    if (!audioRef.current) return
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      setIsScrolled(latest > 60)

      const sections = ['#about', '#work', '#ai-creations', '#contact']
      let current = '#about'
      sections.forEach((id) => {
        const el = document.querySelector(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 110) current = id
        }
      })
      setActive(current)
    })

    return () => unsubscribe()
  }, [scrollY])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] w-full transition-all duration-400 ${
        isScrolled
          ? 'bg-[rgba(14,14,14,0.8)] backdrop-blur-xl border-b border-[rgba(255,255,255,0.05)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto flex items-center justify-between max-w-6xl px-12">
        <Link href="#" className="flex flex-col">
          <span className="text-[var(--text-primary)] font-display font-bold text-xl leading-none tracking-tight uppercase">
            SUMIT<span className="text-[var(--accent)]">.</span>
          </span>
          <span className="font-jp text-[var(--text-secondary)] text-[10px] tracking-[0.2em] mt-1 uppercase">
            スミット / CREATIVE
          </span>
        </Link>

        <div className="flex items-center gap-10">
          {navItems.map((item) => {
            const isActive = active === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative font-mono text-[0.75rem] tracking-[0.18em] uppercase transition-colors duration-300 ${
                  isActive ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
                onClick={() => setActive(item.href)}
              >
                {item.name}
                {isActive && (
                  <motion.div
                    layoutId="nav-dot"
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#c0392b]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            )
          })}

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[0.75rem] tracking-[0.18em] uppercase px-4 py-2 border border-[rgba(192,57,43,0.4)] text-[#c0392b] rounded-full hover:bg-[rgba(192,57,43,0.08)] transition-all duration-300"
          >
            Résumé
          </a>

          {/* ── Music Player ── */}
          <div className="flex items-center border-l border-[rgba(255,255,255,0.08)] pl-6 ml-2">
            <button 
              onClick={toggleMusic}
              className="flex items-center gap-3 group outline-none"
            >
              {/* Spinning Record */}
              <div className="relative w-7 h-7 flex items-center justify-center rounded-full bg-[#0a0a0a] border border-[rgba(255,255,255,0.1)] group-hover:border-[rgba(192,57,43,0.4)] transition-colors shadow-inner overflow-hidden">
                {/* Grooves */}
                <div className="absolute inset-1 rounded-full border border-[rgba(255,255,255,0.05)] pointer-events-none" />
                <div className="absolute inset-2 rounded-full border border-[rgba(255,255,255,0.02)] pointer-events-none" />
                
                <motion.div
                  animate={{ rotate: isPlaying ? 360 : 0 }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                  className="w-full h-full flex items-center justify-center text-[#c0392b]"
                >
                  <Disc className="w-8 h-8 opacity-20 absolute" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#c0392b] shadow-[0_0_8px_rgba(192,57,43,0.8)] z-10" />
                </motion.div>

                {/* Tonearm needle */}
                <motion.div 
                  initial={{ rotate: -25 }}
                  animate={{ rotate: isPlaying ? 15 : -25 }}
                  transition={{ type: 'spring', stiffness: 100 }}
                  className="absolute -top-1 -right-0.5 origin-[center_2px] w-[2px] h-[12px] bg-gradient-to-b from-[#8a8078] to-[#4a4540] rounded-full z-20 shadow-md"
                >
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1.5 bg-[#d4c8b8] rounded-sm" />
                </motion.div>
              </div>

              {/* Scrolling Text */}
              <div className="flex flex-col items-start overflow-hidden w-[70px] cursor-pointer">
                <span className={`font-mono text-[7px] tracking-widest leading-tight transition-colors ${isPlaying ? 'text-[#c0392b]' : 'text-[#4a4540]'}`}>
                  {isPlaying ? 'NOW PLAYING' : 'MUSIC OFF'}
                </span>
                <div className="relative w-full h-[12px] overflow-hidden mt-0.5 mask-image-[linear-gradient(to_right,black_80%,transparent_100%)]">
                  <motion.div
                    animate={isPlaying ? { x: [0, -100] } : { x: 0 }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                    className="absolute whitespace-nowrap font-mono text-[9px] text-[#8a8078] tracking-wider"
                  >
                    Your Track Here • Your Track Here • 
                  </motion.div>
                </div>
              </div>
            </button>
            <audio ref={audioRef} loop src="/audio/theme.mp3" />
          </div>

        </div>
      </div>
    </nav>
  )
}