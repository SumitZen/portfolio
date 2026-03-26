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

    /* ── helpers ── */
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    const getTargetState = (el: Element | null): CursorState => {
      if (!el) return 'default'
      // Walk up DOM for matching selector
      const target = el.closest(
        'a, button, [role="button"], [data-cursor="link"]'
      )
      const projectCard = el.closest('[data-cursor="project"]')
      const textInput = el.closest('input, textarea, [contenteditable]')
      if (textInput) return 'text'
      if (projectCard) return 'project'
      if (target) return 'link'
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
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '7px',
          height: '7px',
          borderRadius: '50%',
          backgroundColor: isLink ? 'transparent' : '#e8e0d4',
          pointerEvents: 'none',
          zIndex: 100001,
          marginLeft: '-3.5px',
          marginTop: '-3.5px',
          opacity: isText || isProject ? 0 : 1,
          transition: 'opacity 0.2s ease, background-color 0.15s ease',
          willChange: 'transform',
        }}
      />

      {/* ── Outer ring ── */}
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: isLink ? `${RING_SIZE_LINK}px` : isProject ? '0px' : `${RING_SIZE_DEFAULT}px`,
          height: isLink ? `${RING_SIZE_LINK}px` : isProject ? '0px' : `${RING_SIZE_DEFAULT}px`,
          marginLeft: isLink ? `-${RING_SIZE_LINK / 2}px` : isProject ? '0px' : `-${RING_SIZE_DEFAULT / 2}px`,
          marginTop: isLink ? `-${RING_SIZE_LINK / 2}px` : isProject ? '0px' : `-${RING_SIZE_DEFAULT / 2}px`,
          borderRadius: '50%',
          border: isLink
            ? '1px solid rgba(192, 57, 43, 0.7)'
            : '1px solid rgba(232, 224, 212, 0.35)',
          backgroundColor: isLink
            ? 'rgba(192, 57, 43, 0.1)'
            : 'transparent',
          pointerEvents: 'none',
          zIndex: 100000,
          opacity: isText ? 0 : 1,
          transition:
            'width 0.25s cubic-bezier(0.22,1,0.36,1), height 0.25s cubic-bezier(0.22,1,0.36,1), margin 0.25s cubic-bezier(0.22,1,0.36,1), background-color 0.2s ease, border-color 0.2s ease, opacity 0.2s ease',
          willChange: 'transform',
        }}
      />

      {/* ── Project label ── */}
      <div
        ref={labelRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          marginLeft: '-36px',
          marginTop: '-18px',
          pointerEvents: 'none',
          zIndex: 100002,
          opacity: isProject ? 1 : 0,
          transition: 'opacity 0.2s ease',
          willChange: 'transform',
        }}
      >
        <span
          style={{
            display: 'inline-block',
            padding: '8px 14px',
            backgroundColor: '#e8e0d4',
            color: '#0a0a0a',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            fontWeight: 500,
            letterSpacing: '0.12em',
            borderRadius: '100px',
            whiteSpace: 'nowrap',
          }}
        >
          VIEW ↗
        </span>
      </div>

      {/* ── Click ripples ── */}
      {ripples.map((r) => (
        <div
          key={r.id}
          aria-hidden="true"
          style={{
            position: 'fixed',
            top: r.y,
            left: r.x,
            pointerEvents: 'none',
            zIndex: 99999,
          }}
        >
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                width: '8px',
                height: '8px',
                marginLeft: '-4px',
                marginTop: '-4px',
                borderRadius: '50%',
                border: '1px solid rgba(232, 224, 212, 0.5)',
                animation: `cursorRipple 0.55s cubic-bezier(0,0.5,0.5,1) ${i * 80}ms forwards`,
              }}
            />
          ))}
        </div>
      ))}

      {/* Ripple keyframes injected once */}
      <style>{`
        @keyframes cursorRipple {
          from { transform: scale(1); opacity: 1; }
          to   { transform: scale(6); opacity: 0; }
        }
      `}</style>
    </>
  )
}