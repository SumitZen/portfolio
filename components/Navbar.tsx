'use client'

import { useState, useEffect, useRef } from 'react'
import { useScroll, motion, AnimatePresence } from 'framer-motion'
import { Disc, ChevronDown, Volume2 } from 'lucide-react'
import Link from 'next/link'

const PLAYLIST = [
  { title: 'Golden Brown', artist: 'The Stranglers', src: '/songs/golden_brown.mp3', poster: '/songs/golden_brown.jpeg' },
  { title: 'I Love You So', artist: 'The Walters', src: '/songs/love_you_so.mp3', poster: '/songs/love_you_so.jpeg' },
  { title: 'The Night We Met', artist: 'Lord Huron', src: '/songs/the_night_we_met.mp3', poster: '/songs/the_night_we_met.jpg' },
]

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
  const [currentSongIndex, setCurrentSongIndex] = useState(0)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [volume, setVolume] = useState(0.5)

  // Initialize random song on mount
  useEffect(() => {
    setCurrentSongIndex(Math.floor(Math.random() * PLAYLIST.length))
  }, [])

  // Sync volume state to audio element
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

  // Browser Autoplay Policy Workaround: Play on first user interaction (scroll, click, keydown)
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.play().catch(() => {
          // Ignore if the browser still strictly denies it
        })
      }
      // Remove listeners after the first successful or attempted interaction
      window.removeEventListener('click', handleFirstInteraction)
      window.removeEventListener('scroll', handleFirstInteraction)
      window.removeEventListener('keydown', handleFirstInteraction)
    }

    // Bind listeners
    window.addEventListener('click', handleFirstInteraction)
    window.addEventListener('scroll', handleFirstInteraction)
    window.addEventListener('keydown', handleFirstInteraction)

    return () => {
      window.removeEventListener('click', handleFirstInteraction)
      window.removeEventListener('scroll', handleFirstInteraction)
      window.removeEventListener('keydown', handleFirstInteraction)
    }
  }, [])

  const toggleMusic = () => {
    if (!audioRef.current) return
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  const selectSong = (index: number) => {
    setCurrentSongIndex(index)
    setIsDrawerOpen(false)
    setIsPlaying(true)
    setTimeout(() => {
      audioRef.current?.play()
    }, 50)
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
          {/* ── Music Player ── */}
          <div className="flex items-center border-l border-[rgba(255,255,255,0.08)] pl-6 ml-2 relative">
            
            <div className="flex items-center gap-3">
              {/* Spinning Record / Avatar */}
              <button 
                onClick={toggleMusic}
                className="relative w-8 h-8 flex items-center justify-center rounded-full bg-[#0a0a0a] border border-[rgba(255,255,255,0.1)] hover:border-[rgba(192,57,43,0.4)] transition-colors shadow-inner overflow-hidden cursor-pointer outline-none"
              >
                <div className="absolute inset-1 rounded-full border border-[rgba(255,255,255,0.05)] pointer-events-none z-20" />
                
                <motion.div
                  animate={{ rotate: isPlaying ? 360 : 0 }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                  className="w-full h-full flex items-center justify-center"
                >
                  <img src={PLAYLIST[currentSongIndex].poster} alt="Cover" className="w-full h-full object-cover opacity-80" />
                  <div className="absolute w-2 h-2 rounded-full bg-[#111] border border-[#333] z-10" />
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
              </button>

              {/* Scrolling Text & Drawer Toggle */}
              <button 
                className="flex flex-col items-start overflow-hidden w-[80px] cursor-pointer outline-none group"
                onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              >
                <div className="flex items-center gap-1 w-full">
                  <span className={`font-mono text-[7px] tracking-widest leading-tight transition-colors ${isPlaying ? 'text-[#c0392b]' : 'text-[#4a4540]'}`}>
                    {isPlaying ? 'NOW PLAYING' : 'MUSIC OFF'}
                  </span>
                  <ChevronDown className={`w-2.5 h-2.5 text-[#8a8078] group-hover:text-[#c0392b] transition-transform duration-300 ${isDrawerOpen ? 'rotate-180' : ''}`} />
                </div>
                <div className="relative w-full h-[12px] overflow-hidden mt-0.5 mask-image-[linear-gradient(to_right,black_80%,transparent_100%)]">
                  <motion.div
                    animate={isPlaying ? { x: [0, -100] } : { x: 0 }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                    className="absolute whitespace-nowrap font-mono text-[9px] text-[#8a8078] tracking-wider"
                  >
                    {PLAYLIST[currentSongIndex].title} • {PLAYLIST[currentSongIndex].artist} • {PLAYLIST[currentSongIndex].title} • {PLAYLIST[currentSongIndex].artist} • 
                  </motion.div>
                </div>
              </button>
            </div>

            <audio 
              ref={audioRef} 
              autoPlay 
              loop 
              src={PLAYLIST[currentSongIndex].src} 
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />

            {/* Dropdown Drawer */}
            <AnimatePresence>
              {isDrawerOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-[130%] right-0 w-[240px] bg-[rgba(10,10,10,0.95)] backdrop-blur-xl border border-[rgba(255,255,255,0.1)] rounded-[12px] p-3 shadow-[0_20px_40px_rgba(0,0,0,0.5)] flex flex-col gap-3"
                >
                  <div className="flex items-center justify-between px-2 text-[0.65rem] font-mono text-[#8a8078] tracking-widest uppercase">
                    <span>Playlist</span>
                  </div>
                  
                  <div className="flex flex-col gap-1">
                    {PLAYLIST.map((song, idx) => (
                      <button
                        key={idx}
                        onClick={() => selectSong(idx)}
                        className={`flex items-center gap-3 p-2 rounded-[8px] transition-all duration-300 hover:bg-[rgba(255,255,255,0.05)] ${currentSongIndex === idx ? 'bg-[rgba(192,57,43,0.1)]' : ''}`}
                      >
                        <img src={song.poster} alt={song.title} className="w-8 h-8 rounded-[4px] object-cover" />
                        <div className="flex flex-col items-start overflow-hidden">
                          <span className={`font-mono text-[0.7rem] truncate w-full text-left ${currentSongIndex === idx ? 'text-[#c0392b] font-bold' : 'text-[#e8e0d4]'}`}>{song.title}</span>
                          <span className="font-mono text-[0.6rem] text-[#8a8078] truncate w-full text-left">{song.artist}</span>
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Volume Control */}
                  <div className="flex items-center gap-3 px-2 py-2 mt-1 border-t border-[rgba(255,255,255,0.05)]">
                    <Volume2 className="w-4 h-4 text-[#8a8078]" />
                    <input 
                      type="range" 
                      min="0" 
                      max="1" 
                      step="0.05"
                      value={volume}
                      onChange={(e) => setVolume(parseFloat(e.target.value))}
                      className="w-full h-1 bg-[rgba(255,255,255,0.1)] rounded-full appearance-none outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-2.5 [&::-webkit-slider-thumb]:h-2.5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#c0392b] cursor-pointer"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </nav>
  )
}