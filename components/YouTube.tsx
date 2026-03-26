'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Play } from 'lucide-react'

export default function YouTube() {
  return (
    <section id="youtube" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="bg-[#141210] border border-[rgba(255,255,255,0.05)] rounded-lg p-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[#4a4540] font-jp text-0.65rem letter-spacing-0.2em mb-4 block">
                発信
              </div>
              <h2 className="text-[#e8e0d4] font-display font-semibold italic text-2.5rem mb-6">
                Building in Public
              </h2>
              <p className="text-[#8a8078] font-body line-height-1.7 mb-8">
                I share what I build — the process, the failures, and the wins. Tech content and dev builds on YouTube.
              </p>
              <Link
                href="#"
                className="inline-flex items-center bg-[#c0392b] text-[#e8e0d4] px-6 py-3 rounded-0.5 font-medium text-0.85rem hover:bg-[#a93226] transition-colors duration-200"
              >
                Subscribe ↗
              </Link>
            </div>
            <div className="relative">
              <div className="bg-[#0c0b09] border border-[rgba(255,255,255,0.1)] rounded-lg aspect-video flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a2e] to-[#250d40] opacity-50" />
                <div className="w-16 h-16 bg-[#c0392b] rounded-full flex items-center justify-center z-10">
                  <Play className="w-6 h-6 text-[#e8e0d4] ml-1" />
                </div>
              </div>
              <div className="text-[#4a4540] font-mono text-0.6rem letter-spacing-0.15em uppercase mt-3 text-center">
                最新動画
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}