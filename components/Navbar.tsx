'use client'

import { useState, useEffect } from 'react'
import { useScroll } from 'framer-motion'
import Link from 'next/link'

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#work' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)
  const [active, setActive] = useState<string>('#about')

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      setIsScrolled(latest > 60)

      const sections = ['#about', '#work', '#contact']
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
          ? 'bg-[rgba(10,9,7,0.92)] backdrop-blur-[20px] saturate-[180%] border-b border-[rgba(255,255,255,0.06)] shadow-[0_4px_30px_rgba(0,0,0,0.3)] py-[14px]'
          : 'bg-transparent border-none py-[20px]'
      }`}
    >
      <div className="mx-auto flex items-center justify-between max-w-[1200px] px-[48px]">
        <Link href="#" className="relative inline-block">
          <div
            className="text-[#e8e0d4] font-display font-[700] text-[1.6rem] leading-[1] transition-all duration-300 hover:text-shadow"
            style={{ textShadow: '0 0 0 rgba(0,0,0,0)' }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLElement).style.textShadow = '0 0 20px rgba(192,57,43,0.4)'
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLElement).style.textShadow = '0 0 0 rgba(0,0,0,0)'
            }}
          >
            <span>S</span>
            <span className="text-[#c0392b] text-[1.8rem] leading-[0] align-top ml-[0.05rem]">.</span>
          </div>
          <span className="block font-jp text-[#4a4540] text-[0.5rem] tracking-[0.2em] mt-[-2px]">スミット</span>
        </Link>

        <div className="flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = active === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`inline-flex items-center ${
                  isActive ? 'text-[#e8e0d4]' : 'text-[#6a6058]'
                } font-mono font-medium text-[0.78rem] tracking-[0.1em] uppercase transition-colors duration-200 hover:text-[#e8e0d4]`}
                onClick={() => setActive(item.href)}
              >
                {isActive && <span className="mr-2 w-[1px] h-[14px] bg-[#c0392b] inline-block align-middle" />}
                {item.name}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}