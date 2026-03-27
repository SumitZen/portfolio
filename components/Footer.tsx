'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative bg-[var(--bg)] border-t border-[rgba(255,255,255,0.05)] pt-20 pb-10 overflow-hidden">
      {/* Marquee Section */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.1)] to-transparent" />
      
      <div className="max-w-6xl mx-auto px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          <div className="md:col-span-5">
            <Link href="/" className="flex flex-col mb-8">
              <span className="text-[var(--text-primary)] font-display font-bold text-2xl leading-none tracking-tight uppercase">
                SUMIT<span className="text-[var(--accent)]">.</span>
              </span>
              <span className="font-jp text-[var(--text-secondary)] text-[10px] tracking-[0.2em] mt-2 uppercase">
                スミット / CREATIVE
              </span>
            </Link>
            <p className="text-[var(--text-secondary)] font-body text-[15px] leading-relaxed max-w-xs mb-8">
              A digital craftsman focused on building high-performance, aesthetically pleasing experiences for the modern web.
            </p>
            <div className="flex items-center gap-6">
              <span className="font-mono text-[10px] tracking-[0.2em] text-[var(--text-primary)] uppercase">Location</span>
              <span className="text-[var(--text-secondary)] font-body text-sm">Bhopal, India (UTC+5:30)</span>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-mono text-[10px] tracking-[0.3em] text-[var(--text-primary)] uppercase mb-8">Navigate</h4>
            <ul className="space-y-4">
              {['About', 'Work', 'Experience', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase()}`} className="text-[var(--text-secondary)] hover:text-[var(--accent)] font-body text-[14px] transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-mono text-[10px] tracking-[0.3em] text-[var(--text-primary)] uppercase mb-8">Connect</h4>
            <ul className="space-y-4">
              {['GitHub', 'LinkedIn', 'Instagram', 'YouTube'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-body text-[14px] transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-mono text-[10px] tracking-[0.3em] text-[var(--text-primary)] uppercase mb-8">Current Status</h4>
            <div className="bg-[var(--surface)] border border-[rgba(255,255,255,0.03)] rounded-[12px] p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full animate-pulse" />
                <span className="font-mono text-[9px] tracking-[0.1em] text-[var(--text-primary)] uppercase">Available for Hire</span>
              </div>
              <p className="text-[var(--text-secondary)] text-[12px] leading-relaxed">
                Open for interesting projects and partnerships starting April 2026.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-[rgba(255,255,255,0.05)] gap-6">
          <p className="font-mono text-[10px] tracking-[0.2em] text-[var(--text-secondary)] uppercase">
            © 2026 SUMIT ZEN / ALL RIGHTS RESERVED
          </p>
          <p className="font-mono text-[10px] tracking-[0.2em] text-[var(--text-secondary)] uppercase">
            DESIGNED WITH <span className="text-[var(--accent)]">INTENTION</span>.
          </p>
        </div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[var(--accent)] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />
    </footer>
  )
}