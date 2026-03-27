'use client'

import { useState, useEffect, useCallback } from 'react'
import { LazyMotion, domAnimation, AnimatePresence } from 'framer-motion'
import Loader from '../components/Loader'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import AICreations from '../components/AICreations'
import YouTube from '../components/YouTube'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'
import Cursor from '../components/Cursor'

// How long the loader runs before it starts its exit animation
const LOADER_ACTIVE_MS = 2000
// Hard fallback — loader is force-removed even if animation hangs
const LOADER_FALLBACK_MS = 3500

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [heroVisible, setHeroVisible] = useState(false)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    const duration = prefersReducedMotion ? 0 : LOADER_ACTIVE_MS

    const timer = setTimeout(() => {
      setLoading(false)
    }, duration)

    const fallback = setTimeout(() => {
      setLoading(false)
    }, LOADER_FALLBACK_MS)

    return () => {
      clearTimeout(timer)
      clearTimeout(fallback)
    }
  }, [])

  // Called when loader's exit animation fully completes
  const handleLoaderExited = useCallback(() => {
    console.log('Loader finished')
    setHeroVisible(true)
  }, [])

  return (
    <LazyMotion features={domAnimation}>
      {/* Site renders immediately underneath — no remount gap */}
      <Navbar />
      <Cursor />
      <main>
        <Hero visible={heroVisible} />
        <About />
        <div className="ink-divider" />
        <Skills />
        <div className="ink-divider" />
        <Projects />
        <div className="ink-divider" />
        <AICreations />
        <div className="ink-divider" />
        <YouTube />
        <div className="ink-divider" />
        <Contact />
      </main>
      <Footer />
      <BackToTop />

      {/* Loader overlays, then exits */}
      <AnimatePresence onExitComplete={handleLoaderExited}>
        {loading && <Loader key="loader" />}
      </AnimatePresence>
    </LazyMotion>
  )
}