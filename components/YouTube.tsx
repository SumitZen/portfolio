'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Play } from 'lucide-react'

export default function YouTube() {
  return (
    <section id="youtube" className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-12">
        <motion.div
          className="bg-[var(--surface)] border border-[rgba(255,255,255,0.04)] rounded-[24px] p-12 lg:p-20 overflow-hidden relative group"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2260%22 height=%2260%22><path d=%22M30 0L60 30L30 60L0 30Z%22 fill=%22none%22 stroke=%22white%22 stroke-width=%220.5%22/></svg>')] bg-repeat" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <span className="font-jp text-[var(--accent)] text-[10px] tracking-[0.3em] uppercase mb-6 block">
                放送 / CONTENT CREATION
              </span>
              <h2 className="text-[var(--text-primary)] font-display font-bold text-[clamp(2rem,4vw,3rem)] leading-tight mb-8 tracking-tight">
                Documenting the <span className="italic font-light">Process</span>.
              </h2>
              <p className="text-[var(--text-secondary)] font-body text-lg leading-relaxed mb-10 max-w-md">
                I share my journey as a developer through high-fidelity tech content. From deep dives into architecture to building minimal UIs in real-time.
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-4 bg-[var(--text-primary)] text-[var(--bg)] px-8 py-4 rounded-[8px] font-bold text-[12px] tracking-widest hover:bg-[var(--accent)] hover:text-white transition-all duration-300 uppercase"
              >
                Subscribe to Channel ↗
              </Link>
            </div>
            
            <div className="relative group/video">
              <div className="relative aspect-video bg-[var(--bg)] border border-[rgba(255,255,255,0.05)] rounded-[16px] overflow-hidden flex items-center justify-center shadow-2xl">
                {/* Simulated Thumbnail */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#050505] opacity-60" />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22><rect width=%22100%22 height=%22100%22 fill=%22none%22 stroke=%22white%22 stroke-width=%220.2%22 stroke-opacity=%220.1%22/></svg>')] opacity-20" />
                
                <motion.div 
                  className="w-20 h-20 bg-[var(--accent)] rounded-full flex items-center justify-center z-10 shadow-[0_0_40px_rgba(232,93,63,0.3)] group-hover/video:scale-110 transition-transform duration-500"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className="w-8 h-8 text-white fill-current ml-1" />
                </motion.div>
                
                {/* Visual Decorative Overlay */}
                <div className="absolute top-4 left-4 font-mono text-[8px] text-[var(--text-secondary)] opacity-40 uppercase tracking-[0.2em]">
                  Live Stream / 001
                </div>
              </div>
              
              {/* Japanese Decorative Label */}
              <div className="absolute -bottom-6 -right-4 font-jp text-[var(--text-secondary)] text-[10px] tracking-[0.4em] opacity-20 vertical-rl hidden lg:block">
                最新動画
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}