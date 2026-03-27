'use client'

import { useEffect, useRef, useState } from 'react'

type CursorState = 'default' | 'link' | 'project' | 'text'

interface Ripple {
  id: number
  x: number
  y: number
}

const RING_LERP = 0.12
const RING_SIZE_DEFAULT = 36
const RING_SIZE_LINK = 60
const RING_SIZE_PROJECT = 0 // ring hidden, label takes over

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>(0)

  // Raw mouse position (updated instantly)
  const mouseX = useRef(0)
  const mouseY = useRef(0)

  // Ring lagged position
  const ringX = useRef(0)
  const ringY = useRef(0)

  // Label lagged position (slightly more lag for float feel)
  const labelX = useRef(0)
  const labelY = useRef(0)

  const [state, setState] = useState<CursorState>('default')
  const [ripples, setRipples] = useState<Ripple[]>([])
  const rippleCounter = useRef(0)

  useEffect(() => {
    const isTouchDevice =
      window.matchMedia('(hover: none)').matches || 'ontouchstart' in window
    if (isTouchDevice) return

    // Hide native cursor globally
    document.documentElement.style.cursor = 'none'
    document.documentElement.classList.add('custom-cursor-active')

    /* ── helpers ── */
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    const getTargetState = (el: Element | null): CursorState => {
      if (!el) return 'default'
      const textInput = el.closest('input, textarea, [contenteditable]')
      if (textInput) return 'text'
      // Check anchor/button first so inner links aren't swallowed by project cards
      const linkTarget = el.closest('a, button, [role="button"], [data-cursor="link"]')
      const projectCard = el.closest('[data-cursor="project"]')
      // If both match, the more specific (deepest) ancestor wins
      if (linkTarget && projectCard) {
        return linkTarget.contains(projectCard) ? 'project' : 'link'
      }
      if (linkTarget) return 'link'
      if (projectCard) return 'project'
      return 'default'
    }

    /* ── mouse move ── */
    const onMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX
      mouseY.current = e.clientY

      // Spotlight on hero
      document.documentElement.style.setProperty('--cx', `${e.clientX}px`)
      document.documentElement.style.setProperty('--cy', `${e.clientY}px`)

      const next = getTargetState(e.target as Element)
      setState(next)

      // Text cursor: restore native
      document.documentElement.style.cursor =
        next === 'text' ? 'text' : 'none'
    }

    /* ── click ripple ── */
    const onMouseDown = (e: MouseEvent) => {
      const id = rippleCounter.current++
      setRipples((prev) => [...prev, { id, x: e.clientX, y: e.clientY }])
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id))
      }, 600)
    }

    /* ── RAF loop ── */
    const animate = () => {
      const dot = dotRef.current
      const ring = ringRef.current
      const label = labelRef.current

      if (dot) {
        dot.style.transform = `translate(${mouseX.current}px, ${mouseY.current}px)`
      }

      if (ring) {
        ringX.current = lerp(ringX.current, mouseX.current, RING_LERP)
        ringY.current = lerp(ringY.current, mouseY.current, RING_LERP)
        ring.style.transform = `translate(${ringX.current}px, ${ringY.current}px)`
      }

      if (label) {
        labelX.current = lerp(labelX.current, mouseX.current, RING_LERP * 0.85)
        labelY.current = lerp(labelY.current, mouseY.current, RING_LERP * 0.85)
        label.style.transform = `translate(${labelX.current}px, ${labelY.current}px) rotate(-5deg)`
      }

      rafRef.current = requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mousedown', onMouseDown)
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mousedown', onMouseDown)
      cancelAnimationFrame(rafRef.current)
      document.documentElement.style.cursor = ''
      document.documentElement.classList.remove('custom-cursor-active')
    }
  }, [])

  const isLink = state === 'link'
  const isProject = state === 'project'
  const isText = state === 'text'

  return (
    <>
      {/* ── Inner dot ── */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="fixed top-0 left-0 w-[6px] h-[6px] rounded-full z-[100001] pointer-events-none -ml-[3px] -mt-[3px] transition-[opacity,background-color] duration-200"
        style={{
          backgroundColor: isLink ? 'transparent' : 'var(--accent)',
          opacity: isText || isProject ? 0 : 1,
          willChange: 'transform',
        }}
      />

      {/* ── Outer ring ── */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className="fixed top-0 left-0 rounded-full z-[100000] pointer-events-none transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          width: isLink ? '60px' : isProject ? '0px' : '32px',
          height: isLink ? '60px' : isProject ? '0px' : '32px',
          marginLeft: isLink ? '-30px' : isProject ? '0px' : '-16px',
          marginTop: isLink ? '-30px' : isProject ? '0px' : '-16px',
          border: isLink
            ? '1px solid var(--accent)'
            : '1px solid rgba(255, 255, 255, 0.15)',
          backgroundColor: isLink
            ? 'rgba(232, 93, 63, 0.05)'
            : 'transparent',
          opacity: isText ? 0 : 1,
          willChange: 'transform',
        }}
      />

      {/* ── Project label ── */}
      <div
        ref={labelRef}
        aria-hidden="true"
        className="fixed top-0 left-0 z-[100002] pointer-events-none -ml-[30px] -mt-[15px] transition-opacity duration-300"
        style={{
          opacity: isProject ? 1 : 0,
          willChange: 'transform',
        }}
      >
        <span className="inline-block px-4 py-2 bg-[var(--text-primary)] text-[var(--bg)] font-mono text-[9px] font-bold tracking-[0.3em] rounded-full whitespace-nowrap uppercase shadow-2xl">
          VIEW ↗
        </span>
      </div>

      {/* ── Click ripples ── */}
      {ripples.map((r) => (
        <div
          key={r.id}
          aria-hidden="true"
          className="fixed pointer-events-none z-[99999]"
          style={{ top: r.y, left: r.x }}
        >
          <div className="absolute w-2 h-2 -ml-1 -mt-1 rounded-full border border-[rgba(232,93,63,0.5)] animate-cursor-ripple" />
        </div>
      ))}

      <style jsx global>{`
        @keyframes cursor-ripple {
          from { transform: scale(1); opacity: 1; }
          to   { transform: scale(8); opacity: 0; }
        }
        .animate-cursor-ripple {
          animation: cursor-ripple 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        html.custom-cursor-active,
        html.custom-cursor-active *,
        html.custom-cursor-active *::before,
        html.custom-cursor-active *::after {
          cursor: none !important;
        }
      `}</style>
    </>
  )
}